(this["webpackJsonpwits-site"]=this["webpackJsonpwits-site"]||[]).push([[0],{370:function(e,t,n){},371:function(e,t,n){},389:function(e,t){},390:function(e,t){},398:function(e,t){},401:function(e,t){},402:function(e,t){},403:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),c=n(101),s=n.n(c),a=(n(370),n(94)),o=n(56),l=(n(371),n(110)),h=n(36),u=function(){return Object(h.jsx)("div",{style:{height:"100%",width:"100%",display:"flex",position:"fixed",alignItems:"center",justifyContent:"center",color:"white",backgroundImage:'url("https://github.com/ismatullaevash/sign-language-app/blob/main/static/mesh-gradient.png?raw=true")'},children:Object(h.jsxs)("h1",{children:[Object(h.jsx)("center",{children:"Signnum"}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:"ASL made personal and easy using AI!"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("center",{children:[" ",Object(h.jsx)(a.b,{to:"/basic",children:Object(h.jsx)(l.Button,{style:{height:"100%",backgroundColor:"#B2D0DF",color:"white"},children:"Let's Learn!"})})]})]})})},j=function(){return Object(h.jsx)("div",{style:{height:"100%",width:"100%",display:"flex",position:"fixed",alignItems:"center",justifyContent:"center",color:"white",backgroundImage:'url("https://github.com/ismatullaevash/sign-language-app/blob/main/static/mesh-gradient.png?raw=true")'},children:Object(h.jsxs)("h1",{children:[Object(h.jsx)("center",{children:"Basics"}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:"Start with the essentials follow along with the hand"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("center",{children:[" ",Object(h.jsx)(a.b,{to:"/hand",children:Object(h.jsx)(l.Button,{style:{height:"100%",backgroundColor:"#B2D0DF",color:"white"},children:"Turn on webcam!"})})]})]})})},d=function(){return Object(h.jsx)("div",{style:{height:"100%",width:"100%",display:"flex",position:"fixed",alignItems:"center",justifyContent:"center",color:"white",backgroundImage:'url("https://github.com/ismatullaevash/sign-language-app/blob/main/static/mesh-gradient.png?raw=true")'},children:Object(h.jsxs)("h1",{children:[Object(h.jsx)("center",{children:"First, choose your dominant hand"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(a.b,{to:"quiz",children:Object(h.jsx)(l.Button,{style:{height:"100%",backgroundColor:"#B2D0DF",color:"white",alighnItems:"left"},children:"Left!"})}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(h.jsx)(a.b,{to:"guide",children:Object(h.jsx)(l.Button,{style:{height:"100%",backgroundColor:"#B2D0DF",color:"white",alighnItems:"right"},children:"Right!"})})]})})},b=n(5),g=n.n(b),x=n(13),p=n(107),f=n(364),m=n.n(f),O=n(6),w={1:{name:"Hello",color:"red"},2:{name:"Thank You",color:"yellow"},3:{name:"I Love You",color:"lime"},4:{name:"Yes",color:"blue"},5:{name:"No",color:"purple"}},y=function(e,t,n,i,r,c,s){for(var a=0;a<=e.length;a++)if(e[a]&&t[a]&&n[a]>i){var o=Object(O.a)(e[a],4),l=o[0],h=o[1],u=o[2],j=o[3],d=t[a];s.strokeStyle=w[d].color,s.lineWidth=10,s.fillStyle="white",s.font="30px Arial",s.beginPath(),s.fillText(w[d].name+" - "+Math.round(100*n[a])/100,h*r,l*c-10),s.rect(h*r,l*c,j*r/2,u*c/1.5),s.stroke()}},v=function(){var e=Object(i.useRef)(null),t=Object(i.useRef)(null),n=function(){var e=Object(x.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.d("https://tensorflowjsrealtimemodel.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json");case 2:t=e.sent,setInterval((function(){r(t)}),16.7);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=function(){var n=Object(x.a)(g.a.mark((function n(i){var r,c,s,a,o,l,h,u,j,d,b,x;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("undefined"===typeof e.current||null===e.current||4!==e.current.video.readyState){n.next=32;break}return r=e.current.video,c=e.current.video.videoWidth,s=e.current.video.videoHeight,e.current.video.width=c,e.current.video.height=s,t.current.width=c,t.current.height=s,a=p.a.fromPixels(r),o=p.c.resizeBilinear(a,[640,480]),l=o.cast("int32"),h=l.expandDims(0),n.next=14,i.executeAsync(h);case 14:return u=n.sent,console.log(u),n.next=18,u[1].array();case 18:return j=n.sent,n.next=21,u[2].array();case 21:return d=n.sent,n.next=24,u[4].array();case 24:b=n.sent,x=t.current.getContext("2d"),requestAnimationFrame((function(){y(j[0],d[0],b[0],.8,c,s,x)})),p.b(a),p.b(o),p.b(l),p.b(h),p.b(u);case 32:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(i.useEffect)((function(){n()}),[]),Object(h.jsx)("div",{children:Object(h.jsxs)("header",{className:"App-header",style:{backgroundImage:'url("https://github.com/ismatullaevash/sign-language-app/blob/main/static/mesh-gradient.png?raw=true")'},children:[Object(h.jsx)(m.a,{ref:e,muted:!0,style:{position:"absolute",marginLeft:"auto",left:0,right:0,textAlign:"center",zindex:9,width:640,height:480,backgroundImage:'url("https://github.com/ismatullaevash/sign-language-app/blob/main/static/mesh-gradient.png?raw=true")'}}),Object(h.jsx)("canvas",{ref:t,style:{position:"absolute",marginLeft:"auto",left:0,right:0,textAlign:"center",zindex:8,width:640,height:480}}),Object(h.jsx)("div",{style:{display:"flex",position:"flex",marginRight:"auto",left:0,right:0,width:640,height:480,textAlign:"left",color:"white",backgroundImage:'url("https://github.com/ismatullaevash/sign-language-app/blob/main/static/mesh-gradient.png?raw=true")'},children:Object(h.jsx)("h1",{children:"Now try it out yourself!"})})]})})},k=n.p+"static/media/aslSigns.c51e4ebf.jpg",I=function(){return Object(h.jsxs)("div",{style:{height:"100%",width:"100%",display:"flex",position:"fixed",alignItems:"center",justifyContent:"center",color:"white",backgroundImage:'url("https://github.com/ismatullaevash/sign-language-app/blob/main/static/mesh-gradient.png?raw=true")'},children:[Object(h.jsx)("center",{children:Object(h.jsx)("img",{src:k,alt:"ASL Signs",style:{height:210,width:300}})}),Object(h.jsx)("br",{})," ",Object(h.jsx)("br",{}),Object(h.jsx)("center",{children:Object(h.jsx)(a.b,{to:"quiz",children:Object(h.jsx)(l.Button,{style:{height:"100%",backgroundColor:"#B2D0DF",color:"white"},children:"Continue"})})})]})};var B=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(a.a,{children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",children:Object(h.jsx)(u,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/basic",children:Object(h.jsx)(j,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/hand",children:Object(h.jsx)(d,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/guide",children:Object(h.jsx)(I,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/quiz",children:Object(h.jsx)(v,{})}),Object(h.jsx)(o.a,{render:function(){return Object(h.jsx)("h1",{children:"Not Found"})}})]})})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,404)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),r(e),c(e),s(e)}))};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(B,{})}),document.getElementById("root")),C()}},[[403,1,2]]]);
//# sourceMappingURL=main.91cc5125.chunk.js.map