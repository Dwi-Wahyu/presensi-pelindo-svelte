import { c as create_ssr_component, b as compute_rest_props, d as spread, f as escape_object, v as validate_component, k as add_attribute } from "../../../../chunks/ssr.js";
const EnvelopeArrowUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "16" },
      { height: "16" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$restProps)
    ],
    {
      classes: "bi bi-envelope-arrow-up"
    }
  )}>${slots.default ? slots.default({}) : ``}<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99V4Zm1 7.105 4.708-2.897L1 5.383v5.722ZM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1Z"></path><path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016Z"></path></svg>`;
});
const emptyPict = "/_app/immutable/assets/empty.0ad1e0db.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-biru z-50 absolute bottom-4"></div> <div class="absolute w-full h-56 bg-gradient-to-b from-biru to-blue-200 z-0"></div> <div class="absolute w-full h-full flex flex-col"><div class="p-5 h-20 flex flex-col justify-center bg-transparent" data-svelte-h="svelte-1sb744j"><h1 class="text-white font-semibold text-2xl">Log Pengajuan Izin</h1></div> <div class="w-full p-8 rounded-t-3xl flex-grow bg-white"><div class="w-full flex gap-3"><div class="absolute bottom-24 right-8 bg-biru rounded-full p-4 text-white"><a href="/beranda/izin/buat">${validate_component(EnvelopeArrowUp, "EnvelopeArrowUp").$$render($$result, { width: 35, height: 35 }, {}, {})}</a></div> <div class="w-full flex justify-center items-center mt-20 flex-col gap-3" data-svelte-h="svelte-1h062ih"><h1 class="mb-3 text-lg">Belum ada Pengajuan</h1> <img${add_attribute("src", emptyPict, 0)} alt="" width="220"></div></div></div></div>`;
});
export {
  Page as default
};
