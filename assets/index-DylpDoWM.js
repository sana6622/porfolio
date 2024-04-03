function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-BEEWsc5Y.js","assets/index-DivGBNeq.js","assets/index-BT9dWlld.css","assets/ValueWithRandom-CJN9tuZy.js","assets/AnimationOptions-CC6ts7R1.js","assets/OptionsColor-BH_EAEJt.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DivGBNeq.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-BEEWsc5Y.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
