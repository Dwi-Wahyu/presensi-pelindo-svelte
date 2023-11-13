import { c as create_ssr_component, b as compute_rest_props, d as spread, f as escape_object, h as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import "moment";
import "moment-timezone";
const PeopleFill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      classes: "bi bi-people-fill"
    }
  )}>${slots.default ? slots.default({}) : ``}<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path></svg>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap');#card.svelte-1g3ufaw{width:22rem}.judul.svelte-1g3ufaw{font-weight:800;font-family:'Montserrat', sans-serif}#submitbtn.svelte-1g3ufaw{font-weight:600;font-family:'Montserrat', sans-serif}#izinbtn.svelte-1g3ufaw{font-weight:500;font-family:'Montserrat', sans-serif}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let code;
  $$result.css.add(css);
  return `<div class="absolute w-full h-full p-5 flex justify-center items-center"><div class="flex flex-col svelte-1g3ufaw" id="card"><img src="logo-pelindo.png" class="mb-6" alt="" width="270rem"> <h1 class="text-[1.75rem] text-biru judul svelte-1g3ufaw" data-svelte-h="svelte-g53ric">ABSENSI PKL/MAGANG</h1> <div class="mt-6 flex flex-col"><label for="" data-svelte-h="svelte-spcjph">Insert your personal code</label> <form><div class="relative"><input type="number" name="code" class="border w-full border-biru px-2 ps-9 py-2 rounded mt-2 focus:outline-none" placeholder="PERSONAL CODE" required${add_attribute("value", code, 0)}> ${validate_component(PeopleFill, "PeopleFill").$$render($$result, { class: "absolute top-5 left-3 text-biru" }, {}, {})}</div> <div class="flex justify-center items-center flex-col gap-4"><button type="submit" id="submitbtn" class="mt-7 w-full flex justify-center gap-2 items-center bg-biru py-2 border border-biru rounded-2xl text-white shadow-md shadow-biru font-semibold transition-transform hover:scale-95 ease-in-out svelte-1g3ufaw">${`SUBMIT`}</button> <a href="/izin" id="izinbtn" class="text-biru svelte-1g3ufaw" data-svelte-h="svelte-1vr0nwc">Ajukan izin</a></div></form></div></div> </div>`;
});
export {
  Page as default
};
