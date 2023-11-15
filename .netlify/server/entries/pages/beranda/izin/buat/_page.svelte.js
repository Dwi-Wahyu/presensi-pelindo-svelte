import { c as create_ssr_component, b as compute_rest_props, d as spread, f as escape_object, v as validate_component } from "../../../../../chunks/ssr.js";
import { C as Component } from "../../../../../chunks/Component.js";
import { registerPlugin } from "filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginValidateSize from "filepond-plugin-file-validate-size";
const ArrowLeft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      classes: "bi bi-arrow-left"
    }
  )}>${slots.default ? slots.default({}) : ``}<path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path></svg>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import 'filepond/dist/filepond.css';@import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';",
  map: null
};
let name = "filepond";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginValidateType, FilePondPluginValidateSize);
  let pond;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="py-5 px-6"><div class="mb-4 flex items-center gap-3"><a href="/beranda/izin">${validate_component(ArrowLeft, "ArrowLeft").$$render($$result, { width: 28, height: 28 }, {}, {})}</a> <h1 class="text-xl" data-svelte-h="svelte-ujfaja">Pengajuan izin</h1></div> <div class="w-full flex bg-blue-400 rounded-full">${`<button class="text-white text-lg font-semibold py-3 flex-auto bg-biru rounded-full" data-svelte-h="svelte-q8j7jh">Formulir</button>`} ${`<button class="text-white text-lg font-semibold py-3 flex-auto" data-svelte-h="svelte-190ek5n">Aturan</button>`}</div> <div class="mt-5">${`<form class="flex gap-5 flex-col"><div data-svelte-h="svelte-13kxo8r"><label class="mb-2 block" for="tanggal">Tanggal</label> <input type="date" id="tanggal" name="tanggal" class="w-full bg-gray-100 p-3 focus:outline-none rounded shadow-md"></div> <div><label class="mb-2 block" for="keterangan" data-svelte-h="svelte-w3k916">Keterangan</label> <select class="w-full bg-gray-100 p-3 focus:outline-none rounded shadow-md" name="keterangan" id="keterangan"><option value="izin" data-svelte-h="svelte-1slx1vq">Izin</option><option value="sakit" data-svelte-h="svelte-1pp2dnq">Sakit</option></select></div> <div><label class="mb-2 block" for="waktu_izin" data-svelte-h="svelte-gt4995">Waktu Izin</label> <select id="waktu_izin" name="waktu_izin" class="w-full bg-gray-100 p-3 focus:outline-none rounded shadow-md"><option value="datang" data-svelte-h="svelte-1jsz1j9">Absen Datang</option><option value="pulang" data-svelte-h="svelte-17nl2wt">Absen Pulang</option><option value="seharian" data-svelte-h="svelte-10mlbz6">Seharian</option></select></div> <div><label class="mb-2 block" for="keterangan" data-svelte-h="svelte-1qw8qhd">Bukti</label> ${validate_component(Component, "FilePond").$$render(
      $$result,
      {
        name,
        allowFileTypeValidation: true,
        allowFileSizeValidation: true,
        maxFileSize: "5MB",
        labelMaxFileSizeExceeded: "Ukuran file terlalu besar",
        labelMaxFileSize: "Ukuran maksimum adalah 5MB",
        acceptedFileTypes: ["image/png", "image/jpg", "image/jpeg"],
        labelFileTypeNotAllowed: "Ekstensi file tidak diperbolehkan",
        fileValidateTypeLabelExpectedTypes: "Mohon gunakan ekstensi yang sesuai",
        this: pond
      },
      {
        this: ($$value) => {
          pond = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="mt-2" data-svelte-h="svelte-jy0zal"><button class="bg-biru py-3 text-white rounded-xl w-full">SUBMIT</button></div></form>`}</div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
