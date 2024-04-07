function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Buo8e2JA.js","assets/index-DzXJav25.js","assets/index-BT9dWlld.css","assets/index-BhkHYAOG.js","assets/index-CpDETOYO.js","assets/index-JActo3Tq.js","assets/index-CVq1Ik4Q.js","assets/index-DD4r4bVY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DzXJav25.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Buo8e2JA.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BhkHYAOG.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CpDETOYO.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-JActo3Tq.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CVq1Ik4Q.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DD4r4bVY.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
