/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, d as renderComponent } from '../chunks/astro/server_BhKzNdWT.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BSTTSMrw.mjs';
import 'clsx';
import { $ as $$ParallaxSection } from '../chunks/ParallaxSection_CPBDpxGu.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$AboutHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AboutHero;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative bg-corporate-blue text-white py-20"> <div class="absolute inset-0"> <div class="absolute inset-0 bg-gradient-to-r from-corporate-blue/95 to-corporate-blue/90"></div> <div class="absolute inset-0 bg-grid-pattern opacity-10"></div> </div> <div class="container mx-auto px-4 relative z-10"> <div class="max-w-3xl mx-auto text-center"> <h1 class="text-5xl font-bold mb-6">${title}</h1> <p class="text-xl text-gray-200">${subtitle}</p> </div> </div> </div>`;
}, "C:/Users/FelixRafaelSanchezFa/Documents/GitHub/CMPage/src/components/AboutHero.astro", void 0);

const $$Astro = createAstro();
const $$MissionVision = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MissionVision;
  const { mission, vision } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <div class="grid md:grid-cols-2 gap-8"> <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-all duration-300"> <h2 class="text-2xl font-bold text-corporate-blue mb-4">Nuestra Misión</h2> <p class="text-gray-600 leading-relaxed">${mission}</p> </div> <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-all duration-300"> <h2 class="text-2xl font-bold text-corporate-blue mb-4">Nuestra Visión</h2> <p class="text-gray-600 leading-relaxed">${vision}</p> </div> </div> </div> </section>`;
}, "C:/Users/FelixRafaelSanchezFa/Documents/GitHub/CMPage/src/components/MissionVision.astro", void 0);

const $$ValueProposition = createComponent(($$result, $$props, $$slots) => {
  const values = [
    {
      title: "Soluciones Personalizadas",
      description: "Cada cliente es \xFAnico, por lo que nuestras soluciones se adaptan espec\xEDficamente a las necesidades y desaf\xEDos de cada empresa."
    },
    {
      title: "Transformaci\xF3n Digital Integral",
      description: "Abarcamos desde la consultor\xEDa y capacitaci\xF3n hasta la implementaci\xF3n y soporte de soluciones tecnol\xF3gicas."
    },
    {
      title: "Enfoque en Resultados",
      description: "Trabajamos con metodolog\xEDas \xE1giles que garantizan resultados tangibles y medibles para nuestros clientes."
    },
    {
      title: "Respaldo de Microsoft",
      description: "Como partner de Microsoft, nuestras soluciones cuentan con el respaldo y soporte de una de las empresas l\xEDderes en tecnolog\xEDa a nivel mundial."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-corporate-blue text-center mb-12">Nuestro Valor Diferencial</h2> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> ${values.map((value) => renderTemplate`<div class="bg-gray-50 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-all duration-300"> <h3 class="text-xl font-semibold text-corporate-blue mb-4">${value.title}</h3> <p class="text-gray-600">${value.description}</p> </div>`)} </div> </div> </section>`;
}, "C:/Users/FelixRafaelSanchezFa/Documents/GitHub/CMPage/src/components/ValueProposition.astro", void 0);

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  const specializedServices = [
    "Configuraci\xF3n y optimizaci\xF3n de herramientas SaaS como Jira, Confluence, ZohoDesk, DocuSign",
    "Staffing y manpower especializado",
    "Interventor\xEDa t\xE9cnica en proyectos",
    "Soporte t\xE9cnico especializado proactivo y reactivo",
    "Gesti\xF3n de infraestructura cloud en Microsoft Azure"
  ];
  const aboutContent = [
    "CM Consulting SAS es una empresa de tecnolog\xEDa dedicada a ofrecer soluciones innovadoras que impulsan la transformaci\xF3n digital de nuestros clientes. Somos parte del programa Microsoft AI Cloud Partner Program.",
    "Como partner de Microsoft en tres \xE1reas: Data & IA, Infrastructure, y Digital and App Innovation, hemos sido reconocidos como el mejor partner de Microsoft Azure por IngramMicro.",
    "Desde 2012, nuestro equipo de profesionales certificados est\xE1 comprometido con el \xE9xito de nuestros clientes, brindando servicios en la nube, desarrollo de software y consultor\xEDa tecnol\xF3gica."
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nosotros - CM Consulting" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AboutHero", $$AboutHero, { "title": "Qui\xE9nes Somos", "subtitle": "Impulsando la transformaci\xF3n digital empresarial desde 2012" })} ${renderComponent($$result2, "ParallaxSection", $$ParallaxSection, { "title": "Nuestra Historia", "content": aboutContent })} ${renderComponent($$result2, "MissionVision", $$MissionVision, { "mission": "En CM Consulting SAS, nos dedicamos a impulsar la transformaci\xF3n digital y fomentar la innovaci\xF3n tecnol\xF3gica de nuestros clientes. Nuestra misi\xF3n es ser el aliado estrat\xE9gico que facilita la evoluci\xF3n tecnol\xF3gica de las empresas, permiti\xE9ndoles alcanzar sus objetivos mediante soluciones \xFAnicas, eficientes y personalizadas.", "vision": "Nos enfocamos en acompa\xF1ar a nuestros clientes hacia un futuro digital sostenible, optimizando sus procesos y mejorando su competitividad. Nuestro objetivo es posicionarnos como l\xEDderes en la implementaci\xF3n de soluciones de transformaci\xF3n digital del sector corporativo." })} ${renderComponent($$result2, "ValueProposition", $$ValueProposition, {})} ${maybeRenderHead()}<section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-corporate-blue text-center mb-12">Servicios Especializados</h2> <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8"> <ul class="space-y-4"> ${specializedServices.map((service) => renderTemplate`<li class="flex items-start"> <svg class="w-6 h-6 text-corporate-yellow mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700">${service}</span> </li>`)} </ul> </div> </div> </section> ` })}`;
}, "C:/Users/FelixRafaelSanchezFa/Documents/GitHub/CMPage/src/pages/nosotros.astro", void 0);

const $$file = "C:/Users/FelixRafaelSanchezFa/Documents/GitHub/CMPage/src/pages/nosotros.astro";
const $$url = "/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Nosotros,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
