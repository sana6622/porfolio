function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-T-aSUB5Y.js","assets/index-DivGBNeq.js","assets/index-BT9dWlld.css","assets/OptionsColor-BH_EAEJt.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DivGBNeq.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-T-aSUB5Y.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
