function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-BhD73C2T.js","assets/index-DG7xVc1E.js","assets/index-BT9dWlld.css","assets/ValueWithRandom-BQmtnbs0.js","assets/AnimationOptions-hLaEThmJ.js","assets/OptionsColor-DedhmODe.js","assets/OptionsUtils-UbmzK0ZI.js","assets/AnimatableColor-B7tJyRJU.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DG7xVc1E.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-BhD73C2T.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
