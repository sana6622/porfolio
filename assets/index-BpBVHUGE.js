function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Pusher-ZbxR9paN.js","assets/ExternalInteractorBase-CIi3zRdK.js","assets/index-CXpWA_7N.js","assets/index-BQ9Wko1R.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{u as n,_ as s}from"./index-CXpWA_7N.js";class o{constructor(){this.default=!0,this.groups=[],this.quantity=4}load(t){if(!t)return;t.default!==void 0&&(this.default=t.default),t.groups!==void 0&&(this.groups=t.groups.map(u=>u)),this.groups.length||(this.default=!0);const e=t.quantity;e!==void 0&&(this.quantity=n(e))}}async function a(i,t=!0){await i.addInteractor("externalPush",async e=>{const{Pusher:u}=await s(()=>import("./Pusher-ZbxR9paN.js"),__vite__mapDeps([0,1,2,3]));return new u(e)},t)}export{o as Push,a as loadExternalPushInteraction};
