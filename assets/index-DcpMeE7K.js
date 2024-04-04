function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-Djcj5lLE.js","assets/index-vFYTaWMG.js","assets/index-BT9dWlld.css","assets/ValueWithRandom-BfmQzGfL.js","assets/AnimationOptions-CSobzNmt.js","assets/OptionsColor-CnGtZGuy.js","assets/OptionsUtils-CyNWPiHx.js","assets/AnimatableColor-DDC1gKqd.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-vFYTaWMG.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-Djcj5lLE.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
