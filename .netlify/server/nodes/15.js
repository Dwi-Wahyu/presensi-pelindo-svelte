

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/success/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/15.046d2ae3.js","_app/immutable/chunks/scheduler.2505487f.js","_app/immutable/chunks/index.98bfc95c.js"];
export const stylesheets = ["_app/immutable/assets/9.5814fdec.css"];
export const fonts = [];
