function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-5Hep1St8.js","assets/index-0yMAd5hB.js","assets/index-BT9dWlld.css","assets/index-BiX97GHa.js","assets/index-dG29-dOn.js","assets/index-DfHKv7lD.js","assets/index-4WqI9NBS.js","assets/index-uMyT9hWI.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-0yMAd5hB.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-5Hep1St8.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BiX97GHa.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-dG29-dOn.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DfHKv7lD.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-4WqI9NBS.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-uMyT9hWI.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
