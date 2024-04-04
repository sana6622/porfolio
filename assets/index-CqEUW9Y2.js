function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-BiO3x8T2.js","assets/index-0yMAd5hB.js","assets/index-BT9dWlld.css","assets/ValueWithRandom-ByfGq9JA.js","assets/AnimationOptions-Dma2ohtm.js","assets/OptionsColor-BA4NVIAK.js","assets/OptionsUtils-BrvbDlNe.js","assets/AnimatableColor-BEykHGuV.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-0yMAd5hB.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-BiO3x8T2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
