importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0e4338761429b4eb16ac.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "/_nuxt/14fa53898ce96a9045de.css",
    "revision": "812883ed35864f2a9bbc1e023427a353"
  },
  {
    "url": "/_nuxt/2f86a085eb23747f1503.js",
    "revision": "74666f8d24636af28248092a1c876927"
  },
  {
    "url": "/_nuxt/47ec9caca99eed56cbd8.js",
    "revision": "7728d056f4f4b72b857888f85c4e4994"
  },
  {
    "url": "/_nuxt/4bb38aeb9be3534aaa0d.js",
    "revision": "7364ac7eab8089876b05d0a61dd0a9de"
  },
  {
    "url": "/_nuxt/c3504224114c89a83c75.js",
    "revision": "00d4a4da2a45aa2b11fb605b019f631e"
  },
  {
    "url": "/_nuxt/fc484eebe1e21f97f263.js",
    "revision": "b6ead1d9a5de62902ffcfd57a5ccd300"
  },
  {
    "url": "/_nuxt/fcb9ed7e57626ae145fc.css",
    "revision": "0a3b863e7bae6b3af01833e6347becce"
  }
], {
  "cacheId": "bitheap-frontend",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
