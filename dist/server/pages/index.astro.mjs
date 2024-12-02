/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, a as addAttribute, b as createAstro, d as renderComponent } from '../chunks/astro/server_BhKzNdWT.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BSTTSMrw.mjs';
import 'clsx';
import { $ as $$ParallaxSection } from '../chunks/ParallaxSection_CPBDpxGu.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { id, title, description, icon, features } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"> <div class="p-8"> <div class="text-corporate-blue mb-6">${unescapeHTML(icon)}</div> <h3 class="text-2xl font-bold text-corporate-blue mb-4">${title}</h3> <p class="text-gray-600 mb-6">${description}</p> <ul class="space-y-3"> ${features.slice(0, 4).map((feature) => renderTemplate`<li class="flex items-center text-gray-700"> <svg class="w-5 h-5 text-corporate-yellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> ${feature} </li>`)} </ul> </div> <div class="bg-gray-50 p-6"> <a${addAttribute(`/servicios#${id}`, "href")} class="block text-center bg-corporate-blue text-white py-3 px-6 rounded-lg hover:bg-corporate-blue/90 transition-colors">
Más información
</a> </div> </div>`;
}, "C:/Users/FelixRafaelSanchezFa/Documents/GitHub/CMPage/src/components/services/ServiceCard.astro", void 0);

const $$Astro = createAstro();
const $$StatsCounter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StatsCounter;
  const { value, label, prefix = "", suffix = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="stat-card" data-gsap="fade-up"> <div class="relative bg-white/10 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-500"> <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> <div class="p-8 relative z-10"> <div class="flex flex-col items-center justify-center"> <div class="relative"> <span class="text-corporate-yellow text-6xl font-bold counter"${addAttribute(value, "data-value")}${addAttribute(prefix, "data-prefix")}${addAttribute(suffix, "data-suffix")}>0</span> <div class="absolute -inset-4 bg-corporate-yellow/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> </div> <p class="text-white text-xl mt-6 text-center transform group-hover:scale-105 transition-transform duration-300">${label}</p> </div> </div> <div class="absolute inset-0 bg-gradient-to-t from-corporate-blue/50 to-transparent"></div> <div class="absolute -bottom-2 -right-2 w-32 h-32 bg-corporate-yellow/10 rounded-full blur-2xl"></div> </div> </div> `;
}, "C:/Users/FelixRafaelSanchezFa/Documents/GitHub/CMPage/src/components/StatsCounter.astro", void 0);

const $$ContactSection = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contacto" class="relative py-24 bg-gray-50"> <div class="container mx-auto px-4"> <h2 class="text-4xl font-bold text-corporate-blue text-center mb-16">Contáctanos</h2> <div class="max-w-2xl mx-auto"> <!-- Contact Form --> <div class="bg-white rounded-lg shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-500"> <h3 class="text-2xl font-bold text-corporate-blue mb-6">Envíanos un mensaje</h3> <form class="space-y-6" id="contactForm"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label> <input type="text" id="name" name="name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-corporate-blue focus:ring-corporate-blue"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700">Email</label> <input type="email" id="email" name="email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-corporate-blue focus:ring-corporate-blue"> </div> </div> <div> <label for="company" class="block text-sm font-medium text-gray-700">Empresa</label> <input type="text" id="company" name="company" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-corporate-blue focus:ring-corporate-blue"> </div> <div> <label for="service" class="block text-sm font-medium text-gray-700">Servicio de interés</label> <select id="service" name="service" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-corporate-blue focus:ring-corporate-blue"> <option value="cloud">Soluciones Cloud</option> <option value="development">Desarrollo de Software</option> <option value="analytics">Analítica de Datos</option> <option value="consulting">Consultoría y Capacitación</option> <option value="specialized">Servicios Especializados</option> <option value="support">Soporte Técnico</option> <option value="other">Otro</option> </select> </div> <div> <label for="message" class="block text-sm font-medium text-gray-700">Mensaje</label> <textarea id="message" name="message" rows="4" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-corporate-blue focus:ring-corporate-blue"></textarea> </div> <button type="submit" class="w-full bg-corporate-blue text-white py-3 px-6 rounded-lg hover:bg-corporate-blue/90 transition-colors">
Enviar mensaje
</button> </form> </div> <!-- Contact Information --> <div class="mt-12 bg-white rounded-lg shadow-lg p-8"> <h2 class="text-2xl font-bold text-corporate-blue mb-6">Información de Contacto</h2> <div class="space-y-4"> <p class="flex items-center text-gray-600"> <svg class="w-5 h-5 mr-3 text-corporate-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg>
contactos@cmconsulting.com.co
</p> <div class="pt-4 border-t border-gray-200"> <h3 class="text-lg font-semibold text-corporate-blue mb-2">Horario de atención</h3> <p class="text-gray-600">Lunes a Viernes: 8:00 AM - 6:00 PM</p> <p class="text-gray-600">Sábados: 9:00 AM - 1:00 PM</p> <p class="text-gray-600">Domingos y festivos: Cerrado</p> </div> </div> </div> </div> </div> </section> `;
}, "C:/Users/FelixRafaelSanchezFa/Documents/GitHub/CMPage/src/components/ContactSection.astro", void 0);

const $$MicrosoftPartnerSection = createComponent(($$result, $$props, $$slots) => {
  const specializations = [
    {
      title: "Data & AI",
      description: "Tenemos la experiencia y preparaci\xF3n para ayudar a nuestros clientes a administrar y controlar sus datos en varios sistemas para crear an\xE1lisis y soluciones de IA.",
      image: "/images/Data-AI-Azure-300x184.png"
    },
    {
      title: "Digital & App Innovation",
      description: "Sabemos como modernizar las aplicaciones existentes de nuestros clientes y creamos aplicaciones nativas de la nube aprovechando las caracter\xEDsticas de los servicios Azure.",
      image: "/images/Digital-App-Innovation-Azure-300x184.png"
    },
    {
      title: "Infrastructure",
      description: "\xBFA\xFAn con aplicaciones ejecutando en infraestructura f\xEDsica? Migramos las actuales cargas de trabajo de nuestros clientes a Azure para que empiecen a usar la seguridad y las opciones de flexibilidad de la nube.",
      image: "/images/Infrastructure-Azure-300x184.png"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="text-center mb-16"> <h2 class="text-4xl font-bold text-corporate-blue mb-6">Microsoft AI Cloud Partner Program</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto">
Como partner certificado de Microsoft, nos especializamos en tres áreas clave para impulsar la transformación digital de nuestros clientes
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${specializations.map((spec) => renderTemplate`<div class="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"> <div class="mb-6"> <img${addAttribute(spec.image, "src")}${addAttribute(spec.title, "alt")} class="w-full h-auto rounded-lg mb-4"> <h3 class="text-2xl font-bold text-corporate-blue mb-4">${spec.title}</h3> </div> <p class="text-gray-600 leading-relaxed">${spec.description}</p> </div>`)} </div>`;
}, "C:/Users/FelixRafaelSanchezFa/Documents/GitHub/CMPage/src/components/MicrosoftPartnerSection.astro", void 0);

