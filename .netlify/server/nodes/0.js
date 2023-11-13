

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.e2f03a94.js","_app/immutable/chunks/scheduler.164e0fef.js","_app/immutable/chunks/index.ad61f886.js"];
export const stylesheets = ["_app/immutable/assets/0.c4c215aa.css"];
export const fonts = [];
