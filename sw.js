const CACHE_NAME = 'pink-music-player-v1';
const urlsToCache = [
  '/',
  'index.html',
  'songs/Bimbo Doll.mp3',
  'songs/Blue Bunny.mp3',
  'songs/I LOVE YOU SO.mp3',
  'songs/Under Your Spell.mp3',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});