const services = [
  {
    id: "cloud",
    title: "Soluciones en la Nube",
    description: "Implementación de servicios Azure y Microsoft 365, migración segura y eficiente a la nube.",
    features: [
      "Migración a Azure",
      "Microsoft 365",
      "Licenciamiento Microsoft",
      "Optimización de costos",
      "Seguridad cloud",
      "Arquitectura serverless"
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
    </svg>`
  },
  {
    id: "development",
    title: "Desarrollo de Software",
    description: "Desarrollo de aplicaciones empresariales y móviles con metodologías ágiles e híbridas.",
    features: [
      "Aplicaciones web",
      "Apps móviles",
      "Integración de APIs",
      "DevOps",
      "Metodologías ágiles",
      "Desarrollo cloud-native"
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
    </svg>`
  },
  {
    id: "analytics",
    title: "Analítica de Datos",
    description: "Servicios especializados en analítica avanzada utilizando Microsoft Fabric y Azure.",
    features: [
      "Business Intelligence",
      "Machine Learning",
      "Microsoft Fabric",
      "Visualización de datos",
      "Predicción analítica",
      "Big Data"
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
    </svg>`
  },
  {
    id: "consulting",
    title: "Consultoría y Capacitación",
    description: "Capacitación oficial en servicios Microsoft y eventos exclusivos sobre IA y tecnologías emergentes.",
    features: [
      "Capacitación oficial Microsoft",
      "Eventos especializados",
      "Workshops de IA",
      "Consultoría tecnológica",
      "Transformación digital",
      "Mejores prácticas"
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
    </svg>`
  },
  {
    id: "specialized",
    title: "Servicios Especializados",
    description: "Configuración de herramientas SaaS, staffing especializado e interventoría técnica en proyectos.",
    features: [
      "Configuración de herramientas SaaS",
      "Staffing especializado",
      "Interventoría técnica",
      "Optimización de procesos",
      "Gestión de proyectos",
      "Soporte especializado"
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>`
  },
  {
    id: "support",
    title: "Soporte Técnico",
    description: "Soporte especializado proactivo y reactivo, incluyendo infraestructura cloud en Azure.",
    features: [
      "Soporte proactivo",
      "Soporte reactivo",
      "Monitoreo 24/7",
      "Resolución de incidencias",
      "Soporte cloud",
      "Mantenimiento preventivo"
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
    </svg>`
  }
];

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const aboutContent = [
    "CM Consulting SAS es una empresa de tecnolog\xEDa dedicada a ofrecer soluciones innovadoras que impulsan la transformaci\xF3n digital de nuestros clientes. Somos parte del programa Microsoft AI Cloud Partner Program.",
    "Como partner de Microsoft en tres \xE1reas: Data & IA, Infrastructure, y Digital and App Innovation, hemos sido reconocidos como el mejor partner de Microsoft Azure por IngramMicro.",
    "Desde 2012, nuestro equipo de profesionales certificados est\xE1 comprometido con el \xE9xito de nuestros clientes, brindando servicios en la nube, desarrollo de software y consultor\xEDa tecnol\xF3gica."
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CM Consulting - Soluciones Tecnol\xF3gicas Innovadoras", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="relative min-h-screen bg-corporate-blue text-white flex items-center justify-center overflow-hidden" data-astro-cid-j7pv25f6> <div class="absolute inset-0" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-gradient-to-b from-corporate-blue/90 to-corporate-blue" data-astro-cid-j7pv25f6></div> <div class="absolute inset-0 bg-grid-pattern opacity-10" data-astro-cid-j7pv25f6></div> </div> <div class="container mx-auto px-4 relative z-10" data-astro-cid-j7pv25f6> <div class="max-w-3xl mx-auto text-center" data-astro-cid-j7pv25f6> <h1 class="text-7xl font-bold mb-6 leading-tight animate-title" data-astro-cid-j7pv25f6>
Transformación Digital <span class="text-corporate-yellow" data-astro-cid-j7pv25f6>Empresarial</span> </h1> <p class="text-xl mb-12 animate-fade-in max-w-2xl mx-auto" data-astro-cid-j7pv25f6>
Partner de Microsoft especializado en soluciones cloud, desarrollo de software y analítica de datos
</p> <div class="flex gap-4 justify-center" data-astro-cid-j7pv25f6> <a href="#contacto" class="group bg-corporate-yellow text-corporate-blue px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 inline-flex items-center space-x-2 transform hover:scale-105" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Comienza tu Transformación</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-j7pv25f6></path> </svg> </a> <a href="#servicios" class="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center space-x-2" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Conoce más</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-astro-cid-j7pv25f6></path> </svg> </a> </div> </div> </div> <!-- Wave Divider --> <div class="absolute bottom-0 left-0 right-0" data-astro-cid-j7pv25f6> <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto" data-astro-cid-j7pv25f6> <defs data-astro-cid-j7pv25f6> <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" data-astro-cid-j7pv25f6></path> </defs> <g class="parallax" data-astro-cid-j7pv25f6> <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" data-astro-cid-j7pv25f6></use> <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" data-astro-cid-j7pv25f6></use> <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" data-astro-cid-j7pv25f6></use> <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" data-astro-cid-j7pv25f6></use> </g> </svg> </div> </div>  <section id="servicios" class="relative py-24 bg-white overflow-hidden" data-astro-cid-j7pv25f6> <div class="container mx-auto px-4" data-astro-cid-j7pv25f6> <h2 class="text-4xl font-bold text-corporate-blue text-center mb-16 reveal-text" data-astro-cid-j7pv25f6>Áreas de Especialización</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-j7pv25f6> ${services.map((service) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { ...service, "data-astro-cid-j7pv25f6": true })}`)} </div> </div> </section>  <section class="py-24 bg-corporate-blue relative overflow-hidden" data-astro-cid-j7pv25f6> <div class="container mx-auto px-4 relative z-10" data-astro-cid-j7pv25f6> <h2 class="text-4xl font-bold text-white text-center mb-16" data-astro-cid-j7pv25f6>¿Por qué CM Consulting?</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "StatsCounter", $$StatsCounter, { "value": 2012, "label": "A\xF1o de fundaci\xF3n", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "StatsCounter", $$StatsCounter, { "value": 3, "label": "\xC1reas de especializaci\xF3n Microsoft", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "StatsCounter", $$StatsCounter, { "value": 1, "prefix": "#", "label": "Partner de Microsoft Azure", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "StatsCounter", $$StatsCounter, { "value": 100, "suffix": "+", "label": "Profesionales certificados", "data-astro-cid-j7pv25f6": true })} </div> </div> </section>  ${renderComponent($$result2, "ParallaxSection", $$ParallaxSection, { "title": "Sobre Nosotros", "content": aboutContent, "data-astro-cid-j7pv25f6": true })}  ${renderComponent($$result2, "ContactSection", $$ContactSection, { "data-astro-cid-j7pv25f6": true })}  <section class="py-24 bg-gray-50 relative overflow-hidden" data-astro-cid-j7pv25f6> <div class="container mx-auto px-4" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "MicrosoftPartnerSection", $$MicrosoftPartnerSection, { "data-astro-cid-j7pv25f6": true })} </div> <!-- Blob Shapes --> <div class="absolute top-0 -left-48 w-96 h-96 bg-corporate-yellow/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" data-astro-cid-j7pv25f6></div> <div class="absolute top-0 -right-48 w-96 h-96 bg-corporate-blue/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" data-astro-cid-j7pv25f6></div> <div class="absolute -bottom-48 left-1/2 w-96 h-96 bg-corporate-yellow/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" data-astro-cid-j7pv25f6></div> </section> ` })} <!-- Testimonials Section 
  <TestimonialsSection />
--> `;
}, "C:/Users/FelixRafaelSanchezFa/Documents/GitHub/CMPage/src/pages/index.astro", void 0);

const $$file = "C:/Users/FelixRafaelSanchezFa/Documents/GitHub/CMPage/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
