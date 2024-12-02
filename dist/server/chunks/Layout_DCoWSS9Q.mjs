import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent, f as renderSlot, e as renderHead } from './astro/server_BhKzNdWT.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Logo;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a href="/"${addAttribute(`inline-block ${className}`, "class")}> <img src="/images/logo.svg" alt="CM Consulting" class="h-12 w-auto"> </a>`;
}, "/home/project/src/components/Logo.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "CM Consulting - L\xEDder en soluciones tecnol\xF3gicas y transformaci\xF3n digital" } = Astro2.props;
  const navLinks = [
    { href: "/", text: "Inicio" },
    { href: "/nosotros", text: "Nosotros" },
    { href: "/servicios", text: "Servicios" },
    { href: "/blog", text: "Blog" },
    { href: "/contacto", text: "Contacto" }
  ];
  return renderTemplate(_a || (_a = __template(['<html lang="es" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"><meta name="generator"', "><title>CM Consulting SAS</title>", '</head> <body class="bg-gray-50"> <header class="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 transition-all duration-300" id="header"> <nav class="container mx-auto px-4 py-4"> <div class="flex justify-between items-center"> ', ' <div class="hidden md:flex space-x-8"> ', ' </div> <button class="md:hidden" id="menuButton" aria-label="Menu"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> <!-- Mobile Menu --> <div class="md:hidden hidden" id="mobileMenu"> <div class="pt-4 pb-3 space-y-3"> ', ' </div> </div> </nav> </header> <main class="pt-16"> ', ' </main> <footer class="bg-corporate-blue text-white mt-20"> <div class="container mx-auto px-4 py-12"> <div class="grid grid-cols-1 md:grid-cols-4 gap-8"> <div class="transform hover:scale-105 transition-transform duration-300"> ', ' <p class="text-gray-300">Transformando el futuro digital de las empresas</p> </div> <div class="transform hover:scale-105 transition-transform duration-300"> <h3 class="text-xl font-bold mb-4">Enlaces</h3> <ul class="space-y-2"> ', ' </ul> </div> <div class="transform hover:scale-105 transition-transform duration-300"> <h3 class="text-xl font-bold mb-4">Servicios</h3> <ul class="space-y-2"> <li><a href="/servicios#cloud" class="footer-link">Soluciones Cloud</a></li> <li><a href="/servicios#desarrollo" class="footer-link">Desarrollo de Software</a></li> <li><a href="/servicios#analitica" class="footer-link">Anal\xEDtica de Datos</a></li> </ul> </div> <div class="transform hover:scale-105 transition-transform duration-300"> <h3 class="text-xl font-bold mb-4">Contacto</h3> <a href="mailto:contactos@cmconsulting.com.co" class="footer-link">contactos@cmconsulting.com.co</a> <div class="flex space-x-4 mt-4"> <a href="https://co.linkedin.com/company/cmconsultingsas" class="text-white hover:text-corporate-yellow transition-colors"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path> </svg> </a> </div> </div> </div> <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300"> <p>&copy; ', ' CM Consulting SAS. Todos los derechos reservados.</p> </div> </div> </footer> <!-- Start of supportcm Zendesk Widget script --> <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=7101eb3a-945d-48cf-9aff-babc473d5d59"> <\/script> <!-- End of supportcm Zendesk Widget script -->  </body></html>'])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "Logo", $$Logo, {}), navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="nav-link">${link.text}</a>`), navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="block py-2 text-gray-600 hover:text-corporate-yellow transition-colors duration-300"> ${link.text} </a>`), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Logo", $$Logo, { "class": "mb-4" }), navLinks.map((link) => renderTemplate`<li><a${addAttribute(link.href, "href")} class="footer-link">${link.text}</a></li>`), (/* @__PURE__ */ new Date()).getFullYear());
}, "/home/project/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
