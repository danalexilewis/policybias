import type { Lang } from '../event/events'

export type UiKey =
  | 'skipToPolicies'
  | 'publicScores'
  | 'playGame'
  | 'loadingCards'
  | 'couldNotLoadCards'
  | 'encodedIn'
  | 'terms'
  | 'privacy'
  | 'contact'
  | 'anonymise'
  | 'groupBy'
  | 'category'
  | 'party'
  | 'parties'
  | 'policies'
  | 'missing'
  | 'filters'
  | 'clearFilters'
  | 'money'
  | 'namedFigure'
  | 'noFigure'
  | 'shape'
  | 'hasOutput'
  | 'noOutput'
  | 'hasUnderstanding'
  | 'statedOnly'
  | 'filterAria'
  | 'applied'
  | 'closePolicy'
  | 'previousPolicy'
  | 'nextPolicy'
  | 'source'
  | 'systemOutputs'
  | 'systemOutcomes'
  | 'gaps'
  | 'assumptions'
  | 'statedOnlyMeta'
  | 'outputsCount'
  | 'gameResults'
  | 'results'
  | 'shareScore'
  | 'copied'
  | 'couldntShare'
  | 'playAgain'
  | 'savingScore'
  | 'savedScoreBefore'
  | 'publicDataset'
  | 'failedScoreBefore'
  | 'publicDatasetCaps'
  | 'itWas'
  | 'noGuesses'
  | 'choosePolicy'
  | 'policy'
  | 'beforeYourScore'
  | 'optionalQuestions'
  | 'censusLede'
  | 'offlineCensus'
  | 'offlineScore'
  | 'ageRange'
  | 'ethnicity'
  | 'selectAll'
  | 'intendedVote'
  | 'skipQuestions'
  | 'continue'
  | 'language'
  | 'langEn'
  | 'langSv'
  | 'langMi'
  | 'translatedBadge'
  | 'eventNz'
  | 'eventSe'
  | 'wrongGuesses'
  | 'next'
  | 'exitGame'
  | 'worthKnowing'
  | 'youGotThisRight'
  | 'youGotThisWrong'
  | 'chooseThePolicy'
  | 'whichPolicy'
  | 'seeResults'
  | 'seeMyScore'
  | 'allTime'
  | 'onlyRounds'
  | 'whenYouWereWrong'
  | 'round'
  | 'stated'
  | 'ourUnderstanding'
  | 'feltWealthLegend'
  | 'feltWealthHint'
  | 'notAnswered'
  | 'tapToChoose'
  | 'back'
  | 'submit'
  | 'yourGuessesByParty'
  | 'score'
  | 'policyOf'
  | 'showPolicy'
  | 'inspect'
  | 'noRounds'
  | 'policyN'
  | 'itWasParen'

