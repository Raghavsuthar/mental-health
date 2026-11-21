(function(root){
"use strict";
const regions = [
{id:"frontal-lobe",label:"Frontal lobe",layer:"surface",chapterId:null,description:"Anterior cerebral cortex involved in executive control, voluntary action, speech production and social behaviour.",color:"#d98c62",shape:"ellipsoid",position:[0,0.52,0.48],scale:[0.78,0.66,0.72]},
{id:"parietal-lobe",label:"Parietal lobe",layer:"surface",chapterId:null,description:"Dorsal posterior cortex integrating somatic sensation, spatial attention and multisensory body representation.",color:"#8fb69c",shape:"ellipsoid",position:[0,0.9,-0.28],scale:[0.78,0.48,0.62]},
{id:"temporal-lobe",label:"Temporal lobe",layer:"surface",chapterId:null,description:"Lateral inferior cerebral cortex supporting auditory processing, language comprehension and memory-related networks.",color:"#d8b46c",shape:"ellipsoid",position:[0,-0.12,-0.08],scale:[0.78,0.48,0.86]},
{id:"occipital-lobe",label:"Occipital lobe",layer:"surface",chapterId:null,description:"Posterior cerebral cortex, central to visual processing.",color:"#7899c3",shape:"ellipsoid",position:[0,0.42,-0.88],scale:[0.7,0.55,0.46]},
{id:"cerebellum",label:"Cerebellum",layer:"surface",chapterId:null,description:"Posteroinferior structure supporting coordination, balance, motor learning and cognitive-affective functions.",color:"#b28ab8",shape:"ellipsoid",position:[0,-0.8,-0.92],scale:[0.62,0.38,0.48]},
{id:"brainstem",label:"Brainstem",layer:"surface",chapterId:null,description:"Midbrain, pons and medulla; contains cranial nerve nuclei and vital arousal, autonomic and motor pathways.",color:"#c47f78",shape:"ellipsoid",position:[0,-0.62,-0.35],scale:[0.25,0.72,0.28]},
{id:"thalamus",label:"Mediodorsal thalamus",layer:"deep",chapterId:"mediodorsal-thalamus",description:"The mediodorsal thalamic nucleus participates in reciprocal circuits with prefrontal cortex and limbic networks; shown as a paired schematic marker.",color:"#e0b85b",shape:"ellipsoid",position:[0,0.05,0.05],scale:[0.36,0.27,0.32]},
{id:"hippocampus",label:"Hippocampus",layer:"deep",chapterId:"hippocampus",description:"Medial temporal allocortex essential for episodic memory formation and spatial navigation; shown as paired schematic structures.",color:"#64a99b",shape:"ellipsoid",position:[0.38,-0.25,-0.2],scale:[0.16,0.16,0.48]},
{id:"amygdala",label:"Amygdala",layer:"deep",chapterId:"amygdala",description:"Medial temporal nuclei involved in salience, threat learning and emotional-memory modulation; shown as paired markers.",color:"#d77b68",shape:"ellipsoid",position:[0.36,-0.12,0.12],scale:[0.17,0.17,0.18]},
{id:"caudate-nucleus",label:"Caudate nucleus (basal ganglia)",layer:"deep",chapterId:"caudate-nucleus",description:"The caudate is a dorsal striatal nucleus participating in associative and oculomotor cortico-striato-thalamo-cortical loops.",color:"#9b8ac4",shape:"ellipsoid",position:[0.28,0.22,0.18],scale:[0.3,0.2,0.28]}
];
if(typeof module!=="undefined"&&module.exports)module.exports=regions;
root.brainAtlas3DData=regions;
})(typeof window!=="undefined"?window:globalThis);
