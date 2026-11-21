(function(root){
function normalise(value){return String(value||"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim();}
function searchStructures(data,query,systemId){
 const q=normalise(query);
 if(!data||!Array.isArray(data.systems))return [];
 const all=[];
 data.systems.forEach(system=>(system.structures||[]).forEach(item=>all.push({...item,systemId:system.id,systemTitle:system.title})));
 return all.filter(item=>(!systemId||systemId==="all"||item.systemId===systemId)&&(!q||normalise([item.name,...(item.aliases||[]),item.location,item.anatomy,item.connections,...(item.functions||[]),...(item.lesionEffects||[]),...(item.clinicalSyndromes||[]),...(item.psychiatryRelevance||[])].join(" ")).includes(q)));
}
function getStructureById(data,id){for(const system of (data&&data.systems)||[])for(const item of system.structures||[])if(item.id===id)return {...item,systemId:system.id,systemTitle:system.title};return null;}
function initBrainAtlas(){
 const host=document.getElementById("brainAtlasApp"),data=root.brainAtlasData;
 if(!host||!data)return;
 let activeSystem="all",activeId=data.systems[0]?.structures[0]?.id||null,query="";
 const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;};
 const section=(parent,title,items)=>{if(!items||!items.length)return;const h=el("h3","atlas-subheading",title);parent.append(h);const ul=el("ul","atlas-list");items.forEach(x=>ul.append(el("li","",x)));parent.append(ul);};
 function render(){
  host.replaceChildren();
  const toolbar=el("div","atlas-toolbar");
  const search=el("input","atlas-search");search.type="search";search.placeholder="Search structure, function, symptom or syndrome";search.setAttribute("aria-label","Search brain anatomy");search.value=query;search.addEventListener("input",()=>{query=search.value;const matches=searchStructures(data,query,activeSystem);if(!matches.some(x=>x.id===activeId))activeId=matches[0]?.id||null;render();const next=host.querySelector(".atlas-search");next?.focus();next?.setSelectionRange(query.length,query.length);});
  const filter=el("select","atlas-filter");filter.setAttribute("aria-label","Filter anatomical system");
  [["all","All systems"],...data.systems.map(x=>[x.id,x.title])].forEach(([v,t])=>{const o=el("option","",t);o.value=v;o.selected=v===activeSystem;filter.append(o);});
  filter.addEventListener("change",()=>{activeSystem=filter.value;const results=searchStructures(data,query,activeSystem);if(!results.some(x=>x.id===activeId))activeId=results[0]?.id||null;render();});
  toolbar.append(search,filter);host.append(toolbar);
  const layout=el("div","atlas-layout"),nav=el("aside","atlas-chapters");nav.setAttribute("aria-label","Brain atlas chapters");
  const results=searchStructures(data,query,activeSystem);
  if(query||activeSystem!=="all"){
   const count=el("p","atlas-count",results.length+" structure(s) found");nav.append(count);
   results.forEach(item=>{const b=el("button","atlas-chapter",item.name);b.type="button";b.setAttribute("aria-pressed",String(item.id===activeId));b.addEventListener("click",()=>{activeId=item.id;render();});nav.append(b);});
  }else{
   data.systems.forEach(system=>{const h=el("h3","atlas-system-title",system.title);nav.append(h);system.structures.forEach(item=>{const b=el("button","atlas-chapter",item.name);b.type="button";b.setAttribute("aria-pressed",String(item.id===activeId));b.addEventListener("click",()=>{activeId=item.id;render();});nav.append(b);});});
  }
  const reader=el("article","atlas-reader");
  const item=getStructureById(data,activeId);
  if(!item||!results.some(x=>x.id===item.id)){reader.append(el("h2","", "No matching structure"));reader.append(el("p","", "Try another term or choose a different anatomical system."));}
  else{
   reader.append(el("p","atlas-kicker",item.systemTitle+" · English learning content"));
   reader.append(el("h2","atlas-title",item.name));
   reader.append(el("p","atlas-lead",item.location));
   section(reader,"Anatomy and subdivisions",[item.anatomy,...(item.subdivisions||[])]);
   section(reader,"Connections",[item.connections]);
   section(reader,"Normal functions",item.functions);
   section(reader,"Lesion effects and clinical syndromes",[...(item.lesionEffects||[]),...(item.clinicalSyndromes||[])]);
   section(reader,"Psychiatry relevance",item.psychiatryRelevance);
   section(reader,"Clinical example",[item.clinicalExample]);
   section(reader,"DNB / examination pearls",item.examPearls);
   if(item.mcqs?.length){const q=item.mcqs[0],box=el("section","atlas-mcq");box.append(el("h3","atlas-subheading","Check your understanding"),el("p","atlas-question",q.stem));const choices=el("div","atlas-options");const feedback=el("p","atlas-feedback","Select an answer to see the explanation.");q.options.forEach((option,i)=>{const b=el("button","atlas-option",String.fromCharCode(65+i)+". "+option);b.type="button";b.addEventListener("click",()=>{choices.querySelectorAll("button").forEach(x=>x.disabled=true);b.classList.add(i===q.correctIndex?"is-correct":"is-incorrect");feedback.textContent=(i===q.correctIndex?"Correct. ":"Not quite. ")+q.explanation;});choices.append(b);});box.append(choices,feedback);reader.append(box);}
   if(item.references?.length){const refs=el("div","atlas-references");refs.append(el("h3","atlas-subheading","Further reading"));item.references.forEach(r=>{const p=el("p","atlas-reference");const a=el("a","",r.title+" — "+r.authors+" ("+r.year+")");a.href=r.url;a.target="_blank";a.rel="noopener noreferrer";p.append(a);refs.append(p);});reader.append(refs);}
  }
  layout.append(nav,reader);host.append(layout);
 }
 render();
}
root.searchStructures=searchStructures;root.getStructureById=getStructureById;root.initBrainAtlas=initBrainAtlas;
if(typeof module!=="undefined"&&module.exports)module.exports={searchStructures,getStructureById};
if(typeof document!=="undefined")document.addEventListener("DOMContentLoaded",initBrainAtlas);
})(typeof window!=="undefined"?window:globalThis);
