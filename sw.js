self.addEventListener('install', (e) => {
  console.log('Service Worker: Instalado');
});

self.addEventListener('fetch', (e) => {
  // Isso permite que o app funcione online/offline
  e.respondWith(fetch(e.request));
});
