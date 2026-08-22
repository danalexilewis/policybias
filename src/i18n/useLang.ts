import { useEffect } from 'react'
import { parseAsStringLiteral, useQueryState } from 'nuqs'
import {
  CURRENT_EVENT_ID,
  eventIdFromPathname,
  eventLangs,
  parseLang,
  type EventId,
  type Lang,
} from '../event/events'
import { translate, type UiKey } from './messages'

const STORAGE_PREFIX = 'policybias.lang.'

function eventFromLocation(): EventId {
  if (typeof window === 'undefined') {
    return CURRENT_EVENT_ID
  }
  return eventIdFromPathname(window.location.pathname) ?? CURRENT_EVENT_ID
}

function storedLang(eventId: EventId): Lang | null {
  if (typeof window === 'undefined') {
    return null
  }
  return parseLang(window.localStorage.getItem(`${STORAGE_PREFIX}${eventId}`))
}

function navigatorLang(available: readonly Lang[]): Lang | null {
  if (typeof navigator === 'undefined') {
    return null
  }
  const raw = navigator.language.toLowerCase()
  if (raw.startsWith('sv') && available.includes('sv')) {
    return 'sv'
  }
  if (raw.startsWith('mi') && available.includes('mi')) {
    return 'mi'
  }
  if (raw.startsWith('en') && available.includes('en')) {
    return 'en'
  }
  return null
}

export function useLang(): {
  lang: Lang
  setLang: (next: Lang) => void
  available: readonly Lang[]
  eventId: EventId
  t: (key: UiKey) => string
} {
  const eventId = eventFromLocation()
  const { canonical, available } = eventLangs(eventId)
  const parser = parseAsStringLiteral([...available]).withDefault(canonical)
  const [queryLang, setQueryLang] = useQueryState('lang', parser)

  const preferred =
    (available.includes(queryLang) ? queryLang : null) ??
    storedLang(eventId) ??
    navigatorLang(available) ??
    canonical
  const lang = available.includes(preferred) ? preferred : canonical

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    window.localStorage.setItem(`${STORAGE_PREFIX}${eventId}`, lang)
    document.documentElement.lang = lang
  }, [eventId, lang])

  function setLang(next: Lang): void {
    if (!available.includes(next)) {
      return
    }
    void setQueryLang(next === canonical ? null : next)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(`${STORAGE_PREFIX}${eventId}`, next)
    }
  }

  function t(key: UiKey): string {
    return translate(lang, key)
  }

  return { lang, setLang, available, eventId, t }
}
