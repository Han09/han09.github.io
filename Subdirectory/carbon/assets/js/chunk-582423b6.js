(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-582423b6"],{"1b58":function(t,e,i){"use strict";var s=i("aa38"),a=i.n(s);a.a},4998:function(t){t.exports={reason:"请求成功",result:{stat:"1",data:[{listName:"头条",listUrl:"top"},{listName:"社会",listUrl:"shehui"},{listName:"国内",listUrl:"guonei"},{listName:"国际",listUrl:"guoji"},{listName:"娱乐",listUrl:"yule"},{listName:"体育",listUrl:"tiyu"},{listName:"军事",listUrl:"junshi"},{listName:"科技",listUrl:"keji"},{listName:"财经",listUrl:"caijing"},{listName:"时尚",listUrl:"shishang"}]}}},a2f9:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-tabs",{attrs:{sticky:"",swipeable:"","title-active-color":"#5ba6ff",color:"#5ba6ff"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.NavList,function(t,e){return i("van-tab",{key:e,attrs:{title:t.listName}},[i("new-list",{attrs:{"news-type":t.listUrl}})],1)}),1)],1)},a=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-swipe",{attrs:{loop:"",autoplay:3e3},on:{change:t.onChange}},[t._l(t.list,function(e,s){return s<=2?i("van-swipe-item",{key:s},[i("router-link",{staticClass:"SwipeItem",style:{background:"url("+e.thumbnail_pic_s+") no-repeat 0 0/cover"},attrs:{to:{path:"/NewsInfo",query:{Link:e.url}}}},[i("p",{staticClass:"swipeTitle"},[t._v(t._s(e.title))])])],1):t._e()}),i("div",{staticClass:"custom-indicator",attrs:{slot:"indicator"},slot:"indicator"},[t._v("\n            "+t._s(t.current+1)+"/3\n        ")])],2),i("van-list",{attrs:{finished:t.finished,"finished-text":t.finishedText},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,function(e,s){return s>2?i("van-cell",{key:s},[i("router-link",{staticClass:"newsView",attrs:{to:{path:"/NewsInfo",query:{Link:e.url}}}},[i("div",{staticClass:"text"},[i("p",{staticClass:"newsTitle"},[t._v(t._s(e.title))]),i("p",{staticClass:"time"},[t._v(t._s(e.date))])]),i("div",{staticClass:"photo",style:{background:"url("+e.thumbnail_pic_s+") no-repeat 0 0/cover"}})])],1):t._e()}),1),i("div",{staticStyle:{height:"2.9rem"}})],1)},l=[],o={name:"NewList",data:function(){return{list:[],loading:!1,finished:!1,current:1,finishedText:"没有更多了"}},props:{NewsType:String},methods:{onLoad:function(){var t=this;this.$axios.get("https://v.juhe.cn//toutiao/index?type="+this.NewsType+"&key=222d0bacf39bd86f40004e5c0a7b4eea").then(function(e){t.list=e.data.result.data,t.loading=!1,t.finished=!0}).catch(function(e){console.log(e),t.loading=!1,t.finished=!0,t.finishedText="新闻接口今日访问量已达上限"})},onChange:function(t){this.current=t}}},r=o,c=(i("1b58"),i("2877")),u=Object(c["a"])(r,n,l,!1,null,"895660b6",null),d=u.exports,f={name:"News",components:{NewList:d},data:function(){return{NavList:i("4998").result.data,active:0}},methods:{},mounted:function(){}},h=f,p=Object(c["a"])(h,s,a,!1,null,"4c1e6475",null);e["default"]=p.exports},aa38:function(t,e,i){}}]);