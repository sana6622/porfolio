function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-BXbTt-lK.js","assets/index-vFYTaWMG.js","assets/index-BT9dWlld.css","assets/OptionsColor-CnGtZGuy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-vFYTaWMG.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-BXbTt-lK.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
