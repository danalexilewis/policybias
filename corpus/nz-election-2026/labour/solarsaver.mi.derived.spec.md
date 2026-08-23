---
type: spec
id: labour-solarsaver-derived
title: "Ko te SolarSaver e pānuitia ana hei pūnaha: ka piki ngā pūnaha pūtea i te nama kāinga, ā, ka tautoko te Karauna i te tūraru"
status: draft
updated: 2026-08-21
summary: Ka pūteatia tētahi pūnaha angamaheni nā reira ka piki te nama kāinga; ka herea ngā utu-anō ki raro i ngā penapena ki ngā utu hiko; he tūraru ā-Karauna te tautoko a te Karauna; ka whiwhi ngā kairēti i ngā kete kuhuku, ehara i te mana tuku iho tuanui.
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
derivesFrom: labour-solarsaver
assumptions:
  - ko te pūtea i tētahi pūnaha angamaheni, kāore he utu tīmata, te tikanga ka tango te kāinga i te nama ōrite ki te utu kua pūteatia
  - ko ngā utu-anō ki raro i ngā penapena pire hiko he kerēme e tū ana anake i te wā e mau ana ngā utu me te whakamahi i ngā penapena ki runga ake i te huarahi utu-anō
  - ka whakatakoto te tautoko a te Karauna mō ngā pūtea kamupene raina i te tūraru nama toe ki te Karauna ina takahia e ngā kaipupuri nama
  - he kete kawe ngā papahiko kuhuku mō ngā kairēti, ehara i te mana tuku iho tuanui kua pūteatia o te whare
sourceDigest: "sha256-9de7372ece2acc96"
lang: mi
translationOf: labour-solarsaver-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-2f7a88132017ba67
---

# Tō mātou māramatanga

> Ko te pūtea kāore-he-utu-tīmata te tikanga ka piki te nama kāinga me te pūtea, ā, ka tū ngā utu-anō ki raro i ngā penapena pire anake i te wā e whakatuwhera ana ngā utu me te whakamahi i te āputa. Ka whakatakoto te tautoko a te Karauna i te tūraru nama toe ki te taha tūmatanui, ā, ka whiwhi ngā kairēti i ngā kete kuhuku, ehara i te mana tuku iho tuanui kua pūteatia.

System: Te pūtea SolarSaver, te tautoko me te huarahi kairēti

Scenario: Ka pūtea tētahi kaipupuri whare i tētahi pūnaha tuanui angamaheni
Given he $20,000 pea te utu o tētahi pūnaha pūngao rā me te pūhiko angamaheni
When ka pūteatia te pūnaha, kāore he mea hei utu i te tīmatanga
Then ka piki te nama a te kāinga i te rahi kua pūteatia
Outcome nō te kāinga te pūnaha mai i te rā tuatahi
But ka noho te pūtea ki te kāinga kia utua rā anō

Scenario: Ka whakatakotoria ngā utu-anō ki raro i ngā penapena pire
Given ngā utu-anō ki raro i ngā penapena pire hiko
When ka huri ngā utu, te whakamahi rānei, i muri i te whakaurunga
Then ka taea te whakaiti, te hurihanga rānei, o te āputa i waenga i ngā penapena me ngā utu-anō
Outcome ka herea te pai ake ia marama ki te huarahi utu, ehara anake i te tuku pūtea

Scenario: Ka tautoko te Karauna i ngā pūtea kamupene raina, ka tango ngā kairēti i te kuhuku
Given he tautoko $20 million a te Karauna mō ngā pūtea kamupene raina
And he $1,500 pea te utu o tētahi kete paparua
When ka takahia tētahi pūtea kamupene raina, ka whakamahi rānei tētahi kairēti i ngā papahiko kuhuku
Then ka mau te Karauna i te tūraru tautoko i te huarahi pūtea
And ka whiwhi te kairēti i tētahi kete kuhuku, ehara i te mana tuku iho tuanui
Output $20 million Crown underwrite for lines company loans
Outcome ka taea e ngā kaipupuri whare te mana i ngā pūnaha tuanui kua pūteatia mai i te rā tuatahi
But ko te huarahi a ngā kairēti he kuhuku, ehara i te mana pūtea o ngā papahiko i runga i te tuanui
