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
    "revision": "3ba37b571f872046374c62a3c71049e5"
  },
  {
    "url": "accumulate/index.html",
    "revision": "3e410657686d8a0189121ac0b2ea4b37"
  },
  {
    "url": "algorithm/index.html",
    "revision": "d0db40bb0dad49e7ce09510f3193b1a3"
  },
  {
    "url": "assets/css/0.styles.a85dd2a7.css",
    "revision": "a2cf9223cc3ff037d2fb067b7e8f4f65"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bfebd199.js",
    "revision": "0fa4d4282e06e623de71eaf6c0b6f2a1"
  },
  {
    "url": "assets/js/11.8bd14dfb.js",
    "revision": "bc340f983a855eb3679a3155cb065e30"
  },
  {
    "url": "assets/js/12.8351cd27.js",
    "revision": "51f46dee1913c420b5f0324ec5d0f380"
  },
  {
    "url": "assets/js/13.ce442ea6.js",
    "revision": "fc705a3cc5accd255b024027b07eaa38"
  },
  {
    "url": "assets/js/14.d917d634.js",
    "revision": "117b2a60b3691e4e1ab916985a542360"
  },
  {
    "url": "assets/js/15.c5c99116.js",
    "revision": "701d54d5c8806b0ab42e88bcf98741f7"
  },
  {
    "url": "assets/js/16.e9182f05.js",
    "revision": "b21245a54a084ac8ebebf7935fe3d01f"
  },
  {
    "url": "assets/js/17.42d61663.js",
    "revision": "842370f3748343768c4b50f629404289"
  },
  {
    "url": "assets/js/2.b161d65d.js",
    "revision": "6b08bc2d75aeb10d497d9ae59b75da5b"
  },
  {
    "url": "assets/js/3.8826885a.js",
    "revision": "848a409e488351404e582cfa543a8053"
  },
  {
    "url": "assets/js/4.5426b286.js",
    "revision": "525e7839a0ad20f76a0bff6ce66e9258"
  },
  {
    "url": "assets/js/5.ef6b9bbf.js",
    "revision": "477fea2a8a2ebb4cdeac093883951108"
  },
  {
    "url": "assets/js/6.9833f70c.js",
    "revision": "0013cbb2cc6d74c2de7b898f5ccc8f53"
  },
  {
    "url": "assets/js/7.bfb263fb.js",
    "revision": "5e2aa825b29a348764b4fcc0b3b245a5"
  },
  {
    "url": "assets/js/8.8ee301f0.js",
    "revision": "bc776d40b4ed1f42c832db9061f725a6"
  },
  {
    "url": "assets/js/9.f4afcb4f.js",
    "revision": "d619cfced419a2cb6b93148855346d0d"
  },
  {
    "url": "assets/js/app.1090f166.js",
    "revision": "0e5846dcc0ce1c17483137c013b4abc9"
  },
  {
    "url": "example.html",
    "revision": "9bb3c07c952bf3e8173f8e115d0e1958"
  },
  {
    "url": "gengwiki/index.html",
    "revision": "dbf69bda334b08c6a0a16dbbb437eb63"
  },
  {
    "url": "guide.html",
    "revision": "cdbac8902d837bd77caeb6234c445562"
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
    "revision": "6798d91ff557ec359df58cb2c32c0082"
  },
  {
    "url": "organize/index.html",
    "revision": "b46ed5a76e6ed3bd26cc6cace6b96d2e"
  },
  {
    "url": "others/index.html",
    "revision": "17f1956022bc4d82db00d4b346f99bf3"
  },
  {
    "url": "playerin/index.html",
    "revision": "a2a63d36095c147456e8c669bb3beb8c"
  },
  {
    "url": "start.html",
    "revision": "09deb00878b4bcb50348f52bf11690db"
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
