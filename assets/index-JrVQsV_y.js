function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-mZU0ClSv.js","assets/index-CSN1MJny.js","assets/index-BT9dWlld.css","assets/ValueWithRandom-LmqevdZL.js","assets/AnimationOptions-BrPG1fJB.js","assets/OptionsColor-DI057EPf.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CSN1MJny.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-mZU0ClSv.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
