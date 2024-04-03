function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-Bg7HYP5V.js","assets/index-DivGBNeq.js","assets/index-BT9dWlld.css","assets/ValueWithRandom-CJN9tuZy.js","assets/AnimationOptions-CC6ts7R1.js","assets/OptionsColor-BH_EAEJt.js","assets/OptionsUtils-XnsuFAur.js","assets/AnimatableColor-9MN9ZhHa.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DivGBNeq.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-Bg7HYP5V.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
