/*!
 * vue-showdown - Use showdown as a vue component
 *
 * @version v4.2.0
 * @link https://vue-showdown.js.org
 * @license MIT
 * @copyright 2018-2023 meteorlxy
 */
import e from"showdown";export{default as showdown}from"showdown";import{defineComponent as t,computed as o,Text as n,h as r}from"vue";const a=t({name:"VueShowdown",props:{markdown:{type:String,required:!1,default:null},tag:{type:String,required:!1,default:"div"},flavor:{type:String,required:!1,default:null},options:{type:Object,required:!1,default:()=>({})},extensions:{type:Array,required:!1,default:null},vueTemplate:{type:Boolean,required:!1,default:!1},vueTemplateComponents:{type:Object,required:!1,default:()=>({})},vueTemplateData:{type:Object,required:!1,default:()=>({})}},setup(t,{slots:a}){const l=o((()=>{const o=new e.Converter({extensions:t.extensions??void 0});return null!==t.flavor&&o.setFlavor(t.flavor),Object.entries(t.options).forEach((([e,t])=>{o.setOption(e,t)})),o})),u=o((()=>{if(null!==t.markdown)return t.markdown;const e=a.default?.()[0];return e?.type===n?e.children:""})),p=o((()=>l.value.makeHtml(u.value)));return()=>t.vueTemplate?r({components:t.vueTemplateComponents,setup:()=>t.vueTemplateData,template:`<${t.tag}>${p.value}</${t.tag}>`}):r(t.tag,{innerHTML:p.value})}}),l={install(t,{flavor:o=null,options:n={}}={}){null!==o&&e.setFlavor(o),Object.entries(n).forEach((([t,o])=>{e.setOption(t,o)})),t.component("VueShowdown",a)}};export{a as VueShowdown,l as VueShowdownPlugin,l as default};
