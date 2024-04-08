function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-CEY5SYeZ.js","assets/index-Bt2A6JHW.js","assets/index-BT9dWlld.css","assets/ValueWithRandom-CxviKV9C.js","assets/AnimationOptions-CFdbp5QD.js","assets/OptionsColor-DCfJgLu8.js","assets/OptionsUtils-DN7Plk3s.js","assets/AnimatableColor-prfesw5m.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-Bt2A6JHW.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-CEY5SYeZ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
