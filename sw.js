// Cache riêng cho khóa học này; chỉ xoá các phiên bản có cùng tiền tố.
var CACHE = 'mh-leadership-v1';
var FILES = [
  "./",
  "./index.html",
  "./on-tap.html",
  "./manifest.webmanifest",
  "./pwa.js",
  "./sw.js",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png",
  "./icons/favicon-48.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./slides/deck.css",
  "./slides/deck.js",
  "./study/data.js",
  "./study/say.js",
  "./study/study.css",
  "./study/study.js",
  "./slides/01-chuyen-vai-tro.html",
  "./slides/art/m1.svg",
  "./slides/02-niem-tin-cam-xuc.html",
  "./slides/art/m2.svg",
  "./slides/03-chien-luoc-anh-huong.html",
  "./slides/art/m3.svg",
  "./slides/04-giao-tiep-nang-suat.html",
  "./slides/art/m4.svg",
  "./slides/05-phat-trien-ban-than.html",
  "./slides/art/m5.svg",
  "./slides/06-uy-quyen-phan-hoi.html",
  "./slides/art/m6.svg",
  "./slides/07-doi-nhom-sang-tao.html",
  "./slides/art/m7.svg",
  "./slides/08-quan-ly-kinh-doanh.html",
  "./slides/art/m8.svg"
];
self.addEventListener('install', function(e){ e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(FILES.map(function(f){return new Request(f,{cache:'no-cache'});}));}).then(function(){return self.skipWaiting();})); });
self.addEventListener('activate', function(e){ e.waitUntil(caches.keys().then(function(keys){return Promise.all(keys.filter(function(k){return k.indexOf('mh-leadership-')===0&&k!==CACHE;}).map(function(k){return caches.delete(k);}));}).then(function(){return self.clients.claim();})); });
self.addEventListener('fetch', function(e){var u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin)return;e.respondWith(fetch(e.request.url,{cache:'no-cache'}).then(function(r){if(r.ok){var c=r.clone();caches.open(CACHE).then(function(x){x.put(u.origin+u.pathname,c);});}return r;}).catch(function(){return caches.match(e.request,{ignoreSearch:true}).then(function(r){return r||(e.request.mode==='navigate'?caches.match('./index.html'):Response.error());});}));});
