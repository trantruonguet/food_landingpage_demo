'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1b86526044c1c3ff175d1d8bf4e011e9",
"index.html": "13207f4143f4b11301256364bae8adf8",
"/": "13207f4143f4b11301256364bae8adf8",
"main.dart.js": "3772678442251cc169de3573e01b0e53",
"faviconn.jpeg": "4942d3450a720d12f37b540776250356",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "93a808747b9f318f5b864fcc36a5e397",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "354a15946fcbb8ade43fd17732387920",
".git/config": "ed1c1a273b74aa21d7c17ca1dfdc38e2",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/a0e55578e651b79a33da35387cdcad20c50c61": "01dfbc5e441cd6bdaf327eac7ebac0b0",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/8be699576991abfb3c9d6f1dfe7f52626b97c6": "35fdfb2fa26fa56120b30ef2c8284de4",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/f08af0d23662cbbfb93362f05b1f9fcc8734ac": "264d0416ff8f954856b30591e08b186b",
".git/objects/9c/cad3a5063a7078e97de71d96760d9aabc3620e": "7a3a31e9d78bffdb8a6e3a2c38241345",
".git/objects/a4/bec76d8c32487507601ee742d2a2ed4db85600": "709e7e5ee55d442b317338420d763b4e",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/df/a60534671bcafa974abd457989a270eba6f5b6": "3052e5a956763096e3adbc88aa953a58",
".git/objects/df/f67f38ca13cd09c6d768fa240a898d311640c7": "2dd53c6f2fe620a79f86b86e44274db7",
".git/objects/df/aa6d9b131b609014f604cbafb55bb8711d3690": "5c915e9d0bffa17d0c736bf02fd288a5",
".git/objects/a5/2fb61287d7d1f11588533d3dd5842defe0713e": "5d4064e0d82e89d6f5739887ae137777",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ca/af5aa93c7c1a3e6a557e9c1e1479e6945891b7": "d71c80121c931596fe9398e3d6d5b83b",
".git/objects/ec/f90ebe5aaa5d570cc45408afda27dd6137a24c": "5fd11a88f140973b4240f785e10929bb",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/65/dafaf97df455bb59ba734b64cbd6c55429fe57": "e26a120e3121f558509eb7d33f0e248b",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/97/887311f9b2b249b42308f4b967e7712256e5d0": "11d227501317af962fb3b58dd591cc2f",
".git/objects/63/abd71012d5b2200e051cf491a228b5f45f322b": "b5e3d9ddfdce0747fb23dec2e14a7a05",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ff/c717f49490a0721841bfadccf8ab671f2cbf73": "cd37d9187ca9162376ef654e2a37f31a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/3d53c861ad7591ecaa6817de1bc0931ed2ee1c": "8025b48f207807120a24ddc713241d5e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/48/17c87fddd8b2a0156965ce461478da66b3cdee": "2e4062781f6a259bae9896c4bf15afa1",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1e/1c32b53cc4a2ddc891216bf653dd4efc6a1bac": "1d1c408dd8f9dbe9ad3777b7098ec3d5",
".git/objects/23/75cabd426c9a8e240683267da8d32bbbcc3b0f": "452317609c8181179ade64adcbb4e88f",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/78/9b1af9f016d496c5fd19f771f8778e6fecd348": "a3d9b8f6e55bd5bf82e42b90d6159be2",
".git/objects/7a/0c75e3a0ae0116e1036b2ef0623e1a52b48096": "027be1c1ca260e7e8aea247356f98a43",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "05438cf465cbc95fdd0b2a3dacf9fdfe",
".git/logs/refs/heads/master": "bc00e64ad7e761837b516bfef3df685e",
".git/logs/refs/remotes/origin/master": "aebc9fdbd54e7c4b5b75fe5349b2786a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "32b3ea2f80c39dd1569306f19039ed3e",
".git/refs/remotes/origin/master": "32b3ea2f80c39dd1569306f19039ed3e",
".git/index": "1b20d00b2ee972aae5cbb74b2f6e4112",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "dc82fe37a1aa620807c85ef1e47fa1c9",
".git/sourcetreeconfig": "f67f0c44898e8dec377641b1fd420784",
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
"assets/NOTICES": "a562aa3edcb02597d007ec9b5494db6e",
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
