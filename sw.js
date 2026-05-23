/* NEXUS M3U · service worker mínimo (habilita instalación PWA) */
const CACHE='nexus-m3u-v1';
self.addEventListener('install', e=>{ self.skipWaiting(); });
self.addEventListener('activate', e=>{ e.waitUntil(clients.claim()); });
self.addEventListener('fetch', e=>{
  // network-first; cachea el documento principal para que la app abra aunque la red falle al inicio
  const req=e.request;
  if(req.method!=='GET'){ return; }
  e.respondWith(
    fetch(req).then(res=>{
      if(req.mode==='navigate'){
        const copy=res.clone();
        caches.open(CACHE).then(c=>c.put(req,copy));
      }
      return res;
    }).catch(()=> caches.match(req).then(r=> r || caches.match('./')))
  );
});
