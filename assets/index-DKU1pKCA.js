function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-DPFgvKtb.js","assets/index-0yMAd5hB.js","assets/index-BT9dWlld.css","assets/ValueWithRandom-ByfGq9JA.js","assets/AnimationOptions-Dma2ohtm.js","assets/OptionsColor-BA4NVIAK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-0yMAd5hB.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-DPFgvKtb.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
