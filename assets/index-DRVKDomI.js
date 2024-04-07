function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-CJlur69L.js","assets/index-CSN1MJny.js","assets/index-BT9dWlld.css","assets/ValueWithRandom-LmqevdZL.js","assets/AnimationOptions-BrPG1fJB.js","assets/OptionsColor-DI057EPf.js","assets/OptionsUtils-Qdl1UdSO.js","assets/AnimatableColor-AUR_N_xf.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CSN1MJny.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-CJlur69L.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
