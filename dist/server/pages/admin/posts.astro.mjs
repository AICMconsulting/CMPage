/* empty css                                    */
import { c as createComponent, r as renderTemplate, e as renderHead, a as addAttribute, f as renderSlot, b as createAstro, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_BhKzNdWT.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getAllPosts } from '../../chunks/blog_DTxU6iFE.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$AdminLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AdminLayout;
  const { title } = Astro2.props;
  const menuItems = [
    { href: "/admin", text: "Dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { href: "/admin/posts", text: "Posts", icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2" },
    { href: "/admin/comments", text: "Comentarios", icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" },
    { href: "/admin/testimonials", text: "Testimonios", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" }
  ];
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} - Admin CM Consulting</title>${renderHead()}</head> <body class="bg-gray-100"> <div class="flex h-screen"> <!-- Sidebar --> <aside class="bg-corporate-blue text-white w-64 flex-shrink-0"> <div class="p-4"> <h1 class="text-xl font-bold">CM Consulting</h1> <p class="text-sm opacity-75">Panel Administrativo</p> </div> <nav class="mt-8"> <ul class="space-y-2"> ${menuItems.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")} class="flex items-center px-4 py-2 hover:bg-corporate-blue-700 transition-colors"> <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(item.icon, "d")}></path> </svg> ${item.text} </a> </li>`)} </ul> </nav> </aside> <!-- Main Content --> <main class="flex-1 overflow-y-auto"> <header class="bg-white shadow"> <div class="flex justify-between items-center px-6 py-4"> <h2 class="text-xl font-semibold text-gray-800">${title}</h2> <div class="flex items-center"> <button id="logoutBtn" class="text-gray-600 hover:text-corporate-blue transition-colors">
Cerrar sesión
</button> </div> </div> </header> <div class="container mx-auto"> ${renderSlot($$result, $$slots["default"])} </div> </main> </div> </body></html>`;
}, "C:/Users/FelixRafaelSanchezFa/Documents/GitHub/CMPage/src/layouts/AdminLayout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  if (!Astro2.cookies.get("adminToken")) {
    return Astro2.redirect("/admin/login");
  }
  const posts = await getAllPosts();
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "title": "Gesti\xF3n de Posts" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-6"> <div class="flex justify-between items-center mb-6"> <h1 class="text-2xl font-bold">Posts</h1> <a href="/admin/posts/new" class="bg-corporate-blue text-white px-4 py-2 rounded-lg hover:bg-corporate-blue/90 transition-colors">
Nuevo Post
</a> </div> <div class="bg-white rounded-lg shadow overflow-hidden"> <table class="min-w-full divide-y divide-gray-200"> <thead class="bg-gray-50"> <tr> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Título
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Autor
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Fecha
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Estado
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Acciones
</th> </tr> </thead> <tbody class="bg-white divide-y divide-gray-200"> ${posts.map((post) => renderTemplate`<tr> <td class="px-6 py-4 whitespace-nowrap"> <div class="text-sm font-medium text-gray-900">${post.Title}</div> </td> <td class="px-6 py-4 whitespace-nowrap"> <div class="text-sm text-gray-500">${post.Author}</div> </td> <td class="px-6 py-4 whitespace-nowrap"> <div class="text-sm text-gray-500"> ${new Date(post.PublishedDate).toLocaleDateString()} </div> </td> <td class="px-6 py-4 whitespace-nowrap"> <span${addAttribute(`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${post.IsPublished ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`, "class")}> ${post.IsPublished ? "Publicado" : "Borrador"} </span> </td> <td class="px-6 py-4 whitespace-nowrap text-sm font-medium"> <a${addAttribute(`/admin/posts/${post.Id}/edit`, "href")} class="text-corporate-blue hover:text-corporate-yellow mr-4">
Editar
</a> <button class="text-red-600 hover:text-red-900 delete-post"${addAttribute(post.Id, "data-post-id")}>
Eliminar
</button> </td> </tr>`)} </tbody> </table> </div> </div> ` })} `;
}, "C:/Users/FelixRafaelSanchezFa/Documents/GitHub/CMPage/src/pages/admin/posts/index.astro", void 0);

const $$file = "C:/Users/FelixRafaelSanchezFa/Documents/GitHub/CMPage/src/pages/admin/posts/index.astro";
const $$url = "/admin/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
