(function(g,f){function v(b){if(b)return b.replace(/^\s+|\s+$/g,"")}function w(b,l){if(!b)return{};var a="INFO"===l.logLevel;b.m&&b.m.message&&(b=b.m);var e=l.m||l.message||"",e=b.m&&b.m.message?e+b.m.message:b.m&&b.m.target&&b.m.target.tagName?e+("Error handler invoked by "+b.m.target.tagName+" tag"):b.m?e+b.m:b.message?e+b.message:e+"Unknown error",e={m:e,name:b.name,type:b.type,csm:N+" "+(b.fromOnError?"onerror":"ueLogError")},h,f,k=0,r;e.logLevel=l.logLevel||y;l.adb&&(e.adb=l.adb);if(h=l.attribution)e.attribution=
""+h;if(!a){e.pageURL=l.pageURL||""+(window.location?window.location.href:"")||"missing";e.f=b.f||b.sourceURL||b.fileName||b.filename||b.m&&b.m.target&&b.m.target.src;e.l=b.l||b.line||b.lineno||b.lineNumber;e.c=b.c?""+b.c:b.c;e.s=[];e.t=g.ue.d();if((a=b.stack||(b.err?b.err.stack:""))&&a.split)for(e.csm+=" stack",h=a.split("\n");k<h.length&&e.s.length<E;)(a=h[k++])&&e.s.push(v(a));else for(e.csm+=" callee",f=x(b.args||arguments,"callee"),h=k=0;f&&k<E;)r=F,f.skipTrace||(a=f.toString())&&a.substr&&(r=
0===h?4*F:r,r=1==h?2*F:r,e.s.push(a.substr(0,r)),h++),f=x(f,"caller"),k++;if(!e.f&&0<e.s.length&&(k=e)&&k.s){var q,a=0<k.s.length?k.s[0]:"";h=1<k.s.length?k.s[1]:"";a&&(q=a.match(n));q&&3==q.length||!h||(q=h.match(O));q&&3==q.length&&(k.f=q[1],k.l=q[2])}}return e}function x(b,g){try{return b[g]}catch(a){}}function z(b,l){if(b){var a=w(b,l),e=window.ue_err?window.ue_err.addContextInfo:null;e&&e(a);g.ue.log(a,l.channel||K,{nb:1});"function"===typeof ue_err.elh&&ue_err.elh(b,l);try{if(!b.fromOnError){var h=
f.console,n=f.JSON,e="Error logged with the Track\x26Report JS errors API(http://tiny/1covqr6l8/wamazindeClieUserJava): ";if(h){if(n&&n.stringify)try{e+=n.stringify(a)}catch(k){e+="no info provided; converting to string failed"}else e+=a.m;"function"===typeof h.error?h.error(e,a):"function"===typeof h.log&&h.log(e,a)}}}catch(k){}}}function A(b,l){if(b&&!(g.ue_err.ec>g.ue_err.mxe)){g.ue_err.ter.push(b);l=l||{};var a=b.logLevel||l.logLevel;l.logLevel=a;l.attribution=b.attribution||l.attribution;a&&
a!==y&&a!==L&&a!==B&&a!==G||g.ue_err.ec++;a&&a!=y||ue_err.ecf++;z(b,l)}}if(g.ue_err&&(!g.ueLogError||g.ueLogError.isStub)){var K=g.ue_err_chan||"jserr",y="FATAL",L="ERROR",B="WARN",G="DOWNGRADED",N="v5",E=20,F=256,O=/\(?([^\s]*):(\d+):\d+\)?/,n=/.*@(.*):(\d*)/;z.skipTrace=1;w.skipTrace=1;A.skipTrace=1;(function(){if(g.ue_err.erl){var b=g.ue_err.erl.length,l,a;for(l=0;l<b;l++)a=g.ue_err.erl[l],z(a.ex,a.info);ue_err.erl=[]}})();g.ueLogError=A}})(ue_csm,window);
(function(g,f){function v(a){for(var b={},c,d,m=0;m<a.length;m++)d=a[m],c=d.r+d.s+d.m,d.c&&(b[c]||(b[c]=[]),b[c].push(a[m]));return b}function w(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];try{if(c.isSupported)return c.send(a)}catch(d){}}}function x(){if(h.length){for(var b=0;b<k.length;b++)k[b]();a._flhs+=1;z();w(v(h.splice(0,h.length)),H,I,D)}q=P=0}function z(){F&&A({k:"chk",f:a._flhs,l:a._lpn,s:"full"},"csm")}function A(b,u,c){c=c||{};!g.ue_furl||0===c.bf&&a.isBF||(b={r:c.r||a.rid,
s:c.s||g.ue_sid,m:c.m||g.ue_mid,mkt:c.mkt||g.ue_mkt,sn:c.sn||g.ue_sn,c:u,d:b,t:c.t||a.d(),cs:c.c&&g.ue_qsl},a._lpn[u]=(a._lpn[u]||0)+1,c.b?w(v([b]),H,D):c.nb?w(v([b]),H,I,D):c.img||R[u]?w(v([b]),D):c.ff?(h.push(b),x()):c.n?(h.push(b),0===Q?x():q||(q=f.setTimeout(x,Q))):(h.push(b),P||(P=f.setTimeout(x,S))))}function K(b,a,c){M++;M==E&&A({m:"Max number of Forester Logs exceeded",f:"forester-client.js",logLevel:"ERROR"},f.ue_err_chan||"jserr");(M<E||c&&c.il)&&A(b,a,c)}function y(){if(!r){for(var b=0;b<
J.length;b++)J[b]();for(b=0;b<k.length;b++)k[b]();a._flhs+=1;z();w(v(h.splice(0,h.length)),H,D);r=!0}}function L(a){var u=b(a);window.ue_fps&&a.reqs&&(u={csmcount:{counter:O,t:0,value:u.length}},u.csmcount.value+=b(u).length,a.reqs.push(u),u=b(a));return u}var B={};(function(){function b(a){return 10>a?"0"+a:a}function a(b){d.lastIndex=0;return d.test(b)?'"'+b.replace(d,function(b){var a=e[b];return"string"===typeof a?a:"\\u"+("0000"+b.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+b+'"'}function c(b,
d){var e,l,C=m,p,f=d[b];f&&"object"===typeof f&&"function"===typeof f.toJSON&&(f=f.toJSON(b));"function"===typeof h&&(f=h.call(d,b,f));switch(typeof f){case "string":return a(f);case "number":return isFinite(f)?String(f):"null";case "boolean":case "null":return String(f);case "object":if(!f)return"null";m+=g;p=[];if("[object Array]"===Object.prototype.toString.apply(f)){d=f.length;for(b=0;b<d;b+=1)p[b]=c(b,f)||"null";l=0===p.length?"[]":m?"[\n"+m+p.join(",\n"+m)+"\n"+C+"]":"["+p.join(",")+"]";m=C;
return l}if(h&&"object"===typeof h)for(d=h.length,b=0;b<d;b+=1)"string"===typeof h[b]&&(e=h[b],(l=c(e,f))&&p.push(a(e)+(m?": ":":")+l));else for(e in f)Object.prototype.hasOwnProperty.call(f,e)&&(l=c(e,f))&&p.push(a(e)+(m?": ":":")+l);l=0===p.length?"{}":m?"{\n"+m+p.join(",\n"+m)+"\n"+C+"}":"{"+p.join(",")+"}";m=C;return l}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+b(this.getUTCMonth()+1)+"-"+b(this.getUTCDate())+
"T"+b(this.getUTCHours())+":"+b(this.getUTCMinutes())+":"+b(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(b){return this.valueOf()});var d=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,m,g,e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},h;"function"!==typeof B.stringify&&(B.stringify=function(b,a,d){var e;g=m="";if("number"===
typeof d)for(e=0;e<d;e+=1)g+=" ";else"string"===typeof d&&(g=d);if((h=a)&&"function"!==typeof a&&("object"!==typeof a||"number"!==typeof a.length))throw Error("JSON.stringify");return c("",{"":b})})})();var G=function(){function b(a,c){if(null==a)return c.push("!n");if("number"===typeof a)return c.push("!"+a);if("string"===typeof a)return"\\"==a[a.length-1]?c.push("'"+a.replace(/'/g,"\\'")+"u005C'"):c.push("'"+a.replace(/'/g,"\\'")+"'");if("boolean"===typeof a)return c.push(a?"!t":"!f");if(a instanceof
Array){c.push("*");for(var d=0;d<a.length;d++)b(a[d],c);return c.push(")")}if("object"==typeof a){c.push("(");for(d in a)a.hasOwnProperty(d)&&(c.push(d),b(a[d],c));return c.push(")")}return c.push("!n")}return{stringify:function(a){var c=[];b(a,c);return c.join("")}}}(),N=g.ue_qsl||2E3,E=2E3,F=1===window.ue_ddq,O="foresterPayloadSize",n=function(){},b=f.JSON&&f.JSON.stringify||B&&B.stringify,l=G.stringify,a=g.ue||{},G=g.uet||n;(g.uet||n)("bb","ue_frst_v2",{wb:1});var e="//"+g.ue_furl+"/1/batch/1/OE/",
h=[],J=[],k=[],r=!1,q,P,Q=void 0===g.ue_hpfi?1E3:g.ue_hpfi,S=void 0===g.ue_lpfi?1E4:g.ue_lpfi,R={"scheduled-delivery":1},M=0,I=function(){function b(){if(f.XDomainRequest){var a=new XDomainRequest;a.onerror=n;a.ontimeout=n;a.onprogress=n;a.onload=n;a.timeout=0;return a}if(f.XMLHttpRequest){a=new XMLHttpRequest;if(!("withCredentials"in a))throw"";return a}if(f.ActiveXObject){for(var c=0;c<d.length&&!a;c++)try{a=new ActiveXObject(d[c]),d=[d[c]]}catch(e){}return a}}function l(b){for(var c=[],d=b[0]||
{},e=0;e<b.length;e++){var f={};f[b[e].c]=b[e].d;c.push(f)}return{rid:d.r||a.rid,sid:d.s||g.ue_sid,mid:d.m||g.ue_mid,mkt:d.mkt||g.ue_mkt,sn:d.sn||g.ue_sn,reqs:c}}function c(a){var c=l(a),d=b();if(!d)throw"";d.onerror=function(){for(var b=0;b<a.length;b++)h.push(a[b]);I.isSupported=!1};d.open("POST",e,!0);d.setRequestHeader&&d.setRequestHeader("Content-type","text/plain");c=L(c);d.send(c)}var d="MSXML2.XMLHTTP.6.0 MSXML2.XMLHTTP.5.0 MSXML2.XMLHTTP.4.0 MSXML2.XMLHTTP.3.0 MSXML2.XMLHTTP Microsoft.XMLHTTP".split(" ");
return{send:function(a){for(var b in a)a.hasOwnProperty(b)&&a[b].length&&c(a[b])},buildPOSTBodyLog:l,isSupported:!0}}(),D=function(){return{send:function(f){for(var h in f)if(f.hasOwnProperty(h)){for(var c=f[h],d=c,m={},k,p=0;p<d.length;p++)k=d[p].c,m[k]||(m[k]=[]),m[k].push(d[p]);c=c[0]||{};d=c.sn||g.ue_sn;c=e+(c.m||g.ue_mid)+":"+(c.s||g.ue_sid)+":"+(c.r||a.rid)+(d?":"+d:"");d=[];k=c;var p=[],n=void 0;for(n in m)if(m.hasOwnProperty(n))for(var t=0;t<m[n].length;t++){var q=m[n][t],r=encodeURIComponent((q.cs?
l:b)(q.d));p.push({l:r,t:q.t,p:1,c:n,d:q.cs?"c":"j"})}m=p;p=void 0;n="$";for(q=0;q<m.length;){t=m[q];p!=t.c?(k+=n+t.c+"\x3d",n="\x26",p=t.c):k+=",";var r=k,w=t.d+":",v=t;k=(v.l.match(".{1,"+(N-k.length)+"}[^%]{0,2}")||[])[0]||"";v.l=v.l.substr(k.length);k=r+(w+k+":"+t.t);if(t.l)k+=":"+t.p++ +"_",d.push(k),k=c,n="$",p=0;else if(q++,1!=t.p)for(k+=":"+t.p+"_"+t.p,r=0;r<t.p-1;r++)d[d.length-r-1]+=t.p}d.push(k);c=d;for(d=0;d<c.length;d++)(new Image).src=c[d]}},isSupported:!0}}(),H=function(){return{send:function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=
I.buildPOSTBodyLog(a[b]),c=L(c);if(!navigator.sendBeacon(e,c))throw"";}},isSupported:!!navigator.sendBeacon}}();a._fic=D;a._fac=I;a._fbc=H;a._flq=h;a.sid=a.sid||g.ue_sid;a.mid=a.mid||g.ue_mid;a.furl=a.furl||g.ue_furl;a.sn=a.sn||g.ue_sn;a._flhs=a._flhs||0;a._lpn=a._lpn||{};try{f.amznJQ&&f.amznJQ.declareAvailable&&f.amznJQ.declareAvailable("forester-client"),f.P&&f.P.register&&f.P.register("forester-client",n)}catch(C){g.ueLogError(C,{logLevel:"WARN"})}(function(){a.log&&a.log.isStub&&(a.log.replay(function(a,
b,c){var d=a[2]||{};d.t=b;d.r=c;d.n=1;K(a[0],a[1],d)}),a.onunload.replay(function(a){J.push(a[0])}),a.onflush.replay(function(a){k.push(a[0])}))})();a.log=K;a.log.reset=function(){M=0};a.onunload=function(a){J.push(a)};a.onflush=function(a){k.push(a)};a.attach("beforeunload",y);a.attach("pagehide",y);G("ld","ue_frst_v2",{wb:1})})(ue_csm,window);