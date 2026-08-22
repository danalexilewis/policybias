/// <reference lib="webworker" />
import { defaultCache } from '@serwist/vite/worker'
import type { PrecacheEntry, SerwistGlobalConfig } from 'serwist'
import { NetworkOnly, Serwist } from 'serwist'
import { documentFallbackUrl, isScoresPath } from './offline/documentFallback'

declare global {
	interface WorkerGlobalScope extends SerwistGlobalConfig {
		__SW_MANIFEST: (PrecacheEntry | string)[] | undefined
	}
}

declare const self: ServiceWorkerGlobalScope

function fallbackMatcher(expected: string) {
	return function matches({ request }: { request: Request }): boolean {
		if (request.destination !== 'document') {
			return false
		}
		const pathname = new URL(request.url).pathname
		return documentFallbackUrl(pathname) === expected
	}
}

const serwist = new Serwist({
	precacheEntries: self.__SW_MANIFEST,
	skipWaiting: true,
	clientsClaim: true,
	navigationPreload: true,
	disableDevLogs: true,
	runtimeCaching: [
		{
			matcher: ({ url, request }) =>
				request.method === 'POST' && isScoresPath(url.pathname),
			method: 'POST',
			handler: new NetworkOnly(),
		},
		...defaultCache,
	],
	fallbacks: {
		entries: [
			{
				url: '/nz-election-2026/index.html',
				matcher: fallbackMatcher('/nz-election-2026/index.html'),
			},
			{
				url: '/se-election-2026/index.html',
				matcher: fallbackMatcher('/se-election-2026/index.html'),
			},
			{
				url: '/index.html',
				matcher: fallbackMatcher('/index.html'),
			},
		],
	},
})

serwist.addEventListeners()
