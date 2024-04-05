function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Z8L7ilNr.js","assets/index-DKFLplrH.js","assets/index-BT9dWlld.css","assets/index-DSCKONZ5.js","assets/index-DAaliMUX.js","assets/index-r2P8G3i7.js","assets/index-DbKOGA3U.js","assets/index-DXg9lJzk.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DKFLplrH.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Z8L7ilNr.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DSCKONZ5.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DAaliMUX.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-r2P8G3i7.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DbKOGA3U.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DXg9lJzk.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
