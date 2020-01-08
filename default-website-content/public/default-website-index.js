!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://assets.plesk.com/static/default-website-content/public/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var s=n(7),r=n.n(s),o=n(8),a=n.n(o);document.addEventListener("DOMContentLoaded",(function(){document.write(r.a.render(a.a,{domain_page:!0,domain_name:location.hostname,domain_link:location.protocol+"//"+location.hostname,plesk_login:"https://"+location.hostname+("https:"===location.protocol?":8443":"")}))}))},,,,,,,function(e,t,n){e.exports=function(){"use strict";
/*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */var e=Object.prototype.toString,t=Array.isArray||function(t){return"[object Array]"===e.call(t)};function n(e){return"function"==typeof e}function s(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function r(e,t){return null!=e&&"object"==typeof e&&t in e}var o=RegExp.prototype.test,a=/\S/;function i(e){return!function(e,t){return o.call(e,t)}(a,e)}var l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},c=/\s*/,p=/\s+/,u=/\s*=/,h=/\s*\}/,f=/#|\^|\/|>|\{|&|=|!/;function d(e){this.string=e,this.tail=e,this.pos=0}function g(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function m(){this.cache={}}d.prototype.eos=function(){return""===this.tail},d.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},d.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},g.prototype.push=function(e){return new g(e,this)},g.prototype.lookup=function(e){var t,s,o,a=this.cache;if(a.hasOwnProperty(e))t=a[e];else{for(var i,l,c,p=this,u=!1;p;){if(e.indexOf(".")>0)for(i=p.view,l=e.split("."),c=0;null!=i&&c<l.length;)c===l.length-1&&(u=r(i,l[c])||(s=i,o=l[c],null!=s&&"object"!=typeof s&&s.hasOwnProperty&&s.hasOwnProperty(o))),i=i[l[c++]];else i=p.view[e],u=r(p.view,e);if(u){t=i;break}p=p.parent}a[e]=t}return n(t)&&(t=t.call(this.view)),t},m.prototype.clearCache=function(){this.cache={}},m.prototype.parse=function(e,n){var r=this.cache,o=e+":"+(n||v.tags).join(":"),a=r[o];return null==a&&(a=r[o]=function(e,n){if(!e)return[];var r,o,a,l=!1,g=[],m=[],b=[],w=!1,k=!1,_="",y=0;function x(){if(w&&!k)for(;b.length;)delete m[b.pop()];else b=[];w=!1,k=!1}function P(e){if("string"==typeof e&&(e=e.split(p,2)),!t(e)||2!==e.length)throw new Error("Invalid tags: "+e);r=new RegExp(s(e[0])+"\\s*"),o=new RegExp("\\s*"+s(e[1])),a=new RegExp("\\s*"+s("}"+e[1]))}P(n||v.tags);for(var U,S,j,E,O,T,C=new d(e);!C.eos();){if(U=C.pos,j=C.scanUntil(r))for(var D=0,I=j.length;D<I;++D)i(E=j.charAt(D))?(b.push(m.length),_+=E):(k=!0,l=!0,_+=" "),m.push(["text",E,U,U+1]),U+=1,"\n"===E&&(x(),_="",y=0,l=!1);if(!C.scan(r))break;if(w=!0,S=C.scan(f)||"name",C.scan(c),"="===S?(j=C.scanUntil(u),C.scan(u),C.scanUntil(o)):"{"===S?(j=C.scanUntil(a),C.scan(h),C.scanUntil(o),S="&"):j=C.scanUntil(o),!C.scan(o))throw new Error("Unclosed tag at "+C.pos);if(O=">"==S?[S,j,U,C.pos,_,y,l]:[S,j,U,C.pos],y++,m.push(O),"#"===S||"^"===S)g.push(O);else if("/"===S){if(!(T=g.pop()))throw new Error('Unopened section "'+j+'" at '+U);if(T[1]!==j)throw new Error('Unclosed section "'+T[1]+'" at '+U)}else"name"===S||"{"===S||"&"===S?k=!0:"="===S&&P(j)}if(x(),T=g.pop())throw new Error('Unclosed section "'+T[1]+'" at '+C.pos);return function(e){for(var t,n=[],s=n,r=[],o=0,a=e.length;o<a;++o)switch((t=e[o])[0]){case"#":case"^":s.push(t),r.push(t),s=t[4]=[];break;case"/":r.pop()[5]=t[2],s=r.length>0?r[r.length-1][4]:n;break;default:s.push(t)}return n}(function(e){for(var t,n,s=[],r=0,o=e.length;r<o;++r)(t=e[r])&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(s.push(t),n=t));return s}(m))}(e,n)),a},m.prototype.render=function(e,t,n,s){var r=this.parse(e,s),o=t instanceof g?t:new g(t,void 0);return this.renderTokens(r,o,n,e,s)},m.prototype.renderTokens=function(e,t,n,s,r){for(var o,a,i,l="",c=0,p=e.length;c<p;++c)i=void 0,"#"===(a=(o=e[c])[0])?i=this.renderSection(o,t,n,s):"^"===a?i=this.renderInverted(o,t,n,s):">"===a?i=this.renderPartial(o,t,n,r):"&"===a?i=this.unescapedValue(o,t):"name"===a?i=this.escapedValue(o,t):"text"===a&&(i=this.rawValue(o)),void 0!==i&&(l+=i);return l},m.prototype.renderSection=function(e,s,r,o){var a=this,i="",l=s.lookup(e[1]);if(l){if(t(l))for(var c=0,p=l.length;c<p;++c)i+=this.renderTokens(e[4],s.push(l[c]),r,o);else if("object"==typeof l||"string"==typeof l||"number"==typeof l)i+=this.renderTokens(e[4],s.push(l),r,o);else if(n(l)){if("string"!=typeof o)throw new Error("Cannot use higher-order sections without the original template");null!=(l=l.call(s.view,o.slice(e[3],e[5]),(function(e){return a.render(e,s,r)})))&&(i+=l)}else i+=this.renderTokens(e[4],s,r,o);return i}},m.prototype.renderInverted=function(e,n,s,r){var o=n.lookup(e[1]);if(!o||t(o)&&0===o.length)return this.renderTokens(e[4],n,s,r)},m.prototype.indentPartial=function(e,t,n){for(var s=t.replace(/[^ \t]/g,""),r=e.split("\n"),o=0;o<r.length;o++)r[o].length&&(o>0||!n)&&(r[o]=s+r[o]);return r.join("\n")},m.prototype.renderPartial=function(e,t,s,r){if(s){var o=n(s)?s(e[1]):s[e[1]];if(null!=o){var a=e[6],i=e[5],l=e[4],c=o;return 0==i&&l&&(c=this.indentPartial(o,l,a)),this.renderTokens(this.parse(c,r),t,s,c)}}},m.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return n},m.prototype.escapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return v.escape(n)},m.prototype.rawValue=function(e){return e[1]};var v={name:"mustache.js",version:"3.2.1",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,to_html:void 0,Scanner:void 0,Context:void 0,Writer:void 0},b=new m;return v.clearCache=function(){return b.clearCache()},v.parse=function(e,t){return b.parse(e,t)},v.render=function(e,n,s,r){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(t(o=e)?"array":typeof o)+'" was given as the first argument for mustache#render(template, view, partials)');var o;return b.render(e,n,s,r)},v.to_html=function(e,t,s,r){var o=v.render(e,t,s);if(!n(r))return o;r(o)},v.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return l[e]}))},v.Scanner=d,v.Context=g,v.Writer=m,v}()},function(e,t,n){e.exports='<!doctype html> <html lang=en> <head> <meta charset=utf-8> {{#domain_page}} <title>Domain Default page</title> {{/domain_page}} {{^domain_page}} <title>Web Server\'s Default Page</title> {{/domain_page}} <meta name=copyright content="Copyright 1999-2020. Plesk International GmbH. All rights reserved."> <meta http-equiv=X-UA-Compatible content="IE=edge,chrome=1"> <meta name=viewport content="width=device-width,initial-scale=1"> <link rel="shortcut icon" href='+n(9)+"> <link rel=preload href="+n(10)+" as=font type=font/woff2 crossorigin> <link rel=stylesheet href="+n(11)+"> </head> <body> <header class=header> <div class=header__inner> <div class=header__content> <a class=header__logo href=https://www.plesk.com target=_blank> <img src="+n(12)+' width=98 height=41 alt=Plesk> </a> {{#domain_page}} <h1 class=header__title> This is a default webpage generated for<br> <a href="{{domain_link}}">{{domain_name}}</a> by Plesk. </h1> <div class=header__message> <p>If you are the website owner:</p> <ul> <li>Log in to Plesk to manage the website and its availability.</li> <li>Use File Manager to add the website\'s content.</li> </ul> <p>Unable to manage your website? Contact your service provider.</p> </div> {{/domain_page}} {{^domain_page}} <h1 class=header__title>Web Server\'s Default Page</h1> <p class=header__message> This page is generated by <a href=https://www.plesk.com target=_blank>Plesk</a>, the leading hosting automation software.<br> You see this page because there is no Web site at this address. </p> {{/domain_page}} {{#plesk_login}} <div class=note> <span class=note__message>Log in to Plesk to create websites and set up hosting.</span> <a class=note__button href="{{plesk_login}}">Log in to Plesk</a> </div> {{/plesk_login}} </div> </div> </header> <main class=content> <div class=content__inner> <h2 class=content__title>What is Plesk</h2> <p><b><a href=https://www.plesk.com>Plesk</a></b> is a hosting <a href=https://www.plesk.com/blog/business-industry/whats-control-panel-all-you-need-to-know/ >control panel</a> with simple and secure web server, website and web apps management tools. It is specially designed to help web professionals manage web, DNS, mail and other services through a comprehensive and user-friendly GUI. Plesk is about intelligently managing servers, apps, websites and hosting businesses, on both traditional and cloud hosting.</p> <ul class=resources-list> <li class=resources-list__item> <a class=plesk-guides href=https://docs.plesk.com/en-US/obsidian/ target=_blank> <img class=icon src='+n(13)+' alt="Plesk Guides"> <span>Plesk Guides</span> </a> </li> <li class=resources-list__item> <a href=https://support.plesk.com/hc/en-us target=_blank> <img class=icon src='+n(14)+' alt="Knowledge Base"> <span>Knowledge Base</span> </a> </li> <li class=resources-list__item> <a href=https://talk.plesk.com/ target=_blank> <img class=icon src='+n(15)+" alt=Forum> <span>Forum</span> </a> </li> <li class=resources-list__item> <a href=https://www.plesk.com/blog/ target=_blank> <img class=icon src="+n(16)+' alt="Developer Blog"> <span>Developer Blog</span> </a> </li> <li class=resources-list__item> <a href=https://www.youtube.com/channel/UCeU-_6YHGQFcVSHLbEXLNlA/playlists target=_blank> <img class=icon src='+n(17)+' alt="Video Guides"> <span>Video Guides</span> </a> </li> <li class=resources-list__item> <a href=https://www.facebook.com/Plesk target=_blank> <img class=icon src='+n(18)+" alt=Facebook> <span>Facebook</span> </a> </li> </ul> </div> </main> <footer class=footer> <div class=footer__inner> This page was generated by Plesk. Plesk is the leading WebOps platform to run, automate and grow applications, websites and hosting businesses. Learn more at <a href=https://www.plesk.com target=_blank>plesk.com</a> </div> </footer> </body> </html> "},function(e,t,n){e.exports=n.p+"favicon-1db747.ico"},function(e,t,n){e.exports=n.p+"fonts/lato-v16-latin-regular-b4d2c4.woff2"},function(e,t,n){e.exports=n.p+"style-c3bb87.css"},function(e,t,n){e.exports=n.p+"img/logo-775316.svg"},function(e,t,n){e.exports=n.p+"img/plesk-guides-3aaef8.svg"},function(e,t,n){e.exports=n.p+"img/knowlede-base-d84150.svg"},function(e,t,n){e.exports=n.p+"img/forum-4b225c.svg"},function(e,t,n){e.exports=n.p+"img/developers-blog-22dfe6.svg"},function(e,t,n){e.exports=n.p+"img/video-guides-b94afc.svg"},function(e,t,n){e.exports=n.p+"img/facebook-c06b9c.svg"}]);