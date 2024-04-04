function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-CvjNpdZ1.js","assets/index-0yMAd5hB.js","assets/index-BT9dWlld.css","assets/OptionsColor-BA4NVIAK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-0yMAd5hB.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-CvjNpdZ1.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
