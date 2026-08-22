import {
  parseAsArrayOf,
  parseAsBoolean,
  parseAsString,
  parseAsStringLiteral,
} from 'nuqs'
import type { MoneyClass } from '../data/types'
import type { GroupBy } from '../grid/sortCards'

const MONEY_IDS = ['named-figure', 'no-figure'] as const satisfies readonly MoneyClass[]

const GROUP_BY = ['none', 'cluster', 'party'] as const satisfies readonly GroupBy[]

/** Search params for the board filters. Defaults stay off the URL. */
export const filterSearchParams = {
  anonymise: parseAsBoolean.withDefault(true),
  group: parseAsStringLiteral(GROUP_BY).withDefault('none'),
  clusters: parseAsArrayOf(parseAsString).withDefault([]),
  parties: parseAsArrayOf(parseAsString).withDefault([]),
  money: parseAsArrayOf(parseAsStringLiteral(MONEY_IDS)).withDefault([]),
  output: parseAsBoolean,
  derived: parseAsBoolean,
}
