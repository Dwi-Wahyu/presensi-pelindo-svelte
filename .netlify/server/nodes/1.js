

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.380fc154.js","_app/immutable/chunks/scheduler.164e0fef.js","_app/immutable/chunks/index.ad61f886.js","_app/immutable/chunks/singletons.9755caa9.js","_app/immutable/chunks/index.f1a8ec0d.js"];
export const stylesheets = [];
export const fonts = [];
