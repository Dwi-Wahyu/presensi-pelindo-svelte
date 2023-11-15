import { c as create_ssr_component, o as onDestroy, k as add_attribute } from "./ssr.js";
import * as FilePond from "filepond";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const registerPlugin = FilePond.registerPlugin;
  const isSupported = FilePond.supported();
  let { class: klass = void 0 } = $$props;
  let { id = void 0 } = $$props;
  let { name = void 0 } = $$props;
  let { allowMultiple = void 0 } = $$props;
  let { required = void 0 } = $$props;
  let { captureMethod = void 0 } = $$props;
  let { acceptedFileTypes = void 0 } = $$props;
  const noop = () => {
  };
  let { addFile = noop } = $$props;
  let { addFiles = noop } = $$props;
  let { browse = noop } = $$props;
  let { fireSync = noop } = $$props;
  let { getFile = noop } = $$props;
  let { getFiles = noop } = $$props;
  let { moveFile = noop } = $$props;
  let { prepareFile = noop } = $$props;
  let { prepareFiles = noop } = $$props;
  let { processFile = noop } = $$props;
  let { processFiles = noop } = $$props;
  let { removeFile = noop } = $$props;
  let { removeFiles = noop } = $$props;
  let { sort = noop } = $$props;
  onDestroy(() => {
    return;
  });
  if ($$props.registerPlugin === void 0 && $$bindings.registerPlugin && registerPlugin !== void 0)
    $$bindings.registerPlugin(registerPlugin);
  if ($$props.isSupported === void 0 && $$bindings.isSupported && isSupported !== void 0)
    $$bindings.isSupported(isSupported);
  if ($$props.class === void 0 && $$bindings.class && klass !== void 0)
    $$bindings.class(klass);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.allowMultiple === void 0 && $$bindings.allowMultiple && allowMultiple !== void 0)
    $$bindings.allowMultiple(allowMultiple);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.captureMethod === void 0 && $$bindings.captureMethod && captureMethod !== void 0)
    $$bindings.captureMethod(captureMethod);
  if ($$props.acceptedFileTypes === void 0 && $$bindings.acceptedFileTypes && acceptedFileTypes !== void 0)
    $$bindings.acceptedFileTypes(acceptedFileTypes);
  if ($$props.addFile === void 0 && $$bindings.addFile && addFile !== void 0)
    $$bindings.addFile(addFile);
  if ($$props.addFiles === void 0 && $$bindings.addFiles && addFiles !== void 0)
    $$bindings.addFiles(addFiles);
  if ($$props.browse === void 0 && $$bindings.browse && browse !== void 0)
    $$bindings.browse(browse);
  if ($$props.fireSync === void 0 && $$bindings.fireSync && fireSync !== void 0)
    $$bindings.fireSync(fireSync);
  if ($$props.getFile === void 0 && $$bindings.getFile && getFile !== void 0)
    $$bindings.getFile(getFile);
  if ($$props.getFiles === void 0 && $$bindings.getFiles && getFiles !== void 0)
    $$bindings.getFiles(getFiles);
  if ($$props.moveFile === void 0 && $$bindings.moveFile && moveFile !== void 0)
    $$bindings.moveFile(moveFile);
  if ($$props.prepareFile === void 0 && $$bindings.prepareFile && prepareFile !== void 0)
    $$bindings.prepareFile(prepareFile);
  if ($$props.prepareFiles === void 0 && $$bindings.prepareFiles && prepareFiles !== void 0)
    $$bindings.prepareFiles(prepareFiles);
  if ($$props.processFile === void 0 && $$bindings.processFile && processFile !== void 0)
    $$bindings.processFile(processFile);
  if ($$props.processFiles === void 0 && $$bindings.processFiles && processFiles !== void 0)
    $$bindings.processFiles(processFiles);
  if ($$props.removeFile === void 0 && $$bindings.removeFile && removeFile !== void 0)
    $$bindings.removeFile(removeFile);
  if ($$props.removeFiles === void 0 && $$bindings.removeFiles && removeFiles !== void 0)
    $$bindings.removeFiles(removeFiles);
  if ($$props.sort === void 0 && $$bindings.sort && sort !== void 0)
    $$bindings.sort(sort);
  return `  <div class="filepond--wrapper"><input type="file"${add_attribute("id", id, 0)}${add_attribute("name", name, 0)}${add_attribute("class", klass, 0)}${add_attribute("accept", acceptedFileTypes, 0)} ${allowMultiple ? "multiple" : ""} ${required ? "required" : ""}${add_attribute("capture", captureMethod, 0)}></div>`;
});
export {
  Component as C
};
