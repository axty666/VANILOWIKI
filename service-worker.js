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
    "revision": "593343072c7a3781232d8073b47f8882"
  },
  {
    "url": "assets/css/0.styles.7421f36b.css",
    "revision": "bf90fb6413dc3d69127c9216150c63ae"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.858e80da.js",
    "revision": "59b9e09855a16d382db7d8ff58d74b0d"
  },
  {
    "url": "assets/js/3.c4b23ffa.js",
    "revision": "bd338f9175dd57e8e01f6f074875f393"
  },
  {
    "url": "assets/js/4.86410755.js",
    "revision": "f831d21f55b659669de375a1f7c16db1"
  },
  {
    "url": "assets/js/5.f1ffa56d.js",
    "revision": "b8dba9bdfc64e311ee85b5d09836844f"
  },
  {
    "url": "assets/js/6.6065c327.js",
    "revision": "56723c228de150790ab978b47d723d83"
  },
  {
    "url": "assets/js/7.8d7996d0.js",
    "revision": "f992500f82e1428c2dde5bccdabbf15e"
  },
  {
    "url": "assets/js/8.94e93771.js",
    "revision": "6731661f4871f3023ebd4aa759f1dc7b"
  },
  {
    "url": "assets/js/9.15149801.js",
    "revision": "1f7d64e683db05eb1dc587b15591d76d"
  },
  {
    "url": "assets/js/app.d6a9051b.js",
    "revision": "d795b54253d98120d2e969f04554641c"
  },
  {
    "url": "example.html",
    "revision": "458ef76765d5c9e62f35d07a42ae87c9"
  },
  {
    "url": "gengwiki/index.html",
    "revision": "e154c2bd0c4bc9136eb47015b1f56203"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "2b24acf647bb19050717b6f5f31f32ec"
  },
  {
    "url": "icons/logo.png",
    "revision": "e5a8ab3e557756f80d7b83989109a7ec"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "65cb6e08ef9d9e31db7cc7f31578191a"
  },
  {
    "url": "icons/photo.png",
    "revision": "e5a8ab3e557756f80d7b83989109a7ec"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "ec28b173dc5ca2105d9bf2367a8aff10"
  },
  {
    "url": "index.html",
    "revision": "d9c78ac7a26f586070fe11b7ce2aa88f"
  },
  {
    "url": "organize/index.html",
    "revision": "ad0fca777e7554b96b546ca1c3a41624"
  },
  {
    "url": "playerin/index.html",
    "revision": "23063edc97bd4581b7de550f93f92bc1"
  },
  {
    "url": "start.html",
    "revision": "f4fdaa23bc9fc6ae95ad0f87a4a43b88"
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
