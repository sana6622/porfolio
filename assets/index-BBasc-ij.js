function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-TBEZUCGu.js","assets/index-DG7xVc1E.js","assets/index-BT9dWlld.css","assets/ValueWithRandom-BQmtnbs0.js","assets/AnimationOptions-hLaEThmJ.js","assets/OptionsColor-DedhmODe.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DG7xVc1E.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-TBEZUCGu.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
