import{s as r,k as l,a7 as f}from"./index-DivGBNeq.js";import{A as a}from"./AnimationOptions-CC6ts7R1.js";import{O as u}from"./OptionsColor-BH_EAEJt.js";class n extends a{constructor(){super(),this.offset=0,this.sync=!0}load(s){super.load(s),s&&s.offset!==void 0&&(this.offset=r(s.offset))}}class c{constructor(){this.h=new n,this.s=new n,this.l=new n}load(s){s&&(this.h.load(s.h),this.s.load(s.s),this.l.load(s.l))}}class e extends u{constructor(){super(),this.animation=new c}static create(s,i){const o=new e;return o.load(s),i!==void 0&&(l(i)||f(i)?o.load({value:i}):o.load(i)),o}load(s){if(super.load(s),!s)return;const i=s.animation;i!==void 0&&(i.enable!==void 0?this.animation.h.load(i):this.animation.load(s.animation))}}export{e as A};
