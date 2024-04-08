function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-zhuMXAzp.js","assets/index-DA-2uCM0.js","assets/index-BT9dWlld.css","assets/ValueWithRandom-B1gKKnS-.js","assets/AnimationOptions-CY66KoOm.js","assets/OptionsColor-ftcb2A9V.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DA-2uCM0.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-zhuMXAzp.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
