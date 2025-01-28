'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f8174eecd64cc7c08a2cc24ab41c9b51",
"version.json": "a8cf8aa46923610a2560526f578d0171",
"index.html": "c7c224c86296c623b2b304a4e23ee6f7",
"/": "c7c224c86296c623b2b304a4e23ee6f7",
"main.dart.js": "cc965b47fb79409fd599a8cdd46aee17",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "82acfc3b050a93af718c0f7a4a03f5cb",
"assets/AssetManifest.json": "6e56865948fff215236e42d7f022e464",
"assets/NOTICES": "9b0f619adacc70000abc63a724e71a71",
"assets/FontManifest.json": "7baeca389bafa791b06ce5627efd9dfa",
"assets/AssetManifest.bin.json": "644ece6edc39b3ec312987b49a36b107",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8821d6459a388aa65acb9a695fa669a8",
"assets/fonts/AdvertisingScriptBoldTrial.ttf": "9013d6e81bb778958035523bee15a996",
"assets/fonts/nunito_bold.ttf": "ee4d00aaeaf8371a9016405cf85bcc51",
"assets/fonts/Nunito-ExtraBold.ttf": "5b5a206f5cd32fa496c93925d0caf609",
"assets/fonts/Montserrat-ExtraBold.ttf": "bd8fb30c6473177cfb9a5544c9ad8fdb",
"assets/fonts/AdvertisingScriptMonolineTrial.ttf": "e7cfb1dd29e6653679ac46098e2157f3",
"assets/fonts/MaterialIcons-Regular.otf": "5884000f411e7fcce46be818c6372f83",
"assets/assets/loading.json": "e891ce11baf3cb4badd5b89f58c7df32",
"assets/assets/chatBot/chatbot_circle.png": "3e1fbca6a6ef26f154bd1041e24c2cb9",
"assets/assets/chatBot/chat_arrow.svg": "a4b5cdabce69a44a2096d68939d0c79b",
"assets/assets/chatBot/ycallback.png": "34e04f69a2cea6554573918fd193ab27",
"assets/assets/chatBot/sonnie.png": "3f79252d2a4ac3537b28b1ef74a58d3a",
"assets/assets/chatBot/avatar.png": "37660f163dcc47fec3e886a24401e485",
"assets/assets/chatBot/check_mark.json": "84b1b40340b6440985a296ba9e30ab5f",
"assets/assets/chatBot/loading_message.json": "65bd1b7b2f7dd8a6ed3c6f683e1b0877",
"assets/assets/chatBot/magnet_circle.json": "279b61b06bf91cf5c8732889ec14e59d",
"assets/assets/chatBot/app_bar_bot_icon.png": "3c46f792827aa35ea8c85568bbab66c9",
"assets/assets/chatBot/Y-Logo.svg": "c57c2fa77b68801d7db8e72d1116614c",
"assets/assets/chatBot/holding.json": "f0ffcdf87da50766f024812d53b916c3",
"assets/assets/predictor/blood.svg": "1532b040b6837818453a313d8e05b6fa",
"assets/assets/predictor/wind.svg": "5b54ccafeef278cc87946dc8d1bc2d63",
"assets/assets/predictor/Polygon.svg": "b9cba64d2ec65a6d1e03e9e9628dfe14",
"assets/assets/predictor/Low-phone.png": "9f8b11ea4d2a30359ba83015f3105aa3",
"assets/assets/predictor/light-emergency-on.svg": "0498a570b15026772f37ca5f67455c46",
"assets/assets/predictor/Low-Web.png": "8355cf8088587a05d22533cf72df1645",
"assets/assets/predictor/blur_bg.png": "48955d52feb031ee3edb29edb3f94895",
"assets/assets/predictor/high-phone.png": "8f35bbfea8be237dc52dd662cf9bff89",
"assets/assets/predictor/meh.svg": "669c6ff312da7e31c621088921ce9a92",
"assets/assets/predictor/bolt.svg": "e20122ce21790b6387dcfb11f0c14b8d",
"assets/assets/predictor/bg_small.png": "bf23cc3e44bcb1b1427e24c6d08e64dc",
"assets/assets/predictor/happy.svg": "9c14f5e36fa320de7bed506c955ab5c7",
"assets/assets/predictor/sign_up_bg.png": "90114aa2591431b6a5d437890bf12f05",
"assets/assets/predictor/laugh-beam.svg": "4ad20aca5367f69aa388c7db398c705a",
"assets/assets/predictor/battery-exclamation.svg": "75c4a4936c6847eb7747e0bd231bf147",
"assets/assets/predictor/battery-bolt.svg": "1420120c81a576b6a80b3c495e3d3b33",
"assets/assets/predictor/march_icon.png": "ce6c23a75583af316918679a6ce9bc8b",
"assets/assets/predictor/High-web.png": "4620bfb32ab7c3d287009402c595a55f",
"assets/assets/predictor/check_box.svg": "14371cf65e04ebeca255fae73517c659",
"assets/assets/predictor/angry.svg": "66242dc5bd783be371995d4512632c32",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
