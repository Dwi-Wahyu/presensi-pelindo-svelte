import { c as create_ssr_component, b as compute_rest_props, d as spread, f as escape_object, k as add_attribute, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
const ChevronLeft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      classes: "bi bi-chevron-left"
    }
  )}>${slots.default ? slots.default({}) : ``}<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path></svg>`;
});
const ChevronRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      classes: "bi bi-chevron-right"
    }
  )}>${slots.default ? slots.default({}) : ``}<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>`;
});
const fotoKantorTPM = "/_app/immutable/assets/kantor-tpm.1ef03ca4.jpg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mapElement;
  let jarakTPM;
  return `<div${add_attribute("this", mapElement, 0)}></div> <div class="w-screen h-screen relative flex flex-col"><div class="from-biru to-blue-400 rounded-b-3xl bg-gradient-to-b h-64 px-9 py-6"><div class="text-white" data-svelte-h="svelte-1utcpr"><h1 class="text-2xl font-semibold mb-1">Lokasi Absen</h1> <h1>Pilih lokasi absen terdekat dengan lokasi anda</h1></div> ${`<div class="mt-9" data-svelte-h="svelte-1clwhil"><img${add_attribute("src", fotoKantorTPM, 0)} alt="" class="rounded-xl shadow-lg"></div>`} <div class="flex w-full items-center justify-between mt-4"><button ${"disabled"}>${`${validate_component(ChevronLeft, "ChevronLeft").$$render(
    $$result,
    {
      width: 26,
      height: 26,
      class: "text-gray-800"
    },
    {},
    {}
  )}`}</button> ${`<h1 class="text-xl font-semibold" data-svelte-h="svelte-pyguuw">Kantor TPM</h1>`} <button ${""}>${`${validate_component(ChevronRight, "ChevronRight").$$render(
    $$result,
    {
      width: 26,
      height: 26,
      class: "text-gray-800"
    },
    {},
    {}
  )}`}</button></div> <div class="mt-2">${`<h1 data-svelte-h="svelte-10uh1og">Kantor Terminal Petikemas</h1> <h1 class="mb-3">Jarak : ${escape(jarakTPM)} Meter</h1> <button class="w-full text-white font-semibold py-3 bg-gradient-to-r from-biru to-blue-500 rounded-xl" data-svelte-h="svelte-kvda7d">Absen</button>`}</div></div></div>`;
});
export {
  Page as default
};
