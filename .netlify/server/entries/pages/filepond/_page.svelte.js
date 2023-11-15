import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { C as Component } from "../../../chunks/Component.js";
import { registerPlugin } from "filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginValidateSize from "filepond-plugin-file-validate-size";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import 'filepond/dist/filepond.css';@import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';",
  map: null
};
let name = "filepond";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginValidateType, FilePondPluginValidateSize);
  let pond;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="p-5"><form>${validate_component(Component, "FilePond").$$render(
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
    )} <button class="bg-biru px-3 py-2 rounded shadow text-white font-semibold text-lg" data-svelte-h="svelte-1v9wi4">Submit</button></form> <h1>${escape(data.img)}</h1> </div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
