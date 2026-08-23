import type { Lang } from '../event/events'

/** Append `lang` when it is not the canonical language for that URL. */
export function withLangQuery(
  path: string,
  lang: Lang,
  canonical: Lang,
): string {
  if (lang === canonical) {
    return path
  }
  const hashIndex = path.indexOf('#')
  const hash = hashIndex === -1 ? '' : path.slice(hashIndex)
  const withoutHash = hashIndex === -1 ? path : path.slice(0, hashIndex)
  const sep = withoutHash.includes('?') ? '&' : '?'
  return `${withoutHash}${sep}lang=${lang}${hash}`
}
