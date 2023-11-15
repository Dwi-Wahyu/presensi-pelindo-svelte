

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9e1b7d48.js","_app/immutable/chunks/scheduler.2505487f.js","_app/immutable/chunks/index.98bfc95c.js","_app/immutable/chunks/stores.84192d87.js","_app/immutable/chunks/singletons.d906d1d9.js"];
export const stylesheets = [];
export const fonts = [];
