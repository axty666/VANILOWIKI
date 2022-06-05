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
    "revision": "fc6e089c10de3c361fc18a670c6973d6"
  },
  {
    "url": "accumulate/index.html",
    "revision": "b8a2745567157201c18b0410b2c07265"
  },
  {
    "url": "algorithm/index.html",
    "revision": "40fbc52b0e943e1e9f6f859e3d705a1f"
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
    "url": "assets/js/7.851e2c1f.js",
    "revision": "18843d60a9d8e8e79c629a020282d1ec"
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
    "url": "assets/js/app.d7758a59.js",
    "revision": "94bcc2e19c86d389cd0b5be3341d408d"
  },
  {
    "url": "example.html",
    "revision": "a082f5aa75a7a500e265b1e3fc6113d6"
  },
  {
    "url": "gengwiki/index.html",
    "revision": "5ec15fb7ad56bd1d79e0613b2304245f"
  },
  {
    "url": "guide.html",
    "revision": "1a500fee94efaf8e5f7ebde00ddf9b64"
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
    "revision": "220b9ad052673bd01b61da09d4783b4d"
  },
  {
    "url": "organize/index.html",
    "revision": "72ca8b4ca03722ba50a301baf36f98f4"
  },
  {
    "url": "others/index.html",
    "revision": "77abe10cdbab60c4a0ea58f2f370cbc6"
  },
  {
    "url": "playerin/index.html",
    "revision": "d0ace4833f7e5611c14b861e91ad2b58"
  },
  {
    "url": "start.html",
    "revision": "b92cbf9e424f2607ddc4e8fed37c17c9"
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
