/*
 v1.19.1676471101
 @preserve TRK_HOST        : 'gre.groupama.fr'
 @preserve TRK_FIRST_PARTY : '1'
*/
(function(e,r){var t=e.console&&e.console.log?e.console:{log:function(){}};if(e.hasOwnProperty("KWKUniJS"))return t.log("KWKUniJS still loaded"),!1;var w=!1;var p="gre.groupama.fr";var x="";var u="1";var y="C0003";var v=!1;var n={gdpr:null,gdpr_kwk:null,gdpr_consent:null};var z={};var A=function(){};A.prototype={encode:e.encodeURIComponent||e.escape,isDefined:function(a){return void 0!==a&&null!==a},isFunction:function(a){return"function"===typeof a},isString:function(a){return"string"===typeof a},
isObject:function(a){return null!==a&&"object"===typeof a},isNumber:function(a){return"number"===typeof a||!isNaN(a)&&"string"===typeof a&&0<a.length},isArray:function(a){return a.constructor===Array},printCurrentDate:function(){return(new Date).toLocaleString()},stringify:function(a){if(!this.isObject(a)||null===a)return"";if(this.isObject(e.JSON)&&this.isFunction(e.JSON.stringify))return e.JSON.stringify(a);var b=[];var c="";for(b in a){var d=a[b];this.isString(d)?d='"'+d+'"':this.isObject(d)&&
null!==d&&(d=this.stringify(d));c+='"'+b+'":'+d}return"{"+c+"}"},fetchParamFromURI:function(a,b){b=void 0===b?null:b;var c;b||(b=e.location.href);a=a.replace(/[\[\]]/g,"\\$&");return(c=(new RegExp("[?&]"+a+"(=([^&#?]*)|&|#|$)")).exec(b))?c[2]?decodeURIComponent(c[2].replace(/\+/g," ")):"":null},fetchProtocol:function(){var a;var b=e.location.protocol;if("https:"!==b){var c=RegExp("/^(http:|https:)gre.groupama.fr/script.js$/");var d=e.document.getElementsByTagName("script");for(a=0;a<d.length;a++)if(b=
c.exec(d[a].src),this.isObject(b))return b[1]}return"https:"},isRemote:function(){var a;var b=RegExp("^(http|https)://gre.groupama.fr/v/js/na/na/u/([\\w\\d]{10}).js$");var c=e.document.getElementsByTagName("script");for(a=0;a<c.length;a++)if(b.test(c[a].src))return!0;return!1},sendRequest:function(a,b,c,d,h,l,m){try{var f=e.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");"GET"===a.toUpperCase()&&0<c.length&&(b+="?"+c);f.open(a,b,!0);this.tools.isObject(d)&&Object.keys(d).map(function(g){f[g]=
d[g]});f.onreadystatechange=function(){3<f.readyState&&(200===parseInt(f.status)||204===parseInt(f.status)?h(f):l(f))};"POST"===a.toUpperCase()&&f.setRequestHeader("Content-Type","application/x-www-form-urlencoded");f.setRequestHeader("X-Requested-With","XMLHttpRequest");f.setRequestHeader("X-KWKunijs-Version",(this.tools.isRemote()?"r":"")+"v1.19.1676471101");m&&f.setRequestHeader("X-KWKunijs-Debug",1);f.send(c)}catch(g){return t.log(g),!1}return f},createPixel:function(a){a+=(a.split("?")[1]?"&":
"?")+"kwkujs=1&kwkujsv="+(this.tools.isRemote()?"r":"")+encodeURIComponent("v1.19.1676471101");var b=e.document.createElement("img");b.setAttribute("src",a);b.setAttribute("width","1px");b.setAttribute("height","1px");e.document.body.appendChild(b);this.debug('trkpix "'+a+'" appended to DOM')},documentReady:function(a){"loading"!=r.readyState?a():r.addEventListener?r.addEventListener("DOMContentLoaded",a):a()}};"function"!==typeof Array.prototype.push&&(Array.prototype.push=function(a){this[this.length]=
a;return this.length});var B=function(){};B.prototype={setCookie:function(a,b,c){c=void 0===c?60:c;isNaN(c)&&(c="30");if(!this.tools.isDefined(a)||!this.tools.isDefined(b)||isNaN(c))return!1;var d=new Date;d.setTime(d.getTime()+864E5*c);e.document.cookie=a+"="+b+"; SameSite=None; Secure; expires="+d.toUTCString()+"; path=/";this.debug('store cookie : "'+a+"="+b+"; expires="+d.toUTCString()+'; path=/"');return!0},getCookie:function(a){var b=e.document.cookie.split(";");var c=a+"=";for(a=0;a<b.length;a++){var d=
b[a];var h=d.indexOf(c);if(-1!==h)return d.substring(h+c.length)}return null},isLSReady:function(){try{return e.localStorage.setItem("__storage_test__","__storage_test__"),e.localStorage.removeItem("__storage_test__"),!0}catch(a){return a instanceof DOMException&&(22===a.code||1014===a.code||"QuotaExceededError"===a.name||"NS_ERROR_DOM_QUOTA_REACHED"===a.name)&&e.localStorage&&0!==e.localStorage.length}},setLSData:function(a,b,c){c=void 0===c?60:c;isNaN(c)&&(c="30");var d=(new Date).getTime();c=(new Date(d+
864E5*c)).getTime();try{return e.localStorage.setItem(a,b),e.localStorage.setItem(a+"t",c),this.debug("store "+a+"="+b+" and "+a+"t="+c+" in localstorage"),!0}catch(h){this.debug("unable to access localstorage",h)}},getLSData:function(a){if(this.isLSReady())return[e.localStorage.getItem(a),parseInt(e.localStorage.getItem(a+"t"))]}};var C=function(){};C.prototype={tools:new A,storage:new B,cmpWait:e.hasOwnProperty("KWKcmpWait")&&0<e.KWKcmpWait?parseInt(e.KWKcmpWait):1E3,isEnvDebug:function(){"undefined"===
typeof this.KWKDebug&&(this.KWKDebugLevel=parseInt(this.storage.getCookie("kwkdebug")),this.KWKDebug=0<Math.abs(this.KWKDebugLevel));return this.KWKDebug},debugDoAction:function(){return!this.isEnvDebug()||this.isEnvDebug()&&-1!==this.KWKDebugLevel},debug:function(a,b){this.isEnvDebug()&&(t.log("KWK-UNIJS-DEBUG v1.19.1676471101 l"+this.KWKDebugLevel+" - "+this.tools.printCurrentDate()+" : "+a),this.tools.isDefined(b)&&t.log(b))},buildTrkUrl:function(a){var b=this.tools.fetchProtocol();a=this.tools.isDefined(a.event)&&
0<a.event.length?"":x;return b+"//"+p+"/"+a},buildTrkMandatoryArgs:function(a){var b;var c="";var d=this.tools.isDefined(a.event)?["event"]:["mclic"];if(0<d.length){if(!this.tools.isArray(d))return this.debug("unable to build conv url, missing mandatory args"),!1;for(b=0;b<d.length;b++){if(!a.hasOwnProperty(d[b])||!this.tools.isDefined(a[d[b]]))return this.debug('unable to build conv url : mandatory arg "'+d[b]+'" is missing'),!1;c+=(""===c?"":"&")+(1==u&&"mclic"===d[b]?"":d[b]+"=")+a[d[b]];delete a[d[b]]}}else for(b=
0;b<a.length;b++)c+=(""===c?"":"&")+a[b]+"="+a[b];this.isEnvDebug()&&(c+=(""===c?"":"&")+"__nadebug=1");return c},buildTrkUnivParam:function(a){var b=this.getUniv();return this.tools.isDefined(b)&&0<b.length?(""===a?"":"&")+"kwkuniv="+b:""},buildPtagUrl:function(a,b){return this.tools.fetchProtocol()+"//gre.groupama.fr/u/"+a%41+"/p"+a+(this.tools.isDefined(b)?b:"")+".js"},watch:function(){this.isEnvDebug()&&this.debug("uniJS "+(this.tools.isRemote()?"r":"")+"v1.19.1676471101");this.debug("start watching for kwkuniv");
var a=this.tools.fetchParamFromURI("kwkuniv");this.tools.isDefined(a)?(this.debug('kwkuniv catched with value "'+a+'" from "'+e.location.href+'"'),this.debugDoAction()&&(this.storage.setCookie.call(this,"kwku",a)&&this.debug("kwkuniv stored in cookie kwku"),this.storage.setLSData.call(this,"kwkuls",a)&&this.debug("kwkuniv stored in localstorage kwkuls"))):this.debug("no kwkuniv catched");this.tools.isDefined(e.kwkgtm)&&this.gtmCall(e.kwkgtm)},gtmCall:function(a){w=!0;this.debug("gtmCall with following params: ",
a);u=this.tools.isDefined(a.trkdomain)&&a.trkdomain!==p;p=this.tools.isDefined(a.trkdomain)?a.trkdomain:p;x=u?"":x;var b=this.tools.isDefined(a.trktype)?a.trktype:"conv";var c=this.tools.isDefined(a.progid)?a.progid:0;var d=this.tools.isDefined(a.mclic)&&0<a.mclic.length||"clicktime"===b&&0<c;var h=this.tools.isDefined(a.ptag)&&a.ptag;delete a.trkdomain;delete a.trktype;delete a.progid;d&&("dclick"===b?this.dclick(a):"clicktime"===b?this.clicktime(c):this.conversion(a));h&&0<c&&this.injectPtag([c])},
doTrk:function(a){var b=1==u,c=parseInt(this.storage.getCookie("kwkcmpwait"));0<c&&(this.cmpWait=1E3*c);this.tools.documentReady(function(){this.iabCmpReady()?this.IABConsentCheck.call(this):this.axeptioCmpReady()?this.AxeptioConsentCheck.call(this):this.onetrustNonIabCmpReady()?this.OnetrustConsentCheck.call(this):(this.debug("no compatible CMP detected so far."),0<this.cmpWait&&(this.debug("Wait "+this.cmpWait+"ms before final CMP check."),setTimeout(function(){this.iabCmpReady()?this.IABConsentCheck.call(this):
this.axeptioCmpReady()?this.AxeptioConsentCheck.call(this):this.onetrustNonIabCmpReady()?this.OnetrustConsentCheck.call(this):this.debug("no compatible CMP detected after "+this.cmpWait+"ms waiting delay.")}.bind(this),this.cmpWait)));var d=function(){b?this.fetchKwkCookies(a,n):a(n)};0<this.cmpWait&&!v?e.setTimeout(d.bind(this),this.cmpWait+200):d.call(this)}.bind(this))},conversion:function(a){var b;a.hasOwnProperty("onetrustKwankoCategoryId")&&"string"===typeof a.onetrustKwankoCategoryId&&(y=a.onetrustKwankoCategoryId,
delete a.onetrustKwankoCategoryId);var c={};Object.keys(a).map(function(g){"undefined"===typeof a[g]||"undefined"===a[g]||null==a[g]||"string"===typeof a[g]&&0==a[g].length?(b=e.hasOwnProperty("KWKDefaults")&&e.KWKDefaults.hasOwnProperty(g)?e.KWKDefaults[g]:z.hasOwnProperty(g)?z[g]:void 0,"undefined"!==typeof b&&(c[g.toLowerCase()]=encodeURIComponent(b))):c[g.toLowerCase()]=a[g]});var d=w||this.tools.isDefined(c.altid)&&0<c.altid.length;var h=this.buildTrkUrl.call(this,a);var l=function(g){var k=
this.buildTrkMandatoryArgs.call(this,g);if(!1===k)return!1;Object.keys(g).map(function(q){this.tools.isArray(g[q])?g[q].forEach(function(D){k+=(""===k?"":"&")+q+"[]="+D}):k+=(""===k?"":"&")+q+"="+g[q]}.bind(this));w&&this.tools.isDefined(g.kwkuniv)||(k+=this.buildTrkUnivParam.call(this,k));return k}.call(this,c);if(!h||!l)return this.debug('FAILED to build conv url "'+h+'" and/or args "'+l+'"'),!1;var m=h+"?"+l;var f=function(g){this.tools.isObject(g)&&0<Object.keys(g).length&&g.constructor===Object&&
Object.keys(g).forEach(function(k){"undefined"===typeof g[k]||null==g[k]||"string"===typeof g[k]&&0==g[k].length||(l+=(""===l?"":"&")+k+"="+g[k],m+=(""===m?"":"&")+k+"="+g[k])});this.debugDoAction()&&(d?(this.tools.createPixel.call(this,m),this.debug("trk conversion forced with pixel")):(this.debug((this.debugDoAction()?"trigger ":"should trigger ")+'conversion call on "'+m+'"'),this.tools.sendRequest.call(this,"POST",h,l+(0<l.length?"&":"")+"kwkujs=2",{withCredentials:!0},function(k){k.status&&200===
parseInt(k.status)?this.debug("trk conversion call returned OK"):k.status&&204===parseInt(k.status)?this.debug("trk conversion call returned NOK"):(this.debug("unexpected return status for trk conversion call using xhr",k),this.tools.createPixel.call(this,m),this.debug("trk conversion with pixel fallback"))}.bind(this),function(k){this.debug("trk conversion call failed using xhr",k);this.tools.createPixel.call(this,m);this.debug("trk conversion with pixel fallback")}.bind(this),this.isEnvDebug())))}.bind(this);
this.doTrk(f);return!0},clicktime:function(a){var b=this.tools.fetchProtocol()+"//gre.groupama.fr/na/na/res/trk/script-ct.js";if(this.debugDoAction()){var c=function(d){d=e.document.createElement("script");d.setAttribute("src",b);d.setAttribute("type","text/javascript");d.onload=function(){new __trknanact(a);this.debug("ctime call fired for p"+a)}.bind(this);e.document.getElementsByTagName("body")[0].appendChild(d)}.bind(this);this.doTrk(c);return!0}this.debug('SHOULD append ctime url "'+b+'" to DOM for p'+
a+' and trigger call "__trknanact('+a+')"')},dclick:function(a){var b={};Object.keys(a).map(function(m){"undefined"!==typeof a[m]&&0!=a[m].length&&(b[m.toLowerCase()]=a[m])});var c=this.buildTrkUrl.call(this,b);var d=this.buildTrkMandatoryArgs.call(this,b);if(!1===d)return!1;d+=this.buildTrkUnivParam.call(this,d);if(!c||!d)return this.debug('FAILED to build dclick url "'+c+'" and/or dclick args "'+d+'"'),!1;c+="?"+d;var h=c+"?"+d;var l=function(m){this.tools.isObject(m)&&0<Object.keys(m).length&&
m.constructor===Object&&Object.keys(m).forEach(function(f){d+=(""===d?"":"&")+f+"="+m[f];h+=(""===h?"":"&")+f+"="+m[f]});this.tools.isDefined(b.redir)&&0<b.redir.length?(this.debug('Dclick asked with redir to "'+b.redir+'"'),d+="&redir="+encodeURIComponent(b.redir),h+="&redir="+encodeURIComponent(b.redir),this.debug('Final redir url is "'+h+'"'),this.debugDoAction()?e.location.replace(h):this.debug('SHOULD fire dclick redirection to trk url "'+h+'"')):this.debugDoAction()?this.tools.sendRequest.call(this,
"POST",c,d+(0<d.length?"&":"")+"kwkujs=2",{withCredentials:!0},function(f){f.status&&200===parseInt(f.status)?this.debug("trk dclick call returned OK"):f.status&&204===parseInt(f.status)?this.debug("trk dclick call returned NOK"):(this.debug("unexpected return status for dclick call using xhr",f),this.tools.createPixel.call(this,h),this.debug("trk dclick with pixel fallback"))}.bind(this),function(f){this.debug("trk dclick call failed using xhr",f);this.tools.createPixel.call(this,h);this.debug("trk dclick with pixel fallback")}.bind(this),
this.isEnvDebug()):this.debug('SHOULD fire dclick url "'+h+'" or add it as pixel in the current page.')}.bind(this);this.doTrk(l);return!0},ptag:function(a){this.tools.isDefined(a)&&this.tools.isDefined(Object.keys(a))&&0<Object.keys(a).length&&(this.debug("set following args in window.ptag_params :",a),e.ptag_params=a);var b=function(c){c=this.tools.isString(c)?JSON.parse(c):c;this.tools.isArray(c)&&0!=c.length?this.debug(c.length+" progs loaded from setup : "+c):(c=["57361"],this.debug("init prog list from default prog 57361"));
this.injectPtag.call(this,c)}.bind(this);fetch(this.buildPtagUrl.call(this,"57361","u")).then(function(c){return c.json()}).then(function(c){b(c)});return!0},injectPtag:function(a){var b;for(b=0;b<a.length;b++){var c=this.buildPtagUrl.call(this,a[b]);if(!this.tools.isDefined(c)||0===c.length){this.debug("Unable to build PTag url for p"+a[b]);break}if(this.debugDoAction()){var d=e.document.createElement("script");d.src=c;e.document.body.appendChild(d);this.debug('Ptag url "'+c+'" appended to DOM')}else this.debug('SHOULD append Ptag url "'+
c+'" to current page.')}},fetchKwkCookies:function(a,b){var c=function(d,h,l){var m=new Date;Object.keys(d).forEach(function(f){var g=void 0!==d[f][0]&&null!==d[f][0]?d[f][0]:"";var k=void 0!==d[f][1]&&null!==d[f][1]?parseInt(d[f][1]):"30";m.setTime(m.getTime()+864E5*k);e.document.cookie=f+"="+g+";expires="+m.toGMTString()+";path=/;domain="+p.substring(p.indexOf(".",0))});h.call(this,l)};this.tools.sendRequest.call(this,"POST",this.tools.fetchProtocol()+"//action.metaffiliation.com/kwkc.php","",{withCredentials:!0},
function(d){d.status&&200===parseInt(d.status)?(d=JSON.parse(d.response),this.tools.isObject(d)&&(c.call(this,d,a,b),this.debug("kwk cookies successfully fetched"))):(this.debug("xhr call returned error status code",d),a.call(this,b))}.bind(this),function(d){this.debug("unable to fetch trk cookie using xhr",d);a.call(this,b)}.bind(this),this.isEnvDebug());return!0},IABConsentCheck:function(){try{__tcfapi("addEventListener",2,function(a,b){b?(this.debug("IAB cmp callback successfully triggered with status "+
a.eventStatus+" and Kwanko consent "+("undefined"!==typeof a.vendor.consents&&a.vendor.consents[702]?a.vendor.consents[702]:"na")),2==this.KWKDebugLevel&&this.debug("Dumping IAB tcData object :",a),n.gdpr="undefined"===typeof a.gdprApplies?"2":a.gdprApplies?"1":"0",n.gdpr_kwk="undefined"===typeof a.vendor.consents||"undefined"===typeof a.vendor.consents[702]?"2":a.vendor.consents[702]?"1":"0",n.gdpr_consent="string"===typeof a.tcString&&0<a.tcString.length?"iabtcfv2_"+a.tcString:"",v=!0,this.debug("GDPR params loaded from IAB cmp: ",
n),__tcfapi("removeEventListener",2,function(c){},a.listenerId)):b||this.debug("tcf API failed to fetch consent")}.bind(this))}catch(a){this.debug("exception catched from CMP provider, unable to fetch consent",a)}},AxeptioConsentCheck:function(){try{e._axcb=e._axcb||[],e._axcb.push(function(a){a.on("cookies:complete",function(b){this.debug("Axeptio cmp callback successfully triggered.");2==this.KWKDebugLevel&&this.debug("Dumping Axeptio SDK object :",b);if("object"===typeof b&&b.hasOwnProperty("kwanko")){var c=
{id:a.settings.clientId,tsnow:Date.now(),publishedAt:a.config.publishedAt,vendors:b};n.gdpr="1";n.gdpr_kwk=!0===b.kwanko?"1":!1===b.kwanko?"0":"2";n.gdpr_consent="axeptio_"+btoa(JSON.stringify(c));v=!0;this.debug("GDPR params loaded from Axeptio cmp : ",n)}}.bind(this),{replay:!0,once:!0})}.bind(this))}catch(a){this.debug("exception catched from Axeptio CMP, unable to fetch consent",a)}},OnetrustConsentCheck:function(){try{var a="string"==typeof e.OnetrustActiveGroups?OnetrustActiveGroups.split(",").map(function(l){return"string"==
typeof l?l.trim():l}).filter(function(l){return l}):[];var b=y.split(",").filter(function(l){return l})||[];var c;var d=(null==(c=r.cookie.match("(^|;)\\s*OptanonConsent\\s*=\\s*([^;]+)"))?void 0:c.pop())||"";var h=b.filter(function(l){return a.includes(l)}).length==b.length&&0<b.length?"1":"0";this.debug("Onetrust non IAB cmp callback successfully triggered.");n.gdpr="1";n.gdpr_kwk=h;n.gdpr_consent=0<d.length?"onetrust_"+btoa(d):"onetrust_"+btoa(Date.now()+"_"+a.join("_"));v=!0;2==this.KWKDebugLevel&&
(this.debug("Dumping Onetrust categories consent :"+a.join(",")),this.debug("Dumping Onetrust expected categories consent :"+b.join(",")),this.debug("Dumping Onetrust consent string fetched from OptanonConsent cookie :"+d));this.debug("GDPR params loaded from Onetrust non IAB cmp : "+JSON.stringify(n))}catch(l){this.debug("exception catched from OneTrust CMP, unable to fetch consent",l)}},getUniv:function(){var a=this.storage.getCookie("kwku");if(!this.tools.isDefined(a)||0>=a.length)a=this.storage.getLSData("kwkulskwkuniv")[0];
return a},iabCmpReady:function(){return"function"===typeof e.__tcfapi},axeptioCmpReady:function(){return"object"===typeof e.axeptioSDK},onetrustNonIabCmpReady:function(){return"object"===typeof e.OneTrust&&"undefined"===typeof e.__tcfapi},cmpDetected:function(){return this.iabCmpReady()?"IAB cmp detected !":this.axeptioCmpReady()?"Axeptio cmp detected !":this.onetrustNonIabCmpReady()?"OneTrust non IAB cmp detected !":"no cmp detected."}};e.KWKUniJS=new C;e.KWKUniJS.watch()})(window,document);
