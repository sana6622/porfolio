function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-DQV-ikoe.js","assets/index-DzXJav25.js","assets/index-BT9dWlld.css","assets/ValueWithRandom-C9_C147n.js","assets/AnimationOptions-we7bhQgG.js","assets/OptionsColor-DcAxaRXH.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DzXJav25.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-DQV-ikoe.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
