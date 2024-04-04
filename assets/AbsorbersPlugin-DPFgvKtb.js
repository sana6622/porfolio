function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Absorbers-MfpVLymq.js","assets/index-0yMAd5hB.js","assets/index-BT9dWlld.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a5 as d,s as l,_ as h,e as u,aa as m,a}from"./index-0yMAd5hB.js";import{V as c}from"./ValueWithRandom-ByfGq9JA.js";import{O as f}from"./OptionsColor-BA4NVIAK.js";class y{constructor(){this.radius=0,this.mass=0}load(i){i&&(i.mass!==void 0&&(this.mass=i.mass),i.radius!==void 0&&(this.radius=i.radius))}}class p extends c{constructor(){super(),this.density=5,this.value=50,this.limit=new y}load(i){i&&(super.load(i),i.density!==void 0&&(this.density=i.density),d(i.limit)?this.limit.radius=i.limit:this.limit.load(i.limit))}}class b{constructor(){this.color=new f,this.color.value="#000000",this.draggable=!1,this.opacity=1,this.destroy=!0,this.orbits=!1,this.size=new p}load(i){i!==void 0&&(i.color!==void 0&&(this.color=f.create(this.color,i.color)),i.draggable!==void 0&&(this.draggable=i.draggable),this.name=i.name,i.opacity!==void 0&&(this.opacity=i.opacity),i.position!==void 0&&(this.position={},i.position.x!==void 0&&(this.position.x=l(i.position.x)),i.position.y!==void 0&&(this.position.y=l(i.position.y))),i.size!==void 0&&this.size.load(i.size),i.destroy!==void 0&&(this.destroy=i.destroy),i.orbits!==void 0&&(this.orbits=i.orbits))}}class g{constructor(){this.id="absorbers"}async getPlugin(i){const{Absorbers:e}=await h(()=>import("./Absorbers-MfpVLymq.js"),__vite__mapDeps([0,1,2]));return new e(i)}loadOptions(i,e){var r,t;!this.needsPlugin(i)&&!this.needsPlugin(e)||(e!=null&&e.absorbers&&(i.absorbers=u(e.absorbers,s=>{const n=new b;return n.load(s),n})),i.interactivity.modes.absorbers=u((t=(r=e==null?void 0:e.interactivity)==null?void 0:r.modes)==null?void 0:t.absorbers,s=>{const n=new b;return n.load(s),n}))}needsPlugin(i){var r,t,s;if(!i)return!1;const e=i.absorbers;return m(e)?!!e.length:e?!0:!!((s=(t=(r=i.interactivity)==null?void 0:r.events)==null?void 0:t.onClick)!=null&&s.mode&&a("absorber",i.interactivity.events.onClick.mode))}}const P=Object.freeze(Object.defineProperty({__proto__:null,AbsorbersPlugin:g},Symbol.toStringTag,{value:"Module"}));export{b as A,P as a};
