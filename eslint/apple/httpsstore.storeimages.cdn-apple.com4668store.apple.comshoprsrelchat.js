!function t(f,h,g){function b(e,l){if(!h[e]){if(!f[e]){var a="function"==typeof require&&require;if(!l&&a){return a(e,!0)}if(d){return d(e,!0)}var k=new Error("Cannot find module '"+e+"'");throw k.code="MODULE_NOT_FOUND",k}var j=h[e]={exports:{}};f[e][0].call(j.exports,function(i){var m=f[e][1][i];return b(m||i)},j,j.exports,t,f,h,g)}return h[e].exports}for(var d="function"==typeof require&&require,c=0;c<g.length;c++){b(g[c])}return b}({1:[function(a,b,c){a("./src/as-chat")},{"./src/as-chat":2}],2:[function(c,d,g){var f=window.asMetrics,b={init:function(){document.addEventListener("click",this.handleClick.bind(this))},handleClick:function(a){var h=a.target,i=null;if(document.documentElement.contains(h)){for(;null!==h;){if(h.classList.contains("as-chat-button")){i=h;break}h=h.parentElement}}i&&(a.preventDefault(),this.createForm(i),this.openChatWindow(),this.chatMetrics(i))},chatMetrics:function(a){var h=a.getAttribute("data-tracking"),i=h?"Selected:"+h:"Selected";f&&(f.fireMicroEvent({eVar:"prop41",feature:"Chat",part:"AskNow",action:i}),f.fireMicroEvent({eVar:"eVar41",feature:"Chat",action:"AskNow"}))},createForm:function(C){var x,m,k,A,j,q,z,B=window.chatConfig.chat.page,y=B?Object.keys(B):[],D=[],p=null,v=document.forms.chatForm,w=function(a,h){null===h&&(h=""),D+='<input type="hidden" id="'+a+'" name="'+a+'" value="'+h+'" />'};for(p=(m=C?C.getAttribute("data-chat-ui"):null)?m.split(";"):[],k=Object.keys(p),z=0;z<k.length;z++){""!==(A=p[k[z]].split("="))[0]&&w(A[0],A[1])}for(z=0;z<y.length;z++){"url"!==(j=B[y[z]]).name&&w(j.name,j.value),"url"===j.name&&(x=j.value)}w("WEB_CHAT_PAGE_URL",document.URL),(q=document.createElement("form")).id="chatForm",q.action=x,q.target="chatWin",q.method="post",q.innerHTML=D,v&&document.body.removeChild(v),document.body.appendChild(q)},openChatWindow:function(){var a=document.getElementById("chatForm");window.open("#","chatWin","width=375,height=773,menubar=no,location=no,resizable=no,scrollbars=no,status=no"),a.submit()}};document.addEventListener("DOMContentLoaded",function(){var a=window.chatConfig;a&&a.chat?b.init():window.console.log("No chat config detected.")}),d.exports=b},{}],3:[function(a,b,c){a("@aos/as-chat")},{"@aos/as-chat":1}]},{},[3]);