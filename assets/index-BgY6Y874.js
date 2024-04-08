function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Remover-CGiWKfPz.js","assets/ExternalInteractorBase-CIi3zRdK.js","assets/index-DA-2uCM0.js","assets/index-BT9dWlld.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{u as o,_ as r}from"./index-DA-2uCM0.js";class u{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=o(e))}}async function s(n,t=!0){await n.addInteractor("externalRemove",async e=>{const{Remover:a}=await r(()=>import("./Remover-CGiWKfPz.js"),__vite__mapDeps([0,1,2,3]));return new a(e)},t)}export{u as Remove,s as loadExternalRemoveInteraction};
