

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.9b0cacef.js","_app/immutable/chunks/scheduler.2505487f.js","_app/immutable/chunks/index.98bfc95c.js","_app/immutable/chunks/navigation.f93497c3.js","_app/immutable/chunks/singletons.d906d1d9.js","_app/immutable/chunks/_commonjsHelpers.23102255.js","_app/immutable/chunks/spread.8a54911c.js"];
export const stylesheets = ["_app/immutable/assets/3.a9e293d6.css"];
export const fonts = [];
