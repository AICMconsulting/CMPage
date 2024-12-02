/* empty css                                    */
import { c as createComponent, r as renderTemplate, b as createAstro } from '../../chunks/astro/server_BhKzNdWT.mjs';
import 'kleur/colors';
import 'clsx';
import { b as getComments } from '../../chunks/blog_DTxU6iFE.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    params: { slug: post.Slug },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  await getComments(post.Id);
  return renderTemplate`<!-- Rest of the template remains the same, but use the database fields -->`;
}, "C:/Users/FelixRafaelSanchezFa/Documents/GitHub/CMPage/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/Users/FelixRafaelSanchezFa/Documents/GitHub/CMPage/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
