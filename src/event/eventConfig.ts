import { eventLangs, type EventId, type EventLang, type Lang } from './events'

/**
 * A party name is a proper noun, so one label serves every language. `labels`
 * overrides it, and may only name a language this event ships.
 */
export type EventParty<E extends EventId> = {
  id: string
  label: string
  labels?: Partial<Record<EventLang<E>, string>>
}

/**
 * An ethnicity category comes from the event's own population standard, so it
 * needs a real label in every language the event ships.
 */
export type EventEthnicity<E extends EventId> = {
  id: string
  labels: Record<EventLang<E>, string>
}

export type EventConfig<E extends EventId> = {
  parties: readonly EventParty<E>[]
  ageRangeIds: readonly string[]
  ethnicities: readonly EventEthnicity<E>[]
}

const NZ_PARTIES: readonly EventParty<'nz-election-2026'>[] = [
  { id: 'act', label: 'ACT' },
  { id: 'green', label: 'Green' },
  { id: 'labour', label: 'Labour' },
  { id: 'national', label: 'National' },
  { id: 'nz-first', label: 'NZ First' },
  { id: 'opportunity', label: 'Opportunity' },
  { id: 'te-pati-maori', label: 'Te Pāti Māori' },
]

const SE_PARTIES: readonly EventParty<'se-election-2026'>[] = [
  { id: 'centerpartiet', label: 'Centerpartiet' },
  { id: 'kristdemokraterna', label: 'Kristdemokraterna' },
  { id: 'liberalerna', label: 'Liberalerna' },
  { id: 'miljopartiet', label: 'Miljöpartiet' },
  { id: 'moderaterna', label: 'Moderaterna' },
  { id: 'socialdemokraterna', label: 'Socialdemokraterna' },
  { id: 'sverigedemokraterna', label: 'Sverigedemokraterna' },
  { id: 'vansterpartiet', label: 'Vänsterpartiet' },
]

/** Stats NZ level 1 ethnicity. */
const NZ_ETHNICITIES: readonly EventEthnicity<'nz-election-2026'>[] = [
  { id: 'european', labels: { en: 'European', mi: 'Pākehā' } },
  { id: 'maori', labels: { en: 'Māori', mi: 'Māori' } },
  {
    id: 'pacific',
    labels: { en: 'Pacific peoples', mi: 'Iwi o Te Moana-nui-a-Kiwa' },
  },
  { id: 'asian', labels: { en: 'Asian', mi: 'Āhia' } },
  {
    id: 'melaa',
    labels: {
      en: 'Middle Eastern, Latin American, or African',
      mi: 'Te Rāwhiti Waenga, Amerika Latina, Āwherika',
    },
  },
  { id: 'other', labels: { en: 'Other', mi: 'Tētahi atu' } },
]

/** SCB background groups. */
const SE_ETHNICITIES: readonly EventEthnicity<'se-election-2026'>[] = [
  { id: 'swedish', labels: { sv: 'Svensk', en: 'Swedish' } },
  { id: 'nordic', labels: { sv: 'Nordisk', en: 'Nordic' } },
  { id: 'european', labels: { sv: 'Europeisk', en: 'European' } },
  { id: 'african', labels: { sv: 'Afrikansk', en: 'African' } },
  { id: 'persian', labels: { sv: 'Persisk', en: 'Persian' } },
  { id: 'asian', labels: { sv: 'Asiatisk', en: 'Asian' } },
  { id: 'other', labels: { sv: 'Annan', en: 'Other' } },
]

const CONFIG: { [E in EventId]: EventConfig<E> } = {
  'nz-election-2026': {
    parties: NZ_PARTIES,
    ageRangeIds: [
      'under-18',
      '18-24',
      '25-34',
      '35-44',
      '45-54',
      '55-64',
      '65-plus',
    ],
    ethnicities: NZ_ETHNICITIES,
  },
  'se-election-2026': {
    parties: SE_PARTIES,
    ageRangeIds: [
      'under-18',
      '18-19',
      '20-29',
      '30-39',
      '40-49',
      '50-59',
      '60-69',
      '70-79',
      '80-plus',
    ],
    ethnicities: SE_ETHNICITIES,
  },
}

export const INTENDED_VOTE_EXTRAS = [
  'undecided',
  'will-not-vote',
  'another-party',
] as const

export function eventConfig(eventId: EventId): EventConfig<EventId> {
  return CONFIG[eventId] as EventConfig<EventId>
}

export function eventPartyIds(eventId: EventId): string[] {
  return CONFIG[eventId].parties.map((party) => party.id)
}

export function eventPartyLabel(
  eventId: EventId,
  partyId: string,
  lang: Lang,
): string {
  const party = CONFIG[eventId].parties.find((item) => item.id === partyId)
  if (!party) {
    return partyId
  }
  return labelForLang(party.labels, eventId, lang) ?? party.label
}

export function eventAgeRangeIds(eventId: EventId): readonly string[] {
  return CONFIG[eventId].ageRangeIds
}

export function eventEthnicityIds(eventId: EventId): readonly string[] {
  return CONFIG[eventId].ethnicities.map((ethnicity) => ethnicity.id)
}

/** Falls back to the canonical language, then the id, for a stray category. */
export function eventEthnicityLabel(
  eventId: EventId,
  ethnicityId: string,
  lang: Lang,
): string {
  const ethnicity = CONFIG[eventId].ethnicities.find(
    (item) => item.id === ethnicityId,
  )
  if (!ethnicity) {
    return ethnicityId
  }
  return labelForLang(ethnicity.labels, eventId, lang) ?? ethnicityId
}

/**
 * The label sets are typed per event, so a `Lang` from a URL has to be widened
 * here before lookup.
 */
function labelForLang(
  labels: object | undefined,
  eventId: EventId,
  lang: Lang,
): string | undefined {
  if (!labels) {
    return undefined
  }
  const byLang = labels as Partial<Record<Lang, string>>
  return byLang[lang] ?? byLang[eventLangs(eventId).canonical]
}
