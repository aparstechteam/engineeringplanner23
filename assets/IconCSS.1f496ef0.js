import{a8 as m,bk as _,bP as f,y as c,o as I,c as d,aH as v,_ as x}from"./entry.e1ade90e.js";import{r as S}from"./index.b8fe2cb5.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){_(e=>({"40abd3f6":p.value}));const t=f(),o=u,l=c(()=>{var e,n;return(n=(e=t.nuxtIcon)==null?void 0:e.aliases)!=null&&n[o.name]?t.nuxtIcon.aliases[o.name]:o.name}),r=c(()=>S(l.value)),p=c(()=>{var s,a;const e=(a=(s=t.nuxtIcon)==null?void 0:s.iconifyApiOptions)==null?void 0:a.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${r.value.prefix}/${r.value.name}.svg')`}),i=c(()=>{var n,s,a;if(!o.size&&typeof((n=t.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((s=t.nuxtIcon)!=null&&s.size))return;const e=o.size||((a=t.nuxtIcon)==null?void 0:a.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(I(),d("span",{style:v({width:i.value,height:i.value})},null,4))}});const b=x(y,[["__scopeId","data-v-32c71317"]]);export{b as default};
