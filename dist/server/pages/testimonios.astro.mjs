/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent } from '../chunks/astro/server_BhKzNdWT.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DCoWSS9Q.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$TestimonialCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TestimonialCard;
  const { name, company, testimonial, image, rating } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300"> <div class="flex items-center mb-4"> <img${addAttribute(image, "src")}${addAttribute(name, "alt")} class="w-16 h-16 rounded-full object-cover mr-4"> <div> <h3 class="text-lg font-semibold text-corporate-blue">${name}</h3> <p class="text-gray-600">${company}</p> </div> </div> <div class="flex mb-4"> ${Array.from({ length: rating }).map(() => renderTemplate`<svg class="w-5 h-5 text-corporate-yellow" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div> <p class="text-gray-700 italic">${testimonial}</p> </div>`;
}, "/home/project/src/components/TestimonialCard.astro", void 0);

const $$Testimonios = createComponent(async ($$result, $$props, $$slots) => {
  const testimonials = [
    {
      name: "Carlos Rodr\xEDguez",
      company: "TechCorp S.A.",
      testimonial: "CM Consulting transform\xF3 completamente nuestra infraestructura cloud, mejorando significativamente nuestro rendimiento y reduciendo costos.",
      image: "/images/testimonials/user1.jpg",
      rating: 5
    },
    {
      name: "Ana Mart\xEDnez",
      company: "Innovatech",
      testimonial: "El equipo de desarrollo cre\xF3 una soluci\xF3n perfectamente adaptada a nuestras necesidades. Su profesionalismo y expertise son excepcionales.",
      image: "/images/testimonials/user2.jpg",
      rating: 5
    },
    {
      name: "Juan P\xE9rez",
      company: "DataSolutions",
      testimonial: "La implementaci\xF3n de an\xE1lisis de datos nos ha permitido tomar decisiones m\xE1s informadas. Excelente servicio y soporte continuo.",
      image: "/images/testimonials/user3.jpg",
      rating: 5
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Testimonios - CM Consulting" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-50 py-20"> <div class="container mx-auto px-4"> <h1 class="text-4xl font-bold text-center text-corporate-blue mb-12">Testimonios de Clientes</h1> <!-- Testimonials Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"> ${testimonials.map((testimonial) => renderTemplate`${renderComponent($$result2, "TestimonialCard", $$TestimonialCard, { ...testimonial })}`)} </div> <!-- Add Testimonial Form --> <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8"> <h2 class="text-2xl font-bold text-corporate-blue mb-6">Comparte tu Experiencia</h2> <form id="testimonialForm" class="space-y-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label> <input type="text" id="name" name="name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-corporate-blue focus:ring-corporate-blue"> </div> <div> <label for="company" class="block text-sm font-medium text-gray-700">Empresa</label> <input type="text" id="company" name="company" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-corporate-blue focus:ring-corporate-blue"> </div> </div> <div> <label for="testimonial" class="block text-sm font-medium text-gray-700">Tu Experiencia</label> <textarea id="testimonial" name="testimonial" rows="4" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-corporate-blue focus:ring-corporate-blue"></textarea> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Calificación</label> <div class="flex gap-2"> ${[1, 2, 3, 4, 5].map((star) => renderTemplate`<button type="button" class="star-btn text-gray-300 hover:text-corporate-yellow transition-colors"${addAttribute(star, "data-rating")}> <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg> </button>`)} <input type="hidden" name="rating" id="rating" value="5"> </div> </div> <button type="submit" class="w-full bg-corporate-blue text-white py-3 px-6 rounded-lg hover:bg-corporate-blue/90 transition-colors">
Enviar Testimonio
</button> </form> </div> </div> </div> ` })} `;
}, "/home/project/src/pages/testimonios.astro", void 0);

const $$file = "/home/project/src/pages/testimonios.astro";
const $$url = "/testimonios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Testimonios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
