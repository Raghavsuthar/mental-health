(function (root) {
  "use strict";
  const MODEL_BASE = "https://itayinbarr.github.io/brainproject/";
  const MODEL_URL = MODEL_BASE + "models/brain.glb";
  const MANIFEST_URL = MODEL_BASE + "models/manifest.json";
  const DRACO_URL = MODEL_BASE + "vendor/draco/";
  const SCRIPT_URLS = [
    "https://cdn.jsdelivr.net/npm/three@0.137.0/build/three.min.js",
    "https://cdn.jsdelivr.net/npm/three@0.137.0/examples/js/controls/OrbitControls.js",
    "https://cdn.jsdelivr.net/npm/three@0.137.0/examples/js/loaders/GLTFLoader.js",
    "https://cdn.jsdelivr.net/npm/three@0.137.0/examples/js/loaders/DRACOLoader.js"
  ];
  const PALETTE = {
    cortex:"#d6c7a7",white_matter:"#cbd7df",deep_grey:"#9874b9",diencephalon:"#718ac2",
    brainstem:"#d9a64b",cerebellum:"#d88454",ventricles:"#4db9bd",arteries:"#d95f68",
    veins_sinuses:"#587eb4",cranial_nerves:"#b9b44e",meninges_dura:"#b97aaf",tracts:"#4eaaa5"
  };
  function normalizeLabel(value) {
    return String(value||"").replace(/\\s*\\((?:left|right)\\)\\s*$/i,"")
      .replace(/\\s+(?:left|right)$/i,"").replace(/\\.(?:l|r)$/i,"")
      .toLowerCase().replace(/[^a-z0-9]+/g," ").trim();
  }
  function findAtlasMatch(data,label) {
    const target=normalizeLabel(label);
    if(!target||!data||!Array.isArray(data.systems))return null;
    for(const system of data.systems) for(const item of system.structures||[]) {
      const names=[item.name].concat(item.aliases||[]).map(normalizeLabel);
      if(names.includes(target))return item;
    }
    return null;
  }
  function indexManifestNodes(manifest) {
    if(!manifest||!Array.isArray(manifest.nodes))return [];
    return manifest.nodes.filter(n=>n&&n.id!==undefined&&n.label).map(n=>({
      id:n.id,label:String(n.label),category:String(n.category||"other"),side:String(n.side||"median"),
      region:String(n.region||""),ta2:Array.isArray(n.ta2)?n.ta2.map(String):[],source:String(n.source||"")
    }));
  }
  function loadScript(url) {
    return new Promise((resolve,reject)=>{
      const existing=Array.from(document.scripts).find(s=>s.src===url);
      if(existing&&existing.dataset.loaded==="true")return resolve();
      if(existing){existing.addEventListener("load",resolve,{once:true});existing.addEventListener("error",()=>reject(new Error("Could not load viewer library.")),{once:true});return;}
      const script=document.createElement("script");script.src=url;script.async=true;
      script.onload=()=>{script.dataset.loaded="true";resolve();};
      script.onerror=()=>{script.remove();reject(new Error("Could not load a 3D viewer library. Check your connection and retry."));};
      document.head.appendChild(script);
    });
  }
  function initBrainAtlas3D() {
    const host=document.getElementById("brainAtlas3D");
    if(!host||host.dataset.initialized==="true")return;
    host.dataset.initialized="true";
    const loadButton=host.querySelector("[data-3d-load]"),canvas=host.querySelector("canvas");
    const status=host.querySelector("[data-3d-status]"),search=host.querySelector("[data-3d-search]");
    const list=host.querySelector("[data-3d-list]"),details=host.querySelector("[data-3d-details]");
    const reset=host.querySelector("[data-3d-reset]");
    if(!loadButton||!canvas||!status||!list||!details)return;
    let scene,camera,renderer,controls,modelRoot,selectedMesh=null,selectedNodeId=null,dracoLoader=null,resizeBound=false,pointerDown=null,suppressClick=false;
    let manifestNodes=[],meshesById=new Map(),nodesById=new Map(),loaded=false,loading=false;
    const setStatus=(message,isError)=>{status.textContent=message;status.classList.toggle("is-error",Boolean(isError));};
    const make=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;};
    function showDetails(node) {
      details.replaceChildren();
      if(!node){details.append(make("p","brain-3d-muted","Select a structure in the model or the list to view its details."));return;}
      details.append(make("p","brain-3d-kicker",(node.category||"Anatomy").replace(/_/g," ").toUpperCase()));
      details.append(make("h3","",node.label+(node.side==="median"?"":" · "+node.side)));
      if(node.region)details.append(make("p","brain-3d-muted",node.region));
      if(node.ta2.length)details.append(make("p","brain-3d-path",node.ta2.join("  ›  ")));
      const chapter=findAtlasMatch(root.brainAtlasData,node.label);
      if(chapter){
        const button=make("button","brain-3d-chapter-link","Open full Brain Atlas chapter");button.type="button";
        button.addEventListener("click",()=>{if(typeof root.openBrainAtlasStructure==="function")root.openBrainAtlasStructure(chapter.id);else document.getElementById("brainAtlasApp")?.scrollIntoView({behavior:"smooth",block:"start"});});
        details.append(button);
      }else details.append(make("p","brain-3d-muted","A dedicated written chapter is not available for this structure yet. Use the text atlas search below for related topics."));
    }
    function highlight(mesh) {
      if(selectedMesh&&selectedMesh.material&&selectedMesh.userData._brain3dOriginalEmissive){
        selectedMesh.material.emissive.copy(selectedMesh.userData._brain3dOriginalEmissive);
        selectedMesh.material.emissiveIntensity=selectedMesh.userData._brain3dOriginalEmissiveIntensity;
      }
      selectedMesh=mesh||null;
      if(selectedMesh&&selectedMesh.material&&selectedMesh.material.emissive){
        if(!selectedMesh.userData._brain3dOriginalEmissive){
          selectedMesh.userData._brain3dOriginalEmissive=selectedMesh.material.emissive.clone();
          selectedMesh.userData._brain3dOriginalEmissiveIntensity=selectedMesh.material.emissiveIntensity;
        }
        selectedMesh.material.emissive.set("#f0b45e");selectedMesh.material.emissiveIntensity=0.85;
      }
    }
    function selectNode(node,shouldFocus) {
      if(!node)return;
      const meshes=meshesById.get(String(node.id))||[],mesh=meshes[0]||null;
      selectedNodeId=node.id;highlight(mesh);showDetails(node);
      list.querySelectorAll("button[data-node-id]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.nodeId===String(node.id))));
      if(shouldFocus&&mesh&&camera&&controls){
        const box=new root.THREE.Box3().setFromObject(mesh),sphere=box.getBoundingSphere(new root.THREE.Sphere());
        controls.target.copy(sphere.center);const d=Math.max(sphere.radius*4.5,1.8);
        camera.position.copy(sphere.center).add(new root.THREE.Vector3(d,d*0.45,d));controls.update();
      }
    }
    function renderList(query) {
      if(!manifestNodes.length)return;
      const q=normalizeLabel(query),matches=manifestNodes.filter(n=>!q||normalizeLabel([n.label,n.region,n.category,n.side,...n.ta2].join(" ")).includes(q));
      list.replaceChildren();list.append(make("p","brain-3d-list-count",matches.length+" structures"));
      matches.slice(0,120).forEach(node=>{
        const b=make("button","brain-3d-structure",node.label+(node.side==="median"?"":" · "+node.side));
        b.type="button";b.dataset.nodeId=String(node.id);b.setAttribute("aria-pressed",String(String(selectedNodeId)===String(node.id)));
        b.addEventListener("click",()=>selectNode(node,true));list.append(b);
      });
      if(matches.length>120)list.append(make("p","brain-3d-muted","Showing first 120 results. Refine your search to narrow the list."));
      if(!matches.length)list.append(make("p","brain-3d-muted","No structures match this search."));
    }
    function resize() {
      if(!renderer||!canvas.clientWidth||!canvas.clientHeight)return;
      camera.aspect=canvas.clientWidth/canvas.clientHeight;camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth,canvas.clientHeight,false);
    }
    function animate() {
      if(!renderer)return;
      root.requestAnimationFrame(animate);if(controls)controls.update();renderer.render(scene,camera);
    }
    function loadModel() {
      return Promise.all([
        fetch(MANIFEST_URL).then(r=>{if(!r.ok)throw new Error("Structure index could not be loaded.");return r.json();}),
        new Promise((resolve,reject)=>{
          dracoLoader=new root.THREE.DRACOLoader();dracoLoader.setDecoderPath(DRACO_URL);
          const loader=new root.THREE.GLTFLoader();loader.setDRACOLoader(dracoLoader);
          loader.load(MODEL_URL,resolve,event=>{
            if(event.total)setStatus("Loading anatomical model… "+Math.round(event.loaded/event.total*100)+"%");
            else setStatus("Loading anatomical model… "+Math.round(event.loaded/1048576)+" MB received");
          },reject);
        })
      ]).then(([manifest,gltf])=>{
        manifestNodes=indexManifestNodes(manifest);nodesById=new Map(manifestNodes.map(n=>[String(n.id),n]));modelRoot=gltf.scene;
        const T=root.THREE,coreBounds=new T.Box3();let hasCore=false;
        modelRoot.traverse(object=>{
          if(!object.isMesh)return;
          let metadata=object.userData||{},parent=object.parent;
          while(parent&&metadata.bx_id===undefined&&parent.userData){metadata=parent.userData;parent=parent.parent;}
          const id=metadata.bx_id;
          if(id!==undefined&&id!==null){const key=String(id);if(!meshesById.has(key))meshesById.set(key,[]);meshesById.get(key).push(object);}
          if(metadata.bx_core===1||metadata.bx_core===true){coreBounds.expandByObject(object);hasCore=true;}
          const color=PALETTE[metadata.bx_cat]||"#8FAF9F";
          object.material=new T.MeshStandardMaterial({color,roughness:0.82,metalness:0.02,emissive:color,emissiveIntensity:0.035});
          object.castShadow=false;object.receiveShadow=false;
        });
        const bounds=hasCore?coreBounds:new T.Box3().setFromObject(modelRoot);
        const center=bounds.getCenter(new T.Vector3()),sphere=bounds.getBoundingSphere(new T.Sphere());
        const specimen=new T.Group();specimen.add(modelRoot);modelRoot.position.sub(center);
        specimen.scale.setScalar(1.7/(sphere.radius||1));specimen.rotation.y=Math.PI;modelRoot=specimen;
        scene.add(modelRoot);
        controls.target.set(0,0,0);
        camera.position.set(1.7*2.8,1.7*1.1,1.7*3.2);
        camera.near=0.01;camera.far=100;camera.updateProjectionMatrix();controls.update();
        renderList(search?search.value:"");loaded=true;
        setStatus("Model loaded. Drag to rotate; scroll or pinch to zoom. Select any structure to explore it.");
        loadButton.hidden=true;
        if(dracoLoader){dracoLoader.dispose();dracoLoader=null;}
        canvas.focus();animate();
      });
    }
    async function start() {
      if(loading||loaded)return;loading=true;loadButton.disabled=true;setStatus("Preparing the 3D viewer…");
      try{
        const probe=document.createElement("canvas");
        const ctx=probe.getContext("webgl2");
        if(!ctx)throw new Error("WebGL 2 is unavailable in this browser. The text Brain Atlas remains available below.");
        for(const url of SCRIPT_URLS)await loadScript(url);
        const T=root.THREE;if(!T||!T.GLTFLoader||!T.DRACOLoader||!T.OrbitControls)throw new Error("A required 3D viewer component did not load.");
        renderer=new T.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:"low-power"});
        renderer.setPixelRatio(Math.min(root.devicePixelRatio||1,1.5));renderer.setClearColor(0x000000,0);
        scene=new T.Scene();camera=new T.PerspectiveCamera(38,1,0.01,1000);
        scene.add(new T.HemisphereLight(0xffffff,0x65736f,1.7));
        const key=new T.DirectionalLight(0xffffff,2.1);key.position.set(5,8,7);scene.add(key);
        const fill=new T.DirectionalLight(0x9ac7c1,0.9);fill.position.set(-6,2,-4);scene.add(fill);
        controls=new T.OrbitControls(camera,canvas);controls.enableDamping=true;controls.dampingFactor=0.07;
        controls.minDistance=0.8;controls.maxDistance=50;controls.enablePan=true;
        resize();root.addEventListener("resize",resize);resizeBound=true;await loadModel();
      }catch(error){
        setStatus(error&&error.message?error.message:"The 3D brain could not be loaded. Please retry or use the text atlas below.",true);
        loadButton.disabled=false;loadButton.textContent="Retry loading 3D brain";
        if(controls){controls.dispose();controls=null;}
        if(resizeBound){root.removeEventListener("resize",resize);resizeBound=false;}
        if(dracoLoader){dracoLoader.dispose();dracoLoader=null;}
        if(renderer){renderer.dispose();renderer=null;}
      }finally{loading=false;}
    }
    loadButton.addEventListener("click",start);
    if(search)search.addEventListener("input",()=>renderList(search.value));
    if(reset)reset.addEventListener("click",()=>{
      if(!camera||!controls||!modelRoot)return;
      controls.target.set(0,0,0);camera.position.set(1.7*2.8,1.7*1.1,1.7*3.2);
      controls.update();selectedNodeId=null;highlight(null);showDetails(null);
    });
    canvas.addEventListener("pointerdown",event=>{pointerDown={x:event.clientX,y:event.clientY};});
    canvas.addEventListener("pointerup",event=>{
      if(pointerDown&&Math.hypot(event.clientX-pointerDown.x,event.clientY-pointerDown.y)>6){
        suppressClick=true;root.setTimeout(()=>{suppressClick=false;},0);
      }
      pointerDown=null;
    });
    canvas.addEventListener("click",event=>{
      if(suppressClick||!loaded||!camera||!modelRoot)return;
      const rect=canvas.getBoundingClientRect(),pointer=new root.THREE.Vector2(((event.clientX-rect.left)/rect.width)*2-1,-((event.clientY-rect.top)/rect.height)*2+1);
      const raycaster=new root.THREE.Raycaster();raycaster.setFromCamera(pointer,camera);
      const hits=raycaster.intersectObject(modelRoot,true);if(!hits.length)return;
      let object=hits[0].object,id=object.userData&&object.userData.bx_id;
      while(object&&id===undefined){object=object.parent;id=object&&object.userData&&object.userData.bx_id;}
      if(id!==undefined&&nodesById.has(String(id)))selectNode(nodesById.get(String(id)),false);
    });
  }
  root.normalizeBrainStructureLabel=normalizeLabel;
  root.findBrainAtlasChapterFor3D=findAtlasMatch;
  root.indexBrain3DManifest=indexManifestNodes;
  if(typeof module!=="undefined"&&module.exports)module.exports={normalizeLabel,findAtlasMatch,indexManifestNodes};
  if(typeof document!=="undefined")document.addEventListener("DOMContentLoaded",initBrainAtlas3D);
})(typeof window!=="undefined"?window:globalThis);
