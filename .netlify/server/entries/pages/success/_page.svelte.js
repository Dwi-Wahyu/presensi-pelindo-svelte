import { c as create_ssr_component } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap');#wrapper.svelte-4cq4y{font-family:'Montserrat', sans-serif}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="absolute w-full h-full items-center flex justify-center svelte-4cq4y" id="wrapper" data-svelte-h="svelte-1vd2e00"><div class="flex flex-col items-center gap-3"><img src="success.png" alt="" class="w-60"> <h1 class="title font-bold text-3xl">SUCCESS</h1> <h3 class="font-semibold text-sm">Your attendance has been submitted</h3> <a href="/" class="px-7 py-2 bg-blue-500 font-semibold text-sm rounded-2xl text-white">OK</a></div> </div>`;
});
export {
  Page as default
};
