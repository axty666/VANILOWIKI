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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6d02348fa2c68432b0dd5241f0d81fd4"
  },
  {
    "url": "accumulate/index.html",
    "revision": "c8d2e532973e73d620816ba88905d303"
  },
  {
    "url": "algorithm/index.html",
    "revision": "7e10f64ed336ebb25a011793ff46a4fa"
  },
  {
    "url": "assets/css/0.styles.bc4f777c.css",
    "revision": "2cbc9de3f51adf3fef9cbfe69e052dec"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cb9023a2.js",
    "revision": "8185a5227c1509e5e98ace8f17873ddb"
  },
  {
    "url": "assets/js/11.6ad368c2.js",
    "revision": "e9caf4c0eedd8387b1fa02d03c1e9eaf"
  },
  {
    "url": "assets/js/12.a6f5dbb1.js",
    "revision": "3c9a9365423ec4947838b6cba0cc86ee"
  },
  {
    "url": "assets/js/13.8c56018e.js",
    "revision": "e3361dad7bbd3e43f67ed8b6568fb9c1"
  },
  {
    "url": "assets/js/14.02ab99cb.js",
    "revision": "fd4f6bd5f802e5da8a785ce167794521"
  },
  {
    "url": "assets/js/15.6291093b.js",
    "revision": "f3084f56cdf1988e87392ef49ad388c1"
  },
  {
    "url": "assets/js/16.63b27053.js",
    "revision": "3b12c5b4c903a0d705a1be430350c385"
  },
  {
    "url": "assets/js/17.082e246c.js",
    "revision": "06a2c2377aac26c1a0c1e3fa8a90ee46"
  },
  {
    "url": "assets/js/2.9ee4cf2d.js",
    "revision": "d0b9590ed55420ae94b058dce1d74439"
  },
  {
    "url": "assets/js/3.f48fa1d0.js",
    "revision": "0c9baf161a444131bc1405395dc44d1c"
  },
  {
    "url": "assets/js/4.97cfe991.js",
    "revision": "07518a418e364ba7a496267ccc58ea85"
  },
  {
    "url": "assets/js/5.ef378256.js",
    "revision": "5f82c743e359e4590c24a4488387e805"
  },
  {
    "url": "assets/js/6.5715853f.js",
    "revision": "0a2abb8368f2a705a28f0b35b4dbb528"
  },
  {
    "url": "assets/js/7.f641ba65.js",
    "revision": "900b52c2daa5c0cd159701b51e277c8a"
  },
  {
    "url": "assets/js/8.53518492.js",
    "revision": "b284ed50fe427066a5fcb7df32a68609"
  },
  {
    "url": "assets/js/9.bf688f0c.js",
    "revision": "fd11b37225006ba567e790fdfd38ea04"
  },
  {
    "url": "assets/js/app.a8fc46fe.js",
    "revision": "491025cf0845f3195b0b178536d76f95"
  },
  {
    "url": "example.html",
    "revision": "db1e985de56ca27be28c3443f5b150a4"
  },
  {
    "url": "gengwiki/index.html",
    "revision": "43c85db84f70eb3cb7e6c978b5760686"
  },
  {
    "url": "guide.html",
    "revision": "7dd366276152bc1619406327c39c4933"
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
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "index.html",
    "revision": "9408f2f2119325d1cb4befa400a1af91"
  },
  {
    "url": "organize/index.html",
    "revision": "29fba4a09c54c7b5f954d93372da5316"
  },
  {
    "url": "others/index.html",
    "revision": "c156ad1e37576a9bc9472b38e7f100fb"
  },
  {
    "url": "playerin/index.html",
    "revision": "df660c777d6800b4e08a577d7f788376"
  },
  {
    "url": "start.html",
    "revision": "3bbcda25061ee2bf397a2b3d39d45179"
  }
].concat(self.__precacheManifest || []);
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
