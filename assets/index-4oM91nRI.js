function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-B785K1zO.js","assets/index-vFYTaWMG.js","assets/index-BT9dWlld.css","assets/index-U3uPh9Tn.js","assets/index-FsPfbARx.js","assets/index-XVjyzoJg.js","assets/index-D6COvvDk.js","assets/index-BQfy5oX6.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-vFYTaWMG.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-B785K1zO.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-U3uPh9Tn.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-FsPfbARx.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-XVjyzoJg.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-D6COvvDk.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BQfy5oX6.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
