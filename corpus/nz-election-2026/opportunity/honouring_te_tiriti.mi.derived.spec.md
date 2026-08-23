---
type: spec
id: opportunity-honouring-te-tiriti-derived
title: "Ko te Honouring Te Tiriti e pānuitia ana hei pūnaha: te whakakore kāore he whiti whakakapi, me te tuku mana kāore he pōti"
status: draft
updated: 2026-08-18
summary: Ko te whakakore i ngā pire e rua ka whakahoki i te ture o mua mēnā kei te mana tonu tērā ture; me whai te tuku mana o te hauora me te ture i tētahi hinonga ture, tētahi tahua, me tētahi raina kawenga kāore te kaupapa here e whakaingoa.
jurisdiction: NZ
sources:
  - title: Honouring Te Tiriti
    url: https://www.opportunity.org.nz/honouring_te_tiriti
tags:
  - maori-affairs
  - education
party: opportunity
clusters:
  - maori-affairs
money: no-figure
sourcePath: corpus/nz-election-2026/opportunity/honouring_te_tiriti.md
derivesFrom: opportunity-honouring-te-tiriti
assumptions:
  - ka hoki te pukapuka ture ki tērā i raro; ki te kua whakakapia kē tērā i raro, ehara te whakakore i te whakahoki katoa
  - ko te tuku mana "me ngā rauemi tūturu" he raina Tahua me tētahi hinonga ture; ki te kore ērā, he tohutohu ki ngā āpiha
  - ka whakataetae te whakatipu kaiako te reo ki te raina utu kaiako kotahi o te whārangi mātauranga
sourceDigest: "sha256-e84c190101ee0c03"
lang: mi
translationOf: opportunity-honouring-te-tiriti-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-0dcd5eed5511fd95
---

# Tō mātou māramatanga

> Ka whakakorea ngā ture e rua, ka huri te marautanga, ā, ka whakangungua ētahi atu kaiako te reo. Ko te tikanga o te tuku mana ka haere tahi me ngā rauemi tūturu. Me whai anō ngā hapū me ngā iwi i tētahi hinonga kaikawe me tētahi raina moni i mua i te taenga mai o aua rauemi, ā, kāore anō te "ōrite" i te tuhi anō i tētahi whakataunga kua hainatia.

System: Te whakakore me te tuku mana kāore te pito kaikawe

Scenario: Ka whakakorea ngā pire e rua
When ka whakakorea te Treaty Principles Bill me te whakatikatika Takutai Moana mēnā kua pāhi
Then ka hoki te ture i raro, ki te kore hoki tērā i te whakakapia
Outcome ko te whāinga o te kaupapa here he aukati i aua ture e rua
But ki te kore i pāhi, kāore he mahi a te oati

Scenario: Ka tukuna te hauora me te ture
When ka tukuna ngā ratonga ki te wāhi e taurite-kore ana ngā putanga
Then me pupuri tētahi i te moni me te kawenga tiaki
Outcome ko ngā hapū, ngā iwi, ngā rōpū Māori rānei ngā kaipupuri e tohua ana
But kei ngā āpiha tonu te moni me te kawenga tiaki kia whakaingoatia rā anō ngā hapū, ngā iwi, ngā rōpū Māori rānei
Activates opportunity-healthy-people
