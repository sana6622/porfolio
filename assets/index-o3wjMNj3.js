function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-g-Bcye2x.js","assets/index-CSN1MJny.js","assets/index-BT9dWlld.css","assets/index-DSvviTvR.js","assets/index-C5pw97bJ.js","assets/index-0RJ3aEA1.js","assets/index-DBIf8QOD.js","assets/index-BgACxIyt.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CSN1MJny.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-g-Bcye2x.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DSvviTvR.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-C5pw97bJ.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-0RJ3aEA1.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DBIf8QOD.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BgACxIyt.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
