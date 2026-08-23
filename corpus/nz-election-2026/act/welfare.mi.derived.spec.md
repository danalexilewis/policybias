---
type: spec
id: act-welfare-derived
title: "Te whakahou tautoko pūtea e pānuitia ana hei pūnaha: te kēti tohu me te whakahaere whakapau"
status: draft
updated: 2026-08-21
summary: Ka kati ngā tākuta kua tohua i ngā tautoko pūtea e pā ana ki te hauora, ā, ka huri ngā kāri utu here i muri i ngā marama e whā i te tautoko Jobseeker ki te whakapau kua whakahaerehia ki ngā mea taketake kua whakaingoatia.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/welfare
tags:
  - social-welfare
party: act
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/act/welfare.md
derivesFrom: act-welfare
assumptions:
  - ko te neke mai i ngā tākuta kua tohua tūao ki te here e neke ana i te mana tohu mai i te tohunga noa o te tangata ki tētahi puna kua whakaaetia e Te Manatū Whakahiato Ora
  - ka whakaiti ngā paearu tōtika i te whakaaro, engari kāore te kaupapa here e whakaputa i aua paearu, nā reira kāore e mōhiotia te pakeke o te kēti
  - ko te whakahaere moni hiko i muri i ngā marama e whā he whakahaere i te whakapau: ko te kāri e whakatau ana i tā te tautoko pūtea e taea te hoko
  - ko te aukati i te waipiro, te petipeti, te tupeka me ngā tango moni te taputapu kua whakaputaina o tērā whakahaere; ko ngā wehewehenga te kōwhao haumaru kua kīia
sourceDigest: "sha256-f85cf88a49d77c09"
lang: mi
translationOf: act-welfare-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-6cb6fc4850a77a47
---

# Tō mātou māramatanga

> E rua ngā wāhi whakahaere ngā tākuta kua tohua me ngā kāri utu: ko wai e tohu ana i ngā tautoko pūtea e pā ana ki te hauora, me tā te moni Jobseeker roa e taea te hoko. Ko te hanga i ngā taputapu tūao hei here te rerekētanga; ko te whakahaere moni hiko he whakahaere whakapau.

System: Te tautoko pūtea hei kēti tohu me te whakahaere whakapau

Scenario: Ka haere ngā tautoko pūtea hauora me te hauā mā ngā tākuta kua tohua
Given kei te noho kē tētahi kōwhiringa tākuta-kua-tohua engari kāore i here
When ka noho here ngā aromatawai mā tētahi puna kua whakaaetia e Te Manatū Whakahiato Ora
Then ka taea e te GP, e te tohunga rānei o te tangata te tuku i te hītori me te taunakitanga, engari ko te tākuta kua tohua motuhake e tuku ana i te whakatau tautoko pūtea
Output assessments made against clear objective criteria rather than discretion alone
And existing Jobseeker Support Health Condition or Disability and Supported Living Payment recipients reassessed on a phased basis beginning with mental-health-related grants made after the pandemic
Outcome ka taea ngā whakaritenga roa te noho mō te hauā, ngā āhuatanga hauora rānei tūturu, tūmau
But ka huri ināianei te uru ki ngā tautoko pūtea e pā ana ki te hauora ki te kēti tākuta-kua-tohua

Scenario: Ka hipa tētahi kaipupuri Jobseeker Support Work Ready i ngā marama e whā
Given kei a Aotearoa kē te whakahaere moni hei kōwhiringa i ētahi āhuatanga
When ka noho te kaipupuri ki tētahi tautoko pūtea mō te nui ake i ngā marama e whā
Then ka tukuna te tautoko pūtea mā tētahi kāri utu hiko e anga ana ki ngā mea taketake
Outcome ka taea te kai, te rēti, te hiko, te kawe waka, te hauora me te tiaki tamariki te toro i runga i te kāri
But ka aukatia te waipiro, te petipeti, te tupeka me ngā tango moni, nā reira kāore te tautoko pūtea e mahi anō hei moni kāore e herea

Scenario: Ka tūtaki te whakahaere moni ki tētahi mōrearea haumaru, hiahia rānei
Given ngā wehewehenga me ngā whakaritenga kua whakarerekētia ki ngā wāhi e mōrearea ai te whakahaere moni i te haumaru, e ārai rānei i te uru ki ngā mea e hiahiatia ana
When ka puta tērā tūkino i tētahi ture kāri paerewa
Then ka taea tētahi whakaritenga kua whakarerekētia te pā
Outcome kei te pūnaha whakahaere tētahi kōwhao haumaru kua kīia
But ko te taunoa i muri i ngā marama e whā he whakahaere hiko i te whakapau, ehara i te moni tuwhera
