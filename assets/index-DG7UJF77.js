function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-D3jroHQm.js","assets/index-DKFLplrH.js","assets/index-BT9dWlld.css","assets/ValueWithRandom-DjHvVv8G.js","assets/AnimationOptions-BVWq9Cpg.js","assets/OptionsColor-DwgcCL8P.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DKFLplrH.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-D3jroHQm.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
