'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1b86526044c1c3ff175d1d8bf4e011e9",
"index.html": "6536cecbcdfc89539605b644acb024b2",
"/": "6536cecbcdfc89539605b644acb024b2",
"main.dart.js": "6ec16aa2eb720b3747c3a149f1ec098e",
"faviconn.jpeg": "4942d3450a720d12f37b540776250356",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "93a808747b9f318f5b864fcc36a5e397",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "354a15946fcbb8ade43fd17732387920",
"assets/images/icfb1.png": "5de8506833cb0bc77b8bf1c7172b746c",
"assets/images/hardcode_menu_2.jpeg": "6691749e04071fda1ba6aa88ba945934",
"assets/images/hardcode_menu_3.jpeg": "d23c4ff9f43aa62ba4dd6dc329256cdb",
"assets/images/food_fresh.jpeg": "1feab026b2fb88ed2ead0f23aa97f13d",
"assets/images/hardcode_menu_4.jpeg": "219cd5aab6f2ca9c5241de1c8fb5090f",
"assets/images/sol2.jpeg": "de8030111106ae455decc4e541f47e33",
"assets/images/hardcode_menu_8.jpeg": "add1688ab1bc3448c99260a6db38c1cb",
"assets/images/hardcode_menu_12.jpeg": "677fe0f1b5981cd8c9e8d765146fd803",
"assets/images/hardcode_menu_9.jpeg": "29b26632d152f812dee4fb30d2514639",
"assets/images/hardcode_menu_5.jpeg": "fad3d801cb4a63e5745d0b46246d4264",
"assets/images/landing1.jpeg": "be28d889e17669fd0fc1c3d40ccd09b6",
"assets/images/hardcode_menu_6.jpeg": "2684573676719c55f3b9b905aee3ae0e",
"assets/images/hardcode_menu_11.jpeg": "81ea043cb745e09f83503428d493af24",
"assets/images/sol4.webp": "6051d4dd0436996bd7b7b3f4ae83e1df",
"assets/images/hardcode_menu_10.jpeg": "ced3cf436bb2f66dfd09c76169306c59",
"assets/images/hardcode_menu_7.jpeg": "adda4b6eda7fa1f82122ab4eb511a942",
"assets/images/placeholder.jpeg": "ede267e784c8dab18c39f54b38e1b8d4",
"assets/images/family.jpeg": "3b118ee4694e18b6710738c516d0cd8c",
"assets/images/sol4.png": "2ea5e8c3abee46136e545f529ecd1a2e",
"assets/images/hardcode_menu_1.jpeg": "616a11b460165e2913b783faa6b2a6b1",
"assets/images/Lacuisine_resto.jpg": "6b22a3d1fb8535c31dd1b1a62b1b3bd9",
"assets/images/sol3.png": "98eef9a2c865eda8c05c3260808993cb",
"assets/AssetManifest.json": "aead9fe8cfc6006cf54bbd5c3f1840dd",
"assets/NOTICES": "6016330cfb050447d80d65ffb3084007",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "eac526b18691b693e2a8a9a9837cb034",
"assets/fonts/MaterialIcons-Regular.otf": "3895b881d466653636dbf9611945f6f4",
"assets/assets/landing_page.json": "8bafcb3dac237222df416977fd62d0d8",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
