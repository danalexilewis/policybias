import type { PartyMeta } from '../data/types'
import { partyLogoUrl } from './anonymise'

/** Party marks vendored in `public/logos/`. Party copyright; not MIT. */
export function partyLogoSrc(parties: PartyMeta[], partyId: string): string {
  return partyLogoUrl(parties, partyId)
}
