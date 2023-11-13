

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/error/location-far/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.51667798.js","_app/immutable/chunks/scheduler.164e0fef.js","_app/immutable/chunks/index.ad61f886.js"];
export const stylesheets = ["_app/immutable/assets/3.5814fdec.css"];
export const fonts = [];
