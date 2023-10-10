'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1b86526044c1c3ff175d1d8bf4e011e9",
"index.html": "d98f5b36a7acadc9ca88ecdb519ee91c",
"/": "d98f5b36a7acadc9ca88ecdb519ee91c",
"main.dart.js": "94393c8e080ed40c61b03fdb997c0b39",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "93a808747b9f318f5b864fcc36a5e397",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bd12312b552b91adbb24ba197ae68e2c",
"assets/images/icfb1.png": "5de8506833cb0bc77b8bf1c7172b746c",
"assets/images/hardcode_menu_2.jpeg": "6691749e04071fda1ba6aa88ba945934",
"assets/images/hardcode_menu_3.jpeg": "d23c4ff9f43aa62ba4dd6dc329256cdb",
"assets/images/food_fresh.jpeg": "1feab026b2fb88ed2ead0f23aa97f13d",
"assets/images/hardcode_menu_4.jpeg": "219cd5aab6f2ca9c5241de1c8fb5090f",
"assets/images/hardcode_menu_8.jpeg": "add1688ab1bc3448c99260a6db38c1cb",
"assets/images/hardcode_menu_12.jpeg": "677fe0f1b5981cd8c9e8d765146fd803",
"assets/images/hardcode_menu_9.jpeg": "29b26632d152f812dee4fb30d2514639",
"assets/images/hardcode_menu_5.jpeg": "fad3d801cb4a63e5745d0b46246d4264",
"assets/images/hardcode_menu_6.jpeg": "2684573676719c55f3b9b905aee3ae0e",
"assets/images/hardcode_menu_11.jpeg": "81ea043cb745e09f83503428d493af24",
"assets/images/sol4.webp": "6051d4dd0436996bd7b7b3f4ae83e1df",
"assets/images/sol1.jpeg": "6b84ae9c262a2ba99edbe59f24f8bbf2",
"assets/images/hardcode_menu_10.jpeg": "ced3cf436bb2f66dfd09c76169306c59",
"assets/images/hardcode_menu_7.jpeg": "adda4b6eda7fa1f82122ab4eb511a942",
"assets/images/placeholder.jpeg": "ede267e784c8dab18c39f54b38e1b8d4",
"assets/images/family.jpeg": "3b118ee4694e18b6710738c516d0cd8c",
"assets/images/sol4.png": "2ea5e8c3abee46136e545f529ecd1a2e",
"assets/images/hardcode_menu_1.jpeg": "616a11b460165e2913b783faa6b2a6b1",
"assets/images/sol2.png": "50e80d64f356daaa40c20eb0b0a3894d",
"assets/images/Lacuisine_resto.jpg": "6b22a3d1fb8535c31dd1b1a62b1b3bd9",
"assets/images/sol3.png": "98eef9a2c865eda8c05c3260808993cb",
"assets/AssetManifest.json": "778ec4da3195c45910611ff086d9912b",
"assets/NOTICES": "de78941b0bc710d84ca548c73008ab1b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "4198442aa67d3bd62d04347df6ae66f1",
"assets/fonts/MaterialIcons-Regular.otf": "b7feb26f3a968e1ec44f963d9110ed1b",
"assets/assets/landing_page.json": "2bf68e46b5deec56b168c0d0d5f145bd",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
