

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/izin/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.8bde0a12.js","_app/immutable/chunks/scheduler.164e0fef.js","_app/immutable/chunks/index.ad61f886.js","_app/immutable/chunks/index.f1a8ec0d.js"];
export const stylesheets = ["_app/immutable/assets/8.047547e7.css"];
export const fonts = [];
