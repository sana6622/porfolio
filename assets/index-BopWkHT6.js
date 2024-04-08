function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-SG59bdGi.js","assets/index-Bt2A6JHW.js","assets/index-BT9dWlld.css","assets/index-DTaVbutZ.js","assets/index-C9D7iknm.js","assets/index-CLYdHTmD.js","assets/index-50tdZ754.js","assets/index-DuelL_Vf.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Bt2A6JHW.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-SG59bdGi.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DTaVbutZ.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-C9D7iknm.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CLYdHTmD.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-50tdZ754.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DuelL_Vf.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
