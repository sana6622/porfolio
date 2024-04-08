function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-C6pWrj8b.js","assets/index-Bt2A6JHW.js","assets/index-BT9dWlld.css","assets/ValueWithRandom-CxviKV9C.js","assets/AnimationOptions-CFdbp5QD.js","assets/OptionsColor-DCfJgLu8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-Bt2A6JHW.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-C6pWrj8b.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
