/** Event HTML to serve when a navigation is not on the network. */
export function documentFallbackUrl(pathname: string): string | undefined {
  if (pathname.startsWith('/se-election-2026')) {
    return '/se-election-2026/index.html'
  }
  if (pathname.startsWith('/nz-election-2026')) {
    return '/nz-election-2026/index.html'
  }
  if (pathname === '/' || pathname === '/index.html') {
    return '/index.html'
  }
  return undefined
}

/** Public score dataset — writes must not be answered from cache. */
export function isScoresPath(pathname: string): boolean {
  return pathname.endsWith('/scores') || pathname.endsWith('/scores/')
}
