# Policy Bias

A board of New Zealand party policies for the 2026 election, and a guessing game that asks which party wrote which policy.

## Language

**Chrome**:
The product’s own words: buttons, labels, titles, legal pages, and the source label on a card. Not party policy.
_Avoid_: copy, UI strings, chrome text (say "chrome")

**Source**:
The card footer link to the party’s published page. Labelled with the chrome word for source in the active language.
_Avoid_: reference, citation, original (in UI copy)

**Event**:
One election's board, game, and score dataset, reached at its own URL.
_Avoid_: site, instance, election (when you mean the URL and everything under it)

**Event vocabulary**:
Words that belong to one election rather than to the product: party names, and the census categories from that country's population standard. It lives with the event and is written only in the languages that event ships, so the Swedish categories are never translated into te reo and the Stats NZ categories are never translated into Swedish. Chrome, by contrast, is written in every language.
_Avoid_: putting a census category or party name in the chrome dictionaries

**Policy**:
A party's published claim, shown as a card with a stated face and, when we have something to add, our understanding.
_Avoid_: proposal, pledge, manifesto item, page (in card copy — say "the policy")

**Understanding**:
Our systems analysis of a policy, shown as the other face of the card. Not the party's claim. Omitted when the stated face already says everything we would add.
_Avoid_: interpretation, commentary, opinion, "what we read"

**Party**:
One of the political parties on the board.
_Avoid_: team, faction, side

**Category**:
A topic grouping that several parties have policies in, such as tax or health.
_Avoid_: cluster, theme, tag

**Round**:
One dealt trio of policies from the same category, with a target party to pick.
_Avoid_: question, hand, level

**Guess**:
The player's pick of which of the three policies belongs to the target party.
_Avoid_: answer, choice, vote

**Reveal**:
The moment after a guess when all three policies are shown with their parties named.
_Avoid_: solution, answer key

**Score**:
How many guesses the player has got right. The session score is this game as a total; a party score is how often they picked that party, and how many of those picks were right.
_Avoid_: points, high score, rating

**Background**:
The optional age range, origin or ethnicity, intended vote, and felt wealth a player may attach to a session score. Absent when they skip. New Zealand uses Stats NZ level-1 ethnicity. Sweden uses Statistics Sweden’s foreign/Swedish background and 10-year age classes.
_Avoid_: profile, demographics, census, survey, identity

**Origin**:
Statistics Sweden’s detailed foreign/Swedish background: born abroad, or born in Sweden classified by whether the parents were born in Sweden.
_Avoid_: ethnicity (on the Swedish event), race, heritage, nationality

**Felt wealth**:
The player's 1–10 rating of how wealthy they feel. Absent when they skip.
_Avoid_: income, class, SES, wealth

**Intended vote**:
The party the player says they plan to vote for, or that they are undecided, will not vote, or will vote for a party not on the board.
_Avoid_: preference, affiliation, support

**Score record**:
One anonymous row in the public dataset: a session score, each guess (the party picked and the target), and optional background. No name, account, cookie, or network identifier.
_Avoid_: submission, user, response, tracking event
