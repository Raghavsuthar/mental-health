(function(root){
"use strict";
const THREE_URL="https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";
const CONTROLS_URL="https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/controls/OrbitControls.js";
async function loadThree(){const [THREE,controls]=await Promise.all([import(THREE_URL),import(CONTROLS_URL)]);return {THREE,OrbitControls:controls.OrbitControls};}
function visibleMeshesForPicking(meshes){return (Array.isArray(meshes)?meshes:[]).filter(mesh=>mesh&&mesh.visible!==false);}
function initBrainAtlas3D(options){
 const host=options&&options.host,regions=options&&options.regions,onSelect=options&&options.onSelect;
 if(!host||!Array.isArray(regions))return {destroy(){},selectRegion(){},resetView(){}};
 const doc=host.ownerDocument;
 const make=(tag,cls,label)=>{const n=doc.createElement(tag);if(cls)n.className=cls;if(label!==undefined)n.textContent=label;return n;};
 host.replaceChildren();
 const shell=make("div","atlas3d-shell");
 const stage=make("div","atlas3d-stage");
 const status=make("p","atlas3d-status","Loading interactive 3D model…");
 status.setAttribute("role","status");
 const toolbar=make("div","atlas3d-toolbar");
 const reset=make("button","atlas3d-control","Reset view");reset.type="button";
 const surface=make("button","atlas3d-control is-active","Surface");surface.type="button";surface.setAttribute("aria-pressed","true");
 const deep=make("button","atlas3d-control is-active","Deep structures");deep.type="button";deep.setAttribute("aria-pressed","true");
 toolbar.append(reset,surface,deep);
 const regionList=make("div","atlas3d-region-list");
 regionList.setAttribute("aria-label","Select a brain region");
 const disclaimer=make("p","atlas3d-disclaimer","Schematic 3D teaching model — not to scale; not for diagnosis, imaging interpretation or procedural planning.");
 shell.append(stage,status,toolbar,regionList,disclaimer);host.append(shell);
 let renderer=null,scene=null,camera=null,controls=null,frame=0,resizeObserver=null,resizeFallback=null,disposed=false,meshById=new Map(),pickMeshes=[],deepVisible=true,surfaceVisible=true,selectedId=null;
 const buttons=new Map();
 function select(region){
  selectedId=region.id;
  buttons.forEach((button,id)=>{button.setAttribute("aria-pressed",String(id===selectedId));});
  meshById.forEach((mesh,id)=>{const selected=id===selectedId;mesh.material.emissiveIntensity=selected ? 0.38 : 0.04;const scale=regions.find(r=>r.id===id).scale.map(v=>v*(selected?1.09:1));mesh.scale.set(...scale);if(mesh.userData.mirror)mesh.userData.mirror.scale.set(...scale);});
  status.textContent=region.label+": "+region.description;
  if(typeof onSelect==="function")onSelect(region);
 }
 regions.forEach(region=>{const b=make("button","atlas3d-region",region.label);b.type="button";b.setAttribute("aria-pressed","false");b.addEventListener("click",()=>select(region));buttons.set(region.id,b);regionList.append(b);});
 function fallback(message){
  if(disposed)return;
  stage.replaceChildren();
  stage.classList.add("is-fallback");
  const p=make("p","atlas3d-fallback",message||"Interactive 3D is unavailable in this browser. Use the region buttons and Brain Atlas chapters below.");
  stage.append(p);
  status.textContent="Text-based atlas remains available.";
 }
 const api={destroy(){disposed=true;if(frame)cancelAnimationFrame(frame);if(resizeObserver)resizeObserver.disconnect();if(resizeFallback)root.removeEventListener("resize",resizeFallback);if(controls)controls.dispose();if(renderer){renderer.dispose();renderer.domElement.remove();}host.replaceChildren();},selectRegion(id){const r=regions.find(x=>x.id===id);if(r)select(r);},resetView(){if(controls){camera.position.set(3.8,2.2,4.2);controls.target.set(0,0,0);controls.update();}}};
 (async()=>{
  try{
   const {THREE,OrbitControls}=await loadThree();
   if(disposed)return;
   const canvas=make("canvas","atlas3d-canvas");canvas.setAttribute("aria-label","Rotatable schematic 3D model of the human brain. Use region buttons below for keyboard selection.");
   renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true});
   renderer.setPixelRatio(Math.min(root.devicePixelRatio||1,1.5));
   renderer.setSize(Math.max(stage.clientWidth,280),380,false);
   renderer.outputColorSpace=THREE.SRGBColorSpace;
   scene=new THREE.Scene();scene.background=new THREE.Color("#f7f8f5");
   camera=new THREE.PerspectiveCamera(38,Math.max(stage.clientWidth,280)/380,.1,100);
   camera.position.set(3.8,2.2,4.2);
   scene.add(new THREE.HemisphereLight(0xffffff,0x789087,2));
   const key=new THREE.DirectionalLight(0xffffff,2.2);key.position.set(4,5,6);scene.add(key);
   const fill=new THREE.DirectionalLight(0xd8e8ff,1.1);fill.position.set(-4,1,-3);scene.add(fill);
   controls=new OrbitControls(camera,canvas);controls.enableDamping=true;controls.dampingFactor=.07;controls.minDistance=2.6;controls.maxDistance=8;controls.target.set(0,0,0);
   const shellGeometry=new THREE.SphereGeometry(1,48,36);
   const pos=shellGeometry.attributes.position;
   for(let i=0;i<pos.count;i++){const x=pos.getX(i),y=pos.getY(i),z=pos.getZ(i);const wave=1+.035*Math.sin(17*x+4*y)*Math.cos(15*z-3*y)+.018*Math.sin(23*z+8*x);pos.setXYZ(i,x*wave,y*wave,z*wave);}
   shellGeometry.computeVertexNormals();
   const baseMat=new THREE.MeshStandardMaterial({color:"#d8e2dc",roughness:.88,metalness:0.02});
   [-.38,.38].forEach(x=>{const base=new THREE.Mesh(shellGeometry,baseMat);base.scale.set(.58,.78,1.18);base.position.x=x;base.position.z=.03;scene.add(base);});
   const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();let pointerStart=null;
   regions.forEach(region=>{
    const geo=new THREE.SphereGeometry(1,32,24);
    const mat=new THREE.MeshStandardMaterial({color:region.color,roughness:.62,transparent:region.layer==="surface",opacity:region.layer==="surface"?.76:1,emissive:region.color,emissiveIntensity:.04,depthWrite:region.layer!=="surface"});
    const mesh=new THREE.Mesh(geo,mat);mesh.name=region.id;mesh.position.set(...region.position);mesh.scale.set(...region.scale);
    if(region.layer==="deep"){const mirror=mesh.clone();mirror.position.x=-region.position[0];scene.add(mirror);meshById.set(region.id,mesh);mesh.userData.mirror=mirror;pickMeshes.push(mirror);}
    else meshById.set(region.id,mesh);
    pickMeshes.push(mesh);scene.add(mesh);
   });
   canvas.addEventListener("pointerdown",event=>{pointerStart={x:event.clientX,y:event.clientY};});
   function pick(event){if(pointerStart&&Math.hypot(event.clientX-pointerStart.x,event.clientY-pointerStart.y)>6){pointerStart=null;return;}pointerStart=null;const rect=canvas.getBoundingClientRect();pointer.x=((event.clientX-rect.left)/rect.width)*2-1;pointer.y=-((event.clientY-rect.top)/rect.height)*2+1;raycaster.setFromCamera(pointer,camera);const hits=raycaster.intersectObjects(visibleMeshesForPicking(pickMeshes),false);if(hits.length){const r=regions.find(x=>x.id===hits[0].object.name);if(r)select(r);}}
   canvas.addEventListener("pointerup",pick);
   function resize(){const w=Math.max(stage.clientWidth,280),h=Math.max(Math.min(stage.clientWidth*.68,420),300);camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false);}
   if(typeof ResizeObserver!=="undefined"){resizeObserver=new ResizeObserver(resize);resizeObserver.observe(stage);}else {resizeFallback=resize;root.addEventListener("resize",resizeFallback);}
   reset.addEventListener("click",()=>api.resetView());
   surface.addEventListener("click",()=>{surfaceVisible=!surfaceVisible;surface.setAttribute("aria-pressed",String(surfaceVisible));surface.classList.toggle("is-active",surfaceVisible);regions.filter(r=>r.layer==="surface").forEach(r=>{const m=meshById.get(r.id);if(m)m.visible=surfaceVisible;});});
   deep.addEventListener("click",()=>{deepVisible=!deepVisible;deep.setAttribute("aria-pressed",String(deepVisible));deep.classList.toggle("is-active",deepVisible);regions.filter(r=>r.layer==="deep").forEach(r=>{const m=meshById.get(r.id);if(m)m.visible=deepVisible;if(m?.userData.mirror)m.userData.mirror.visible=deepVisible;});});
   stage.classList.remove("is-fallback");stage.replaceChildren(canvas);status.textContent="Drag to rotate · scroll or pinch to zoom · select a region or use the buttons below.";
   const reduced=root.matchMedia&&root.matchMedia("(prefers-reduced-motion: reduce)").matches;
   controls.addEventListener("change",()=>{if(reduced&&renderer)renderer.render(scene,camera);});
   function animate(){if(disposed)return;frame=requestAnimationFrame(animate);controls.update();renderer.render(scene,camera);}
   if(!reduced)animate();else renderer.render(scene,camera);
   resize();
  }catch(error){fallback("3D view could not load (WebGL or the model library may be unavailable). The text-based atlas and region buttons remain available.");}
 })();
 return api;
}
root.initBrainAtlas3D=initBrainAtlas3D;
if(typeof module!=="undefined"&&module.exports)module.exports={initBrainAtlas3D,visibleMeshesForPicking};
})(typeof window!=="undefined"?window:globalThis);
