function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DNMsrTVt.js","assets/index-DivGBNeq.js","assets/index-BT9dWlld.css","assets/index-BmkoYXYW.js","assets/index-BbwbaU2d.js","assets/index-BL8ZyLx4.js","assets/index-Ciev8Tr8.js","assets/index-DxUiKYcn.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DivGBNeq.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DNMsrTVt.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BmkoYXYW.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BbwbaU2d.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BL8ZyLx4.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Ciev8Tr8.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DxUiKYcn.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
