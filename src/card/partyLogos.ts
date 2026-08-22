import type { PartyId, PartyMeta } from '../data/types'

function logoUrl(file: string): string {
  return `${import.meta.env.BASE_URL}logos/${file}`
}

/**
 * NZ marks vendored in `public/logos/`. Party copyright; not MIT.
 * GameOverlay and CardNode still import this map; keep it while those call sites exist.
 */
export const PARTY_LOGOS: Record<PartyId, string> = {
  act: logoUrl('act.svg'),
  green: logoUrl('green.svg'),
  labour: logoUrl('labour.svg'),
  national: logoUrl('national.svg'),
  'nz-first': logoUrl('nz-first.svg'),
  opportunity: logoUrl('opportunity.svg'),
  'te-pati-maori': logoUrl('te-pati-maori.svg'),
}

/** Dataset-aware lookup used by callers that already have party meta. */
export function partyLogoSrc(parties: PartyMeta[], partyId: string): string {
  const known = parties.find((party) => party.id === partyId)
  if (known?.logo) {
    return logoUrl(known.logo)
  }
  return PARTY_LOGOS[partyId] ?? ''
}
