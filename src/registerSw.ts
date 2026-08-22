import { getSerwist } from 'virtual:serwist'

/** Register the production service worker. No-op when Serwist is not injected. */
export async function registerServiceWorker(): Promise<void> {
	if (!('serviceWorker' in navigator)) {
		return
	}
	const serwist = await getSerwist()
	await serwist?.register()
}
