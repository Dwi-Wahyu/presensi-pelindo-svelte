import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["bg-login.webp","error/already-attended.png","error/location_far.png","error/wait.png","error/warning-location.png","error/wrong_code.png","favicon.png","icon-putih.png","loader/bar.svg","loader/circle-white.svg","logo-pelindo.png","pelindo.png","success.png"]),
	mimeTypes: {".webp":"image/webp",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.151650af.js","app":"_app/immutable/entry/app.f3f262c0.js","imports":["_app/immutable/entry/start.151650af.js","_app/immutable/chunks/scheduler.164e0fef.js","_app/immutable/chunks/singletons.9755caa9.js","_app/immutable/chunks/index.f1a8ec0d.js","_app/immutable/entry/app.f3f262c0.js","_app/immutable/chunks/scheduler.164e0fef.js","_app/immutable/chunks/index.ad61f886.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js')),
			__memo(() => import('../server/nodes/9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/error/already-attended",
				pattern: /^\/error\/already-attended\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/error/enable-location",
				pattern: /^\/error\/enable-location\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/error/location-far",
				pattern: /^\/error\/location-far\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/error/wait/[waktu]",
				pattern: /^\/error\/wait\/([^/]+?)\/?$/,
				params: [{"name":"waktu","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/error/wrong-code",
				pattern: /^\/error\/wrong-code\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/izin",
				pattern: /^\/izin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/success",
				pattern: /^\/success\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