export const EN: Record<UiKey, string> = {
  skipToPolicies: 'Skip to policies',
  publicScores: 'Public scores',
  playGame: 'Play game',
  loadingCards: 'Loading policy cards…',
  couldNotLoadCards: 'Could not load cards.json',
  encodedIn: 'Encoded in',
  terms: 'Terms',
  privacy: 'Privacy',
  contact: 'Contact',
  anonymise: 'Anonymise',
  groupBy: 'Group by',
  category: 'Category',
  party: 'Party',
  parties: 'parties',
  policies: 'policies',
  missing: 'Missing',
  filters: 'Filters',
  clearFilters: 'Clear filters',
  money: 'Money',
  namedFigure: 'Named figure',
  noFigure: 'No figure',
  shape: 'Shape',
  hasOutput: 'Has output',
  noOutput: 'No output',
  hasUnderstanding: 'Has understanding',
  statedOnly: 'Stated only',
  filterAria: 'Policy card filters',
  applied: 'applied',
  closePolicy: 'Close policy',
  previousPolicy: 'Previous policy',
  nextPolicy: 'Next policy',
  source: 'Source',
  systemOutputs: 'System outputs',
  systemOutcomes: 'System outcomes',
  gaps: 'Gaps',
  assumptions: 'Assumptions',
  statedOnlyMeta: 'Stated only',
  outputsCount: 'outputs',
  gameResults: 'Game results',
  results: 'Results',
  shareScore: 'Share score',
  copied: 'Copied',
  couldntShare: "Couldn't share",
  playAgain: 'Play again',
  savingScore: 'Saving this score to the public dataset…',
  savedScoreBefore: 'This score is in the',
  publicDataset: 'public dataset',
  failedScoreBefore: 'This score could not be saved.',
  publicDatasetCaps: 'Public dataset',
  itWas: 'it was',
  noGuesses: 'no guesses',
  choosePolicy: 'Choose the',
  policy: 'policy',
  beforeYourScore: 'Before your score',
  optionalQuestions: 'Optional questions',
  censusLede:
    'Your score goes into a public dataset. There are no accounts, and we do not store a name, cookie, or IP address. Every question is optional.',
  offlineCensus:
    "You're offline. These questions go into the public dataset, which needs a network.",
  offlineScore:
    "You're offline. This score cannot be added to the public dataset until you are back online.",
  ageRange: 'Age range',
  ethnicity: 'Ethnicity',
  selectAll: 'Select all that apply.',
  intendedVote: 'Party you plan to vote for',
  skipQuestions: 'Skip',
  continue: 'Continue',
  language: 'Language',
  langEn: 'English',
  langSv: 'Svenska',
  langMi: 'Te reo Māori',
  translatedBadge: 'Machine translated',
  eventNz: 'NZ 2026',
  eventSe: 'SE 2026',
  wrongGuesses: 'Wrong guesses',
  next: 'Next',
  exitGame: 'Exit game',
  worthKnowing: 'Worth knowing',
  youGotThisRight: 'You got this right',
  youGotThisWrong: 'You got this wrong',
  chooseThePolicy: 'Choose the policy',
  whichPolicy: 'Which policy',
  seeResults: 'See results',
  seeMyScore: 'See my score',
  allTime: 'All time',
  onlyRounds: 'possible with the current dataset.',
  whenYouWereWrong: 'When you were wrong, you picked',
  round: 'Round',
  stated: 'Stated',
  ourUnderstanding: 'Our understanding',
  feltWealthLegend: 'How wealthy do you feel you are?',
  feltWealthHint: '1 is not wealthy. 10 is very wealthy.',
  notAnswered: 'Not answered',
  tapToChoose: 'Tap a policy to choose it',
  back: 'Back',
  submit: 'Submit',
  yourGuessesByParty: 'Your guesses by party',
  score: 'Score',
  policyOf: 'of',
  showPolicy: 'Show policy',
  inspect: 'Inspect',
  noRounds: 'No rounds could be dealt from the current card set.',
  policyN: 'Policy',
  itWasParen: 'it was',
}

