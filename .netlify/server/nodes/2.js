

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.02c69e41.js","_app/immutable/chunks/scheduler.164e0fef.js","_app/immutable/chunks/index.ad61f886.js","_app/immutable/chunks/singletons.9755caa9.js","_app/immutable/chunks/index.f1a8ec0d.js"];
export const stylesheets = ["_app/immutable/assets/2.88a994dd.css"];
export const fonts = [];
