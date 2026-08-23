import type { EventId, EventStatus, Lang } from '../event/events'
import en from './en.json'
import mi from './mi.json'
import sv from './sv.json'

export type UiKey = keyof typeof en
export type TranslateVars = Record<string, string | number>

export const SITE_LANGS: readonly Lang[] = ['en', 'sv', 'mi']

const DICTS: Record<Lang, Record<UiKey, string>> = {
  en,
  sv,
  mi,
}

export function interpolate(
  template: string,
  vars?: TranslateVars,
): string {
  if (!vars) {
    return template
  }
  return template.replace(/\{(\w+)\}/g, (match, name: string) =>
    vars[name] === undefined ? match : String(vars[name]),
  )
}

export function translate(
  lang: Lang,
  key: UiKey,
  vars?: TranslateVars,
): string {
  const template = DICTS[lang][key] ?? en[key]
  return interpolate(template, vars)
}

export function langLabel(lang: Lang): string {
  if (lang === 'sv') {
    return en.langSv
  }
  if (lang === 'mi') {
    return en.langMi
  }
  return en.langEn
}

export function dictionaryKeys(): UiKey[] {
  return Object.keys(en) as UiKey[]
}

export function dictionaryFor(lang: Lang): Record<UiKey, string> {
  return DICTS[lang]
}

export function eventUiKey(eventId: EventId): UiKey {
  return eventId === 'nz-election-2026' ? 'eventNz' : 'eventSe'
}

export function statusUiKey(status: EventStatus): UiKey {
  return `status.${status}` as UiKey
}

export function voteUiKey(id: string): UiKey {
  return `vote.${id}` as UiKey
}
