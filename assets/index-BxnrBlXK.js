function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-YaEjqjH_.js","assets/index-DzXJav25.js","assets/index-BT9dWlld.css","assets/ValueWithRandom-C9_C147n.js","assets/AnimationOptions-we7bhQgG.js","assets/OptionsColor-DcAxaRXH.js","assets/OptionsUtils-DFR9a4Qy.js","assets/AnimatableColor-DnPY-Ivs.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DzXJav25.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-YaEjqjH_.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
