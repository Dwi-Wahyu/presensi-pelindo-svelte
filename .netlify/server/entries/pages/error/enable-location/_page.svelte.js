import { c as create_ssr_component } from "../../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap');#wrapper.svelte-4cq4y{font-family:'Montserrat', sans-serif}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="absolute w-full h-full items-center flex justify-center svelte-4cq4y" id="wrapper" data-svelte-h="svelte-1s18j8m"><div class="flex flex-col items-center gap-4"><h1 class="title font-bold text-2xl">ENABLE YOUR LOCATION</h1> <img src="/error/warning-location.png" alt="" class="w-36"> <h3 class="font-semibold text-sm">Attendance cannot be accessed if locations is disabled</h3> <button class="px-5 py-2 bg-red-500 font-semibold text-sm rounded-2xl text-white">TURN ON LOCATION</button> <a href="/" class="text-red-500 font-semibold">BACK</a></div> </div>`;
});
export {
  Page as default
};
