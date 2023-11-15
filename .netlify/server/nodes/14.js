import * as universal from '../entries/pages/filepond/_page.js';
import * as server from '../entries/pages/filepond/_page.server.js';

export const index = 14;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/filepond/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/filepond/+page.js";
export { server };
export const server_id = "src/routes/filepond/+page.server.js";
export const imports = ["_app/immutable/nodes/14.08145392.js","_app/immutable/chunks/scheduler.2505487f.js","_app/immutable/chunks/index.98bfc95c.js","_app/immutable/chunks/filepond-plugin-file-validate-size.esm.51124345.js"];
export const stylesheets = ["_app/immutable/assets/6.c7229fae.css"];
export const fonts = [];
