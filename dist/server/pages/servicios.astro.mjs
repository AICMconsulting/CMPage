/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute, u as unescapeHTML } from '../chunks/astro/server_BhKzNdWT.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DCoWSS9Q.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Servicios = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      id: "cloud",
      title: "Soluciones Cloud",
      description: "Ofrecemos implementaci\xF3n de servicios en la nube con plataformas l\xEDderes como Azure y Microsoft 365, y licenciamiento Microsoft.",
      longDescription: "A trav\xE9s de nuestros servicios como Cloud Service Provider, acompa\xF1amos a las empresas en su transici\xF3n a la nube, garantizando una migraci\xF3n segura y eficiente que mejora la agilidad y escalabilidad de sus operaciones.",
      features: [
        "Migraci\xF3n a Azure",
        "Microsoft 365",
        "Licenciamiento Microsoft",
        "Optimizaci\xF3n de costos",
        "Seguridad cloud",
        "Arquitectura serverless"
      ],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
    </svg>`
    },
    {
      id: "development",
      title: "Desarrollo de Software",
      description: "Contamos con experiencia en el desarrollo de software a medida, aplicando metodolog\xEDas \xE1giles e h\xEDbridas.",
      longDescription: "Desarrollamos aplicaciones empresariales y m\xF3viles, aprovechando las ventajas que ofrece la nube para brindar soluciones inteligentes y de alto valor.",
      features: [
        "Aplicaciones web",
        "Apps m\xF3viles",
        "Integraci\xF3n de APIs",
        "Metodolog\xEDas \xE1giles",
        "DevOps",
        "Desarrollo cloud-native"
      ],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
    </svg>`
    },
    {
      id: "analytics",
      title: "Anal\xEDtica de Datos",
      description: "Ofrecemos servicios especializados en anal\xEDtica avanzada de datos, ayudando a las empresas a tomar decisiones basadas en datos.",
      longDescription: "Utilizamos herramientas y t\xE9cnicas de vanguardia, como Microsoft Fabric y los servicios de Azure, respaldados por el soporte de Microsoft, para transformar datos en informaci\xF3n valiosa que impulsa el crecimiento, la eficiencia operativa y la reducci\xF3n de costos.",
      features: [
        "Business Intelligence",
        "Machine Learning",
        "Microsoft Fabric",
        "Visualizaci\xF3n de datos",
        "Predicci\xF3n anal\xEDtica",
        "Big Data"
      ],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
    </svg>`
    },
    {
      id: "consulting",
      title: "Consultor\xEDa y Capacitaci\xF3n",
      description: "Brindamos capacitaci\xF3n oficial en servicios y productos Microsoft, asegurando que nuestros clientes est\xE9n siempre a la vanguardia tecnol\xF3gica.",
      longDescription: "Organizamos eventos exclusivos centrados en nuestras \xE1reas de especializaci\xF3n, incluyendo inteligencia artificial, proporcionando una oportunidad \xFAnica para explorar las capacidades actuales y futuras de estas tecnolog\xEDas.",
      features: [
        "Capacitaci\xF3n oficial Microsoft",
        "Eventos especializados",
        "Workshops de IA",
        "Consultor\xEDa tecnol\xF3gica",
        "Transformaci\xF3n digital",
        "Mejores pr\xE1cticas"
      ],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
    </svg>`
    },
    {
      id: "specialized",
      title: "Servicios Especializados",
      description: "Ayudamos en la configuraci\xF3n y optimizaci\xF3n de herramientas SaaS, mejorando la productividad y colaboraci\xF3n de los equipos.",
      longDescription: "Ofrecemos staffing y manpower especializado, as\xED como interventor\xEDa t\xE9cnica en proyectos de cualquier \xE1rea de nuestras especializaciones, asegurando que cada proyecto sea llevado a cabo con el mayor nivel de precisi\xF3n y conocimiento t\xE9cnico.",
      features: [
        "Configuraci\xF3n de herramientas SaaS",
        "Staffing especializado",
        "Interventor\xEDa t\xE9cnica",
        "Optimizaci\xF3n de procesos",
        "Gesti\xF3n de proyectos",
        "Soporte especializado"
      ],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>`
    },
    {
      id: "management",
      title: "Gesti\xF3n y Operaci\xF3n",
      description: "Nuestro enfoque en la gesti\xF3n de proyectos incluye cronogramas detallados y metas claras.",
      longDescription: "Contamos con gerentes de cuenta dedicados, quienes se integran como parte del equipo del cliente para asegurar una alineaci\xF3n total con sus objetivos y expectativas.",
      features: [
        "Gesti\xF3n de proyectos",
        "Cronogramas detallados",
        "Gerentes de cuenta dedicados",
        "Seguimiento de objetivos",
        "Reportes de progreso",
        "Optimizaci\xF3n continua"
      ],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
    </svg>`
    },
    {
      id: "support",
      title: "Soporte T\xE9cnico",
      description: "Brindamos soporte t\xE9cnico especializado para garantizar que las soluciones implementadas funcionen de manera \xF3ptima y continua.",
      longDescription: "Nuestro servicio de soporte incluye asistencia proactiva y reactiva, disponible para resolver cualquier incidencia t\xE9cnica, asegurando la estabilidad y eficiencia de los sistemas tecnol\xF3gicos de nuestros clientes. Adem\xE1s, ofrecemos soporte de infraestructura cloud, incluyendo servicios de Microsoft Azure.",
      features: [
        "Soporte proactivo",
        "Soporte reactivo",
        "Monitoreo 24/7",
        "Resoluci\xF3n de incidencias",
        "Soporte cloud",
        "Mantenimiento preventivo"
      ],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
    </svg>`
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicios - CM Consulting", "data-astro-cid-wrzvmyuk": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-50" data-astro-cid-wrzvmyuk> <!-- Hero Section --> <div class="bg-corporate-blue text-white py-20" data-astro-cid-wrzvmyuk> <div class="container mx-auto px-4" data-astro-cid-wrzvmyuk> <h1 class="text-5xl font-bold mb-6 text-center" data-astro-cid-wrzvmyuk>Nuestros Servicios</h1> <p class="text-xl text-center max-w-3xl mx-auto" data-astro-cid-wrzvmyuk>
Soluciones tecnológicas integrales para impulsar tu negocio hacia el futuro digital
</p> </div> </div> <!-- Services Section --> <div class="container mx-auto px-4 py-20" data-astro-cid-wrzvmyuk> <div class="space-y-32" data-astro-cid-wrzvmyuk> ${services.map((service) => renderTemplate`<div${addAttribute(service.id, "id")} class="scroll-mt-20" data-astro-cid-wrzvmyuk> <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500" data-astro-cid-wrzvmyuk> <div class="p-8 md:p-12" data-astro-cid-wrzvmyuk> <div class="flex items-center mb-8" data-astro-cid-wrzvmyuk> <div class="text-corporate-blue mr-6" data-astro-cid-wrzvmyuk>${unescapeHTML(service.icon)}</div> <div data-astro-cid-wrzvmyuk> <h2 class="text-3xl font-bold text-corporate-blue" data-astro-cid-wrzvmyuk>${service.title}</h2> <p class="text-gray-600 mt-2" data-astro-cid-wrzvmyuk>${service.description}</p> </div> </div> <p class="text-gray-700 mb-8 leading-relaxed" data-astro-cid-wrzvmyuk>${service.longDescription}</p> <div class="grid md:grid-cols-2 gap-6" data-astro-cid-wrzvmyuk> <div class="bg-gray-50 rounded-lg p-6" data-astro-cid-wrzvmyuk> <h3 class="text-lg font-semibold text-corporate-blue mb-4" data-astro-cid-wrzvmyuk>Características principales</h3> <ul class="space-y-3" data-astro-cid-wrzvmyuk> ${service.features.map((feature) => renderTemplate`<li class="flex items-center text-gray-700" data-astro-cid-wrzvmyuk> <svg class="w-5 h-5 text-corporate-yellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-wrzvmyuk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-wrzvmyuk></path> </svg> ${feature} </li>`)} </ul> </div> <div class="bg-gray-50 rounded-lg p-6 flex flex-col justify-center" data-astro-cid-wrzvmyuk> <h3 class="text-lg font-semibold text-corporate-blue mb-4" data-astro-cid-wrzvmyuk>¿Interesado en este servicio?</h3> <p class="text-gray-600 mb-6" data-astro-cid-wrzvmyuk>Contáctanos para obtener más información y descubrir cómo podemos ayudarte.</p> <a href="/contacto" class="inline-block bg-corporate-blue text-white text-center py-3 px-6 rounded-lg hover:bg-corporate-blue/90 transition-colors" data-astro-cid-wrzvmyuk>
Solicitar información
</a> </div> </div> </div> </div> </div>`)} </div> </div> <!-- CTA Section --> <div class="bg-corporate-yellow py-20" data-astro-cid-wrzvmyuk> <div class="container mx-auto px-4 text-center" data-astro-cid-wrzvmyuk> <h2 class="text-3xl font-bold text-corporate-blue mb-6" data-astro-cid-wrzvmyuk>¿Listo para comenzar?</h2> <p class="text-xl text-corporate-blue/80 mb-8 max-w-2xl mx-auto" data-astro-cid-wrzvmyuk>
Nuestro equipo está preparado para ayudarte a alcanzar tus objetivos tecnológicos
</p> <a href="/contacto" class="inline-block bg-corporate-blue text-white py-4 px-8 rounded-lg hover:bg-corporate-blue/90 transition-colors" data-astro-cid-wrzvmyuk>
Contactar ahora
</a> </div> </div> </div> ` })}  `;
}, "/home/project/src/pages/servicios.astro", void 0);

const $$file = "/home/project/src/pages/servicios.astro";
const $$url = "/servicios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Servicios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
