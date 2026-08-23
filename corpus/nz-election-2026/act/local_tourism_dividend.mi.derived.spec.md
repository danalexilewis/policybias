---
type: spec
id: act-local-tourism-dividend-derived
title: "Ko te Local Tourism Dividend e pānuitia ana hei pūnaha: ka nekehia te pūtea tāpoi ā-motu ki ngā kaunihera"
status: draft
updated: 2026-08-21
summary: He tohatoha anō te Dividend i te whakawhiwhinga tāpoi o nāianei ki ngā kaunihera, ehara i te utu manuhiri hou, i te whakapau hou ā-Karauna rānei.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/local_tourism_dividend
tags:
  - infrastructure
  - economy
party: act
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/act/local_tourism_dividend.md
derivesFrom: act-local-tourism-dividend
assumptions:
  - ko te pūtea mai i te whakawhiwhinga tāpoi o nāianei te tikanga ka ngaro i ngā hōtaka tāpoi ā-motu ngā tāra ka riro i ngā kaunihera; he tohatoha anō tēnei, ehara i te moni hou
  - ko ngā tapeke kaunihera kua whakaputaina te rahi o te kaupapa here mō tērā neke, i runga i ngā pō ā-manuhiri 2026
  - ko te whakakapi i te pūtea reiti kua whakapauhia kētia ki ngā ratonga e tika ana ka neke i te pire ā-rohe i ngā kaipupuri reiti ki te rārangi tāpoi ā-Karauna kua tohatohatia anō
  - ki te kore he tāke moenga hou, kāore ngā utu manuhiri e kawe i tētahi utu ā-rohe tāpiri mō tēnei Dividend
sourceDigest: "sha256-945c5ee5fe3df118"
lang: mi
translationOf: act-local-tourism-dividend-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-3b8b34427d8fe77a
---

# Tō mātou māramatanga

> Ka hoki te moni manuhiri ki ngā kaunihera manaaki, kāore he tāke moenga hou, engari ka ahu mai te moni i te whakawhiwhinga tāpoi o nāianei — ka ngaro i te whakapau tāpoi ā-motu tā ngā kaunihera e riro. Ko te utu pō-ā-manuhiri me ngā tapeke kaunihera te rahi kua whakaputaina o tērā neke.

System: Ko te Local Tourism Dividend hei tohatoha anō i te whakawhiwhinga tāpoi

Scenario: Ka manaaki tētahi kaunihera i ngā pō manuhiri arumoni
Given te pēhanga manuhiri ki ngā rori ā-rohe, te wai para, ngā wharepaku tūmatanui, te kohikohi para me ngā whakaurunga noho-kore-utu
And te kohikohi a te kāwanatanga pokapū i te tāke hokohoko (GST) me te International Visitor Levy
When ka tukuna tētahi utu ā-tau aunoa mō ia pō manuhiri arumoni i te rohe o te mana whenua
Then ka whiwhi te kaunihera i te tautoko e ōrite ana ki ngā pō e manaaki ana
Output $1 mō ia pō manuhiri arumoni ā-whare, ā-ao rānei kua rēhita i te rohe o tētahi mana whenua
And tata ki te $40.6 million ā-tau ki ngā kaunihera i runga i ngā pō ā-manuhiri 2026, tae atu ki te $8.2 million mō Tāmaki Makaurau, $4.9 million mō Queenstown me te $2 million mō Rotorua
Outcome ka taea te pūtea i ngā ratonga ā-rohe e pā ana ki te manuhiri mai i te Dividend
But ka whai te utu i ngā pō manuhiri kua rēhitatia, nā reira ka iti ake te riro o ngā wāhi mārie

Scenario: Ka utua te Dividend e te whakawhiwhinga tāpoi o nāianei
Given te pūtea mai i te whakawhiwhinga tāpoi o nāianei, ehara i te tāke moenga hou
When ka utua te Dividend
Then ka ngaro i te whakapau tāpoi ā-motu ngā tāra ka riro i ngā kaunihera
Output tata ki te $40.6 million ā-tau ki ngā kaunihera i runga i ngā pō ā-manuhiri 2026
Outcome kāore he tāke moenga hou e tāpirihia ki te pire hōtēra
But ka whakataetae ngā hōtaka i utua i mua mai i tērā whakawhiwhinga mō tētahi puna iti ake

Scenario: Ka whakakapi tētahi kaunihera i te pūtea reiti ki te Dividend
Given ka taea pea e te Dividend te whakakapi i te pūtea reiti kua whakapauhia kētia ki ngā ratonga e tika ana
When ka whakamahia e te kaunihera te utu pērā
Then ka taea te heke o te pūtea kaipupuri reiti mō aua ratonga
Outcome ka taea te māmā ake o te pīkaunga ā-rohe ki ngā kaipupuri reiti ki te wāhi ka whakakapi
But ko te nui o te āwhina anake te nui o te utu pō-ā-manuhiri ka riro i te kaunihera
