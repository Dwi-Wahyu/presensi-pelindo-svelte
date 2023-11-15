

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/error/wrong-code/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.0a752b80.js","_app/immutable/chunks/scheduler.2505487f.js","_app/immutable/chunks/index.98bfc95c.js"];
export const stylesheets = ["_app/immutable/assets/9.5814fdec.css"];
export const fonts = [];
