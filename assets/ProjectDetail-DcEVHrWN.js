import{h as j,N,p as P}from"./index-BX0ZLK-Q.js";import{b as I,c as s,f as _,g as t,t as o,F as r,r as d,k as v,w as C,h as b,o as i,j as m,n as w,m as L,v as D}from"./index-DzXJav25.js";const H={components:{RiKey2Line:j,NavbarComponent:N},data(){return{options:{background:{color:{}},fpsLimit:120,interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"}},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#6d6daa"},links:{color:"#6d6daa",distance:150,enable:!0,opacity:.5,width:1},move:{direction:"none",enable:!0,outModes:"bounce",random:!1,speed:4,straight:!1},number:{density:{enable:!0},value:80},opacity:{value:.5},shape:{type:"circle"},size:{value:{min:1,max:5}}},detectRetina:!0},projectData:P,id:0,data:"",idIndex:0}},mounted(){this.getProject()},methods:{getProject(){this.id=Number(this.$route.params.id),this.data=this.projectData.find(l=>l.id===this.id),this.idIndex=Number(this.projectData.findIndex(l=>l.id===this.id))},clickPrev(){this.idIndex>0&&(this.idIndex--,this.changePage(this.idIndex))},clickNext(){this.idIndex<this.projectData.length-1&&(this.idIndex++,this.changePage(this.idIndex))},changePage(l){const a=this.projectData[l].id;this.$router.push({path:`/project/${a}`})}},watch:{"$route.params.id"(l,a){l!==a&&this.getProject()}}},R={id:"projectDetail"},z={class:"particles"},G={key:0,class:"text-container"},T={class:"main-project"},V={class:"project-img"},B=["src"],K={class:"button-area"},F=["href"],S=["href"],q={class:"project-info"},E={class:"info-list"},M=t("p",{class:"list-title"},"作品類型:",-1),U={class:"list-describe"},A={class:"info-list"},J=t("p",{class:"list-title"},"製作時間:",-1),O={class:"list-describe"},Q={class:"list-title"},W={class:"list-describe"},X={class:"main-content"},Y=t("h3",null,"內容",-1),Z={key:0,class:"content-design"},$=t("p",null,"圖稿: ",-1),tt=["href"];function et(l,a,st,it,n,p){var g;const k=b("NavbarComponent"),f=b("vue-particles"),y=b("RiKey2Line"),x=b("router-link");return i(),s("div",R,[_(k),t("div",z,[_(f,{id:"tsparticles",class:"tsparticles",particlesLoaded:l.particlesLoaded,options:n.options},null,8,["particlesLoaded","options"])]),n.data?(i(),s("main",G,[t("div",null,[t("h1",null,o(n.data.title),1)]),t("div",T,[t("div",V,[t("img",{src:n.data.imgURL,alt:"專案圖片"},null,8,B),t("div",K,[t("a",{href:n.data.GitHubPage,target:"_blank",class:"btn btn-outline-primary btn-lg",type:"button"}," GitHub Page",8,F),t("a",{href:n.data.GitHub,target:"_blank",class:"btn btn-outline-primary btn-lg",type:"button"}," GitHub",8,S)])]),t("div",q,[t("div",E,[M,t("p",U,o(n.data.type)+o(n.data.category),1)]),t("div",A,[J,t("p",O,o(n.data.time),1)]),(i(!0),s(r,null,d((g=n.data)==null?void 0:g.skills,(e,u)=>(i(),s("div",{class:"info-list",key:`skill-${u}`},[t("p",Q,o(e.subTitle)+":",1),t("div",W,[t("ul",null,[(i(!0),s(r,null,d(e.skill,(h,c)=>(i(),s("li",{key:`skillItem-${c}`},o(h),1))),128))]),t("ul",null,[(i(!0),s(r,null,d(e.des,(h,c)=>(i(),s("li",{class:"indentation",key:`skilldes-${c}`},o(c+1)+". "+o(h),1))),128))])])]))),128))])]),t("div",X,[Y,t("ul",null,[(i(!0),s(r,null,d(n.data.contents,(e,u)=>(i(),s("li",{class:"content-list",key:`content-${u}`},[m(o(e.subTitle)+": ",1),t("ul",{class:w(["list-des",{indentation:e.des.length>1}])},[(i(!0),s(r,null,d(e.des,(h,c)=>(i(),s("li",{key:`content-${c}`},[L(_(y,{color:"gray",size:"14px"},null,512),[[D,e.des.length>1]]),m(" "+o(h),1)]))),128))],2)]))),128))]),n.data.design?(i(),s("div",Z,[$,t("ul",null,[(i(!0),s(r,null,d(n.data.design,(e,u)=>(i(),s("li",{key:`other-${u}`},[t("a",{href:e.link,target:"_blank"},o(e.subTitle),9,tt)]))),128))])])):v("",!0)])])):v("",!0),t("footer",null,[_(x,{to:"/",class:"btn btn-outline-info btn-lg"},{default:C(()=>[m("回首頁")]),_:1}),t("button",{class:"btn btn-warning btn-lg",onClick:a[0]||(a[0]=(...e)=>p.clickPrev&&p.clickPrev(...e))},"上一個"),t("button",{class:"btn btn-warning btn-lg",onClick:a[1]||(a[1]=(...e)=>p.clickNext&&p.clickNext(...e))},"下一個")])])}const lt=I(H,[["render",et]]);export{lt as default};
