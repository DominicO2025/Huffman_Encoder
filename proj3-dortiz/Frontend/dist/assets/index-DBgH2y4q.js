var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var ee=x.prototype=new b;ee.constructor=x,_(ee,y.prototype),ee.isPureReactComponent=!0;var te=Array.isArray;function ne(){}var S={H:null,A:null,T:null,S:null},re=Object.prototype.hasOwnProperty;function C(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ie(e,t){return C(e.type,t,e.props)}function ae(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function oe(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var se=/\/+/g;function ce(e,t){return typeof e==`object`&&e&&e.key!=null?oe(``+e.key):t.toString(36)}function le(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(ne,ne):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ue(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ue(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ce(e,0):a,te(o)?(i=``,c!=null&&(i=c.replace(se,`$&/`)+`/`),ue(o,r,i,``,function(e){return e})):o!=null&&(ae(o)&&(o=ie(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(se,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(te(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ce(a,u),c+=ue(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ce(a,u++),c+=ue(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ue(le(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function de(e,t,n){if(e==null)return e;var r=[],i=0;return ue(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function fe(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var pe=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function me(e){var t=S.T,n={};n.types=t===null?null:t.types,S.T=n;try{var r=e(),i=S.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(ne,pe)}catch(e){pe(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),S.T=t}}function he(e){var t=S.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else me(he.bind(null,e))}var ge={map:de,forEach:function(e,t,n){de(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return de(e,function(){t++}),t},toArray:function(e){return de(e,function(e){return e})||[]},only:function(e){if(!ae(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=ge,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},e.addTransitionType=he,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!re.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return C(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)re.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return C(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ae,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:fe}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=me,e.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},e.use=function(e){return S.H.use(e)},e.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},e.useCallback=function(e,t){return S.H.useCallback(e,t)},e.useContext=function(e){return S.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return S.H.useEffect(e,t)},e.useEffectEvent=function(e){return S.H.useEffectEvent(e)},e.useId=function(){return S.H.useId()},e.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return S.H.useMemo(e,t)},e.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},e.useRef=function(e){return S.H.useRef(e)},e.useState=function(e){return S.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return S.H.useTransition()},e.version=`19.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,ee||(ee=!0,ie());else{var t=n(l);t!==null&&se(x,t.startTime-e)}}}var ee=!1,te=-1,ne=5,S=-1;function re(){return g?!0:!(e.unstable_now()-S<ne)}function C(){if(g=!1,ee){var t=e.unstable_now();S=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(te),te=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&re());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&se(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ie():ee=!1}}}var ie;if(typeof y==`function`)ie=function(){y(C)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=C,ie=function(){oe.postMessage(null)}}else ie=function(){_(C,0)};function se(t,n){te=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):ne=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(te),te=-1):h=!0,se(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,ie()))),r},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.1`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,ee=null;function te(e,t,n){return e===n||e===t&&(x=e,!0)}function ne(e,t,n){return e===n?(ee=e,!1):e===t&&(ee!==null&&(x=e),!0)}function S(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function re(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var C=Object.assign,ie=Symbol.for(`react.element`),ae=Symbol.for(`react.transitional.element`),oe=Symbol.for(`react.portal`),se=Symbol.for(`react.fragment`),ce=Symbol.for(`react.strict_mode`),le=Symbol.for(`react.profiler`),ue=Symbol.for(`react.consumer`),de=Symbol.for(`react.context`),fe=Symbol.for(`react.forward_ref`),pe=Symbol.for(`react.suspense`),me=Symbol.for(`react.suspense_list`),he=Symbol.for(`react.memo`),ge=Symbol.for(`react.lazy`),_e=Symbol.for(`react.activity`),ve=Symbol.for(`react.legacy_hidden`),ye=Symbol.for(`react.memo_cache_sentinel`),be=Symbol.for(`react.view_transition`),xe=Symbol.for(`react.recoverable`),Se=Symbol.iterator;function Ce(e){return typeof e!=`object`||!e?null:(e=Se&&e[Se]||e[`@@iterator`],typeof e==`function`?e:null)}var we=Symbol.for(`react.client.reference`);function Te(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===we?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case se:return`Fragment`;case le:return`Profiler`;case ce:return`StrictMode`;case pe:return`Suspense`;case me:return`SuspenseList`;case _e:return`Activity`;case be:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case oe:return`Portal`;case de:return e.displayName||`Context`;case ue:return(e._context.displayName||`Context`)+`.Consumer`;case fe:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case he:return t=e.displayName||null,t===null?Te(e.type)||`Memo`:t;case ge:t=e._payload,e=e._init;try{return Te(e(t))}catch{}}return null}var Ee=Array.isArray,w=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,De={pending:!1,data:null,method:null,action:null},Oe=[],ke=-1;function Ae(e){return{current:e}}function je(e){0>ke||(e.current=Oe[ke],Oe[ke]=null,ke--)}function E(e,t){ke++,Oe[ke]=e.current,e.current=t}var Me=Ae(null),Ne=Ae(null),Pe=Ae(null),Fe=Ae(null);function Ie(e,t){switch(E(Pe,t),E(Ne,e),E(Me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}je(Me),E(Me,e)}function Le(){je(Me),je(Ne),je(Pe)}function Re(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,E(Fe,e)),t=Me.current;var n=dp(t,e.type);t!==n&&(E(Ne,e),E(Me,n))}function ze(e){Ne.current===e&&(je(Me),je(Ne)),Fe.current===e&&(je(Fe),sh._currentValue=De)}var Be,Ve;function He(e){if(Be===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Be=t&&t[1]||``,Ve=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Be+e+Ve}var Ue=!1;function We(e,t){if(!e||Ue)return``;Ue=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ue=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?He(n):``}function Ge(e,t){switch(e.tag){case 26:case 27:case 5:return He(e.type);case 16:return He(`Lazy`);case 13:return e.child!==t&&t!==null?He(`Suspense Fallback`):He(`Suspense`);case 19:return He(`SuspenseList`);case 0:case 15:return We(e.type,!1);case 11:return We(e.type.render,!1);case 1:return We(e.type,!0);case 31:return He(`Activity`);case 30:return He(`ViewTransition`);default:return``}}function Ke(e){try{var t=``,n=null;do t+=Ge(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var qe=Object.prototype.hasOwnProperty,Je=t.unstable_scheduleCallback,Ye=t.unstable_cancelCallback,Xe=t.unstable_shouldYield,Ze=t.unstable_requestPaint,Qe=t.unstable_now,$e=t.unstable_getCurrentPriorityLevel,et=t.unstable_ImmediatePriority,tt=t.unstable_UserBlockingPriority,nt=t.unstable_NormalPriority,rt=t.unstable_LowPriority,it=t.unstable_IdlePriority,at=t.log,ot=t.unstable_setDisableYieldValue,st=null,ct=null;function lt(e){if(typeof at==`function`&&ot(e),ct&&typeof ct.setStrictMode==`function`)try{ct.setStrictMode(st,e)}catch{}}var ut=Math.clz32?Math.clz32:pt,dt=Math.log,ft=Math.LN2;function pt(e){return e>>>=0,e===0?32:31-(dt(e)/ft|0)|0}var mt=256,ht=262144,gt=4194304;function _t(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=_t(n))):i=_t(o):i=_t(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=_t(n))):i=_t(o)):i=_t(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function yt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function bt(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-ut(n),i=1<<r;t|=e[r],n&=~i}return t}function xt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function St(){var e=gt;return gt<<=1,!(gt&62914560)&&(gt=4194304),e}function Ct(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Tt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-ut(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Et(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Et(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ut(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Dt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ut(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Ot(e,t){var n=t&-t;return n=n&42?1:kt(n),(n&(e.suspendedLanes|t))===0?n:0}function kt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function At(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function jt(){var e=T.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function Mt(e,t){var n=T.p;try{return T.p=e,t()}finally{T.p=n}}var Nt=Math.random().toString(36).slice(2),Pt=`__reactFiber$`+Nt,Ft=`__reactProps$`+Nt,It=`__reactContainer$`+Nt,Lt=`__reactEvents$`+Nt,Rt=`__reactListeners$`+Nt,zt=`__reactHandles$`+Nt,Bt=`__reactResources$`+Nt,Vt=`__reactMarker$`+Nt,Ht=`__reactLoad$`+Nt;function Ut(e){delete e[Pt],delete e[Ft],delete e[Rt],delete e[zt]}function Wt(e){var t;if(t=e[Pt])return t;for(var n=e.parentNode;n;){if(t=n[It]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[Pt])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Gt(e){if(e=e[Pt]||e[It]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Kt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function qt(e){var t=e[Bt];return t||=e[Bt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function D(e){e[Vt]=!0}function Jt(e){e[Ht]=void 0}var Yt=new Set,Xt={};function Zt(e,t){Qt(e,t),Qt(e+`Capture`,t)}function Qt(e,t){for(Xt[e]=t,e=0;e<t.length;e++)Yt.add(t[e])}var $t=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),en={},tn={};function nn(e){return qe.call(tn,e)?!0:qe.call(en,e)?!1:$t.test(e)?tn[e]=!0:(en[e]=!0,!1)}var O=!1;function rn(){var e=O;return O=!1,e}function an(e,t,n){if(nn(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function on(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function sn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function cn(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function ln(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function un(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function dn(e){if(!e._valueTracker){var t=ln(e)?`checked`:`value`;e._valueTracker=un(e,t,``+e[t])}}function fn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=ln(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var pn=/[\n"\\]/g;function mn(e){return e.replace(pn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function hn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+cn(t)):e.value!==``+cn(t)&&(e.value=``+cn(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):_n(e,cn(n)):o===`number`&&e.value==t?_n(e,cn(e.value)):_n(e,cn(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+cn(s):e.removeAttribute(`name`)}function gn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){dn(e);return}n=n==null?``:``+cn(n),t=t==null?n:``+cn(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),dn(e)}function _n(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function vn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function yn(e,t,n){t!=null&&(t=``+cn(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+cn(n)}function bn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(Ee(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=cn(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),dn(e)}function xn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Cn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Sn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function wn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,O=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(Cn(e,a,r),O=!0)}else for(var o in t)t.hasOwnProperty(o)&&Cn(e,o,t[o])}function Tn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var En=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Dn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function On(e){return Dn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function kn(){}var An=null;function jn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mn=null,Nn=null;function Pn(e){var t=Gt(e);if(t&&(e=t.stateNode)){var n=e[Ft]||null;a:switch(e=t.stateNode,t.type){case`input`:if(hn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+mn(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Ft]||null;if(!a)throw Error(i(90));hn(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&fn(r)}break a;case`textarea`:yn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&vn(e,!!n.multiple,t,!1)}}}var Fn=!1;function In(e,t,n){if(Fn)return e(t,n);Fn=!0;try{return e(t)}finally{if(Fn=!1,(Mn!==null||Nn!==null)&&(zd(),Mn&&(t=Mn,e=Nn,Nn=Mn=null,Pn(t),e)))for(t=0;t<e.length;t++)Pn(e[t])}}function Ln(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Ft]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var Rn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,zn=!1;if(Rn)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){zn=!0}}),window.addEventListener(`test`,Bn,Bn),window.removeEventListener(`test`,Bn,Bn)}catch{zn=!1}var Vn=null,Hn=null,Un=null;function Wn(){if(Un)return Un;var e,t=Hn,n=t.length,r,i=`value`in Vn?Vn.value:Vn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Un=i.slice(e,1<r?1-r:void 0)}function Gn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Kn(){return!0}function qn(){return!1}function Jn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Kn:qn,this.isPropagationStopped=qn,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Kn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Kn)},persist:function(){},isPersistent:Kn}),t}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xn=Jn(Yn),Zn=C({},Yn,{view:0,detail:0}),Qn=Jn(Zn),$n,er,tr,nr=C({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==tr&&(tr&&e.type===`mousemove`?($n=e.screenX-tr.screenX,er=e.screenY-tr.screenY):er=$n=0,tr=e),$n)},movementY:function(e){return`movementY`in e?e.movementY:er}}),rr=Jn(nr),ir=Jn(C({},nr,{dataTransfer:0})),ar=Jn(C({},Zn,{relatedTarget:0})),or=Jn(C({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0})),sr=Jn(C({},Yn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),cr=Jn(C({},Yn,{data:0})),lr={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},ur={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},dr={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function fr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dr[e])?!!t[e]:!1}function pr(){return fr}var mr=Jn(C({},Zn,{key:function(e){if(e.key){var t=lr[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Gn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?ur[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pr,charCode:function(e){return e.type===`keypress`?Gn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Gn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),hr=Jn(C({},nr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),gr=Jn(C({},Yn,{submitter:0})),_r=Jn(C({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pr})),vr=Jn(C({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0})),yr=Jn(C({},nr,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),br=Jn(C({},Yn,{newState:0,oldState:0,source:0})),xr=[9,13,27,32],Sr=Rn&&`CompositionEvent`in window,Cr=null;Rn&&`documentMode`in document&&(Cr=document.documentMode);var wr=Rn&&`TextEvent`in window&&!Cr,Tr=Rn&&(!Sr||Cr&&8<Cr&&11>=Cr),Er=` `,Dr=!1;function Or(e,t){switch(e){case`keyup`:return xr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function kr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Ar=!1;function jr(e,t){switch(e){case`compositionend`:return kr(t);case`keypress`:return t.which===32?(Dr=!0,Er):null;case`textInput`:return e=t.data,e===Er&&Dr?null:e;default:return null}}function Mr(e,t){if(Ar)return e===`compositionend`||!Sr&&Or(e,t)?(e=Wn(),Un=Hn=Vn=null,Ar=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Tr&&t.locale!==`ko`?null:t.data;default:return null}}var Nr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Nr[e.type]:t===`textarea`}function Fr(e,t,n,r){Mn?Nn?Nn.push(r):Nn=[r]:Mn=r,t=Jf(t,`onChange`),0<t.length&&(n=new Xn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Ir=null,Lr=null;function Rr(e){Vf(e,0)}function zr(e){if(fn(Kt(e)))return e}function Br(e,t){if(e===`change`)return t}var Vr=!1;if(Rn){var Hr;if(Rn){var Ur=`oninput`in document;if(!Ur){var Wr=document.createElement(`div`);Wr.setAttribute(`oninput`,`return;`),Ur=typeof Wr.oninput==`function`}Hr=Ur}else Hr=!1;Vr=Hr&&(!document.documentMode||9<document.documentMode)}function Gr(){Ir&&(Ir.detachEvent(`onpropertychange`,Kr),Lr=Ir=null)}function Kr(e){if(e.propertyName===`value`&&zr(Lr)){var t=[];Fr(t,Lr,e,jn(e)),In(Rr,t)}}function qr(e,t,n){e===`focusin`?(Gr(),Ir=t,Lr=n,Ir.attachEvent(`onpropertychange`,Kr)):e===`focusout`&&Gr()}function Jr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return zr(Lr)}function Yr(e,t){if(e===`click`)return zr(t)}function Xr(e,t){if(e===`input`||e===`change`)return zr(t)}function Zr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Qr=typeof Object.is==`function`?Object.is:Zr;function $r(e,t){if(Qr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qe.call(t,i)||!Qr(e[i],t[i]))return!1}return!0}function ei(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function ti(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ni(e,t){var n=ti(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=ti(n)}}function ri(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ri(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ii(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ei(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=ei(e.document)}return t}function ai(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var oi=Rn&&`documentMode`in document&&11>=document.documentMode,si=null,ci=null,li=null,ui=!1;function di(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ui||si==null||si!==ei(r)||(r=si,`selectionStart`in r&&ai(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),li&&$r(li,r)||(li=r,r=Jf(ci,`onSelect`),0<r.length&&(t=new Xn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=si)))}function fi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var pi={animationend:fi(`Animation`,`AnimationEnd`),animationiteration:fi(`Animation`,`AnimationIteration`),animationstart:fi(`Animation`,`AnimationStart`),transitionrun:fi(`Transition`,`TransitionRun`),transitionstart:fi(`Transition`,`TransitionStart`),transitioncancel:fi(`Transition`,`TransitionCancel`),transitionend:fi(`Transition`,`TransitionEnd`)},mi={},hi={};Rn&&(hi=document.createElement(`div`).style,`AnimationEvent`in window||(delete pi.animationend.animation,delete pi.animationiteration.animation,delete pi.animationstart.animation),`TransitionEvent`in window||delete pi.transitionend.transition);function gi(e){if(mi[e])return mi[e];if(!pi[e])return e;var t=pi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hi)return mi[e]=t[n];return e}var _i=gi(`animationend`),vi=gi(`animationiteration`),yi=gi(`animationstart`),bi=gi(`transitionrun`),xi=gi(`transitionstart`),Si=gi(`transitioncancel`),Ci=gi(`transitionend`),wi=new Map,Ti=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Ti.push(`scrollEnd`);function Ei(e,t){wi.set(e,t),Zt(t,[e])}var Di=0;function Oi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=bd.identifierPrefix;var n=Di++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function ki(e){if(e==null||typeof e==`string`)return e;var t=null,n=Od;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function Ai(e,t){return e=ki(e),t=ki(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var ji=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Mi=[],Ni=0,Pi=0;function Fi(){for(var e=Ni,t=Pi=Ni=0;t<e;){var n=Mi[t];Mi[t++]=null;var r=Mi[t];Mi[t++]=null;var i=Mi[t];Mi[t++]=null;var a=Mi[t];if(Mi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&zi(n,i,a)}}function Ii(e,t,n,r){Mi[Ni++]=e,Mi[Ni++]=t,Mi[Ni++]=n,Mi[Ni++]=r,Pi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Li(e,t,n,r){return Ii(e,t,n,r),Bi(e)}function Ri(e,t){return Ii(e,null,null,t),Bi(e)}function zi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-ut(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Bi(e){if(50<kd)throw kd=0,Ad=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Vi={};function Hi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ui(e,t,n,r){return new Hi(e,t,n,r)}function Wi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gi(e,t){var n=e.alternate;return n===null?(n=Ui(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ki(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function qi(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Wi(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,Me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case _e:return e=Ui(31,n,t,a),e.elementType=_e,e.lanes=o,e;case se:return Ji(n.children,a,o,t);case ce:s=8,a|=24;break;case le:return e=Ui(12,n,t,a|2),e.elementType=le,e.lanes=o,e;case pe:return e=Ui(13,n,t,a),e.elementType=pe,e.lanes=o,e;case me:return e=Ui(19,n,t,a),e.elementType=me,e.lanes=o,e;case ve:case be:return e=a|32,e=Ui(30,n,t,e),e.elementType=be,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case de:s=10;break a;case ue:s=9;break a;case fe:s=11;break a;case he:s=14;break a;case ge:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Ui(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Ji(e,t,n,r){return e=Ui(7,e,r,t),e.lanes=n,e}function Yi(e,t,n){return e=Ui(6,e,null,t),e.lanes=n,e}function Xi(e){var t=Ui(18,null,null,0);return t.stateNode=e,t}function Zi(e,t,n){return t=Ui(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Qi=new WeakMap;function $i(e,t){if(typeof e==`object`&&e){var n=Qi.get(e);return n===void 0?(t={value:e,source:t,stack:Ke(t)},Qi.set(e,t),t):n}return{value:e,source:t,stack:Ke(t)}}var ea=[],ta=0,na=null,ra=0,ia=[],aa=0,oa=null,sa=1,ca=``;function la(e,t){ea[ta++]=ra,ea[ta++]=na,na=e,ra=t}function ua(e,t,n){ia[aa++]=sa,ia[aa++]=ca,ia[aa++]=oa,oa=e;var r=sa;e=ca;var i=32-ut(r)-1;r&=~(1<<i),n+=1;var a=32-ut(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,sa=1<<32-ut(t)+i|n<<i|r,ca=a+e}else sa=1<<a|n<<i|r,ca=e}function da(e){e.return!==null&&(la(e,1),ua(e,1,0))}function fa(e){for(;e===na;)na=ea[--ta],ea[ta]=null,ra=ea[--ta],ea[ta]=null;for(;e===oa;)oa=ia[--aa],ia[aa]=null,ca=ia[--aa],ia[aa]=null,sa=ia[--aa],ia[aa]=null}function pa(e,t){ia[aa++]=sa,ia[aa++]=ca,ia[aa++]=oa,sa=t.id,ca=t.overflow,oa=e}var ma=null,k=null,A=!1,ha=null,ga=!1,_a=Error(i(519));function va(e){throw wa($i(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),_a}function ya(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Pt]=e,t[Ft]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Q(zf[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),gn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),bn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ep(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=kn),t=!0):t=!1,t||va(e,!0)}function ba(e){for(ma=e.return;ma;)switch(ma.tag){case 5:case 31:case 13:ga=!1;return;case 27:case 3:ga=!0;return;default:ma=ma.return}}function xa(e){if(e!==ma)return!1;if(!A)return ba(e),A=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&k&&va(e),ba(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));k=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));k=dm(e)}else t===27?(t=k,Sp(e.type)?(e=um,um=null,k=e):k=t):k=ma?lm(e.stateNode.nextSibling):null;return!0}function Sa(){k=ma=null,A=!1}function Ca(){var e=ha;return e!==null&&(pd===null?pd=e:pd.push.apply(pd,e),ha=null),e}function wa(e){ha===null?ha=[e]:ha.push(e)}var Ta=Ae(null),Ea=null,Da=null;function Oa(e,t,n){E(Ta,t._currentValue),t._currentValue=n}function ka(e){e._currentValue=Ta.current,je(Ta)}function Aa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ja(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Aa(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Aa(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Aa(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ma(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Qr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Fe.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&ja(t,e,n,r),t.flags|=262144,e!==null}function Na(e){for(e=e.firstContext;e!==null;){if(!Qr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pa(e){Ea=e,Da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fa(e){return La(Ea,e)}function Ia(e,t){return Ea===null&&Pa(e),La(e,t)}function La(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Da===null){if(e===null)throw Error(i(308));Da=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Da=Da.next=t;return n}var Ra=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},za=t.unstable_scheduleCallback,Ba=t.unstable_NormalPriority,j={$$typeof:de,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Va(){return{controller:new Ra,data:new Map,refCount:0}}function Ha(e){e.refCount--,e.refCount===0&&za(Ba,function(){e.controller.abort()})}function Ua(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Wa=null;function Ga(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ka=null,qa=0,Ja=0,Ya=null;function Xa(e,t){if(Ka===null){var n=Ka=[];qa=0,Ja=Pf(),Ya={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return qa++,t.then(Za,Za),t}function Za(){if(--qa===0&&(Wa=null,Ka!==null)){Ya!==null&&(Ya.status=`fulfilled`);var e=Ka;Ka=null,Ja=0,Ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Qa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var $a=w.S;w.S=function(e,t){if(gd=Qe(),typeof t==`object`&&t&&typeof t.then==`function`&&Xa(e,t),Wa!==null)for(var n=bf;n!==null;)Ua(n,Wa),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)Ua(r,n),r=r.next;if(Ja!==0){r=Wa,r===null&&(r=Wa=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}$a!==null&&$a(e,t)};var eo=Ae(null);function to(){var e=eo.current;return e===null?G.pooledCache:e}function no(e,t){t===null?E(eo,eo.current):E(eo,t.pool)}function ro(){var e=to();return e===null?null:{parent:j._currentValue,pool:e}}var io=Error(i(460)),ao=Error(i(474)),oo=Error(i(542)),so={then:function(){}};function co(e){return e=e.status,e===`fulfilled`||e===`rejected`}function lo(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(kn,kn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,mo(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(kn,kn);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,mo(e),e}throw fo=t,io}}function uo(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(fo=e,io):e}}var fo=null;function po(){if(fo===null)throw Error(i(459));var e=fo;return fo=null,e}function mo(e){if(e===io||e===oo)throw Error(i(483))}var ho=null,go=0;function _o(e){var t=go;return go+=1,ho===null&&(ho=[]),lo(ho,e,t)}function vo(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function yo(e,t){throw t.$$typeof===ie?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function bo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Gi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Yi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===se?(e=d(e,t,n.props.children,r,n.key),vo(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ge&&uo(i)===t.type)?(t=a(t,n.props),vo(t,n),t.return=e,t):(t=qi(n.type,n.key,n.props,null,e.mode,r),vo(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Zi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Ji(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Yi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case ae:return n=qi(t.type,t.key,t.props,null,e.mode,n),vo(n,t),n.return=e,n;case oe:return t=Zi(t,e.mode,n),t.return=e,t;case ge:return t=uo(t),f(e,t,n)}if(Ee(t)||Ce(t))return t=Ji(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,_o(t),n);if(t.$$typeof===de)return f(e,Ia(e,t),n);yo(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case ae:return n.key===i?l(e,t,n,r):null;case oe:return n.key===i?u(e,t,n,r):null;case ge:return n=uo(n),p(e,t,n,r)}if(Ee(n)||Ce(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,_o(n),r);if(n.$$typeof===de)return p(e,t,Ia(e,n),r);yo(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case ae:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case oe:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ge:return r=uo(r),m(e,t,n,r,i)}if(Ee(r)||Ce(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,_o(r),i);if(r.$$typeof===de)return m(e,t,n,Ia(t,r),i);yo(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),A&&la(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return A&&la(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),A&&la(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),A&&la(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return A&&la(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),A&&la(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===se&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case ae:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===se){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),vo(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ge&&uo(l)===r.type){n(e,r.sibling),c=a(r,o.props),vo(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===se?(c=Ji(o.props.children,e.mode,c,o.key),vo(c,o),c.return=e,e=c):(c=qi(o.type,o.key,o.props,null,e.mode,c),vo(c,o),c.return=e,e=c)}return s(e);case oe:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Zi(o,e.mode,c),c.return=e,e=c}return s(e);case ge:return o=uo(o),_(e,r,o,c)}if(Ee(o))return h(e,r,o,c);if(Ce(o)){if(l=Ce(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,_o(o),c);if(o.$$typeof===de)return _(e,r,Ia(e,o),c);yo(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Yi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{go=0;var i=_(e,t,n,r);return ho=null,i}catch(t){if(t===io||t===oo)throw t;var a=Ui(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var xo=bo(!0),So=bo(!1),Co=!1;function wo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function To(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Eo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Do(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Bi(e),zi(e,null,n),t}return Ii(e,r,t,n),Bi(e)}function Oo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Dt(e,n)}}function ko(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ao=!1;function jo(){if(Ao){var e=Ya;if(e!==null)throw e}}function Mo(e,t,n,r){Ao=!1;var i=e.updateQueue;Co=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===Ja&&(Ao=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=C({},d,f);break a;case 2:Co=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),sd|=o,e.lanes=o,e.memoizedState=d}}function No(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Po(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)No(n[e],t)}var Fo=Ae(null),Io=Ae(0);function Lo(e,t){e=od,E(Io,e),E(Fo,t),od=e|t.baseLanes}function Ro(){E(Io,od),E(Fo,Fo.current)}function zo(){od=Io.current,je(Fo),je(Io)}var Bo=Ae(null),Vo=null;function Ho(e){var t=e.alternate;E(qo,qo.current&1),E(Bo,e),Vo===null&&(t===null||Fo.current!==null||t.memoizedState!==null)&&(Vo=e)}function Uo(e){E(qo,qo.current),E(Bo,e),Vo===null&&(Vo=e)}function Wo(e){e.tag===22?(E(qo,qo.current),E(Bo,e),Vo===null&&(Vo=e)):Go()}function Go(){E(qo,qo.current),E(Bo,Bo.current)}function Ko(e){je(Bo),Vo===e&&(Vo=null),je(qo)}var qo=Ae(0);function Jo(e,t){E(Bo,Bo.current),E(qo,t)}function Yo(e){je(qo),je(Bo),Vo===e&&(Vo=null)}function Xo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zo=0,M=null,N=null,P=null,Qo=!1,$o=!1,es=!1,ts=0,ns=0,rs=null,is=0;function F(){throw Error(i(321))}function as(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qr(e[n],t[n]))return!1;return!0}function os(e,t,n,r,i,a){return Zo=a,M=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Sc:Cc,es=!1,a=n(r,i),es=!1,$o&&(a=cs(t,n,r,i)),ss(e),a}function ss(e){w.H=xc;var t=N!==null&&N.next!==null;if(Zo=0,P=N=M=null,Qo=!1,ns=0,rs=null,t)throw Error(i(300));e===null||L||(e=e.dependencies,e!==null&&Na(e)&&(L=!0))}function cs(e,t,n,r){M=e;var a=0;do{if($o&&(rs=null),ns=0,$o=!1,25<=a)throw Error(i(301));if(a+=1,P=N=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}w.H=wc,o=t(n,r)}while($o);return o}function ls(){var e=w.H,t=e.useState()[0];return t=typeof t.then==`function`?hs(t):t,e=e.useState()[0],(N===null?null:N.memoizedState)!==e&&(M.flags|=1024),t}function us(){var e=ts!==0;return ts=0,e}function ds(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function fs(e){if(Qo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Qo=!1}Zo=0,P=N=M=null,$o=!1,ns=ts=0,rs=null}function ps(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return P===null?M.memoizedState=P=e:P=P.next=e,P}function I(){if(N===null){var e=M.alternate;e=e===null?null:e.memoizedState}else e=N.next;var t=P===null?M.memoizedState:P.next;if(t!==null)P=t,N=e;else{if(e===null)throw M.alternate===null?Error(i(467)):Error(i(310));N=e,e={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null},P===null?M.memoizedState=P=e:P=P.next=e}return P}function ms(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hs(e){var t=ns;return ns+=1,rs===null&&(rs=[]),e=lo(rs,e,t),t=M,(P===null?t.memoizedState:P.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Sc:Cc),e}function gs(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return hs(e);if(e.$$typeof===xe)return;if(e.$$typeof===de)return Fa(e)}throw Error(i(438,String(e)))}function _s(e){var t=null,n=M.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=M.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ms(),M.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ye;return t.index++,n}function vs(e,t){return typeof t==`function`?t(e):t}function ys(e){return bs(I(),N,e)}function bs(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Zo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ja&&(d=!0);else if((Zo&p)===p){u=u.next,p===Ja&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,M.lanes|=p,sd|=p;f=u.action,es&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,M.lanes|=f,sd|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Qr(o,e.memoizedState)&&(L=!0,d&&(n=Ya,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function xs(e){var t=I(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Qr(o,t.memoizedState)||(L=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ss(e,t,n){var r=M,a=I(),o=A;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Qr((N||a).memoizedState,n);if(s&&(a.memoizedState=n,L=!0),a=a.queue,qs(Ts.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||P!==null&&!!(P.memoizedState.tag&1),Hs(e?9:8,{destroy:void 0},ws.bind(null,r,a,n,t),null),e){if(r.flags|=2048,G===null)throw Error(i(349));o||Zo&127||Cs(r,t,n)}return n}function Cs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=M.updateQueue,t===null?(t=ms(),M.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ws(e,t,n,r){t.value=n,t.getSnapshot=r,Es(t)&&Ds(e)}function Ts(e,t,n){return n(function(){Es(t)&&Ds(e)})}function Es(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qr(e,n)}catch{return!0}}function Ds(e){var t=Ri(e,2);t!==null&&Pd(t,e,2)}function Os(e){var t=ps();if(typeof e==`function`){var n=e;if(e=n(),es){lt(!0);try{n()}finally{lt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:e},t}function ks(e,t,n,r){return e.baseState=n,bs(e,N,typeof r==`function`?r:vs)}function As(e,t,n,r,a){if(vc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};w.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,js(t,o)):(o.next=n.next,t.pending=n.next=o)}}function js(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=w.T,o={};o.types=a===null?null:a.types,w.T=o;try{var s=n(i,r),c=w.S;c!==null&&c(o,s),Ms(e,t,s)}catch(n){Ps(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),w.T=a}}else try{a=n(i,r),Ms(e,t,a)}catch(n){Ps(e,t,n)}}function Ms(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Ns(e,t,n)},function(n){return Ps(e,t,n)}):Ns(e,t,n)}function Ns(e,t,n){t.status=`fulfilled`,t.value=n,Fs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,js(e,n)))}function Ps(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Fs(t),t=t.next;while(t!==r)}e.action=null}function Fs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Is(e,t){return t}function Ls(e,t){if(A){var n=G.formState;if(n!==null){a:{var r=M;if(A){if(k){b:{for(var i=k,a=ga;i.nodeType!==8;)if(!a||(i=lm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){k=lm(i.nextSibling),r=i.data===`F!`;break a}}va(r)}r=!1}r&&(t=n[0])}}return n=ps(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Is,lastRenderedState:t},n.queue=r,n=hc.bind(null,M,r),r.dispatch=n,r=Os(!1),a=_c.bind(null,M,!1,r.queue),r=ps(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=As.bind(null,M,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Rs(e){return zs(I(),N,e)}function zs(e,t,n){if(t=bs(e,t,Is)[0],e=ys(vs)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=hs(t)}catch(e){throw e===io?oo:e}else r=t;t=I();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(M.flags|=2048,Hs(9,{destroy:void 0},Bs.bind(null,i,n),null)),[r,a,e]}function Bs(e,t){e.action=t}function Vs(e){var t=I(),n=N;if(n!==null)return zs(t,n,e);I(),t=t.memoizedState,n=I();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Hs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=M.updateQueue,t===null&&(t=ms(),M.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Us(){return I().memoizedState}function Ws(e,t,n,r){var i=ps();M.flags|=e,i.memoizedState=Hs(1|t,{destroy:void 0},n,r===void 0?null:r)}function Gs(e,t,n,r){var i=I();r=r===void 0?null:r;var a=i.memoizedState.inst;N!==null&&r!==null&&as(r,N.memoizedState.deps)?i.memoizedState=Hs(t,a,n,r):(M.flags|=e,i.memoizedState=Hs(1|t,a,n,r))}function Ks(e,t){Ws(8390656,8,e,t)}function qs(e,t){Gs(2048,8,e,t)}function Js(e){M.flags|=4;var t=M.updateQueue;if(t===null)t=ms(),M.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ys(e){var t=I().memoizedState;return Js({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Xs(e,t){return Gs(4,2,e,t)}function Zs(e,t){return Gs(4,4,e,t)}function Qs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $s(e,t,n){n=n==null?null:n.concat([e]),Gs(4,4,Qs.bind(null,t,e),n)}function ec(){}function tc(e,t){var n=I();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&as(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nc(e,t){var n=I();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&as(t,r[1]))return r[0];if(r=e(),es){lt(!0);try{e()}finally{lt(!1)}}return n.memoizedState=[r,t],r}function rc(e,t,n){return n===void 0||Zo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=Md(),M.lanes|=e,sd|=e,n)}function ic(e,t,n,r){return Qr(n,t)?n:Fo.current===null?!(Zo&106)||Zo&1073741824&&!(q&261930)?(L=!0,e.memoizedState=n):(e=Md(),M.lanes|=e,sd|=e,t):(e=rc(e,n,r),Qr(e,t)||(L=!0),e)}function ac(e,t,n,r,i){var a=T.p;T.p=a!==0&&8>a?a:8;var o=w.T,s={};s.types=o===null?null:o.types,w.T=s,_c(e,!1,t,n);try{var c=i(),l=w.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?gc(e,t,Qa(c,r),jd(e)):gc(e,t,r,jd(e))}catch(n){gc(e,t,{then:function(){},status:`rejected`,reason:n},jd())}finally{T.p=a,o!==null&&s.types!==null&&(o.types=s.types),w.T=o}}function oc(){}function sc(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=cc(e).queue;ac(e,a,t,De,n===null?oc:function(){return lc(e),n(r)})}function cc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:De,baseState:De,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:De},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function lc(e){var t=cc(e);t.next===null&&(t=e.alternate.memoizedState),gc(e,t.next.queue,{},jd())}function uc(){return Fa(sh)}function dc(){return I().memoizedState}function fc(){return I().memoizedState}function pc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jd();e=Eo(n);var r=Do(t,e,n);r!==null&&(Pd(r,t,n),Oo(r,t,n)),t={cache:Va()},e.payload=t;return}t=t.return}}function mc(e,t,n){var r=jd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},vc(e)?yc(t,n):(n=Li(e,t,n,r),n!==null&&(Pd(n,e,r),bc(n,t,r)))}function hc(e,t,n){gc(e,t,n,jd())}function gc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(vc(e))yc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Qr(s,o))return Ii(e,t,i,0),G===null&&Fi(),!1}catch{}if(n=Li(e,t,i,r),n!==null)return Pd(n,e,r),bc(n,t,r),!0}return!1}function _c(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},vc(e)){if(t)throw Error(i(479))}else t=Li(e,n,r,2),t!==null&&Pd(t,e,2)}function vc(e){var t=e.alternate;return e===M||t!==null&&t===M}function yc(e,t){$o=Qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Dt(e,n)}}var xc={readContext:Fa,use:gs,useCallback:F,useContext:F,useEffect:F,useImperativeHandle:F,useLayoutEffect:F,useInsertionEffect:F,useMemo:F,useReducer:F,useRef:F,useState:F,useDebugValue:F,useDeferredValue:F,useTransition:F,useSyncExternalStore:F,useId:F,useHostTransitionStatus:F,useFormState:F,useActionState:F,useOptimistic:F,useMemoCache:F,useCacheRefresh:F,useEffectEvent:F},Sc={readContext:Fa,use:gs,useCallback:function(e,t){return ps().memoizedState=[e,t===void 0?null:t],e},useContext:Fa,useEffect:Ks,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Ws(4194308,4,Qs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ws(4194308,4,e,t)},useInsertionEffect:function(e,t){Ws(4,2,e,t)},useMemo:function(e,t){var n=ps();t=t===void 0?null:t;var r=e();if(es){lt(!0);try{e()}finally{lt(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ps();if(n!==void 0){var i=n(t);if(es){lt(!0);try{n(t)}finally{lt(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=mc.bind(null,M,e),[r.memoizedState,e]},useRef:function(e){var t=ps();return e={current:e},t.memoizedState=e},useState:function(e){e=Os(e);var t=e.queue,n=hc.bind(null,M,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ec,useDeferredValue:function(e,t){return rc(ps(),e,t)},useTransition:function(){var e=Os(!1);return e=ac.bind(null,M,e.queue,!0,!1),ps().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=M,a=ps();if(A){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||Cs(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Ks(Ts.bind(null,r,o,e),[e]),r.flags|=2048,Hs(9,{destroy:void 0},ws.bind(null,r,o,n,t),null),n},useId:function(){var e=ps(),t=G.identifierPrefix;if(A){var n=ca,r=sa;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=ts++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=is++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:uc,useFormState:Ls,useActionState:Ls,useOptimistic:function(e){var t=ps();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=_c.bind(null,M,!0,n),n.dispatch=t,[e,t]},useMemoCache:_s,useCacheRefresh:function(){return ps().memoizedState=pc.bind(null,M)},useEffectEvent:function(e){var t=ps(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Cc={readContext:Fa,use:gs,useCallback:tc,useContext:Fa,useEffect:qs,useImperativeHandle:$s,useInsertionEffect:Xs,useLayoutEffect:Zs,useMemo:nc,useReducer:ys,useRef:Us,useState:function(){return ys(vs)},useDebugValue:ec,useDeferredValue:function(e,t){return ic(I(),N.memoizedState,e,t)},useTransition:function(){var e=ys(vs)[0],t=I().memoizedState;return[typeof e==`boolean`?e:hs(e),t]},useSyncExternalStore:Ss,useId:dc,useHostTransitionStatus:uc,useFormState:Rs,useActionState:Rs,useOptimistic:function(e,t){return ks(I(),N,e,t)},useMemoCache:_s,useCacheRefresh:fc,useEffectEvent:Ys},wc={readContext:Fa,use:gs,useCallback:tc,useContext:Fa,useEffect:qs,useImperativeHandle:$s,useInsertionEffect:Xs,useLayoutEffect:Zs,useMemo:nc,useReducer:xs,useRef:Us,useState:function(){return xs(vs)},useDebugValue:ec,useDeferredValue:function(e,t){var n=I();return N===null?rc(n,e,t):ic(n,N.memoizedState,e,t)},useTransition:function(){var e=xs(vs)[0],t=I().memoizedState;return[typeof e==`boolean`?e:hs(e),t]},useSyncExternalStore:Ss,useId:dc,useHostTransitionStatus:uc,useFormState:Vs,useActionState:Vs,useOptimistic:function(e,t){var n=I();return N===null?(n.baseState=e,[e,n.queue.dispatch]):ks(n,N,e,t)},useMemoCache:_s,useCacheRefresh:fc,useEffectEvent:Ys};function Tc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:C({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ec={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jd(),i=Eo(r);i.payload=t,n!=null&&(i.callback=n),t=Do(e,i,r),t!==null&&(Pd(t,e,r),Oo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jd(),i=Eo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Do(e,i,r),t!==null&&(Pd(t,e,r),Oo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jd(),r=Eo(n);r.tag=2,t!=null&&(r.callback=t),t=Do(e,r,n),t!==null&&(Pd(t,e,n),Oo(t,e,n))}};function Dc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!$r(n,r)||!$r(i,a):!0}function Oc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ec.enqueueReplaceState(t,t.state,null)}function kc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=C({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ac(e){ji(e)}function jc(e){console.error(e)}function Mc(e){ji(e)}function Nc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Pc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Fc(e,t,n){return n=Eo(n),n.tag=3,n.payload={element:null},n.callback=function(){Nc(e,t)},n}function Ic(e){return e=Eo(e),e.tag=3,e}function Lc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Pc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Pc(t,n,r),typeof i!=`function`&&(yd===null?yd=new Set([this]):yd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Rc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ma(t,n,a,!0),n=Bo.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Vo===null?Kd():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===so?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,a)),!1;case 22:return n.flags|=65536,r===so?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,a)),!1}throw Error(i(435,n.tag))}return mf(e,r,a),Kd(),!1}if(A)return t=Bo.current,t===null?(r!==_a&&(t=Error(i(423),{cause:r}),wa($i(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=$i(r,n),a=Fc(e.stateNode,r,a),ko(e,a),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==_a&&(e=Error(i(422),{cause:r}),wa($i(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=$i(o,n),fd===null?fd=[o]:fd.push(o),Y!==4&&(Y=2),t===null)return!0;r=$i(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Fc(n.stateNode,r,e),ko(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(yd===null||!yd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Ic(a),Lc(a,e,n,r),ko(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var zc=Error(i(461)),L=!1;function R(e,t,n,r){t.child=e===null?So(t,null,n,r):xo(t,e.child,n,r)}function Bc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Pa(t),r=os(e,t,n,o,a,i),s=us(),e!==null&&!L?(ds(e,t,i),ml(e,t,i)):(A&&s&&da(t),t.flags|=1,R(e,t,r,i),t.child)}function Vc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Wi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Hc(e,t,a,r,i)):(e=qi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!hl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?$r:n,n(o,r)&&e.ref===t.ref)return ml(e,t,i)}return t.flags|=1,e=Gi(a,r),e.ref=t.ref,e.return=t,t.child=e}function Hc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if($r(a,r)&&e.ref===t.ref){if(L=!1,t.pendingProps=r=a,hl(e,i))e.flags&131072&&(L=!0);else return t.lanes=e.lanes,ml(e,t,i)}}return Xc(e,t,n,r,i)}function Uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Gc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&no(t,a===null?null:a.cachePool),a===null?Ro():Lo(t,a),Wo(t);else return r=t.lanes=536870912,Gc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&no(t,null),Ro(),Go()):(no(t,a.cachePool),Lo(t,a),Go(),t.memoizedState=null);return R(e,t,i,n),t.child}function Wc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Gc(e,t,n,r,i){var a=to();return a=a===null?null:{parent:j._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&no(t,null),Ro(),Wo(t),e!==null&&Ma(e,t,r,!0),t.childLanes=i,null}function Kc(e,t){return t=al({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function qc(e,t,n){return xo(t,e.child,null,n),e=Kc(t,t.pendingProps),e.flags|=2,Ko(t),t.memoizedState=null,e}function Jc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(A){if(r.mode===`hidden`)return e=Kc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Wc(null,e);if(Uo(t),(e=k)?(e=am(e,ga),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:oa===null?null:{id:sa,overflow:ca},retryLane:536870912,hydrationErrors:null},n=Xi(e),n.return=t,t.child=n,ma=t,k=null)):e=null,e===null)throw va(t);return t.lanes=536870912,null}return Kc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Uo(t),a){if(t.flags&256)t.flags&=-257,t=qc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(L||Ma(e,t,n,!1),a=(n&e.childLanes)!==0,L||a){if(Fo.current===null){if(r=G,r!==null&&(s=Ot(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Ri(e,s),Pd(r,e,s),zc;Kd()}t=qc(e,t,n)}else e=o.treeContext,k=lm(s.nextSibling),ma=t,A=!0,ha=null,ga=!1,e!==null&&pa(t,e),t=Kc(t,r),t.flags|=134221824;return t}return e=Gi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Yc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Xc(e,t,n,r,i){return Pa(t),n=os(e,t,n,r,void 0,i),r=us(),e!==null&&!L?(ds(e,t,i),ml(e,t,i)):(A&&r&&da(t),t.flags|=1,R(e,t,n,i),t.child)}function Zc(e,t,n,r,i,a){return Pa(t),t.updateQueue=null,n=cs(t,r,n,i),ss(e),r=us(),e!==null&&!L?(ds(e,t,a),ml(e,t,a)):(A&&r&&da(t),t.flags|=1,R(e,t,n,a),t.child)}function Qc(e,t,n,r,i){if(Pa(t),t.stateNode===null){var a=Vi,o=n.contextType;typeof o==`object`&&o&&(a=Fa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ec,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},wo(t),o=n.contextType,a.context=typeof o==`object`&&o?Fa(o):Vi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Tc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ec.enqueueReplaceState(a,a.state,null),Mo(t,r,a,i),jo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=kc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Vi,typeof u==`object`&&u&&(o=Fa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Oc(t,a,r,o),Co=!1;var f=t.memoizedState;a.state=f,Mo(t,r,a,i),jo(),l=t.memoizedState,s||f!==l||Co?(typeof d==`function`&&(Tc(t,n,d,r),l=t.memoizedState),(c=Co||Dc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,To(e,t),o=t.memoizedProps,u=kc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Vi,typeof l==`object`&&l&&(c=Fa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Oc(t,a,r,c),Co=!1,f=t.memoizedState,a.state=f,Mo(t,r,a,i),jo();var p=t.memoizedState;o!==d||f!==p||Co||e!==null&&e.dependencies!==null&&Na(e.dependencies)?(typeof s==`function`&&(Tc(t,n,s,r),p=t.memoizedState),(u=Co||Dc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Na(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Yc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=xo(t,e.child,null,i),t.child=xo(t,null,n,i)):R(e,t,n,i),t.memoizedState=a.state,e=t.child):e=ml(e,t,i),e}function $c(e,t,n,r){return Sa(),t.flags|=256,R(e,t,n,r),t.child}var el={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tl(e){return{baseLanes:e,cachePool:ro()}}function nl(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ud),e}function rl(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(qo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(A){if(i?Ho(t):Go(),(e=k)?(e=am(e,ga),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:oa===null?null:{id:sa,overflow:ca},retryLane:536870912,hydrationErrors:null},n=Xi(e),n.return=t,t.child=n,ma=t,k=null)):e=null,e===null)throw va(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Go(),i=t.mode,a=al({mode:`hidden`,children:a},i),r=Ji(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=tl(n),r.childLanes=nl(e,o,n),t.memoizedState=el,Wc(null,r)):(Ho(t),il(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return sl(e,t,a,o,r,c,s,n)}return i?(Go(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Gi(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Ji(i,a,n,null),i.flags|=2):i=Gi(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Wc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=tl(n):(a=i.cachePool,a===null?a=ro():(s=j._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=nl(e,o,n),t.memoizedState=el,Wc(e.child,r)):(Ho(t),n=e.child,e=n.sibling,n=Gi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function il(e,t){return t=al({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function al(e,t){return e=Ui(22,e,null,t),e.lanes=0,e}function ol(e,t,n){return xo(t,e.child,null,n),e=il(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sl(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Ho(t),t.flags&=-257,ol(e,t,c)):t.memoizedState===null?(Go(),o=a.fallback,s=t.mode,a=al({mode:`visible`,children:a.children},s),o=Ji(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,xo(t,e.child,null,c),a=t.child,a.memoizedState=tl(c),a.childLanes=nl(e,r,c),t.memoizedState=el,Wc(null,a)):(Go(),t.child=e.child,t.flags|=128,null);if(Ho(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,wa({value:a,source:null,stack:null})),ol(e,t,c)}if(L||Ma(e,t,c,!1),r=(c&e.childLanes)!==0,L||r){if(Fo.current!==null)return ol(e,t,c);if(r=G,r!==null&&(a=Ot(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,Ri(e,a),Pd(r,e,a),zc;return om(o)||Kd(),ol(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,k=lm(o.nextSibling),ma=t,A=!0,ha=null,ga=!1,e!==null&&pa(t,e),t=il(t,a.children),t.flags|=134221824,t)}function cl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Aa(e.return,t,n)}function ll(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Xo(n)===null&&(t=e),e=e.sibling}return t}function ul(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function dl(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function fl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=qo.current;if(t.flags&128)return Jo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Jo(t,o),i===`backwards`&&e!==null?(dl(e),R(e,t,r,n),dl(e)):R(e,t,r,n),r=A?ra:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cl(e,n,t);else if(e.tag===19)cl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=ll(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,dl(t)),ul(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ul(t,!0,n,null,a,r);break;case`together`:ul(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=ll(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ul(t,!1,i,n,a,r)}return t.child}function pl(e,t,n){var r=t.pendingProps;return Oa(t,t.type,r.value),R(e,t,r.children,n),t.child}function ml(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sd|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Ma(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Gi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Na(e)))}function gl(e,t,n){switch(t.tag){case 3:Ie(t,t.stateNode.containerInfo),Oa(t,j,e.memoizedState.cache),Sa();break;case 27:case 5:Re(t);break;case 4:Ie(t,t.stateNode.containerInfo);break;case 10:Oa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Uo(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ho(t),t.flags|=128,null;r=Ma(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?rl(e,t,n):(Ho(t),e=ml(e,t,n),e===null?null:e.sibling)}Ho(t);break;case 19:if(t.flags&128)return fl(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(Ma(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return fl(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Jo(t,qo.current),r)break;return null;case 22:return t.lanes=0,Uc(e,t,n,t.pendingProps);case 24:Oa(t,j,e.memoizedState.cache)}return ml(e,t,n)}function _l(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)L=!0;else{if(!hl(e,n)&&!(t.flags&128))return L=!1,gl(e,t,n);L=!!(e.flags&131072)}}else L=!1,A&&t.flags&1048576&&ua(t,ra,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=uo(t.elementType),t.type=e,typeof e==`function`)Wi(e)?(r=kc(e,r),t.tag=1,t=Qc(null,t,e,r,n)):(t.tag=0,t=Xc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===fe){t.tag=11,t=Bc(null,t,e,r,n);break a}if(a===he){t.tag=14,t=Vc(null,t,e,r,n);break a}if(a===de){t.tag=10,t.type=e,t=pl(null,t,n);break a}}throw t=Te(e)||e,Error(i(306,t,``))}}return t;case 0:return Xc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=kc(r,t.pendingProps),Qc(e,t,r,a,n);case 3:a:{if(Ie(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,To(e,t),Mo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Oa(t,j,r),r!==o.cache&&ja(t,[j],n,!0),jo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=$c(e,t,r,n);break a}if(r!==a){a=$i(Error(i(424)),t),wa(a),t=$c(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(k=lm(e.firstChild),ma=t,A=!0,ha=null,ga=!0,n=So(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Sa(),r===a){t=ml(e,t,n);break a}R(e,t,r,n)}t=t.child}return t;case 26:return Yc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:A||(t.stateNode=fp(t.type,t.pendingProps,Pe.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Re(t),e===null&&A&&(r=t.stateNode=hm(t.type,t.pendingProps,Pe.current),ma=t,ga=!0,a=k,Sp(t.type)?(um=a,k=lm(r.firstChild)):k=a),R(e,t,t.pendingProps.children,n),Yc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&A&&((a=r=k)&&(r=rm(r,t.type,t.pendingProps,ga),r===null?a=!1:(t.stateNode=r,ma=t,k=lm(r.firstChild),ga=!1,a=!0)),a||va(t)),Re(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=os(e,t,ls,null,null,n),sh._currentValue=a),Yc(e,t),R(e,t,r,n),t.child;case 6:return e===null&&A&&((e=n=k)&&(n=im(n,t.pendingProps,ga),n===null?e=!1:(t.stateNode=n,ma=t,k=null,e=!0)),e||va(t)),null;case 13:return rl(e,t,n);case 4:return Ie(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xo(t,null,r,n):R(e,t,r,n),t.child;case 11:return Bc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Yc(e,t),R(e,t,r,n),t.child;case 8:return R(e,t,t.pendingProps.children,n),t.child;case 12:return R(e,t,t.pendingProps.children,n),t.child;case 10:return pl(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,Pa(t),a=Fa(a),r=r(a),t.flags|=1,R(e,t,r,n),t.child;case 14:return Vc(e,t,t.type,t.pendingProps,n);case 15:return Hc(e,t,t.type,t.pendingProps,n);case 19:return fl(e,t,n);case 31:return Jc(e,t,n);case 22:return Uc(e,t,n,t.pendingProps);case 24:return Pa(t),r=Fa(j),e===null?(a=to(),a===null&&(a=G,o=Va(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},wo(t),Oa(t,j,a)):((e.lanes&n)!==0&&(To(e,t),Mo(t,null,null,n),jo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Oa(t,j,r),r!==a.cache&&ja(t,[j],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Oa(t,j,r))),R(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:A&&da(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Yc(e,t),R(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function vl(e){e.flags|=4}function yl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ud())e.flags|=8192;else throw fo=so,ao}}else e.flags&=-16777217}function bl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Ud())e.flags|=8192;else throw fo=so,ao}}function xl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:St(),e.lanes|=t,dd|=t)}function Sl(e,t){if(!A)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function z(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Cl(e,t,n){var r=t.pendingProps;switch(fa(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return z(t),null;case 1:return z(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ka(j),Le(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(xa(t)?vl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ca())),z(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(vl(t),o===null?(z(t),yl(t,a,null,r,n)):(z(t),bl(t,o))):o?o===e.memoizedState?(z(t),t.flags&=-16777217):(vl(t),z(t),bl(t,o)):(e=e.memoizedProps,e!==r&&vl(t),z(t),yl(t,a,e,r,n)),null;case 27:if(ze(t),n=Pe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&vl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return z(t),t.subtreeFlags&=-33554433,null}e=Me.current,xa(t)?ya(t,e):(e=hm(a,r,n),t.stateNode=e,vl(t))}return z(t),t.subtreeFlags&=-33554433,null;case 5:if(ze(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&vl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return z(t),t.subtreeFlags&=-33554433,null}if(o=Me.current,xa(t))ya(t,o);else{var s=lp(Pe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[Pt]=t,o[Ft]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&vl(t)}}return z(t),t.subtreeFlags&=-33554433,yl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&vl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=Pe.current,xa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ma,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Pt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ep(e.nodeValue,n)),e||va(t,!0)}else e=lp(e).createTextNode(r),e[Pt]=t,t.stateNode=e}return z(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=xa(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[Pt]=t}else Sa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;z(t),e=!1}else n=Ca(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ko(t),t):(Ko(t),null);if(t.flags&128)throw Error(i(558))}return z(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=xa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[Pt]=t}else Sa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;z(t),a=!1}else a=Ca(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Ko(t),t):(Ko(t),null)}return Ko(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),xl(t,t.updateQueue),z(t),null);case 4:return Le(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,z(t),null;case 10:return ka(t.type),z(t),null;case 19:if(Yo(t),r=t.memoizedState,r===null)return z(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Sl(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Xo(e),o!==null){for(t.flags|=128,Sl(r,!1),e=o.updateQueue,t.updateQueue=e,xl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ki(n,e),n=n.sibling;return Jo(t,qo.current&1|2),A&&la(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Qe()>_d&&(t.flags|=128,a=!0,Sl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Xo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,xl(t,e),Sl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!A)return z(t),null}else 2*Qe()-r.renderingStartTime>_d&&n!==536870912&&(t.flags|=128,a=!0,Sl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Qe(),e.sibling=null,o=qo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||A?Jo(t,o):(n=o,E(Bo,t),E(qo,n),Vo===null&&(Vo=t)),A&&la(t,r.treeForkCount),e}return z(t),null;case 22:case 23:return Ko(t),zo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(z(t),t.subtreeFlags&6&&(t.flags|=8192)):z(t),n=t.updateQueue,n!==null&&xl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&je(eo),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ka(j),z(t),null;case 25:return null;case 30:return t.flags|=33554432,z(t),null}throw Error(i(156,t.tag))}function wl(e,t){switch(fa(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ka(j),Le(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ze(t),null;case 31:if(t.memoizedState!==null){if(Ko(t),t.alternate===null)throw Error(i(340));Sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ko(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Yo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Le(),null;case 10:return ka(t.type),null;case 22:case 23:return Ko(t),zo(),e!==null&&je(eo),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ka(j),null;case 25:return null;default:return null}}function Tl(e,t){switch(fa(t),t.tag){case 3:ka(j),Le();break;case 26:case 27:case 5:ze(t);break;case 4:Le();break;case 31:t.memoizedState!==null&&Ko(t);break;case 13:Ko(t);break;case 19:Yo(t);break;case 10:ka(t.type);break;case 22:case 23:Ko(t),zo(),e!==null&&je(eo);break;case 24:ka(j)}}function El(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Dl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Ol(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Po(t,n)}catch(t){Z(e,e.return,t)}}}function kl(e,t,n){n.props=kc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Al(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=Oi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function jl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Ml(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function Nl(e){for(var t=e.return;t!==null&&(Il(t)&&em(e.stateNode,t.stateNode),!Fl(t));)t=t.return}function Pl(e){for(var t=e.return;t!==null&&(Il(t)&&tm(e.stateNode,t.stateNode),!Fl(t));)t=t.return}function Fl(e){return e.tag===5||e.tag===3||e.tag===27}function Il(e){return e&&e.tag===7&&e.stateNode!==null}function Ll(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Rl(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[Ft]=t}catch(t){Z(e,e.return,t)}}function zl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Bl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||zl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=kn)),Ml(e,r),O=!0;else if(i!==4&&(i===27&&(Ml(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Vl(e,t,n,r),e=e.sibling;e!==null;)Vl(e,t,n,r),e=e.sibling}function Hl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Ml(e,r),O=!0;else if(i!==4&&(i===27&&(Ml(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Hl(e,t,n,r),e=e.sibling;e!==null;)Hl(e,t,n,r),e=e.sibling}function Ul(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[Pt]=e,t[Ft]=n}catch(t){Z(e,e.return,t)}}var Wl=!1,Gl=null;function Kl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Wl=!0)}var ql=null;function Jl(){var e=ql;return ql=null,e}var Yl=0;function Xl(e,t,n,r,i){return Yl=0,Zl(e.child,t,n,r,i)}function Zl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Wl=!0,Tp(o,Yl===0?t:t+`_`+Yl,n),Yl++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Zl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function Ql(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Ql(e.child,t)),e=e.sibling}function $l(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&($l(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=Ai(t.default,t.share),t!==`none`&&(Xl(e,n,t,null,!1)||Ql(e.child,!1))}e=e.sibling}}function eu(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=Oi(r,n),a=Ai(r.default,n.paired?r.share:r.enter);a===`none`?$l(e):Xl(e,i,a,null,!1)?($l(e),n.paired||t||Nd(e,r.onEnter)):Ql(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)eu(e,t),e=e.sibling;else $l(e)}function tu(e){if(Gl!==null&&Gl.size!==0){var t=Gl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=Ai(n.default,n.share);if(a!==`none`&&(Xl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Nd(e,n.onShare)):Ql(e.child,!1)),t.delete(r),t.size===0)break}}}tu(e)}e=e.sibling}}}function nu(e){if(e.tag===30){var t=e.memoizedProps,n=Oi(t,e.stateNode),r=Gl===null?void 0:Gl.get(n),i=Ai(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Xl(e,n,i,null,!1)?r===void 0?Nd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Gl.delete(n),Nd(e,t.onShare)):Ql(e.child,!1)),Gl!==null&&tu(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)nu(e),e=e.sibling;else Gl!==null&&tu(e)}function ru(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Oi(t,e.stateNode);t=Ai(t.default,t.update),e.flags&=-5,t!==`none`&&Xl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&ru(e);e=e.sibling}}function iu(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Ql(e.child,!1))}iu(e)}e=e.sibling}}function au(e){if(e.tag===30)e.stateNode.paired=null,Ql(e.child,!1),iu(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)au(e),e=e.sibling;else iu(e)}function ou(e){for(e=e.child;e!==null;)e.tag===30?Ql(e.child,!1):e.subtreeFlags&33554432&&ou(e),e=e.sibling}function su(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Yl<a.length){var l=a[Yl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Yl===0?n:n+`_`+Yl,i),s&&e.flags&4||(ql===null&&(ql=[]),ql.push(c,Yl===0?r:r+`_`+Yl,t.memoizedProps)),Yl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:su(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function cu(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=Oi(n,r),a=Ai(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Yl=0,i=su(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Nd(e,n.onUpdate))}else e.subtreeFlags&33554432&&cu(e,t);e=e.sibling}}var B=!1,V=!1,lu=!1,uu=!1,du=typeof WeakSet==`function`?WeakSet:Set,H=null,fu=!1,pu=!1,mu=!1,hu=!1;function gu(e,t,n){if(e=e.containerInfo,sp=gh,e=ii(e),ai(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,H=t,t=n?9270:1024;H!==null;){if(e=H,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&nu(r[a]);if(e.alternate===null&&e.flags&2)n&&Kl(e),_u(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&nu(r),_u(n);continue}if(r!==null&&r.memoizedState!==null){n&&Kl(e),_u(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,H=r):(n&&ru(e),_u(n))}}Gl=null}function _u(e){for(;H!==null;){var t=H,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=kc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){Z(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=Oi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=Ai(a.default,a.update),a!==`none`&&Xl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,H=r;break}H=t.return}}function vu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Lu(e,n),r&4&&El(5,n);break;case 1:if(Lu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=kc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Ol(n),r&512&&Al(n,n.return);break;case 3:if(Lu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Po(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Ul(n);case 26:case 5:Lu(e,n),t===null&&r&4&&Ll(n),r&512&&Al(n,n.return);break;case 12:Lu(e,n);break;case 31:Lu(e,n),r&4&&Eu(e,n);break;case 13:Lu(e,n),r&4&&Du(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||B,!r){var a=t!==null&&t.memoizedState!==null||V;t=B,i=V,B=r,(V=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),zu(e,n,r)):Lu(e,n),B=t,V=i}break;case 30:Lu(e,n),r&512&&Al(n,n.return);break;case 7:r&512&&Al(n,n.return);default:Lu(e,n)}}function yu(e,t){for(e=e.child;e!==null;)bu(e,t),e=e.sibling}function bu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){Z(e,e.return,t)}xu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,O=!0}catch(t){Z(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){Z(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&yu(e,t);break;default:yu(e,t)}}function xu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:bu(n,r);break a;case 22:n.memoizedState===null&&xu(n,r);break a;default:xu(n,r)}}e=e.sibling}}function Su(e){var t=e.alternate;t!==null&&(e.alternate=null,Su(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ut(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,Cu=!1;function wu(e,t,n){for(n=n.child;n!==null;)Tu(e,t,n),n=n.sibling}function Tu(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount==`function`)try{ct.onCommitFiberUnmount(st,n)}catch{}switch(n.tag){case 26:V||jl(n,t),wu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!V&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:V||jl(n,t),Pl(n);var r=U,i=Cu;Sp(n.type)&&(U=n.stateNode,Cu=!1),wu(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),U=r,Cu=i;break;case 5:V||jl(n,t),Pl(n);case 6:if(n.tag===6&&Pl(n),r=U,i=Cu,U=null,wu(e,t,n),U=r,Cu=i,U!==null){if(Cu)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode),O=!0}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode),O=!0}catch(e){Z(n,t,e)}}break;case 18:U!==null&&(Cu?(e=U,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(U,n.stateNode));break;case 4:r=U,i=Cu,U=n.stateNode.containerInfo,Cu=!0,wu(e,t,n),U=r,Cu=i;break;case 0:case 11:case 14:case 15:Dl(2,n,t),V||Dl(4,n,t),wu(e,t,n);break;case 1:V||(jl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&kl(n,t,r)),wu(e,t,n);break;case 21:wu(e,t,n);break;case 22:V=(r=V)||n.memoizedState!==null,wu(e,t,n),V=r;break;case 30:jl(n,t),wu(e,t,n);break;case 7:V||jl(n,t),wu(e,t,n);break;default:wu(e,t,n)}}function Eu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){Z(t,t.return,e)}}}function Du(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){Z(t,t.return,e)}}function Ou(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new du),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new du),t;default:throw Error(i(435,e.tag))}}function ku(e,t){var n=Ou(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Au(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){U=l.stateNode,Cu=!1;break a}break;case 5:U=l.stateNode,Cu=!1;break a;case 3:case 4:U=l.stateNode.containerInfo,Cu=!0;break a}l=l.return}if(U===null)throw Error(i(160));Tu(s,c,o),U=null,Cu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Mu(t,e,n),t=t.sibling}var ju=null;function Mu(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Au(t,e,n),Nu(e),a&4&&(Dl(3,e,e.return),El(3,e),Dl(5,e,e.return));break;case 1:Au(t,e,n),Nu(e),a&512&&(V||r===null||jl(r,r.return)),a&64&&B&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=ju,Au(t,e,n),Nu(e),a&512&&(V||r===null||jl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(B)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[Vt]||r[Pt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[Pt]=e,D(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[Pt]=e,D(r),t=r}e.stateNode=t}}else B||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Rl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||V||t.parentNode.removeChild(t)):a.count--,n===null?B||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Au(t,e,n),Nu(e),a&512&&(V||r===null||jl(r,r.return)),r!==null&&a&4&&Rl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=lu,lu=!1,Au(t,e,n),lu=o,Nu(e),a&512&&(V||r===null||jl(r,r.return)),e.flags&32){t=e.stateNode;try{xn(t,``),O=!0}catch(t){Z(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Rl(e,t,r===null?t:r.memoizedProps)),a&1024&&(uu=!0);break;case 6:if(Au(t,e,n),Nu(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,O=!0}catch(t){Z(e,e.return,t)}}break;case 3:if(O=!1,Wm=null,o=ju,ju=bm(t.containerInfo),Au(t,e,n),ju=o,Nu(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){Z(e,e.return,t)}uu&&(uu=!1,Pu(e)),O=!1;break;case 4:a=lu,lu=B,r=rn(),o=ju,ju=bm(e.stateNode.containerInfo),Au(t,e,n),Nu(e),ju=o,O&&pu&&(mu=!0),O=r,lu=a;break;case 12:Au(t,e,n),Nu(e);break;case 31:Au(t,e,n),Nu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 13:Au(t,e,n),Nu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(hd=Qe()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=B,l=V,u=lu;B=c||o,lu=u||o,V=l||s,Au(t,e,n),V=l,lu=u,B=c,Nu(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||B||V||(t=s||V,n=B,r=V,B=o||B,V=t,Ru(e,2),B=n,V=r),!o&&lu||yu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,ku(e,n))));break;case 19:Au(t,e,n),Nu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 30:a&512&&(V||r===null||jl(r,r.return)),a=rn(),o=pu,s=(n&335544064)===n,c=e.memoizedProps,pu=s&&Ai(c.default,c.update)!==`none`,Au(t,e,n),Nu(e),s&&r!==null&&O&&(e.flags|=4),pu=o,O=a;break;case 21:break;case 7:a&512&&(V||r===null||jl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Au(t,e,n),Nu(e)}}function Nu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(zl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Il(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Fl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Hl(e,Bl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(xn(l,``),n.flags&=-33),Hl(e,Bl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Vl(e,Bl(e),u,s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Pu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Fu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Iu(t,e),t=t.sibling;else cu(t,!1)}function Iu(e,t){var n=e.alternate;if(n===null)eu(e,!1);else switch(e.tag){case 3:if(hu=fu=!1,Jl(),Fu(t,e),!fu&&!mu){if(e=ql,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),hu=!0}ql=null;break;case 5:Fu(t,e);break;case 4:r=fu,fu=!1,Fu(t,e),fu&&(mu=!0),fu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Fu(t,e):eu(e,!1));break;case 30:r=fu,i=Jl(),fu=!1,Fu(t,e),fu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=Oi(a,o),o=Oi(n.memoizedProps,o);var s=Ai(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Yl=0,t=su(e,n,t,o,s,a,!0),Yl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Nd(e,e.memoizedProps.onUpdate),ql=i):i!==null&&(i.push.apply(i,ql),ql=i),fu=e.flags&32?!0:r;break;default:Fu(t,e)}}function Lu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)vu(e,t.alternate,t),t=t.sibling}function Ru(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Dl(4,n,n.return),Ru(n,r);break;case 1:jl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&kl(n,n.return,i),Ru(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:jl(n,n.return),n.tag!==5&&n.tag!==27||Pl(n),Ru(n,r);break;case 6:Pl(n);break;case 26:jl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||V||i.parentNode.removeChild(i),Ru(n,r);break;case 22:n.memoizedState===null&&Ru(n,r);break;case 30:jl(n,n.return),Ru(n,r);break;case 7:jl(n,n.return);default:Ru(n,r)}e=e.sibling}}function zu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:zu(i,a,n),El(4,a);break;case 1:if(zu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)No(l[i],c)}catch(e){Z(r,r.return,e)}}s&&o&64&&Ol(a),Al(a,a.return);break;case 27:n&2&&Ul(a);case 5:a.tag!==5&&a.tag!==27||Nl(a),zu(i,a,n),s&&r===null&&o&4&&Ll(a),Al(a,a.return);break;case 6:Nl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||B||Km(bm(c.ownerDocument),a.type,c),zu(i,a,n),s&&r===null&&o&4&&Ll(a),Al(a,a.return);break;case 12:zu(i,a,n);break;case 31:zu(i,a,n),s&&o&4&&Eu(i,a);break;case 13:zu(i,a,n),s&&o&4&&Du(i,a);break;case 22:a.memoizedState===null&&zu(i,a,n),Al(a,a.return);break;case 30:zu(i,a,n),Al(a,a.return);break;case 7:Al(a,a.return);default:zu(i,a,n)}t=t.sibling}}function Bu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ha(n))}function Vu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ha(e))}function Hu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Uu(e,t,n,r),t=t.sibling;else i&&ou(t)}function Uu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&au(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Hu(e,t,n,r),a&2048&&El(9,t);break;case 1:Hu(e,t,n,r);break;case 3:Hu(e,t,n,r),i&&hu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Ha(a)));break;case 12:if(a&2048){Hu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Hu(e,t,n,r);break;case 31:Hu(e,t,n,r);break;case 13:Hu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&au(t),o._visibility&2?Hu(e,t,n,r):(o._visibility|=2,Wu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&au(s),o._visibility&2?Hu(e,t,n,r):Gu(e,t)),a&2048&&Bu(s,t);break;case 24:Hu(e,t,n,r),a&2048&&Vu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Ql(a.child,!0),Ql(t.child,!0))),Hu(e,t,n,r);break;default:Hu(e,t,n,r)}}function Wu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Wu(a,o,s,c,i),El(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Wu(a,o,s,c,i)):u._visibility&2?Wu(a,o,s,c,i):Gu(a,o),i&&l&2048&&Bu(o.alternate,o);break;case 24:Wu(a,o,s,c,i),i&&l&2048&&Vu(o.alternate,o);break;default:Wu(a,o,s,c,i)}t=t.sibling}}function Gu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Gu(n,r),i&2048&&Bu(r.alternate,r);break;case 24:Gu(n,r),i&2048&&Vu(r.alternate,r);break;default:Gu(n,r)}t=t.sibling}}var Ku=8192;function qu(e,t,n){if(e.subtreeFlags&Ku)for(e=e.child;e!==null;)Ju(e,t,n),e=e.sibling}function Ju(e,t,n){switch(e.tag){case 26:qu(e,t,n),e.flags&Ku&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,ju,e.memoizedState,e.memoizedProps));break;case 5:qu(e,t,n),e.flags&Ku&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=ju;ju=bm(e.stateNode.containerInfo),qu(e,t,n),ju=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ku,Ku=16777216,qu(e,t,n),Ku=r):qu(e,t,n));break;case 30:if((e.flags&Ku)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Gl===null&&(Gl=new Map),Gl.set(r,i)}qu(e,t,n);break;default:qu(e,t,n)}}function Yu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Xu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,$u(r,e)}Yu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zu(e),e=e.sibling}function Zu(e){switch(e.tag){case 0:case 11:case 15:Xu(e),e.flags&2048&&Dl(9,e,e.return);break;case 3:Xu(e);break;case 12:Xu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Qu(e)):Xu(e);break;default:Xu(e)}}function Qu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,$u(r,e)}Yu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Dl(8,t,t.return),Qu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Qu(t));break;default:Qu(t)}e=e.sibling}}function $u(e,t){for(;H!==null;){var n=H;switch(n.tag){case 0:case 11:case 15:Dl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ha(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,H=r;else a:for(n=e;H!==null;){r=H;var i=r.sibling,a=r.return;if(Su(r),r===n){H=null;break a}if(i!==null){i.return=a,H=i;break a}H=a}}}var ed={getCacheForType:function(e){var t=Fa(j),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Fa(j).controller.signal}},td=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,nd=null,rd=!1,id=!1,ad=!1,od=0,Y=0,sd=0,cd=0,ld=0,ud=0,dd=0,fd=null,pd=null,md=!1,hd=0,gd=0,_d=1/0,vd=null,yd=null,X=0,bd=null,xd=null,Sd=0,Cd=0,wd=null,Td=null,Ed=null,Dd=null,Od=null,kd=0,Ad=null;function jd(){return W&2&&q!==0?q&-q:w.T===null?jt():Pf()}function Md(){if(ud===0){if(!(q&536870912)||A){var e=ht;ht<<=1,!(ht&3932160)&&(ht=262144),ud=e}else ud=536870912}return e=Bo.current,e!==null&&(e.flags|=32),ud}function Nd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(Oi(e.memoizedProps,n))),Dd===null&&(Dd=[]),Dd.push(t.bind(null,r))}}function Pd(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Vd(e,0),Rd(e,q,ud,!1)),wt(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(cd|=n),Y===4&&Rd(e,q,ud,!1)),Ef(e))}function Fd(e,t,n){if(W&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||yt(e,t),a=r?Yd(e,t):qd(e,t,!0),o=r;do{if(a===0){id&&!r&&Rd(e,t,0,!1);break}if(n=e.current.alternate,o&&!Ld(n))a=qd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=fd;var l=c.current.memoizedState.isDehydrated;if(l&&(Vd(c,s).flags|=256),s=qd(c,s,!1),s!==2&&s!==6){if(ad&&!l){c.errorRecoveryDisabledLanes|=o,cd|=o,a=4;break a}o=pd,pd=a,o!==null&&(pd===null?pd=o:pd.push.apply(pd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Vd(e,0),Rd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Rd(r,t,ud,!rd);break a;case 2:pd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=hd+300-Qe(),10<a)){if(Rd(r,t,ud,!rd),vt(r,0,!0)!==0)break a;Sd=t,r.timeoutHandle=gp(Id.bind(null,r,n,pd,vd,md,t,ud,cd,dd,rd,o,`Throttled`,-0,0),a);break a}Id(r,n,pd,vd,md,t,ud,cd,dd,rd,o,null,-0,0)}break}}while(1);Ef(e)}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:kn},Gl=null,Ju(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?hd-Qe():(a&4194048)===a?gd-Qe():0,m=eh(d,m),m!==null)?(Sd=a,e.cancelPendingCommit=m(nf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Rd(e,a,o,!l)):nf(e,t,a,n,r,i,o,s,c,l,u,d)}function Ld(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Qr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rd(e,t,n,r){t=bt(e,t),t&=~ld,t&=~cd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-ut(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Et(e,n,t)}function zd(){return W&6?!0:(Df(0,!1),!1)}function Bd(){if(K!==null){if(J===0)var e=K.return;else e=K,Da=Ea=null,fs(e),ho=null,go=0,e=K;for(;e!==null;)Tl(e.alternate,e),e=e.return;K=null}}function Vd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sd=0,Bd(),G=e,K=n=Gi(e.current,null),q=t,J=0,nd=null,rd=!1,id=yt(e,t),ad=!1,dd=ud=ld=cd=sd=Y=0,pd=fd=null,md=!1,od=bt(e,t),Fi(),n}function Hd(e,t){M=null,w.H=xc,t===io||t===oo?(t=po(),J=3):t===ao?(t=po(),J=4):J=t===zc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,nd=t,K===null&&(Y=1,Nc(e,$i(t,e.current)))}function Ud(){var e=Bo.current;return e===null?!0:(q&4194048)===q?Vo===null:(q&62914560)===q||q&536870912?e===Vo:!1}function Wd(){var e=w.H;return w.H=xc,e===null?xc:e}function Gd(){var e=w.A;return w.A=ed,e}function Kd(){Y=4,rd||(q&4194048)!==q&&Bo.current!==null||(id=!0),!(sd&134217727)&&!(cd&134217727)||G===null||Rd(G,q,ud,!1)}function qd(e,t,n){var r=W;W|=2;var i=Wd(),a=Gd();(G!==e||q!==t)&&(vd=null,Vd(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=nd;switch(J){case 8:Bd(),o=6;break a;case 3:case 2:case 9:case 6:Bo.current===null&&(t=!0);var l=J;if(J=0,nd=null,$d(e,s,c,l),n&&id){o=0;break a}break;default:l=J,J=0,nd=null,$d(e,s,c,l)}}Jd(),o=Y;break}catch(t){Hd(e,t)}while(1);return t&&e.shellSuspendCounter++,Da=Ea=null,W=r,w.H=i,w.A=a,K===null&&(G=null,q=0,Fi()),o}function Jd(){for(;K!==null;)Zd(K)}function Yd(e,t){var n=W;W|=2;var r=Wd(),a=Gd();G!==e||q!==t?(vd=null,_d=Qe()+500,Vd(e,t)):id=yt(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=nd;b:switch(J){case 1:J=0,nd=null,$d(e,t,o,1);break;case 2:case 9:if(co(o)){J=0,nd=null,Qd(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),Ef(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:co(o)?(J=0,nd=null,Qd(t)):(J=0,nd=null,$d(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Ym(s):c.stateNode.complete){J=0,nd=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,ef(u))}break b}}J=0,nd=null,$d(e,t,o,5);break;case 6:J=0,nd=null,$d(e,t,o,6);break;case 8:Bd(),Y=6;break a;default:throw Error(i(462))}}Xd();break}catch(t){Hd(e,t)}while(1);return Da=Ea=null,w.H=r,w.A=a,W=n,K===null?(G=null,q=0,Fi(),Y):0}function Xd(){for(;K!==null&&!Xe();)Zd(K)}function Zd(e){var t=_l(e.alternate,e,od);e.memoizedProps=e.pendingProps,t===null?ef(e):K=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Zc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=Zc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:fs(t);var r=t;r===ma&&(A?(ba(r),r.tag===5&&r.stateNode!=null&&(k=r.stateNode)):(ba(r),A=!0));default:Tl(n,t),t=K=Ki(t,od),t=_l(n,t,od)}e.memoizedProps=e.pendingProps,t===null?ef(e):K=t}function $d(e,t,n,r){Da=Ea=null,fs(t),ho=null,go=0;var i=t.return;try{if(Rc(e,i,t,n,q)){Y=1,Nc(e,$i(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,Nc(e,$i(n,e.current)),K=null;return}t.flags&32768?(A||r===1?e=!0:id||q&536870912?e=!1:(rd=e=!0,(r===2||r===9||r===3||r===6)&&(r=Bo.current,r!==null&&r.tag===13&&(r.flags|=16384))),tf(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tf(t,rd);return}e=t.return;var n=Cl(t.alternate,t,od);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function tf(e,t){do{var n=wl(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function nf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do df();while(X!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===G&&(K=G=null,q=0),xd=t,bd=e,Sd=n,wd=a,Td=r,rf(e,t,n,s,c,l,f)}}function rf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Cd=s,s|=Pi,Tt(e,n,s,r,i,a),Dd=null,(n&335544064)===n?(Od=Ga(e),r=10262):(Od=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf(nt,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),Wl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=w.T,w.T=null,i=T.p,T.p=2,a=W,W|=4;try{gu(e,t,n)}finally{W=a,T.p=i,w.T=r}}X=1,Wl?Ed=Mp(o,e.containerInfo,Od,sf,cf,of,lf,ff,af,null,null):(sf(),cf(),lf())}function af(e){if(X!==0){var t=bd.onRecoverableError;t(e,{componentStack:null})}}function of(){X===3&&(X=0,Iu(xd,bd),X=4)}function sf(){if(X===1){X=0;var e=bd,t=xd,n=Sd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=w.T,w.T=null;var i=T.p;T.p=2;var a=W;W|=4;try{pu=mu=!1,Mu(t,e,n),n=cp;var o=ii(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&ri(s.ownerDocument.documentElement,s)){if(c!==null&&ai(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=ni(s,h),v=ni(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{W=a,T.p=i,w.T=r}}e.current=t,X=2}}function cf(){if(X===2){X=0;var e=bd,t=xd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=W;W|=4;try{vu(e,t.alternate,t)}finally{W=i,T.p=r,w.T=n}}X=3}}function lf(){if(X===4||X===3){X=0;var e=Ed;Ed=null,Ze();var t=bd,n=xd,r=Sd,i=Td,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?X=5:(X=0,xd=bd=null,uf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(yd=null),At(r),n=n.stateNode,ct&&typeof ct.onCommitFiberRoot==`function`)try{ct.onCommitFiberRoot(st,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=w.T,a=T.p,T.p=2,w.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{w.T=n,T.p=a}}if(i=Dd,o=Od,Od=null,i!==null&&(Dd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Sd&3&&df(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===Ad?kd++:(kd=0,Ad=t):(kd=0,Ad=null),Df(0,!1)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ha(t)))}function df(){return Ed!==null&&(Ed.skipTransition(),Ed=null),sf(),cf(),lf(),ff()}function ff(){if(X!==5)return!1;var e=bd,t=Cd;Cd=0;var n=At(Sd),r=w.T,a=T.p;try{T.p=32>n?32:n,w.T=null,n=wd,wd=null;var o=bd,s=Sd;if(X=0,xd=bd=null,Sd=0,W&6)throw Error(i(331));var c=W;if(W|=4,Zu(o.current),Uu(o,o.current,s,n),W=c,Df(0,!1),ct&&typeof ct.onPostCommitFiberRoot==`function`)try{ct.onPostCommitFiberRoot(st,o)}catch{}return!0}finally{T.p=a,w.T=r,uf(e,t)}}function pf(e,t,n){t=$i(n,t),t=Fc(e.stateNode,t,2),e=Do(e,t,2),e!==null&&(wt(e,2),Ef(e))}function Z(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(yd===null||!yd.has(r))){e=$i(n,e),n=Ic(2),r=Do(t,n,2),r!==null&&(Lc(n,r,t,e),wt(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new td;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(ad=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Qe()-hd?W&2?ld|=n:Vd(e,0):ld|=n,dd===q&&(dd=0)),Ef(e)}function gf(e,t){t===0&&(t=St()),e=Ri(e,t),e!==null&&(wt(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return Je(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-ut(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=q,a=vt(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||yt(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&hp()&&(e=Tf);for(var t=Qe(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}X!==0&&X!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-ut(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=xt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=vt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ye(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||yt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ye(r),At(n)){case 2:case 8:n=tt;break;case 32:n=nt;break;case 268435456:n=it;break;default:n=nt}return r=jf.bind(null,e),n=Je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ye(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(df()&&e.callbackNode!==n)return null;var r=q;return r=vt(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fd(e,r,t),Af(e,Qe()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(df())return null;Fd(e,t,!0)}function Nf(){bp(function(){W&6?Je(et,Of):kf()})}function Pf(){if(Tf===0){var e=Ja;e===0&&(e=mt,mt<<=1,!(mt&261888)&&(mt=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:On(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[Ft]||null).action),o=r.submitter;o&&(t=(t=o[Ft]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Xn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);sc(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),sc(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<Ti.length;Lf++){var Rf=Ti[Lf];Ei(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}Ei(_i,`onAnimationEnd`),Ei(vi,`onAnimationIteration`),Ei(yi,`onAnimationStart`),Ei(`dblclick`,`onDoubleClick`),Ei(`focusin`,`onFocus`),Ei(`focusout`,`onBlur`),Ei(bi,`onTransitionRun`),Ei(xi,`onTransitionStart`),Ei(Si,`onTransitionCancel`),Ei(Ci,`onTransitionEnd`),Qt(`onMouseEnter`,[`mouseout`,`mouseover`]),Qt(`onMouseLeave`,[`mouseout`,`mouseover`]),Qt(`onPointerEnter`,[`pointerout`,`pointerover`]),Qt(`onPointerLeave`,[`pointerout`,`pointerover`]),Zt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Zt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Zt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Zt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Zt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Zt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ji(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ji(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[Lt];n===void 0&&(n=t[Lt]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Hf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Uf=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Uf]){e[Uf]=!0,Yt.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Hf(t,!1,e),Hf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uf]||(t[Uf]=!0,Hf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!zn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Wt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}In(function(){var r=a,i=jn(n),s=[];a:{var c=wi.get(e);if(c!==void 0){var l=Xn,u=e;switch(e){case`keypress`:if(Gn(n)===0)break a;case`keydown`:case`keyup`:l=mr;break;case`focusin`:u=`focus`,l=ar;break;case`focusout`:u=`blur`,l=ar;break;case`beforeblur`:case`afterblur`:l=ar;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=rr;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=ir;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=_r;break;case _i:case vi:case yi:l=or;break;case Ci:l=vr;break;case`scroll`:case`scrollend`:l=Qn;break;case`wheel`:l=yr;break;case`copy`:case`cut`:case`paste`:l=sr;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=hr;break;case`submit`:l=gr;break;case`toggle`:case`beforetoggle`:l=br}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Ln(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==An&&(u=n.relatedTarget||n.fromElement)&&(Wt(u)||u[It]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Wt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=rr,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=hr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Kt(c),h=l==null?u:Kt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Wt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?re(c,l,Yf):null,c!==null&&Xf(s,u,c,d,!1),l!==null&&f!==null&&Xf(s,f,l,d,!0)))}a:{if(c=r?Kt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Br;else if(Pr(c)){if(Vr)_=Xr;else{_=Jr;var v=qr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Tn(r.elementType)&&(_=Br):_=Yr;if(_&&=_(e,r)){Fr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Kt(r):window,e){case`focusin`:(Pr(v)||v.contentEditable===`true`)&&(si=v,ci=r,li=null);break;case`focusout`:li=ci=si=null;break;case`mousedown`:ui=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:ui=!1,di(s,n,i);break;case`selectionchange`:if(oi)break;case`keydown`:case`keyup`:di(s,n,i)}var y;if(Sr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else Ar?Or(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(Tr&&n.locale!==`ko`&&(Ar||b!==`onCompositionStart`?b===`onCompositionEnd`&&Ar&&(y=Wn()):(Vn=i,Hn=`value`in Vn?Vn.value:Vn.textContent,Ar=!0)),v=Jf(r,b),0<v.length&&(b=new cr(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=kr(n),y!==null&&(b.data=y)))),(y=wr?jr(e,n):Mr(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new cr(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),If(s,e,r,n,i)}Vf(s,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Ln(e,n),i!=null&&r.unshift(qf(e,i,a)),i=Ln(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Ln(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=Ln(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function $f(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace(Qf,``)}function ep(e,t){return t=$f(t),$f(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||xn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&xn(e,``+r);else return;break;case`className`:on(e,`class`,r);break;case`tabIndex`:on(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:on(e,n,r);break;case`style`:wn(e,r,o);return;case`data`:if(t!==`object`){on(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=On(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=On(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=kn);return;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=On(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),an(e,`popover`,r);break;case`xlinkActuate`:sn(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:sn(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:sn(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:sn(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:sn(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:sn(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:sn(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:sn(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:sn(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:an(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=En.get(n)||n,an(e,n,r);else return}O=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:wn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)xn(e,r);else if(typeof r==`number`||typeof r==`bigint`)xn(e,``+r);else return;break;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=kn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Xt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[Ft]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}O=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):an(e,n,r)}return}O=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}gn(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&vn(e,!!r,n,!0):vn(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}bn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Q(zf[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Tn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(O=!0),o=m;break;case`name`:m!==f&&(O=!0),a=m;break;case`checked`:m!==f&&(O=!0),u=m;break;case`defaultChecked`:m!==f&&(O=!0),d=m;break;case`value`:m!==f&&(O=!0),s=m;break;case`defaultValue`:m!==f&&(O=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}hn(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(O=!0),p=o;break;case`defaultValue`:o!==l&&(O=!0),c=o;break;case`multiple`:o!==l&&(O=!0),s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?vn(e,!!n,n?[]:``,!1):vn(e,!!n,t,!0)):vn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(O=!0),p=a;break;case`defaultValue`:a!==o&&(O=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}yn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(O=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Tn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[Pt]=r,n[Ft]=t,np(n,e,t),D(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Vt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:C({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Wt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=re(n,a,S),t===null?t=!1:(h(t,!0,te,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=re(r,a,S),t===null?t=!1:(h(t,!0,ne,a,r),a=x,ee=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Ut(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Vt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&$(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===kn&&(e.onclick=null),Ut(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ut(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=T.d;T.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=zd();return e||t}function Cm(e){var t=Gt(e);t!==null&&t.tag===5&&t.type===`form`?lc(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=mn(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),D(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+mn(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+mn(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+mn(n.imageSizes)+`"]`)):i+=`[href="`+mn(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=C({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[Ht]=!0,o.onload=o.onerror=function(){Jt(o)}),D(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+mn(r)+`"][href="`+mn(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=C({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),D(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=qt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=C({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);D(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=qt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=C({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),D(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=qt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=C({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),D(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=Pe.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=qt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=qt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=qt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+mn(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return C({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Ht]){r.loading=1;return}}else t=e.createElement(`link`),t[Ht]=!0,t.onload=t.onerror=Jt.bind(null,t),np(t,`link`,n),D(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+mn(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+mn(n.href)+`"]`);if(r)return t.instance=r,D(r),r;var a=C({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),D(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,D(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),D(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,D(a),a):(r=n,(a=vm.get(o))&&(r=C({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),D(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Vt]||a[Pt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,D(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),D(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:de,Provider:null,Consumer:null,_currentValue:De,_currentValue2:De,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Ui(3,null,null,t),e.current=a,a.stateNode=e,t=Va(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},wo(a),e}function uh(e){return e?(e=Vi,e):Vi}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=Eo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Do(e,r,t),n!==null&&(Pd(n,e,t),Oo(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=Ri(e,67108864);t!==null&&Pd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=jd();t=kt(t);var n=Ri(e,t);n!==null&&Pd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=2,yh(e,t,n,r)}finally{T.p=a,w.T=i}}function vh(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=8,yh(e,t,n,r)}finally{T.p=a,w.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Kf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Gt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=_t(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-ut(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(W&6)&&(_d=Qe()+500,Df(0,!1))}}break;case 31:case 13:s=Ri(a,2),s!==null&&Pd(s,a,2),zd(),ph(a,2)}if(a=bh(r),a===null&&Kf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function bh(e){return e=jn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Wt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch($e()){case et:return 2;case tt:return 8;case nt:case rt:return 32;case it:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Gt(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Wt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,Mt(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,Mt(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);An=r,n.target.dispatchEvent(r),An=null}else return t=Gt(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Gt(n);a!==null&&(e.splice(t,3),t-=3,sc(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Ft]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Ft]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,jd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),zd(),t[It]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.1`)throw Error(i(527,Kh,`19.3.1`));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:w,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{st=Jh.inject(qh),ct=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ac,s=jc,c=Mc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[It]=t.current,Wf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=o((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),v=o(((e,t)=>{t.exports=_()})),y=c(g(),1),b=c(u(),1),x=v();function ee({onFileSelect:e}){let[t,n]=(0,b.useState)(!1),r=(0,b.useRef)(null);function i(t){let n=t.name.toLowerCase();!n.endsWith(`.txt`)&&!n.endsWith(`.huff`)?alert(`Please upload a .txt or .huff file.`):e(t)}function a(e){let t=e.target.files?.[0];t&&i(t)}function o(e){e.preventDefault(),n(!1);let t=e.dataTransfer.files[0];t&&i(t)}return(0,x.jsxs)(`div`,{onDragOver:e=>{e.preventDefault(),n(!0)},onDragLeave:()=>n(!1),onDrop:o,className:`border-2 border-dashed rounded-xl p-10 text-center
        ${t?`border-blue-500 bg-black`:`border-slate-500 bg-black`}`,children:[(0,x.jsx)(`div`,{className:`text-4xl mb-4`,children:`📁`}),(0,x.jsx)(`h2`,{className:`text-xl font-semibold mb-2`,children:`Drag and drop your file here`}),(0,x.jsx)(`p`,{className:`text-gray-400 mb-5`,children:`Or select a .txt file from your computer`}),(0,x.jsx)(`input`,{ref:r,type:`file`,accept:`.txt`,onChange:a,className:`hidden`}),(0,x.jsx)(`button`,{type:`button`,onClick:()=>r.current?.click(),className:`bg-slate-700 hover:bg-slate-600 px-5 py-2 rounded-lg`,children:`Browse Files`})]})}var te=[{fileName:`TheBells.txt`,contents:`Edgar Allan Poe’s “The Bells”:

Hear the sledges with the bells—
Silver bells!
What a world of merriment their melody foretells!
How they tinkle, tinkle, tinkle,
In the icy air of night!
While the stars that oversprinkle
All the heavens, seem to twinkle
With a crystalline delight;
Keeping time, time, time,
In a sort of Runic rhyme,
To the tintinnabulation that so musically wells
From the bells, bells, bells, bells,
Bells, bells, bells—
From the jingling and the tinkling of the bells.
`},{fileName:`for_the_love_of_a_man.txt`,contents:`Chapter VI. For the Love of a Man


When John Thornton froze his feet in the previous December his partners
had made him comfortable and left him to get well, going on themselves
up the river to get out a raft of saw-logs for Dawson. He was still
limping slightly at the time he rescued Buck, but with the continued
warm weather even the slight limp left him. And here, lying by the
river bank through the long spring days, watching the running water,
listening lazily to the songs of birds and the hum of nature, Buck
slowly won back his strength.

A rest comes very good after one has travelled three thousand miles,
and it must be confessed that Buck waxed lazy as his wounds healed, his
muscles swelled out, and the flesh came back to cover his bones. For
that matter, they were all loafing,—Buck, John Thornton, and Skeet and
Nig,—waiting for the raft to come that was to carry them down to
Dawson. Skeet was a little Irish setter who early made friends with
Buck, who, in a dying condition, was unable to resent her first
advances. She had the doctor trait which some dogs possess; and as a
mother cat washes her kittens, so she washed and cleansed Buck’s
wounds. Regularly, each morning after he had finished his breakfast,
she performed her self-appointed task, till he came to look for her
ministrations as much as he did for Thornton’s. Nig, equally friendly,
though less demonstrative, was a huge black dog, half bloodhound and
half deerhound, with eyes that laughed and a boundless good nature.

To Buck’s surprise these dogs manifested no jealousy toward him. They
seemed to share the kindliness and largeness of John Thornton. As Buck
grew stronger they enticed him into all sorts of ridiculous games, in
which Thornton himself could not forbear to join; and in this fashion
Buck romped through his convalescence and into a new existence. Love,
genuine passionate love, was his for the first time. This he had never
experienced at Judge Miller’s down in the sun-kissed Santa Clara
Valley. With the Judge’s sons, hunting and tramping, it had been a
working partnership; with the Judge’s grandsons, a sort of pompous
guardianship; and with the Judge himself, a stately and dignified
friendship. But love that was feverish and burning, that was adoration,
that was madness, it had taken John Thornton to arouse.

This man had saved his life, which was something; but, further, he was
the ideal master. Other men saw to the welfare of their dogs from a
sense of duty and business expediency; he saw to the welfare of his as
if they were his own children, because he could not help it. And he saw
further. He never forgot a kindly greeting or a cheering word, and to
sit down for a long talk with them (“gas” he called it) was as much his
delight as theirs. He had a way of taking Buck’s head roughly between
his hands, and resting his own head upon Buck’s, of shaking him back
and forth, the while calling him ill names that to Buck were love
names. Buck knew no greater joy than that rough embrace and the sound
of murmured oaths, and at each jerk back and forth it seemed that his
heart would be shaken out of his body so great was its ecstasy. And
when, released, he sprang to his feet, his mouth laughing, his eyes
eloquent, his throat vibrant with unuttered sound, and in that fashion
remained without movement, John Thornton would reverently exclaim,
“God! you can all but speak!”

Buck had a trick of love expression that was akin to hurt. He would
often seize Thornton’s hand in his mouth and close so fiercely that the
flesh bore the impress of his teeth for some time afterward. And as
Buck understood the oaths to be love words, so the man understood this
feigned bite for a caress.

For the most part, however, Buck’s love was expressed in adoration.
While he went wild with happiness when Thornton touched him or spoke to
him, he did not seek these tokens. Unlike Skeet, who was wont to shove
her nose under Thornton’s hand and nudge and nudge till petted, or Nig,
who would stalk up and rest his great head on Thornton’s knee, Buck was
content to adore at a distance. He would lie by the hour, eager, alert,
at Thornton’s feet, looking up into his face, dwelling upon it,
studying it, following with keenest interest each fleeting expression,
every movement or change of feature. Or, as chance might have it, he
would lie farther away, to the side or rear, watching the outlines of
the man and the occasional movements of his body. And often, such was
the communion in which they lived, the strength of Buck’s gaze would
draw John Thornton’s head around, and he would return the gaze, without
speech, his heart shining out of his eyes as Buck’s heart shone out.

For a long time after his rescue, Buck did not like Thornton to get out
of his sight. From the moment he left the tent to when he entered it
again, Buck would follow at his heels. His transient masters since he
had come into the Northland had bred in him a fear that no master could
be permanent. He was afraid that Thornton would pass out of his life as
Perrault and François and the Scotch half-breed had passed out. Even in
the night, in his dreams, he was haunted by this fear. At such times he
would shake off sleep and creep through the chill to the flap of the
tent, where he would stand and listen to the sound of his master’s
breathing.

But in spite of this great love he bore John Thornton, which seemed to
bespeak the soft civilizing influence, the strain of the primitive,
which the Northland had aroused in him, remained alive and active.
Faithfulness and devotion, things born of fire and roof, were his; yet
he retained his wildness and wiliness. He was a thing of the wild, come
in from the wild to sit by John Thornton’s fire, rather than a dog of
the soft Southland stamped with the marks of generations of
civilization. Because of his very great love, he could not steal from
this man, but from any other man, in any other camp, he did not
hesitate an instant; while the cunning with which he stole enabled him
to escape detection.

His face and body were scored by the teeth of many dogs, and he fought
as fiercely as ever and more shrewdly. Skeet and Nig were too
good-natured for quarrelling,—besides, they belonged to John Thornton;
but the strange dog, no matter what the breed or valor, swiftly
acknowledged Buck’s supremacy or found himself struggling for life with
a terrible antagonist. And Buck was merciless. He had learned well the
law of club and fang, and he never forewent an advantage or drew back
from a foe he had started on the way to Death. He had lessoned from
Spitz, and from the chief fighting dogs of the police and mail, and
knew there was no middle course. He must master or be mastered; while
to show mercy was a weakness. Mercy did not exist in the primordial
life. It was misunderstood for fear, and such misunderstandings made
for death. Kill or be killed, eat or be eaten, was the law; and this
mandate, down out of the depths of Time, he obeyed.

He was older than the days he had seen and the breaths he had drawn. He
linked the past with the present, and the eternity behind him throbbed
through him in a mighty rhythm to which he swayed as the tides and
seasons swayed. He sat by John Thornton’s fire, a broad-breasted dog,
white-fanged and long-furred; but behind him were the shades of all
manner of dogs, half-wolves and wild wolves, urgent and prompting,
tasting the savor of the meat he ate, thirsting for the water he drank,
scenting the wind with him, listening with him and telling him the
sounds made by the wild life in the forest, dictating his moods,
directing his actions, lying down to sleep with him when he lay down,
and dreaming with him and beyond him and becoming themselves the stuff
of his dreams.

So peremptorily did these shades beckon him, that each day mankind and
the claims of mankind slipped farther from him. Deep in the forest a
call was sounding, and as often as he heard this call, mysteriously
thrilling and luring, he felt compelled to turn his back upon the fire
and the beaten earth around it, and to plunge into the forest, and on
and on, he knew not where or why; nor did he wonder where or why, the
call sounding imperiously, deep in the forest. But as often as he
gained the soft unbroken earth and the green shade, the love for John
Thornton drew him back to the fire again.

Thornton alone held him. The rest of mankind was as nothing. Chance
travellers might praise or pet him; but he was cold under it all, and
from a too demonstrative man he would get up and walk away. When
Thornton’s partners, Hans and Pete, arrived on the long-expected raft,
Buck refused to notice them till he learned they were close to
Thornton; after that he tolerated them in a passive sort of way,
accepting favors from them as though he favored them by accepting. They
were of the same large type as Thornton, living close to the earth,
thinking simply and seeing clearly; and ere they swung the raft into
the big eddy by the saw-mill at Dawson, they understood Buck and his
ways, and did not insist upon an intimacy such as obtained with Skeet
and Nig.

For Thornton, however, his love seemed to grow and grow. He, alone
among men, could put a pack upon Buck’s back in the summer travelling.
Nothing was too great for Buck to do, when Thornton commanded. One day
(they had grub-staked themselves from the proceeds of the raft and left
Dawson for the head-waters of the Tanana) the men and dogs were sitting
on the crest of a cliff which fell away, straight down, to naked
bed-rock three hundred feet below. John Thornton was sitting near the
edge, Buck at his shoulder. A thoughtless whim seized Thornton, and he
drew the attention of Hans and Pete to the experiment he had in mind.
“Jump, Buck!” he commanded, sweeping his arm out and over the chasm.
The next instant he was grappling with Buck on the extreme edge, while
Hans and Pete were dragging them back into safety.

“It’s uncanny,” Pete said, after it was over and they had caught their
speech.

Thornton shook his head. “No, it is splendid, and it is terrible, too.
Do you know, it sometimes makes me afraid.”

“I’m not hankering to be the man that lays hands on you while he’s
around,” Pete announced conclusively, nodding his head toward Buck.

“Py Jingo!” was Hans’s contribution. “Not mineself either.”

It was at Circle City, ere the year was out, that Pete’s apprehensions
were realized. “Black” Burton, a man evil-tempered and malicious, had
been picking a quarrel with a tenderfoot at the bar, when Thornton
stepped good-naturedly between. Buck, as was his custom, was lying in a
corner, head on paws, watching his master’s every action. Burton struck
out, without warning, straight from the shoulder. Thornton was sent
spinning, and saved himself from falling only by clutching the rail of
the bar.

Those who were looking on heard what was neither bark nor yelp, but a
something which is best described as a roar, and they saw Buck’s body
rise up in the air as he left the floor for Burton’s throat. The man
saved his life by instinctively throwing out his arm, but was hurled
backward to the floor with Buck on top of him. Buck loosed his teeth
from the flesh of the arm and drove in again for the throat. This time
the man succeeded only in partly blocking, and his throat was torn
open. Then the crowd was upon Buck, and he was driven off; but while a
surgeon checked the bleeding, he prowled up and down, growling
furiously, attempting to rush in, and being forced back by an array of
hostile clubs. A “miners’ meeting,” called on the spot, decided that
the dog had sufficient provocation, and Buck was discharged. But his
reputation was made, and from that day his name spread through every
camp in Alaska.

Later on, in the fall of the year, he saved John Thornton’s life in
quite another fashion. The three partners were lining a long and narrow
poling-boat down a bad stretch of rapids on the Forty-Mile Creek. Hans
and Pete moved along the bank, snubbing with a thin Manila rope from
tree to tree, while Thornton remained in the boat, helping its descent
by means of a pole, and shouting directions to the shore. Buck, on the
bank, worried and anxious, kept abreast of the boat, his eyes never off
his master.

At a particularly bad spot, where a ledge of barely submerged rocks
jutted out into the river, Hans cast off the rope, and, while Thornton
poled the boat out into the stream, ran down the bank with the end in
his hand to snub the boat when it had cleared the ledge. This it did,
and was flying down-stream in a current as swift as a mill-race, when
Hans checked it with the rope and checked too suddenly. The boat
flirted over and snubbed in to the bank bottom up, while Thornton,
flung sheer out of it, was carried down-stream toward the worst part of
the rapids, a stretch of wild water in which no swimmer could live.

Buck had sprung in on the instant; and at the end of three hundred
yards, amid a mad swirl of water, he overhauled Thornton. When he felt
him grasp his tail, Buck headed for the bank, swimming with all his
splendid strength. But the progress shoreward was slow; the progress
down-stream amazingly rapid. From below came the fatal roaring where
the wild current went wilder and was rent in shreds and spray by the
rocks which thrust through like the teeth of an enormous comb. The suck
of the water as it took the beginning of the last steep pitch was
frightful, and Thornton knew that the shore was impossible. He scraped
furiously over a rock, bruised across a second, and struck a third with
crushing force. He clutched its slippery top with both hands, releasing
Buck, and above the roar of the churning water shouted: “Go, Buck! Go!”

Buck could not hold his own, and swept on down-stream, struggling
desperately, but unable to win back. When he heard Thornton’s command
repeated, he partly reared out of the water, throwing his head high, as
though for a last look, then turned obediently toward the bank. He swam
powerfully and was dragged ashore by Pete and Hans at the very point
where swimming ceased to be possible and destruction began.

They knew that the time a man could cling to a slippery rock in the
face of that driving current was a matter of minutes, and they ran as
fast as they could up the bank to a point far above where Thornton was
hanging on. They attached the line with which they had been snubbing
the boat to Buck’s neck and shoulders, being careful that it should
neither strangle him nor impede his swimming, and launched him into the
stream. He struck out boldly, but not straight enough into the stream.
He discovered the mistake too late, when Thornton was abreast of him
and a bare half-dozen strokes away while he was being carried
helplessly past.

Hans promptly snubbed with the rope, as though Buck were a boat. The
rope thus tightening on him in the sweep of the current, he was jerked
under the surface, and under the surface he remained till his body
struck against the bank and he was hauled out. He was half drowned, and
Hans and Pete threw themselves upon him, pounding the breath into him
and the water out of him. He staggered to his feet and fell down. The
faint sound of Thornton’s voice came to them, and though they could not
make out the words of it, they knew that he was in his extremity. His
master’s voice acted on Buck like an electric shock. He sprang to his
feet and ran up the bank ahead of the men to the point of his previous
departure.

Again the rope was attached and he was launched, and again he struck
out, but this time straight into the stream. He had miscalculated once,
but he would not be guilty of it a second time. Hans paid out the rope,
permitting no slack, while Pete kept it clear of coils. Buck held on
till he was on a line straight above Thornton; then he turned, and with
the speed of an express train headed down upon him. Thornton saw him
coming, and, as Buck struck him like a battering ram, with the whole
force of the current behind him, he reached up and closed with both
arms around the shaggy neck. Hans snubbed the rope around the tree, and
Buck and Thornton were jerked under the water. Strangling, suffocating,
sometimes one uppermost and sometimes the other, dragging over the
jagged bottom, smashing against rocks and snags, they veered in to the
bank.

Thornton came to, belly downward and being violently propelled back and
forth across a drift log by Hans and Pete. His first glance was for
Buck, over whose limp and apparently lifeless body Nig was setting up a
howl, while Skeet was licking the wet face and closed eyes. Thornton
was himself bruised and battered, and he went carefully over Buck’s
body, when he had been brought around, finding three broken ribs.

“That settles it,” he announced. “We camp right here.” And camp they
did, till Buck’s ribs knitted and he was able to travel.

That winter, at Dawson, Buck performed another exploit, not so heroic,
perhaps, but one that put his name many notches higher on the
totem-pole of Alaskan fame. This exploit was particularly gratifying to
the three men; for they stood in need of the outfit which it furnished,
and were enabled to make a long-desired trip into the virgin East,
where miners had not yet appeared. It was brought about by a
conversation in the Eldorado Saloon, in which men waxed boastful of
their favorite dogs. Buck, because of his record, was the target for
these men, and Thornton was driven stoutly to defend him. At the end of
half an hour one man stated that his dog could start a sled with five
hundred pounds and walk off with it; a second bragged six hundred for
his dog; and a third, seven hundred.

“Pooh! pooh!” said John Thornton; “Buck can start a thousand pounds.”

“And break it out? and walk off with it for a hundred yards?” demanded
Matthewson, a Bonanza King, he of the seven hundred vaunt.

“And break it out, and walk off with it for a hundred yards,” John
Thornton said coolly.

“Well,” Matthewson said, slowly and deliberately, so that all could
hear, “I’ve got a thousand dollars that says he can’t. And there it
is.” So saying, he slammed a sack of gold dust of the size of a bologna
sausage down upon the bar.

Nobody spoke. Thornton’s bluff, if bluff it was, had been called. He
could feel a flush of warm blood creeping up his face. His tongue had
tricked him. He did not know whether Buck could start a thousand
pounds. Half a ton! The enormousness of it appalled him. He had great
faith in Buck’s strength and had often thought him capable of starting
such a load; but never, as now, had he faced the possibility of it, the
eyes of a dozen men fixed upon him, silent and waiting. Further, he had
no thousand dollars; nor had Hans or Pete.

“I’ve got a sled standing outside now, with twenty fiftypound sacks of
flour on it,” Matthewson went on with brutal directness; “so don’t let
that hinder you.”

Thornton did not reply. He did not know what to say. He glanced from
face to face in the absent way of a man who has lost the power of
thought and is seeking somewhere to find the thing that will start it
going again. The face of Jim O’Brien, a Mastodon King and old-time
comrade, caught his eyes. It was as a cue to him, seeming to rouse him
to do what he would never have dreamed of doing.

“Can you lend me a thousand?” he asked, almost in a whisper.

“Sure,” answered O’Brien, thumping down a plethoric sack by the side of
Matthewson’s. “Though it’s little faith I’m having, John, that the
beast can do the trick.”

The Eldorado emptied its occupants into the street to see the test. The
tables were deserted, and the dealers and gamekeepers came forth to see
the outcome of the wager and to lay odds. Several hundred men, furred
and mittened, banked around the sled within easy distance. Matthewson’s
sled, loaded with a thousand pounds of flour, had been standing for a
couple of hours, and in the intense cold (it was sixty below zero) the
runners had frozen fast to the hard-packed snow. Men offered odds of
two to one that Buck could not budge the sled. A quibble arose
concerning the phrase “break out.” O’Brien contended it was Thornton’s
privilege to knock the runners loose, leaving Buck to “break it out”
from a dead standstill. Matthewson insisted that the phrase included
breaking the runners from the frozen grip of the snow. A majority of
the men who had witnessed the making of the bet decided in his favor,
whereat the odds went up to three to one against Buck.

There were no takers. Not a man believed him capable of the feat.
Thornton had been hurried into the wager, heavy with doubt; and now
that he looked at the sled itself, the concrete fact, with the regular
team of ten dogs curled up in the snow before it, the more impossible
the task appeared. Matthewson waxed jubilant.

“Three to one!” he proclaimed. “I’ll lay you another thousand at that
figure, Thornton. What d’ye say?”

Thornton’s doubt was strong in his face, but his fighting spirit was
aroused—the fighting spirit that soars above odds, fails to recognize
the impossible, and is deaf to all save the clamor for battle. He
called Hans and Pete to him. Their sacks were slim, and with his own
the three partners could rake together only two hundred dollars. In the
ebb of their fortunes, this sum was their total capital; yet they laid
it unhesitatingly against Matthewson’s six hundred.

The team of ten dogs was unhitched, and Buck, with his own harness, was
put into the sled. He had caught the contagion of the excitement, and
he felt that in some way he must do a great thing for John Thornton.
Murmurs of admiration at his splendid appearance went up. He was in
perfect condition, without an ounce of superfluous flesh, and the one
hundred and fifty pounds that he weighed were so many pounds of grit
and virility. His furry coat shone with the sheen of silk. Down the
neck and across the shoulders, his mane, in repose as it was, half
bristled and seemed to lift with every movement, as though excess of
vigor made each particular hair alive and active. The great breast and
heavy fore legs were no more than in proportion with the rest of the
body, where the muscles showed in tight rolls underneath the skin. Men
felt these muscles and proclaimed them hard as iron, and the odds went
down to two to one.

“Gad, sir! Gad, sir!” stuttered a member of the latest dynasty, a king
of the Skookum Benches. “I offer you eight hundred for him, sir, before
the test, sir; eight hundred just as he stands.”

Thornton shook his head and stepped to Buck’s side.

“You must stand off from him,” Matthewson protested. “Free play and
plenty of room.”

The crowd fell silent; only could be heard the voices of the gamblers
vainly offering two to one. Everybody acknowledged Buck a magnificent
animal, but twenty fifty-pound sacks of flour bulked too large in their
eyes for them to loosen their pouch-strings.

Thornton knelt down by Buck’s side. He took his head in his two hands
and rested cheek on cheek. He did not playfully shake him, as was his
wont, or murmur soft love curses; but he whispered in his ear. “As you
love me, Buck. As you love me,” was what he whispered. Buck whined with
suppressed eagerness.

The crowd was watching curiously. The affair was growing mysterious. It
seemed like a conjuration. As Thornton got to his feet, Buck seized his
mittened hand between his jaws, pressing in with his teeth and
releasing slowly, half-reluctantly. It was the answer, in terms, not of
speech, but of love. Thornton stepped well back.

“Now, Buck,” he said.

Buck tightened the traces, then slacked them for a matter of several
inches. It was the way he had learned.

“Gee!” Thornton’s voice rang out, sharp in the tense silence.

Buck swung to the right, ending the movement in a plunge that took up
the slack and with a sudden jerk arrested his one hundred and fifty
pounds. The load quivered, and from under the runners arose a crisp
crackling.

“Haw!” Thornton commanded.

Buck duplicated the manœuvre, this time to the left. The crackling
turned into a snapping, the sled pivoting and the runners slipping and
grating several inches to the side. The sled was broken out. Men were
holding their breaths, intensely unconscious of the fact.

“Now, MUSH!”

Thornton’s command cracked out like a pistol-shot. Buck threw himself
forward, tightening the traces with a jarring lunge. His whole body was
gathered compactly together in the tremendous effort, the muscles
writhing and knotting like live things under the silky fur. His great
chest was low to the ground, his head forward and down, while his feet
were flying like mad, the claws scarring the hard-packed snow in
parallel grooves. The sled swayed and trembled, half-started forward.
One of his feet slipped, and one man groaned aloud. Then the sled
lurched ahead in what appeared a rapid succession of jerks, though it
never really came to a dead stop again...half an inch...an inch... two
inches... The jerks perceptibly diminished; as the sled gained
momentum, he caught them up, till it was moving steadily along.

Men gasped and began to breathe again, unaware that for a moment they
had ceased to breathe. Thornton was running behind, encouraging Buck
with short, cheery words. The distance had been measured off, and as he
neared the pile of firewood which marked the end of the hundred yards,
a cheer began to grow and grow, which burst into a roar as he passed
the firewood and halted at command. Every man was tearing himself
loose, even Matthewson. Hats and mittens were flying in the air. Men
were shaking hands, it did not matter with whom, and bubbling over in a
general incoherent babel.

But Thornton fell on his knees beside Buck. Head was against head, and
he was shaking him back and forth. Those who hurried up heard him
cursing Buck, and he cursed him long and fervently, and softly and
lovingly.

“Gad, sir! Gad, sir!” spluttered the Skookum Bench king. “I’ll give you
a thousand for him, sir, a thousand, sir—twelve hundred, sir.”

Thornton rose to his feet. His eyes were wet. The tears were streaming
frankly down his cheeks. “Sir,” he said to the Skookum Bench king, “no,
sir. You can go to hell, sir. It’s the best I can do for you, sir.”

Buck seized Thornton’s hand in his teeth. Thornton shook him back and
forth. As though animated by a common impulse, the onlookers drew back
to a respectful distance; nor were they again indiscreet enough to
interrupt.


`},{fileName:`into_the_primitive.txt`,contents:`Chapter I. Into the Primitive


“Old longings nomadic leap,
Chafing at custom’s chain;
Again from its brumal sleep
Wakens the ferine strain.”


Buck did not read the newspapers, or he would have known that trouble  
was brewing, not alone for himself, but for every tide-water dog,
strong of muscle and with warm, long hair, from Puget Sound to San
Diego. Because men, groping in the Arctic darkness, had found a yellow 
metal, and because steamship and transportation companies were booming
the find, thousands of men were rushing into the Northland. These men
wanted dogs, and the dogs they wanted were heavy dogs, with strong
muscles by which to toil, and furry coats to protect them from the
frost.

Buck lived at a big house in the sun-kissed Santa Clara Valley. Judge
Miller’s place, it was called. It stood back from the road, half hidden
among the trees, through which glimpses could be caught of the wide
cool veranda that ran around its four sides. The house was approached
by gravelled driveways which wound about through wide-spreading lawns
and under the interlacing boughs of tall poplars. At the rear things
were on even a more spacious scale than at the front. There were great
stables, where a dozen grooms and boys held forth, rows of vine-clad
servants’ cottages, an endless and orderly array of outhouses, long
grape arbors, green pastures, orchards, and berry patches. Then there
was the pumping plant for the artesian well, and the big cement tank
where Judge Miller’s boys took their morning plunge and kept cool in
the hot afternoon.

And over this great demesne Buck ruled. Here he was born, and here he
had lived the four years of his life. It was true, there were other
dogs. There could not but be other dogs on so vast a place, but they
did not count. They came and went, resided in the populous kennels, or
lived obscurely in the recesses of the house after the fashion of
Toots, the Japanese pug, or Ysabel, the Mexican hairless,—strange
creatures that rarely put nose out of doors or set foot to ground. On
the other hand, there were the fox terriers, a score of them at least,
who yelped fearful promises at Toots and Ysabel looking out of the
windows at them and protected by a legion of housemaids armed with
brooms and mops.

But Buck was neither house-dog nor kennel-dog. The whole realm was his.
He plunged into the swimming tank or went hunting with the Judge’s
sons; he escorted Mollie and Alice, the Judge’s daughters, on long
twilight or early morning rambles; on wintry nights he lay at the
Judge’s feet before the roaring library fire; he carried the Judge’s
grandsons on his back, or rolled them in the grass, and guarded their
footsteps through wild adventures down to the fountain in the stable
yard, and even beyond, where the paddocks were, and the berry patches.
Among the terriers he stalked imperiously, and Toots and Ysabel he
utterly ignored, for he was king,—king over all creeping, crawling,
flying things of Judge Miller’s place, humans included.

His father, Elmo, a huge St. Bernard, had been the Judge’s inseparable
companion, and Buck bid fair to follow in the way of his father. He was
not so large,—he weighed only one hundred and forty pounds,—for his
mother, Shep, had been a Scotch shepherd dog. Nevertheless, one hundred
and forty pounds, to which was added the dignity that comes of good
living and universal respect, enabled him to carry himself in right
royal fashion. During the four years since his puppyhood he had lived
the life of a sated aristocrat; he had a fine pride in himself, was
even a trifle egotistical, as country gentlemen sometimes become
because of their insular situation. But he had saved himself by not
becoming a mere pampered house-dog. Hunting and kindred outdoor
delights had kept down the fat and hardened his muscles; and to him, as
to the cold-tubbing races, the love of water had been a tonic and a
health preserver.

And this was the manner of dog Buck was in the fall of 1897, when the
Klondike strike dragged men from all the world into the frozen North.
But Buck did not read the newspapers, and he did not know that Manuel,
one of the gardener’s helpers, was an undesirable acquaintance. Manuel
had one besetting sin. He loved to play Chinese lottery. Also, in his
gambling, he had one besetting weakness—faith in a system; and this
made his damnation certain. For to play a system requires money, while
the wages of a gardener’s helper do not lap over the needs of a wife
and numerous progeny.

The Judge was at a meeting of the Raisin Growers’ Association, and the
boys were busy organizing an athletic club, on the memorable night of
Manuel’s treachery. No one saw him and Buck go off through the orchard
on what Buck imagined was merely a stroll. And with the exception of a
solitary man, no one saw them arrive at the little flag station known
as College Park. This man talked with Manuel, and money chinked between
them.

“You might wrap up the goods before you deliver ’m,” the stranger said
gruffly, and Manuel doubled a piece of stout rope around Buck’s neck
under the collar.

“Twist it, an’ you’ll choke ’m plentee,” said Manuel, and the stranger
grunted a ready affirmative.

Buck had accepted the rope with quiet dignity. To be sure, it was an
unwonted performance: but he had learned to trust in men he knew, and
to give them credit for a wisdom that outreached his own. But when the
ends of the rope were placed in the stranger’s hands, he growled
menacingly. He had merely intimated his displeasure, in his pride
believing that to intimate was to command. But to his surprise the rope
tightened around his neck, shutting off his breath. In quick rage he
sprang at the man, who met him halfway, grappled him close by the
throat, and with a deft twist threw him over on his back. Then the rope
tightened mercilessly, while Buck struggled in a fury, his tongue
lolling out of his mouth and his great chest panting futilely. Never in
all his life had he been so vilely treated, and never in all his life
had he been so angry. But his strength ebbed, his eyes glazed, and he
knew nothing when the train was flagged and the two men threw him into
the baggage car.

The next he knew, he was dimly aware that his tongue was hurting and
that he was being jolted along in some kind of a conveyance. The hoarse
shriek of a locomotive whistling a crossing told him where he was. He
had travelled too often with the Judge not to know the sensation of
riding in a baggage car. He opened his eyes, and into them came the
unbridled anger of a kidnapped king. The man sprang for his throat, but
Buck was too quick for him. His jaws closed on the hand, nor did they
relax till his senses were choked out of him once more.

“Yep, has fits,” the man said, hiding his mangled hand from the
baggageman, who had been attracted by the sounds of struggle. “I’m
takin’ ’m up for the boss to ’Frisco. A crack dog-doctor there thinks
that he can cure ’m.”

Concerning that night’s ride, the man spoke most eloquently for
himself, in a little shed back of a saloon on the San Francisco water
front.

“All I get is fifty for it,” he grumbled; “an’ I wouldn’t do it over
for a thousand, cold cash.”

His hand was wrapped in a bloody handkerchief, and the right trouser
leg was ripped from knee to ankle.

“How much did the other mug get?” the saloon-keeper demanded.

“A hundred,” was the reply. “Wouldn’t take a sou less, so help me.”

“That makes a hundred and fifty,” the saloon-keeper calculated; “and
he’s worth it, or I’m a squarehead.”

The kidnapper undid the bloody wrappings and looked at his lacerated
hand. “If I don’t get the hydrophoby—”

“It’ll be because you was born to hang,” laughed the saloon-keeper.
“Here, lend me a hand before you pull your freight,” he added.

Dazed, suffering intolerable pain from throat and tongue, with the life
half throttled out of him, Buck attempted to face his tormentors. But
he was thrown down and choked repeatedly, till they succeeded in filing
the heavy brass collar from off his neck. Then the rope was removed,
and he was flung into a cagelike crate.

There he lay for the remainder of the weary night, nursing his wrath
and wounded pride. He could not understand what it all meant. What did
they want with him, these strange men? Why were they keeping him pent
up in this narrow crate? He did not know why, but he felt oppressed by
the vague sense of impending calamity. Several times during the night
he sprang to his feet when the shed door rattled open, expecting to see
the Judge, or the boys at least. But each time it was the bulging face
of the saloon-keeper that peered in at him by the sickly light of a
tallow candle. And each time the joyful bark that trembled in Buck’s
throat was twisted into a savage growl.

But the saloon-keeper let him alone, and in the morning four men
entered and picked up the crate. More tormentors, Buck decided, for
they were evil-looking creatures, ragged and unkempt; and he stormed
and raged at them through the bars. They only laughed and poked sticks
at him, which he promptly assailed with his teeth till he realized that
that was what they wanted. Whereupon he lay down sullenly and allowed
the crate to be lifted into a wagon. Then he, and the crate in which he
was imprisoned, began a passage through many hands. Clerks in the
express office took charge of him; he was carted about in another
wagon; a truck carried him, with an assortment of boxes and parcels,
upon a ferry steamer; he was trucked off the steamer into a great
railway depot, and finally he was deposited in an express car.

For two days and nights this express car was dragged along at the tail
of shrieking locomotives; and for two days and nights Buck neither ate
nor drank. In his anger he had met the first advances of the express
messengers with growls, and they had retaliated by teasing him. When he
flung himself against the bars, quivering and frothing, they laughed at
him and taunted him. They growled and barked like detestable dogs,
mewed, and flapped their arms and crowed. It was all very silly, he
knew; but therefore the more outrage to his dignity, and his anger
waxed and waxed. He did not mind the hunger so much, but the lack of
water caused him severe suffering and fanned his wrath to fever-pitch.
For that matter, high-strung and finely sensitive, the ill treatment
had flung him into a fever, which was fed by the inflammation of his
parched and swollen throat and tongue.

He was glad for one thing: the rope was off his neck. That had given
them an unfair advantage; but now that it was off, he would show them.
They would never get another rope around his neck. Upon that he was
resolved. For two days and nights he neither ate nor drank, and during
those two days and nights of torment, he accumulated a fund of wrath
that boded ill for whoever first fell foul of him. His eyes turned
blood-shot, and he was metamorphosed into a raging fiend. So changed
was he that the Judge himself would not have recognized him; and the
express messengers breathed with relief when they bundled him off the
train at Seattle.

Four men gingerly carried the crate from the wagon into a small,
high-walled back yard. A stout man, with a red sweater that sagged
generously at the neck, came out and signed the book for the driver.
That was the man, Buck divined, the next tormentor, and he hurled
himself savagely against the bars. The man smiled grimly, and brought a
hatchet and a club.

“You ain’t going to take him out now?” the driver asked.

“Sure,” the man replied, driving the hatchet into the crate for a pry.

There was an instantaneous scattering of the four men who had carried
it in, and from safe perches on top the wall they prepared to watch the
performance.

Buck rushed at the splintering wood, sinking his teeth into it, surging
and wrestling with it. Wherever the hatchet fell on the outside, he was
there on the inside, snarling and growling, as furiously anxious to get
out as the man in the red sweater was calmly intent on getting him out.

“Now, you red-eyed devil,” he said, when he had made an opening
sufficient for the passage of Buck’s body. At the same time he dropped
the hatchet and shifted the club to his right hand.

And Buck was truly a red-eyed devil, as he drew himself together for
the spring, hair bristling, mouth foaming, a mad glitter in his
blood-shot eyes. Straight at the man he launched his one hundred and
forty pounds of fury, surcharged with the pent passion of two days and
nights. In mid air, just as his jaws were about to close on the man, he
received a shock that checked his body and brought his teeth together
with an agonizing clip. He whirled over, fetching the ground on his
back and side. He had never been struck by a club in his life, and did
not understand. With a snarl that was part bark and more scream he was
again on his feet and launched into the air. And again the shock came
and he was brought crushingly to the ground. This time he was aware
that it was the club, but his madness knew no caution. A dozen times he
charged, and as often the club broke the charge and smashed him down.

After a particularly fierce blow, he crawled to his feet, too dazed to
rush. He staggered limply about, the blood flowing from nose and mouth
and ears, his beautiful coat sprayed and flecked with bloody slaver.
Then the man advanced and deliberately dealt him a frightful blow on
the nose. All the pain he had endured was as nothing compared with the
exquisite agony of this. With a roar that was almost lionlike in its
ferocity, he again hurled himself at the man. But the man, shifting the
club from right to left, coolly caught him by the under jaw, at the
same time wrenching downward and backward. Buck described a complete
circle in the air, and half of another, then crashed to the ground on
his head and chest.

For the last time he rushed. The man struck the shrewd blow he had
purposely withheld for so long, and Buck crumpled up and went down,
knocked utterly senseless.

“He’s no slouch at dog-breakin’, that’s wot I say,” one of the men on
the wall cried enthusiastically.

“Druther break cayuses any day, and twice on Sundays,” was the reply of
the driver, as he climbed on the wagon and started the horses.

Buck’s senses came back to him, but not his strength. He lay where he
had fallen, and from there he watched the man in the red sweater.

“‘Answers to the name of Buck,’” the man soliloquized, quoting from the
saloon-keeper’s letter which had announced the consignment of the crate
and contents. “Well, Buck, my boy,” he went on in a genial voice,
“we’ve had our little ruction, and the best thing we can do is to let
it go at that. You’ve learned your place, and I know mine. Be a good
dog and all ’ll go well and the goose hang high. Be a bad dog, and I’ll
whale the stuffin’ outa you. Understand?”

As he spoke he fearlessly patted the head he had so mercilessly
pounded, and though Buck’s hair involuntarily bristled at touch of the
hand, he endured it without protest. When the man brought him water he
drank eagerly, and later bolted a generous meal of raw meat, chunk by
chunk, from the man’s hand.

He was beaten (he knew that); but he was not broken. He saw, once for
all, that he stood no chance against a man with a club. He had learned
the lesson, and in all his after life he never forgot it. That club was
a revelation. It was his introduction to the reign of primitive law,
and he met the introduction halfway. The facts of life took on a
fiercer aspect; and while he faced that aspect uncowed, he faced it
with all the latent cunning of his nature aroused. As the days went by,
other dogs came, in crates and at the ends of ropes, some docilely, and
some raging and roaring as he had come; and, one and all, he watched
them pass under the dominion of the man in the red sweater. Again and
again, as he looked at each brutal performance, the lesson was driven
home to Buck: a man with a club was a lawgiver, a master to be obeyed,
though not necessarily conciliated. Of this last Buck was never guilty,
though he did see beaten dogs that fawned upon the man, and wagged
their tails, and licked his hand. Also he saw one dog, that would
neither conciliate nor obey, finally killed in the struggle for
mastery.

Now and again men came, strangers, who talked excitedly, wheedlingly,
and in all kinds of fashions to the man in the red sweater. And at such
times that money passed between them the strangers took one or more of
the dogs away with them. Buck wondered where they went, for they never
came back; but the fear of the future was strong upon him, and he was
glad each time when he was not selected.

Yet his time came, in the end, in the form of a little weazened man who
spat broken English and many strange and uncouth exclamations which
Buck could not understand.

“Sacredam!” he cried, when his eyes lit upon Buck. “Dat one dam bully
dog! Eh? How moch?”

“Three hundred, and a present at that,” was the prompt reply of the man
in the red sweater. “And seem’ it’s government money, you ain’t got no
kick coming, eh, Perrault?”

Perrault grinned. Considering that the price of dogs had been boomed
skyward by the unwonted demand, it was not an unfair sum for so fine an
animal. The Canadian Government would be no loser, nor would its
despatches travel the slower. Perrault knew dogs, and when he looked at
Buck he knew that he was one in a thousand—“One in ten t’ousand,” he
commented mentally.

Buck saw money pass between them, and was not surprised when Curly, a
good-natured Newfoundland, and he were led away by the little weazened
man. That was the last he saw of the man in the red sweater, and as
Curly and he looked at receding Seattle from the deck of the _Narwhal_,
it was the last he saw of the warm Southland. Curly and he were taken
below by Perrault and turned over to a black-faced giant called
François. Perrault was a French-Canadian, and swarthy; but François was
a French-Canadian half-breed, and twice as swarthy. They were a new
kind of men to Buck (of which he was destined to see many more), and
while he developed no affection for them, he none the less grew
honestly to respect them. He speedily learned that Perrault and
François were fair men, calm and impartial in administering justice,
and too wise in the way of dogs to be fooled by dogs.

In the ’tween-decks of the _Narwhal_, Buck and Curly joined two other
dogs. One of them was a big, snow-white fellow from Spitzbergen who had
been brought away by a whaling captain, and who had later accompanied a
Geological Survey into the Barrens. He was friendly, in a treacherous
sort of way, smiling into one’s face the while he meditated some
underhand trick, as, for instance, when he stole from Buck’s food at
the first meal. As Buck sprang to punish him, the lash of François’s
whip sang through the air, reaching the culprit first; and nothing
remained to Buck but to recover the bone. That was fair of François, he
decided, and the half-breed began his rise in Buck’s estimation.

The other dog made no advances, nor received any; also, he did not
attempt to steal from the newcomers. He was a gloomy, morose fellow,
and he showed Curly plainly that all he desired was to be left alone,
and further, that there would be trouble if he were not left alone.
“Dave” he was called, and he ate and slept, or yawned between times,
and took interest in nothing, not even when the _Narwhal_ crossed Queen
Charlotte Sound and rolled and pitched and bucked like a thing
possessed. When Buck and Curly grew excited, half wild with fear, he
raised his head as though annoyed, favored them with an incurious
glance, yawned, and went to sleep again.

Day and night the ship throbbed to the tireless pulse of the propeller,
and though one day was very like another, it was apparent to Buck that
the weather was steadily growing colder. At last, one morning, the
propeller was quiet, and the _Narwhal_ was pervaded with an atmosphere
of excitement. He felt it, as did the other dogs, and knew that a
change was at hand. François leashed them and brought them on deck. At
the first step upon the cold surface, Buck’s feet sank into a white
mushy something very like mud. He sprang back with a snort. More of
this white stuff was falling through the air. He shook himself, but
more of it fell upon him. He sniffed it curiously, then licked some up
on his tongue. It bit like fire, and the next instant was gone. This
puzzled him. He tried it again, with the same result. The onlookers
laughed uproariously, and he felt ashamed, he knew not why, for it was
his first snow.
`},{fileName:`tableOfContents_TheCallOfWild.txt`,contents:`IntoThePrimitive.txt
TheLawOfClubandFang.txt
TheDominantPrimordialBeast.txt
WhoHasWonToMastership.txt
TheToilOfTraceandTrail.txt
FortheLoveOfAMan.txt
TheSoundingOfTheCall.txt
`},{fileName:`the_call_of_the_wild.txt`,contents:`﻿The Project Gutenberg eBook of The call of the wild\r
    \r
This ebook is for the use of anyone anywhere in the United States and\r
most other parts of the world at no cost and with almost no restrictions\r
whatsoever. You may copy it, give it away or re-use it under the terms\r
of the Project Gutenberg License included with this ebook or online\r
at www.gutenberg.org. If you are not located in the United States,\r
you will have to check the laws of the country where you are located\r
before using this eBook.\r
\r
Title: The call of the wild\r
\r
Author: Jack London\r
\r
Release date: July 2, 2008 [eBook #215]\r
                Most recently updated: August 4, 2024\r
\r
Language: English\r
\r
Credits: Ryan, Kirstin, Linda and Rick Trapp and David Widger\r
\r
\r
*** START OF THE PROJECT GUTENBERG EBOOK THE CALL OF THE WILD ***\r
\r
\r
\r
\r
cover \r
\r
\r
\r
\r
The Call of the Wild\r
\r
by Jack London\r
\r
\r
\r
\r
Contents\r
\r
 Chapter I. Into the Primitive\r
 Chapter II. The Law of Club and Fang\r
 Chapter III. The Dominant Primordial Beast\r
 Chapter IV. Who Has Won to Mastership\r
 Chapter V. The Toil of Trace and Trail\r
 Chapter VI. For the Love of a Man\r
 Chapter VII. The Sounding of the Call\r
\r
\r
\r
\r
Chapter I. Into the Primitive\r
\r
\r
“Old longings nomadic leap,\r
Chafing at custom’s chain;\r
Again from its brumal sleep\r
Wakens the ferine strain.”\r
\r
\r
Buck did not read the newspapers, or he would have known that trouble\r
was brewing, not alone for himself, but for every tide-water dog,\r
strong of muscle and with warm, long hair, from Puget Sound to San\r
Diego. Because men, groping in the Arctic darkness, had found a yellow\r
metal, and because steamship and transportation companies were booming\r
the find, thousands of men were rushing into the Northland. These men\r
wanted dogs, and the dogs they wanted were heavy dogs, with strong\r
muscles by which to toil, and furry coats to protect them from the\r
frost.\r
\r
Buck lived at a big house in the sun-kissed Santa Clara Valley. Judge\r
Miller’s place, it was called. It stood back from the road, half hidden\r
among the trees, through which glimpses could be caught of the wide\r
cool veranda that ran around its four sides. The house was approached\r
by gravelled driveways which wound about through wide-spreading lawns\r
and under the interlacing boughs of tall poplars. At the rear things\r
were on even a more spacious scale than at the front. There were great\r
stables, where a dozen grooms and boys held forth, rows of vine-clad\r
servants’ cottages, an endless and orderly array of outhouses, long\r
grape arbors, green pastures, orchards, and berry patches. Then there\r
was the pumping plant for the artesian well, and the big cement tank\r
where Judge Miller’s boys took their morning plunge and kept cool in\r
the hot afternoon.\r
\r
And over this great demesne Buck ruled. Here he was born, and here he\r
had lived the four years of his life. It was true, there were other\r
dogs. There could not but be other dogs on so vast a place, but they\r
did not count. They came and went, resided in the populous kennels, or\r
lived obscurely in the recesses of the house after the fashion of\r
Toots, the Japanese pug, or Ysabel, the Mexican hairless,—strange\r
creatures that rarely put nose out of doors or set foot to ground. On\r
the other hand, there were the fox terriers, a score of them at least,\r
who yelped fearful promises at Toots and Ysabel looking out of the\r
windows at them and protected by a legion of housemaids armed with\r
brooms and mops.\r
\r
But Buck was neither house-dog nor kennel-dog. The whole realm was his.\r
He plunged into the swimming tank or went hunting with the Judge’s\r
sons; he escorted Mollie and Alice, the Judge’s daughters, on long\r
twilight or early morning rambles; on wintry nights he lay at the\r
Judge’s feet before the roaring library fire; he carried the Judge’s\r
grandsons on his back, or rolled them in the grass, and guarded their\r
footsteps through wild adventures down to the fountain in the stable\r
yard, and even beyond, where the paddocks were, and the berry patches.\r
Among the terriers he stalked imperiously, and Toots and Ysabel he\r
utterly ignored, for he was king,—king over all creeping, crawling,\r
flying things of Judge Miller’s place, humans included.\r
\r
His father, Elmo, a huge St. Bernard, had been the Judge’s inseparable\r
companion, and Buck bid fair to follow in the way of his father. He was\r
not so large,—he weighed only one hundred and forty pounds,—for his\r
mother, Shep, had been a Scotch shepherd dog. Nevertheless, one hundred\r
and forty pounds, to which was added the dignity that comes of good\r
living and universal respect, enabled him to carry himself in right\r
royal fashion. During the four years since his puppyhood he had lived\r
the life of a sated aristocrat; he had a fine pride in himself, was\r
even a trifle egotistical, as country gentlemen sometimes become\r
because of their insular situation. But he had saved himself by not\r
becoming a mere pampered house-dog. Hunting and kindred outdoor\r
delights had kept down the fat and hardened his muscles; and to him, as\r
to the cold-tubbing races, the love of water had been a tonic and a\r
health preserver.\r
\r
And this was the manner of dog Buck was in the fall of 1897, when the\r
Klondike strike dragged men from all the world into the frozen North.\r
But Buck did not read the newspapers, and he did not know that Manuel,\r
one of the gardener’s helpers, was an undesirable acquaintance. Manuel\r
had one besetting sin. He loved to play Chinese lottery. Also, in his\r
gambling, he had one besetting weakness—faith in a system; and this\r
made his damnation certain. For to play a system requires money, while\r
the wages of a gardener’s helper do not lap over the needs of a wife\r
and numerous progeny.\r
\r
The Judge was at a meeting of the Raisin Growers’ Association, and the\r
boys were busy organizing an athletic club, on the memorable night of\r
Manuel’s treachery. No one saw him and Buck go off through the orchard\r
on what Buck imagined was merely a stroll. And with the exception of a\r
solitary man, no one saw them arrive at the little flag station known\r
as College Park. This man talked with Manuel, and money chinked between\r
them.\r
\r
“You might wrap up the goods before you deliver ’m,” the stranger said\r
gruffly, and Manuel doubled a piece of stout rope around Buck’s neck\r
under the collar.\r
\r
“Twist it, an’ you’ll choke ’m plentee,” said Manuel, and the stranger\r
grunted a ready affirmative.\r
\r
Buck had accepted the rope with quiet dignity. To be sure, it was an\r
unwonted performance: but he had learned to trust in men he knew, and\r
to give them credit for a wisdom that outreached his own. But when the\r
ends of the rope were placed in the stranger’s hands, he growled\r
menacingly. He had merely intimated his displeasure, in his pride\r
believing that to intimate was to command. But to his surprise the rope\r
tightened around his neck, shutting off his breath. In quick rage he\r
sprang at the man, who met him halfway, grappled him close by the\r
throat, and with a deft twist threw him over on his back. Then the rope\r
tightened mercilessly, while Buck struggled in a fury, his tongue\r
lolling out of his mouth and his great chest panting futilely. Never in\r
all his life had he been so vilely treated, and never in all his life\r
had he been so angry. But his strength ebbed, his eyes glazed, and he\r
knew nothing when the train was flagged and the two men threw him into\r
the baggage car.\r
\r
The next he knew, he was dimly aware that his tongue was hurting and\r
that he was being jolted along in some kind of a conveyance. The hoarse\r
shriek of a locomotive whistling a crossing told him where he was. He\r
had travelled too often with the Judge not to know the sensation of\r
riding in a baggage car. He opened his eyes, and into them came the\r
unbridled anger of a kidnapped king. The man sprang for his throat, but\r
Buck was too quick for him. His jaws closed on the hand, nor did they\r
relax till his senses were choked out of him once more.\r
\r
“Yep, has fits,” the man said, hiding his mangled hand from the\r
baggageman, who had been attracted by the sounds of struggle. “I’m\r
takin’ ’m up for the boss to ’Frisco. A crack dog-doctor there thinks\r
that he can cure ’m.”\r
\r
Concerning that night’s ride, the man spoke most eloquently for\r
himself, in a little shed back of a saloon on the San Francisco water\r
front.\r
\r
“All I get is fifty for it,” he grumbled; “an’ I wouldn’t do it over\r
for a thousand, cold cash.”\r
\r
His hand was wrapped in a bloody handkerchief, and the right trouser\r
leg was ripped from knee to ankle.\r
\r
“How much did the other mug get?” the saloon-keeper demanded.\r
\r
“A hundred,” was the reply. “Wouldn’t take a sou less, so help me.”\r
\r
“That makes a hundred and fifty,” the saloon-keeper calculated; “and\r
he’s worth it, or I’m a squarehead.”\r
\r
The kidnapper undid the bloody wrappings and looked at his lacerated\r
hand. “If I don’t get the hydrophoby—”\r
\r
“It’ll be because you was born to hang,” laughed the saloon-keeper.\r
“Here, lend me a hand before you pull your freight,” he added.\r
\r
Dazed, suffering intolerable pain from throat and tongue, with the life\r
half throttled out of him, Buck attempted to face his tormentors. But\r
he was thrown down and choked repeatedly, till they succeeded in filing\r
the heavy brass collar from off his neck. Then the rope was removed,\r
and he was flung into a cagelike crate.\r
\r
There he lay for the remainder of the weary night, nursing his wrath\r
and wounded pride. He could not understand what it all meant. What did\r
they want with him, these strange men? Why were they keeping him pent\r
up in this narrow crate? He did not know why, but he felt oppressed by\r
the vague sense of impending calamity. Several times during the night\r
he sprang to his feet when the shed door rattled open, expecting to see\r
the Judge, or the boys at least. But each time it was the bulging face\r
of the saloon-keeper that peered in at him by the sickly light of a\r
tallow candle. And each time the joyful bark that trembled in Buck’s\r
throat was twisted into a savage growl.\r
\r
But the saloon-keeper let him alone, and in the morning four men\r
entered and picked up the crate. More tormentors, Buck decided, for\r
they were evil-looking creatures, ragged and unkempt; and he stormed\r
and raged at them through the bars. They only laughed and poked sticks\r
at him, which he promptly assailed with his teeth till he realized that\r
that was what they wanted. Whereupon he lay down sullenly and allowed\r
the crate to be lifted into a wagon. Then he, and the crate in which he\r
was imprisoned, began a passage through many hands. Clerks in the\r
express office took charge of him; he was carted about in another\r
wagon; a truck carried him, with an assortment of boxes and parcels,\r
upon a ferry steamer; he was trucked off the steamer into a great\r
railway depot, and finally he was deposited in an express car.\r
\r
For two days and nights this express car was dragged along at the tail\r
of shrieking locomotives; and for two days and nights Buck neither ate\r
nor drank. In his anger he had met the first advances of the express\r
messengers with growls, and they had retaliated by teasing him. When he\r
flung himself against the bars, quivering and frothing, they laughed at\r
him and taunted him. They growled and barked like detestable dogs,\r
mewed, and flapped their arms and crowed. It was all very silly, he\r
knew; but therefore the more outrage to his dignity, and his anger\r
waxed and waxed. He did not mind the hunger so much, but the lack of\r
water caused him severe suffering and fanned his wrath to fever-pitch.\r
For that matter, high-strung and finely sensitive, the ill treatment\r
had flung him into a fever, which was fed by the inflammation of his\r
parched and swollen throat and tongue.\r
\r
He was glad for one thing: the rope was off his neck. That had given\r
them an unfair advantage; but now that it was off, he would show them.\r
They would never get another rope around his neck. Upon that he was\r
resolved. For two days and nights he neither ate nor drank, and during\r
those two days and nights of torment, he accumulated a fund of wrath\r
that boded ill for whoever first fell foul of him. His eyes turned\r
blood-shot, and he was metamorphosed into a raging fiend. So changed\r
was he that the Judge himself would not have recognized him; and the\r
express messengers breathed with relief when they bundled him off the\r
train at Seattle.\r
\r
Four men gingerly carried the crate from the wagon into a small,\r
high-walled back yard. A stout man, with a red sweater that sagged\r
generously at the neck, came out and signed the book for the driver.\r
That was the man, Buck divined, the next tormentor, and he hurled\r
himself savagely against the bars. The man smiled grimly, and brought a\r
hatchet and a club.\r
\r
“You ain’t going to take him out now?” the driver asked.\r
\r
“Sure,” the man replied, driving the hatchet into the crate for a pry.\r
\r
There was an instantaneous scattering of the four men who had carried\r
it in, and from safe perches on top the wall they prepared to watch the\r
performance.\r
\r
Buck rushed at the splintering wood, sinking his teeth into it, surging\r
and wrestling with it. Wherever the hatchet fell on the outside, he was\r
there on the inside, snarling and growling, as furiously anxious to get\r
out as the man in the red sweater was calmly intent on getting him out.\r
\r
“Now, you red-eyed devil,” he said, when he had made an opening\r
sufficient for the passage of Buck’s body. At the same time he dropped\r
the hatchet and shifted the club to his right hand.\r
\r
And Buck was truly a red-eyed devil, as he drew himself together for\r
the spring, hair bristling, mouth foaming, a mad glitter in his\r
blood-shot eyes. Straight at the man he launched his one hundred and\r
forty pounds of fury, surcharged with the pent passion of two days and\r
nights. In mid air, just as his jaws were about to close on the man, he\r
received a shock that checked his body and brought his teeth together\r
with an agonizing clip. He whirled over, fetching the ground on his\r
back and side. He had never been struck by a club in his life, and did\r
not understand. With a snarl that was part bark and more scream he was\r
again on his feet and launched into the air. And again the shock came\r
and he was brought crushingly to the ground. This time he was aware\r
that it was the club, but his madness knew no caution. A dozen times he\r
charged, and as often the club broke the charge and smashed him down.\r
\r
After a particularly fierce blow, he crawled to his feet, too dazed to\r
rush. He staggered limply about, the blood flowing from nose and mouth\r
and ears, his beautiful coat sprayed and flecked with bloody slaver.\r
Then the man advanced and deliberately dealt him a frightful blow on\r
the nose. All the pain he had endured was as nothing compared with the\r
exquisite agony of this. With a roar that was almost lionlike in its\r
ferocity, he again hurled himself at the man. But the man, shifting the\r
club from right to left, coolly caught him by the under jaw, at the\r
same time wrenching downward and backward. Buck described a complete\r
circle in the air, and half of another, then crashed to the ground on\r
his head and chest.\r
\r
For the last time he rushed. The man struck the shrewd blow he had\r
purposely withheld for so long, and Buck crumpled up and went down,\r
knocked utterly senseless.\r
\r
“He’s no slouch at dog-breakin’, that’s wot I say,” one of the men on\r
the wall cried enthusiastically.\r
\r
“Druther break cayuses any day, and twice on Sundays,” was the reply of\r
the driver, as he climbed on the wagon and started the horses.\r
\r
Buck’s senses came back to him, but not his strength. He lay where he\r
had fallen, and from there he watched the man in the red sweater.\r
\r
“‘Answers to the name of Buck,’” the man soliloquized, quoting from the\r
saloon-keeper’s letter which had announced the consignment of the crate\r
and contents. “Well, Buck, my boy,” he went on in a genial voice,\r
“we’ve had our little ruction, and the best thing we can do is to let\r
it go at that. You’ve learned your place, and I know mine. Be a good\r
dog and all ’ll go well and the goose hang high. Be a bad dog, and I’ll\r
whale the stuffin’ outa you. Understand?”\r
\r
As he spoke he fearlessly patted the head he had so mercilessly\r
pounded, and though Buck’s hair involuntarily bristled at touch of the\r
hand, he endured it without protest. When the man brought him water he\r
drank eagerly, and later bolted a generous meal of raw meat, chunk by\r
chunk, from the man’s hand.\r
\r
He was beaten (he knew that); but he was not broken. He saw, once for\r
all, that he stood no chance against a man with a club. He had learned\r
the lesson, and in all his after life he never forgot it. That club was\r
a revelation. It was his introduction to the reign of primitive law,\r
and he met the introduction halfway. The facts of life took on a\r
fiercer aspect; and while he faced that aspect uncowed, he faced it\r
with all the latent cunning of his nature aroused. As the days went by,\r
other dogs came, in crates and at the ends of ropes, some docilely, and\r
some raging and roaring as he had come; and, one and all, he watched\r
them pass under the dominion of the man in the red sweater. Again and\r
again, as he looked at each brutal performance, the lesson was driven\r
home to Buck: a man with a club was a lawgiver, a master to be obeyed,\r
though not necessarily conciliated. Of this last Buck was never guilty,\r
though he did see beaten dogs that fawned upon the man, and wagged\r
their tails, and licked his hand. Also he saw one dog, that would\r
neither conciliate nor obey, finally killed in the struggle for\r
mastery.\r
\r
Now and again men came, strangers, who talked excitedly, wheedlingly,\r
and in all kinds of fashions to the man in the red sweater. And at such\r
times that money passed between them the strangers took one or more of\r
the dogs away with them. Buck wondered where they went, for they never\r
came back; but the fear of the future was strong upon him, and he was\r
glad each time when he was not selected.\r
\r
Yet his time came, in the end, in the form of a little weazened man who\r
spat broken English and many strange and uncouth exclamations which\r
Buck could not understand.\r
\r
“Sacredam!” he cried, when his eyes lit upon Buck. “Dat one dam bully\r
dog! Eh? How moch?”\r
\r
“Three hundred, and a present at that,” was the prompt reply of the man\r
in the red sweater. “And seem’ it’s government money, you ain’t got no\r
kick coming, eh, Perrault?”\r
\r
Perrault grinned. Considering that the price of dogs had been boomed\r
skyward by the unwonted demand, it was not an unfair sum for so fine an\r
animal. The Canadian Government would be no loser, nor would its\r
despatches travel the slower. Perrault knew dogs, and when he looked at\r
Buck he knew that he was one in a thousand—“One in ten t’ousand,” he\r
commented mentally.\r
\r
Buck saw money pass between them, and was not surprised when Curly, a\r
good-natured Newfoundland, and he were led away by the little weazened\r
man. That was the last he saw of the man in the red sweater, and as\r
Curly and he looked at receding Seattle from the deck of the _Narwhal_,\r
it was the last he saw of the warm Southland. Curly and he were taken\r
below by Perrault and turned over to a black-faced giant called\r
François. Perrault was a French-Canadian, and swarthy; but François was\r
a French-Canadian half-breed, and twice as swarthy. They were a new\r
kind of men to Buck (of which he was destined to see many more), and\r
while he developed no affection for them, he none the less grew\r
honestly to respect them. He speedily learned that Perrault and\r
François were fair men, calm and impartial in administering justice,\r
and too wise in the way of dogs to be fooled by dogs.\r
\r
In the ’tween-decks of the _Narwhal_, Buck and Curly joined two other\r
dogs. One of them was a big, snow-white fellow from Spitzbergen who had\r
been brought away by a whaling captain, and who had later accompanied a\r
Geological Survey into the Barrens. He was friendly, in a treacherous\r
sort of way, smiling into one’s face the while he meditated some\r
underhand trick, as, for instance, when he stole from Buck’s food at\r
the first meal. As Buck sprang to punish him, the lash of François’s\r
whip sang through the air, reaching the culprit first; and nothing\r
remained to Buck but to recover the bone. That was fair of François, he\r
decided, and the half-breed began his rise in Buck’s estimation.\r
\r
The other dog made no advances, nor received any; also, he did not\r
attempt to steal from the newcomers. He was a gloomy, morose fellow,\r
and he showed Curly plainly that all he desired was to be left alone,\r
and further, that there would be trouble if he were not left alone.\r
“Dave” he was called, and he ate and slept, or yawned between times,\r
and took interest in nothing, not even when the _Narwhal_ crossed Queen\r
Charlotte Sound and rolled and pitched and bucked like a thing\r
possessed. When Buck and Curly grew excited, half wild with fear, he\r
raised his head as though annoyed, favored them with an incurious\r
glance, yawned, and went to sleep again.\r
\r
Day and night the ship throbbed to the tireless pulse of the propeller,\r
and though one day was very like another, it was apparent to Buck that\r
the weather was steadily growing colder. At last, one morning, the\r
propeller was quiet, and the _Narwhal_ was pervaded with an atmosphere\r
of excitement. He felt it, as did the other dogs, and knew that a\r
change was at hand. François leashed them and brought them on deck. At\r
the first step upon the cold surface, Buck’s feet sank into a white\r
mushy something very like mud. He sprang back with a snort. More of\r
this white stuff was falling through the air. He shook himself, but\r
more of it fell upon him. He sniffed it curiously, then licked some up\r
on his tongue. It bit like fire, and the next instant was gone. This\r
puzzled him. He tried it again, with the same result. The onlookers\r
laughed uproariously, and he felt ashamed, he knew not why, for it was\r
his first snow.\r
\r
\r
\r
\r
Chapter II. The Law of Club and Fang\r
\r
\r
Buck’s first day on the Dyea beach was like a nightmare. Every hour was\r
filled with shock and surprise. He had been suddenly jerked from the\r
heart of civilization and flung into the heart of things primordial. No\r
lazy, sun-kissed life was this, with nothing to do but loaf and be\r
bored. Here was neither peace, nor rest, nor a moment’s safety. All was\r
confusion and action, and every moment life and limb were in peril.\r
There was imperative need to be constantly alert; for these dogs and\r
men were not town dogs and men. They were savages, all of them, who\r
knew no law but the law of club and fang.\r
\r
He had never seen dogs fight as these wolfish creatures fought, and his\r
first experience taught him an unforgetable lesson. It is true, it was\r
a vicarious experience, else he would not have lived to profit by it.\r
Curly was the victim. They were camped near the log store, where she,\r
in her friendly way, made advances to a husky dog the size of a\r
full-grown wolf, though not half so large as she. There was no warning,\r
only a leap in like a flash, a metallic clip of teeth, a leap out\r
equally swift, and Curly’s face was ripped open from eye to jaw.\r
\r
It was the wolf manner of fighting, to strike and leap away; but there\r
was more to it than this. Thirty or forty huskies ran to the spot and\r
surrounded the combatants in an intent and silent circle. Buck did not\r
comprehend that silent intentness, nor the eager way with which they\r
were licking their chops. Curly rushed her antagonist, who struck again\r
and leaped aside. He met her next rush with his chest, in a peculiar\r
fashion that tumbled her off her feet. She never regained them. This\r
was what the onlooking huskies had waited for. They closed in upon her,\r
snarling and yelping, and she was buried, screaming with agony, beneath\r
the bristling mass of bodies.\r
\r
So sudden was it, and so unexpected, that Buck was taken aback. He saw\r
Spitz run out his scarlet tongue in a way he had of laughing; and he\r
saw François, swinging an axe, spring into the mess of dogs. Three men\r
with clubs were helping him to scatter them. It did not take long. Two\r
minutes from the time Curly went down, the last of her assailants were\r
clubbed off. But she lay there limp and lifeless in the bloody,\r
trampled snow, almost literally torn to pieces, the swart half-breed\r
standing over her and cursing horribly. The scene often came back to\r
Buck to trouble him in his sleep. So that was the way. No fair play.\r
Once down, that was the end of you. Well, he would see to it that he\r
never went down. Spitz ran out his tongue and laughed again, and from\r
that moment Buck hated him with a bitter and deathless hatred.\r
\r
Before he had recovered from the shock caused by the tragic passing of\r
Curly, he received another shock. François fastened upon him an\r
arrangement of straps and buckles. It was a harness, such as he had\r
seen the grooms put on the horses at home. And as he had seen horses\r
work, so he was set to work, hauling François on a sled to the forest\r
that fringed the valley, and returning with a load of firewood. Though\r
his dignity was sorely hurt by thus being made a draught animal, he was\r
too wise to rebel. He buckled down with a will and did his best, though\r
it was all new and strange. François was stern, demanding instant\r
obedience, and by virtue of his whip receiving instant obedience; while\r
Dave, who was an experienced wheeler, nipped Buck’s hind quarters\r
whenever he was in error. Spitz was the leader, likewise experienced,\r
and while he could not always get at Buck, he growled sharp reproof now\r
and again, or cunningly threw his weight in the traces to jerk Buck\r
into the way he should go. Buck learned easily, and under the combined\r
tuition of his two mates and François made remarkable progress. Ere\r
they returned to camp he knew enough to stop at “ho,” to go ahead at\r
“mush,” to swing wide on the bends, and to keep clear of the wheeler\r
when the loaded sled shot downhill at their heels.\r
\r
“T’ree vair’ good dogs,” François told Perrault. “Dat Buck, heem pool\r
lak hell. I tich heem queek as anyt’ing.”\r
\r
By afternoon, Perrault, who was in a hurry to be on the trail with his\r
despatches, returned with two more dogs. “Billee” and “Joe” he called\r
them, two brothers, and true huskies both. Sons of the one mother\r
though they were, they were as different as day and night. Billee’s one\r
fault was his excessive good nature, while Joe was the very opposite,\r
sour and introspective, with a perpetual snarl and a malignant eye.\r
Buck received them in comradely fashion, Dave ignored them, while Spitz\r
proceeded to thrash first one and then the other. Billee wagged his\r
tail appeasingly, turned to run when he saw that appeasement was of no\r
avail, and cried (still appeasingly) when Spitz’s sharp teeth scored\r
his flank. But no matter how Spitz circled, Joe whirled around on his\r
heels to face him, mane bristling, ears laid back, lips writhing and\r
snarling, jaws clipping together as fast as he could snap, and eyes\r
diabolically gleaming—the incarnation of belligerent fear. So terrible\r
was his appearance that Spitz was forced to forego disciplining him;\r
but to cover his own discomfiture he turned upon the inoffensive and\r
wailing Billee and drove him to the confines of the camp.\r
\r
By evening Perrault secured another dog, an old husky, long and lean\r
and gaunt, with a battle-scarred face and a single eye which flashed a\r
warning of prowess that commanded respect. He was called Sol-leks,\r
which means the Angry One. Like Dave, he asked nothing, gave nothing,\r
expected nothing; and when he marched slowly and deliberately into\r
their midst, even Spitz left him alone. He had one peculiarity which\r
Buck was unlucky enough to discover. He did not like to be approached\r
on his blind side. Of this offence Buck was unwittingly guilty, and the\r
first knowledge he had of his indiscretion was when Sol-leks whirled\r
upon him and slashed his shoulder to the bone for three inches up and\r
down. Forever after Buck avoided his blind side, and to the last of\r
their comradeship had no more trouble. His only apparent ambition, like\r
Dave’s, was to be left alone; though, as Buck was afterward to learn,\r
each of them possessed one other and even more vital ambition.\r
\r
That night Buck faced the great problem of sleeping. The tent,\r
illumined by a candle, glowed warmly in the midst of the white plain;\r
and when he, as a matter of course, entered it, both Perrault and\r
François bombarded him with curses and cooking utensils, till he\r
recovered from his consternation and fled ignominiously into the outer\r
cold. A chill wind was blowing that nipped him sharply and bit with\r
especial venom into his wounded shoulder. He lay down on the snow and\r
attempted to sleep, but the frost soon drove him shivering to his feet.\r
Miserable and disconsolate, he wandered about among the many tents,\r
only to find that one place was as cold as another. Here and there\r
savage dogs rushed upon him, but he bristled his neck-hair and snarled\r
(for he was learning fast), and they let him go his way unmolested.\r
\r
Finally an idea came to him. He would return and see how his own\r
team-mates were making out. To his astonishment, they had disappeared.\r
Again he wandered about through the great camp, looking for them, and\r
again he returned. Were they in the tent? No, that could not be, else\r
he would not have been driven out. Then where could they possibly be?\r
With drooping tail and shivering body, very forlorn indeed, he\r
aimlessly circled the tent. Suddenly the snow gave way beneath his fore\r
legs and he sank down. Something wriggled under his feet. He sprang\r
back, bristling and snarling, fearful of the unseen and unknown. But a\r
friendly little yelp reassured him, and he went back to investigate. A\r
whiff of warm air ascended to his nostrils, and there, curled up under\r
the snow in a snug ball, lay Billee. He whined placatingly, squirmed\r
and wriggled to show his good will and intentions, and even ventured,\r
as a bribe for peace, to lick Buck’s face with his warm wet tongue.\r
\r
Another lesson. So that was the way they did it, eh? Buck confidently\r
selected a spot, and with much fuss and waste effort proceeded to dig a\r
hole for himself. In a trice the heat from his body filled the confined\r
space and he was asleep. The day had been long and arduous, and he\r
slept soundly and comfortably, though he growled and barked and\r
wrestled with bad dreams.\r
\r
Nor did he open his eyes till roused by the noises of the waking camp.\r
At first he did not know where he was. It had snowed during the night\r
and he was completely buried. The snow walls pressed him on every side,\r
and a great surge of fear swept through him—the fear of the wild thing\r
for the trap. It was a token that he was harking back through his own\r
life to the lives of his forebears; for he was a civilized dog, an\r
unduly civilized dog, and of his own experience knew no trap and so\r
could not of himself fear it. The muscles of his whole body contracted\r
spasmodically and instinctively, the hair on his neck and shoulders\r
stood on end, and with a ferocious snarl he bounded straight up into\r
the blinding day, the snow flying about him in a flashing cloud. Ere he\r
landed on his feet, he saw the white camp spread out before him and\r
knew where he was and remembered all that had passed from the time he\r
went for a stroll with Manuel to the hole he had dug for himself the\r
night before.\r
\r
A shout from François hailed his appearance. “Wot I say?” the\r
dog-driver cried to Perrault. “Dat Buck for sure learn queek as\r
anyt’ing.”\r
\r
Perrault nodded gravely. As courier for the Canadian Government,\r
bearing important despatches, he was anxious to secure the best dogs,\r
and he was particularly gladdened by the possession of Buck.\r
\r
Three more huskies were added to the team inside an hour, making a\r
total of nine, and before another quarter of an hour had passed they\r
were in harness and swinging up the trail toward the Dyea Cañon. Buck\r
was glad to be gone, and though the work was hard he found he did not\r
particularly despise it. He was surprised at the eagerness which\r
animated the whole team and which was communicated to him; but still\r
more surprising was the change wrought in Dave and Sol-leks. They were\r
new dogs, utterly transformed by the harness. All passiveness and\r
unconcern had dropped from them. They were alert and active, anxious\r
that the work should go well, and fiercely irritable with whatever, by\r
delay or confusion, retarded that work. The toil of the traces seemed\r
the supreme expression of their being, and all that they lived for and\r
the only thing in which they took delight.\r
\r
Dave was wheeler or sled dog, pulling in front of him was Buck, then\r
came Sol-leks; the rest of the team was strung out ahead, single file,\r
to the leader, which position was filled by Spitz.\r
\r
Buck had been purposely placed between Dave and Sol-leks so that he\r
might receive instruction. Apt scholar that he was, they were equally\r
apt teachers, never allowing him to linger long in error, and enforcing\r
their teaching with their sharp teeth. Dave was fair and very wise. He\r
never nipped Buck without cause, and he never failed to nip him when he\r
stood in need of it. As François’s whip backed him up, Buck found it to\r
be cheaper to mend his ways than to retaliate. Once, during a brief\r
halt, when he got tangled in the traces and delayed the start, both\r
Dave and Sol-leks flew at him and administered a sound trouncing. The\r
resulting tangle was even worse, but Buck took good care to keep the\r
traces clear thereafter; and ere the day was done, so well had he\r
mastered his work, his mates about ceased nagging him. François’s whip\r
snapped less frequently, and Perrault even honored Buck by lifting up\r
his feet and carefully examining them.\r
\r
It was a hard day’s run, up the Cañon, through Sheep Camp, past the\r
Scales and the timber line, across glaciers and snowdrifts hundreds of\r
feet deep, and over the great Chilcoot Divide, which stands between the\r
salt water and the fresh and guards forbiddingly the sad and lonely\r
North. They made good time down the chain of lakes which fills the\r
craters of extinct volcanoes, and late that night pulled into the huge\r
camp at the head of Lake Bennett, where thousands of goldseekers were\r
building boats against the break-up of the ice in the spring. Buck made\r
his hole in the snow and slept the sleep of the exhausted just, but all\r
too early was routed out in the cold darkness and harnessed with his\r
mates to the sled.\r
\r
That day they made forty miles, the trail being packed; but the next\r
day, and for many days to follow, they broke their own trail, worked\r
harder, and made poorer time. As a rule, Perrault travelled ahead of\r
the team, packing the snow with webbed shoes to make it easier for\r
them. François, guiding the sled at the gee-pole, sometimes exchanged\r
places with him, but not often. Perrault was in a hurry, and he prided\r
himself on his knowledge of ice, which knowledge was indispensable, for\r
the fall ice was very thin, and where there was swift water, there was\r
no ice at all.\r
\r
Day after day, for days unending, Buck toiled in the traces. Always,\r
they broke camp in the dark, and the first gray of dawn found them\r
hitting the trail with fresh miles reeled off behind them. And always\r
they pitched camp after dark, eating their bit of fish, and crawling to\r
sleep into the snow. Buck was ravenous. The pound and a half of\r
sun-dried salmon, which was his ration for each day, seemed to go\r
nowhere. He never had enough, and suffered from perpetual hunger pangs.\r
Yet the other dogs, because they weighed less and were born to the\r
life, received a pound only of the fish and managed to keep in good\r
condition.\r
\r
He swiftly lost the fastidiousness which had characterized his old\r
life. A dainty eater, he found that his mates, finishing first, robbed\r
him of his unfinished ration. There was no defending it. While he was\r
fighting off two or three, it was disappearing down the throats of the\r
others. To remedy this, he ate as fast as they; and, so greatly did\r
hunger compel him, he was not above taking what did not belong to him.\r
He watched and learned. When he saw Pike, one of the new dogs, a clever\r
malingerer and thief, slyly steal a slice of bacon when Perrault’s back\r
was turned, he duplicated the performance the following day, getting\r
away with the whole chunk. A great uproar was raised, but he was\r
unsuspected; while Dub, an awkward blunderer who was always getting\r
caught, was punished for Buck’s misdeed.\r
\r
This first theft marked Buck as fit to survive in the hostile Northland\r
environment. It marked his adaptability, his capacity to adjust himself\r
to changing conditions, the lack of which would have meant swift and\r
terrible death. It marked, further, the decay or going to pieces of his\r
moral nature, a vain thing and a handicap in the ruthless struggle for\r
existence. It was all well enough in the Southland, under the law of\r
love and fellowship, to respect private property and personal feelings;\r
but in the Northland, under the law of club and fang, whoso took such\r
things into account was a fool, and in so far as he observed them he\r
would fail to prosper.\r
\r
Not that Buck reasoned it out. He was fit, that was all, and\r
unconsciously he accommodated himself to the new mode of life. All his\r
days, no matter what the odds, he had never run from a fight. But the\r
club of the man in the red sweater had beaten into him a more\r
fundamental and primitive code. Civilized, he could have died for a\r
moral consideration, say the defence of Judge Miller’s riding-whip; but\r
the completeness of his decivilization was now evidenced by his ability\r
to flee from the defence of a moral consideration and so save his hide.\r
He did not steal for joy of it, but because of the clamor of his\r
stomach. He did not rob openly, but stole secretly and cunningly, out\r
of respect for club and fang. In short, the things he did were done\r
because it was easier to do them than not to do them.\r
\r
His development (or retrogression) was rapid. His muscles became hard\r
as iron, and he grew callous to all ordinary pain. He achieved an\r
internal as well as external economy. He could eat anything, no matter\r
how loathsome or indigestible; and, once eaten, the juices of his\r
stomach extracted the last least particle of nutriment; and his blood\r
carried it to the farthest reaches of his body, building it into the\r
toughest and stoutest of tissues. Sight and scent became remarkably\r
keen, while his hearing developed such acuteness that in his sleep he\r
heard the faintest sound and knew whether it heralded peace or peril.\r
He learned to bite the ice out with his teeth when it collected between\r
his toes; and when he was thirsty and there was a thick scum of ice\r
over the water hole, he would break it by rearing and striking it with\r
stiff fore legs. His most conspicuous trait was an ability to scent the\r
wind and forecast it a night in advance. No matter how breathless the\r
air when he dug his nest by tree or bank, the wind that later blew\r
inevitably found him to leeward, sheltered and snug.\r
\r
And not only did he learn by experience, but instincts long dead became\r
alive again. The domesticated generations fell from him. In vague ways\r
he remembered back to the youth of the breed, to the time the wild dogs\r
ranged in packs through the primeval forest and killed their meat as\r
they ran it down. It was no task for him to learn to fight with cut and\r
slash and the quick wolf snap. In this manner had fought forgotten\r
ancestors. They quickened the old life within him, and the old tricks\r
which they had stamped into the heredity of the breed were his tricks.\r
They came to him without effort or discovery, as though they had been\r
his always. And when, on the still cold nights, he pointed his nose at\r
a star and howled long and wolflike, it was his ancestors, dead and\r
dust, pointing nose at star and howling down through the centuries and\r
through him. And his cadences were their cadences, the cadences which\r
voiced their woe and what to them was the meaning of the stiffness, and\r
the cold, and dark.\r
\r
Thus, as token of what a puppet thing life is, the ancient song surged\r
through him and he came into his own again; and he came because men had\r
found a yellow metal in the North, and because Manuel was a gardener’s\r
helper whose wages did not lap over the needs of his wife and divers\r
small copies of himself.\r
\r
\r
\r
\r
Chapter III. The Dominant Primordial Beast\r
\r
\r
The dominant primordial beast was strong in Buck, and under the fierce\r
conditions of trail life it grew and grew. Yet it was a secret growth.\r
His newborn cunning gave him poise and control. He was too busy\r
adjusting himself to the new life to feel at ease, and not only did he\r
not pick fights, but he avoided them whenever possible. A certain\r
deliberateness characterized his attitude. He was not prone to rashness\r
and precipitate action; and in the bitter hatred between him and Spitz\r
he betrayed no impatience, shunned all offensive acts.\r
\r
On the other hand, possibly because he divined in Buck a dangerous\r
rival, Spitz never lost an opportunity of showing his teeth. He even\r
went out of his way to bully Buck, striving constantly to start the\r
fight which could end only in the death of one or the other. Early in\r
the trip this might have taken place had it not been for an unwonted\r
accident. At the end of this day they made a bleak and miserable camp\r
on the shore of Lake Le Barge. Driving snow, a wind that cut like a\r
white-hot knife, and darkness had forced them to grope for a camping\r
place. They could hardly have fared worse. At their backs rose a\r
perpendicular wall of rock, and Perrault and François were compelled to\r
make their fire and spread their sleeping robes on the ice of the lake\r
itself. The tent they had discarded at Dyea in order to travel light. A\r
few sticks of driftwood furnished them with a fire that thawed down\r
through the ice and left them to eat supper in the dark.\r
\r
Close in under the sheltering rock Buck made his nest. So snug and warm\r
was it, that he was loath to leave it when François distributed the\r
fish which he had first thawed over the fire. But when Buck finished\r
his ration and returned, he found his nest occupied. A warning snarl\r
told him that the trespasser was Spitz. Till now Buck had avoided\r
trouble with his enemy, but this was too much. The beast in him roared.\r
He sprang upon Spitz with a fury which surprised them both, and Spitz\r
particularly, for his whole experience with Buck had gone to teach him\r
that his rival was an unusually timid dog, who managed to hold his own\r
only because of his great weight and size.\r
\r
François was surprised, too, when they shot out in a tangle from the\r
disrupted nest and he divined the cause of the trouble. “A-a-ah!” he\r
cried to Buck. “Gif it to heem, by Gar! Gif it to heem, the dirty\r
t’eef!”\r
\r
Spitz was equally willing. He was crying with sheer rage and eagerness\r
as he circled back and forth for a chance to spring in. Buck was no\r
less eager, and no less cautious, as he likewise circled back and forth\r
for the advantage. But it was then that the unexpected happened, the\r
thing which projected their struggle for supremacy far into the future,\r
past many a weary mile of trail and toil.\r
\r
An oath from Perrault, the resounding impact of a club upon a bony\r
frame, and a shrill yelp of pain, heralded the breaking forth of\r
pandemonium. The camp was suddenly discovered to be alive with skulking\r
furry forms,—starving huskies, four or five score of them, who had\r
scented the camp from some Indian village. They had crept in while Buck\r
and Spitz were fighting, and when the two men sprang among them with\r
stout clubs they showed their teeth and fought back. They were crazed\r
by the smell of the food. Perrault found one with head buried in the\r
grub-box. His club landed heavily on the gaunt ribs, and the grub-box\r
was capsized on the ground. On the instant a score of the famished\r
brutes were scrambling for the bread and bacon. The clubs fell upon\r
them unheeded. They yelped and howled under the rain of blows, but\r
struggled none the less madly till the last crumb had been devoured.\r
\r
In the meantime the astonished team-dogs had burst out of their nests\r
only to be set upon by the fierce invaders. Never had Buck seen such\r
dogs. It seemed as though their bones would burst through their skins.\r
They were mere skeletons, draped loosely in draggled hides, with\r
blazing eyes and slavered fangs. But the hunger-madness made them\r
terrifying, irresistible. There was no opposing them. The team-dogs\r
were swept back against the cliff at the first onset. Buck was beset by\r
three huskies, and in a trice his head and shoulders were ripped and\r
slashed. The din was frightful. Billee was crying as usual. Dave and\r
Sol-leks, dripping blood from a score of wounds, were fighting bravely\r
side by side. Joe was snapping like a demon. Once, his teeth closed on\r
the fore leg of a husky, and he crunched down through the bone. Pike,\r
the malingerer, leaped upon the crippled animal, breaking its neck with\r
a quick flash of teeth and a jerk, Buck got a frothing adversary by the\r
throat, and was sprayed with blood when his teeth sank through the\r
jugular. The warm taste of it in his mouth goaded him to greater\r
fierceness. He flung himself upon another, and at the same time felt\r
teeth sink into his own throat. It was Spitz, treacherously attacking\r
from the side.\r
\r
Perrault and François, having cleaned out their part of the camp,\r
hurried to save their sled-dogs. The wild wave of famished beasts\r
rolled back before them, and Buck shook himself free. But it was only\r
for a moment. The two men were compelled to run back to save the grub,\r
upon which the huskies returned to the attack on the team. Billee,\r
terrified into bravery, sprang through the savage circle and fled away\r
over the ice. Pike and Dub followed on his heels, with the rest of the\r
team behind. As Buck drew himself together to spring after them, out of\r
the tail of his eye he saw Spitz rush upon him with the evident\r
intention of overthrowing him. Once off his feet and under that mass of\r
huskies, there was no hope for him. But he braced himself to the shock\r
of Spitz’s charge, then joined the flight out on the lake.\r
\r
Later, the nine team-dogs gathered together and sought shelter in the\r
forest. Though unpursued, they were in a sorry plight. There was not\r
one who was not wounded in four or five places, while some were wounded\r
grievously. Dub was badly injured in a hind leg; Dolly, the last husky\r
added to the team at Dyea, had a badly torn throat; Joe had lost an\r
eye; while Billee, the good-natured, with an ear chewed and rent to\r
ribbons, cried and whimpered throughout the night. At daybreak they\r
limped warily back to camp, to find the marauders gone and the two men\r
in bad tempers. Fully half their grub supply was gone. The huskies had\r
chewed through the sled lashings and canvas coverings. In fact,\r
nothing, no matter how remotely eatable, had escaped them. They had\r
eaten a pair of Perrault’s moose-hide moccasins, chunks out of the\r
leather traces, and even two feet of lash from the end of François’s\r
whip. He broke from a mournful contemplation of it to look over his\r
wounded dogs.\r
\r
“Ah, my frien’s,” he said softly, “mebbe it mek you mad dog, dose many\r
bites. Mebbe all mad dog, sacredam! Wot you t’ink, eh, Perrault?”\r
\r
The courier shook his head dubiously. With four hundred miles of trail\r
still between him and Dawson, he could ill afford to have madness break\r
out among his dogs. Two hours of cursing and exertion got the harnesses\r
into shape, and the wound-stiffened team was under way, struggling\r
painfully over the hardest part of the trail they had yet encountered,\r
and for that matter, the hardest between them and Dawson.\r
\r
The Thirty Mile River was wide open. Its wild water defied the frost,\r
and it was in the eddies only and in the quiet places that the ice held\r
at all. Six days of exhausting toil were required to cover those thirty\r
terrible miles. And terrible they were, for every foot of them was\r
accomplished at the risk of life to dog and man. A dozen times,\r
Perrault, nosing the way broke through the ice bridges, being saved by\r
the long pole he carried, which he so held that it fell each time\r
across the hole made by his body. But a cold snap was on, the\r
thermometer registering fifty below zero, and each time he broke\r
through he was compelled for very life to build a fire and dry his\r
garments.\r
\r
Nothing daunted him. It was because nothing daunted him that he had\r
been chosen for government courier. He took all manner of risks,\r
resolutely thrusting his little weazened face into the frost and\r
struggling on from dim dawn to dark. He skirted the frowning shores on\r
rim ice that bent and crackled under foot and upon which they dared not\r
halt. Once, the sled broke through, with Dave and Buck, and they were\r
half-frozen and all but drowned by the time they were dragged out. The\r
usual fire was necessary to save them. They were coated solidly with\r
ice, and the two men kept them on the run around the fire, sweating and\r
thawing, so close that they were singed by the flames.\r
\r
At another time Spitz went through, dragging the whole team after him\r
up to Buck, who strained backward with all his strength, his fore paws\r
on the slippery edge and the ice quivering and snapping all around. But\r
behind him was Dave, likewise straining backward, and behind the sled\r
was François, pulling till his tendons cracked.\r
\r
Again, the rim ice broke away before and behind, and there was no\r
escape except up the cliff. Perrault scaled it by a miracle, while\r
François prayed for just that miracle; and with every thong and sled\r
lashing and the last bit of harness rove into a long rope, the dogs\r
were hoisted, one by one, to the cliff crest. François came up last,\r
after the sled and load. Then came the search for a place to descend,\r
which descent was ultimately made by the aid of the rope, and night\r
found them back on the river with a quarter of a mile to the day’s\r
credit.\r
\r
By the time they made the Hootalinqua and good ice, Buck was played\r
out. The rest of the dogs were in like condition; but Perrault, to make\r
up lost time, pushed them late and early. The first day they covered\r
thirty-five miles to the Big Salmon; the next day thirty-five more to\r
the Little Salmon; the third day forty miles, which brought them well\r
up toward the Five Fingers.\r
\r
Buck’s feet were not so compact and hard as the feet of the huskies.\r
His had softened during the many generations since the day his last\r
wild ancestor was tamed by a cave-dweller or river man. All day long he\r
limped in agony, and camp once made, lay down like a dead dog. Hungry\r
as he was, he would not move to receive his ration of fish, which\r
François had to bring to him. Also, the dog-driver rubbed Buck’s feet\r
for half an hour each night after supper, and sacrificed the tops of\r
his own moccasins to make four moccasins for Buck. This was a great\r
relief, and Buck caused even the weazened face of Perrault to twist\r
itself into a grin one morning, when François forgot the moccasins and\r
Buck lay on his back, his four feet waving appealingly in the air, and\r
refused to budge without them. Later his feet grew hard to the trail,\r
and the worn-out foot-gear was thrown away.\r
\r
At the Pelly one morning, as they were harnessing up, Dolly, who had\r
never been conspicuous for anything, went suddenly mad. She announced\r
her condition by a long, heartbreaking wolf howl that sent every dog\r
bristling with fear, then sprang straight for Buck. He had never seen a\r
dog go mad, nor did he have any reason to fear madness; yet he knew\r
that here was horror, and fled away from it in a panic. Straight away\r
he raced, with Dolly, panting and frothing, one leap behind; nor could\r
she gain on him, so great was his terror, nor could he leave her, so\r
great was her madness. He plunged through the wooded breast of the\r
island, flew down to the lower end, crossed a back channel filled with\r
rough ice to another island, gained a third island, curved back to the\r
main river, and in desperation started to cross it. And all the time,\r
though he did not look, he could hear her snarling just one leap\r
behind. François called to him a quarter of a mile away and he doubled\r
back, still one leap ahead, gasping painfully for air and putting all\r
his faith in that François would save him. The dog-driver held the axe\r
poised in his hand, and as Buck shot past him the axe crashed down upon\r
mad Dolly’s head.\r
\r
Buck staggered over against the sled, exhausted, sobbing for breath,\r
helpless. This was Spitz’s opportunity. He sprang upon Buck, and twice\r
his teeth sank into his unresisting foe and ripped and tore the flesh\r
to the bone. Then François’s lash descended, and Buck had the\r
satisfaction of watching Spitz receive the worst whipping as yet\r
administered to any of the teams.\r
\r
“One devil, dat Spitz,” remarked Perrault. “Some dam day heem keel dat\r
Buck.”\r
\r
“Dat Buck two devils,” was François’s rejoinder. “All de tam I watch\r
dat Buck I know for sure. Lissen: some dam fine day heem get mad lak\r
hell an’ den heem chew dat Spitz all up an’ spit heem out on de snow.\r
Sure. I know.”\r
\r
From then on it was war between them. Spitz, as lead-dog and\r
acknowledged master of the team, felt his supremacy threatened by this\r
strange Southland dog. And strange Buck was to him, for of the many\r
Southland dogs he had known, not one had shown up worthily in camp and\r
on trail. They were all too soft, dying under the toil, the frost, and\r
starvation. Buck was the exception. He alone endured and prospered,\r
matching the husky in strength, savagery, and cunning. Then he was a\r
masterful dog, and what made him dangerous was the fact that the club\r
of the man in the red sweater had knocked all blind pluck and rashness\r
out of his desire for mastery. He was preeminently cunning, and could\r
bide his time with a patience that was nothing less than primitive.\r
\r
It was inevitable that the clash for leadership should come. Buck\r
wanted it. He wanted it because it was his nature, because he had been\r
gripped tight by that nameless, incomprehensible pride of the trail and\r
trace—that pride which holds dogs in the toil to the last gasp, which\r
lures them to die joyfully in the harness, and breaks their hearts if\r
they are cut out of the harness. This was the pride of Dave as\r
wheel-dog, of Sol-leks as he pulled with all his strength; the pride\r
that laid hold of them at break of camp, transforming them from sour\r
and sullen brutes into straining, eager, ambitious creatures; the pride\r
that spurred them on all day and dropped them at pitch of camp at\r
night, letting them fall back into gloomy unrest and uncontent. This\r
was the pride that bore up Spitz and made him thrash the sled-dogs who\r
blundered and shirked in the traces or hid away at harness-up time in\r
the morning. Likewise it was this pride that made him fear Buck as a\r
possible lead-dog. And this was Buck’s pride, too.\r
\r
He openly threatened the other’s leadership. He came between him and\r
the shirks he should have punished. And he did it deliberately. One\r
night there was a heavy snowfall, and in the morning Pike, the\r
malingerer, did not appear. He was securely hidden in his nest under a\r
foot of snow. François called him and sought him in vain. Spitz was\r
wild with wrath. He raged through the camp, smelling and digging in\r
every likely place, snarling so frightfully that Pike heard and\r
shivered in his hiding-place.\r
\r
But when he was at last unearthed, and Spitz flew at him to punish him,\r
Buck flew, with equal rage, in between. So unexpected was it, and so\r
shrewdly managed, that Spitz was hurled backward and off his feet.\r
Pike, who had been trembling abjectly, took heart at this open mutiny,\r
and sprang upon his overthrown leader. Buck, to whom fair play was a\r
forgotten code, likewise sprang upon Spitz. But François, chuckling at\r
the incident while unswerving in the administration of justice, brought\r
his lash down upon Buck with all his might. This failed to drive Buck\r
from his prostrate rival, and the butt of the whip was brought into\r
play. Half-stunned by the blow, Buck was knocked backward and the lash\r
laid upon him again and again, while Spitz soundly punished the many\r
times offending Pike.\r
\r
In the days that followed, as Dawson grew closer and closer, Buck still\r
continued to interfere between Spitz and the culprits; but he did it\r
craftily, when François was not around, With the covert mutiny of Buck,\r
a general insubordination sprang up and increased. Dave and Sol-leks\r
were unaffected, but the rest of the team went from bad to worse.\r
Things no longer went right. There was continual bickering and\r
jangling. Trouble was always afoot, and at the bottom of it was Buck.\r
He kept François busy, for the dog-driver was in constant apprehension\r
of the life-and-death struggle between the two which he knew must take\r
place sooner or later; and on more than one night the sounds of\r
quarrelling and strife among the other dogs turned him out of his\r
sleeping robe, fearful that Buck and Spitz were at it.\r
\r
But the opportunity did not present itself, and they pulled into Dawson\r
one dreary afternoon with the great fight still to come. Here were many\r
men, and countless dogs, and Buck found them all at work. It seemed the\r
ordained order of things that dogs should work. All day they swung up\r
and down the main street in long teams, and in the night their jingling\r
bells still went by. They hauled cabin logs and firewood, freighted up\r
to the mines, and did all manner of work that horses did in the Santa\r
Clara Valley. Here and there Buck met Southland dogs, but in the main\r
they were the wild wolf husky breed. Every night, regularly, at nine,\r
at twelve, at three, they lifted a nocturnal song, a weird and eerie\r
chant, in which it was Buck’s delight to join.\r
\r
With the aurora borealis flaming coldly overhead, or the stars leaping\r
in the frost dance, and the land numb and frozen under its pall of\r
snow, this song of the huskies might have been the defiance of life,\r
only it was pitched in minor key, with long-drawn wailings and\r
half-sobs, and was more the pleading of life, the articulate travail of\r
existence. It was an old song, old as the breed itself—one of the first\r
songs of the younger world in a day when songs were sad. It was\r
invested with the woe of unnumbered generations, this plaint by which\r
Buck was so strangely stirred. When he moaned and sobbed, it was with\r
the pain of living that was of old the pain of his wild fathers, and\r
the fear and mystery of the cold and dark that was to them fear and\r
mystery. And that he should be stirred by it marked the completeness\r
with which he harked back through the ages of fire and roof to the raw\r
beginnings of life in the howling ages.\r
\r
Seven days from the time they pulled into Dawson, they dropped down the\r
steep bank by the Barracks to the Yukon Trail, and pulled for Dyea and\r
Salt Water. Perrault was carrying despatches if anything more urgent\r
than those he had brought in; also, the travel pride had gripped him,\r
and he purposed to make the record trip of the year. Several things\r
favored him in this. The week’s rest had recuperated the dogs and put\r
them in thorough trim. The trail they had broken into the country was\r
packed hard by later journeyers. And further, the police had arranged\r
in two or three places deposits of grub for dog and man, and he was\r
travelling light.\r
\r
They made Sixty Mile, which is a fifty-mile run, on the first day; and\r
the second day saw them booming up the Yukon well on their way to\r
Pelly. But such splendid running was achieved not without great trouble\r
and vexation on the part of François. The insidious revolt led by Buck\r
had destroyed the solidarity of the team. It no longer was as one dog\r
leaping in the traces. The encouragement Buck gave the rebels led them\r
into all kinds of petty misdemeanors. No more was Spitz a leader\r
greatly to be feared. The old awe departed, and they grew equal to\r
challenging his authority. Pike robbed him of half a fish one night,\r
and gulped it down under the protection of Buck. Another night Dub and\r
Joe fought Spitz and made him forego the punishment they deserved. And\r
even Billee, the good-natured, was less good-natured, and whined not\r
half so placatingly as in former days. Buck never came near Spitz\r
without snarling and bristling menacingly. In fact, his conduct\r
approached that of a bully, and he was given to swaggering up and down\r
before Spitz’s very nose.\r
\r
The breaking down of discipline likewise affected the dogs in their\r
relations with one another. They quarrelled and bickered more than ever\r
among themselves, till at times the camp was a howling bedlam. Dave and\r
Sol-leks alone were unaltered, though they were made irritable by the\r
unending squabbling. François swore strange barbarous oaths, and\r
stamped the snow in futile rage, and tore his hair. His lash was always\r
singing among the dogs, but it was of small avail. Directly his back\r
was turned they were at it again. He backed up Spitz with his whip,\r
while Buck backed up the remainder of the team. François knew he was\r
behind all the trouble, and Buck knew he knew; but Buck was too clever\r
ever again to be caught red-handed. He worked faithfully in the\r
harness, for the toil had become a delight to him; yet it was a greater\r
delight slyly to precipitate a fight amongst his mates and tangle the\r
traces.\r
\r
At the mouth of the Tahkeena, one night after supper, Dub turned up a\r
snowshoe rabbit, blundered it, and missed. In a second the whole team\r
was in full cry. A hundred yards away was a camp of the Northwest\r
Police, with fifty dogs, huskies all, who joined the chase. The rabbit\r
sped down the river, turned off into a small creek, up the frozen bed\r
of which it held steadily. It ran lightly on the surface of the snow,\r
while the dogs ploughed through by main strength. Buck led the pack,\r
sixty strong, around bend after bend, but he could not gain. He lay\r
down low to the race, whining eagerly, his splendid body flashing\r
forward, leap by leap, in the wan white moonlight. And leap by leap,\r
like some pale frost wraith, the snowshoe rabbit flashed on ahead.\r
\r
All that stirring of old instincts which at stated periods drives men\r
out from the sounding cities to forest and plain to kill things by\r
chemically propelled leaden pellets, the blood lust, the joy to\r
kill—all this was Buck’s, only it was infinitely more intimate. He was\r
ranging at the head of the pack, running the wild thing down, the\r
living meat, to kill with his own teeth and wash his muzzle to the eyes\r
in warm blood.\r
\r
There is an ecstasy that marks the summit of life, and beyond which\r
life cannot rise. And such is the paradox of living, this ecstasy comes\r
when one is most alive, and it comes as a complete forgetfulness that\r
one is alive. This ecstasy, this forgetfulness of living, comes to the\r
artist, caught up and out of himself in a sheet of flame; it comes to\r
the soldier, war-mad on a stricken field and refusing quarter; and it\r
came to Buck, leading the pack, sounding the old wolf-cry, straining\r
after the food that was alive and that fled swiftly before him through\r
the moonlight. He was sounding the deeps of his nature, and of the\r
parts of his nature that were deeper than he, going back into the womb\r
of Time. He was mastered by the sheer surging of life, the tidal wave\r
of being, the perfect joy of each separate muscle, joint, and sinew in\r
that it was everything that was not death, that it was aglow and\r
rampant, expressing itself in movement, flying exultantly under the\r
stars and over the face of dead matter that did not move.\r
\r
But Spitz, cold and calculating even in his supreme moods, left the\r
pack and cut across a narrow neck of land where the creek made a long\r
bend around. Buck did not know of this, and as he rounded the bend, the\r
frost wraith of a rabbit still flitting before him, he saw another and\r
larger frost wraith leap from the overhanging bank into the immediate\r
path of the rabbit. It was Spitz. The rabbit could not turn, and as the\r
white teeth broke its back in mid air it shrieked as loudly as a\r
stricken man may shriek. At sound of this, the cry of Life plunging\r
down from Life’s apex in the grip of Death, the full pack at Buck’s\r
heels raised a hell’s chorus of delight.\r
\r
Buck did not cry out. He did not check himself, but drove in upon\r
Spitz, shoulder to shoulder, so hard that he missed the throat. They\r
rolled over and over in the powdery snow. Spitz gained his feet almost\r
as though he had not been overthrown, slashing Buck down the shoulder\r
and leaping clear. Twice his teeth clipped together, like the steel\r
jaws of a trap, as he backed away for better footing, with lean and\r
lifting lips that writhed and snarled.\r
\r
In a flash Buck knew it. The time had come. It was to the death. As\r
they circled about, snarling, ears laid back, keenly watchful for the\r
advantage, the scene came to Buck with a sense of familiarity. He\r
seemed to remember it all,—the white woods, and earth, and moonlight,\r
and the thrill of battle. Over the whiteness and silence brooded a\r
ghostly calm. There was not the faintest whisper of air—nothing moved,\r
not a leaf quivered, the visible breaths of the dogs rising slowly and\r
lingering in the frosty air. They had made short work of the snowshoe\r
rabbit, these dogs that were ill-tamed wolves; and they were now drawn\r
up in an expectant circle. They, too, were silent, their eyes only\r
gleaming and their breaths drifting slowly upward. To Buck it was\r
nothing new or strange, this scene of old time. It was as though it had\r
always been, the wonted way of things.\r
\r
Spitz was a practised fighter. From Spitzbergen through the Arctic, and\r
across Canada and the Barrens, he had held his own with all manner of\r
dogs and achieved to mastery over them. Bitter rage was his, but never\r
blind rage. In passion to rend and destroy, he never forgot that his\r
enemy was in like passion to rend and destroy. He never rushed till he\r
was prepared to receive a rush; never attacked till he had first\r
defended that attack.\r
\r
In vain Buck strove to sink his teeth in the neck of the big white dog.\r
Wherever his fangs struck for the softer flesh, they were countered by\r
the fangs of Spitz. Fang clashed fang, and lips were cut and bleeding,\r
but Buck could not penetrate his enemy’s guard. Then he warmed up and\r
enveloped Spitz in a whirlwind of rushes. Time and time again he tried\r
for the snow-white throat, where life bubbled near to the surface, and\r
each time and every time Spitz slashed him and got away. Then Buck took\r
to rushing, as though for the throat, when, suddenly drawing back his\r
head and curving in from the side, he would drive his shoulder at the\r
shoulder of Spitz, as a ram by which to overthrow him. But instead,\r
Buck’s shoulder was slashed down each time as Spitz leaped lightly\r
away.\r
\r
Spitz was untouched, while Buck was streaming with blood and panting\r
hard. The fight was growing desperate. And all the while the silent and\r
wolfish circle waited to finish off whichever dog went down. As Buck\r
grew winded, Spitz took to rushing, and he kept him staggering for\r
footing. Once Buck went over, and the whole circle of sixty dogs\r
started up; but he recovered himself, almost in mid air, and the circle\r
sank down again and waited.\r
\r
But Buck possessed a quality that made for greatness—imagination. He\r
fought by instinct, but he could fight by head as well. He rushed, as\r
though attempting the old shoulder trick, but at the last instant swept\r
low to the snow and in. His teeth closed on Spitz’s left fore leg.\r
There was a crunch of breaking bone, and the white dog faced him on\r
three legs. Thrice he tried to knock him over, then repeated the trick\r
and broke the right fore leg. Despite the pain and helplessness, Spitz\r
struggled madly to keep up. He saw the silent circle, with gleaming\r
eyes, lolling tongues, and silvery breaths drifting upward, closing in\r
upon him as he had seen similar circles close in upon beaten\r
antagonists in the past. Only this time he was the one who was beaten.\r
\r
There was no hope for him. Buck was inexorable. Mercy was a thing\r
reserved for gentler climes. He manœuvred for the final rush. The\r
circle had tightened till he could feel the breaths of the huskies on\r
his flanks. He could see them, beyond Spitz and to either side, half\r
crouching for the spring, their eyes fixed upon him. A pause seemed to\r
fall. Every animal was motionless as though turned to stone. Only Spitz\r
quivered and bristled as he staggered back and forth, snarling with\r
horrible menace, as though to frighten off impending death. Then Buck\r
sprang in and out; but while he was in, shoulder had at last squarely\r
met shoulder. The dark circle became a dot on the moon-flooded snow as\r
Spitz disappeared from view. Buck stood and looked on, the successful\r
champion, the dominant primordial beast who had made his kill and found\r
it good.\r
\r
\r
\r
\r
Chapter IV. Who Has Won to Mastership\r
\r
\r
“Eh? Wot I say? I spik true w’en I say dat Buck two devils.” This was\r
François’s speech next morning when he discovered Spitz missing and\r
Buck covered with wounds. He drew him to the fire and by its light\r
pointed them out.\r
\r
“Dat Spitz fight lak hell,” said Perrault, as he surveyed the gaping\r
rips and cuts.\r
\r
“An’ dat Buck fight lak two hells,” was François’s answer. “An’ now we\r
make good time. No more Spitz, no more trouble, sure.”\r
\r
While Perrault packed the camp outfit and loaded the sled, the\r
dog-driver proceeded to harness the dogs. Buck trotted up to the place\r
Spitz would have occupied as leader; but François, not noticing him,\r
brought Sol-leks to the coveted position. In his judgment, Sol-leks was\r
the best lead-dog left. Buck sprang upon Sol-leks in a fury, driving\r
him back and standing in his place.\r
\r
“Eh? eh?” François cried, slapping his thighs gleefully. “Look at dat\r
Buck. Heem keel dat Spitz, heem t’ink to take de job.”\r
\r
“Go ’way, Chook!” he cried, but Buck refused to budge.\r
\r
He took Buck by the scruff of the neck, and though the dog growled\r
threateningly, dragged him to one side and replaced Sol-leks. The old\r
dog did not like it, and showed plainly that he was afraid of Buck.\r
François was obdurate, but when he turned his back Buck again displaced\r
Sol-leks, who was not at all unwilling to go.\r
\r
François was angry. “Now, by Gar, I feex you!” he cried, coming back\r
with a heavy club in his hand.\r
\r
Buck remembered the man in the red sweater, and retreated slowly; nor\r
did he attempt to charge in when Sol-leks was once more brought\r
forward. But he circled just beyond the range of the club, snarling\r
with bitterness and rage; and while he circled he watched the club so\r
as to dodge it if thrown by François, for he was become wise in the way\r
of clubs. The driver went about his work, and he called to Buck when he\r
was ready to put him in his old place in front of Dave. Buck retreated\r
two or three steps. François followed him up, whereupon he again\r
retreated. After some time of this, François threw down the club,\r
thinking that Buck feared a thrashing. But Buck was in open revolt. He\r
wanted, not to escape a clubbing, but to have the leadership. It was\r
his by right. He had earned it, and he would not be content with less.\r
\r
Perrault took a hand. Between them they ran him about for the better\r
part of an hour. They threw clubs at him. He dodged. They cursed him,\r
and his fathers and mothers before him, and all his seed to come after\r
him down to the remotest generation, and every hair on his body and\r
drop of blood in his veins; and he answered curse with snarl and kept\r
out of their reach. He did not try to run away, but retreated around\r
and around the camp, advertising plainly that when his desire was met,\r
he would come in and be good.\r
\r
François sat down and scratched his head. Perrault looked at his watch\r
and swore. Time was flying, and they should have been on the trail an\r
hour gone. François scratched his head again. He shook it and grinned\r
sheepishly at the courier, who shrugged his shoulders in sign that they\r
were beaten. Then François went up to where Sol-leks stood and called\r
to Buck. Buck laughed, as dogs laugh, yet kept his distance. François\r
unfastened Sol-leks’s traces and put him back in his old place. The\r
team stood harnessed to the sled in an unbroken line, ready for the\r
trail. There was no place for Buck save at the front. Once more\r
François called, and once more Buck laughed and kept away.\r
\r
“T’row down de club,” Perrault commanded.\r
\r
François complied, whereupon Buck trotted in, laughing triumphantly,\r
and swung around into position at the head of the team. His traces were\r
fastened, the sled broken out, and with both men running they dashed\r
out on to the river trail.\r
\r
Highly as the dog-driver had forevalued Buck, with his two devils, he\r
found, while the day was yet young, that he had undervalued. At a bound\r
Buck took up the duties of leadership; and where judgment was required,\r
and quick thinking and quick acting, he showed himself the superior\r
even of Spitz, of whom François had never seen an equal.\r
\r
But it was in giving the law and making his mates live up to it, that\r
Buck excelled. Dave and Sol-leks did not mind the change in leadership.\r
It was none of their business. Their business was to toil, and toil\r
mightily, in the traces. So long as that were not interfered with, they\r
did not care what happened. Billee, the good-natured, could lead for\r
all they cared, so long as he kept order. The rest of the team,\r
however, had grown unruly during the last days of Spitz, and their\r
surprise was great now that Buck proceeded to lick them into shape.\r
\r
Pike, who pulled at Buck’s heels, and who never put an ounce more of\r
his weight against the breast-band than he was compelled to do, was\r
swiftly and repeatedly shaken for loafing; and ere the first day was\r
done he was pulling more than ever before in his life. The first night\r
in camp, Joe, the sour one, was punished roundly—a thing that Spitz had\r
never succeeded in doing. Buck simply smothered him by virtue of\r
superior weight, and cut him up till he ceased snapping and began to\r
whine for mercy.\r
\r
The general tone of the team picked up immediately. It recovered its\r
old-time solidarity, and once more the dogs leaped as one dog in the\r
traces. At the Rink Rapids two native huskies, Teek and Koona, were\r
added; and the celerity with which Buck broke them in took away\r
François’s breath.\r
\r
“Nevaire such a dog as dat Buck!” he cried. “No, nevaire! Heem worth\r
one t’ousan’ dollair, by Gar! Eh? Wot you say, Perrault?”\r
\r
And Perrault nodded. He was ahead of the record then, and gaining day\r
by day. The trail was in excellent condition, well packed and hard, and\r
there was no new-fallen snow with which to contend. It was not too\r
cold. The temperature dropped to fifty below zero and remained there\r
the whole trip. The men rode and ran by turn, and the dogs were kept on\r
the jump, with but infrequent stoppages.\r
\r
The Thirty Mile River was comparatively coated with ice, and they\r
covered in one day going out what had taken them ten days coming in. In\r
one run they made a sixty-mile dash from the foot of Lake Le Barge to\r
the White Horse Rapids. Across Marsh, Tagish, and Bennett (seventy\r
miles of lakes), they flew so fast that the man whose turn it was to\r
run towed behind the sled at the end of a rope. And on the last night\r
of the second week they topped White Pass and dropped down the sea\r
slope with the lights of Skaguay and of the shipping at their feet.\r
\r
It was a record run. Each day for fourteen days they had averaged forty\r
miles. For three days Perrault and François threw chests up and down\r
the main street of Skaguay and were deluged with invitations to drink,\r
while the team was the constant centre of a worshipful crowd of\r
dog-busters and mushers. Then three or four western bad men aspired to\r
clean out the town, were riddled like pepper-boxes for their pains, and\r
public interest turned to other idols. Next came official orders.\r
François called Buck to him, threw his arms around him, wept over him.\r
And that was the last of François and Perrault. Like other men, they\r
passed out of Buck’s life for good.\r
\r
A Scotch half-breed took charge of him and his mates, and in company\r
with a dozen other dog-teams he started back over the weary trail to\r
Dawson. It was no light running now, nor record time, but heavy toil\r
each day, with a heavy load behind; for this was the mail train,\r
carrying word from the world to the men who sought gold under the\r
shadow of the Pole.\r
\r
Buck did not like it, but he bore up well to the work, taking pride in\r
it after the manner of Dave and Sol-leks, and seeing that his mates,\r
whether they prided in it or not, did their fair share. It was a\r
monotonous life, operating with machine-like regularity. One day was\r
very like another. At a certain time each morning the cooks turned out,\r
fires were built, and breakfast was eaten. Then, while some broke camp,\r
others harnessed the dogs, and they were under way an hour or so before\r
the darkness fell which gave warning of dawn. At night, camp was made.\r
Some pitched the flies, others cut firewood and pine boughs for the\r
beds, and still others carried water or ice for the cooks. Also, the\r
dogs were fed. To them, this was the one feature of the day, though it\r
was good to loaf around, after the fish was eaten, for an hour or so\r
with the other dogs, of which there were fivescore and odd. There were\r
fierce fighters among them, but three battles with the fiercest brought\r
Buck to mastery, so that when he bristled and showed his teeth they got\r
out of his way.\r
\r
Best of all, perhaps, he loved to lie near the fire, hind legs crouched\r
under him, fore legs stretched out in front, head raised, and eyes\r
blinking dreamily at the flames. Sometimes he thought of Judge Miller’s\r
big house in the sun-kissed Santa Clara Valley, and of the cement\r
swimming-tank, and Ysabel, the Mexican hairless, and Toots, the\r
Japanese pug; but oftener he remembered the man in the red sweater, the\r
death of Curly, the great fight with Spitz, and the good things he had\r
eaten or would like to eat. He was not homesick. The Sunland was very\r
dim and distant, and such memories had no power over him. Far more\r
potent were the memories of his heredity that gave things he had never\r
seen before a seeming familiarity; the instincts (which were but the\r
memories of his ancestors become habits) which had lapsed in later\r
days, and still later, in him, quickened and become alive again.\r
\r
Sometimes as he crouched there, blinking dreamily at the flames, it\r
seemed that the flames were of another fire, and that as he crouched by\r
this other fire he saw another and different man from the half-breed\r
cook before him. This other man was shorter of leg and longer of arm,\r
with muscles that were stringy and knotty rather than rounded and\r
swelling. The hair of this man was long and matted, and his head\r
slanted back under it from the eyes. He uttered strange sounds, and\r
seemed very much afraid of the darkness, into which he peered\r
continually, clutching in his hand, which hung midway between knee and\r
foot, a stick with a heavy stone made fast to the end. He was all but\r
naked, a ragged and fire-scorched skin hanging part way down his back,\r
but on his body there was much hair. In some places, across the chest\r
and shoulders and down the outside of the arms and thighs, it was\r
matted into almost a thick fur. He did not stand erect, but with trunk\r
inclined forward from the hips, on legs that bent at the knees. About\r
his body there was a peculiar springiness, or resiliency, almost\r
catlike, and a quick alertness as of one who lived in perpetual fear of\r
things seen and unseen.\r
\r
At other times this hairy man squatted by the fire with head between\r
his legs and slept. On such occasions his elbows were on his knees, his\r
hands clasped above his head as though to shed rain by the hairy arms.\r
And beyond that fire, in the circling darkness, Buck could see many\r
gleaming coals, two by two, always two by two, which he knew to be the\r
eyes of great beasts of prey. And he could hear the crashing of their\r
bodies through the undergrowth, and the noises they made in the night.\r
And dreaming there by the Yukon bank, with lazy eyes blinking at the\r
fire, these sounds and sights of another world would make the hair to\r
rise along his back and stand on end across his shoulders and up his\r
neck, till he whimpered low and suppressedly, or growled softly, and\r
the half-breed cook shouted at him, “Hey, you Buck, wake up!” Whereupon\r
the other world would vanish and the real world come into his eyes, and\r
he would get up and yawn and stretch as though he had been asleep.\r
\r
It was a hard trip, with the mail behind them, and the heavy work wore\r
them down. They were short of weight and in poor condition when they\r
made Dawson, and should have had a ten days’ or a week’s rest at least.\r
But in two days’ time they dropped down the Yukon bank from the\r
Barracks, loaded with letters for the outside. The dogs were tired, the\r
drivers grumbling, and to make matters worse, it snowed every day. This\r
meant a soft trail, greater friction on the runners, and heavier\r
pulling for the dogs; yet the drivers were fair through it all, and did\r
their best for the animals.\r
\r
Each night the dogs were attended to first. They ate before the drivers\r
ate, and no man sought his sleeping-robe till he had seen to the feet\r
of the dogs he drove. Still, their strength went down. Since the\r
beginning of the winter they had travelled eighteen hundred miles,\r
dragging sleds the whole weary distance; and eighteen hundred miles\r
will tell upon life of the toughest. Buck stood it, keeping his mates\r
up to their work and maintaining discipline, though he, too, was very\r
tired. Billee cried and whimpered regularly in his sleep each night.\r
Joe was sourer than ever, and Sol-leks was unapproachable, blind side\r
or other side.\r
\r
But it was Dave who suffered most of all. Something had gone wrong with\r
him. He became more morose and irritable, and when camp was pitched at\r
once made his nest, where his driver fed him. Once out of the harness\r
and down, he did not get on his feet again till harness-up time in the\r
morning. Sometimes, in the traces, when jerked by a sudden stoppage of\r
the sled, or by straining to start it, he would cry out with pain. The\r
driver examined him, but could find nothing. All the drivers became\r
interested in his case. They talked it over at meal-time, and over\r
their last pipes before going to bed, and one night they held a\r
consultation. He was brought from his nest to the fire and was pressed\r
and prodded till he cried out many times. Something was wrong inside,\r
but they could locate no broken bones, could not make it out.\r
\r
By the time Cassiar Bar was reached, he was so weak that he was falling\r
repeatedly in the traces. The Scotch half-breed called a halt and took\r
him out of the team, making the next dog, Sol-leks, fast to the sled.\r
His intention was to rest Dave, letting him run free behind the sled.\r
Sick as he was, Dave resented being taken out, grunting and growling\r
while the traces were unfastened, and whimpering broken-heartedly when\r
he saw Sol-leks in the position he had held and served so long. For the\r
pride of trace and trail was his, and, sick unto death, he could not\r
bear that another dog should do his work.\r
\r
When the sled started, he floundered in the soft snow alongside the\r
beaten trail, attacking Sol-leks with his teeth, rushing against him\r
and trying to thrust him off into the soft snow on the other side,\r
striving to leap inside his traces and get between him and the sled,\r
and all the while whining and yelping and crying with grief and pain.\r
The half-breed tried to drive him away with the whip; but he paid no\r
heed to the stinging lash, and the man had not the heart to strike\r
harder. Dave refused to run quietly on the trail behind the sled, where\r
the going was easy, but continued to flounder alongside in the soft\r
snow, where the going was most difficult, till exhausted. Then he fell,\r
and lay where he fell, howling lugubriously as the long train of sleds\r
churned by.\r
\r
With the last remnant of his strength he managed to stagger along\r
behind till the train made another stop, when he floundered past the\r
sleds to his own, where he stood alongside Sol-leks. His driver\r
lingered a moment to get a light for his pipe from the man behind. Then\r
he returned and started his dogs. They swung out on the trail with\r
remarkable lack of exertion, turned their heads uneasily, and stopped\r
in surprise. The driver was surprised, too; the sled had not moved. He\r
called his comrades to witness the sight. Dave had bitten through both\r
of Sol-leks’s traces, and was standing directly in front of the sled in\r
his proper place.\r
\r
He pleaded with his eyes to remain there. The driver was perplexed. His\r
comrades talked of how a dog could break its heart through being denied\r
the work that killed it, and recalled instances they had known, where\r
dogs, too old for the toil, or injured, had died because they were cut\r
out of the traces. Also, they held it a mercy, since Dave was to die\r
anyway, that he should die in the traces, heart-easy and content. So he\r
was harnessed in again, and proudly he pulled as of old, though more\r
than once he cried out involuntarily from the bite of his inward hurt.\r
Several times he fell down and was dragged in the traces, and once the\r
sled ran upon him so that he limped thereafter in one of his hind legs.\r
\r
But he held out till camp was reached, when his driver made a place for\r
him by the fire. Morning found him too weak to travel. At harness-up\r
time he tried to crawl to his driver. By convulsive efforts he got on\r
his feet, staggered, and fell. Then he wormed his way forward slowly\r
toward where the harnesses were being put on his mates. He would\r
advance his fore legs and drag up his body with a sort of hitching\r
movement, when he would advance his fore legs and hitch ahead again for\r
a few more inches. His strength left him, and the last his mates saw of\r
him he lay gasping in the snow and yearning toward them. But they could\r
hear him mournfully howling till they passed out of sight behind a belt\r
of river timber.\r
\r
Here the train was halted. The Scotch half-breed slowly retraced his\r
steps to the camp they had left. The men ceased talking. A\r
revolver-shot rang out. The man came back hurriedly. The whips snapped,\r
the bells tinkled merrily, the sleds churned along the trail; but Buck\r
knew, and every dog knew, what had taken place behind the belt of river\r
trees.\r
\r
\r
\r
\r
Chapter V. The Toil of Trace and Trail\r
\r
\r
Thirty days from the time it left Dawson, the Salt Water Mail, with\r
Buck and his mates at the fore, arrived at Skaguay. They were in a\r
wretched state, worn out and worn down. Buck’s one hundred and forty\r
pounds had dwindled to one hundred and fifteen. The rest of his mates,\r
though lighter dogs, had relatively lost more weight than he. Pike, the\r
malingerer, who, in his lifetime of deceit, had often successfully\r
feigned a hurt leg, was now limping in earnest. Sol-leks was limping,\r
and Dub was suffering from a wrenched shoulder-blade.\r
\r
They were all terribly footsore. No spring or rebound was left in them.\r
Their feet fell heavily on the trail, jarring their bodies and doubling\r
the fatigue of a day’s travel. There was nothing the matter with them\r
except that they were dead tired. It was not the dead-tiredness that\r
comes through brief and excessive effort, from which recovery is a\r
matter of hours; but it was the dead-tiredness that comes through the\r
slow and prolonged strength drainage of months of toil. There was no\r
power of recuperation left, no reserve strength to call upon. It had\r
been all used, the last least bit of it. Every muscle, every fibre,\r
every cell, was tired, dead tired. And there was reason for it. In less\r
than five months they had travelled twenty-five hundred miles, during\r
the last eighteen hundred of which they had had but five days’ rest.\r
When they arrived at Skaguay they were apparently on their last legs.\r
They could barely keep the traces taut, and on the down grades just\r
managed to keep out of the way of the sled.\r
\r
“Mush on, poor sore feets,” the driver encouraged them as they tottered\r
down the main street of Skaguay. “Dis is de las’. Den we get one long\r
res’. Eh? For sure. One bully long res’.”\r
\r
The drivers confidently expected a long stopover. Themselves, they had\r
covered twelve hundred miles with two days’ rest, and in the nature of\r
reason and common justice they deserved an interval of loafing. But so\r
many were the men who had rushed into the Klondike, and so many were\r
the sweethearts, wives, and kin that had not rushed in, that the\r
congested mail was taking on Alpine proportions; also, there were\r
official orders. Fresh batches of Hudson Bay dogs were to take the\r
places of those worthless for the trail. The worthless ones were to be\r
got rid of, and, since dogs count for little against dollars, they were\r
to be sold.\r
\r
Three days passed, by which time Buck and his mates found how really\r
tired and weak they were. Then, on the morning of the fourth day, two\r
men from the States came along and bought them, harness and all, for a\r
song. The men addressed each other as “Hal” and “Charles.” Charles was\r
a middle-aged, lightish-colored man, with weak and watery eyes and a\r
mustache that twisted fiercely and vigorously up, giving the lie to the\r
limply drooping lip it concealed. Hal was a youngster of nineteen or\r
twenty, with a big Colt’s revolver and a hunting-knife strapped about\r
him on a belt that fairly bristled with cartridges. This belt was the\r
most salient thing about him. It advertised his callowness—a callowness\r
sheer and unutterable. Both men were manifestly out of place, and why\r
such as they should adventure the North is part of the mystery of\r
things that passes understanding.\r
\r
Buck heard the chaffering, saw the money pass between the man and the\r
Government agent, and knew that the Scotch half-breed and the\r
mail-train drivers were passing out of his life on the heels of\r
Perrault and François and the others who had gone before. When driven\r
with his mates to the new owners’ camp, Buck saw a slipshod and\r
slovenly affair, tent half stretched, dishes unwashed, everything in\r
disorder; also, he saw a woman. “Mercedes” the men called her. She was\r
Charles’s wife and Hal’s sister—a nice family party.\r
\r
Buck watched them apprehensively as they proceeded to take down the\r
tent and load the sled. There was a great deal of effort about their\r
manner, but no businesslike method. The tent was rolled into an awkward\r
bundle three times as large as it should have been. The tin dishes were\r
packed away unwashed. Mercedes continually fluttered in the way of her\r
men and kept up an unbroken chattering of remonstrance and advice. When\r
they put a clothes-sack on the front of the sled, she suggested it\r
should go on the back; and when they had put it on the back, and\r
covered it over with a couple of other bundles, she discovered\r
overlooked articles which could abide nowhere else but in that very\r
sack, and they unloaded again.\r
\r
Three men from a neighboring tent came out and looked on, grinning and\r
winking at one another.\r
\r
“You’ve got a right smart load as it is,” said one of them; “and it’s\r
not me should tell you your business, but I wouldn’t tote that tent\r
along if I was you.”\r
\r
“Undreamed of!” cried Mercedes, throwing up her hands in dainty dismay.\r
“However in the world could I manage without a tent?”\r
\r
“It’s springtime, and you won’t get any more cold weather,” the man\r
replied.\r
\r
She shook her head decidedly, and Charles and Hal put the last odds and\r
ends on top the mountainous load.\r
\r
“Think it’ll ride?” one of the men asked.\r
\r
“Why shouldn’t it?” Charles demanded rather shortly.\r
\r
“Oh, that’s all right, that’s all right,” the man hastened meekly to\r
say. “I was just a-wonderin’, that is all. It seemed a mite top-heavy.”\r
\r
Charles turned his back and drew the lashings down as well as he could,\r
which was not in the least well.\r
\r
“An’ of course the dogs can hike along all day with that contraption\r
behind them,” affirmed a second of the men.\r
\r
“Certainly,” said Hal, with freezing politeness, taking hold of the\r
gee-pole with one hand and swinging his whip from the other. “Mush!” he\r
shouted. “Mush on there!”\r
\r
The dogs sprang against the breast-bands, strained hard for a few\r
moments, then relaxed. They were unable to move the sled.\r
\r
“The lazy brutes, I’ll show them,” he cried, preparing to lash out at\r
them with the whip.\r
\r
But Mercedes interfered, crying, “Oh, Hal, you mustn’t,” as she caught\r
hold of the whip and wrenched it from him. “The poor dears! Now you\r
must promise you won’t be harsh with them for the rest of the trip, or\r
I won’t go a step.”\r
\r
“Precious lot you know about dogs,” her brother sneered; “and I wish\r
you’d leave me alone. They’re lazy, I tell you, and you’ve got to whip\r
them to get anything out of them. That’s their way. You ask any one.\r
Ask one of those men.”\r
\r
Mercedes looked at them imploringly, untold repugnance at sight of pain\r
written in her pretty face.\r
\r
“They’re weak as water, if you want to know,” came the reply from one\r
of the men. “Plum tuckered out, that’s what’s the matter. They need a\r
rest.”\r
\r
“Rest be blanked,” said Hal, with his beardless lips; and Mercedes\r
said, “Oh!” in pain and sorrow at the oath.\r
\r
But she was a clannish creature, and rushed at once to the defence of\r
her brother. “Never mind that man,” she said pointedly. “You’re driving\r
our dogs, and you do what you think best with them.”\r
\r
Again Hal’s whip fell upon the dogs. They threw themselves against the\r
breast-bands, dug their feet into the packed snow, got down low to it,\r
and put forth all their strength. The sled held as though it were an\r
anchor. After two efforts, they stood still, panting. The whip was\r
whistling savagely, when once more Mercedes interfered. She dropped on\r
her knees before Buck, with tears in her eyes, and put her arms around\r
his neck.\r
\r
“You poor, poor dears,” she cried sympathetically, “why don’t you pull\r
hard?—then you wouldn’t be whipped.” Buck did not like her, but he was\r
feeling too miserable to resist her, taking it as part of the day’s\r
miserable work.\r
\r
One of the onlookers, who had been clenching his teeth to suppress hot\r
speech, now spoke up:—\r
\r
“It’s not that I care a whoop what becomes of you, but for the dogs’\r
sakes I just want to tell you, you can help them a mighty lot by\r
breaking out that sled. The runners are froze fast. Throw your weight\r
against the gee-pole, right and left, and break it out.”\r
\r
A third time the attempt was made, but this time, following the advice,\r
Hal broke out the runners which had been frozen to the snow. The\r
overloaded and unwieldy sled forged ahead, Buck and his mates\r
struggling frantically under the rain of blows. A hundred yards ahead\r
the path turned and sloped steeply into the main street. It would have\r
required an experienced man to keep the top-heavy sled upright, and Hal\r
was not such a man. As they swung on the turn the sled went over,\r
spilling half its load through the loose lashings. The dogs never\r
stopped. The lightened sled bounded on its side behind them. They were\r
angry because of the ill treatment they had received and the unjust\r
load. Buck was raging. He broke into a run, the team following his\r
lead. Hal cried “Whoa! whoa!” but they gave no heed. He tripped and was\r
pulled off his feet. The capsized sled ground over him, and the dogs\r
dashed on up the street, adding to the gayety of Skaguay as they\r
scattered the remainder of the outfit along its chief thoroughfare.\r
\r
Kind-hearted citizens caught the dogs and gathered up the scattered\r
belongings. Also, they gave advice. Half the load and twice the dogs,\r
if they ever expected to reach Dawson, was what was said. Hal and his\r
sister and brother-in-law listened unwillingly, pitched tent, and\r
overhauled the outfit. Canned goods were turned out that made men\r
laugh, for canned goods on the Long Trail is a thing to dream about.\r
“Blankets for a hotel” quoth one of the men who laughed and helped.\r
“Half as many is too much; get rid of them. Throw away that tent, and\r
all those dishes,—who’s going to wash them, anyway? Good Lord, do you\r
think you’re travelling on a Pullman?”\r
\r
And so it went, the inexorable elimination of the superfluous. Mercedes\r
cried when her clothes-bags were dumped on the ground and article after\r
article was thrown out. She cried in general, and she cried in\r
particular over each discarded thing. She clasped hands about knees,\r
rocking back and forth broken-heartedly. She averred she would not go\r
an inch, not for a dozen Charleses. She appealed to everybody and to\r
everything, finally wiping her eyes and proceeding to cast out even\r
articles of apparel that were imperative necessaries. And in her zeal,\r
when she had finished with her own, she attacked the belongings of her\r
men and went through them like a tornado.\r
\r
This accomplished, the outfit, though cut in half, was still a\r
formidable bulk. Charles and Hal went out in the evening and bought six\r
Outside dogs. These, added to the six of the original team, and Teek\r
and Koona, the huskies obtained at the Rink Rapids on the record trip,\r
brought the team up to fourteen. But the Outside dogs, though\r
practically broken in since their landing, did not amount to much.\r
Three were short-haired pointers, one was a Newfoundland, and the other\r
two were mongrels of indeterminate breed. They did not seem to know\r
anything, these newcomers. Buck and his comrades looked upon them with\r
disgust, and though he speedily taught them their places and what not\r
to do, he could not teach them what to do. They did not take kindly to\r
trace and trail. With the exception of the two mongrels, they were\r
bewildered and spirit-broken by the strange savage environment in which\r
they found themselves and by the ill treatment they had received. The\r
two mongrels were without spirit at all; bones were the only things\r
breakable about them.\r
\r
With the newcomers hopeless and forlorn, and the old team worn out by\r
twenty-five hundred miles of continuous trail, the outlook was anything\r
but bright. The two men, however, were quite cheerful. And they were\r
proud, too. They were doing the thing in style, with fourteen dogs.\r
They had seen other sleds depart over the Pass for Dawson, or come in\r
from Dawson, but never had they seen a sled with so many as fourteen\r
dogs. In the nature of Arctic travel there was a reason why fourteen\r
dogs should not drag one sled, and that was that one sled could not\r
carry the food for fourteen dogs. But Charles and Hal did not know\r
this. They had worked the trip out with a pencil, so much to a dog, so\r
many dogs, so many days, Q.E.D. Mercedes looked over their shoulders\r
and nodded comprehensively, it was all so very simple.\r
\r
Late next morning Buck led the long team up the street. There was\r
nothing lively about it, no snap or go in him and his fellows. They\r
were starting dead weary. Four times he had covered the distance\r
between Salt Water and Dawson, and the knowledge that, jaded and tired,\r
he was facing the same trail once more, made him bitter. His heart was\r
not in the work, nor was the heart of any dog. The Outsides were timid\r
and frightened, the Insides without confidence in their masters.\r
\r
Buck felt vaguely that there was no depending upon these two men and\r
the woman. They did not know how to do anything, and as the days went\r
by it became apparent that they could not learn. They were slack in all\r
things, without order or discipline. It took them half the night to\r
pitch a slovenly camp, and half the morning to break that camp and get\r
the sled loaded in fashion so slovenly that for the rest of the day\r
they were occupied in stopping and rearranging the load. Some days they\r
did not make ten miles. On other days they were unable to get started\r
at all. And on no day did they succeed in making more than half the\r
distance used by the men as a basis in their dog-food computation.\r
\r
It was inevitable that they should go short on dog-food. But they\r
hastened it by overfeeding, bringing the day nearer when underfeeding\r
would commence. The Outside dogs, whose digestions had not been trained\r
by chronic famine to make the most of little, had voracious appetites.\r
And when, in addition to this, the worn-out huskies pulled weakly, Hal\r
decided that the orthodox ration was too small. He doubled it. And to\r
cap it all, when Mercedes, with tears in her pretty eyes and a quaver\r
in her throat, could not cajole him into giving the dogs still more,\r
she stole from the fish-sacks and fed them slyly. But it was not food\r
that Buck and the huskies needed, but rest. And though they were making\r
poor time, the heavy load they dragged sapped their strength severely.\r
\r
Then came the underfeeding. Hal awoke one day to the fact that his\r
dog-food was half gone and the distance only quarter covered; further,\r
that for love or money no additional dog-food was to be obtained. So he\r
cut down even the orthodox ration and tried to increase the day’s\r
travel. His sister and brother-in-law seconded him; but they were\r
frustrated by their heavy outfit and their own incompetence. It was a\r
simple matter to give the dogs less food; but it was impossible to make\r
the dogs travel faster, while their own inability to get under way\r
earlier in the morning prevented them from travelling longer hours. Not\r
only did they not know how to work dogs, but they did not know how to\r
work themselves.\r
\r
The first to go was Dub. Poor blundering thief that he was, always\r
getting caught and punished, he had none the less been a faithful\r
worker. His wrenched shoulder-blade, untreated and unrested, went from\r
bad to worse, till finally Hal shot him with the big Colt’s revolver.\r
It is a saying of the country that an Outside dog starves to death on\r
the ration of the husky, so the six Outside dogs under Buck could do no\r
less than die on half the ration of the husky. The Newfoundland went\r
first, followed by the three short-haired pointers, the two mongrels\r
hanging more grittily on to life, but going in the end.\r
\r
By this time all the amenities and gentlenesses of the Southland had\r
fallen away from the three people. Shorn of its glamour and romance,\r
Arctic travel became to them a reality too harsh for their manhood and\r
womanhood. Mercedes ceased weeping over the dogs, being too occupied\r
with weeping over herself and with quarrelling with her husband and\r
brother. To quarrel was the one thing they were never too weary to do.\r
Their irritability arose out of their misery, increased with it,\r
doubled upon it, outdistanced it. The wonderful patience of the trail\r
which comes to men who toil hard and suffer sore, and remain sweet of\r
speech and kindly, did not come to these two men and the woman. They\r
had no inkling of such a patience. They were stiff and in pain; their\r
muscles ached, their bones ached, their very hearts ached; and because\r
of this they became sharp of speech, and hard words were first on their\r
lips in the morning and last at night.\r
\r
Charles and Hal wrangled whenever Mercedes gave them a chance. It was\r
the cherished belief of each that he did more than his share of the\r
work, and neither forbore to speak this belief at every opportunity.\r
Sometimes Mercedes sided with her husband, sometimes with her brother.\r
The result was a beautiful and unending family quarrel. Starting from a\r
dispute as to which should chop a few sticks for the fire (a dispute\r
which concerned only Charles and Hal), presently would be lugged in the\r
rest of the family, fathers, mothers, uncles, cousins, people thousands\r
of miles away, and some of them dead. That Hal’s views on art, or the\r
sort of society plays his mother’s brother wrote, should have anything\r
to do with the chopping of a few sticks of firewood, passes\r
comprehension; nevertheless the quarrel was as likely to tend in that\r
direction as in the direction of Charles’s political prejudices. And\r
that Charles’s sister’s tale-bearing tongue should be relevant to the\r
building of a Yukon fire, was apparent only to Mercedes, who\r
disburdened herself of copious opinions upon that topic, and\r
incidentally upon a few other traits unpleasantly peculiar to her\r
husband’s family. In the meantime the fire remained unbuilt, the camp\r
half pitched, and the dogs unfed.\r
\r
Mercedes nursed a special grievance—the grievance of sex. She was\r
pretty and soft, and had been chivalrously treated all her days. But\r
the present treatment by her husband and brother was everything save\r
chivalrous. It was her custom to be helpless. They complained. Upon\r
which impeachment of what to her was her most essential\r
sex-prerogative, she made their lives unendurable. She no longer\r
considered the dogs, and because she was sore and tired, she persisted\r
in riding on the sled. She was pretty and soft, but she weighed one\r
hundred and twenty pounds—a lusty last straw to the load dragged by the\r
weak and starving animals. She rode for days, till they fell in the\r
traces and the sled stood still. Charles and Hal begged her to get off\r
and walk, pleaded with her, entreated, the while she wept and\r
importuned Heaven with a recital of their brutality.\r
\r
On one occasion they took her off the sled by main strength. They never\r
did it again. She let her legs go limp like a spoiled child, and sat\r
down on the trail. They went on their way, but she did not move. After\r
they had travelled three miles they unloaded the sled, came back for\r
her, and by main strength put her on the sled again.\r
\r
In the excess of their own misery they were callous to the suffering of\r
their animals. Hal’s theory, which he practised on others, was that one\r
must get hardened. He had started out preaching it to his sister and\r
brother-in-law. Failing there, he hammered it into the dogs with a\r
club. At the Five Fingers the dog-food gave out, and a toothless old\r
squaw offered to trade them a few pounds of frozen horse-hide for the\r
Colt’s revolver that kept the big hunting-knife company at Hal’s hip. A\r
poor substitute for food was this hide, just as it had been stripped\r
from the starved horses of the cattlemen six months back. In its frozen\r
state it was more like strips of galvanized iron, and when a dog\r
wrestled it into his stomach it thawed into thin and innutritious\r
leathery strings and into a mass of short hair, irritating and\r
indigestible.\r
\r
And through it all Buck staggered along at the head of the team as in a\r
nightmare. He pulled when he could; when he could no longer pull, he\r
fell down and remained down till blows from whip or club drove him to\r
his feet again. All the stiffness and gloss had gone out of his\r
beautiful furry coat. The hair hung down, limp and draggled, or matted\r
with dried blood where Hal’s club had bruised him. His muscles had\r
wasted away to knotty strings, and the flesh pads had disappeared, so\r
that each rib and every bone in his frame were outlined cleanly through\r
the loose hide that was wrinkled in folds of emptiness. It was\r
heartbreaking, only Buck’s heart was unbreakable. The man in the red\r
sweater had proved that.\r
\r
As it was with Buck, so was it with his mates. They were perambulating\r
skeletons. There were seven all together, including him. In their very\r
great misery they had become insensible to the bite of the lash or the\r
bruise of the club. The pain of the beating was dull and distant, just\r
as the things their eyes saw and their ears heard seemed dull and\r
distant. They were not half living, or quarter living. They were simply\r
so many bags of bones in which sparks of life fluttered faintly. When a\r
halt was made, they dropped down in the traces like dead dogs, and the\r
spark dimmed and paled and seemed to go out. And when the club or whip\r
fell upon them, the spark fluttered feebly up, and they tottered to\r
their feet and staggered on.\r
\r
There came a day when Billee, the good-natured, fell and could not\r
rise. Hal had traded off his revolver, so he took the axe and knocked\r
Billee on the head as he lay in the traces, then cut the carcass out of\r
the harness and dragged it to one side. Buck saw, and his mates saw,\r
and they knew that this thing was very close to them. On the next day\r
Koona went, and but five of them remained: Joe, too far gone to be\r
malignant; Pike, crippled and limping, only half conscious and not\r
conscious enough longer to malinger; Sol-leks, the one-eyed, still\r
faithful to the toil of trace and trail, and mournful in that he had so\r
little strength with which to pull; Teek, who had not travelled so far\r
that winter and who was now beaten more than the others because he was\r
fresher; and Buck, still at the head of the team, but no longer\r
enforcing discipline or striving to enforce it, blind with weakness\r
half the time and keeping the trail by the loom of it and by the dim\r
feel of his feet.\r
\r
It was beautiful spring weather, but neither dogs nor humans were aware\r
of it. Each day the sun rose earlier and set later. It was dawn by\r
three in the morning, and twilight lingered till nine at night. The\r
whole long day was a blaze of sunshine. The ghostly winter silence had\r
given way to the great spring murmur of awakening life. This murmur\r
arose from all the land, fraught with the joy of living. It came from\r
the things that lived and moved again, things which had been as dead\r
and which had not moved during the long months of frost. The sap was\r
rising in the pines. The willows and aspens were bursting out in young\r
buds. Shrubs and vines were putting on fresh garbs of green. Crickets\r
sang in the nights, and in the days all manner of creeping, crawling\r
things rustled forth into the sun. Partridges and woodpeckers were\r
booming and knocking in the forest. Squirrels were chattering, birds\r
singing, and overhead honked the wild-fowl driving up from the south in\r
cunning wedges that split the air.\r
\r
From every hill slope came the trickle of running water, the music of\r
unseen fountains. All things were thawing, bending, snapping. The Yukon\r
was straining to break loose the ice that bound it down. It ate away\r
from beneath; the sun ate from above. Air-holes formed, fissures sprang\r
and spread apart, while thin sections of ice fell through bodily into\r
the river. And amid all this bursting, rending, throbbing of awakening\r
life, under the blazing sun and through the soft-sighing breezes, like\r
wayfarers to death, staggered the two men, the woman, and the huskies.\r
\r
With the dogs falling, Mercedes weeping and riding, Hal swearing\r
innocuously, and Charles’s eyes wistfully watering, they staggered into\r
John Thornton’s camp at the mouth of White River. When they halted, the\r
dogs dropped down as though they had all been struck dead. Mercedes\r
dried her eyes and looked at John Thornton. Charles sat down on a log\r
to rest. He sat down very slowly and painstakingly what of his great\r
stiffness. Hal did the talking. John Thornton was whittling the last\r
touches on an axe-handle he had made from a stick of birch. He whittled\r
and listened, gave monosyllabic replies, and, when it was asked, terse\r
advice. He knew the breed, and he gave his advice in the certainty that\r
it would not be followed.\r
\r
“They told us up above that the bottom was dropping out of the trail\r
and that the best thing for us to do was to lay over,” Hal said in\r
response to Thornton’s warning to take no more chances on the rotten\r
ice. “They told us we couldn’t make White River, and here we are.” This\r
last with a sneering ring of triumph in it.\r
\r
“And they told you true,” John Thornton answered. “The bottom’s likely\r
to drop out at any moment. Only fools, with the blind luck of fools,\r
could have made it. I tell you straight, I wouldn’t risk my carcass on\r
that ice for all the gold in Alaska.”\r
\r
“That’s because you’re not a fool, I suppose,” said Hal. “All the same,\r
we’ll go on to Dawson.” He uncoiled his whip. “Get up there, Buck! Hi!\r
Get up there! Mush on!”\r
\r
Thornton went on whittling. It was idle, he knew, to get between a fool\r
and his folly; while two or three fools more or less would not alter\r
the scheme of things.\r
\r
But the team did not get up at the command. It had long since passed\r
into the stage where blows were required to rouse it. The whip flashed\r
out, here and there, on its merciless errands. John Thornton compressed\r
his lips. Sol-leks was the first to crawl to his feet. Teek followed.\r
Joe came next, yelping with pain. Pike made painful efforts. Twice he\r
fell over, when half up, and on the third attempt managed to rise. Buck\r
made no effort. He lay quietly where he had fallen. The lash bit into\r
him again and again, but he neither whined nor struggled. Several times\r
Thornton started, as though to speak, but changed his mind. A moisture\r
came into his eyes, and, as the whipping continued, he arose and walked\r
irresolutely up and down.\r
\r
This was the first time Buck had failed, in itself a sufficient reason\r
to drive Hal into a rage. He exchanged the whip for the customary club.\r
Buck refused to move under the rain of heavier blows which now fell\r
upon him. Like his mates, he was barely able to get up, but, unlike\r
them, he had made up his mind not to get up. He had a vague feeling of\r
impending doom. This had been strong upon him when he pulled in to the\r
bank, and it had not departed from him. What of the thin and rotten ice\r
he had felt under his feet all day, it seemed that he sensed disaster\r
close at hand, out there ahead on the ice where his master was trying\r
to drive him. He refused to stir. So greatly had he suffered, and so\r
far gone was he, that the blows did not hurt much. And as they\r
continued to fall upon him, the spark of life within flickered and went\r
down. It was nearly out. He felt strangely numb. As though from a great\r
distance, he was aware that he was being beaten. The last sensations of\r
pain left him. He no longer felt anything, though very faintly he could\r
hear the impact of the club upon his body. But it was no longer his\r
body, it seemed so far away.\r
\r
And then, suddenly, without warning, uttering a cry that was\r
inarticulate and more like the cry of an animal, John Thornton sprang\r
upon the man who wielded the club. Hal was hurled backward, as though\r
struck by a falling tree. Mercedes screamed. Charles looked on\r
wistfully, wiped his watery eyes, but did not get up because of his\r
stiffness.\r
\r
John Thornton stood over Buck, struggling to control himself, too\r
convulsed with rage to speak.\r
\r
“If you strike that dog again, I’ll kill you,” he at last managed to\r
say in a choking voice.\r
\r
“It’s my dog,” Hal replied, wiping the blood from his mouth as he came\r
back. “Get out of my way, or I’ll fix you. I’m going to Dawson.”\r
\r
Thornton stood between him and Buck, and evinced no intention of\r
getting out of the way. Hal drew his long hunting-knife. Mercedes\r
screamed, cried, laughed, and manifested the chaotic abandonment of\r
hysteria. Thornton rapped Hal’s knuckles with the axe-handle, knocking\r
the knife to the ground. He rapped his knuckles again as he tried to\r
pick it up. Then he stooped, picked it up himself, and with two strokes\r
cut Buck’s traces.\r
\r
Hal had no fight left in him. Besides, his hands were full with his\r
sister, or his arms, rather; while Buck was too near dead to be of\r
further use in hauling the sled. A few minutes later they pulled out\r
from the bank and down the river. Buck heard them go and raised his\r
head to see, Pike was leading, Sol-leks was at the wheel, and between\r
were Joe and Teek. They were limping and staggering. Mercedes was\r
riding the loaded sled. Hal guided at the gee-pole, and Charles\r
stumbled along in the rear.\r
\r
As Buck watched them, Thornton knelt beside him and with rough, kindly\r
hands searched for broken bones. By the time his search had disclosed\r
nothing more than many bruises and a state of terrible starvation, the\r
sled was a quarter of a mile away. Dog and man watched it crawling\r
along over the ice. Suddenly, they saw its back end drop down, as into\r
a rut, and the gee-pole, with Hal clinging to it, jerk into the air.\r
Mercedes’s scream came to their ears. They saw Charles turn and make\r
one step to run back, and then a whole section of ice give way and dogs\r
and humans disappear. A yawning hole was all that was to be seen. The\r
bottom had dropped out of the trail.\r
\r
John Thornton and Buck looked at each other.\r
\r
“You poor devil,” said John Thornton, and Buck licked his hand.\r
\r
\r
\r
\r
Chapter VI. For the Love of a Man\r
\r
\r
When John Thornton froze his feet in the previous December his partners\r
had made him comfortable and left him to get well, going on themselves\r
up the river to get out a raft of saw-logs for Dawson. He was still\r
limping slightly at the time he rescued Buck, but with the continued\r
warm weather even the slight limp left him. And here, lying by the\r
river bank through the long spring days, watching the running water,\r
listening lazily to the songs of birds and the hum of nature, Buck\r
slowly won back his strength.\r
\r
A rest comes very good after one has travelled three thousand miles,\r
and it must be confessed that Buck waxed lazy as his wounds healed, his\r
muscles swelled out, and the flesh came back to cover his bones. For\r
that matter, they were all loafing,—Buck, John Thornton, and Skeet and\r
Nig,—waiting for the raft to come that was to carry them down to\r
Dawson. Skeet was a little Irish setter who early made friends with\r
Buck, who, in a dying condition, was unable to resent her first\r
advances. She had the doctor trait which some dogs possess; and as a\r
mother cat washes her kittens, so she washed and cleansed Buck’s\r
wounds. Regularly, each morning after he had finished his breakfast,\r
she performed her self-appointed task, till he came to look for her\r
ministrations as much as he did for Thornton’s. Nig, equally friendly,\r
though less demonstrative, was a huge black dog, half bloodhound and\r
half deerhound, with eyes that laughed and a boundless good nature.\r
\r
To Buck’s surprise these dogs manifested no jealousy toward him. They\r
seemed to share the kindliness and largeness of John Thornton. As Buck\r
grew stronger they enticed him into all sorts of ridiculous games, in\r
which Thornton himself could not forbear to join; and in this fashion\r
Buck romped through his convalescence and into a new existence. Love,\r
genuine passionate love, was his for the first time. This he had never\r
experienced at Judge Miller’s down in the sun-kissed Santa Clara\r
Valley. With the Judge’s sons, hunting and tramping, it had been a\r
working partnership; with the Judge’s grandsons, a sort of pompous\r
guardianship; and with the Judge himself, a stately and dignified\r
friendship. But love that was feverish and burning, that was adoration,\r
that was madness, it had taken John Thornton to arouse.\r
\r
This man had saved his life, which was something; but, further, he was\r
the ideal master. Other men saw to the welfare of their dogs from a\r
sense of duty and business expediency; he saw to the welfare of his as\r
if they were his own children, because he could not help it. And he saw\r
further. He never forgot a kindly greeting or a cheering word, and to\r
sit down for a long talk with them (“gas” he called it) was as much his\r
delight as theirs. He had a way of taking Buck’s head roughly between\r
his hands, and resting his own head upon Buck’s, of shaking him back\r
and forth, the while calling him ill names that to Buck were love\r
names. Buck knew no greater joy than that rough embrace and the sound\r
of murmured oaths, and at each jerk back and forth it seemed that his\r
heart would be shaken out of his body so great was its ecstasy. And\r
when, released, he sprang to his feet, his mouth laughing, his eyes\r
eloquent, his throat vibrant with unuttered sound, and in that fashion\r
remained without movement, John Thornton would reverently exclaim,\r
“God! you can all but speak!”\r
\r
Buck had a trick of love expression that was akin to hurt. He would\r
often seize Thornton’s hand in his mouth and close so fiercely that the\r
flesh bore the impress of his teeth for some time afterward. And as\r
Buck understood the oaths to be love words, so the man understood this\r
feigned bite for a caress.\r
\r
For the most part, however, Buck’s love was expressed in adoration.\r
While he went wild with happiness when Thornton touched him or spoke to\r
him, he did not seek these tokens. Unlike Skeet, who was wont to shove\r
her nose under Thornton’s hand and nudge and nudge till petted, or Nig,\r
who would stalk up and rest his great head on Thornton’s knee, Buck was\r
content to adore at a distance. He would lie by the hour, eager, alert,\r
at Thornton’s feet, looking up into his face, dwelling upon it,\r
studying it, following with keenest interest each fleeting expression,\r
every movement or change of feature. Or, as chance might have it, he\r
would lie farther away, to the side or rear, watching the outlines of\r
the man and the occasional movements of his body. And often, such was\r
the communion in which they lived, the strength of Buck’s gaze would\r
draw John Thornton’s head around, and he would return the gaze, without\r
speech, his heart shining out of his eyes as Buck’s heart shone out.\r
\r
For a long time after his rescue, Buck did not like Thornton to get out\r
of his sight. From the moment he left the tent to when he entered it\r
again, Buck would follow at his heels. His transient masters since he\r
had come into the Northland had bred in him a fear that no master could\r
be permanent. He was afraid that Thornton would pass out of his life as\r
Perrault and François and the Scotch half-breed had passed out. Even in\r
the night, in his dreams, he was haunted by this fear. At such times he\r
would shake off sleep and creep through the chill to the flap of the\r
tent, where he would stand and listen to the sound of his master’s\r
breathing.\r
\r
But in spite of this great love he bore John Thornton, which seemed to\r
bespeak the soft civilizing influence, the strain of the primitive,\r
which the Northland had aroused in him, remained alive and active.\r
Faithfulness and devotion, things born of fire and roof, were his; yet\r
he retained his wildness and wiliness. He was a thing of the wild, come\r
in from the wild to sit by John Thornton’s fire, rather than a dog of\r
the soft Southland stamped with the marks of generations of\r
civilization. Because of his very great love, he could not steal from\r
this man, but from any other man, in any other camp, he did not\r
hesitate an instant; while the cunning with which he stole enabled him\r
to escape detection.\r
\r
His face and body were scored by the teeth of many dogs, and he fought\r
as fiercely as ever and more shrewdly. Skeet and Nig were too\r
good-natured for quarrelling,—besides, they belonged to John Thornton;\r
but the strange dog, no matter what the breed or valor, swiftly\r
acknowledged Buck’s supremacy or found himself struggling for life with\r
a terrible antagonist. And Buck was merciless. He had learned well the\r
law of club and fang, and he never forewent an advantage or drew back\r
from a foe he had started on the way to Death. He had lessoned from\r
Spitz, and from the chief fighting dogs of the police and mail, and\r
knew there was no middle course. He must master or be mastered; while\r
to show mercy was a weakness. Mercy did not exist in the primordial\r
life. It was misunderstood for fear, and such misunderstandings made\r
for death. Kill or be killed, eat or be eaten, was the law; and this\r
mandate, down out of the depths of Time, he obeyed.\r
\r
He was older than the days he had seen and the breaths he had drawn. He\r
linked the past with the present, and the eternity behind him throbbed\r
through him in a mighty rhythm to which he swayed as the tides and\r
seasons swayed. He sat by John Thornton’s fire, a broad-breasted dog,\r
white-fanged and long-furred; but behind him were the shades of all\r
manner of dogs, half-wolves and wild wolves, urgent and prompting,\r
tasting the savor of the meat he ate, thirsting for the water he drank,\r
scenting the wind with him, listening with him and telling him the\r
sounds made by the wild life in the forest, dictating his moods,\r
directing his actions, lying down to sleep with him when he lay down,\r
and dreaming with him and beyond him and becoming themselves the stuff\r
of his dreams.\r
\r
So peremptorily did these shades beckon him, that each day mankind and\r
the claims of mankind slipped farther from him. Deep in the forest a\r
call was sounding, and as often as he heard this call, mysteriously\r
thrilling and luring, he felt compelled to turn his back upon the fire\r
and the beaten earth around it, and to plunge into the forest, and on\r
and on, he knew not where or why; nor did he wonder where or why, the\r
call sounding imperiously, deep in the forest. But as often as he\r
gained the soft unbroken earth and the green shade, the love for John\r
Thornton drew him back to the fire again.\r
\r
Thornton alone held him. The rest of mankind was as nothing. Chance\r
travellers might praise or pet him; but he was cold under it all, and\r
from a too demonstrative man he would get up and walk away. When\r
Thornton’s partners, Hans and Pete, arrived on the long-expected raft,\r
Buck refused to notice them till he learned they were close to\r
Thornton; after that he tolerated them in a passive sort of way,\r
accepting favors from them as though he favored them by accepting. They\r
were of the same large type as Thornton, living close to the earth,\r
thinking simply and seeing clearly; and ere they swung the raft into\r
the big eddy by the saw-mill at Dawson, they understood Buck and his\r
ways, and did not insist upon an intimacy such as obtained with Skeet\r
and Nig.\r
\r
For Thornton, however, his love seemed to grow and grow. He, alone\r
among men, could put a pack upon Buck’s back in the summer travelling.\r
Nothing was too great for Buck to do, when Thornton commanded. One day\r
(they had grub-staked themselves from the proceeds of the raft and left\r
Dawson for the head-waters of the Tanana) the men and dogs were sitting\r
on the crest of a cliff which fell away, straight down, to naked\r
bed-rock three hundred feet below. John Thornton was sitting near the\r
edge, Buck at his shoulder. A thoughtless whim seized Thornton, and he\r
drew the attention of Hans and Pete to the experiment he had in mind.\r
“Jump, Buck!” he commanded, sweeping his arm out and over the chasm.\r
The next instant he was grappling with Buck on the extreme edge, while\r
Hans and Pete were dragging them back into safety.\r
\r
“It’s uncanny,” Pete said, after it was over and they had caught their\r
speech.\r
\r
Thornton shook his head. “No, it is splendid, and it is terrible, too.\r
Do you know, it sometimes makes me afraid.”\r
\r
“I’m not hankering to be the man that lays hands on you while he’s\r
around,” Pete announced conclusively, nodding his head toward Buck.\r
\r
“Py Jingo!” was Hans’s contribution. “Not mineself either.”\r
\r
It was at Circle City, ere the year was out, that Pete’s apprehensions\r
were realized. “Black” Burton, a man evil-tempered and malicious, had\r
been picking a quarrel with a tenderfoot at the bar, when Thornton\r
stepped good-naturedly between. Buck, as was his custom, was lying in a\r
corner, head on paws, watching his master’s every action. Burton struck\r
out, without warning, straight from the shoulder. Thornton was sent\r
spinning, and saved himself from falling only by clutching the rail of\r
the bar.\r
\r
Those who were looking on heard what was neither bark nor yelp, but a\r
something which is best described as a roar, and they saw Buck’s body\r
rise up in the air as he left the floor for Burton’s throat. The man\r
saved his life by instinctively throwing out his arm, but was hurled\r
backward to the floor with Buck on top of him. Buck loosed his teeth\r
from the flesh of the arm and drove in again for the throat. This time\r
the man succeeded only in partly blocking, and his throat was torn\r
open. Then the crowd was upon Buck, and he was driven off; but while a\r
surgeon checked the bleeding, he prowled up and down, growling\r
furiously, attempting to rush in, and being forced back by an array of\r
hostile clubs. A “miners’ meeting,” called on the spot, decided that\r
the dog had sufficient provocation, and Buck was discharged. But his\r
reputation was made, and from that day his name spread through every\r
camp in Alaska.\r
\r
Later on, in the fall of the year, he saved John Thornton’s life in\r
quite another fashion. The three partners were lining a long and narrow\r
poling-boat down a bad stretch of rapids on the Forty-Mile Creek. Hans\r
and Pete moved along the bank, snubbing with a thin Manila rope from\r
tree to tree, while Thornton remained in the boat, helping its descent\r
by means of a pole, and shouting directions to the shore. Buck, on the\r
bank, worried and anxious, kept abreast of the boat, his eyes never off\r
his master.\r
\r
At a particularly bad spot, where a ledge of barely submerged rocks\r
jutted out into the river, Hans cast off the rope, and, while Thornton\r
poled the boat out into the stream, ran down the bank with the end in\r
his hand to snub the boat when it had cleared the ledge. This it did,\r
and was flying down-stream in a current as swift as a mill-race, when\r
Hans checked it with the rope and checked too suddenly. The boat\r
flirted over and snubbed in to the bank bottom up, while Thornton,\r
flung sheer out of it, was carried down-stream toward the worst part of\r
the rapids, a stretch of wild water in which no swimmer could live.\r
\r
Buck had sprung in on the instant; and at the end of three hundred\r
yards, amid a mad swirl of water, he overhauled Thornton. When he felt\r
him grasp his tail, Buck headed for the bank, swimming with all his\r
splendid strength. But the progress shoreward was slow; the progress\r
down-stream amazingly rapid. From below came the fatal roaring where\r
the wild current went wilder and was rent in shreds and spray by the\r
rocks which thrust through like the teeth of an enormous comb. The suck\r
of the water as it took the beginning of the last steep pitch was\r
frightful, and Thornton knew that the shore was impossible. He scraped\r
furiously over a rock, bruised across a second, and struck a third with\r
crushing force. He clutched its slippery top with both hands, releasing\r
Buck, and above the roar of the churning water shouted: “Go, Buck! Go!”\r
\r
Buck could not hold his own, and swept on down-stream, struggling\r
desperately, but unable to win back. When he heard Thornton’s command\r
repeated, he partly reared out of the water, throwing his head high, as\r
though for a last look, then turned obediently toward the bank. He swam\r
powerfully and was dragged ashore by Pete and Hans at the very point\r
where swimming ceased to be possible and destruction began.\r
\r
They knew that the time a man could cling to a slippery rock in the\r
face of that driving current was a matter of minutes, and they ran as\r
fast as they could up the bank to a point far above where Thornton was\r
hanging on. They attached the line with which they had been snubbing\r
the boat to Buck’s neck and shoulders, being careful that it should\r
neither strangle him nor impede his swimming, and launched him into the\r
stream. He struck out boldly, but not straight enough into the stream.\r
He discovered the mistake too late, when Thornton was abreast of him\r
and a bare half-dozen strokes away while he was being carried\r
helplessly past.\r
\r
Hans promptly snubbed with the rope, as though Buck were a boat. The\r
rope thus tightening on him in the sweep of the current, he was jerked\r
under the surface, and under the surface he remained till his body\r
struck against the bank and he was hauled out. He was half drowned, and\r
Hans and Pete threw themselves upon him, pounding the breath into him\r
and the water out of him. He staggered to his feet and fell down. The\r
faint sound of Thornton’s voice came to them, and though they could not\r
make out the words of it, they knew that he was in his extremity. His\r
master’s voice acted on Buck like an electric shock. He sprang to his\r
feet and ran up the bank ahead of the men to the point of his previous\r
departure.\r
\r
Again the rope was attached and he was launched, and again he struck\r
out, but this time straight into the stream. He had miscalculated once,\r
but he would not be guilty of it a second time. Hans paid out the rope,\r
permitting no slack, while Pete kept it clear of coils. Buck held on\r
till he was on a line straight above Thornton; then he turned, and with\r
the speed of an express train headed down upon him. Thornton saw him\r
coming, and, as Buck struck him like a battering ram, with the whole\r
force of the current behind him, he reached up and closed with both\r
arms around the shaggy neck. Hans snubbed the rope around the tree, and\r
Buck and Thornton were jerked under the water. Strangling, suffocating,\r
sometimes one uppermost and sometimes the other, dragging over the\r
jagged bottom, smashing against rocks and snags, they veered in to the\r
bank.\r
\r
Thornton came to, belly downward and being violently propelled back and\r
forth across a drift log by Hans and Pete. His first glance was for\r
Buck, over whose limp and apparently lifeless body Nig was setting up a\r
howl, while Skeet was licking the wet face and closed eyes. Thornton\r
was himself bruised and battered, and he went carefully over Buck’s\r
body, when he had been brought around, finding three broken ribs.\r
\r
“That settles it,” he announced. “We camp right here.” And camp they\r
did, till Buck’s ribs knitted and he was able to travel.\r
\r
That winter, at Dawson, Buck performed another exploit, not so heroic,\r
perhaps, but one that put his name many notches higher on the\r
totem-pole of Alaskan fame. This exploit was particularly gratifying to\r
the three men; for they stood in need of the outfit which it furnished,\r
and were enabled to make a long-desired trip into the virgin East,\r
where miners had not yet appeared. It was brought about by a\r
conversation in the Eldorado Saloon, in which men waxed boastful of\r
their favorite dogs. Buck, because of his record, was the target for\r
these men, and Thornton was driven stoutly to defend him. At the end of\r
half an hour one man stated that his dog could start a sled with five\r
hundred pounds and walk off with it; a second bragged six hundred for\r
his dog; and a third, seven hundred.\r
\r
“Pooh! pooh!” said John Thornton; “Buck can start a thousand pounds.”\r
\r
“And break it out? and walk off with it for a hundred yards?” demanded\r
Matthewson, a Bonanza King, he of the seven hundred vaunt.\r
\r
“And break it out, and walk off with it for a hundred yards,” John\r
Thornton said coolly.\r
\r
“Well,” Matthewson said, slowly and deliberately, so that all could\r
hear, “I’ve got a thousand dollars that says he can’t. And there it\r
is.” So saying, he slammed a sack of gold dust of the size of a bologna\r
sausage down upon the bar.\r
\r
Nobody spoke. Thornton’s bluff, if bluff it was, had been called. He\r
could feel a flush of warm blood creeping up his face. His tongue had\r
tricked him. He did not know whether Buck could start a thousand\r
pounds. Half a ton! The enormousness of it appalled him. He had great\r
faith in Buck’s strength and had often thought him capable of starting\r
such a load; but never, as now, had he faced the possibility of it, the\r
eyes of a dozen men fixed upon him, silent and waiting. Further, he had\r
no thousand dollars; nor had Hans or Pete.\r
\r
“I’ve got a sled standing outside now, with twenty fiftypound sacks of\r
flour on it,” Matthewson went on with brutal directness; “so don’t let\r
that hinder you.”\r
\r
Thornton did not reply. He did not know what to say. He glanced from\r
face to face in the absent way of a man who has lost the power of\r
thought and is seeking somewhere to find the thing that will start it\r
going again. The face of Jim O’Brien, a Mastodon King and old-time\r
comrade, caught his eyes. It was as a cue to him, seeming to rouse him\r
to do what he would never have dreamed of doing.\r
\r
“Can you lend me a thousand?” he asked, almost in a whisper.\r
\r
“Sure,” answered O’Brien, thumping down a plethoric sack by the side of\r
Matthewson’s. “Though it’s little faith I’m having, John, that the\r
beast can do the trick.”\r
\r
The Eldorado emptied its occupants into the street to see the test. The\r
tables were deserted, and the dealers and gamekeepers came forth to see\r
the outcome of the wager and to lay odds. Several hundred men, furred\r
and mittened, banked around the sled within easy distance. Matthewson’s\r
sled, loaded with a thousand pounds of flour, had been standing for a\r
couple of hours, and in the intense cold (it was sixty below zero) the\r
runners had frozen fast to the hard-packed snow. Men offered odds of\r
two to one that Buck could not budge the sled. A quibble arose\r
concerning the phrase “break out.” O’Brien contended it was Thornton’s\r
privilege to knock the runners loose, leaving Buck to “break it out”\r
from a dead standstill. Matthewson insisted that the phrase included\r
breaking the runners from the frozen grip of the snow. A majority of\r
the men who had witnessed the making of the bet decided in his favor,\r
whereat the odds went up to three to one against Buck.\r
\r
There were no takers. Not a man believed him capable of the feat.\r
Thornton had been hurried into the wager, heavy with doubt; and now\r
that he looked at the sled itself, the concrete fact, with the regular\r
team of ten dogs curled up in the snow before it, the more impossible\r
the task appeared. Matthewson waxed jubilant.\r
\r
“Three to one!” he proclaimed. “I’ll lay you another thousand at that\r
figure, Thornton. What d’ye say?”\r
\r
Thornton’s doubt was strong in his face, but his fighting spirit was\r
aroused—the fighting spirit that soars above odds, fails to recognize\r
the impossible, and is deaf to all save the clamor for battle. He\r
called Hans and Pete to him. Their sacks were slim, and with his own\r
the three partners could rake together only two hundred dollars. In the\r
ebb of their fortunes, this sum was their total capital; yet they laid\r
it unhesitatingly against Matthewson’s six hundred.\r
\r
The team of ten dogs was unhitched, and Buck, with his own harness, was\r
put into the sled. He had caught the contagion of the excitement, and\r
he felt that in some way he must do a great thing for John Thornton.\r
Murmurs of admiration at his splendid appearance went up. He was in\r
perfect condition, without an ounce of superfluous flesh, and the one\r
hundred and fifty pounds that he weighed were so many pounds of grit\r
and virility. His furry coat shone with the sheen of silk. Down the\r
neck and across the shoulders, his mane, in repose as it was, half\r
bristled and seemed to lift with every movement, as though excess of\r
vigor made each particular hair alive and active. The great breast and\r
heavy fore legs were no more than in proportion with the rest of the\r
body, where the muscles showed in tight rolls underneath the skin. Men\r
felt these muscles and proclaimed them hard as iron, and the odds went\r
down to two to one.\r
\r
“Gad, sir! Gad, sir!” stuttered a member of the latest dynasty, a king\r
of the Skookum Benches. “I offer you eight hundred for him, sir, before\r
the test, sir; eight hundred just as he stands.”\r
\r
Thornton shook his head and stepped to Buck’s side.\r
\r
“You must stand off from him,” Matthewson protested. “Free play and\r
plenty of room.”\r
\r
The crowd fell silent; only could be heard the voices of the gamblers\r
vainly offering two to one. Everybody acknowledged Buck a magnificent\r
animal, but twenty fifty-pound sacks of flour bulked too large in their\r
eyes for them to loosen their pouch-strings.\r
\r
Thornton knelt down by Buck’s side. He took his head in his two hands\r
and rested cheek on cheek. He did not playfully shake him, as was his\r
wont, or murmur soft love curses; but he whispered in his ear. “As you\r
love me, Buck. As you love me,” was what he whispered. Buck whined with\r
suppressed eagerness.\r
\r
The crowd was watching curiously. The affair was growing mysterious. It\r
seemed like a conjuration. As Thornton got to his feet, Buck seized his\r
mittened hand between his jaws, pressing in with his teeth and\r
releasing slowly, half-reluctantly. It was the answer, in terms, not of\r
speech, but of love. Thornton stepped well back.\r
\r
“Now, Buck,” he said.\r
\r
Buck tightened the traces, then slacked them for a matter of several\r
inches. It was the way he had learned.\r
\r
“Gee!” Thornton’s voice rang out, sharp in the tense silence.\r
\r
Buck swung to the right, ending the movement in a plunge that took up\r
the slack and with a sudden jerk arrested his one hundred and fifty\r
pounds. The load quivered, and from under the runners arose a crisp\r
crackling.\r
\r
“Haw!” Thornton commanded.\r
\r
Buck duplicated the manœuvre, this time to the left. The crackling\r
turned into a snapping, the sled pivoting and the runners slipping and\r
grating several inches to the side. The sled was broken out. Men were\r
holding their breaths, intensely unconscious of the fact.\r
\r
“Now, MUSH!”\r
\r
Thornton’s command cracked out like a pistol-shot. Buck threw himself\r
forward, tightening the traces with a jarring lunge. His whole body was\r
gathered compactly together in the tremendous effort, the muscles\r
writhing and knotting like live things under the silky fur. His great\r
chest was low to the ground, his head forward and down, while his feet\r
were flying like mad, the claws scarring the hard-packed snow in\r
parallel grooves. The sled swayed and trembled, half-started forward.\r
One of his feet slipped, and one man groaned aloud. Then the sled\r
lurched ahead in what appeared a rapid succession of jerks, though it\r
never really came to a dead stop again...half an inch...an inch... two\r
inches... The jerks perceptibly diminished; as the sled gained\r
momentum, he caught them up, till it was moving steadily along.\r
\r
Men gasped and began to breathe again, unaware that for a moment they\r
had ceased to breathe. Thornton was running behind, encouraging Buck\r
with short, cheery words. The distance had been measured off, and as he\r
neared the pile of firewood which marked the end of the hundred yards,\r
a cheer began to grow and grow, which burst into a roar as he passed\r
the firewood and halted at command. Every man was tearing himself\r
loose, even Matthewson. Hats and mittens were flying in the air. Men\r
were shaking hands, it did not matter with whom, and bubbling over in a\r
general incoherent babel.\r
\r
But Thornton fell on his knees beside Buck. Head was against head, and\r
he was shaking him back and forth. Those who hurried up heard him\r
cursing Buck, and he cursed him long and fervently, and softly and\r
lovingly.\r
\r
“Gad, sir! Gad, sir!” spluttered the Skookum Bench king. “I’ll give you\r
a thousand for him, sir, a thousand, sir—twelve hundred, sir.”\r
\r
Thornton rose to his feet. His eyes were wet. The tears were streaming\r
frankly down his cheeks. “Sir,” he said to the Skookum Bench king, “no,\r
sir. You can go to hell, sir. It’s the best I can do for you, sir.”\r
\r
Buck seized Thornton’s hand in his teeth. Thornton shook him back and\r
forth. As though animated by a common impulse, the onlookers drew back\r
to a respectful distance; nor were they again indiscreet enough to\r
interrupt.\r
\r
\r
\r
\r
Chapter VII. The Sounding of the Call\r
\r
\r
When Buck earned sixteen hundred dollars in five minutes for John\r
Thornton, he made it possible for his master to pay off certain debts\r
and to journey with his partners into the East after a fabled lost\r
mine, the history of which was as old as the history of the country.\r
Many men had sought it; few had found it; and more than a few there\r
were who had never returned from the quest. This lost mine was steeped\r
in tragedy and shrouded in mystery. No one knew of the first man. The\r
oldest tradition stopped before it got back to him. From the beginning\r
there had been an ancient and ramshackle cabin. Dying men had sworn to\r
it, and to the mine the site of which it marked, clinching their\r
testimony with nuggets that were unlike any known grade of gold in the\r
Northland.\r
\r
But no living man had looted this treasure house, and the dead were\r
dead; wherefore John Thornton and Pete and Hans, with Buck and half a\r
dozen other dogs, faced into the East on an unknown trail to achieve\r
where men and dogs as good as themselves had failed. They sledded\r
seventy miles up the Yukon, swung to the left into the Stewart River,\r
passed the Mayo and the McQuestion, and held on until the Stewart\r
itself became a streamlet, threading the upstanding peaks which marked\r
the backbone of the continent.\r
\r
John Thornton asked little of man or nature. He was unafraid of the\r
wild. With a handful of salt and a rifle he could plunge into the\r
wilderness and fare wherever he pleased and as long as he pleased.\r
Being in no haste, Indian fashion, he hunted his dinner in the course\r
of the day’s travel; and if he failed to find it, like the Indian, he\r
kept on travelling, secure in the knowledge that sooner or later he\r
would come to it. So, on this great journey into the East, straight\r
meat was the bill of fare, ammunition and tools principally made up the\r
load on the sled, and the time-card was drawn upon the limitless\r
future.\r
\r
To Buck it was boundless delight, this hunting, fishing, and indefinite\r
wandering through strange places. For weeks at a time they would hold\r
on steadily, day after day; and for weeks upon end they would camp,\r
here and there, the dogs loafing and the men burning holes through\r
frozen muck and gravel and washing countless pans of dirt by the heat\r
of the fire. Sometimes they went hungry, sometimes they feasted\r
riotously, all according to the abundance of game and the fortune of\r
hunting. Summer arrived, and dogs and men packed on their backs, rafted\r
across blue mountain lakes, and descended or ascended unknown rivers in\r
slender boats whipsawed from the standing forest.\r
\r
The months came and went, and back and forth they twisted through the\r
uncharted vastness, where no men were and yet where men had been if the\r
Lost Cabin were true. They went across divides in summer blizzards,\r
shivered under the midnight sun on naked mountains between the timber\r
line and the eternal snows, dropped into summer valleys amid swarming\r
gnats and flies, and in the shadows of glaciers picked strawberries and\r
flowers as ripe and fair as any the Southland could boast. In the fall\r
of the year they penetrated a weird lake country, sad and silent, where\r
wildfowl had been, but where then there was no life nor sign of\r
life—only the blowing of chill winds, the forming of ice in sheltered\r
places, and the melancholy rippling of waves on lonely beaches.\r
\r
And through another winter they wandered on the obliterated trails of\r
men who had gone before. Once, they came upon a path blazed through the\r
forest, an ancient path, and the Lost Cabin seemed very near. But the\r
path began nowhere and ended nowhere, and it remained mystery, as the\r
man who made it and the reason he made it remained mystery. Another\r
time they chanced upon the time-graven wreckage of a hunting lodge, and\r
amid the shreds of rotted blankets John Thornton found a long-barrelled\r
flint-lock. He knew it for a Hudson Bay Company gun of the young days\r
in the Northwest, when such a gun was worth its height in beaver skins\r
packed flat, And that was all—no hint as to the man who in an early day\r
had reared the lodge and left the gun among the blankets.\r
\r
Spring came on once more, and at the end of all their wandering they\r
found, not the Lost Cabin, but a shallow placer in a broad valley where\r
the gold showed like yellow butter across the bottom of the\r
washing-pan. They sought no farther. Each day they worked earned them\r
thousands of dollars in clean dust and nuggets, and they worked every\r
day. The gold was sacked in moose-hide bags, fifty pounds to the bag,\r
and piled like so much firewood outside the spruce-bough lodge. Like\r
giants they toiled, days flashing on the heels of days like dreams as\r
they heaped the treasure up.\r
\r
There was nothing for the dogs to do, save the hauling in of meat now\r
and again that Thornton killed, and Buck spent long hours musing by the\r
fire. The vision of the short-legged hairy man came to him more\r
frequently, now that there was little work to be done; and often,\r
blinking by the fire, Buck wandered with him in that other world which\r
he remembered.\r
\r
The salient thing of this other world seemed fear. When he watched the\r
hairy man sleeping by the fire, head between his knees and hands\r
clasped above, Buck saw that he slept restlessly, with many starts and\r
awakenings, at which times he would peer fearfully into the darkness\r
and fling more wood upon the fire. Did they walk by the beach of a sea,\r
where the hairy man gathered shellfish and ate them as he gathered, it\r
was with eyes that roved everywhere for hidden danger and with legs\r
prepared to run like the wind at its first appearance. Through the\r
forest they crept noiselessly, Buck at the hairy man’s heels; and they\r
were alert and vigilant, the pair of them, ears twitching and moving\r
and nostrils quivering, for the man heard and smelled as keenly as\r
Buck. The hairy man could spring up into the trees and travel ahead as\r
fast as on the ground, swinging by the arms from limb to limb,\r
sometimes a dozen feet apart, letting go and catching, never falling,\r
never missing his grip. In fact, he seemed as much at home among the\r
trees as on the ground; and Buck had memories of nights of vigil spent\r
beneath trees wherein the hairy man roosted, holding on tightly as he\r
slept.\r
\r
And closely akin to the visions of the hairy man was the call still\r
sounding in the depths of the forest. It filled him with a great unrest\r
and strange desires. It caused him to feel a vague, sweet gladness, and\r
he was aware of wild yearnings and stirrings for he knew not what.\r
Sometimes he pursued the call into the forest, looking for it as though\r
it were a tangible thing, barking softly or defiantly, as the mood\r
might dictate. He would thrust his nose into the cool wood moss, or\r
into the black soil where long grasses grew, and snort with joy at the\r
fat earth smells; or he would crouch for hours, as if in concealment,\r
behind fungus-covered trunks of fallen trees, wide-eyed and wide-eared\r
to all that moved and sounded about him. It might be, lying thus, that\r
he hoped to surprise this call he could not understand. But he did not\r
know why he did these various things. He was impelled to do them, and\r
did not reason about them at all.\r
\r
Irresistible impulses seized him. He would be lying in camp, dozing\r
lazily in the heat of the day, when suddenly his head would lift and\r
his ears cock up, intent and listening, and he would spring to his feet\r
and dash away, and on and on, for hours, through the forest aisles and\r
across the open spaces where the niggerheads bunched. He loved to run\r
down dry watercourses, and to creep and spy upon the bird life in the\r
woods. For a day at a time he would lie in the underbrush where he\r
could watch the partridges drumming and strutting up and down. But\r
especially he loved to run in the dim twilight of the summer midnights,\r
listening to the subdued and sleepy murmurs of the forest, reading\r
signs and sounds as man may read a book, and seeking for the mysterious\r
something that called—called, waking or sleeping, at all times, for him\r
to come.\r
\r
One night he sprang from sleep with a start, eager-eyed, nostrils\r
quivering and scenting, his mane bristling in recurrent waves. From the\r
forest came the call (or one note of it, for the call was many noted),\r
distinct and definite as never before,—a long-drawn howl, like, yet\r
unlike, any noise made by husky dog. And he knew it, in the old\r
familiar way, as a sound heard before. He sprang through the sleeping\r
camp and in swift silence dashed through the woods. As he drew closer\r
to the cry he went more slowly, with caution in every movement, till he\r
came to an open place among the trees, and looking out saw, erect on\r
haunches, with nose pointed to the sky, a long, lean, timber wolf.\r
\r
He had made no noise, yet it ceased from its howling and tried to sense\r
his presence. Buck stalked into the open, half crouching, body gathered\r
compactly together, tail straight and stiff, feet falling with unwonted\r
care. Every movement advertised commingled threatening and overture of\r
friendliness. It was the menacing truce that marks the meeting of wild\r
beasts that prey. But the wolf fled at sight of him. He followed, with\r
wild leapings, in a frenzy to overtake. He ran him into a blind\r
channel, in the bed of the creek where a timber jam barred the way. The\r
wolf whirled about, pivoting on his hind legs after the fashion of Joe\r
and of all cornered husky dogs, snarling and bristling, clipping his\r
teeth together in a continuous and rapid succession of snaps.\r
\r
Buck did not attack, but circled him about and hedged him in with\r
friendly advances. The wolf was suspicious and afraid; for Buck made\r
three of him in weight, while his head barely reached Buck’s shoulder.\r
Watching his chance, he darted away, and the chase was resumed. Time\r
and again he was cornered, and the thing repeated, though he was in\r
poor condition, or Buck could not so easily have overtaken him. He\r
would run till Buck’s head was even with his flank, when he would whirl\r
around at bay, only to dash away again at the first opportunity.\r
\r
But in the end Buck’s pertinacity was rewarded; for the wolf, finding\r
that no harm was intended, finally sniffed noses with him. Then they\r
became friendly, and played about in the nervous, half-coy way with\r
which fierce beasts belie their fierceness. After some time of this the\r
wolf started off at an easy lope in a manner that plainly showed he was\r
going somewhere. He made it clear to Buck that he was to come, and they\r
ran side by side through the sombre twilight, straight up the creek\r
bed, into the gorge from which it issued, and across the bleak divide\r
where it took its rise.\r
\r
On the opposite slope of the watershed they came down into a level\r
country where were great stretches of forest and many streams, and\r
through these great stretches they ran steadily, hour after hour, the\r
sun rising higher and the day growing warmer. Buck was wildly glad. He\r
knew he was at last answering the call, running by the side of his wood\r
brother toward the place from where the call surely came. Old memories\r
were coming upon him fast, and he was stirring to them as of old he\r
stirred to the realities of which they were the shadows. He had done\r
this thing before, somewhere in that other and dimly remembered world,\r
and he was doing it again, now, running free in the open, the unpacked\r
earth underfoot, the wide sky overhead.\r
\r
They stopped by a running stream to drink, and, stopping, Buck\r
remembered John Thornton. He sat down. The wolf started on toward the\r
place from where the call surely came, then returned to him, sniffing\r
noses and making actions as though to encourage him. But Buck turned\r
about and started slowly on the back track. For the better part of an\r
hour the wild brother ran by his side, whining softly. Then he sat\r
down, pointed his nose upward, and howled. It was a mournful howl, and\r
as Buck held steadily on his way he heard it grow faint and fainter\r
until it was lost in the distance.\r
\r
John Thornton was eating dinner when Buck dashed into camp and sprang\r
upon him in a frenzy of affection, overturning him, scrambling upon\r
him, licking his face, biting his hand—“playing the general tom-fool,”\r
as John Thornton characterized it, the while he shook Buck back and\r
forth and cursed him lovingly.\r
\r
For two days and nights Buck never left camp, never let Thornton out of\r
his sight. He followed him about at his work, watched him while he ate,\r
saw him into his blankets at night and out of them in the morning. But\r
after two days the call in the forest began to sound more imperiously\r
than ever. Buck’s restlessness came back on him, and he was haunted by\r
recollections of the wild brother, and of the smiling land beyond the\r
divide and the run side by side through the wide forest stretches. Once\r
again he took to wandering in the woods, but the wild brother came no\r
more; and though he listened through long vigils, the mournful howl was\r
never raised.\r
\r
He began to sleep out at night, staying away from camp for days at a\r
time; and once he crossed the divide at the head of the creek and went\r
down into the land of timber and streams. There he wandered for a week,\r
seeking vainly for fresh sign of the wild brother, killing his meat as\r
he travelled and travelling with the long, easy lope that seems never\r
to tire. He fished for salmon in a broad stream that emptied somewhere\r
into the sea, and by this stream he killed a large black bear, blinded\r
by the mosquitoes while likewise fishing, and raging through the forest\r
helpless and terrible. Even so, it was a hard fight, and it aroused the\r
last latent remnants of Buck’s ferocity. And two days later, when he\r
returned to his kill and found a dozen wolverenes quarrelling over the\r
spoil, he scattered them like chaff; and those that fled left two\r
behind who would quarrel no more.\r
\r
The blood-longing became stronger than ever before. He was a killer, a\r
thing that preyed, living on the things that lived, unaided, alone, by\r
virtue of his own strength and prowess, surviving triumphantly in a\r
hostile environment where only the strong survived. Because of all this\r
he became possessed of a great pride in himself, which communicated\r
itself like a contagion to his physical being. It advertised itself in\r
all his movements, was apparent in the play of every muscle, spoke\r
plainly as speech in the way he carried himself, and made his glorious\r
furry coat if anything more glorious. But for the stray brown on his\r
muzzle and above his eyes, and for the splash of white hair that ran\r
midmost down his chest, he might well have been mistaken for a gigantic\r
wolf, larger than the largest of the breed. From his St. Bernard father\r
he had inherited size and weight, but it was his shepherd mother who\r
had given shape to that size and weight. His muzzle was the long wolf\r
muzzle, save that it was larger than the muzzle of any wolf; and his\r
head, somewhat broader, was the wolf head on a massive scale.\r
\r
His cunning was wolf cunning, and wild cunning; his intelligence,\r
shepherd intelligence and St. Bernard intelligence; and all this, plus\r
an experience gained in the fiercest of schools, made him as formidable\r
a creature as any that roamed the wild. A carnivorous animal living on\r
a straight meat diet, he was in full flower, at the high tide of his\r
life, overspilling with vigor and virility. When Thornton passed a\r
caressing hand along his back, a snapping and crackling followed the\r
hand, each hair discharging its pent magnetism at the contact. Every\r
part, brain and body, nerve tissue and fibre, was keyed to the most\r
exquisite pitch; and between all the parts there was a perfect\r
equilibrium or adjustment. To sights and sounds and events which\r
required action, he responded with lightning-like rapidity. Quickly as\r
a husky dog could leap to defend from attack or to attack, he could\r
leap twice as quickly. He saw the movement, or heard sound, and\r
responded in less time than another dog required to compass the mere\r
seeing or hearing. He perceived and determined and responded in the\r
same instant. In point of fact the three actions of perceiving,\r
determining, and responding were sequential; but so infinitesimal were\r
the intervals of time between them that they appeared simultaneous. His\r
muscles were surcharged with vitality, and snapped into play sharply,\r
like steel springs. Life streamed through him in splendid flood, glad\r
and rampant, until it seemed that it would burst him asunder in sheer\r
ecstasy and pour forth generously over the world.\r
\r
“Never was there such a dog,” said John Thornton one day, as the\r
partners watched Buck marching out of camp.\r
\r
“When he was made, the mould was broke,” said Pete.\r
\r
“Py jingo! I t’ink so mineself,” Hans affirmed.\r
\r
They saw him marching out of camp, but they did not see the instant and\r
terrible transformation which took place as soon as he was within the\r
secrecy of the forest. He no longer marched. At once he became a thing\r
of the wild, stealing along softly, cat-footed, a passing shadow that\r
appeared and disappeared among the shadows. He knew how to take\r
advantage of every cover, to crawl on his belly like a snake, and like\r
a snake to leap and strike. He could take a ptarmigan from its nest,\r
kill a rabbit as it slept, and snap in mid air the little chipmunks\r
fleeing a second too late for the trees. Fish, in open pools, were not\r
too quick for him; nor were beaver, mending their dams, too wary. He\r
killed to eat, not from wantonness; but he preferred to eat what he\r
killed himself. So a lurking humor ran through his deeds, and it was\r
his delight to steal upon the squirrels, and, when he all but had them,\r
to let them go, chattering in mortal fear to the treetops.\r
\r
As the fall of the year came on, the moose appeared in greater\r
abundance, moving slowly down to meet the winter in the lower and less\r
rigorous valleys. Buck had already dragged down a stray part-grown\r
calf; but he wished strongly for larger and more formidable quarry, and\r
he came upon it one day on the divide at the head of the creek. A band\r
of twenty moose had crossed over from the land of streams and timber,\r
and chief among them was a great bull. He was in a savage temper, and,\r
standing over six feet from the ground, was as formidable an antagonist\r
as even Buck could desire. Back and forth the bull tossed his great\r
palmated antlers, branching to fourteen points and embracing seven feet\r
within the tips. His small eyes burned with a vicious and bitter light,\r
while he roared with fury at sight of Buck.\r
\r
From the bull’s side, just forward of the flank, protruded a feathered\r
arrow-end, which accounted for his savageness. Guided by that instinct\r
which came from the old hunting days of the primordial world, Buck\r
proceeded to cut the bull out from the herd. It was no slight task. He\r
would bark and dance about in front of the bull, just out of reach of\r
the great antlers and of the terrible splay hoofs which could have\r
stamped his life out with a single blow. Unable to turn his back on the\r
fanged danger and go on, the bull would be driven into paroxysms of\r
rage. At such moments he charged Buck, who retreated craftily, luring\r
him on by a simulated inability to escape. But when he was thus\r
separated from his fellows, two or three of the younger bulls would\r
charge back upon Buck and enable the wounded bull to rejoin the herd.\r
\r
There is a patience of the wild—dogged, tireless, persistent as life\r
itself—that holds motionless for endless hours the spider in its web,\r
the snake in its coils, the panther in its ambuscade; this patience\r
belongs peculiarly to life when it hunts its living food; and it\r
belonged to Buck as he clung to the flank of the herd, retarding its\r
march, irritating the young bulls, worrying the cows with their\r
half-grown calves, and driving the wounded bull mad with helpless rage.\r
For half a day this continued. Buck multiplied himself, attacking from\r
all sides, enveloping the herd in a whirlwind of menace, cutting out\r
his victim as fast as it could rejoin its mates, wearing out the\r
patience of creatures preyed upon, which is a lesser patience than that\r
of creatures preying.\r
\r
As the day wore along and the sun dropped to its bed in the northwest\r
(the darkness had come back and the fall nights were six hours long),\r
the young bulls retraced their steps more and more reluctantly to the\r
aid of their beset leader. The down-coming winter was harrying them on\r
to the lower levels, and it seemed they could never shake off this\r
tireless creature that held them back. Besides, it was not the life of\r
the herd, or of the young bulls, that was threatened. The life of only\r
one member was demanded, which was a remoter interest than their lives,\r
and in the end they were content to pay the toll.\r
\r
As twilight fell the old bull stood with lowered head, watching his\r
mates—the cows he had known, the calves he had fathered, the bulls he\r
had mastered—as they shambled on at a rapid pace through the fading\r
light. He could not follow, for before his nose leaped the merciless\r
fanged terror that would not let him go. Three hundredweight more than\r
half a ton he weighed; he had lived a long, strong life, full of fight\r
and struggle, and at the end he faced death at the teeth of a creature\r
whose head did not reach beyond his great knuckled knees.\r
\r
From then on, night and day, Buck never left his prey, never gave it a\r
moment’s rest, never permitted it to browse the leaves of trees or the\r
shoots of young birch and willow. Nor did he give the wounded bull\r
opportunity to slake his burning thirst in the slender trickling\r
streams they crossed. Often, in desperation, he burst into long\r
stretches of flight. At such times Buck did not attempt to stay him,\r
but loped easily at his heels, satisfied with the way the game was\r
played, lying down when the moose stood still, attacking him fiercely\r
when he strove to eat or drink.\r
\r
The great head drooped more and more under its tree of horns, and the\r
shambling trot grew weak and weaker. He took to standing for long\r
periods, with nose to the ground and dejected ears dropped limply; and\r
Buck found more time in which to get water for himself and in which to\r
rest. At such moments, panting with red lolling tongue and with eyes\r
fixed upon the big bull, it appeared to Buck that a change was coming\r
over the face of things. He could feel a new stir in the land. As the\r
moose were coming into the land, other kinds of life were coming in.\r
Forest and stream and air seemed palpitant with their presence. The\r
news of it was borne in upon him, not by sight, or sound, or smell, but\r
by some other and subtler sense. He heard nothing, saw nothing, yet\r
knew that the land was somehow different; that through it strange\r
things were afoot and ranging; and he resolved to investigate after he\r
had finished the business in hand.\r
\r
At last, at the end of the fourth day, he pulled the great moose down.\r
For a day and a night he remained by the kill, eating and sleeping,\r
turn and turn about. Then, rested, refreshed and strong, he turned his\r
face toward camp and John Thornton. He broke into the long easy lope,\r
and went on, hour after hour, never at loss for the tangled way,\r
heading straight home through strange country with a certitude of\r
direction that put man and his magnetic needle to shame.\r
\r
As he held on he became more and more conscious of the new stir in the\r
land. There was life abroad in it different from the life which had\r
been there throughout the summer. No longer was this fact borne in upon\r
him in some subtle, mysterious way. The birds talked of it, the\r
squirrels chattered about it, the very breeze whispered of it. Several\r
times he stopped and drew in the fresh morning air in great sniffs,\r
reading a message which made him leap on with greater speed. He was\r
oppressed with a sense of calamity happening, if it were not calamity\r
already happened; and as he crossed the last watershed and dropped down\r
into the valley toward camp, he proceeded with greater caution.\r
\r
Three miles away he came upon a fresh trail that sent his neck hair\r
rippling and bristling, It led straight toward camp and John Thornton.\r
Buck hurried on, swiftly and stealthily, every nerve straining and\r
tense, alert to the multitudinous details which told a story—all but\r
the end. His nose gave him a varying description of the passage of the\r
life on the heels of which he was travelling. He remarked the pregnant\r
silence of the forest. The bird life had flitted. The squirrels were in\r
hiding. One only he saw,—a sleek gray fellow, flattened against a gray\r
dead limb so that he seemed a part of it, a woody excrescence upon the\r
wood itself.\r
\r
As Buck slid along with the obscureness of a gliding shadow, his nose\r
was jerked suddenly to the side as though a positive force had gripped\r
and pulled it. He followed the new scent into a thicket and found Nig.\r
He was lying on his side, dead where he had dragged himself, an arrow\r
protruding, head and feathers, from either side of his body.\r
\r
A hundred yards farther on, Buck came upon one of the sled-dogs\r
Thornton had bought in Dawson. This dog was thrashing about in a\r
death-struggle, directly on the trail, and Buck passed around him\r
without stopping. From the camp came the faint sound of many voices,\r
rising and falling in a sing-song chant. Bellying forward to the edge\r
of the clearing, he found Hans, lying on his face, feathered with\r
arrows like a porcupine. At the same instant Buck peered out where the\r
spruce-bough lodge had been and saw what made his hair leap straight up\r
on his neck and shoulders. A gust of overpowering rage swept over him.\r
He did not know that he growled, but he growled aloud with a terrible\r
ferocity. For the last time in his life he allowed passion to usurp\r
cunning and reason, and it was because of his great love for John\r
Thornton that he lost his head.\r
\r
The Yeehats were dancing about the wreckage of the spruce-bough lodge\r
when they heard a fearful roaring and saw rushing upon them an animal\r
the like of which they had never seen before. It was Buck, a live\r
hurricane of fury, hurling himself upon them in a frenzy to destroy. He\r
sprang at the foremost man (it was the chief of the Yeehats), ripping\r
the throat wide open till the rent jugular spouted a fountain of blood.\r
He did not pause to worry the victim, but ripped in passing, with the\r
next bound tearing wide the throat of a second man. There was no\r
withstanding him. He plunged about in their very midst, tearing,\r
rending, destroying, in constant and terrific motion which defied the\r
arrows they discharged at him. In fact, so inconceivably rapid were his\r
movements, and so closely were the Indians tangled together, that they\r
shot one another with the arrows; and one young hunter, hurling a spear\r
at Buck in mid air, drove it through the chest of another hunter with\r
such force that the point broke through the skin of the back and stood\r
out beyond. Then a panic seized the Yeehats, and they fled in terror to\r
the woods, proclaiming as they fled the advent of the Evil Spirit.\r
\r
And truly Buck was the Fiend incarnate, raging at their heels and\r
dragging them down like deer as they raced through the trees. It was a\r
fateful day for the Yeehats. They scattered far and wide over the\r
country, and it was not till a week later that the last of the\r
survivors gathered together in a lower valley and counted their losses.\r
As for Buck, wearying of the pursuit, he returned to the desolated\r
camp. He found Pete where he had been killed in his blankets in the\r
first moment of surprise. Thornton’s desperate struggle was\r
fresh-written on the earth, and Buck scented every detail of it down to\r
the edge of a deep pool. By the edge, head and fore feet in the water,\r
lay Skeet, faithful to the last. The pool itself, muddy and discolored\r
from the sluice boxes, effectually hid what it contained, and it\r
contained John Thornton; for Buck followed his trace into the water,\r
from which no trace led away.\r
\r
All day Buck brooded by the pool or roamed restlessly about the camp.\r
Death, as a cessation of movement, as a passing out and away from the\r
lives of the living, he knew, and he knew John Thornton was dead. It\r
left a great void in him, somewhat akin to hunger, but a void which\r
ached and ached, and which food could not fill. At times, when he\r
paused to contemplate the carcasses of the Yeehats, he forgot the pain\r
of it; and at such times he was aware of a great pride in himself,—a\r
pride greater than any he had yet experienced. He had killed man, the\r
noblest game of all, and he had killed in the face of the law of club\r
and fang. He sniffed the bodies curiously. They had died so easily. It\r
was harder to kill a husky dog than them. They were no match at all,\r
were it not for their arrows and spears and clubs. Thenceforward he\r
would be unafraid of them except when they bore in their hands their\r
arrows, spears, and clubs.\r
\r
Night came on, and a full moon rose high over the trees into the sky,\r
lighting the land till it lay bathed in ghostly day. And with the\r
coming of the night, brooding and mourning by the pool, Buck became\r
alive to a stirring of the new life in the forest other than that which\r
the Yeehats had made, He stood up, listening and scenting. From far\r
away drifted a faint, sharp yelp, followed by a chorus of similar sharp\r
yelps. As the moments passed the yelps grew closer and louder. Again\r
Buck knew them as things heard in that other world which persisted in\r
his memory. He walked to the centre of the open space and listened. It\r
was the call, the many-noted call, sounding more luringly and\r
compellingly than ever before. And as never before, he was ready to\r
obey. John Thornton was dead. The last tie was broken. Man and the\r
claims of man no longer bound him.\r
\r
Hunting their living meat, as the Yeehats were hunting it, on the\r
flanks of the migrating moose, the wolf pack had at last crossed over\r
from the land of streams and timber and invaded Buck’s valley. Into the\r
clearing where the moonlight streamed, they poured in a silvery flood;\r
and in the centre of the clearing stood Buck, motionless as a statue,\r
waiting their coming. They were awed, so still and large he stood, and\r
a moment’s pause fell, till the boldest one leaped straight for him.\r
Like a flash Buck struck, breaking the neck. Then he stood, without\r
movement, as before, the stricken wolf rolling in agony behind him.\r
Three others tried it in sharp succession; and one after the other they\r
drew back, streaming blood from slashed throats or shoulders.\r
\r
This was sufficient to fling the whole pack forward, pell-mell, crowded\r
together, blocked and confused by its eagerness to pull down the prey.\r
Buck’s marvellous quickness and agility stood him in good stead.\r
Pivoting on his hind legs, and snapping and gashing, he was everywhere\r
at once, presenting a front which was apparently unbroken so swiftly\r
did he whirl and guard from side to side. But to prevent them from\r
getting behind him, he was forced back, down past the pool and into the\r
creek bed, till he brought up against a high gravel bank. He worked\r
along to a right angle in the bank which the men had made in the course\r
of mining, and in this angle he came to bay, protected on three sides\r
and with nothing to do but face the front.\r
\r
And so well did he face it, that at the end of half an hour the wolves\r
drew back discomfited. The tongues of all were out and lolling, the\r
white fangs showing cruelly white in the moonlight. Some were lying\r
down with heads raised and ears pricked forward; others stood on their\r
feet, watching him; and still others were lapping water from the pool.\r
One wolf, long and lean and gray, advanced cautiously, in a friendly\r
manner, and Buck recognized the wild brother with whom he had run for a\r
night and a day. He was whining softly, and, as Buck whined, they\r
touched noses.\r
\r
Then an old wolf, gaunt and battle-scarred, came forward. Buck writhed\r
his lips into the preliminary of a snarl, but sniffed noses with him,\r
Whereupon the old wolf sat down, pointed nose at the moon, and broke\r
out the long wolf howl. The others sat down and howled. And now the\r
call came to Buck in unmistakable accents. He, too, sat down and\r
howled. This over, he came out of his angle and the pack crowded around\r
him, sniffing in half-friendly, half-savage manner. The leaders lifted\r
the yelp of the pack and sprang away into the woods. The wolves swung\r
in behind, yelping in chorus. And Buck ran with them, side by side with\r
the wild brother, yelping as he ran.\r
\r
\r
And here may well end the story of Buck. The years were not many when\r
the Yeehats noted a change in the breed of timber wolves; for some were\r
seen with splashes of brown on head and muzzle, and with a rift of\r
white centring down the chest. But more remarkable than this, the\r
Yeehats tell of a Ghost Dog that runs at the head of the pack. They are\r
afraid of this Ghost Dog, for it has cunning greater than they,\r
stealing from their camps in fierce winters, robbing their traps,\r
slaying their dogs, and defying their bravest hunters.\r
\r
Nay, the tale grows worse. Hunters there are who fail to return to the\r
camp, and hunters there have been whom their tribesmen found with\r
throats slashed cruelly open and with wolf prints about them in the\r
snow greater than the prints of any wolf. Each fall, when the Yeehats\r
follow the movement of the moose, there is a certain valley which they\r
never enter. And women there are who become sad when the word goes over\r
the fire of how the Evil Spirit came to select that valley for an\r
abiding-place.\r
\r
In the summers there is one visitor, however, to that valley, of which\r
the Yeehats do not know. It is a great, gloriously coated wolf, like,\r
and yet unlike, all other wolves. He crosses alone from the smiling\r
timber land and comes down into an open space among the trees. Here a\r
yellow stream flows from rotted moose-hide sacks and sinks into the\r
ground, with long grasses growing through it and vegetable mould\r
overrunning it and hiding its yellow from the sun; and here he muses\r
for a time, howling once, long and mournfully, ere he departs.\r
\r
But he is not always alone. When the long winter nights come on and the\r
wolves follow their meat into the lower valleys, he may be seen running\r
at the head of the pack through the pale moonlight or glimmering\r
borealis, leaping gigantic above his fellows, his great throat a-bellow\r
as he sings a song of the younger world, which is the song of the pack.\r
\r
\r
\r
\r
*** END OF THE PROJECT GUTENBERG EBOOK THE CALL OF THE WILD ***\r
\r
\r
    \r
\r
Updated editions will replace the previous one—the old editions will\r
be renamed.\r
\r
Creating the works from print editions not protected by U.S. copyright\r
law means that no one owns a United States copyright in these works,\r
so the Foundation (and you!) can copy and distribute it in the United\r
States without permission and without paying copyright\r
royalties. Special rules, set forth in the General Terms of Use part\r
of this license, apply to copying and distributing Project\r
Gutenberg™ electronic works to protect the PROJECT GUTENBERG™\r
concept and trademark. Project Gutenberg is a registered trademark,\r
and may not be used if you charge for an eBook, except by following\r
the terms of the trademark license, including paying royalties for use\r
of the Project Gutenberg trademark. If you do not charge anything for\r
copies of this eBook, complying with the trademark license is very\r
easy. You may use this eBook for nearly any purpose such as creation\r
of derivative works, reports, performances and research. Project\r
Gutenberg eBooks may be modified and printed and given away—you may\r
do practically ANYTHING in the United States with eBooks not protected\r
by U.S. copyright law. Redistribution is subject to the trademark\r
license, especially commercial redistribution.\r
\r
\r
START: FULL LICENSE\r
\r
THE FULL PROJECT GUTENBERG LICENSE\r
\r
PLEASE READ THIS BEFORE YOU DISTRIBUTE OR USE THIS WORK\r
\r
To protect the Project Gutenberg™ mission of promoting the free\r
distribution of electronic works, by using or distributing this work\r
(or any other work associated in any way with the phrase “Project\r
Gutenberg”), you agree to comply with all the terms of the Full\r
Project Gutenberg™ License available with this file or online at\r
www.gutenberg.org/license.\r
\r
Section 1. General Terms of Use and Redistributing Project Gutenberg™\r
electronic works\r
\r
1.A. By reading or using any part of this Project Gutenberg™\r
electronic work, you indicate that you have read, understand, agree to\r
and accept all the terms of this license and intellectual property\r
(trademark/copyright) agreement. If you do not agree to abide by all\r
the terms of this agreement, you must cease using and return or\r
destroy all copies of Project Gutenberg™ electronic works in your\r
possession. If you paid a fee for obtaining a copy of or access to a\r
Project Gutenberg™ electronic work and you do not agree to be bound\r
by the terms of this agreement, you may obtain a refund from the person\r
or entity to whom you paid the fee as set forth in paragraph 1.E.8.\r
\r
1.B. “Project Gutenberg” is a registered trademark. It may only be\r
used on or associated in any way with an electronic work by people who\r
agree to be bound by the terms of this agreement. There are a few\r
things that you can do with most Project Gutenberg™ electronic works\r
even without complying with the full terms of this agreement. See\r
paragraph 1.C below. There are a lot of things you can do with Project\r
Gutenberg™ electronic works if you follow the terms of this\r
agreement and help preserve free future access to Project Gutenberg™\r
electronic works. See paragraph 1.E below.\r
\r
1.C. The Project Gutenberg Literary Archive Foundation (“the\r
Foundation” or PGLAF), owns a compilation copyright in the collection\r
of Project Gutenberg™ electronic works. Nearly all the individual\r
works in the collection are in the public domain in the United\r
States. If an individual work is unprotected by copyright law in the\r
United States and you are located in the United States, we do not\r
claim a right to prevent you from copying, distributing, performing,\r
displaying or creating derivative works based on the work as long as\r
all references to Project Gutenberg are removed. Of course, we hope\r
that you will support the Project Gutenberg™ mission of promoting\r
free access to electronic works by freely sharing Project Gutenberg™\r
works in compliance with the terms of this agreement for keeping the\r
Project Gutenberg™ name associated with the work. You can easily\r
comply with the terms of this agreement by keeping this work in the\r
same format with its attached full Project Gutenberg™ License when\r
you share it without charge with others.\r
\r
1.D. The copyright laws of the place where you are located also govern\r
what you can do with this work. Copyright laws in most countries are\r
in a constant state of change. If you are outside the United States,\r
check the laws of your country in addition to the terms of this\r
agreement before downloading, copying, displaying, performing,\r
distributing or creating derivative works based on this work or any\r
other Project Gutenberg™ work. The Foundation makes no\r
representations concerning the copyright status of any work in any\r
country other than the United States.\r
\r
1.E. Unless you have removed all references to Project Gutenberg:\r
\r
1.E.1. The following sentence, with active links to, or other\r
immediate access to, the full Project Gutenberg™ License must appear\r
prominently whenever any copy of a Project Gutenberg™ work (any work\r
on which the phrase “Project Gutenberg” appears, or with which the\r
phrase “Project Gutenberg” is associated) is accessed, displayed,\r
performed, viewed, copied or distributed:\r
\r
    This eBook is for the use of anyone anywhere in the United States and most\r
    other parts of the world at no cost and with almost no restrictions\r
    whatsoever. You may copy it, give it away or re-use it under the terms\r
    of the Project Gutenberg License included with this eBook or online\r
    at www.gutenberg.org. If you\r
    are not located in the United States, you will have to check the laws\r
    of the country where you are located before using this eBook.\r
  \r
1.E.2. If an individual Project Gutenberg™ electronic work is\r
derived from texts not protected by U.S. copyright law (does not\r
contain a notice indicating that it is posted with permission of the\r
copyright holder), the work can be copied and distributed to anyone in\r
the United States without paying any fees or charges. If you are\r
redistributing or providing access to a work with the phrase “Project\r
Gutenberg” associated with or appearing on the work, you must comply\r
either with the requirements of paragraphs 1.E.1 through 1.E.7 or\r
obtain permission for the use of the work and the Project Gutenberg™\r
trademark as set forth in paragraphs 1.E.8 or 1.E.9.\r
\r
1.E.3. If an individual Project Gutenberg™ electronic work is posted\r
with the permission of the copyright holder, your use and distribution\r
must comply with both paragraphs 1.E.1 through 1.E.7 and any\r
additional terms imposed by the copyright holder. Additional terms\r
will be linked to the Project Gutenberg™ License for all works\r
posted with the permission of the copyright holder found at the\r
beginning of this work.\r
\r
1.E.4. Do not unlink or detach or remove the full Project Gutenberg™\r
License terms from this work, or any files containing a part of this\r
work or any other work associated with Project Gutenberg™.\r
\r
1.E.5. Do not copy, display, perform, distribute or redistribute this\r
electronic work, or any part of this electronic work, without\r
prominently displaying the sentence set forth in paragraph 1.E.1 with\r
active links or immediate access to the full terms of the Project\r
Gutenberg™ License.\r
\r
1.E.6. You may convert to and distribute this work in any binary,\r
compressed, marked up, nonproprietary or proprietary form, including\r
any word processing or hypertext form. However, if you provide access\r
to or distribute copies of a Project Gutenberg™ work in a format\r
other than “Plain Vanilla ASCII” or other format used in the official\r
version posted on the official Project Gutenberg™ website\r
(www.gutenberg.org), you must, at no additional cost, fee or expense\r
to the user, provide a copy, a means of exporting a copy, or a means\r
of obtaining a copy upon request, of the work in its original “Plain\r
Vanilla ASCII” or other form. Any alternate format must include the\r
full Project Gutenberg™ License as specified in paragraph 1.E.1.\r
\r
1.E.7. Do not charge a fee for access to, viewing, displaying,\r
performing, copying or distributing any Project Gutenberg™ works\r
unless you comply with paragraph 1.E.8 or 1.E.9.\r
\r
1.E.8. You may charge a reasonable fee for copies of or providing\r
access to or distributing Project Gutenberg™ electronic works\r
provided that:\r
\r
    • You pay a royalty fee of 20% of the gross profits you derive from\r
        the use of Project Gutenberg™ works calculated using the method\r
        you already use to calculate your applicable taxes. The fee is owed\r
        to the owner of the Project Gutenberg™ trademark, but he has\r
        agreed to donate royalties under this paragraph to the Project\r
        Gutenberg Literary Archive Foundation. Royalty payments must be paid\r
        within 60 days following each date on which you prepare (or are\r
        legally required to prepare) your periodic tax returns. Royalty\r
        payments should be clearly marked as such and sent to the Project\r
        Gutenberg Literary Archive Foundation at the address specified in\r
        Section 4, “Information about donations to the Project Gutenberg\r
        Literary Archive Foundation.”\r
    \r
    • You provide a full refund of any money paid by a user who notifies\r
        you in writing (or by e-mail) within 30 days of receipt that s/he\r
        does not agree to the terms of the full Project Gutenberg™\r
        License. You must require such a user to return or destroy all\r
        copies of the works possessed in a physical medium and discontinue\r
        all use of and all access to other copies of Project Gutenberg™\r
        works.\r
    \r
    • You provide, in accordance with paragraph 1.F.3, a full refund of\r
        any money paid for a work or a replacement copy, if a defect in the\r
        electronic work is discovered and reported to you within 90 days of\r
        receipt of the work.\r
    \r
    • You comply with all other terms of this agreement for free\r
        distribution of Project Gutenberg™ works.\r
    \r
\r
1.E.9. If you wish to charge a fee or distribute a Project\r
Gutenberg™ electronic work or group of works on different terms than\r
are set forth in this agreement, you must obtain permission in writing\r
from the Project Gutenberg Literary Archive Foundation, the manager of\r
the Project Gutenberg™ trademark. Contact the Foundation as set\r
forth in Section 3 below.\r
\r
1.F.\r
\r
1.F.1. Project Gutenberg volunteers and employees expend considerable\r
effort to identify, do copyright research on, transcribe and proofread\r
works not protected by U.S. copyright law in creating the Project\r
Gutenberg™ collection. Despite these efforts, Project Gutenberg™\r
electronic works, and the medium on which they may be stored, may\r
contain “Defects,” such as, but not limited to, incomplete, inaccurate\r
or corrupt data, transcription errors, a copyright or other\r
intellectual property infringement, a defective or damaged disk or\r
other medium, a computer virus, or computer codes that damage or\r
cannot be read by your equipment.\r
\r
1.F.2. LIMITED WARRANTY, DISCLAIMER OF DAMAGES - Except for the “Right\r
of Replacement or Refund” described in paragraph 1.F.3, the Project\r
Gutenberg Literary Archive Foundation, the owner of the Project\r
Gutenberg™ trademark, and any other party distributing a Project\r
Gutenberg™ electronic work under this agreement, disclaim all\r
liability to you for damages, costs and expenses, including legal\r
fees. YOU AGREE THAT YOU HAVE NO REMEDIES FOR NEGLIGENCE, STRICT\r
LIABILITY, BREACH OF WARRANTY OR BREACH OF CONTRACT EXCEPT THOSE\r
PROVIDED IN PARAGRAPH 1.F.3. YOU AGREE THAT THE FOUNDATION, THE\r
TRADEMARK OWNER, AND ANY DISTRIBUTOR UNDER THIS AGREEMENT WILL NOT BE\r
LIABLE TO YOU FOR ACTUAL, DIRECT, INDIRECT, CONSEQUENTIAL, PUNITIVE OR\r
INCIDENTAL DAMAGES EVEN IF YOU GIVE NOTICE OF THE POSSIBILITY OF SUCH\r
DAMAGE.\r
\r
1.F.3. LIMITED RIGHT OF REPLACEMENT OR REFUND - If you discover a\r
defect in this electronic work within 90 days of receiving it, you can\r
receive a refund of the money (if any) you paid for it by sending a\r
written explanation to the person you received the work from. If you\r
received the work on a physical medium, you must return the medium\r
with your written explanation. The person or entity that provided you\r
with the defective work may elect to provide a replacement copy in\r
lieu of a refund. If you received the work electronically, the person\r
or entity providing it to you may choose to give you a second\r
opportunity to receive the work electronically in lieu of a refund. If\r
the second copy is also defective, you may demand a refund in writing\r
without further opportunities to fix the problem.\r
\r
1.F.4. Except for the limited right of replacement or refund set forth\r
in paragraph 1.F.3, this work is provided to you ‘AS-IS’, WITH NO\r
OTHER WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT\r
LIMITED TO WARRANTIES OF MERCHANTABILITY OR FITNESS FOR ANY PURPOSE.\r
\r
1.F.5. Some states do not allow disclaimers of certain implied\r
warranties or the exclusion or limitation of certain types of\r
damages. If any disclaimer or limitation set forth in this agreement\r
violates the law of the state applicable to this agreement, the\r
agreement shall be interpreted to make the maximum disclaimer or\r
limitation permitted by the applicable state law. The invalidity or\r
unenforceability of any provision of this agreement shall not void the\r
remaining provisions.\r
\r
1.F.6. INDEMNITY - You agree to indemnify and hold the Foundation, the\r
trademark owner, any agent or employee of the Foundation, anyone\r
providing copies of Project Gutenberg™ electronic works in\r
accordance with this agreement, and any volunteers associated with the\r
production, promotion and distribution of Project Gutenberg™\r
electronic works, harmless from all liability, costs and expenses,\r
including legal fees, that arise directly or indirectly from any of\r
the following which you do or cause to occur: (a) distribution of this\r
or any Project Gutenberg™ work, (b) alteration, modification, or\r
additions or deletions to any Project Gutenberg™ work, and (c) any\r
Defect you cause.\r
\r
Section 2. Information about the Mission of Project Gutenberg™\r
\r
Project Gutenberg™ is synonymous with the free distribution of\r
electronic works in formats readable by the widest variety of\r
computers including obsolete, old, middle-aged and new computers. It\r
exists because of the efforts of hundreds of volunteers and donations\r
from people in all walks of life.\r
\r
Volunteers and financial support to provide volunteers with the\r
assistance they need are critical to reaching Project Gutenberg™’s\r
goals and ensuring that the Project Gutenberg™ collection will\r
remain freely available for generations to come. In 2001, the Project\r
Gutenberg Literary Archive Foundation was created to provide a secure\r
and permanent future for Project Gutenberg™ and future\r
generations. To learn more about the Project Gutenberg Literary\r
Archive Foundation and how your efforts and donations can help, see\r
Sections 3 and 4 and the Foundation information page at www.gutenberg.org.\r
\r
Section 3. Information about the Project Gutenberg Literary Archive Foundation\r
\r
The Project Gutenberg Literary Archive Foundation is a non-profit\r
501(c)(3) educational corporation organized under the laws of the\r
state of Mississippi and granted tax exempt status by the Internal\r
Revenue Service. The Foundation’s EIN or federal tax identification\r
number is 64-6221541. Contributions to the Project Gutenberg Literary\r
Archive Foundation are tax deductible to the full extent permitted by\r
U.S. federal laws and your state’s laws.\r
\r
The Foundation’s business office is located at 809 North 1500 West,\r
Salt Lake City, UT 84116, (801) 596-1887. Email contact links and up\r
to date contact information can be found at the Foundation’s website\r
and official page at www.gutenberg.org/contact\r
\r
Section 4. Information about Donations to the Project Gutenberg\r
Literary Archive Foundation\r
\r
Project Gutenberg™ depends upon and cannot survive without widespread\r
public support and donations to carry out its mission of\r
increasing the number of public domain and licensed works that can be\r
freely distributed in machine-readable form accessible by the widest\r
array of equipment including outdated equipment. Many small donations\r
($1 to $5,000) are particularly important to maintaining tax exempt\r
status with the IRS.\r
\r
The Foundation is committed to complying with the laws regulating\r
charities and charitable donations in all 50 states of the United\r
States. Compliance requirements are not uniform and it takes a\r
considerable effort, much paperwork and many fees to meet and keep up\r
with these requirements. We do not solicit donations in locations\r
where we have not received written confirmation of compliance. To SEND\r
DONATIONS or determine the status of compliance for any particular state\r
visit www.gutenberg.org/donate.\r
\r
While we cannot and do not solicit contributions from states where we\r
have not met the solicitation requirements, we know of no prohibition\r
against accepting unsolicited donations from donors in such states who\r
approach us with offers to donate.\r
\r
International donations are gratefully accepted, but we cannot make\r
any statements concerning tax treatment of donations received from\r
outside the United States. U.S. laws alone swamp our small staff.\r
\r
Please check the Project Gutenberg web pages for current donation\r
methods and addresses. Donations are accepted in a number of other\r
ways including checks, online payments and credit card donations. To\r
donate, please visit: www.gutenberg.org/donate.\r
\r
Section 5. General Information About Project Gutenberg™ electronic works\r
\r
Professor Michael S. Hart was the originator of the Project\r
Gutenberg™ concept of a library of electronic works that could be\r
freely shared with anyone. For forty years, he produced and\r
distributed Project Gutenberg™ eBooks with only a loose network of\r
volunteer support.\r
\r
Project Gutenberg™ eBooks are often created from several printed\r
editions, all of which are confirmed as not protected by copyright in\r
the U.S. unless a copyright notice is included. Thus, we do not\r
necessarily keep eBooks in compliance with any particular paper\r
edition.\r
\r
Most people start at our website which has the main PG search\r
facility: www.gutenberg.org.\r
\r
This website includes information about Project Gutenberg™,\r
including how to make donations to the Project Gutenberg Literary\r
Archive Foundation, how to help produce our new eBooks, and how to\r
subscribe to our email newsletter to hear about new eBooks.\r
\r
\r
`},{fileName:`the_dominant_primordial_beast.txt`,contents:`Chapter III. The Dominant Primordial Beast


The dominant primordial beast was strong in Buck, and under the fierce
conditions of trail life it grew and grew. Yet it was a secret growth.
His newborn cunning gave him poise and control. He was too busy
adjusting himself to the new life to feel at ease, and not only did he
not pick fights, but he avoided them whenever possible. A certain
deliberateness characterized his attitude. He was not prone to rashness
and precipitate action; and in the bitter hatred between him and Spitz
he betrayed no impatience, shunned all offensive acts.

On the other hand, possibly because he divined in Buck a dangerous
rival, Spitz never lost an opportunity of showing his teeth. He even
went out of his way to bully Buck, striving constantly to start the
fight which could end only in the death of one or the other. Early in
the trip this might have taken place had it not been for an unwonted
accident. At the end of this day they made a bleak and miserable camp
on the shore of Lake Le Barge. Driving snow, a wind that cut like a
white-hot knife, and darkness had forced them to grope for a camping
place. They could hardly have fared worse. At their backs rose a
perpendicular wall of rock, and Perrault and François were compelled to
make their fire and spread their sleeping robes on the ice of the lake
itself. The tent they had discarded at Dyea in order to travel light. A
few sticks of driftwood furnished them with a fire that thawed down
through the ice and left them to eat supper in the dark.

Close in under the sheltering rock Buck made his nest. So snug and warm
was it, that he was loath to leave it when François distributed the
fish which he had first thawed over the fire. But when Buck finished
his ration and returned, he found his nest occupied. A warning snarl
told him that the trespasser was Spitz. Till now Buck had avoided
trouble with his enemy, but this was too much. The beast in him roared.
He sprang upon Spitz with a fury which surprised them both, and Spitz
particularly, for his whole experience with Buck had gone to teach him
that his rival was an unusually timid dog, who managed to hold his own
only because of his great weight and size.

François was surprised, too, when they shot out in a tangle from the
disrupted nest and he divined the cause of the trouble. “A-a-ah!” he
cried to Buck. “Gif it to heem, by Gar! Gif it to heem, the dirty
t’eef!”

Spitz was equally willing. He was crying with sheer rage and eagerness
as he circled back and forth for a chance to spring in. Buck was no
less eager, and no less cautious, as he likewise circled back and forth
for the advantage. But it was then that the unexpected happened, the
thing which projected their struggle for supremacy far into the future,
past many a weary mile of trail and toil.

An oath from Perrault, the resounding impact of a club upon a bony
frame, and a shrill yelp of pain, heralded the breaking forth of
pandemonium. The camp was suddenly discovered to be alive with skulking
furry forms,—starving huskies, four or five score of them, who had
scented the camp from some Indian village. They had crept in while Buck
and Spitz were fighting, and when the two men sprang among them with
stout clubs they showed their teeth and fought back. They were crazed
by the smell of the food. Perrault found one with head buried in the
grub-box. His club landed heavily on the gaunt ribs, and the grub-box
was capsized on the ground. On the instant a score of the famished
brutes were scrambling for the bread and bacon. The clubs fell upon
them unheeded. They yelped and howled under the rain of blows, but
struggled none the less madly till the last crumb had been devoured.

In the meantime the astonished team-dogs had burst out of their nests
only to be set upon by the fierce invaders. Never had Buck seen such
dogs. It seemed as though their bones would burst through their skins.
They were mere skeletons, draped loosely in draggled hides, with
blazing eyes and slavered fangs. But the hunger-madness made them
terrifying, irresistible. There was no opposing them. The team-dogs
were swept back against the cliff at the first onset. Buck was beset by
three huskies, and in a trice his head and shoulders were ripped and
slashed. The din was frightful. Billee was crying as usual. Dave and
Sol-leks, dripping blood from a score of wounds, were fighting bravely
side by side. Joe was snapping like a demon. Once, his teeth closed on
the fore leg of a husky, and he crunched down through the bone. Pike,
the malingerer, leaped upon the crippled animal, breaking its neck with
a quick flash of teeth and a jerk, Buck got a frothing adversary by the
throat, and was sprayed with blood when his teeth sank through the
jugular. The warm taste of it in his mouth goaded him to greater
fierceness. He flung himself upon another, and at the same time felt
teeth sink into his own throat. It was Spitz, treacherously attacking
from the side.

Perrault and François, having cleaned out their part of the camp,
hurried to save their sled-dogs. The wild wave of famished beasts
rolled back before them, and Buck shook himself free. But it was only
for a moment. The two men were compelled to run back to save the grub,
upon which the huskies returned to the attack on the team. Billee,
terrified into bravery, sprang through the savage circle and fled away
over the ice. Pike and Dub followed on his heels, with the rest of the
team behind. As Buck drew himself together to spring after them, out of
the tail of his eye he saw Spitz rush upon him with the evident
intention of overthrowing him. Once off his feet and under that mass of
huskies, there was no hope for him. But he braced himself to the shock
of Spitz’s charge, then joined the flight out on the lake.

Later, the nine team-dogs gathered together and sought shelter in the
forest. Though unpursued, they were in a sorry plight. There was not
one who was not wounded in four or five places, while some were wounded
grievously. Dub was badly injured in a hind leg; Dolly, the last husky
added to the team at Dyea, had a badly torn throat; Joe had lost an
eye; while Billee, the good-natured, with an ear chewed and rent to
ribbons, cried and whimpered throughout the night. At daybreak they
limped warily back to camp, to find the marauders gone and the two men
in bad tempers. Fully half their grub supply was gone. The huskies had
chewed through the sled lashings and canvas coverings. In fact,
nothing, no matter how remotely eatable, had escaped them. They had
eaten a pair of Perrault’s moose-hide moccasins, chunks out of the
leather traces, and even two feet of lash from the end of François’s
whip. He broke from a mournful contemplation of it to look over his
wounded dogs.

“Ah, my frien’s,” he said softly, “mebbe it mek you mad dog, dose many
bites. Mebbe all mad dog, sacredam! Wot you t’ink, eh, Perrault?”

The courier shook his head dubiously. With four hundred miles of trail
still between him and Dawson, he could ill afford to have madness break
out among his dogs. Two hours of cursing and exertion got the harnesses
into shape, and the wound-stiffened team was under way, struggling
painfully over the hardest part of the trail they had yet encountered,
and for that matter, the hardest between them and Dawson.

The Thirty Mile River was wide open. Its wild water defied the frost,
and it was in the eddies only and in the quiet places that the ice held
at all. Six days of exhausting toil were required to cover those thirty
terrible miles. And terrible they were, for every foot of them was
accomplished at the risk of life to dog and man. A dozen times,
Perrault, nosing the way broke through the ice bridges, being saved by
the long pole he carried, which he so held that it fell each time
across the hole made by his body. But a cold snap was on, the
thermometer registering fifty below zero, and each time he broke
through he was compelled for very life to build a fire and dry his
garments.

Nothing daunted him. It was because nothing daunted him that he had
been chosen for government courier. He took all manner of risks,
resolutely thrusting his little weazened face into the frost and
struggling on from dim dawn to dark. He skirted the frowning shores on
rim ice that bent and crackled under foot and upon which they dared not
halt. Once, the sled broke through, with Dave and Buck, and they were
half-frozen and all but drowned by the time they were dragged out. The
usual fire was necessary to save them. They were coated solidly with
ice, and the two men kept them on the run around the fire, sweating and
thawing, so close that they were singed by the flames.

At another time Spitz went through, dragging the whole team after him
up to Buck, who strained backward with all his strength, his fore paws
on the slippery edge and the ice quivering and snapping all around. But
behind him was Dave, likewise straining backward, and behind the sled
was François, pulling till his tendons cracked.

Again, the rim ice broke away before and behind, and there was no
escape except up the cliff. Perrault scaled it by a miracle, while
François prayed for just that miracle; and with every thong and sled
lashing and the last bit of harness rove into a long rope, the dogs
were hoisted, one by one, to the cliff crest. François came up last,
after the sled and load. Then came the search for a place to descend,
which descent was ultimately made by the aid of the rope, and night
found them back on the river with a quarter of a mile to the day’s
credit.

By the time they made the Hootalinqua and good ice, Buck was played
out. The rest of the dogs were in like condition; but Perrault, to make
up lost time, pushed them late and early. The first day they covered
thirty-five miles to the Big Salmon; the next day thirty-five more to
the Little Salmon; the third day forty miles, which brought them well
up toward the Five Fingers.

Buck’s feet were not so compact and hard as the feet of the huskies.
His had softened during the many generations since the day his last
wild ancestor was tamed by a cave-dweller or river man. All day long he
limped in agony, and camp once made, lay down like a dead dog. Hungry
as he was, he would not move to receive his ration of fish, which
François had to bring to him. Also, the dog-driver rubbed Buck’s feet
for half an hour each night after supper, and sacrificed the tops of
his own moccasins to make four moccasins for Buck. This was a great
relief, and Buck caused even the weazened face of Perrault to twist
itself into a grin one morning, when François forgot the moccasins and
Buck lay on his back, his four feet waving appealingly in the air, and
refused to budge without them. Later his feet grew hard to the trail,
and the worn-out foot-gear was thrown away.

At the Pelly one morning, as they were harnessing up, Dolly, who had
never been conspicuous for anything, went suddenly mad. She announced
her condition by a long, heartbreaking wolf howl that sent every dog
bristling with fear, then sprang straight for Buck. He had never seen a
dog go mad, nor did he have any reason to fear madness; yet he knew
that here was horror, and fled away from it in a panic. Straight away
he raced, with Dolly, panting and frothing, one leap behind; nor could
she gain on him, so great was his terror, nor could he leave her, so
great was her madness. He plunged through the wooded breast of the
island, flew down to the lower end, crossed a back channel filled with
rough ice to another island, gained a third island, curved back to the
main river, and in desperation started to cross it. And all the time,
though he did not look, he could hear her snarling just one leap
behind. François called to him a quarter of a mile away and he doubled
back, still one leap ahead, gasping painfully for air and putting all
his faith in that François would save him. The dog-driver held the axe
poised in his hand, and as Buck shot past him the axe crashed down upon
mad Dolly’s head.

Buck staggered over against the sled, exhausted, sobbing for breath,
helpless. This was Spitz’s opportunity. He sprang upon Buck, and twice
his teeth sank into his unresisting foe and ripped and tore the flesh
to the bone. Then François’s lash descended, and Buck had the
satisfaction of watching Spitz receive the worst whipping as yet
administered to any of the teams.

“One devil, dat Spitz,” remarked Perrault. “Some dam day heem keel dat
Buck.”

“Dat Buck two devils,” was François’s rejoinder. “All de tam I watch
dat Buck I know for sure. Lissen: some dam fine day heem get mad lak
hell an’ den heem chew dat Spitz all up an’ spit heem out on de snow.
Sure. I know.”

From then on it was war between them. Spitz, as lead-dog and
acknowledged master of the team, felt his supremacy threatened by this
strange Southland dog. And strange Buck was to him, for of the many
Southland dogs he had known, not one had shown up worthily in camp and
on trail. They were all too soft, dying under the toil, the frost, and
starvation. Buck was the exception. He alone endured and prospered,
matching the husky in strength, savagery, and cunning. Then he was a
masterful dog, and what made him dangerous was the fact that the club
of the man in the red sweater had knocked all blind pluck and rashness
out of his desire for mastery. He was preeminently cunning, and could
bide his time with a patience that was nothing less than primitive.

It was inevitable that the clash for leadership should come. Buck
wanted it. He wanted it because it was his nature, because he had been
gripped tight by that nameless, incomprehensible pride of the trail and
trace—that pride which holds dogs in the toil to the last gasp, which
lures them to die joyfully in the harness, and breaks their hearts if
they are cut out of the harness. This was the pride of Dave as
wheel-dog, of Sol-leks as he pulled with all his strength; the pride
that laid hold of them at break of camp, transforming them from sour
and sullen brutes into straining, eager, ambitious creatures; the pride
that spurred them on all day and dropped them at pitch of camp at
night, letting them fall back into gloomy unrest and uncontent. This
was the pride that bore up Spitz and made him thrash the sled-dogs who
blundered and shirked in the traces or hid away at harness-up time in
the morning. Likewise it was this pride that made him fear Buck as a
possible lead-dog. And this was Buck’s pride, too.

He openly threatened the other’s leadership. He came between him and
the shirks he should have punished. And he did it deliberately. One
night there was a heavy snowfall, and in the morning Pike, the
malingerer, did not appear. He was securely hidden in his nest under a
foot of snow. François called him and sought him in vain. Spitz was
wild with wrath. He raged through the camp, smelling and digging in
every likely place, snarling so frightfully that Pike heard and
shivered in his hiding-place.

But when he was at last unearthed, and Spitz flew at him to punish him,
Buck flew, with equal rage, in between. So unexpected was it, and so
shrewdly managed, that Spitz was hurled backward and off his feet.
Pike, who had been trembling abjectly, took heart at this open mutiny,
and sprang upon his overthrown leader. Buck, to whom fair play was a
forgotten code, likewise sprang upon Spitz. But François, chuckling at
the incident while unswerving in the administration of justice, brought
his lash down upon Buck with all his might. This failed to drive Buck
from his prostrate rival, and the butt of the whip was brought into
play. Half-stunned by the blow, Buck was knocked backward and the lash
laid upon him again and again, while Spitz soundly punished the many
times offending Pike.

In the days that followed, as Dawson grew closer and closer, Buck still
continued to interfere between Spitz and the culprits; but he did it
craftily, when François was not around, With the covert mutiny of Buck,
a general insubordination sprang up and increased. Dave and Sol-leks
were unaffected, but the rest of the team went from bad to worse.
Things no longer went right. There was continual bickering and
jangling. Trouble was always afoot, and at the bottom of it was Buck.
He kept François busy, for the dog-driver was in constant apprehension
of the life-and-death struggle between the two which he knew must take
place sooner or later; and on more than one night the sounds of
quarrelling and strife among the other dogs turned him out of his
sleeping robe, fearful that Buck and Spitz were at it.

But the opportunity did not present itself, and they pulled into Dawson
one dreary afternoon with the great fight still to come. Here were many
men, and countless dogs, and Buck found them all at work. It seemed the
ordained order of things that dogs should work. All day they swung up
and down the main street in long teams, and in the night their jingling
bells still went by. They hauled cabin logs and firewood, freighted up
to the mines, and did all manner of work that horses did in the Santa
Clara Valley. Here and there Buck met Southland dogs, but in the main
they were the wild wolf husky breed. Every night, regularly, at nine,
at twelve, at three, they lifted a nocturnal song, a weird and eerie
chant, in which it was Buck’s delight to join.

With the aurora borealis flaming coldly overhead, or the stars leaping
in the frost dance, and the land numb and frozen under its pall of
snow, this song of the huskies might have been the defiance of life,
only it was pitched in minor key, with long-drawn wailings and
half-sobs, and was more the pleading of life, the articulate travail of
existence. It was an old song, old as the breed itself—one of the first
songs of the younger world in a day when songs were sad. It was
invested with the woe of unnumbered generations, this plaint by which
Buck was so strangely stirred. When he moaned and sobbed, it was with
the pain of living that was of old the pain of his wild fathers, and
the fear and mystery of the cold and dark that was to them fear and
mystery. And that he should be stirred by it marked the completeness
with which he harked back through the ages of fire and roof to the raw
beginnings of life in the howling ages.

Seven days from the time they pulled into Dawson, they dropped down the
steep bank by the Barracks to the Yukon Trail, and pulled for Dyea and
Salt Water. Perrault was carrying despatches if anything more urgent
than those he had brought in; also, the travel pride had gripped him,
and he purposed to make the record trip of the year. Several things
favored him in this. The week’s rest had recuperated the dogs and put
them in thorough trim. The trail they had broken into the country was
packed hard by later journeyers. And further, the police had arranged
in two or three places deposits of grub for dog and man, and he was
travelling light.

They made Sixty Mile, which is a fifty-mile run, on the first day; and
the second day saw them booming up the Yukon well on their way to
Pelly. But such splendid running was achieved not without great trouble
and vexation on the part of François. The insidious revolt led by Buck
had destroyed the solidarity of the team. It no longer was as one dog
leaping in the traces. The encouragement Buck gave the rebels led them
into all kinds of petty misdemeanors. No more was Spitz a leader
greatly to be feared. The old awe departed, and they grew equal to
challenging his authority. Pike robbed him of half a fish one night,
and gulped it down under the protection of Buck. Another night Dub and
Joe fought Spitz and made him forego the punishment they deserved. And
even Billee, the good-natured, was less good-natured, and whined not
half so placatingly as in former days. Buck never came near Spitz
without snarling and bristling menacingly. In fact, his conduct
approached that of a bully, and he was given to swaggering up and down
before Spitz’s very nose.

The breaking down of discipline likewise affected the dogs in their
relations with one another. They quarrelled and bickered more than ever
among themselves, till at times the camp was a howling bedlam. Dave and
Sol-leks alone were unaltered, though they were made irritable by the
unending squabbling. François swore strange barbarous oaths, and
stamped the snow in futile rage, and tore his hair. His lash was always
singing among the dogs, but it was of small avail. Directly his back
was turned they were at it again. He backed up Spitz with his whip,
while Buck backed up the remainder of the team. François knew he was
behind all the trouble, and Buck knew he knew; but Buck was too clever
ever again to be caught red-handed. He worked faithfully in the
harness, for the toil had become a delight to him; yet it was a greater
delight slyly to precipitate a fight amongst his mates and tangle the
traces.

At the mouth of the Tahkeena, one night after supper, Dub turned up a
snowshoe rabbit, blundered it, and missed. In a second the whole team
was in full cry. A hundred yards away was a camp of the Northwest
Police, with fifty dogs, huskies all, who joined the chase. The rabbit
sped down the river, turned off into a small creek, up the frozen bed
of which it held steadily. It ran lightly on the surface of the snow,
while the dogs ploughed through by main strength. Buck led the pack,
sixty strong, around bend after bend, but he could not gain. He lay
down low to the race, whining eagerly, his splendid body flashing
forward, leap by leap, in the wan white moonlight. And leap by leap,
like some pale frost wraith, the snowshoe rabbit flashed on ahead.

All that stirring of old instincts which at stated periods drives men
out from the sounding cities to forest and plain to kill things by
chemically propelled leaden pellets, the blood lust, the joy to
kill—all this was Buck’s, only it was infinitely more intimate. He was
ranging at the head of the pack, running the wild thing down, the
living meat, to kill with his own teeth and wash his muzzle to the eyes
in warm blood.

There is an ecstasy that marks the summit of life, and beyond which
life cannot rise. And such is the paradox of living, this ecstasy comes
when one is most alive, and it comes as a complete forgetfulness that
one is alive. This ecstasy, this forgetfulness of living, comes to the
artist, caught up and out of himself in a sheet of flame; it comes to
the soldier, war-mad on a stricken field and refusing quarter; and it
came to Buck, leading the pack, sounding the old wolf-cry, straining
after the food that was alive and that fled swiftly before him through
the moonlight. He was sounding the deeps of his nature, and of the
parts of his nature that were deeper than he, going back into the womb
of Time. He was mastered by the sheer surging of life, the tidal wave
of being, the perfect joy of each separate muscle, joint, and sinew in
that it was everything that was not death, that it was aglow and
rampant, expressing itself in movement, flying exultantly under the
stars and over the face of dead matter that did not move.

But Spitz, cold and calculating even in his supreme moods, left the
pack and cut across a narrow neck of land where the creek made a long
bend around. Buck did not know of this, and as he rounded the bend, the
frost wraith of a rabbit still flitting before him, he saw another and
larger frost wraith leap from the overhanging bank into the immediate
path of the rabbit. It was Spitz. The rabbit could not turn, and as the
white teeth broke its back in mid air it shrieked as loudly as a
stricken man may shriek. At sound of this, the cry of Life plunging
down from Life’s apex in the grip of Death, the full pack at Buck’s
heels raised a hell’s chorus of delight.

Buck did not cry out. He did not check himself, but drove in upon
Spitz, shoulder to shoulder, so hard that he missed the throat. They
rolled over and over in the powdery snow. Spitz gained his feet almost
as though he had not been overthrown, slashing Buck down the shoulder
and leaping clear. Twice his teeth clipped together, like the steel
jaws of a trap, as he backed away for better footing, with lean and
lifting lips that writhed and snarled.

In a flash Buck knew it. The time had come. It was to the death. As
they circled about, snarling, ears laid back, keenly watchful for the
advantage, the scene came to Buck with a sense of familiarity. He
seemed to remember it all,—the white woods, and earth, and moonlight,
and the thrill of battle. Over the whiteness and silence brooded a
ghostly calm. There was not the faintest whisper of air—nothing moved,
not a leaf quivered, the visible breaths of the dogs rising slowly and
lingering in the frosty air. They had made short work of the snowshoe
rabbit, these dogs that were ill-tamed wolves; and they were now drawn
up in an expectant circle. They, too, were silent, their eyes only
gleaming and their breaths drifting slowly upward. To Buck it was
nothing new or strange, this scene of old time. It was as though it had
always been, the wonted way of things.

Spitz was a practised fighter. From Spitzbergen through the Arctic, and
across Canada and the Barrens, he had held his own with all manner of
dogs and achieved to mastery over them. Bitter rage was his, but never
blind rage. In passion to rend and destroy, he never forgot that his
enemy was in like passion to rend and destroy. He never rushed till he
was prepared to receive a rush; never attacked till he had first
defended that attack.

In vain Buck strove to sink his teeth in the neck of the big white dog.
Wherever his fangs struck for the softer flesh, they were countered by
the fangs of Spitz. Fang clashed fang, and lips were cut and bleeding,
but Buck could not penetrate his enemy’s guard. Then he warmed up and
enveloped Spitz in a whirlwind of rushes. Time and time again he tried
for the snow-white throat, where life bubbled near to the surface, and
each time and every time Spitz slashed him and got away. Then Buck took
to rushing, as though for the throat, when, suddenly drawing back his
head and curving in from the side, he would drive his shoulder at the
shoulder of Spitz, as a ram by which to overthrow him. But instead,
Buck’s shoulder was slashed down each time as Spitz leaped lightly
away.

Spitz was untouched, while Buck was streaming with blood and panting
hard. The fight was growing desperate. And all the while the silent and
wolfish circle waited to finish off whichever dog went down. As Buck
grew winded, Spitz took to rushing, and he kept him staggering for
footing. Once Buck went over, and the whole circle of sixty dogs
started up; but he recovered himself, almost in mid air, and the circle
sank down again and waited.

But Buck possessed a quality that made for greatness—imagination. He
fought by instinct, but he could fight by head as well. He rushed, as
though attempting the old shoulder trick, but at the last instant swept
low to the snow and in. His teeth closed on Spitz’s left fore leg.
There was a crunch of breaking bone, and the white dog faced him on
three legs. Thrice he tried to knock him over, then repeated the trick
and broke the right fore leg. Despite the pain and helplessness, Spitz
struggled madly to keep up. He saw the silent circle, with gleaming
eyes, lolling tongues, and silvery breaths drifting upward, closing in
upon him as he had seen similar circles close in upon beaten
antagonists in the past. Only this time he was the one who was beaten.

There was no hope for him. Buck was inexorable. Mercy was a thing
reserved for gentler climes. He manœuvred for the final rush. The
circle had tightened till he could feel the breaths of the huskies on
his flanks. He could see them, beyond Spitz and to either side, half
crouching for the spring, their eyes fixed upon him. A pause seemed to
fall. Every animal was motionless as though turned to stone. Only Spitz
quivered and bristled as he staggered back and forth, snarling with
horrible menace, as though to frighten off impending death. Then Buck
sprang in and out; but while he was in, shoulder had at last squarely
met shoulder. The dark circle became a dot on the moon-flooded snow as
Spitz disappeared from view. Buck stood and looked on, the successful
champion, the dominant primordial beast who had made his kill and found
it good.
`},{fileName:`the_law_of_club_and_fang.txt`,contents:`Chapter II. The Law of Club and Fang


Buck’s first day on the Dyea beach was like a nightmare. Every hour was
filled with shock and surprise. He had been suddenly jerked from the
heart of civilization and flung into the heart of things primordial. No
lazy, sun-kissed life was this, with nothing to do but loaf and be
bored. Here was neither peace, nor rest, nor a moment’s safety. All was
confusion and action, and every moment life and limb were in peril.
There was imperative need to be constantly alert; for these dogs and
men were not town dogs and men. They were savages, all of them, who
knew no law but the law of club and fang.

He had never seen dogs fight as these wolfish creatures fought, and his
first experience taught him an unforgetable lesson. It is true, it was
a vicarious experience, else he would not have lived to profit by it.
Curly was the victim. They were camped near the log store, where she,
in her friendly way, made advances to a husky dog the size of a
full-grown wolf, though not half so large as she. There was no warning,
only a leap in like a flash, a metallic clip of teeth, a leap out
equally swift, and Curly’s face was ripped open from eye to jaw.

It was the wolf manner of fighting, to strike and leap away; but there
was more to it than this. Thirty or forty huskies ran to the spot and
surrounded the combatants in an intent and silent circle. Buck did not
comprehend that silent intentness, nor the eager way with which they
were licking their chops. Curly rushed her antagonist, who struck again
and leaped aside. He met her next rush with his chest, in a peculiar
fashion that tumbled her off her feet. She never regained them. This
was what the onlooking huskies had waited for. They closed in upon her,
snarling and yelping, and she was buried, screaming with agony, beneath
the bristling mass of bodies.

So sudden was it, and so unexpected, that Buck was taken aback. He saw
Spitz run out his scarlet tongue in a way he had of laughing; and he
saw François, swinging an axe, spring into the mess of dogs. Three men
with clubs were helping him to scatter them. It did not take long. Two
minutes from the time Curly went down, the last of her assailants were
clubbed off. But she lay there limp and lifeless in the bloody,
trampled snow, almost literally torn to pieces, the swart half-breed
standing over her and cursing horribly. The scene often came back to
Buck to trouble him in his sleep. So that was the way. No fair play.
Once down, that was the end of you. Well, he would see to it that he
never went down. Spitz ran out his tongue and laughed again, and from
that moment Buck hated him with a bitter and deathless hatred.

Before he had recovered from the shock caused by the tragic passing of
Curly, he received another shock. François fastened upon him an
arrangement of straps and buckles. It was a harness, such as he had
seen the grooms put on the horses at home. And as he had seen horses
work, so he was set to work, hauling François on a sled to the forest
that fringed the valley, and returning with a load of firewood. Though
his dignity was sorely hurt by thus being made a draught animal, he was
too wise to rebel. He buckled down with a will and did his best, though
it was all new and strange. François was stern, demanding instant
obedience, and by virtue of his whip receiving instant obedience; while
Dave, who was an experienced wheeler, nipped Buck’s hind quarters
whenever he was in error. Spitz was the leader, likewise experienced,
and while he could not always get at Buck, he growled sharp reproof now
and again, or cunningly threw his weight in the traces to jerk Buck
into the way he should go. Buck learned easily, and under the combined
tuition of his two mates and François made remarkable progress. Ere
they returned to camp he knew enough to stop at “ho,” to go ahead at
“mush,” to swing wide on the bends, and to keep clear of the wheeler
when the loaded sled shot downhill at their heels.

“T’ree vair’ good dogs,” François told Perrault. “Dat Buck, heem pool
lak hell. I tich heem queek as anyt’ing.”

By afternoon, Perrault, who was in a hurry to be on the trail with his
despatches, returned with two more dogs. “Billee” and “Joe” he called
them, two brothers, and true huskies both. Sons of the one mother
though they were, they were as different as day and night. Billee’s one
fault was his excessive good nature, while Joe was the very opposite,
sour and introspective, with a perpetual snarl and a malignant eye.
Buck received them in comradely fashion, Dave ignored them, while Spitz
proceeded to thrash first one and then the other. Billee wagged his
tail appeasingly, turned to run when he saw that appeasement was of no
avail, and cried (still appeasingly) when Spitz’s sharp teeth scored
his flank. But no matter how Spitz circled, Joe whirled around on his
heels to face him, mane bristling, ears laid back, lips writhing and
snarling, jaws clipping together as fast as he could snap, and eyes
diabolically gleaming—the incarnation of belligerent fear. So terrible
was his appearance that Spitz was forced to forego disciplining him;
but to cover his own discomfiture he turned upon the inoffensive and
wailing Billee and drove him to the confines of the camp.

By evening Perrault secured another dog, an old husky, long and lean
and gaunt, with a battle-scarred face and a single eye which flashed a
warning of prowess that commanded respect. He was called Sol-leks,
which means the Angry One. Like Dave, he asked nothing, gave nothing,
expected nothing; and when he marched slowly and deliberately into
their midst, even Spitz left him alone. He had one peculiarity which
Buck was unlucky enough to discover. He did not like to be approached
on his blind side. Of this offence Buck was unwittingly guilty, and the
first knowledge he had of his indiscretion was when Sol-leks whirled
upon him and slashed his shoulder to the bone for three inches up and
down. Forever after Buck avoided his blind side, and to the last of
their comradeship had no more trouble. His only apparent ambition, like
Dave’s, was to be left alone; though, as Buck was afterward to learn,
each of them possessed one other and even more vital ambition.

That night Buck faced the great problem of sleeping. The tent,
illumined by a candle, glowed warmly in the midst of the white plain;
and when he, as a matter of course, entered it, both Perrault and
François bombarded him with curses and cooking utensils, till he
recovered from his consternation and fled ignominiously into the outer
cold. A chill wind was blowing that nipped him sharply and bit with
especial venom into his wounded shoulder. He lay down on the snow and
attempted to sleep, but the frost soon drove him shivering to his feet.
Miserable and disconsolate, he wandered about among the many tents,
only to find that one place was as cold as another. Here and there
savage dogs rushed upon him, but he bristled his neck-hair and snarled
(for he was learning fast), and they let him go his way unmolested.

Finally an idea came to him. He would return and see how his own
team-mates were making out. To his astonishment, they had disappeared.
Again he wandered about through the great camp, looking for them, and
again he returned. Were they in the tent? No, that could not be, else
he would not have been driven out. Then where could they possibly be?
With drooping tail and shivering body, very forlorn indeed, he
aimlessly circled the tent. Suddenly the snow gave way beneath his fore
legs and he sank down. Something wriggled under his feet. He sprang
back, bristling and snarling, fearful of the unseen and unknown. But a
friendly little yelp reassured him, and he went back to investigate. A
whiff of warm air ascended to his nostrils, and there, curled up under
the snow in a snug ball, lay Billee. He whined placatingly, squirmed
and wriggled to show his good will and intentions, and even ventured,
as a bribe for peace, to lick Buck’s face with his warm wet tongue.

Another lesson. So that was the way they did it, eh? Buck confidently
selected a spot, and with much fuss and waste effort proceeded to dig a
hole for himself. In a trice the heat from his body filled the confined
space and he was asleep. The day had been long and arduous, and he
slept soundly and comfortably, though he growled and barked and
wrestled with bad dreams.

Nor did he open his eyes till roused by the noises of the waking camp.
At first he did not know where he was. It had snowed during the night
and he was completely buried. The snow walls pressed him on every side,
and a great surge of fear swept through him—the fear of the wild thing
for the trap. It was a token that he was harking back through his own
life to the lives of his forebears; for he was a civilized dog, an
unduly civilized dog, and of his own experience knew no trap and so
could not of himself fear it. The muscles of his whole body contracted
spasmodically and instinctively, the hair on his neck and shoulders
stood on end, and with a ferocious snarl he bounded straight up into
the blinding day, the snow flying about him in a flashing cloud. Ere he
landed on his feet, he saw the white camp spread out before him and
knew where he was and remembered all that had passed from the time he
went for a stroll with Manuel to the hole he had dug for himself the
night before.

A shout from François hailed his appearance. “Wot I say?” the
dog-driver cried to Perrault. “Dat Buck for sure learn queek as
anyt’ing.”

Perrault nodded gravely. As courier for the Canadian Government,
bearing important despatches, he was anxious to secure the best dogs,
and he was particularly gladdened by the possession of Buck.

Three more huskies were added to the team inside an hour, making a
total of nine, and before another quarter of an hour had passed they
were in harness and swinging up the trail toward the Dyea Cañon. Buck
was glad to be gone, and though the work was hard he found he did not
particularly despise it. He was surprised at the eagerness which
animated the whole team and which was communicated to him; but still
more surprising was the change wrought in Dave and Sol-leks. They were
new dogs, utterly transformed by the harness. All passiveness and
unconcern had dropped from them. They were alert and active, anxious
that the work should go well, and fiercely irritable with whatever, by
delay or confusion, retarded that work. The toil of the traces seemed
the supreme expression of their being, and all that they lived for and
the only thing in which they took delight.

Dave was wheeler or sled dog, pulling in front of him was Buck, then
came Sol-leks; the rest of the team was strung out ahead, single file,
to the leader, which position was filled by Spitz.

Buck had been purposely placed between Dave and Sol-leks so that he
might receive instruction. Apt scholar that he was, they were equally
apt teachers, never allowing him to linger long in error, and enforcing
their teaching with their sharp teeth. Dave was fair and very wise. He
never nipped Buck without cause, and he never failed to nip him when he
stood in need of it. As François’s whip backed him up, Buck found it to
be cheaper to mend his ways than to retaliate. Once, during a brief
halt, when he got tangled in the traces and delayed the start, both
Dave and Sol-leks flew at him and administered a sound trouncing. The
resulting tangle was even worse, but Buck took good care to keep the
traces clear thereafter; and ere the day was done, so well had he
mastered his work, his mates about ceased nagging him. François’s whip
snapped less frequently, and Perrault even honored Buck by lifting up
his feet and carefully examining them.

It was a hard day’s run, up the Cañon, through Sheep Camp, past the
Scales and the timber line, across glaciers and snowdrifts hundreds of
feet deep, and over the great Chilcoot Divide, which stands between the
salt water and the fresh and guards forbiddingly the sad and lonely
North. They made good time down the chain of lakes which fills the
craters of extinct volcanoes, and late that night pulled into the huge
camp at the head of Lake Bennett, where thousands of goldseekers were
building boats against the break-up of the ice in the spring. Buck made
his hole in the snow and slept the sleep of the exhausted just, but all
too early was routed out in the cold darkness and harnessed with his
mates to the sled.

That day they made forty miles, the trail being packed; but the next
day, and for many days to follow, they broke their own trail, worked
harder, and made poorer time. As a rule, Perrault travelled ahead of
the team, packing the snow with webbed shoes to make it easier for
them. François, guiding the sled at the gee-pole, sometimes exchanged
places with him, but not often. Perrault was in a hurry, and he prided
himself on his knowledge of ice, which knowledge was indispensable, for
the fall ice was very thin, and where there was swift water, there was
no ice at all.

Day after day, for days unending, Buck toiled in the traces. Always,
they broke camp in the dark, and the first gray of dawn found them
hitting the trail with fresh miles reeled off behind them. And always
they pitched camp after dark, eating their bit of fish, and crawling to
sleep into the snow. Buck was ravenous. The pound and a half of
sun-dried salmon, which was his ration for each day, seemed to go
nowhere. He never had enough, and suffered from perpetual hunger pangs.
Yet the other dogs, because they weighed less and were born to the
life, received a pound only of the fish and managed to keep in good
condition.

He swiftly lost the fastidiousness which had characterized his old
life. A dainty eater, he found that his mates, finishing first, robbed
him of his unfinished ration. There was no defending it. While he was
fighting off two or three, it was disappearing down the throats of the
others. To remedy this, he ate as fast as they; and, so greatly did
hunger compel him, he was not above taking what did not belong to him.
He watched and learned. When he saw Pike, one of the new dogs, a clever
malingerer and thief, slyly steal a slice of bacon when Perrault’s back
was turned, he duplicated the performance the following day, getting
away with the whole chunk. A great uproar was raised, but he was
unsuspected; while Dub, an awkward blunderer who was always getting
caught, was punished for Buck’s misdeed.

This first theft marked Buck as fit to survive in the hostile Northland
environment. It marked his adaptability, his capacity to adjust himself
to changing conditions, the lack of which would have meant swift and
terrible death. It marked, further, the decay or going to pieces of his
moral nature, a vain thing and a handicap in the ruthless struggle for
existence. It was all well enough in the Southland, under the law of
love and fellowship, to respect private property and personal feelings;
but in the Northland, under the law of club and fang, whoso took such
things into account was a fool, and in so far as he observed them he
would fail to prosper.

Not that Buck reasoned it out. He was fit, that was all, and
unconsciously he accommodated himself to the new mode of life. All his
days, no matter what the odds, he had never run from a fight. But the
club of the man in the red sweater had beaten into him a more
fundamental and primitive code. Civilized, he could have died for a
moral consideration, say the defence of Judge Miller’s riding-whip; but
the completeness of his decivilization was now evidenced by his ability
to flee from the defence of a moral consideration and so save his hide.
He did not steal for joy of it, but because of the clamor of his
stomach. He did not rob openly, but stole secretly and cunningly, out
of respect for club and fang. In short, the things he did were done
because it was easier to do them than not to do them.

His development (or retrogression) was rapid. His muscles became hard
as iron, and he grew callous to all ordinary pain. He achieved an
internal as well as external economy. He could eat anything, no matter
how loathsome or indigestible; and, once eaten, the juices of his
stomach extracted the last least particle of nutriment; and his blood
carried it to the farthest reaches of his body, building it into the
toughest and stoutest of tissues. Sight and scent became remarkably
keen, while his hearing developed such acuteness that in his sleep he
heard the faintest sound and knew whether it heralded peace or peril.
He learned to bite the ice out with his teeth when it collected between
his toes; and when he was thirsty and there was a thick scum of ice
over the water hole, he would break it by rearing and striking it with
stiff fore legs. His most conspicuous trait was an ability to scent the
wind and forecast it a night in advance. No matter how breathless the
air when he dug his nest by tree or bank, the wind that later blew
inevitably found him to leeward, sheltered and snug.

And not only did he learn by experience, but instincts long dead became
alive again. The domesticated generations fell from him. In vague ways
he remembered back to the youth of the breed, to the time the wild dogs
ranged in packs through the primeval forest and killed their meat as
they ran it down. It was no task for him to learn to fight with cut and
slash and the quick wolf snap. In this manner had fought forgotten
ancestors. They quickened the old life within him, and the old tricks
which they had stamped into the heredity of the breed were his tricks.
They came to him without effort or discovery, as though they had been
his always. And when, on the still cold nights, he pointed his nose at
a star and howled long and wolflike, it was his ancestors, dead and
dust, pointing nose at star and howling down through the centuries and
through him. And his cadences were their cadences, the cadences which
voiced their woe and what to them was the meaning of the stiffness, and
the cold, and dark.

Thus, as token of what a puppet thing life is, the ancient song surged
through him and he came into his own again; and he came because men had
found a yellow metal in the North, and because Manuel was a gardener’s
helper whose wages did not lap over the needs of his wife and divers
small copies of himself.
`},{fileName:`the_sounding_of_the_call.txt`,contents:`Chapter VII. The Sounding of the Call


When Buck earned sixteen hundred dollars in five minutes for John
Thornton, he made it possible for his master to pay off certain debts
and to journey with his partners into the East after a fabled lost
mine, the history of which was as old as the history of the country.
Many men had sought it; few had found it; and more than a few there
were who had never returned from the quest. This lost mine was steeped
in tragedy and shrouded in mystery. No one knew of the first man. The
oldest tradition stopped before it got back to him. From the beginning
there had been an ancient and ramshackle cabin. Dying men had sworn to
it, and to the mine the site of which it marked, clinching their
testimony with nuggets that were unlike any known grade of gold in the
Northland.

But no living man had looted this treasure house, and the dead were
dead; wherefore John Thornton and Pete and Hans, with Buck and half a
dozen other dogs, faced into the East on an unknown trail to achieve
where men and dogs as good as themselves had failed. They sledded
seventy miles up the Yukon, swung to the left into the Stewart River,
passed the Mayo and the McQuestion, and held on until the Stewart
itself became a streamlet, threading the upstanding peaks which marked
the backbone of the continent.

John Thornton asked little of man or nature. He was unafraid of the
wild. With a handful of salt and a rifle he could plunge into the
wilderness and fare wherever he pleased and as long as he pleased.
Being in no haste, Indian fashion, he hunted his dinner in the course
of the day’s travel; and if he failed to find it, like the Indian, he
kept on travelling, secure in the knowledge that sooner or later he
would come to it. So, on this great journey into the East, straight
meat was the bill of fare, ammunition and tools principally made up the
load on the sled, and the time-card was drawn upon the limitless
future.

To Buck it was boundless delight, this hunting, fishing, and indefinite
wandering through strange places. For weeks at a time they would hold
on steadily, day after day; and for weeks upon end they would camp,
here and there, the dogs loafing and the men burning holes through
frozen muck and gravel and washing countless pans of dirt by the heat
of the fire. Sometimes they went hungry, sometimes they feasted
riotously, all according to the abundance of game and the fortune of
hunting. Summer arrived, and dogs and men packed on their backs, rafted
across blue mountain lakes, and descended or ascended unknown rivers in
slender boats whipsawed from the standing forest.

The months came and went, and back and forth they twisted through the
uncharted vastness, where no men were and yet where men had been if the
Lost Cabin were true. They went across divides in summer blizzards,
shivered under the midnight sun on naked mountains between the timber
line and the eternal snows, dropped into summer valleys amid swarming
gnats and flies, and in the shadows of glaciers picked strawberries and
flowers as ripe and fair as any the Southland could boast. In the fall
of the year they penetrated a weird lake country, sad and silent, where
wildfowl had been, but where then there was no life nor sign of
life—only the blowing of chill winds, the forming of ice in sheltered
places, and the melancholy rippling of waves on lonely beaches.

And through another winter they wandered on the obliterated trails of
men who had gone before. Once, they came upon a path blazed through the
forest, an ancient path, and the Lost Cabin seemed very near. But the
path began nowhere and ended nowhere, and it remained mystery, as the
man who made it and the reason he made it remained mystery. Another
time they chanced upon the time-graven wreckage of a hunting lodge, and
amid the shreds of rotted blankets John Thornton found a long-barrelled
flint-lock. He knew it for a Hudson Bay Company gun of the young days
in the Northwest, when such a gun was worth its height in beaver skins
packed flat, And that was all—no hint as to the man who in an early day
had reared the lodge and left the gun among the blankets.

Spring came on once more, and at the end of all their wandering they
found, not the Lost Cabin, but a shallow placer in a broad valley where
the gold showed like yellow butter across the bottom of the
washing-pan. They sought no farther. Each day they worked earned them
thousands of dollars in clean dust and nuggets, and they worked every
day. The gold was sacked in moose-hide bags, fifty pounds to the bag,
and piled like so much firewood outside the spruce-bough lodge. Like
giants they toiled, days flashing on the heels of days like dreams as
they heaped the treasure up.

There was nothing for the dogs to do, save the hauling in of meat now
and again that Thornton killed, and Buck spent long hours musing by the
fire. The vision of the short-legged hairy man came to him more
frequently, now that there was little work to be done; and often,
blinking by the fire, Buck wandered with him in that other world which
he remembered.

The salient thing of this other world seemed fear. When he watched the
hairy man sleeping by the fire, head between his knees and hands
clasped above, Buck saw that he slept restlessly, with many starts and
awakenings, at which times he would peer fearfully into the darkness
and fling more wood upon the fire. Did they walk by the beach of a sea,
where the hairy man gathered shellfish and ate them as he gathered, it
was with eyes that roved everywhere for hidden danger and with legs
prepared to run like the wind at its first appearance. Through the
forest they crept noiselessly, Buck at the hairy man’s heels; and they
were alert and vigilant, the pair of them, ears twitching and moving
and nostrils quivering, for the man heard and smelled as keenly as
Buck. The hairy man could spring up into the trees and travel ahead as
fast as on the ground, swinging by the arms from limb to limb,
sometimes a dozen feet apart, letting go and catching, never falling,
never missing his grip. In fact, he seemed as much at home among the
trees as on the ground; and Buck had memories of nights of vigil spent
beneath trees wherein the hairy man roosted, holding on tightly as he
slept.

And closely akin to the visions of the hairy man was the call still
sounding in the depths of the forest. It filled him with a great unrest
and strange desires. It caused him to feel a vague, sweet gladness, and
he was aware of wild yearnings and stirrings for he knew not what.
Sometimes he pursued the call into the forest, looking for it as though
it were a tangible thing, barking softly or defiantly, as the mood
might dictate. He would thrust his nose into the cool wood moss, or
into the black soil where long grasses grew, and snort with joy at the
fat earth smells; or he would crouch for hours, as if in concealment,
behind fungus-covered trunks of fallen trees, wide-eyed and wide-eared
to all that moved and sounded about him. It might be, lying thus, that
he hoped to surprise this call he could not understand. But he did not
know why he did these various things. He was impelled to do them, and
did not reason about them at all.

Irresistible impulses seized him. He would be lying in camp, dozing
lazily in the heat of the day, when suddenly his head would lift and
his ears cock up, intent and listening, and he would spring to his feet
and dash away, and on and on, for hours, through the forest aisles and
across the open spaces where the niggerheads bunched. He loved to run
down dry watercourses, and to creep and spy upon the bird life in the
woods. For a day at a time he would lie in the underbrush where he
could watch the partridges drumming and strutting up and down. But
especially he loved to run in the dim twilight of the summer midnights,
listening to the subdued and sleepy murmurs of the forest, reading
signs and sounds as man may read a book, and seeking for the mysterious
something that called—called, waking or sleeping, at all times, for him
to come.

One night he sprang from sleep with a start, eager-eyed, nostrils
quivering and scenting, his mane bristling in recurrent waves. From the
forest came the call (or one note of it, for the call was many noted),
distinct and definite as never before,—a long-drawn howl, like, yet
unlike, any noise made by husky dog. And he knew it, in the old
familiar way, as a sound heard before. He sprang through the sleeping
camp and in swift silence dashed through the woods. As he drew closer
to the cry he went more slowly, with caution in every movement, till he
came to an open place among the trees, and looking out saw, erect on
haunches, with nose pointed to the sky, a long, lean, timber wolf.

He had made no noise, yet it ceased from its howling and tried to sense
his presence. Buck stalked into the open, half crouching, body gathered
compactly together, tail straight and stiff, feet falling with unwonted
care. Every movement advertised commingled threatening and overture of
friendliness. It was the menacing truce that marks the meeting of wild
beasts that prey. But the wolf fled at sight of him. He followed, with
wild leapings, in a frenzy to overtake. He ran him into a blind
channel, in the bed of the creek where a timber jam barred the way. The
wolf whirled about, pivoting on his hind legs after the fashion of Joe
and of all cornered husky dogs, snarling and bristling, clipping his
teeth together in a continuous and rapid succession of snaps.

Buck did not attack, but circled him about and hedged him in with
friendly advances. The wolf was suspicious and afraid; for Buck made
three of him in weight, while his head barely reached Buck’s shoulder.
Watching his chance, he darted away, and the chase was resumed. Time
and again he was cornered, and the thing repeated, though he was in
poor condition, or Buck could not so easily have overtaken him. He
would run till Buck’s head was even with his flank, when he would whirl
around at bay, only to dash away again at the first opportunity.

But in the end Buck’s pertinacity was rewarded; for the wolf, finding
that no harm was intended, finally sniffed noses with him. Then they
became friendly, and played about in the nervous, half-coy way with
which fierce beasts belie their fierceness. After some time of this the
wolf started off at an easy lope in a manner that plainly showed he was
going somewhere. He made it clear to Buck that he was to come, and they
ran side by side through the sombre twilight, straight up the creek
bed, into the gorge from which it issued, and across the bleak divide
where it took its rise.

On the opposite slope of the watershed they came down into a level
country where were great stretches of forest and many streams, and
through these great stretches they ran steadily, hour after hour, the
sun rising higher and the day growing warmer. Buck was wildly glad. He
knew he was at last answering the call, running by the side of his wood
brother toward the place from where the call surely came. Old memories
were coming upon him fast, and he was stirring to them as of old he
stirred to the realities of which they were the shadows. He had done
this thing before, somewhere in that other and dimly remembered world,
and he was doing it again, now, running free in the open, the unpacked
earth underfoot, the wide sky overhead.

They stopped by a running stream to drink, and, stopping, Buck
remembered John Thornton. He sat down. The wolf started on toward the
place from where the call surely came, then returned to him, sniffing
noses and making actions as though to encourage him. But Buck turned
about and started slowly on the back track. For the better part of an
hour the wild brother ran by his side, whining softly. Then he sat
down, pointed his nose upward, and howled. It was a mournful howl, and
as Buck held steadily on his way he heard it grow faint and fainter
until it was lost in the distance.

John Thornton was eating dinner when Buck dashed into camp and sprang
upon him in a frenzy of affection, overturning him, scrambling upon
him, licking his face, biting his hand—“playing the general tom-fool,”
as John Thornton characterized it, the while he shook Buck back and
forth and cursed him lovingly.

For two days and nights Buck never left camp, never let Thornton out of
his sight. He followed him about at his work, watched him while he ate,
saw him into his blankets at night and out of them in the morning. But
after two days the call in the forest began to sound more imperiously
than ever. Buck’s restlessness came back on him, and he was haunted by
recollections of the wild brother, and of the smiling land beyond the
divide and the run side by side through the wide forest stretches. Once
again he took to wandering in the woods, but the wild brother came no
more; and though he listened through long vigils, the mournful howl was
never raised.

He began to sleep out at night, staying away from camp for days at a
time; and once he crossed the divide at the head of the creek and went
down into the land of timber and streams. There he wandered for a week,
seeking vainly for fresh sign of the wild brother, killing his meat as
he travelled and travelling with the long, easy lope that seems never
to tire. He fished for salmon in a broad stream that emptied somewhere
into the sea, and by this stream he killed a large black bear, blinded
by the mosquitoes while likewise fishing, and raging through the forest
helpless and terrible. Even so, it was a hard fight, and it aroused the
last latent remnants of Buck’s ferocity. And two days later, when he
returned to his kill and found a dozen wolverenes quarrelling over the
spoil, he scattered them like chaff; and those that fled left two
behind who would quarrel no more.

The blood-longing became stronger than ever before. He was a killer, a
thing that preyed, living on the things that lived, unaided, alone, by
virtue of his own strength and prowess, surviving triumphantly in a
hostile environment where only the strong survived. Because of all this
he became possessed of a great pride in himself, which communicated
itself like a contagion to his physical being. It advertised itself in
all his movements, was apparent in the play of every muscle, spoke
plainly as speech in the way he carried himself, and made his glorious
furry coat if anything more glorious. But for the stray brown on his
muzzle and above his eyes, and for the splash of white hair that ran
midmost down his chest, he might well have been mistaken for a gigantic
wolf, larger than the largest of the breed. From his St. Bernard father
he had inherited size and weight, but it was his shepherd mother who
had given shape to that size and weight. His muzzle was the long wolf
muzzle, save that it was larger than the muzzle of any wolf; and his
head, somewhat broader, was the wolf head on a massive scale.

His cunning was wolf cunning, and wild cunning; his intelligence,
shepherd intelligence and St. Bernard intelligence; and all this, plus
an experience gained in the fiercest of schools, made him as formidable
a creature as any that roamed the wild. A carnivorous animal living on
a straight meat diet, he was in full flower, at the high tide of his
life, overspilling with vigor and virility. When Thornton passed a
caressing hand along his back, a snapping and crackling followed the
hand, each hair discharging its pent magnetism at the contact. Every
part, brain and body, nerve tissue and fibre, was keyed to the most
exquisite pitch; and between all the parts there was a perfect
equilibrium or adjustment. To sights and sounds and events which
required action, he responded with lightning-like rapidity. Quickly as
a husky dog could leap to defend from attack or to attack, he could
leap twice as quickly. He saw the movement, or heard sound, and
responded in less time than another dog required to compass the mere
seeing or hearing. He perceived and determined and responded in the
same instant. In point of fact the three actions of perceiving,
determining, and responding were sequential; but so infinitesimal were
the intervals of time between them that they appeared simultaneous. His
muscles were surcharged with vitality, and snapped into play sharply,
like steel springs. Life streamed through him in splendid flood, glad
and rampant, until it seemed that it would burst him asunder in sheer
ecstasy and pour forth generously over the world.

“Never was there such a dog,” said John Thornton one day, as the
partners watched Buck marching out of camp.

“When he was made, the mould was broke,” said Pete.

“Py jingo! I t’ink so mineself,” Hans affirmed.

They saw him marching out of camp, but they did not see the instant and
terrible transformation which took place as soon as he was within the
secrecy of the forest. He no longer marched. At once he became a thing
of the wild, stealing along softly, cat-footed, a passing shadow that
appeared and disappeared among the shadows. He knew how to take
advantage of every cover, to crawl on his belly like a snake, and like
a snake to leap and strike. He could take a ptarmigan from its nest,
kill a rabbit as it slept, and snap in mid air the little chipmunks
fleeing a second too late for the trees. Fish, in open pools, were not
too quick for him; nor were beaver, mending their dams, too wary. He
killed to eat, not from wantonness; but he preferred to eat what he
killed himself. So a lurking humor ran through his deeds, and it was
his delight to steal upon the squirrels, and, when he all but had them,
to let them go, chattering in mortal fear to the treetops.

As the fall of the year came on, the moose appeared in greater
abundance, moving slowly down to meet the winter in the lower and less
rigorous valleys. Buck had already dragged down a stray part-grown
calf; but he wished strongly for larger and more formidable quarry, and
he came upon it one day on the divide at the head of the creek. A band
of twenty moose had crossed over from the land of streams and timber,
and chief among them was a great bull. He was in a savage temper, and,
standing over six feet from the ground, was as formidable an antagonist
as even Buck could desire. Back and forth the bull tossed his great
palmated antlers, branching to fourteen points and embracing seven feet
within the tips. His small eyes burned with a vicious and bitter light,
while he roared with fury at sight of Buck.

From the bull’s side, just forward of the flank, protruded a feathered
arrow-end, which accounted for his savageness. Guided by that instinct
which came from the old hunting days of the primordial world, Buck
proceeded to cut the bull out from the herd. It was no slight task. He
would bark and dance about in front of the bull, just out of reach of
the great antlers and of the terrible splay hoofs which could have
stamped his life out with a single blow. Unable to turn his back on the
fanged danger and go on, the bull would be driven into paroxysms of
rage. At such moments he charged Buck, who retreated craftily, luring
him on by a simulated inability to escape. But when he was thus
separated from his fellows, two or three of the younger bulls would
charge back upon Buck and enable the wounded bull to rejoin the herd.

There is a patience of the wild—dogged, tireless, persistent as life
itself—that holds motionless for endless hours the spider in its web,
the snake in its coils, the panther in its ambuscade; this patience
belongs peculiarly to life when it hunts its living food; and it
belonged to Buck as he clung to the flank of the herd, retarding its
march, irritating the young bulls, worrying the cows with their
half-grown calves, and driving the wounded bull mad with helpless rage.
For half a day this continued. Buck multiplied himself, attacking from
all sides, enveloping the herd in a whirlwind of menace, cutting out
his victim as fast as it could rejoin its mates, wearing out the
patience of creatures preyed upon, which is a lesser patience than that
of creatures preying.

As the day wore along and the sun dropped to its bed in the northwest
(the darkness had come back and the fall nights were six hours long),
the young bulls retraced their steps more and more reluctantly to the
aid of their beset leader. The down-coming winter was harrying them on
to the lower levels, and it seemed they could never shake off this
tireless creature that held them back. Besides, it was not the life of
the herd, or of the young bulls, that was threatened. The life of only
one member was demanded, which was a remoter interest than their lives,
and in the end they were content to pay the toll.

As twilight fell the old bull stood with lowered head, watching his
mates—the cows he had known, the calves he had fathered, the bulls he
had mastered—as they shambled on at a rapid pace through the fading
light. He could not follow, for before his nose leaped the merciless
fanged terror that would not let him go. Three hundredweight more than
half a ton he weighed; he had lived a long, strong life, full of fight
and struggle, and at the end he faced death at the teeth of a creature
whose head did not reach beyond his great knuckled knees.

From then on, night and day, Buck never left his prey, never gave it a
moment’s rest, never permitted it to browse the leaves of trees or the
shoots of young birch and willow. Nor did he give the wounded bull
opportunity to slake his burning thirst in the slender trickling
streams they crossed. Often, in desperation, he burst into long
stretches of flight. At such times Buck did not attempt to stay him,
but loped easily at his heels, satisfied with the way the game was
played, lying down when the moose stood still, attacking him fiercely
when he strove to eat or drink.

The great head drooped more and more under its tree of horns, and the
shambling trot grew weak and weaker. He took to standing for long
periods, with nose to the ground and dejected ears dropped limply; and
Buck found more time in which to get water for himself and in which to
rest. At such moments, panting with red lolling tongue and with eyes
fixed upon the big bull, it appeared to Buck that a change was coming
over the face of things. He could feel a new stir in the land. As the
moose were coming into the land, other kinds of life were coming in.
Forest and stream and air seemed palpitant with their presence. The
news of it was borne in upon him, not by sight, or sound, or smell, but
by some other and subtler sense. He heard nothing, saw nothing, yet
knew that the land was somehow different; that through it strange
things were afoot and ranging; and he resolved to investigate after he
had finished the business in hand.

At last, at the end of the fourth day, he pulled the great moose down.
For a day and a night he remained by the kill, eating and sleeping,
turn and turn about. Then, rested, refreshed and strong, he turned his
face toward camp and John Thornton. He broke into the long easy lope,
and went on, hour after hour, never at loss for the tangled way,
heading straight home through strange country with a certitude of
direction that put man and his magnetic needle to shame.

As he held on he became more and more conscious of the new stir in the
land. There was life abroad in it different from the life which had
been there throughout the summer. No longer was this fact borne in upon
him in some subtle, mysterious way. The birds talked of it, the
squirrels chattered about it, the very breeze whispered of it. Several
times he stopped and drew in the fresh morning air in great sniffs,
reading a message which made him leap on with greater speed. He was
oppressed with a sense of calamity happening, if it were not calamity
already happened; and as he crossed the last watershed and dropped down
into the valley toward camp, he proceeded with greater caution.

Three miles away he came upon a fresh trail that sent his neck hair
rippling and bristling, It led straight toward camp and John Thornton.
Buck hurried on, swiftly and stealthily, every nerve straining and
tense, alert to the multitudinous details which told a story—all but
the end. His nose gave him a varying description of the passage of the
life on the heels of which he was travelling. He remarked the pregnant
silence of the forest. The bird life had flitted. The squirrels were in
hiding. One only he saw,—a sleek gray fellow, flattened against a gray
dead limb so that he seemed a part of it, a woody excrescence upon the
wood itself.

As Buck slid along with the obscureness of a gliding shadow, his nose
was jerked suddenly to the side as though a positive force had gripped
and pulled it. He followed the new scent into a thicket and found Nig.
He was lying on his side, dead where he had dragged himself, an arrow
protruding, head and feathers, from either side of his body.

A hundred yards farther on, Buck came upon one of the sled-dogs
Thornton had bought in Dawson. This dog was thrashing about in a
death-struggle, directly on the trail, and Buck passed around him
without stopping. From the camp came the faint sound of many voices,
rising and falling in a sing-song chant. Bellying forward to the edge
of the clearing, he found Hans, lying on his face, feathered with
arrows like a porcupine. At the same instant Buck peered out where the
spruce-bough lodge had been and saw what made his hair leap straight up
on his neck and shoulders. A gust of overpowering rage swept over him.
He did not know that he growled, but he growled aloud with a terrible
ferocity. For the last time in his life he allowed passion to usurp
cunning and reason, and it was because of his great love for John
Thornton that he lost his head.

The Yeehats were dancing about the wreckage of the spruce-bough lodge
when they heard a fearful roaring and saw rushing upon them an animal
the like of which they had never seen before. It was Buck, a live
hurricane of fury, hurling himself upon them in a frenzy to destroy. He
sprang at the foremost man (it was the chief of the Yeehats), ripping
the throat wide open till the rent jugular spouted a fountain of blood.
He did not pause to worry the victim, but ripped in passing, with the
next bound tearing wide the throat of a second man. There was no
withstanding him. He plunged about in their very midst, tearing,
rending, destroying, in constant and terrific motion which defied the
arrows they discharged at him. In fact, so inconceivably rapid were his
movements, and so closely were the Indians tangled together, that they
shot one another with the arrows; and one young hunter, hurling a spear
at Buck in mid air, drove it through the chest of another hunter with
such force that the point broke through the skin of the back and stood
out beyond. Then a panic seized the Yeehats, and they fled in terror to
the woods, proclaiming as they fled the advent of the Evil Spirit.

And truly Buck was the Fiend incarnate, raging at their heels and
dragging them down like deer as they raced through the trees. It was a
fateful day for the Yeehats. They scattered far and wide over the
country, and it was not till a week later that the last of the
survivors gathered together in a lower valley and counted their losses.
As for Buck, wearying of the pursuit, he returned to the desolated
camp. He found Pete where he had been killed in his blankets in the
first moment of surprise. Thornton’s desperate struggle was
fresh-written on the earth, and Buck scented every detail of it down to
the edge of a deep pool. By the edge, head and fore feet in the water,
lay Skeet, faithful to the last. The pool itself, muddy and discolored
from the sluice boxes, effectually hid what it contained, and it
contained John Thornton; for Buck followed his trace into the water,
from which no trace led away.

All day Buck brooded by the pool or roamed restlessly about the camp.
Death, as a cessation of movement, as a passing out and away from the
lives of the living, he knew, and he knew John Thornton was dead. It
left a great void in him, somewhat akin to hunger, but a void which
ached and ached, and which food could not fill. At times, when he
paused to contemplate the carcasses of the Yeehats, he forgot the pain
of it; and at such times he was aware of a great pride in himself,—a
pride greater than any he had yet experienced. He had killed man, the
noblest game of all, and he had killed in the face of the law of club
and fang. He sniffed the bodies curiously. They had died so easily. It
was harder to kill a husky dog than them. They were no match at all,
were it not for their arrows and spears and clubs. Thenceforward he
would be unafraid of them except when they bore in their hands their
arrows, spears, and clubs.

Night came on, and a full moon rose high over the trees into the sky,
lighting the land till it lay bathed in ghostly day. And with the
coming of the night, brooding and mourning by the pool, Buck became
alive to a stirring of the new life in the forest other than that which
the Yeehats had made, He stood up, listening and scenting. From far
away drifted a faint, sharp yelp, followed by a chorus of similar sharp
yelps. As the moments passed the yelps grew closer and louder. Again
Buck knew them as things heard in that other world which persisted in
his memory. He walked to the centre of the open space and listened. It
was the call, the many-noted call, sounding more luringly and
compellingly than ever before. And as never before, he was ready to
obey. John Thornton was dead. The last tie was broken. Man and the
claims of man no longer bound him.

Hunting their living meat, as the Yeehats were hunting it, on the
flanks of the migrating moose, the wolf pack had at last crossed over
from the land of streams and timber and invaded Buck’s valley. Into the
clearing where the moonlight streamed, they poured in a silvery flood;
and in the centre of the clearing stood Buck, motionless as a statue,
waiting their coming. They were awed, so still and large he stood, and
a moment’s pause fell, till the boldest one leaped straight for him.
Like a flash Buck struck, breaking the neck. Then he stood, without
movement, as before, the stricken wolf rolling in agony behind him.
Three others tried it in sharp succession; and one after the other they
drew back, streaming blood from slashed throats or shoulders.

This was sufficient to fling the whole pack forward, pell-mell, crowded
together, blocked and confused by its eagerness to pull down the prey.
Buck’s marvellous quickness and agility stood him in good stead.
Pivoting on his hind legs, and snapping and gashing, he was everywhere
at once, presenting a front which was apparently unbroken so swiftly
did he whirl and guard from side to side. But to prevent them from
getting behind him, he was forced back, down past the pool and into the
creek bed, till he brought up against a high gravel bank. He worked
along to a right angle in the bank which the men had made in the course
of mining, and in this angle he came to bay, protected on three sides
and with nothing to do but face the front.

And so well did he face it, that at the end of half an hour the wolves
drew back discomfited. The tongues of all were out and lolling, the
white fangs showing cruelly white in the moonlight. Some were lying
down with heads raised and ears pricked forward; others stood on their
feet, watching him; and still others were lapping water from the pool.
One wolf, long and lean and gray, advanced cautiously, in a friendly
manner, and Buck recognized the wild brother with whom he had run for a
night and a day. He was whining softly, and, as Buck whined, they
touched noses.

Then an old wolf, gaunt and battle-scarred, came forward. Buck writhed
his lips into the preliminary of a snarl, but sniffed noses with him,
Whereupon the old wolf sat down, pointed nose at the moon, and broke
out the long wolf howl. The others sat down and howled. And now the
call came to Buck in unmistakable accents. He, too, sat down and
howled. This over, he came out of his angle and the pack crowded around
him, sniffing in half-friendly, half-savage manner. The leaders lifted
the yelp of the pack and sprang away into the woods. The wolves swung
in behind, yelping in chorus. And Buck ran with them, side by side with
the wild brother, yelping as he ran.


And here may well end the story of Buck. The years were not many when
the Yeehats noted a change in the breed of timber wolves; for some were
seen with splashes of brown on head and muzzle, and with a rift of
white centring down the chest. But more remarkable than this, the
Yeehats tell of a Ghost Dog that runs at the head of the pack. They are
afraid of this Ghost Dog, for it has cunning greater than they,
stealing from their camps in fierce winters, robbing their traps,
slaying their dogs, and defying their bravest hunters.

Nay, the tale grows worse. Hunters there are who fail to return to the
camp, and hunters there have been whom their tribesmen found with
throats slashed cruelly open and with wolf prints about them in the
snow greater than the prints of any wolf. Each fall, when the Yeehats
follow the movement of the moose, there is a certain valley which they
never enter. And women there are who become sad when the word goes over
the fire of how the Evil Spirit came to select that valley for an
abiding-place.

In the summers there is one visitor, however, to that valley, of which
the Yeehats do not know. It is a great, gloriously coated wolf, like,
and yet unlike, all other wolves. He crosses alone from the smiling
timber land and comes down into an open space among the trees. Here a
yellow stream flows from rotted moose-hide sacks and sinks into the
ground, with long grasses growing through it and vegetable mould
overrunning it and hiding its yellow from the sun; and here he muses
for a time, howling once, long and mournfully, ere he departs.

But he is not always alone. When the long winter nights come on and the
wolves follow their meat into the lower valleys, he may be seen running
at the head of the pack through the pale moonlight or glimmering
borealis, leaping gigantic above his fellows, his great throat a-bellow
as he sings a song of the younger world, which is the song of the pack.
`},{fileName:`the_toil_of_trace_and_trail.txt`,contents:`Chapter V. The Toil of Trace and Trail


Thirty days from the time it left Dawson, the Salt Water Mail, with
Buck and his mates at the fore, arrived at Skaguay. They were in a
wretched state, worn out and worn down. Buck’s one hundred and forty
pounds had dwindled to one hundred and fifteen. The rest of his mates,
though lighter dogs, had relatively lost more weight than he. Pike, the
malingerer, who, in his lifetime of deceit, had often successfully
feigned a hurt leg, was now limping in earnest. Sol-leks was limping,
and Dub was suffering from a wrenched shoulder-blade.

They were all terribly footsore. No spring or rebound was left in them.
Their feet fell heavily on the trail, jarring their bodies and doubling
the fatigue of a day’s travel. There was nothing the matter with them
except that they were dead tired. It was not the dead-tiredness that
comes through brief and excessive effort, from which recovery is a
matter of hours; but it was the dead-tiredness that comes through the
slow and prolonged strength drainage of months of toil. There was no
power of recuperation left, no reserve strength to call upon. It had
been all used, the last least bit of it. Every muscle, every fibre,
every cell, was tired, dead tired. And there was reason for it. In less
than five months they had travelled twenty-five hundred miles, during
the last eighteen hundred of which they had had but five days’ rest.
When they arrived at Skaguay they were apparently on their last legs.
They could barely keep the traces taut, and on the down grades just
managed to keep out of the way of the sled.

“Mush on, poor sore feets,” the driver encouraged them as they tottered
down the main street of Skaguay. “Dis is de las’. Den we get one long
res’. Eh? For sure. One bully long res’.”

The drivers confidently expected a long stopover. Themselves, they had
covered twelve hundred miles with two days’ rest, and in the nature of
reason and common justice they deserved an interval of loafing. But so
many were the men who had rushed into the Klondike, and so many were
the sweethearts, wives, and kin that had not rushed in, that the
congested mail was taking on Alpine proportions; also, there were
official orders. Fresh batches of Hudson Bay dogs were to take the
places of those worthless for the trail. The worthless ones were to be
got rid of, and, since dogs count for little against dollars, they were
to be sold.

Three days passed, by which time Buck and his mates found how really
tired and weak they were. Then, on the morning of the fourth day, two
men from the States came along and bought them, harness and all, for a
song. The men addressed each other as “Hal” and “Charles.” Charles was
a middle-aged, lightish-colored man, with weak and watery eyes and a
mustache that twisted fiercely and vigorously up, giving the lie to the
limply drooping lip it concealed. Hal was a youngster of nineteen or
twenty, with a big Colt’s revolver and a hunting-knife strapped about
him on a belt that fairly bristled with cartridges. This belt was the
most salient thing about him. It advertised his callowness—a callowness
sheer and unutterable. Both men were manifestly out of place, and why
such as they should adventure the North is part of the mystery of
things that passes understanding.

Buck heard the chaffering, saw the money pass between the man and the
Government agent, and knew that the Scotch half-breed and the
mail-train drivers were passing out of his life on the heels of
Perrault and François and the others who had gone before. When driven
with his mates to the new owners’ camp, Buck saw a slipshod and
slovenly affair, tent half stretched, dishes unwashed, everything in
disorder; also, he saw a woman. “Mercedes” the men called her. She was
Charles’s wife and Hal’s sister—a nice family party.

Buck watched them apprehensively as they proceeded to take down the
tent and load the sled. There was a great deal of effort about their
manner, but no businesslike method. The tent was rolled into an awkward
bundle three times as large as it should have been. The tin dishes were
packed away unwashed. Mercedes continually fluttered in the way of her
men and kept up an unbroken chattering of remonstrance and advice. When
they put a clothes-sack on the front of the sled, she suggested it
should go on the back; and when they had put it on the back, and
covered it over with a couple of other bundles, she discovered
overlooked articles which could abide nowhere else but in that very
sack, and they unloaded again.

Three men from a neighboring tent came out and looked on, grinning and
winking at one another.

“You’ve got a right smart load as it is,” said one of them; “and it’s
not me should tell you your business, but I wouldn’t tote that tent
along if I was you.”

“Undreamed of!” cried Mercedes, throwing up her hands in dainty dismay.
“However in the world could I manage without a tent?”

“It’s springtime, and you won’t get any more cold weather,” the man
replied.

She shook her head decidedly, and Charles and Hal put the last odds and
ends on top the mountainous load.

“Think it’ll ride?” one of the men asked.

“Why shouldn’t it?” Charles demanded rather shortly.

“Oh, that’s all right, that’s all right,” the man hastened meekly to
say. “I was just a-wonderin’, that is all. It seemed a mite top-heavy.”

Charles turned his back and drew the lashings down as well as he could,
which was not in the least well.

“An’ of course the dogs can hike along all day with that contraption
behind them,” affirmed a second of the men.

“Certainly,” said Hal, with freezing politeness, taking hold of the
gee-pole with one hand and swinging his whip from the other. “Mush!” he
shouted. “Mush on there!”

The dogs sprang against the breast-bands, strained hard for a few
moments, then relaxed. They were unable to move the sled.

“The lazy brutes, I’ll show them,” he cried, preparing to lash out at
them with the whip.

But Mercedes interfered, crying, “Oh, Hal, you mustn’t,” as she caught
hold of the whip and wrenched it from him. “The poor dears! Now you
must promise you won’t be harsh with them for the rest of the trip, or
I won’t go a step.”

“Precious lot you know about dogs,” her brother sneered; “and I wish
you’d leave me alone. They’re lazy, I tell you, and you’ve got to whip
them to get anything out of them. That’s their way. You ask any one.
Ask one of those men.”

Mercedes looked at them imploringly, untold repugnance at sight of pain
written in her pretty face.

“They’re weak as water, if you want to know,” came the reply from one
of the men. “Plum tuckered out, that’s what’s the matter. They need a
rest.”

“Rest be blanked,” said Hal, with his beardless lips; and Mercedes
said, “Oh!” in pain and sorrow at the oath.

But she was a clannish creature, and rushed at once to the defence of
her brother. “Never mind that man,” she said pointedly. “You’re driving
our dogs, and you do what you think best with them.”

Again Hal’s whip fell upon the dogs. They threw themselves against the
breast-bands, dug their feet into the packed snow, got down low to it,
and put forth all their strength. The sled held as though it were an
anchor. After two efforts, they stood still, panting. The whip was
whistling savagely, when once more Mercedes interfered. She dropped on
her knees before Buck, with tears in her eyes, and put her arms around
his neck.

“You poor, poor dears,” she cried sympathetically, “why don’t you pull
hard?—then you wouldn’t be whipped.” Buck did not like her, but he was
feeling too miserable to resist her, taking it as part of the day’s
miserable work.

One of the onlookers, who had been clenching his teeth to suppress hot
speech, now spoke up:—

“It’s not that I care a whoop what becomes of you, but for the dogs’
sakes I just want to tell you, you can help them a mighty lot by
breaking out that sled. The runners are froze fast. Throw your weight
against the gee-pole, right and left, and break it out.”

A third time the attempt was made, but this time, following the advice,
Hal broke out the runners which had been frozen to the snow. The
overloaded and unwieldy sled forged ahead, Buck and his mates
struggling frantically under the rain of blows. A hundred yards ahead
the path turned and sloped steeply into the main street. It would have
required an experienced man to keep the top-heavy sled upright, and Hal
was not such a man. As they swung on the turn the sled went over,
spilling half its load through the loose lashings. The dogs never
stopped. The lightened sled bounded on its side behind them. They were
angry because of the ill treatment they had received and the unjust
load. Buck was raging. He broke into a run, the team following his
lead. Hal cried “Whoa! whoa!” but they gave no heed. He tripped and was
pulled off his feet. The capsized sled ground over him, and the dogs
dashed on up the street, adding to the gayety of Skaguay as they
scattered the remainder of the outfit along its chief thoroughfare.

Kind-hearted citizens caught the dogs and gathered up the scattered
belongings. Also, they gave advice. Half the load and twice the dogs,
if they ever expected to reach Dawson, was what was said. Hal and his
sister and brother-in-law listened unwillingly, pitched tent, and
overhauled the outfit. Canned goods were turned out that made men
laugh, for canned goods on the Long Trail is a thing to dream about.
“Blankets for a hotel” quoth one of the men who laughed and helped.
“Half as many is too much; get rid of them. Throw away that tent, and
all those dishes,—who’s going to wash them, anyway? Good Lord, do you
think you’re travelling on a Pullman?”

And so it went, the inexorable elimination of the superfluous. Mercedes
cried when her clothes-bags were dumped on the ground and article after
article was thrown out. She cried in general, and she cried in
particular over each discarded thing. She clasped hands about knees,
rocking back and forth broken-heartedly. She averred she would not go
an inch, not for a dozen Charleses. She appealed to everybody and to
everything, finally wiping her eyes and proceeding to cast out even
articles of apparel that were imperative necessaries. And in her zeal,
when she had finished with her own, she attacked the belongings of her
men and went through them like a tornado.

This accomplished, the outfit, though cut in half, was still a
formidable bulk. Charles and Hal went out in the evening and bought six
Outside dogs. These, added to the six of the original team, and Teek
and Koona, the huskies obtained at the Rink Rapids on the record trip,
brought the team up to fourteen. But the Outside dogs, though
practically broken in since their landing, did not amount to much.
Three were short-haired pointers, one was a Newfoundland, and the other
two were mongrels of indeterminate breed. They did not seem to know
anything, these newcomers. Buck and his comrades looked upon them with
disgust, and though he speedily taught them their places and what not
to do, he could not teach them what to do. They did not take kindly to
trace and trail. With the exception of the two mongrels, they were
bewildered and spirit-broken by the strange savage environment in which
they found themselves and by the ill treatment they had received. The
two mongrels were without spirit at all; bones were the only things
breakable about them.

With the newcomers hopeless and forlorn, and the old team worn out by
twenty-five hundred miles of continuous trail, the outlook was anything
but bright. The two men, however, were quite cheerful. And they were
proud, too. They were doing the thing in style, with fourteen dogs.
They had seen other sleds depart over the Pass for Dawson, or come in
from Dawson, but never had they seen a sled with so many as fourteen
dogs. In the nature of Arctic travel there was a reason why fourteen
dogs should not drag one sled, and that was that one sled could not
carry the food for fourteen dogs. But Charles and Hal did not know
this. They had worked the trip out with a pencil, so much to a dog, so
many dogs, so many days, Q.E.D. Mercedes looked over their shoulders
and nodded comprehensively, it was all so very simple.

Late next morning Buck led the long team up the street. There was
nothing lively about it, no snap or go in him and his fellows. They
were starting dead weary. Four times he had covered the distance
between Salt Water and Dawson, and the knowledge that, jaded and tired,
he was facing the same trail once more, made him bitter. His heart was
not in the work, nor was the heart of any dog. The Outsides were timid
and frightened, the Insides without confidence in their masters.

Buck felt vaguely that there was no depending upon these two men and
the woman. They did not know how to do anything, and as the days went
by it became apparent that they could not learn. They were slack in all
things, without order or discipline. It took them half the night to
pitch a slovenly camp, and half the morning to break that camp and get
the sled loaded in fashion so slovenly that for the rest of the day
they were occupied in stopping and rearranging the load. Some days they
did not make ten miles. On other days they were unable to get started
at all. And on no day did they succeed in making more than half the
distance used by the men as a basis in their dog-food computation.

It was inevitable that they should go short on dog-food. But they
hastened it by overfeeding, bringing the day nearer when underfeeding
would commence. The Outside dogs, whose digestions had not been trained
by chronic famine to make the most of little, had voracious appetites.
And when, in addition to this, the worn-out huskies pulled weakly, Hal
decided that the orthodox ration was too small. He doubled it. And to
cap it all, when Mercedes, with tears in her pretty eyes and a quaver
in her throat, could not cajole him into giving the dogs still more,
she stole from the fish-sacks and fed them slyly. But it was not food
that Buck and the huskies needed, but rest. And though they were making
poor time, the heavy load they dragged sapped their strength severely.

Then came the underfeeding. Hal awoke one day to the fact that his
dog-food was half gone and the distance only quarter covered; further,
that for love or money no additional dog-food was to be obtained. So he
cut down even the orthodox ration and tried to increase the day’s
travel. His sister and brother-in-law seconded him; but they were
frustrated by their heavy outfit and their own incompetence. It was a
simple matter to give the dogs less food; but it was impossible to make
the dogs travel faster, while their own inability to get under way
earlier in the morning prevented them from travelling longer hours. Not
only did they not know how to work dogs, but they did not know how to
work themselves.

The first to go was Dub. Poor blundering thief that he was, always
getting caught and punished, he had none the less been a faithful
worker. His wrenched shoulder-blade, untreated and unrested, went from
bad to worse, till finally Hal shot him with the big Colt’s revolver.
It is a saying of the country that an Outside dog starves to death on
the ration of the husky, so the six Outside dogs under Buck could do no
less than die on half the ration of the husky. The Newfoundland went
first, followed by the three short-haired pointers, the two mongrels
hanging more grittily on to life, but going in the end.

By this time all the amenities and gentlenesses of the Southland had
fallen away from the three people. Shorn of its glamour and romance,
Arctic travel became to them a reality too harsh for their manhood and
womanhood. Mercedes ceased weeping over the dogs, being too occupied
with weeping over herself and with quarrelling with her husband and
brother. To quarrel was the one thing they were never too weary to do.
Their irritability arose out of their misery, increased with it,
doubled upon it, outdistanced it. The wonderful patience of the trail
which comes to men who toil hard and suffer sore, and remain sweet of
speech and kindly, did not come to these two men and the woman. They
had no inkling of such a patience. They were stiff and in pain; their
muscles ached, their bones ached, their very hearts ached; and because
of this they became sharp of speech, and hard words were first on their
lips in the morning and last at night.

Charles and Hal wrangled whenever Mercedes gave them a chance. It was
the cherished belief of each that he did more than his share of the
work, and neither forbore to speak this belief at every opportunity.
Sometimes Mercedes sided with her husband, sometimes with her brother.
The result was a beautiful and unending family quarrel. Starting from a
dispute as to which should chop a few sticks for the fire (a dispute
which concerned only Charles and Hal), presently would be lugged in the
rest of the family, fathers, mothers, uncles, cousins, people thousands
of miles away, and some of them dead. That Hal’s views on art, or the
sort of society plays his mother’s brother wrote, should have anything
to do with the chopping of a few sticks of firewood, passes
comprehension; nevertheless the quarrel was as likely to tend in that
direction as in the direction of Charles’s political prejudices. And
that Charles’s sister’s tale-bearing tongue should be relevant to the
building of a Yukon fire, was apparent only to Mercedes, who
disburdened herself of copious opinions upon that topic, and
incidentally upon a few other traits unpleasantly peculiar to her
husband’s family. In the meantime the fire remained unbuilt, the camp
half pitched, and the dogs unfed.

Mercedes nursed a special grievance—the grievance of sex. She was
pretty and soft, and had been chivalrously treated all her days. But
the present treatment by her husband and brother was everything save
chivalrous. It was her custom to be helpless. They complained. Upon
which impeachment of what to her was her most essential
sex-prerogative, she made their lives unendurable. She no longer
considered the dogs, and because she was sore and tired, she persisted
in riding on the sled. She was pretty and soft, but she weighed one
hundred and twenty pounds—a lusty last straw to the load dragged by the
weak and starving animals. She rode for days, till they fell in the
traces and the sled stood still. Charles and Hal begged her to get off
and walk, pleaded with her, entreated, the while she wept and
importuned Heaven with a recital of their brutality.

On one occasion they took her off the sled by main strength. They never
did it again. She let her legs go limp like a spoiled child, and sat
down on the trail. They went on their way, but she did not move. After
they had travelled three miles they unloaded the sled, came back for
her, and by main strength put her on the sled again.

In the excess of their own misery they were callous to the suffering of
their animals. Hal’s theory, which he practised on others, was that one
must get hardened. He had started out preaching it to his sister and
brother-in-law. Failing there, he hammered it into the dogs with a
club. At the Five Fingers the dog-food gave out, and a toothless old
squaw offered to trade them a few pounds of frozen horse-hide for the
Colt’s revolver that kept the big hunting-knife company at Hal’s hip. A
poor substitute for food was this hide, just as it had been stripped
from the starved horses of the cattlemen six months back. In its frozen
state it was more like strips of galvanized iron, and when a dog
wrestled it into his stomach it thawed into thin and innutritious
leathery strings and into a mass of short hair, irritating and
indigestible.

And through it all Buck staggered along at the head of the team as in a
nightmare. He pulled when he could; when he could no longer pull, he
fell down and remained down till blows from whip or club drove him to
his feet again. All the stiffness and gloss had gone out of his
beautiful furry coat. The hair hung down, limp and draggled, or matted
with dried blood where Hal’s club had bruised him. His muscles had
wasted away to knotty strings, and the flesh pads had disappeared, so
that each rib and every bone in his frame were outlined cleanly through
the loose hide that was wrinkled in folds of emptiness. It was
heartbreaking, only Buck’s heart was unbreakable. The man in the red
sweater had proved that.

As it was with Buck, so was it with his mates. They were perambulating
skeletons. There were seven all together, including him. In their very
great misery they had become insensible to the bite of the lash or the
bruise of the club. The pain of the beating was dull and distant, just
as the things their eyes saw and their ears heard seemed dull and
distant. They were not half living, or quarter living. They were simply
so many bags of bones in which sparks of life fluttered faintly. When a
halt was made, they dropped down in the traces like dead dogs, and the
spark dimmed and paled and seemed to go out. And when the club or whip
fell upon them, the spark fluttered feebly up, and they tottered to
their feet and staggered on.

There came a day when Billee, the good-natured, fell and could not
rise. Hal had traded off his revolver, so he took the axe and knocked
Billee on the head as he lay in the traces, then cut the carcass out of
the harness and dragged it to one side. Buck saw, and his mates saw,
and they knew that this thing was very close to them. On the next day
Koona went, and but five of them remained: Joe, too far gone to be
malignant; Pike, crippled and limping, only half conscious and not
conscious enough longer to malinger; Sol-leks, the one-eyed, still
faithful to the toil of trace and trail, and mournful in that he had so
little strength with which to pull; Teek, who had not travelled so far
that winter and who was now beaten more than the others because he was
fresher; and Buck, still at the head of the team, but no longer
enforcing discipline or striving to enforce it, blind with weakness
half the time and keeping the trail by the loom of it and by the dim
feel of his feet.

It was beautiful spring weather, but neither dogs nor humans were aware
of it. Each day the sun rose earlier and set later. It was dawn by
three in the morning, and twilight lingered till nine at night. The
whole long day was a blaze of sunshine. The ghostly winter silence had
given way to the great spring murmur of awakening life. This murmur
arose from all the land, fraught with the joy of living. It came from
the things that lived and moved again, things which had been as dead
and which had not moved during the long months of frost. The sap was
rising in the pines. The willows and aspens were bursting out in young
buds. Shrubs and vines were putting on fresh garbs of green. Crickets
sang in the nights, and in the days all manner of creeping, crawling
things rustled forth into the sun. Partridges and woodpeckers were
booming and knocking in the forest. Squirrels were chattering, birds
singing, and overhead honked the wild-fowl driving up from the south in
cunning wedges that split the air.

From every hill slope came the trickle of running water, the music of
unseen fountains. All things were thawing, bending, snapping. The Yukon
was straining to break loose the ice that bound it down. It ate away
from beneath; the sun ate from above. Air-holes formed, fissures sprang
and spread apart, while thin sections of ice fell through bodily into
the river. And amid all this bursting, rending, throbbing of awakening
life, under the blazing sun and through the soft-sighing breezes, like
wayfarers to death, staggered the two men, the woman, and the huskies.

With the dogs falling, Mercedes weeping and riding, Hal swearing
innocuously, and Charles’s eyes wistfully watering, they staggered into
John Thornton’s camp at the mouth of White River. When they halted, the
dogs dropped down as though they had all been struck dead. Mercedes
dried her eyes and looked at John Thornton. Charles sat down on a log
to rest. He sat down very slowly and painstakingly what of his great
stiffness. Hal did the talking. John Thornton was whittling the last
touches on an axe-handle he had made from a stick of birch. He whittled
and listened, gave monosyllabic replies, and, when it was asked, terse
advice. He knew the breed, and he gave his advice in the certainty that
it would not be followed.

“They told us up above that the bottom was dropping out of the trail
and that the best thing for us to do was to lay over,” Hal said in
response to Thornton’s warning to take no more chances on the rotten
ice. “They told us we couldn’t make White River, and here we are.” This
last with a sneering ring of triumph in it.

“And they told you true,” John Thornton answered. “The bottom’s likely
to drop out at any moment. Only fools, with the blind luck of fools,
could have made it. I tell you straight, I wouldn’t risk my carcass on
that ice for all the gold in Alaska.”

“That’s because you’re not a fool, I suppose,” said Hal. “All the same,
we’ll go on to Dawson.” He uncoiled his whip. “Get up there, Buck! Hi!
Get up there! Mush on!”

Thornton went on whittling. It was idle, he knew, to get between a fool
and his folly; while two or three fools more or less would not alter
the scheme of things.

But the team did not get up at the command. It had long since passed
into the stage where blows were required to rouse it. The whip flashed
out, here and there, on its merciless errands. John Thornton compressed
his lips. Sol-leks was the first to crawl to his feet. Teek followed.
Joe came next, yelping with pain. Pike made painful efforts. Twice he
fell over, when half up, and on the third attempt managed to rise. Buck
made no effort. He lay quietly where he had fallen. The lash bit into
him again and again, but he neither whined nor struggled. Several times
Thornton started, as though to speak, but changed his mind. A moisture
came into his eyes, and, as the whipping continued, he arose and walked
irresolutely up and down.

This was the first time Buck had failed, in itself a sufficient reason
to drive Hal into a rage. He exchanged the whip for the customary club.
Buck refused to move under the rain of heavier blows which now fell
upon him. Like his mates, he was barely able to get up, but, unlike
them, he had made up his mind not to get up. He had a vague feeling of
impending doom. This had been strong upon him when he pulled in to the
bank, and it had not departed from him. What of the thin and rotten ice
he had felt under his feet all day, it seemed that he sensed disaster
close at hand, out there ahead on the ice where his master was trying
to drive him. He refused to stir. So greatly had he suffered, and so
far gone was he, that the blows did not hurt much. And as they
continued to fall upon him, the spark of life within flickered and went
down. It was nearly out. He felt strangely numb. As though from a great
distance, he was aware that he was being beaten. The last sensations of
pain left him. He no longer felt anything, though very faintly he could
hear the impact of the club upon his body. But it was no longer his
body, it seemed so far away.

And then, suddenly, without warning, uttering a cry that was
inarticulate and more like the cry of an animal, John Thornton sprang
upon the man who wielded the club. Hal was hurled backward, as though
struck by a falling tree. Mercedes screamed. Charles looked on
wistfully, wiped his watery eyes, but did not get up because of his
stiffness.

John Thornton stood over Buck, struggling to control himself, too
convulsed with rage to speak.

“If you strike that dog again, I’ll kill you,” he at last managed to
say in a choking voice.

“It’s my dog,” Hal replied, wiping the blood from his mouth as he came
back. “Get out of my way, or I’ll fix you. I’m going to Dawson.”

Thornton stood between him and Buck, and evinced no intention of
getting out of the way. Hal drew his long hunting-knife. Mercedes
screamed, cried, laughed, and manifested the chaotic abandonment of
hysteria. Thornton rapped Hal’s knuckles with the axe-handle, knocking
the knife to the ground. He rapped his knuckles again as he tried to
pick it up. Then he stooped, picked it up himself, and with two strokes
cut Buck’s traces.

Hal had no fight left in him. Besides, his hands were full with his
sister, or his arms, rather; while Buck was too near dead to be of
further use in hauling the sled. A few minutes later they pulled out
from the bank and down the river. Buck heard them go and raised his
head to see, Pike was leading, Sol-leks was at the wheel, and between
were Joe and Teek. They were limping and staggering. Mercedes was
riding the loaded sled. Hal guided at the gee-pole, and Charles
stumbled along in the rear.

As Buck watched them, Thornton knelt beside him and with rough, kindly
hands searched for broken bones. By the time his search had disclosed
nothing more than many bruises and a state of terrible starvation, the
sled was a quarter of a mile away. Dog and man watched it crawling
along over the ice. Suddenly, they saw its back end drop down, as into
a rut, and the gee-pole, with Hal clinging to it, jerk into the air.
Mercedes’s scream came to their ears. They saw Charles turn and make
one step to run back, and then a whole section of ice give way and dogs
and humans disappear. A yawning hole was all that was to be seen. The
bottom had dropped out of the trail.

John Thornton and Buck looked at each other.

“You poor devil,” said John Thornton, and Buck licked his hand.
`},{fileName:`who_has_won_to_mastership.txt`,contents:`Chapter IV. Who Has Won to Mastership


“Eh? Wot I say? I spik true w’en I say dat Buck two devils.” This was
François’s speech next morning when he discovered Spitz missing and
Buck covered with wounds. He drew him to the fire and by its light
pointed them out.

“Dat Spitz fight lak hell,” said Perrault, as he surveyed the gaping
rips and cuts.

“An’ dat Buck fight lak two hells,” was François’s answer. “An’ now we
make good time. No more Spitz, no more trouble, sure.”

While Perrault packed the camp outfit and loaded the sled, the
dog-driver proceeded to harness the dogs. Buck trotted up to the place
Spitz would have occupied as leader; but François, not noticing him,
brought Sol-leks to the coveted position. In his judgment, Sol-leks was
the best lead-dog left. Buck sprang upon Sol-leks in a fury, driving
him back and standing in his place.

“Eh? eh?” François cried, slapping his thighs gleefully. “Look at dat
Buck. Heem keel dat Spitz, heem t’ink to take de job.”

“Go ’way, Chook!” he cried, but Buck refused to budge.

He took Buck by the scruff of the neck, and though the dog growled
threateningly, dragged him to one side and replaced Sol-leks. The old
dog did not like it, and showed plainly that he was afraid of Buck.
François was obdurate, but when he turned his back Buck again displaced
Sol-leks, who was not at all unwilling to go.

François was angry. “Now, by Gar, I feex you!” he cried, coming back
with a heavy club in his hand.

Buck remembered the man in the red sweater, and retreated slowly; nor
did he attempt to charge in when Sol-leks was once more brought
forward. But he circled just beyond the range of the club, snarling
with bitterness and rage; and while he circled he watched the club so
as to dodge it if thrown by François, for he was become wise in the way
of clubs. The driver went about his work, and he called to Buck when he
was ready to put him in his old place in front of Dave. Buck retreated
two or three steps. François followed him up, whereupon he again
retreated. After some time of this, François threw down the club,
thinking that Buck feared a thrashing. But Buck was in open revolt. He
wanted, not to escape a clubbing, but to have the leadership. It was
his by right. He had earned it, and he would not be content with less.

Perrault took a hand. Between them they ran him about for the better
part of an hour. They threw clubs at him. He dodged. They cursed him,
and his fathers and mothers before him, and all his seed to come after
him down to the remotest generation, and every hair on his body and
drop of blood in his veins; and he answered curse with snarl and kept
out of their reach. He did not try to run away, but retreated around
and around the camp, advertising plainly that when his desire was met,
he would come in and be good.

François sat down and scratched his head. Perrault looked at his watch
and swore. Time was flying, and they should have been on the trail an
hour gone. François scratched his head again. He shook it and grinned
sheepishly at the courier, who shrugged his shoulders in sign that they
were beaten. Then François went up to where Sol-leks stood and called
to Buck. Buck laughed, as dogs laugh, yet kept his distance. François
unfastened Sol-leks’s traces and put him back in his old place. The
team stood harnessed to the sled in an unbroken line, ready for the
trail. There was no place for Buck save at the front. Once more
François called, and once more Buck laughed and kept away.

“T’row down de club,” Perrault commanded.

François complied, whereupon Buck trotted in, laughing triumphantly,
and swung around into position at the head of the team. His traces were
fastened, the sled broken out, and with both men running they dashed
out on to the river trail.

Highly as the dog-driver had forevalued Buck, with his two devils, he
found, while the day was yet young, that he had undervalued. At a bound
Buck took up the duties of leadership; and where judgment was required,
and quick thinking and quick acting, he showed himself the superior
even of Spitz, of whom François had never seen an equal.

But it was in giving the law and making his mates live up to it, that
Buck excelled. Dave and Sol-leks did not mind the change in leadership.
It was none of their business. Their business was to toil, and toil
mightily, in the traces. So long as that were not interfered with, they
did not care what happened. Billee, the good-natured, could lead for
all they cared, so long as he kept order. The rest of the team,
however, had grown unruly during the last days of Spitz, and their
surprise was great now that Buck proceeded to lick them into shape.

Pike, who pulled at Buck’s heels, and who never put an ounce more of
his weight against the breast-band than he was compelled to do, was
swiftly and repeatedly shaken for loafing; and ere the first day was
done he was pulling more than ever before in his life. The first night
in camp, Joe, the sour one, was punished roundly—a thing that Spitz had
never succeeded in doing. Buck simply smothered him by virtue of
superior weight, and cut him up till he ceased snapping and began to
whine for mercy.

The general tone of the team picked up immediately. It recovered its
old-time solidarity, and once more the dogs leaped as one dog in the
traces. At the Rink Rapids two native huskies, Teek and Koona, were
added; and the celerity with which Buck broke them in took away
François’s breath.

“Nevaire such a dog as dat Buck!” he cried. “No, nevaire! Heem worth
one t’ousan’ dollair, by Gar! Eh? Wot you say, Perrault?”

And Perrault nodded. He was ahead of the record then, and gaining day
by day. The trail was in excellent condition, well packed and hard, and
there was no new-fallen snow with which to contend. It was not too
cold. The temperature dropped to fifty below zero and remained there
the whole trip. The men rode and ran by turn, and the dogs were kept on
the jump, with but infrequent stoppages.

The Thirty Mile River was comparatively coated with ice, and they
covered in one day going out what had taken them ten days coming in. In
one run they made a sixty-mile dash from the foot of Lake Le Barge to
the White Horse Rapids. Across Marsh, Tagish, and Bennett (seventy
miles of lakes), they flew so fast that the man whose turn it was to
run towed behind the sled at the end of a rope. And on the last night
of the second week they topped White Pass and dropped down the sea
slope with the lights of Skaguay and of the shipping at their feet.

It was a record run. Each day for fourteen days they had averaged forty
miles. For three days Perrault and François threw chests up and down
the main street of Skaguay and were deluged with invitations to drink,
while the team was the constant centre of a worshipful crowd of
dog-busters and mushers. Then three or four western bad men aspired to
clean out the town, were riddled like pepper-boxes for their pains, and
public interest turned to other idols. Next came official orders.
François called Buck to him, threw his arms around him, wept over him.
And that was the last of François and Perrault. Like other men, they
passed out of Buck’s life for good.

A Scotch half-breed took charge of him and his mates, and in company
with a dozen other dog-teams he started back over the weary trail to
Dawson. It was no light running now, nor record time, but heavy toil
each day, with a heavy load behind; for this was the mail train,
carrying word from the world to the men who sought gold under the
shadow of the Pole.

Buck did not like it, but he bore up well to the work, taking pride in
it after the manner of Dave and Sol-leks, and seeing that his mates,
whether they prided in it or not, did their fair share. It was a
monotonous life, operating with machine-like regularity. One day was
very like another. At a certain time each morning the cooks turned out,
fires were built, and breakfast was eaten. Then, while some broke camp,
others harnessed the dogs, and they were under way an hour or so before
the darkness fell which gave warning of dawn. At night, camp was made.
Some pitched the flies, others cut firewood and pine boughs for the
beds, and still others carried water or ice for the cooks. Also, the
dogs were fed. To them, this was the one feature of the day, though it
was good to loaf around, after the fish was eaten, for an hour or so
with the other dogs, of which there were fivescore and odd. There were
fierce fighters among them, but three battles with the fiercest brought
Buck to mastery, so that when he bristled and showed his teeth they got
out of his way.

Best of all, perhaps, he loved to lie near the fire, hind legs crouched
under him, fore legs stretched out in front, head raised, and eyes
blinking dreamily at the flames. Sometimes he thought of Judge Miller’s
big house in the sun-kissed Santa Clara Valley, and of the cement
swimming-tank, and Ysabel, the Mexican hairless, and Toots, the
Japanese pug; but oftener he remembered the man in the red sweater, the
death of Curly, the great fight with Spitz, and the good things he had
eaten or would like to eat. He was not homesick. The Sunland was very
dim and distant, and such memories had no power over him. Far more
potent were the memories of his heredity that gave things he had never
seen before a seeming familiarity; the instincts (which were but the
memories of his ancestors become habits) which had lapsed in later
days, and still later, in him, quickened and become alive again.

Sometimes as he crouched there, blinking dreamily at the flames, it
seemed that the flames were of another fire, and that as he crouched by
this other fire he saw another and different man from the half-breed
cook before him. This other man was shorter of leg and longer of arm,
with muscles that were stringy and knotty rather than rounded and
swelling. The hair of this man was long and matted, and his head
slanted back under it from the eyes. He uttered strange sounds, and
seemed very much afraid of the darkness, into which he peered
continually, clutching in his hand, which hung midway between knee and
foot, a stick with a heavy stone made fast to the end. He was all but
naked, a ragged and fire-scorched skin hanging part way down his back,
but on his body there was much hair. In some places, across the chest
and shoulders and down the outside of the arms and thighs, it was
matted into almost a thick fur. He did not stand erect, but with trunk
inclined forward from the hips, on legs that bent at the knees. About
his body there was a peculiar springiness, or resiliency, almost
catlike, and a quick alertness as of one who lived in perpetual fear of
things seen and unseen.

At other times this hairy man squatted by the fire with head between
his legs and slept. On such occasions his elbows were on his knees, his
hands clasped above his head as though to shed rain by the hairy arms.
And beyond that fire, in the circling darkness, Buck could see many
gleaming coals, two by two, always two by two, which he knew to be the
eyes of great beasts of prey. And he could hear the crashing of their
bodies through the undergrowth, and the noises they made in the night.
And dreaming there by the Yukon bank, with lazy eyes blinking at the
fire, these sounds and sights of another world would make the hair to
rise along his back and stand on end across his shoulders and up his
neck, till he whimpered low and suppressedly, or growled softly, and
the half-breed cook shouted at him, “Hey, you Buck, wake up!” Whereupon
the other world would vanish and the real world come into his eyes, and
he would get up and yawn and stretch as though he had been asleep.

It was a hard trip, with the mail behind them, and the heavy work wore
them down. They were short of weight and in poor condition when they
made Dawson, and should have had a ten days’ or a week’s rest at least.
But in two days’ time they dropped down the Yukon bank from the
Barracks, loaded with letters for the outside. The dogs were tired, the
drivers grumbling, and to make matters worse, it snowed every day. This
meant a soft trail, greater friction on the runners, and heavier
pulling for the dogs; yet the drivers were fair through it all, and did
their best for the animals.

Each night the dogs were attended to first. They ate before the drivers
ate, and no man sought his sleeping-robe till he had seen to the feet
of the dogs he drove. Still, their strength went down. Since the
beginning of the winter they had travelled eighteen hundred miles,
dragging sleds the whole weary distance; and eighteen hundred miles
will tell upon life of the toughest. Buck stood it, keeping his mates
up to their work and maintaining discipline, though he, too, was very
tired. Billee cried and whimpered regularly in his sleep each night.
Joe was sourer than ever, and Sol-leks was unapproachable, blind side
or other side.

But it was Dave who suffered most of all. Something had gone wrong with
him. He became more morose and irritable, and when camp was pitched at
once made his nest, where his driver fed him. Once out of the harness
and down, he did not get on his feet again till harness-up time in the
morning. Sometimes, in the traces, when jerked by a sudden stoppage of
the sled, or by straining to start it, he would cry out with pain. The
driver examined him, but could find nothing. All the drivers became
interested in his case. They talked it over at meal-time, and over
their last pipes before going to bed, and one night they held a
consultation. He was brought from his nest to the fire and was pressed
and prodded till he cried out many times. Something was wrong inside,
but they could locate no broken bones, could not make it out.

By the time Cassiar Bar was reached, he was so weak that he was falling
repeatedly in the traces. The Scotch half-breed called a halt and took
him out of the team, making the next dog, Sol-leks, fast to the sled.
His intention was to rest Dave, letting him run free behind the sled.
Sick as he was, Dave resented being taken out, grunting and growling
while the traces were unfastened, and whimpering broken-heartedly when
he saw Sol-leks in the position he had held and served so long. For the
pride of trace and trail was his, and, sick unto death, he could not
bear that another dog should do his work.

When the sled started, he floundered in the soft snow alongside the
beaten trail, attacking Sol-leks with his teeth, rushing against him
and trying to thrust him off into the soft snow on the other side,
striving to leap inside his traces and get between him and the sled,
and all the while whining and yelping and crying with grief and pain.
The half-breed tried to drive him away with the whip; but he paid no
heed to the stinging lash, and the man had not the heart to strike
harder. Dave refused to run quietly on the trail behind the sled, where
the going was easy, but continued to flounder alongside in the soft
snow, where the going was most difficult, till exhausted. Then he fell,
and lay where he fell, howling lugubriously as the long train of sleds
churned by.

With the last remnant of his strength he managed to stagger along
behind till the train made another stop, when he floundered past the
sleds to his own, where he stood alongside Sol-leks. His driver
lingered a moment to get a light for his pipe from the man behind. Then
he returned and started his dogs. They swung out on the trail with
remarkable lack of exertion, turned their heads uneasily, and stopped
in surprise. The driver was surprised, too; the sled had not moved. He
called his comrades to witness the sight. Dave had bitten through both
of Sol-leks’s traces, and was standing directly in front of the sled in
his proper place.

He pleaded with his eyes to remain there. The driver was perplexed. His
comrades talked of how a dog could break its heart through being denied
the work that killed it, and recalled instances they had known, where
dogs, too old for the toil, or injured, had died because they were cut
out of the traces. Also, they held it a mercy, since Dave was to die
anyway, that he should die in the traces, heart-easy and content. So he
was harnessed in again, and proudly he pulled as of old, though more
than once he cried out involuntarily from the bite of his inward hurt.
Several times he fell down and was dragged in the traces, and once the
sled ran upon him so that he limped thereafter in one of his hind legs.

But he held out till camp was reached, when his driver made a place for
him by the fire. Morning found him too weak to travel. At harness-up
time he tried to crawl to his driver. By convulsive efforts he got on
his feet, staggered, and fell. Then he wormed his way forward slowly
toward where the harnesses were being put on his mates. He would
advance his fore legs and drag up his body with a sort of hitching
movement, when he would advance his fore legs and hitch ahead again for
a few more inches. His strength left him, and the last his mates saw of
him he lay gasping in the snow and yearning toward them. But they could
hear him mournfully howling till they passed out of sight behind a belt
of river timber.

Here the train was halted. The Scotch half-breed slowly retraced his
steps to the camp they had left. The men ceased talking. A
revolver-shot rang out. The man came back hurriedly. The whips snapped,
the bells tinkled merrily, the sleds churned along the trail; but Buck
knew, and every dog knew, what had taken place behind the belt of river
trees.
`}];function ne({selectedFileName:e,onFileSelect:t,onSampleUse:n}){function r(e,t){return new File([t],e,{type:`text/plain`})}return(0,x.jsxs)(`aside`,{className:`w-full shrink-0 rounded-2xl border border-slate-800 bg-black p-4 lg:w-72`,children:[(0,x.jsxs)(`div`,{className:`mb-4 flex items-center justify-between`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`p`,{className:`text-xs font-semibold uppercase tracking-widest text-blue-400`,children:`Input files`}),(0,x.jsx)(`h2`,{className:`mt-1 text-lg font-semibold text-white`,children:`Text samples`})]}),(0,x.jsx)(`span`,{className:`rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-400`,children:te.length})]}),(0,x.jsx)(`nav`,{"aria-label":`Text files in input_output`,children:(0,x.jsx)(`ul`,{className:`space-y-1`,children:te.map(({fileName:i,contents:a})=>{let o=e===i,s=()=>r(i,a);return(0,x.jsx)(`li`,{children:(0,x.jsxs)(`button`,{type:`button`,onClick:()=>t(i),onDoubleClick:()=>n(s()),draggable:!0,onDragStart:e=>{e.dataTransfer.effectAllowed=`copy`,e.dataTransfer.items.add(s())},"aria-pressed":o,className:`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${o?`bg-blue-600 text-white`:`text-slate-300 hover:bg-slate-800 hover:text-white`}`,children:[(0,x.jsx)(`span`,{"aria-hidden":`true`,className:`text-base`,children:`📄`}),(0,x.jsx)(`span`,{className:`truncate`,children:i})]})},i)})})}),(0,x.jsx)(`p`,{className:`mt-4 border-t border-slate-800 pt-4 text-xs leading-5 text-slate-500`,children:`Double-click a sample to use it, or drag it onto the drop box.`})]})}function S({files:e,selectedFile:t,onFileSelect:n}){return(0,x.jsxs)(`aside`,{className:`w-full shrink-0 rounded-2xl border border-slate-800 bg-black p-4 lg:w-72`,children:[(0,x.jsxs)(`div`,{className:`mb-4 flex items-center justify-between`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`p`,{className:`text-xs font-semibold uppercase tracking-widest text-blue-400`,children:`Your files`}),(0,x.jsx)(`h2`,{className:`mt-1 text-lg font-semibold text-white`,children:`Uploaded files`})]}),(0,x.jsx)(`span`,{className:`rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-400`,children:e.length})]}),e.length===0?(0,x.jsx)(`p`,{className:`text-sm leading-5 text-slate-500`,children:`Files you select or drop will appear here.`}):(0,x.jsx)(`nav`,{"aria-label":`Uploaded files`,children:(0,x.jsx)(`ul`,{className:`space-y-1`,children:e.map(e=>{let r=t?.name===e.name&&t.lastModified===e.lastModified;return(0,x.jsx)(`li`,{children:(0,x.jsxs)(`button`,{type:`button`,onClick:()=>n(e),"aria-pressed":r,className:`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${r?`bg-blue-600 text-white`:`text-slate-300 hover:bg-slate-800 hover:text-white`}`,children:[(0,x.jsx)(`span`,{"aria-hidden":`true`,className:`text-base`,children:`📄`}),(0,x.jsx)(`span`,{className:`min-w-0 flex-1 truncate`,children:e.name})]})},`${e.name}-${e.lastModified}`)})})})]})}function re(e){return e<1024?`${e} B`:`${(e/1024).toFixed(2)} KB`}function C({file:e,onDownload:t}){return(0,x.jsxs)(`aside`,{className:`mt-4 rounded-xl border border-slate-800 bg-black p-4`,children:[(0,x.jsx)(`p`,{className:`text-xs font-semibold uppercase tracking-widest text-blue-400`,children:`Ready to download`}),e?(0,x.jsxs)(`div`,{className:`mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between`,children:[(0,x.jsxs)(`div`,{className:`min-w-0`,children:[(0,x.jsx)(`p`,{className:`truncate font-medium text-white`,children:e.fileName}),(0,x.jsx)(`p`,{className:`mt-1 text-sm text-slate-400`,children:re(e.blob.size)})]}),(0,x.jsx)(`button`,{type:`button`,onClick:t,className:`rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700`,children:`Download`})]}):(0,x.jsx)(`p`,{className:`mt-2 text-sm text-slate-500`,children:`Your encoded or decoded file will appear here.`})]})}function ie(){let[e,t]=(0,b.useState)(null),[n,r]=(0,b.useState)([]),[i,a]=(0,b.useState)(null),[o,s]=(0,b.useState)(null),[c,l]=(0,b.useState)(!1),u=e!==null&&e.name.toLowerCase().endsWith(`.txt`)&&e.size<2048;function d(e,n=null){t(e),a(null),s(n),r(t=>t.some(t=>t.name===e.name&&t.lastModified===e.lastModified)?t:[...t,e])}function f(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}async function p(){if(e&&!c){if(!e.name.toLowerCase().endsWith(`.txt`))alert(`Please select a .txt file to encode.`);else{l(!0);try{let t=await fetch(`/api/encode`,{method:`POST`,headers:{"Content-Type":`application/octet-stream`},body:e});if(!t.ok)throw Error(await t.text());let n=await t.blob();a({blob:n,fileName:e.name.replace(/\.txt$/i,`.huff`)})}catch(e){console.error(`Encoding error:`,e),alert(`Failed to encode file.`)}finally{l(!1)}}}}async function m(){if(e&&!c){if(!e.name.toLowerCase().endsWith(`.huff`))alert(`Please select a .huff file to decode.`);else{l(!0);try{let t=await fetch(`/api/decode`,{method:`POST`,headers:{"Content-Type":`application/octet-stream`},body:e});if(!t.ok)throw Error(await t.text());let n=await t.blob();a({blob:n,fileName:e.name.replace(/\.huff$/i,`.txt`)})}catch(e){console.error(`Decoding error:`,e),alert(`Failed to decode file.`)}finally{l(!1)}}}}return(0,x.jsx)(`div`,{className:`min-h-screen bg-black p-4 text-white sm:p-8`,children:(0,x.jsxs)(`div`,{className:`mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start`,children:[(0,x.jsx)(ne,{selectedFileName:o,onFileSelect:e=>s(e),onSampleUse:e=>d(e,e.name)}),(0,x.jsxs)(`main`,{className:`min-w-0 flex-1`,children:[(0,x.jsx)(`h1`,{className:`text-3xl font-bold text-center mb-2`,children:`Huffman Encoder`}),(0,x.jsx)(`p`,{className:`text-gray-400 text-center mb-8`,children:`Compress and decompress your text files`}),(0,x.jsx)(ee,{onFileSelect:d}),(0,x.jsx)(C,{file:i,onDownload:()=>{i&&f(i.blob,i.fileName)}}),e&&(0,x.jsxs)(`div`,{className:`bg-slate-800 rounded-lg p-4 mt-4`,children:[(0,x.jsxs)(`p`,{children:[`Filename: `,e.name]}),(0,x.jsxs)(`p`,{children:[`Size: `,(e.size/1024).toFixed(2),` KB`]}),u&&(0,x.jsx)(`p`,{className:`mt-3 rounded-lg border border-amber-700 bg-amber-950/40 p-3 text-sm leading-5 text-amber-200`,children:`This file is smaller than 2 KB. The encoder can process it, but the fixed 2,061-byte Huffman header is larger than a small file, so the encoded result will not save space and may be larger.`})]}),(0,x.jsxs)(`div`,{className:`flex gap-4 mt-6`,children:[(0,x.jsx)(`button`,{onClick:p,disabled:!e||c,className:`flex-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 p-3 rounded-lg`,children:c?`Processing...`:`Encode`}),(0,x.jsx)(`button`,{onClick:m,disabled:!e||c,className:`flex-1 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 p-3 rounded-lg`,children:c?`Processing...`:`Decode`})]})]}),(0,x.jsx)(S,{files:n,selectedFile:e,onFileSelect:d})]})})}y.createRoot(document.getElementById(`root`)).render((0,x.jsx)(b.StrictMode,{children:(0,x.jsx)(ie,{})}));