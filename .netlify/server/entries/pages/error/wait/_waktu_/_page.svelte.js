import { c as create_ssr_component, e as escape } from "../../../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap');#wrapper.svelte-4cq4y{font-family:'Montserrat', sans-serif}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="absolute w-full h-full items-center flex justify-center svelte-4cq4y" id="wrapper"><div class="flex flex-col items-center gap-4"><h1 class="title font-bold text-2xl" data-svelte-h="svelte-1f87y0t">Failed To Input Antendance</h1> <img src="/error/wait.png" alt="" class="w-36"> <div class="flex items-center flex-col gap-1"><h3 class="font-semibold text-sm" data-svelte-h="svelte-15ehu9l">Please Wait Several Times</h3> <h3 class="font-semibold text-sm">Try again after ${escape(data.waktu)}</h3></div> <a href="/" class="px-7 py-2 bg-red-500 font-semibold text-sm rounded-2xl text-white" data-svelte-h="svelte-18flrkb">BACK</a></div> </div>`;
});
export {
  Page as default
};
