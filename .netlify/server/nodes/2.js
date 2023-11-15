

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/beranda/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.cdc6f21f.js","_app/immutable/chunks/scheduler.2505487f.js","_app/immutable/chunks/index.98bfc95c.js","_app/immutable/chunks/navigation.f93497c3.js","_app/immutable/chunks/singletons.d906d1d9.js","_app/immutable/chunks/stores.84192d87.js","_app/immutable/chunks/spread.8a54911c.js"];
export const stylesheets = [];
export const fonts = [];
