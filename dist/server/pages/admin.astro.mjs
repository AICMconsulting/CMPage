/* empty css                                 */
import { c as createComponent, r as renderTemplate, b as createAstro } from '../chunks/astro/server_BhKzNdWT.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getConnection } from '../chunks/config_C9Mtsncs.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  if (!Astro2.cookies.get("adminToken")) {
    return Astro2.redirect("/admin/login");
  }
  let stats = { recordset: [{ totalPosts: 0, publishedPosts: 0, totalComments: 0, approvedComments: 0, totalTestimonials: 0, approvedTestimonials: 0 }] };
  let recentPosts = { recordset: [] };
  let pendingComments = { recordset: [] };
  try {
    const pool = await getConnection();
    [stats, recentPosts, pendingComments] = await Promise.all([
      pool.request().query(`
      SELECT
        (SELECT COUNT(*) FROM BlogPosts) as totalPosts,
        (SELECT COUNT(*) FROM BlogPosts WHERE IsPublished = 1) as publishedPosts,
        (SELECT COUNT(*) FROM Comments) as totalComments,
        (SELECT COUNT(*) FROM Comments WHERE IsApproved = 1) as approvedComments,
        (SELECT COUNT(*) FROM Testimonials) as totalTestimonials,
        (SELECT COUNT(*) FROM Testimonials WHERE IsApproved = 1) as approvedTestimonials
    `),
      pool.request().query(`
      SELECT TOP 5 Title, PublishedDate, IsPublished
      FROM BlogPosts
      ORDER BY PublishedDate DESC
    `),
      pool.request().query(`
      SELECT TOP 5 c.Content, c.Author, c.CreatedAt, b.Title as PostTitle
      FROM Comments c
      JOIN BlogPosts b ON c.BlogPostId = b.Id
      WHERE c.IsApproved = 0
      ORDER BY c.CreatedAt DESC
    `)
    ]);
  } catch (error) {
    console.error("Error fetching admin data:", error);
  }
  return renderTemplate`<!-- Rest of the template remains the same -->`;
}, "/home/project/src/pages/admin/index.astro", void 0);

const $$file = "/home/project/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
