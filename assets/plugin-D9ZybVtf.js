function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-CgPDeEPz.js","assets/index-DA-2uCM0.js","assets/index-BT9dWlld.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DA-2uCM0.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-CgPDeEPz.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
