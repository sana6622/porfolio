function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-B0Tg6mvY.js","assets/index-Bt2A6JHW.js","assets/index-BT9dWlld.css","assets/OptionsColor-DCfJgLu8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-Bt2A6JHW.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-B0Tg6mvY.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
