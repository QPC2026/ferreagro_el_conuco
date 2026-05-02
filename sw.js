const CACHE_NAME = 'ferreagro-v1.2';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/manifest.json',
  '/img/pollito-iniciador.jpg',
  '/img/pollo-engorde.jpg',
  '/img/gallina-ponedora.jpg',
  '/img/cerdo-crecimiento.jpg',
  '/img/perro-economico.jpg',
  '/img/gato-economico.jpg',
  '/img/maiz-partido.jpg',
  '/img/sal-roja.jpg',
  '/img/concentrado-cerdo.jpg',
  '/img/melaza.jpg',
  '/img/nepe-polar.jpg',
  '/img/logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) return response;
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});
