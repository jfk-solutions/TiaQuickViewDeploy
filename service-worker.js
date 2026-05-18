const cacheName = 'tia-quickview-shell-v3';
const appShell = [
  './',
  './tia-quickview.webmanifest',
  './tiaQuickViewIcon-192.webp',
  './tiaQuickViewIcon-512.webp',
  './tiaQuickViewIcon.webp',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(appShell))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== cacheName).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET')
    return;

  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
