

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/beranda/izin/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.06106fb1.js","_app/immutable/chunks/scheduler.2505487f.js","_app/immutable/chunks/index.98bfc95c.js","_app/immutable/chunks/spread.8a54911c.js"];
export const stylesheets = [];
export const fonts = [];
