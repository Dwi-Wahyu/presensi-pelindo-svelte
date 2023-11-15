import { c as create_ssr_component, b as compute_rest_props, d as spread, f as escape_object, a as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const afterNavigate = /* @__PURE__ */ client_method("after_navigate");
const FileEarmarkText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      classes: "bi bi-file-earmark-text"
    }
  )}>${slots.default ? slots.default({}) : ``}<path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"></path><path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"></path></svg>`;
});
const GeoAlt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      classes: "bi bi-geo-alt"
    }
  )}>${slots.default ? slots.default({}) : ``}<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg>`;
});
const HouseDoorFill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      classes: "bi bi-house-door-fill"
    }
  )}>${slots.default ? slots.default({}) : ``}<path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"></path></svg>`;
});
const PersonBadge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      classes: "bi bi-person-badge"
    }
  )}>${slots.default ? slots.default({}) : ``}<path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path><path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"></path></svg>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let ignoreLayout = false;
  const ingnoreLink = ["/beranda/izin/buat"];
  afterNavigate(() => {
    const { pathname } = $page.url;
    if (ingnoreLink.includes(pathname)) {
      ignoreLayout = true;
    } else {
      ignoreLayout = false;
    }
  });
  $$unsubscribe_page();
  return `${slots.default ? slots.default({}) : ``} ${!ignoreLayout ? `<nav class="flex justify-center"><div class="flex gap-5 justify-between" id="bubble"><button>${`${validate_component(HouseDoorFill, "HouseDoorFill").$$render($$result, { width: 24, height: 24 }, {}, {})}`}</button> <button>${`${validate_component(PersonBadge, "PersonBadge").$$render($$result, { width: 24, height: 24 }, {}, {})}`}</button> <button>${`${validate_component(GeoAlt, "GeoAlt").$$render($$result, { width: 24, height: 24 }, {}, {})}`}</button> <button>${`${validate_component(FileEarmarkText, "FileEarmarkText").$$render($$result, { width: 24, height: 24 }, {}, {})}`}</button></div></nav> <style data-svelte-h="svelte-1ngl49q">nav {
			position: fixed;
			width: 100%;
			bottom: 0;
			z-index: 100;
		}

		#bubble {
			background: rgb(4, 117, 188);
			color: white;
			width: 100%;
			padding: 1.5rem 2rem;
		}</style>` : ``}`;
});
export {
  Layout as default
};
