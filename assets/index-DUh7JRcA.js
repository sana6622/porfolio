function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-D5_2-_bW.js","assets/index-CSN1MJny.js","assets/index-BT9dWlld.css","assets/OptionsColor-DI057EPf.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CSN1MJny.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-D5_2-_bW.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
