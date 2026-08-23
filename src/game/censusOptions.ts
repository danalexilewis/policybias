import type { EventId, Lang } from '../event/events'
import {
  eventAgeRangeIds,
  eventEthnicityIds,
  eventEthnicityLabel,
  eventPartyIds,
  INTENDED_VOTE_EXTRAS,
} from '../event/eventConfig'
import { translate, voteUiKey } from '../i18n/messages'
import type { AgeRange, Ethnicity, IntendedVoteExtra } from './scoreRecord'

type Option<Id extends string> = { id: Id; label: string }

export function ageRangeOptions(
  eventId: EventId,
  lang: Lang,
): Option<AgeRange>[] {
  return eventAgeRangeIds(eventId).map((id) => ({
    id: id as AgeRange,
    label: ageBandLabel(id, lang),
  }))
}

export function ethnicityOptions(
  eventId: EventId,
  lang: Lang,
): Option<Ethnicity>[] {
  return eventEthnicityIds(eventId).map((id) => ({
    id: id as Ethnicity,
    label: eventEthnicityLabel(eventId, id, lang),
  }))
}

export function intendedVoteExtraOptions(
  lang: Lang,
): Option<IntendedVoteExtra>[] {
  return INTENDED_VOTE_EXTRAS.map((id) => ({
    id,
    label: translate(lang, voteUiKey(id)),
  }))
}

/**
 * Age bands read the same in every language apart from the open ends, so the
 * label comes from the id rather than one dictionary key per band.
 */
export function ageBandLabel(id: string, lang: Lang): string {
  const [, under] = id.match(/^under-(\d+)$/) ?? []
  if (under) {
    return translate(lang, 'ageUnder', { n: under })
  }
  const [, plus] = id.match(/^(\d+)-plus$/) ?? []
  if (plus) {
    return translate(lang, 'agePlus', { n: plus })
  }
  const [, from, to] = id.match(/^(\d+)-(\d+)$/) ?? []
  if (from && to) {
    return `${from}–${to}`
  }
  return id
}

export function ageRangeLabel(
  ageRange: AgeRange | null,
  lang: Lang,
): string | null {
  if (!ageRange) {
    return null
  }
  return ageBandLabel(ageRange, lang)
}

export function ethnicityLabel(
  ethnicities: Ethnicity[] | null,
  eventId: EventId,
  lang: Lang,
): string | null {
  if (!ethnicities || ethnicities.length === 0) {
    return null
  }
  return ethnicities
    .map((id) => eventEthnicityLabel(eventId, id, lang))
    .join(', ')
}

export function voteExtraLabel(vote: IntendedVoteExtra, lang: Lang): string {
  return translate(lang, voteUiKey(vote))
}

export { eventPartyIds }
