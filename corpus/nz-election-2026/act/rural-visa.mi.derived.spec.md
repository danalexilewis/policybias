---
type: spec
id: act-rural-visa-derived
title: "Te Rural Workforce Visa e pānuitia ana hei pūnaha: he tūpono kua hokona ki te neke iti"
status: draft
updated: 2026-08-21
summary: Ko ngā wā e toru tau me te noho i muri i ngā marama e whitu tekau mā rua e hoatu ana i tētahi awa tūmau ki ngā kaituku mahi pāmu, i te wā e here ana ngā kaimahi ki ngā kaituku mahi taiwhenua kua whakamanahia, e here ana i te wāhi ka neke.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/rural-visa
tags:
  - immigration
  - agriculture
party: act
clusters:
  - immigration
money: named-figure
sourcePath: corpus/nz-election-2026/act/rural-visa.md
derivesFrom: act-rural-visa
assumptions:
  - ko te piri ki ngā kaituku mahi taiwhenua kua whakamanahia, ehara i tētahi raina mapi, e here tonu ana i te neke: ko te whakawhiti i waenga i ngā kaituku mahi taiwhenua kua whakamanahia anake, ehara ki te mahi ehara-taiwhenua
  - ko tētahi wā e toru tau kāore he whakahou waenganui-wā e neke ana i te mana whiriwhiri ki ngā kaituku mahi e whakahaere ana i te whakamana me te tuku anō
  - ko te noho i muri i ngā marama e whitu tekau mā rua kua kohia e utu ana i te noho i te hongere taiwhenua here; ko te wehe i tērā hongere ka tautuhi anō, ka aukati rānei i te ara
  - ko te whakawātea utu tāpiri mō tēnei visa e tango ana i te utu takoha-tika i tēnei ara i te wā e pā tonu ana ētahi atu visa taupua
sourceDigest: "sha256-f9872f1407506d8e"
lang: mi
translationOf: act-rural-visa-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-e74e3109ba5ad88e
---

# Tō mātou māramatanga

> Ka tapahia e te Rural Workforce Visa te hātepe, ā, ka karo i ngā rohe whenua, engari ka neke ngā kaimahi i waenga i ngā kaituku mahi taiwhenua kua whakamanahia anake, ehara ki ngā rāngai ehara-taiwhenua — ka herea te neke e te whakamana, ehara e tētahi taiapa ā-rohe. Kua whakaputaina te tūpono mō ngā pāmu me tētahi karaka noho i muri i ngā marama e whitu tekau mā rua; ko te utu-neke ko te here.

System: Te Rural Workforce Visa hei mahi here me tētahi karaka noho

Scenario: Ka whakakī tētahi kaituku mahi taiwhenua kua whakamanahia i tētahi tūranga puta noa i te tau
Given ka whakaputa ngā pāmu, ngā māra hua me ngā waka hī ika o Aotearoa i te $60 billion i ngā kaweake ia tau
And kāore ngā ara wāhanga-tau e hipoki i ngā tūranga pāmu puta noa i te tau
When ka tukuna te Rural Workforce Visa mō te mahi miraka, hipi me te kau, te mahi pāmu whānui rānei
Then ka whiwhi te kaituku mahi i tētahi kaimahi maha-tau kāore he whakahou ā-tau i roto i te wā
Output an initial three-year term with no renewal required within that period
And before the visa term ends employers readvertise and if no suitable New Zealander is available the visa is reissued for a further three years
Outcome ka taea ngā tūranga taiwhenua puta noa i te tau te whakakī me te iti ake o te hurihanga visa
But ka here tonu te tūnga o te kaimahi ki te mahi taiwhenua kua whakamanahia

Scenario: E hiahia ana tētahi kaipupuri visa ki te wehe i te mahi taiwhenua
Given ka piri te visa ki ngā kaituku mahi taiwhenua kua whakamanahia, ehara ki tētahi rohe
And ka taea e ngā kaimahi te whakawhiti ki tētahi atu kaituku mahi taiwhenua kua whakamanahia kāore he tono hou
When ka rapu te kaimahi i tētahi mahi i waho o ngā rāngai taiwhenua
Then kāore te visa e tuku i tērā neke
Output workers may transfer to any other accredited rural employer without a new application but cannot move to non-rural sectors
Outcome ka whiwhi ngā hapori taiwhenua i ngā kaimahi hei putanga māketi o tērā here
But ka mutu ngā kōwhiringa whiriwhiri a te kaimahi ki te raina taiwhenua kua whakamanahia

Scenario: Ka rere te karaka noho
Given tētahi awa ahuwhenua hou i te Work to Residence Visa
When kua pupuri te kaimahi i tētahi RWV mō ngā marama e 72 kua kohia ki tētahi kaituku mahi kua whakamanahia, ā, ka tutuki ngā here paerewa
Then ka tuwhera te āheinga noho
Output 72 cumulative months with an accredited employer as the residence threshold
Outcome ka utua te mahi taiwhenua tūmau ki tētahi ara ki te noho
But kāore te wā i waho o te hongere here e neke i tērā karaka
