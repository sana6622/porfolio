function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-rgw9aIkx.js","assets/index-DG7xVc1E.js","assets/index-BT9dWlld.css","assets/index-DYSYdWYU.js","assets/index-DEnxihT4.js","assets/index-DlbtT6v6.js","assets/index-DdKQdOhE.js","assets/index-DA5eG5H0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DG7xVc1E.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-rgw9aIkx.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DYSYdWYU.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DEnxihT4.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DlbtT6v6.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DdKQdOhE.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DA5eG5H0.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
