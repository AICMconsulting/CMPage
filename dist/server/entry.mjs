import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C2Q_kKdY.mjs';
import { manifest } from './manifest_CTMmi5iy.mjs';
import './_astro-internal_middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/login.astro.mjs');
const _page2 = () => import('./pages/admin/posts.astro.mjs');
const _page3 = () => import('./pages/admin.astro.mjs');
const _page4 = () => import('./pages/api/auth/logout.astro.mjs');
const _page5 = () => import('./pages/api/comments.astro.mjs');
const _page6 = () => import('./pages/api/contact.astro.mjs');
const _page7 = () => import('./pages/api/testimonials.astro.mjs');
const _page8 = () => import('./pages/blog.astro.mjs');
const _page9 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page10 = () => import('./pages/contacto.astro.mjs');
const _page11 = () => import('./pages/nosotros.astro.mjs');
const _page12 = () => import('./pages/servicios.astro.mjs');
const _page13 = () => import('./pages/testimonios.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/admin/login.astro", _page1],
    ["src/pages/admin/posts/index.astro", _page2],
    ["src/pages/admin/index.astro", _page3],
    ["src/pages/api/auth/logout.js", _page4],
    ["src/pages/api/comments.js", _page5],
    ["src/pages/api/contact.js", _page6],
    ["src/pages/api/testimonials.js", _page7],
    ["src/pages/blog/index.astro", _page8],
    ["src/pages/blog/[...slug].astro", _page9],
    ["src/pages/contacto.astro", _page10],
    ["src/pages/nosotros.astro", _page11],
    ["src/pages/servicios.astro", _page12],
    ["src/pages/testimonios.astro", _page13],
    ["src/pages/index.astro", _page14]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///home/project/dist/client/",
    "server": "file:///home/project/dist/server/",
    "host": true,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
