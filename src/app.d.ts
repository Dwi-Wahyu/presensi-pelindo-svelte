// See https://kit.svelte.dev/docs/types#app

import type { JWTPayload } from 'jose';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: JWTPayload;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
