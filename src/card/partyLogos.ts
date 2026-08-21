import type { PartyId } from '../data/types'

function logoUrl(file: string): string {
  return `${import.meta.env.BASE_URL}logos/${file}`
}

/** Party marks vendored in `public/logos/`. Party copyright; not MIT. */
export const PARTY_LOGOS: Record<PartyId, string> = {
  act: logoUrl('act.svg'),
  green: logoUrl('green.svg'),
  labour: logoUrl('labour.svg'),
  national: logoUrl('national.svg'),
  'nz-first': logoUrl('nz-first.svg'),
  opportunity: logoUrl('opportunity.svg'),
  'te-pati-maori': logoUrl('te-pati-maori-mark.png'),
}
