if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return n[e]||(i=new Promise(async i=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=i}else importScripts(e),i()})),i.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},i=(i,n)=>{Promise.all(i.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(i)};self.define=(i,c,a)=>{n[i]||(n[i]=Promise.resolve().then(()=>{let n={};const s={uri:location.origin+i.slice(1)};return Promise.all(c.map(i=>{switch(i){case"exports":return n;case"module":return s;default:return e(i)}})).then(e=>{const i=a(...e);return n.default||(n.default=i),n})}))}}define("./sw.js",["./workbox-e032be30"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"b1xWMZObzQpWHIEBRbgj9"},{url:"/_next/static/b1xWMZObzQpWHIEBRbgj9/_buildManifest.js",revision:"52257ea189f6d11abf08a9b19f1ede05"},{url:"/_next/static/b1xWMZObzQpWHIEBRbgj9/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/b1xWMZObzQpWHIEBRbgj9/pages/_app.js",revision:"eef084616273f5b513787c0467522ff7"},{url:"/_next/static/b1xWMZObzQpWHIEBRbgj9/pages/_error.js",revision:"7d6b4daccb672c8fa094802342d9e6d9"},{url:"/_next/static/b1xWMZObzQpWHIEBRbgj9/pages/index.js",revision:"65a627fd780bd467c559deaa96e45bb3"},{url:"/_next/static/b1xWMZObzQpWHIEBRbgj9/pages/posts/[id].js",revision:"96b7559f64ed1ae36a5c3a68ee23750b"},{url:"/_next/static/chunks/bc366228359a8b074423094e345feb9464732a46.a63ad37c0fae07407504.js",revision:"aca3873e2889c037579a4121aea59acd"},{url:"/_next/static/chunks/commons.db9b5a0ac19e93d5953c.js",revision:"7e600eda31a706eb4325da9df509528a"},{url:"/_next/static/chunks/framework.98c1b221acb34aa9927b.js",revision:"0b711c3e02b0095b778e8d3a6cd216d2"},{url:"/_next/static/css/393fc32662af15425fe4.css",revision:"a6141d82587d1c1d9aa201c245d45194"},{url:"/_next/static/css/9c118167574c37c6c25a.css",revision:"1deb08547a1165cce2bed954dbde832d"},{url:"/_next/static/runtime/main-fd8db05164f1a0c78d4f.js",revision:"f499ffb0ae0b4426646a7291020598e8"},{url:"/_next/static/runtime/polyfills-86ecb1a8474a8b4decc4.js",revision:"ee0c827fc36e3f645e45846e74592633"},{url:"/_next/static/runtime/webpack-b65cab0b00afd201cbda.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/android-icon-144x144.png",revision:"07d244b0e154e1de914ee717744d529d"},{url:"/android-icon-192x192.png",revision:"a69041dc5ca7e64e43c84a15a98bc28c"},{url:"/android-icon-36x36.png",revision:"bdf25bfa55df8d7ba5e55bef7e58dcea"},{url:"/android-icon-48x48.png",revision:"146573ebee89ca1bfb1dcdd56638a18d"},{url:"/android-icon-72x72.png",revision:"14594022bb4e4f0d71a88a85a99bfa1b"},{url:"/android-icon-96x96.png",revision:"770d965173ccdd7f49f1a1271908a9f0"},{url:"/apple-icon-114x114.png",revision:"2f60854cf22ef63777a4802743a9e7b9"},{url:"/apple-icon-120x120.png",revision:"6bfbd6ec9a91648d1bcd096036d81a03"},{url:"/apple-icon-144x144.png",revision:"87d0133e1f18010032164beabf7662e2"},{url:"/apple-icon-152x152.png",revision:"791c932686939faefd611f98fda7d385"},{url:"/apple-icon-180x180.png",revision:"7edf7920d50d7032043708b325d172cc"},{url:"/apple-icon-57x57.png",revision:"47f85dab9105618ca5cdfcf943068bd5"},{url:"/apple-icon-60x60.png",revision:"8f8b2b3d2ede174d2cc3854a1fd1201f"},{url:"/apple-icon-72x72.png",revision:"4b6af7caffdd57a40cd9f1b5f046d171"},{url:"/apple-icon-76x76.png",revision:"56319432c68c90ad99a453ab2e67c8bc"},{url:"/apple-icon-precomposed.png",revision:"34539a295541aac25243302edf9a9d2a"},{url:"/apple-icon.png",revision:"3ee824ca3ff337278edd5155ea9923c1"},{url:"/browserconfig.xml",revision:"e0b7bb895ea7194b5afa9ed3b07200f3"},{url:"/favicon-16x16.png",revision:"c86804fcb5629d4b5d5e8099439d9b7f"},{url:"/favicon-32x32.png",revision:"0cbcefe245f1bdfed30f1b48f8351ce6"},{url:"/favicon-96x96.png",revision:"4903eb1430037599667b0bbdf9c74ec5"},{url:"/favicon.ico",revision:"412192267449ea67eebabd3e62acfe51"},{url:"/images/icons/icon-128x128.png",revision:"0de6c93efc230714e0b8d342e5a52c16"},{url:"/images/icons/icon-144x144.png",revision:"a2262f4a0a9608c63eee9a8fea26fc7a"},{url:"/images/icons/icon-152x152.png",revision:"be2b7ff6eeff8c3f1cc28e2e37efbced"},{url:"/images/icons/icon-192x192.png",revision:"1cddc56ed678cdcb70c759b3e519e85c"},{url:"/images/icons/icon-384x384.png",revision:"e7d4b306a0b2fbb6fe2c6f40b6cb12c8"},{url:"/images/icons/icon-512x512.png",revision:"cd224428dc1de61e0e88be59736cb301"},{url:"/images/icons/icon-72x72.png",revision:"7d57d7b8afe495bd5a6f97308d0f14e1"},{url:"/images/icons/icon-96x96.png",revision:"0189bac56d916b77b0bc735724ba5172"},{url:"/images/profile.jpg",revision:"e0f1386006b3396b47b96da325629b47"},{url:"/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"},{url:"/ms-icon-144x144.png",revision:"497f7937d961fce92c945c426e5b1b30"},{url:"/ms-icon-150x150.png",revision:"fcc5e1d449de106a7ba0dd67a532526f"},{url:"/ms-icon-310x310.png",revision:"02a82c256fdcf514f69f180c5064e2d5"},{url:"/ms-icon-70x70.png",revision:"09714d62a2274008b638fdf3f996135e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
