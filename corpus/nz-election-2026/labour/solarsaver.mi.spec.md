---
type: spec
id: labour-solarsaver
title: "Pūtea SolarSaver, ngā tautoko, me ngā pūhiko hapori"
status: draft
updated: 2026-08-21
summary: Pūtea hiko rā e tautokona ana e te kāwanatanga, kāore he utu tīmata, tautoko tīmata tae atu ki te $3,000, me tētahi tahua pūhiko hapori $30 million i roto i ngā tau e whā.
jurisdiction: NZ
sources:
  - title: Solar without the Upfront Cost
    url: https://www.labour.org.nz/solarsaver
tags:
  - energy
  - climate
  - cost-of-living
party: labour
clusters:
  - energy-power
money: named-figure
sourcePath: corpus/nz-election-2026/labour/solarsaver.md
sourceDigest: "sha256-9de7372ece2acc96"
gaps:
  - kāore i whakapuakina ngā reiti huamoni mō ngā pūtea a ngā kamupene raina me te Ratepayer Assistance Scheme
  - kāore i whakapuakina ngā paepae moni whiwhi mō te tautoko tīmata
  - kāore i āta tohua ngā ture ōrite pūtea pūhiko hapori, i tua atu i te haurua pūtea tae atu ki te $200,000 mō ia kaupapa
  - kāore i āta whakaahuatia ngā huringa waeture mō te hiko rā tūmomo mō ngā kaipupuri rēti, i tua atu i te whakatika waeture
  - kāore i whakapuakina te tukanga ture mō te whakamahi anō i te tahua Gas Security
lang: mi
translationOf: labour-solarsaver
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-bd7516546335d8c4
---

# Ko tā te whārangi e kī ana

> Mā te pūtea wā roa, huamoni iti, e tautokona ana e te kāwanatanga, ka taea e ngā kāinga te tāmata hiko rā kāore he utu tīmata, ā, he iti iho ngā utu whakahoki i ngā penapena pire hiko. Ka āwhina tētahi tautoko tīmata i ngā kāinga moni iti me te waenga, tae atu ki ngā kaipupuri rēti me ngā papa tūmomo. Ka tautoko tētahi tahua pūhiko hapori i ngā kāinga kāore he papa i runga tuanui.

System: SolarSaver

Scenario: Ka tāmata tētahi kaipupuri kāinga i te hiko rā mā te SolarSaver
Given tata ki te $20,000 te utu o tētahi pūnaha hiko rā me te pūhiko auau
When ka tukuna te SolarSaver
Then he pūtea wā roa, huamoni iti, e tautokona ana e te kāwanatanga, kāore he utu tīmata
Output tautoko tīmata tae atu ki te $3,000 mō ngā kāinga moni iti me te waenga
And tahua pūhiko hapori $30 million
And $160 million kua pūteatia katoatia i roto i ngā tau e whā
And $77 million mō ngā tautoko kāinga i roto i ngā tau e whā
And $22 million mō te tuku a Te Tari Tiaki Pūngao i roto i ngā tau e whā
And $20 million tautoko a te Karauna mō ngā pūtea a ngā kamupene raina
And $7 million ki te whakatū i te Ratepayer Assistance Scheme
And $4 million mō te whakarite kaimahi i roto i ngā tau e whā
And ka whakatauria ngā utu whakahoki ki raro i ngā penapena pire hiko
Outcome nō te kaipupuri kāinga te pūnaha mai i te rā tuatahi
Activates labour-apprenticeshipboost
