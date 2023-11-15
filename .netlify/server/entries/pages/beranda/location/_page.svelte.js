import { c as create_ssr_component, k as add_attribute } from "../../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import 'leaflet/dist/leaflet.css';main.svelte-1en64dq div.svelte-1en64dq{height:100vh;z-index:99}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mapElement;
  $$result.css.add(css);
  return `<main class="svelte-1en64dq"><div class="svelte-1en64dq"${add_attribute("this", mapElement, 0)}></div> </main>`;
});
export {
  Page as default
};
