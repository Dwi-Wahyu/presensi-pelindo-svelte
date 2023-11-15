

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/beranda/presensi/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.63826530.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.2505487f.js","_app/immutable/chunks/index.98bfc95c.js","_app/immutable/chunks/spread.8a54911c.js","_app/immutable/chunks/navigation.f93497c3.js","_app/immutable/chunks/singletons.d906d1d9.js"];
export const stylesheets = [];
export const fonts = [];
