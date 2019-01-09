/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "11d9e18304a70bb4c37094f71484db91"
  },
  {
    "url": "assets/css/0.styles.82cd063b.css",
    "revision": "26ef0d4eb33cf8f883be6d635d4cbf8c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.628eb611.js",
    "revision": "af376c9698d47f23e6ba2a3b7d53ecd5"
  },
  {
    "url": "assets/js/11.11468f94.js",
    "revision": "6686cd57e8217f51ca66477a0aa7e0ea"
  },
  {
    "url": "assets/js/12.3e9615a4.js",
    "revision": "dcff14885fde806b2970c49506072fa8"
  },
  {
    "url": "assets/js/2.1ed022b3.js",
    "revision": "6d52a3f01fe886b8dd3c57553f24808a"
  },
  {
    "url": "assets/js/3.1130f901.js",
    "revision": "ac25aecebf60332900c6745bdfa5099f"
  },
  {
    "url": "assets/js/4.1f44c2d6.js",
    "revision": "7f59e9c26758a8f7315304b56085c57a"
  },
  {
    "url": "assets/js/5.fd3ede52.js",
    "revision": "34dce118f0eeac2abbb92bb3ab20c5d1"
  },
  {
    "url": "assets/js/6.ce4873c8.js",
    "revision": "412ab75ae98f015a88ec6e01e46464af"
  },
  {
    "url": "assets/js/7.67fd39f8.js",
    "revision": "be470c9cf914cb6807d31c6653d998ca"
  },
  {
    "url": "assets/js/8.bce57f5a.js",
    "revision": "9953be061a1ae7dcb119e31544b5a18c"
  },
  {
    "url": "assets/js/9.64022121.js",
    "revision": "550f36111e8e136e8356a452c58100f0"
  },
  {
    "url": "assets/js/app.30aff691.js",
    "revision": "71317b05e0770a77d71e971290fe5ac0"
  },
  {
    "url": "guide/index.html",
    "revision": "4285285ea96b054991403986cb3e6a7d"
  },
  {
    "url": "index.html",
    "revision": "980794f12cf090bfef93c2627305e554"
  },
  {
    "url": "logo.png",
    "revision": "01b5cb92edcc45148761e609cfdf8e5e"
  },
  {
    "url": "playground/index.html",
    "revision": "018b6c34e21b729c68ad4d2d0a85f7dd"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "72bcb5649ffcd40f93a8a7c576882c4b"
  },
  {
    "url": "zh/index.html",
    "revision": "a38b3cdf30549c2b6a4599ab361a33c5"
  },
  {
    "url": "zh/playground/index.html",
    "revision": "ecf4a428229c39a7ec1bd7cc577808fd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
