"use strict";var precacheConfig=[["./build/css/app.46578.css","baf8b6e18ee4b23efef9690f78cf36c9"],["./build/js/app.46578.js","8481c6d69215ab845f43cdc81ec12b31"],["./build/js/manifest.46578.js","83232e4606c5db269385da2f72fa81da"],["./build/js/pages/chunk.author.46578.js","17a2d370aa29a0d7411e8ee3993d0974"],["./build/js/pages/chunk.home.46578.js","73fbe4064f5b6802cdbcab45e4753e87"],["./build/js/pages/chunk.movie.46578.js","83d807bc3654f17ea44fd9e4c858f780"],["./build/js/pages/chunk.music.46578.js","8cceb7b9ee842bec17474e90d30e6c28"],["./build/js/pages/chunk.opus.46578.js","66f365fa49a8cda3e72499bdc2949a08"],["./build/js/pages/chunk.tour.46578.js","11ce03f6f9f658c7e5742ed0f67e6102"],["./build/js/vendors.46578.js","8c93bcf4a23132b7727b5cbd407cc5b1"],["./build/media/iconfont.eot","75d874bfd44ac4b88f323f93fceaafaa"],["./build/media/iconfont.svg","2138115d41a46b968d6fdb50087ac50a"],["./build/media/iconfont.ttf","cd2fd588d6fa24a42c25b4c04cb77ab1"],["C:/Users/Administrator/Documents/PRO/github.io/index.html","3a51afa893e4709338776f22da03ce94"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),t=urlsToCacheKeys.has(n));var a="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(a,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});