workbox.core.setCacheNameDetails({prefix: "tni-frontend"});

const LATEST_VERSION = 'v0.0.8'


// Seems broken in Chrome. Disabling for now
// self.addEventListener('activate', (event) => {
//   console.log(`%c ${LATEST_VERSION} `, 'background: #ddd; color: #0000ff')
//   if (caches) {
//     caches.keys().then((arr) => {
//       arr.forEach((key) => {
//         if (key.indexOf('tni-frontend-precache') < -1) {
//           caches.delete(key).then(() => console.log(`%c Cleared ${key}`, 'background: #333; color: #ff0000'))
//         } else {
//           caches.open(key).then((cache) => {
//             cache.match('version').then((res) => {
//               if (!res) {
//                 cache.put('version', new Response(LATEST_VERSION, { status: 200, statusText: LATEST_VERSION }))
//               } else if (res.statusText !== LATEST_VERSION) {
//                 caches.delete(key).then(() => console.log(`%c Cleared Cache ${LATEST_VERSION}`, 'background: #333; color: #ff0000'))
//               } else console.log(`%c Great you have the latest version ${LATEST_VERSION}`, 'background: #333; color: #00ff00')
//             })
//           })
//         }
//       })
//     })
//   }
// })

workbox.routing.registerRoute(
  /.*(?:googleapis)\.com.*$/, 
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'google-font',
    cacheExpiration: {
      maxEntries: 1, 
      maxAgeSeconds: 60 * 60 * 24 * 28
    }
  })
);

workbox.routing.registerRoute(
  /.*(?:dfds-ti-conf-data.s3.eu-central-1.amazonaws)\.com\/.*.json/, 
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'app-data-json',
    plugins: [
      new workbox.expiration.Plugin({
          maxAgeSeconds: 30,
          // Only cache 10 requests.
          maxEntries: 20,
      }),
    ],        
    cacheExpiration: {
      maxEntries: 20, 
      maxAgeSeconds: 30
    }
  })
);

self.skipWaiting();

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});