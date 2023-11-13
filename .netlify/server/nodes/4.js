

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/error/enable-location/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.e0ab46c6.js","_app/immutable/chunks/scheduler.164e0fef.js","_app/immutable/chunks/index.ad61f886.js"];
export const stylesheets = ["_app/immutable/assets/3.5814fdec.css"];
export const fonts = [];
