

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/beranda/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.f99530b0.js","_app/immutable/chunks/scheduler.2505487f.js","_app/immutable/chunks/index.98bfc95c.js"];
export const stylesheets = [];
export const fonts = [];
