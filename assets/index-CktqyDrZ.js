function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-BIFqSrTR.js","assets/index-DKFLplrH.js","assets/index-BT9dWlld.css","assets/ValueWithRandom-DjHvVv8G.js","assets/AnimationOptions-BVWq9Cpg.js","assets/OptionsColor-DwgcCL8P.js","assets/OptionsUtils-OsKPTp8F.js","assets/AnimatableColor-B_kGkqmb.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DKFLplrH.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-BIFqSrTR.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
