

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/error/wrong-code/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.6fd41e01.js","_app/immutable/chunks/scheduler.164e0fef.js","_app/immutable/chunks/index.ad61f886.js"];
export const stylesheets = ["_app/immutable/assets/3.5814fdec.css"];
export const fonts = [];