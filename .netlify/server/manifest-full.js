export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["bg-login.webp","error/already-attended.png","error/location_far.png","error/wait.png","error/warning-location.png","error/wrong_code.png","favicon.png","icon-putih.png","images/gedung-kpo.png","images/kantor-tpm.jpg","loader/bar.svg","loader/circle-white.svg","logo-pelindo.png","pelindo.png","pin/leaf-red.png","pin/user-pin.ico","pin/user-pin.png","success.png","undraw/belum-absen.svg","undraw/profil-pria.svg","undraw/profil-wanita.svg"]),
	mimeTypes: {".webp":"image/webp",".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.d5917cd0.js","app":"_app/immutable/entry/app.b3165dbf.js","imports":["_app/immutable/entry/start.d5917cd0.js","_app/immutable/chunks/scheduler.2505487f.js","_app/immutable/chunks/singletons.d906d1d9.js","_app/immutable/entry/app.b3165dbf.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.2505487f.js","_app/immutable/chunks/index.98bfc95c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/izin",
				pattern: /^\/api\/izin\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/izin/_server.js'))
			},
			{
				id: "/api/login",
				pattern: /^\/api\/login\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/login/_server.js'))
			},
			{
				id: "/beranda",
				pattern: /^\/beranda\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/beranda/izin",
				pattern: /^\/beranda\/izin\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/beranda/izin/buat",
				pattern: /^\/beranda\/izin\/buat\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/beranda/location",
				pattern: /^\/beranda\/location\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/beranda/presensi",
				pattern: /^\/beranda\/presensi\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/error/already-attended",
				pattern: /^\/error\/already-attended\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/error/enable-location",
				pattern: /^\/error\/enable-location\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/error/location-far",
				pattern: /^\/error\/location-far\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/error/wait/[waktu]",
				pattern: /^\/error\/wait\/([^/]+?)\/?$/,
				params: [{"name":"waktu","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/error/wrong-code",
				pattern: /^\/error\/wrong-code\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/filepond",
				pattern: /^\/filepond\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/success",
				pattern: /^\/success\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
