function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CjdGtIvh.js","assets/index-DA-2uCM0.js","assets/index-BT9dWlld.css","assets/index-CD42MCXs.js","assets/index-BXznogx7.js","assets/index-CjN1zy63.js","assets/index-jOcj8l6X.js","assets/index-C0OBlOeS.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DA-2uCM0.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CjdGtIvh.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CD42MCXs.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BXznogx7.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CjN1zy63.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-jOcj8l6X.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-C0OBlOeS.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
