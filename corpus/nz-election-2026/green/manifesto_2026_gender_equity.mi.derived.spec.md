---
type: spec
id: green-manifesto-2026-gender-equity-derived
title: "Ko te ōritetanga ira e pānuitia ana hei pūnaha: ka tāpae te ture utu, wehenga me te tūkino, i te wā e noho ingoakore ana Best Start me ngā reiti wehenga"
status: draft
updated: 2026-08-21
summary: Ka noho te ōritetanga utu, Best Start whānui i raro i te toru, me te 15 marama wehenga mātua i te taha o te ture mana-pehi, engari kāore i tāia ngā reiti utu me ngā tāra Best Start, ā, ka inaki te wehenga ki te upoko ohumahi.
jurisdiction: NZ
sources:
  - title: Gender Equity
    url: https://www.greens.org.nz/manifesto_2026_gender_equity
tags:
  - employment
  - healthcare
  - social-welfare
party: green
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/green/manifesto_2026_gender_equity.md
derivesFrom: green-manifesto-2026-gender-equity
assumptions:
  - ko te 15 marama wehenga mātua i tēnei kaupapa here te tikanga kotahi ki tērā o te whārangi tika ohumahi, ehara i te tika tuarua
  - ko Best Start kua toro ki ia tamaiti i raro i te toru he moni whiwhi tau tuatahi whānui, kāore he rahi utu i tāia
  - ka kati te whakahoki i te ōritetanga utu me te pūrongo i ngā āputa mēnā ka tīmata anō ngā kerēme, ā, ka huri tūturu te māramatanga i ngā reiti utu
  - ko te whakawhiu i te mana-pehi ka huri i te Crimes Act; kāore e utua e tērā anake ngā ratonga tūkino ā-whānau me te tūkino ā-moe o mua
sourceDigest: "sha256-816e9fffb6ea638a"
lang: mi
translationOf: green-manifesto-2026-gender-equity-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-27c10c4939cf61c2
---

# Tō mātou māramatanga

> Ka whakahokia te ōritetanga utu, ka rere Best Start ki ia tamaiti i raro i te toru, ka piki te wehenga mātua ki te 15 marama, ā, ka tango te Crimes Act i te mana-pehi me te whakaae. Kāore i utua i konei ngā reiti wiki o Best Start me te wehenga. E rite ana te wehenga ki te upoko tika-ohumahi — kotahi ture, e rua ngā wāhi. Ka huri te ture mana-pehi i tā e kīia ana he hara; me whai anō ngā ratonga tūkino ā-whānau me te tūkino ā-moe i ō rātou ake rārangi Tahua.

System: Ka tāpaea te utu, te moni whiwhi tau tuatahi, te wehenga me te ture tūkino

Scenario: Ka noho Best Start hei mea whānui mō ia tamaiti i raro i te toru
Given kua piki, kua toro hoki Best Start ki ia tamaiti i raro i te toru hei tautoko pūtea tamariki whānui
And kāore he rahi utu i te kaupapa here
When kei tētahi kāinga tētahi tamaiti i raro i te toru
Then ka whiwhi tērā tamaiti i a Best Start kāore he whakamātautau rawa i tēnei kaupapa here
Outcome ka taea e ia kāinga he tamaiti i raro i te toru te tango i a Best Start
But me whakatakoto anō e Te Tai Ōhanga te reiti utu i mua i te mōhio o tētahi ki te tāpiri wiki
Activates green-manifesto-2026-childen

Scenario: Ka piki te wehenga mātua ki te 15 marama i runga i ngā tikanga kotahi ki ngā tika ohumahi
Given e piki ana te wehenga mātua utu ki te 15 marama mō te kaitiaki matua
And te wehenga hoa kua tāwhitia me ngā utu kua piki
When kei te mana te ture wehenga
Then ka taea e te kaitiaki matua te tango 15 marama
Output 15 marama wehenga mātua utu mō te kaitiaki matua
Outcome ka taea e ngā kaitiaki matua te tango i te 15 marama kotahi ki tērā o te upoko ohumahi
But e whakawhirinaki tonu ana te pūkoro utu o tētahi i te wā wehenga ki tētahi reiti kāore tēnei upoko e tā
Activates green-manifesto-2026-workforce-rights

Scenario: Ka whakawhiua te mana-pehi, i te wā e rawa motuhake ana ngā ratonga FV me SV
When ka whakawhiu te Crimes Act i te mana-pehi, ā, ka whakahou i te whakaae, tae atu ki te aukati i te whakaae kua kore e hiahia
And ka rawa ngā otinga tūkino ā-whānau me te tūkino ā-moe kaupapa Māori, e ārahi ana te hapori
Then ka whakaingoa te ture i ngā hara hou me ngā ture whakaae
Outcome ka taea e ngā morehu te tohu ki ngā ture mana-pehi me te whakaae i te Crimes Act
But ka tatari ngā ratonga tūkino ā-whānau me te tūkino ā-moe o mua ki ngā rārangi Tahua kāore tēnei huringa hara e utu
Activates green-manifesto-2026-violence-prevention
