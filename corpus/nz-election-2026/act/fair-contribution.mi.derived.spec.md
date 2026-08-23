---
type: spec
id: act-fair-contribution-derived
title: "Te utu tāpiri hanganga e pānuitia ana hei pūnaha: ka tau ki te kaimahi, ki te nama utu rānei"
status: draft
updated: 2026-08-21
summary: Ka whakaara te utu tāpiri o ia rā i tētahi awa moni kua whakaingoatia, engari ko wai ka utu ka hāngai ki te tango a te kaituku mahi i te utu, te tuku rānei ki ngā kaimahi taupua.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/fair-contribution
tags:
  - immigration
  - infrastructure
party: act
clusters:
  - immigration
money: named-figure
sourcePath: corpus/nz-election-2026/act/fair-contribution.md
derivesFrom: act-fair-contribution
assumptions:
  - ka tau tuatahi te utu tāpiri e piri ana ki te visa ki te kaimahi taupua ki te kore te kaituku mahi e utu, e whakahoki rānei
  - ka taea e ngā kaituku mahi e hiahia ana ki te kaimahi te tuku i te utu ki ngā utu, ngā utu hoko, ngā utu utu kaimahi rānei; kāore te kaupapa here e whakatau ko ēhea
  - ko te kohikohi ā-tau kua whakaputaina te rahi o te kaupapa here i te utu o ia rā kua kīia, ehara i te mahere whakapau mō te hanganga
  - kāore te noho māmā ake i ngā visa o Ahitereiria me te United Kingdom e kī ana kāore he utu tāpiri mō te kaimahi o Aotearoa
sourceDigest: "sha256-0f6efd430410ae38"
lang: mi
translationOf: act-fair-contribution-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-5ff449ce4d69b0d8
---

# Tō mātou māramatanga

> Ka kīia te utu tāpiri he koha tika ki te hanganga mai i te rā tuatahi, i te wā e noho māmā ake ana ngā visa ōrite i ērā o Ahitereiria me te United Kingdom. Ka tau te utu ki ngā kaimahi taupua ki te kore ngā kaituku mahi e tango, e tuku rānei mā te whiriwhiri utu. Kua whakaputaina te utu o ia rā me te kohikohi ā-tau.

System: Te utu tāpiri visa mahi taupua hei pātai nō wai te utu

Scenario: Ka kawea e te kaimahi taupua te utu tāpiri
Given ka taea e ngā kaimahi taupua te whakamahi i ngā rori me ngā ratonga tūmatanui mai i te taenga mai i mua i te nui o te tāke Aotearoa e utua ana
When ka tāpirihia te utu tāpiri hanganga ki runga i ngā utu visa o nāianei
Then ka nui ake te utu tomo me te noho mō te kaimahi ki te kore tētahi atu e utu
Output $6 per day infrastructure surcharge on temporary work visas
And around $80 million a year expected revenue at that rate
Outcome ka tīmata te koha mai i te rā tuatahi i te whenua
But ka taea e te utu kawe ki te kāinga, ngā penapena rānei te heke mā te utu o ia rā

Scenario: E hiahia ana te kaituku mahi ki te kaimahi taupua
Given kāore e kitea e ngā kaituku mahi ia nēhi, mīhini pūmanawa, kaimahi pāmu rānei e hiahiatia ana i roto i te taupori pakeke-mahi tata ki te toru miriona
When ka noho te utu tāpiri ki te visa e tautokona ana e te kaituku mahi
Then ka taea e te kaituku mahi te tango, te whakahoki ki te kaimahi, te waiho rānei mā te kaimahi e utu
Outcome ka haere tonu te utu kaimahi ina uaua te whakakī i te tūranga i te kāinga
But ka heke te utu kawe ki te kāinga a te kaimahi, te nama utu a te kaituku mahi rānei hei utu i te utu tāpiri

Scenario: Ka tae mai te moni, kāore he mahere whakapau
Given tata ki te $80 million ā-tau e tūmanakohia ana i te utu kua kīia
When ka kohia te utu tāpiri
Then ka whiwhi te Karauna i tētahi awa kua whakaingoatia mō te hanganga
Outcome e kīia ana ka noho māmā ake tonu ngā visa ōrite i ērā o Ahitereiria me te United Kingdom
But kāore he wāhanga kua oati mō ngā rori, ngā whare noho me ngā ratonga kia tohatoha te Tahua i te moni
