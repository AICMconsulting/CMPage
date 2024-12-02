/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_BhKzNdWT.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DCoWSS9Q.mjs';
import { i as isValidCredentials, g as generateToken } from '../../chunks/auth_CDaG1ZYe.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  let error = "";
  let success = false;
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const username = formData.get("username")?.toString() || "";
      const password = formData.get("password")?.toString() || "";
      if (!username || !password) {
        error = "Usuario y contrase\xF1a son requeridos";
      } else {
        const isValid = await isValidCredentials(username, password);
        if (isValid) {
          success = true;
          const token = generateToken(username);
          Astro2.cookies.set("adminToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24
            // 24 hours
          });
          return Astro2.redirect("/admin");
        } else {
          error = "Credenciales inv\xE1lidas";
        }
      }
    } catch (e) {
      console.error("Error en login:", e);
      error = "Error al procesar la solicitud";
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin Login" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"> <div class="max-w-md w-full bg-white rounded-lg shadow-lg p-8"> <div class="text-center mb-8"> <h1 class="text-2xl font-bold text-corporate-blue">CM Consulting</h1> <p class="text-gray-600">Panel Administrativo</p> </div> ${error && renderTemplate`<div class="mb-4 p-4 bg-red-100 text-red-700 rounded-lg"> ${error} </div>`} ${success && renderTemplate`<div class="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
Login exitoso. Redirigiendo...
</div>`} <form method="POST" class="space-y-6"> <div> <label for="username" class="block text-sm font-medium text-gray-700">
Usuario
</label> <input type="text" id="username" name="username" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-corporate-blue focus:ring-corporate-blue"> </div> <div> <label for="password" class="block text-sm font-medium text-gray-700">
Contraseña
</label> <input type="password" id="password" name="password" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-corporate-blue focus:ring-corporate-blue"> </div> <button type="submit" class="w-full bg-corporate-blue text-white py-2 px-4 rounded-md hover:bg-corporate-blue/90 transition-colors">
Iniciar sesión
</button> </form> <div class="mt-4 text-sm text-gray-600 text-center"> <p>Usuario: admin</p> <p>Contraseña: admin123</p> </div> </div> </div> ` })} `;
}, "/home/project/src/pages/admin/login.astro", void 0);

const $$file = "/home/project/src/pages/admin/login.astro";
const $$url = "/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
