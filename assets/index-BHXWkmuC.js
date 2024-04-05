function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-elVG3-2-.js","assets/index-DKFLplrH.js","assets/index-BT9dWlld.css","assets/OptionsColor-DwgcCL8P.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DKFLplrH.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-elVG3-2-.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
