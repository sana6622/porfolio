function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-CzfyTY6_.js","assets/index-vFYTaWMG.js","assets/index-BT9dWlld.css","assets/ValueWithRandom-BfmQzGfL.js","assets/AnimationOptions-CSobzNmt.js","assets/OptionsColor-CnGtZGuy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-vFYTaWMG.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-CzfyTY6_.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
