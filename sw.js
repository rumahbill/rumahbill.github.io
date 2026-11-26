/* RumahBill service worker: app shell works offline. Bump VERSION when you change index.html. */
var VERSION='rb-v4';
var SHELL=['./','./index.html','./manifest.webmanifest','./logo.png','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(VERSION).then(function(c){return c.addAll(SHELL.map(function(u){return new Request(u,{cache:'reload'})}))}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==VERSION}).map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){
  var r=e.request;if(r.method!=='GET')return;
  var u=new URL(r.url);
  if(u.origin===location.origin){
    e.respondWith(caches.match(r,{ignoreSearch:true}).then(function(hit){
      var net=fetch(r).then(function(res){if(res&&res.ok){var cp=res.clone();caches.open(VERSION).then(function(c){c.put(r,cp)})}return res}).catch(function(){return hit||caches.match('./index.html')});
      return hit||net}));
    return;
  }
  if(/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)){
    e.respondWith(caches.open(VERSION).then(function(c){return c.match(r).then(function(hit){
      var net=fetch(r).then(function(res){c.put(r,res.clone());return res}).catch(function(){return hit});
      return hit||net})}));
  }
});
