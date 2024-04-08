function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-CDCCWsnM.js","assets/index-DA-2uCM0.js","assets/index-BT9dWlld.css","assets/ValueWithRandom-B1gKKnS-.js","assets/AnimationOptions-CY66KoOm.js","assets/OptionsColor-ftcb2A9V.js","assets/OptionsUtils-Bu_H0lsV.js","assets/AnimatableColor-CYJJ1Pdw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DA-2uCM0.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-CDCCWsnM.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
