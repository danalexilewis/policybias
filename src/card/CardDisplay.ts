export type CardDisplay = {
  party: boolean
  title: boolean
  given: boolean
  when: boolean
  then: boolean
  output: boolean
  outcome: boolean
  gaps: boolean
  source: boolean
}

export const ALL_VISIBLE: CardDisplay = {
  party: true,
  title: true,
  given: true,
  when: true,
  then: true,
  output: true,
  outcome: true,
  gaps: true,
  source: true,
}

export const GAME_DISPLAY: CardDisplay = { ...ALL_VISIBLE, party: false }
