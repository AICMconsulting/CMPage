/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BhKzNdWT.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BSTTSMrw.mjs';
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto - CM Consulting" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-50"> <div class="container mx-auto px-4 py-20"> <h1 class="text-4xl font-bold text-center text-corporate-blue mb-12">Contáctanos</h1> <div class="max-w-2xl mx-auto"> <div class="bg-white rounded-lg shadow-lg p-8"> <h2 class="text-2xl font-bold text-corporate-blue mb-6">Envíanos un mensaje</h2> <form class="space-y-6" id="contactForm"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="user_name" class="block text-sm font-medium text-gray-700">Nombre</label> <input type="text" id="user_name" name="user_name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-corporate-blue focus:ring-corporate-blue"> </div> <div> <label for="user_email" class="block text-sm font-medium text-gray-700">Email</label> <input type="email" id="user_email" name="user_email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-corporate-blue focus:ring-corporate-blue"> </div> </div> <div> <label for="company" class="block text-sm font-medium text-gray-700">Empresa</label> <input type="text" id="company" name="company" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-corporate-blue focus:ring-corporate-blue"> </div> <div> <label for="service" class="block text-sm font-medium text-gray-700">Servicio de interés</label> <select id="service" name="service" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-corporate-blue focus:ring-corporate-blue"> <option value="cloud">Soluciones Cloud</option> <option value="development">Desarrollo de Software</option> <option value="analytics">Analítica de Datos</option> <option value="other">Otro</option> </select> </div> <div> <label for="message" class="block text-sm font-medium text-gray-700">Mensaje</label> <textarea id="message" name="message" rows="4" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-corporate-blue focus:ring-corporate-blue"></textarea> </div> <input type="hidden" name="to_email" value="contactos@cmconsulting.com.co"> <button type="submit" class="w-full bg-corporate-blue text-white py-3 px-6 rounded-lg hover:bg-corporate-blue/90 transition-colors">
Enviar mensaje
</button> </form> </div> <div class="mt-12 bg-white rounded-lg shadow-lg p-8"> <h2 class="text-2xl font-bold text-corporate-blue mb-6">Información de Contacto</h2> <div class="space-y-4"> <p class="flex items-center text-gray-600"> <svg class="w-5 h-5 mr-3 text-corporate-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg>
contactos@cmconsulting.com.co
</p> <div class="pt-4 border-t border-gray-200"> <h3 class="text-lg font-semibold text-corporate-blue mb-2">Horario de atención</h3> <p class="text-gray-600">Lunes a Viernes: 8:00 AM - 6:00 PM</p> <p class="text-gray-600">Sábados: 9:00 AM - 1:00 PM</p> <p class="text-gray-600">Domingos y festivos: Cerrado</p> </div> </div> </div> </div> </div> </div> ` })}`;
}, "C:/Users/FelixRafaelSanchezFa/Documents/GitHub/CMPage/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/FelixRafaelSanchezFa/Documents/GitHub/CMPage/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
