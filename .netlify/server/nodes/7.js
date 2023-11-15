

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/beranda/location/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.b76bee92.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.2505487f.js","_app/immutable/chunks/index.98bfc95c.js","_app/immutable/chunks/navigation.f93497c3.js","_app/immutable/chunks/singletons.d906d1d9.js"];
export const stylesheets = ["_app/immutable/assets/7.ac80a403.css"];
export const fonts = [];
