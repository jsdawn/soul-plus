import{_ as e,i as a}from"./index.6b879c78.js";import{p as s,a as t,r as l,c as o,h as r,d as c,e as i,n as p,o as m,m as n}from"./vendor.4a04b472.js";s("data-v-f1575a8c");const u={class:"page-overlay"},d=r("h3",{class:"comp-title"},"Dialog 对话框",-1),f={class:"comp-wrap"},v=n("提示对话框"),y=n("对话框（无标题）"),h=r("h3",{class:"comp-title"},"异步关闭",-1),w={class:"comp-wrap"},_=n("异步关闭"),g=r("h3",{class:"comp-title"},"组件调用",-1),C={class:"comp-wrap"},k=n("组件调用");t();const b={setup(s){const t=l(!1);l(!1);const n=e=>new Promise((a=>{if("confirm"!==e)return a(!0);setTimeout((()=>{a(!0)}),2e3)})),b=()=>{a.alert({title:"Alert",message:"显示对话框"})},A=()=>{a.alert({message:"无标题对话框无标题对话框无标题对话框无标题对话框"})},j=()=>{a.alert({title:"Alert",message:"显示对话框",beforeClose:n})};return(s,l)=>(m(),o("div",u,[d,r("div",f,[c(p(e),{type:"primary",onClick:b},{default:i((()=>[v])),_:1}),c(p(e),{type:"success",onClick:A},{default:i((()=>[y])),_:1})]),h,r("div",w,[c(p(e),{type:"primary",onClick:j},{default:i((()=>[_])),_:1})]),g,r("div",C,[c(p(e),{type:"primary",onClick:l[0]||(l[0]=e=>t.value=!t.value)},{default:i((()=>[k])),_:1}),c(p(a),{show:t.value,"onUpdate:show":l[1]||(l[1]=e=>t.value=e),title:"title",message:"Are you sure???"},null,8,["show"])])]))},__scopeId:"data-v-f1575a8c"};export default b;