export const SV: Record<UiKey, string> = {
  skipToPolicies: 'Hoppa till politik',
  publicScores: 'Offentliga poäng',
  playGame: 'Spela',
  loadingCards: 'Laddar politik-kort…',
  couldNotLoadCards: 'Kunde inte ladda cards.json',
  encodedIn: 'Kodad i',
  terms: 'Villkor',
  privacy: 'Integritet',
  contact: 'Kontakt',
  anonymise: 'Anonymisera',
  groupBy: 'Gruppera efter',
  category: 'Kategori',
  party: 'Parti',
  parties: 'partier',
  policies: 'politik',
  missing: 'Saknas',
  filters: 'Filter',
  clearFilters: 'Rensa filter',
  money: 'Pengar',
  namedFigure: 'Namngiven siffra',
  noFigure: 'Ingen siffra',
  shape: 'Form',
  hasOutput: 'Har output',
  noOutput: 'Ingen output',
  hasUnderstanding: 'Har förståelse',
  statedOnly: 'Endast uttalat',
  filterAria: 'Filter för politik-kort',
  applied: 'aktiva',
  closePolicy: 'Stäng politik',
  previousPolicy: 'Föregående politik',
  nextPolicy: 'Nästa politik',
  source: 'Källa',
  systemOutputs: 'Systemutdata',
  systemOutcomes: 'Systemutfall',
  gaps: 'Luckor',
  assumptions: 'Antaganden',
  statedOnlyMeta: 'Endast uttalat',
  outputsCount: 'utdata',
  gameResults: 'Spelresultat',
  results: 'Resultat',
  shareScore: 'Dela poäng',
  copied: 'Kopierat',
  couldntShare: 'Kunde inte dela',
  playAgain: 'Spela igen',
  savingScore: 'Sparar poängen i den offentliga datamängden…',
  savedScoreBefore: 'Poängen finns i den',
  publicDataset: 'offentliga datamängden',
  failedScoreBefore: 'Poängen kunde inte sparas.',
  publicDatasetCaps: 'Offentlig datamängd',
  itWas: 'det var',
  noGuesses: 'inga gissningar',
  choosePolicy: 'Välj',
  policy: 'politik',
  beforeYourScore: 'Före din poäng',
  optionalQuestions: 'Valfria frågor',
  censusLede:
    'Din poäng hamnar i en offentlig datamängd. Det finns inga konton, och vi lagrar varken namn, kaka eller IP-adress. Alla frågor är valfria.',
  offlineCensus:
    'Du är offline. De här frågorna hamnar i den offentliga datamängden, och det kräver nätverk.',
  offlineScore:
    'Du är offline. Poängen kan inte läggas till i den offentliga datamängden förrän du är online igen.',
  ageRange: 'Åldersintervall',
  ethnicity: 'Etnicitet',
  selectAll: 'Välj alla som stämmer.',
  intendedVote: 'Parti du tänker rösta på',
  skipQuestions: 'Hoppa över',
  continue: 'Fortsätt',
  language: 'Språk',
  langEn: 'English',
  langSv: 'Svenska',
  langMi: 'Te reo Māori',
  translatedBadge: 'Maskinöversatt',
  eventNz: 'NZ 2026',
  eventSe: 'SE 2026',
  wrongGuesses: 'Fel gissningar',
  next: 'Nästa',
  exitGame: 'Avsluta spelet',
  worthKnowing: 'Värt att veta',
  youGotThisRight: 'Rätt',
  youGotThisWrong: 'Fel',
  chooseThePolicy: 'Välj politiken',
  whichPolicy: 'Vilken politik',
  seeResults: 'Se resultat',
  seeMyScore: 'Visa min poäng',
  allTime: 'Totalt',
  onlyRounds: 'möjliga med nuvarande datamängd.',
  whenYouWereWrong: 'När du hade fel valde du',
  round: 'Omgång',
  stated: 'Uttalat',
  ourUnderstanding: 'Vår läsning',
  feltWealthLegend: 'Hur rik känner du dig?',
  feltWealthHint: '1 är inte rik. 10 är mycket rik.',
  notAnswered: 'Ej besvarat',
  tapToChoose: 'Tryck på en politik för att välja den',
  back: 'Tillbaka',
  submit: 'Skicka',
  yourGuessesByParty: 'Dina gissningar per parti',
  score: 'Poäng',
  policyOf: 'av',
  showPolicy: 'Visa politik',
  inspect: 'Inspektera',
  noRounds: 'Inga omgångar kunde delas ut från nuvarande kort.',
  policyN: 'Politik',
  itWasParen: 'det var',
}

const DICTS: Record<Lang, Record<UiKey, string>> = {
  en: EN,
  sv: SV,
  mi: EN,
}

export function translate(lang: Lang, key: UiKey): string {
  return DICTS[lang][key] ?? EN[key]
}

export function langLabel(lang: Lang): string {
  if (lang === 'sv') {
    return SV.langSv
  }
  if (lang === 'mi') {
    return EN.langMi
  }
  return EN.langEn
}
