---
type: spec
id: green-manifesto-2026-income-derived
title: "Ko te mahere moni whiwhi e pānuitia ana hei pūnaha: ngā tautoko pūtea e ora ai te tangata, e utua ana e tētahi tāke rawa kāore he inenga kua whakaingoatia"
status: draft
updated: 2026-08-21
summary: He kerēme whakapaunga tūmau ngā tautoko pūtea e ora ai te tangata me te whakahou toko i te ora; ko te tāke 2.5% i te rawa toenga nui ake i te $10 million te kaiputea kua whakaingoatia, engari kāore i tēnei kaupapa here te tikanga ine i taua rawa.
jurisdiction: NZ
sources:
  - title: Income
    url: https://www.greens.org.nz/manifesto_2026_income
tags:
  - social-welfare
  - taxation
  - cost-of-living
party: green
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/green/manifesto_2026_income.md
derivesFrom: green-manifesto-2026-income
assumptions:
  - ka hangaia e te whakapiki i ngā tautoko pūtea ki ngā taumata e ora ai te tangata me te whakakore i ngā whiu tētahi kerēme tahua tūmau me utu ia tau, ehara i te takoha kotahi
  - mā te whakaingoa i tētahi tāke 2.5% i te rawa toenga nui ake i te $10 million hei utu i te kōpaki ka noho taua tāke hei kaiputea; kāore tēnei kaupapa here e tā i te huarahi moni whiwhi
  - me whai tikanga inenga tētahi tāke rawa-toenga i mua i te taea o te aromatawai i tētahi tangata; kāore tēnei kaupapa here e whakaingoa i tētahi
  - he ahunga anake ngā huringa tāke moni whiwhi ā-taumata i tēnei kaupapa here; kei te whārangi tāke motuhake ngā taumata me te nui kore tāke
sourceDigest: "sha256-239f5c3f950c1468"
lang: mi
translationOf: green-manifesto-2026-income-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-0d19a07e76d772b2
---

# Tō mātou māramatanga

> Ka piki ngā tautoko pūtea ki ngā taumata e ora ai te tangata, ka mutu ngā whiu, ā, ko te tāke 2.5% i te rawa toenga nui ake i te $10 million te tikanga e utua ai te kōpaki. Ko taua tāke te kaiputea kua whakaingoatia o tētahi pire ā-tau tūmau. Me whai ture inenga ngā rawa i mua i te taea o te aromatawai i tētahi.

System: Ngā tautoko pūtea e ora ai te tangata, e utua ana e tētahi tāke rawa

Scenario: Ka piki ngā tautoko pūtea ki ngā taumata e ora ai te tangata, ka mutu ngā whiu
When ka piki ngā tautoko pūtea ki ngā taumata e ora ai te tangata, ā, ka whakakorehia ngā whiu
Then kei te Karauna tētahi whakawhiti haere tonu nui ake ki te hunga e tautokona ana
Outcome ka taea e te hunga e tautokona ana te kapi i ētahi atu mea taketake i te tautoko pūtea anō
But ka riro i te Karauna tētahi pire ā-tau kāore he mutunga ina piki ngā taumata, ka mutu ngā whiu

Scenario: Ka kitea te tāke rawa hei kaiputea
Given tētahi tāke 2.5% i te rawa toenga nui ake i te $10 million
When ka utua ngā moni whiwhi e ora ai te tangata me te whakahou toko i te ora mā te mea ka utu tō rātou wāhi tika te hunga ruarua taonga
Then ka noho te kerēme moni whiwhi ki runga i taua tūāpapa rawa
Output te tāke 2.5% i te rawa toenga nui ake i te $10 million
Outcome e whakawhirinaki ana ngā tautoko pūtea e ora ai te tangata ki te moni whiwhi o te tāke rawa
But kāore e taea te tāke i ngā kāinga nui ake i te $10 million kia tauira rā anō a Te Tai Ōhanga i te hua

Scenario: Me ine te rawa toenga i mua i te aromatawai
Given tētahi tāke i te rawa toenga nui ake i te $10 million
And kāore he tikanga inenga i tēnei kaupapa here
When ka tuhia te tāke kia kohia
Then me ine ngā rawa i mua i te taea o te aromatawai i tētahi
Outcome kāore he pire mā tētahi nui ake i te $10 million kia taea rā anō te ine i ngā rawa
But kei te aro tonu ngā kāinga taonga ki tētahi maimoatanga kāore i te mōhiotia mō ngā kāinga, ngā pakihi me ngā tarahiti
Activates green-tax-system-for-all
