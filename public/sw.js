if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let t = Promise.resolve();
      return (
        s[e] ||
          (t = new Promise(async (t) => {
            if ("document" in self) {
              const s = document.createElement("script");
              (s.src = e), document.head.appendChild(s), (s.onload = t);
            } else importScripts(e), t();
          })),
        t.then(() => {
          if (!s[e]) throw new Error(`Module ${e} didn’t register its module`);
          return s[e];
        })
      );
    },
    t = (t, s) => {
      Promise.all(t.map(e)).then((e) => s(1 === e.length ? e[0] : e));
    },
    s = { require: Promise.resolve(t) };
  self.define = (t, n, a) => {
    s[t] ||
      (s[t] = Promise.resolve().then(() => {
        let s = {};
        const i = { uri: location.origin + t.slice(1) };
        return Promise.all(
          n.map((t) => {
            switch (t) {
              case "exports":
                return s;
              case "module":
                return i;
              default:
                return e(t);
            }
          })
        ).then((e) => {
          const t = a(...e);
          return s.default || (s.default = t), s;
        });
      }));
  };
}
define("./sw.js", ["./workbox-ea903bce"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/7days50projects.jpg",
          revision: "9ee01529d82789975e140515ebd684ef",
        },
        { url: "/Me.jpg", revision: "89b0173375dc7a07e2ab61260e36e30c" },
        {
          url: "/_next/static/Ig6Rz8jZWthxXnwRzjt0J/_buildManifest.js",
          revision: "Ig6Rz8jZWthxXnwRzjt0J",
        },
        {
          url: "/_next/static/Ig6Rz8jZWthxXnwRzjt0J/_ssgManifest.js",
          revision: "Ig6Rz8jZWthxXnwRzjt0J",
        },
        {
          url: "/_next/static/chunks/1bfc9850.3c171306e4eb3b9143d5.js",
          revision: "Ig6Rz8jZWthxXnwRzjt0J",
        },
        {
          url: "/_next/static/chunks/commons.3f228ab634d4a0ce6c3e.js",
          revision: "Ig6Rz8jZWthxXnwRzjt0J",
        },
        {
          url: "/_next/static/chunks/framework.da6e78c416fe44b6a1a8.js",
          revision: "Ig6Rz8jZWthxXnwRzjt0J",
        },
        {
          url: "/_next/static/chunks/main-6c577d9fc279156ebb37.js",
          revision: "Ig6Rz8jZWthxXnwRzjt0J",
        },
        {
          url: "/_next/static/chunks/pages/404-0259ef0d28a3f7d880ae.js",
          revision: "Ig6Rz8jZWthxXnwRzjt0J",
        },
        {
          url: "/_next/static/chunks/pages/_app-b4395509248a61f85422.js",
          revision: "Ig6Rz8jZWthxXnwRzjt0J",
        },
        {
          url: "/_next/static/chunks/pages/_error-c3117f71aadac15563f1.js",
          revision: "Ig6Rz8jZWthxXnwRzjt0J",
        },
        {
          url: "/_next/static/chunks/pages/index-4ed348d0a90e3e3f9966.js",
          revision: "Ig6Rz8jZWthxXnwRzjt0J",
        },
        {
          url: "/_next/static/chunks/polyfills-8f31809deb7932dd0187.js",
          revision: "Ig6Rz8jZWthxXnwRzjt0J",
        },
        {
          url: "/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",
          revision: "Ig6Rz8jZWthxXnwRzjt0J",
        },
        {
          url: "/_next/static/css/676a4fe49254b0b03f0b.css",
          revision: "Ig6Rz8jZWthxXnwRzjt0J",
        },
        {
          url: "/_next/static/css/ed7ff9e64907b67eb924.css",
          revision: "Ig6Rz8jZWthxXnwRzjt0J",
        },
        {
          url: "/_next/static/media/Social-Logos.6aec9bfbc4f7d13a975e3843734c4016.ttf",
          revision: "Ig6Rz8jZWthxXnwRzjt0J",
        },
        {
          url: "/_next/static/media/Social-Logos.954ad3c6d35839ce0ad6484d979cd2ba.woff",
          revision: "Ig6Rz8jZWthxXnwRzjt0J",
        },
        {
          url: "/_next/static/media/Social-Logos.d63a044c1842f2c706e8ec80d02f5a0c.svg",
          revision: "Ig6Rz8jZWthxXnwRzjt0J",
        },
        {
          url: "/_next/static/media/Social-Logos.dd53bd734920d3b6632592fe3fb59b17.eot",
          revision: "Ig6Rz8jZWthxXnwRzjt0J",
        },
        {
          url: "/_next/static/media/brands.1c913291ef554e6c256007712540fc7b.svg",
          revision: "Ig6Rz8jZWthxXnwRzjt0J",
        },
        {
          url: "/_next/static/media/brands.4d250f2042c4c4a164b16b7cd48658e9.eot",
          revision: "Ig6Rz8jZWthxXnwRzjt0J",
        },
        {
          url: "/_next/static/media/brands.88238910fcb143f798d021fb3ee5e0c2.ttf",
          revision: "Ig6Rz8jZWthxXnwRzjt0J",
        },
        {
          url: "/_next/static/media/brands.cef28c83beb10c441760ece93384d623.woff",
          revision: "Ig6Rz8jZWthxXnwRzjt0J",
        },
        {
          url: "/android-chrome-192x192.png",
          revision: "d9530f8feca99636a2c2cf85357b1125",
        },
        {
          url: "/android-chrome-512x512.png",
          revision: "74a8e712ccbb0add9418d062c19c3edd",
        },
        {
          url: "/apple-touch-icon.png",
          revision: "c42ee7c1c5fc9c26972b7f7b3b659061",
        },
        { url: "/aubit.jpg", revision: "554d5249a7478a0bdc974190b8ef72ac" },
        {
          url: "/bonafide-generator.jpg",
          revision: "abb1315d3d7287218c7b5c3e9f60eae1",
        },
        {
          url: "/browserconfig.xml",
          revision: "4c4cbadca63e1d403e2722ee95aeb4d2",
        },
        {
          url: "/favicon-16x16.png",
          revision: "9c85c10832de15ff4c51227d83473357",
        },
        {
          url: "/favicon-32x32.png",
          revision: "1d326d0cc6c131553af3c4a42fe0844d",
        },
        { url: "/favicon.ico", revision: "9833a7506ffba2def61f6e7a1edf2a13" },
        { url: "/fullycart.jpg", revision: "7caffbf4a0c2680354378812eb5d97c4" },
        {
          url: "/infinite-loop-club.jpg",
          revision: "7826913d811e3573de70122778ca9656",
        },
        { url: "/manifest.json", revision: "8f5f858c8d2652e5b04f816c807f6fbe" },
        {
          url: "/mstile-150x150.png",
          revision: "afc6aef02f5a7fa7c5ede547ff7f1165",
        },
        {
          url: "/safari-pinned-tab.svg",
          revision: "eff86ad637115c54053ce577afc05649",
        },
        {
          url: "/zosimetech.jpg",
          revision: "c696c57ac5040113dd449a9b24546b67",
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: t,
              event: s,
              state: n,
            }) =>
              t && "opaqueredirect" === t.type
                ? new Response(t.body, {
                    status: 200,
                    statusText: "OK",
                    headers: t.headers,
                  })
                : t,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|mp4)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-media-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const t = e.pathname;
        return !t.startsWith("/api/auth/") && !!t.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    );
});
