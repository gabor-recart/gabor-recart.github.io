

const isTrackingNgrok = new RegExp("_trackingNgrok=true").test(document.location.search)
const isMessengerWidgetNgrok = new RegExp("_messengerNgrok=true").test(document.location.search)

console.log({isTrackingNgrok, isMessengerWidgetNgrok})

if (!isTrackingNgrok) {
  (e=>{const t={},n=new RegExp("_gmlog=debug|_rmplog=debug").test(document.location.search),o=new RegExp("_gmSDF=true").test(document.location.search),r=e=>{n&&console.log(`🐕 addEventListener overloader: ${e}`)};void 0!==e.Element?o?(r("enabled"),e.Element.prototype._addEventListener=e.Element.prototype.addEventListener,e.Element.prototype.addEventListener=function(e,o,i={}){if(t[e]=t[e]||[],!["click","touchstart","submit"].includes(e))return this._addEventListener(e,o,i);r(`Intercepted addEventListener: ${e}`),n&&console.log(this),!0===i._sdf?(r(`Register the strongest event listener: ${e}`),t[e].map(e=>{this._removeEventListener(e.eventName,e.handler,e.options)}),this._addEventListener(e,o,i),t[e].map(e=>{this._addEventListener(e.eventName,e.handler,e.options)})):this._addEventListener(e,o,i),t[e].push({eventName:e,handler:o,options:i})},e.Element.prototype._removeEventListener=e.Element.prototype.removeEventListener,e.Element.prototype.removeEventListener=function(e,n,o={}){if(e in t){const o=t[e].indexOf(n);o>-1&&t[e].splice(o,1)}return this._removeEventListener(e,n,o)}):r("not enabled"):r("window.Element not defined, cannot overload addEventListener.")})(window),window.lightningjs||function(e){function t(t,o){var r,i,d,a,s,l;return o&&(o+=(/\?/.test(o)?"&":"?")+"lv=1"),e[t]||(r=window,i=document,d=t,a=i.location.protocol,s="load",l=0,function(){function t(){c.P(s),c.w=1,e[d]("_load")}e[d]=function(){function t(){return t.id=o,e[d].apply(t,arguments)}var n,o=++l;return n=this&&this!=r&&this.id||0,(c.s=c.s||[]).push([o,n,arguments]),t.then=function(e,n,r){var i=c.fh[o]=c.fh[o]||[],d=c.eh[o]=c.eh[o]||[],a=c.ph[o]=c.ph[o]||[];return e&&i.push(e),n&&d.push(n),r&&a.push(r),t},t};var c=e[d]._={};c.fh={},c.eh={},c.ph={},c.l=o?o.replace(/^\/\//,("https:"==a?a:"http:")+"//"):o,c.p={0:+new Date},c.P=function(e){c.p[e]=new Date-c.p[0]},c.w&&t(),r.addEventListener?r.addEventListener(s,t,!1):r.attachEvent("on"+s,t);var p=function(){function e(){return["<head></head><",t,' onload="var d=',u,";d.getElementsByTagName('head')[0].",a,"(d.",s,"('script')).",l,"='",c.l,"'\"></",t,">"].join("")}var t="body",o=i[t];if(!o)return setTimeout(p,100);c.P(1);var r,a="appendChild",s="createElement",l="src",v=i[s]("div"),h=v[a](i[s]("div")),m=i[s]("iframe"),u="document";v.style.display="none",o.insertBefore(v,o.firstChild),v.id=n+"-"+d,m.frameBorder="0",m.id=n+"-frame-"+d,/MSIE[ ]+6/.test(navigator.userAgent)&&(m[l]="javascript:false"),m.allowTransparency="true",h[a](m);try{m.contentWindow[u].open()}catch(e){c.domain=i.domain,r="javascript:var d="+u+".open();d.domain='"+i.domain+"';",m[l]=r+"void(0);"}try{var E=m.contentWindow[u];E.write(e()),E.close()}catch(t){m[l]=r+'d.write("'+e().replace(/"/g,String.fromCharCode(92)+'"')+'");d.close();'}c.P(2)};c.l&&p()}()),e[t].lv="1",e[t]}var n="lightningjs",o=window[n]=t(n);o.require=t,o.modules=e}({}),lightningjs.require("ghostmonitor","https://cdn.ghostmonitor.com/main.js?1583829451584");
} else {
  console.log('loading tracking from ngrok')
  (e=>{const t={},n=new RegExp("_gmlog=debug|_rmplog=debug").test(document.location.search),o=new RegExp("_gmSDF=true").test(document.location.search),r=e=>{n&&console.log(`🐕 addEventListener overloader: ${e}`)};void 0!==e.Element?o?(r("enabled"),e.Element.prototype._addEventListener=e.Element.prototype.addEventListener,e.Element.prototype.addEventListener=function(e,o,i={}){if(t[e]=t[e]||[],!["click","touchstart","submit"].includes(e))return this._addEventListener(e,o,i);r(`Intercepted addEventListener: ${e}`),n&&console.log(this),!0===i._sdf?(r(`Register the strongest event listener: ${e}`),t[e].map(e=>{this._removeEventListener(e.eventName,e.handler,e.options)}),this._addEventListener(e,o,i),t[e].map(e=>{this._addEventListener(e.eventName,e.handler,e.options)})):this._addEventListener(e,o,i),t[e].push({eventName:e,handler:o,options:i})},e.Element.prototype._removeEventListener=e.Element.prototype.removeEventListener,e.Element.prototype.removeEventListener=function(e,n,o={}){if(e in t){const o=t[e].indexOf(n);o>-1&&t[e].splice(o,1)}return this._removeEventListener(e,n,o)}):r("not enabled"):r("window.Element not defined, cannot overload addEventListener.")})(window),window.lightningjs||function(e){function t(t,o){var r,i,d,a,s,l;return o&&(o+=(/\?/.test(o)?"&":"?")+"lv=1"),e[t]||(r=window,i=document,d=t,a=i.location.protocol,s="load",l=0,function(){function t(){c.P(s),c.w=1,e[d]("_load")}e[d]=function(){function t(){return t.id=o,e[d].apply(t,arguments)}var n,o=++l;return n=this&&this!=r&&this.id||0,(c.s=c.s||[]).push([o,n,arguments]),t.then=function(e,n,r){var i=c.fh[o]=c.fh[o]||[],d=c.eh[o]=c.eh[o]||[],a=c.ph[o]=c.ph[o]||[];return e&&i.push(e),n&&d.push(n),r&&a.push(r),t},t};var c=e[d]._={};c.fh={},c.eh={},c.ph={},c.l=o?o.replace(/^\/\//,("https:"==a?a:"http:")+"//"):o,c.p={0:+new Date},c.P=function(e){c.p[e]=new Date-c.p[0]},c.w&&t(),r.addEventListener?r.addEventListener(s,t,!1):r.attachEvent("on"+s,t);var p=function(){function e(){return["<head></head><",t,' onload="var d=',u,";d.getElementsByTagName('head')[0].",a,"(d.",s,"('script')).",l,"='",c.l,"'\"></",t,">"].join("")}var t="body",o=i[t];if(!o)return setTimeout(p,100);c.P(1);var r,a="appendChild",s="createElement",l="src",v=i[s]("div"),h=v[a](i[s]("div")),m=i[s]("iframe"),u="document";v.style.display="none",o.insertBefore(v,o.firstChild),v.id=n+"-"+d,m.frameBorder="0",m.id=n+"-frame-"+d,/MSIE[ ]+6/.test(navigator.userAgent)&&(m[l]="javascript:false"),m.allowTransparency="true",h[a](m);try{m.contentWindow[u].open()}catch(e){c.domain=i.domain,r="javascript:var d="+u+".open();d.domain='"+i.domain+"';",m[l]=r+"void(0);"}try{var E=m.contentWindow[u];E.write(e()),E.close()}catch(t){m[l]=r+'d.write("'+e().replace(/"/g,String.fromCharCode(92)+'"')+'");d.close();'}c.P(2)};c.l&&p()}()),e[t].lv="1",e[t]}var n="lightningjs",o=window[n]=t(n);o.require=t,o.modules=e}({}),lightningjs.require("ghostmonitor","https://gm-tracking-js-gabor.ngrok.io/main.js?1583829451584");
}

if (!isMessengerWidgetNgrok) {
  (function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='/',b(b.s=320)})({320:function(){(function(a){const b=a.createElement('script');b.id='recart-messenger-plugin-js',b.src='https://cdn.ghostmonitor.com/messenger/plugin.js?v=',b.async=!0,a.getElementById(b.id)||a.body.appendChild(b)})(document)}});
} else {
  console.log('loading messenger from ngrok')
  (function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='/',b(b.s=320)})({320:function(){(function(a){const b=a.createElement('script');b.id='recart-messenger-plugin-js',b.src='https://gm-widget-js-gabor.ngrok.io/messenger/plugin.js?v=',b.async=!0,a.getElementById(b.id)||a.body.appendChild(b)})(document)}});
}

