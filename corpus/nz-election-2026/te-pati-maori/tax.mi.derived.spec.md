---
type: spec
id: te-pati-maori-tax-derived
title: "Ka pānuitia te whakaaro tāke hei pūnaha: he ūnga, kāore anō he pūtake, he reiti rānei"
status: draft
updated: 2026-08-18
summary: Ki te kore he pūtake, he reiti, he paepae rānei, kāore e taea te tohu i te pūtea tāke, i te hunga rānei ka utu, nā reira kāore e taea te ine i te kerēme whakapau.
jurisdiction: NZ
sources:
  - title: Tax
    url: https://www.maoriparty.org.nz/tax
tags:
  - taxation
party: te-pati-maori
clusters:
  - tax-fiscal
money: no-figure
sourcePath: corpus/nz-election-2026/te-pati-maori/tax.md
derivesFrom: te-pati-maori-tax
assumptions:
  - "me noho \"ngā tino whai rawa\" hei paepae i runga i tētahi mea ka taea te ine i mua i te tāke i tētahi: te moni whiwhi, te rawa kupenga, tētahi tauwhitinga, tētahi kamupene rānei"
  - ko te pūtake rawa, taonga rānei, me aromatawai te uara, he utu whakahaere tērā kāore i whakahuatia e te kaupapa here
  - ko ngā wāhanga whakapau e whā kua whakaingoatia, kāore he wehewehenga, nā reira ka kerēmehia te pūtea e whā ngā wā kia kōwhiria rā anō tētahi
  - kāore e taea te whakataurite i tētahi whakaaro pūtea, kāore he reiti, ki ngā kaupapa here e whakaputa ana i te pūtake me te reiti
  - kāore mātou e tāpiri nama, nā te mea kāore he nama i te kaupapa here hei tīmatanga
sourceDigest: "sha256-29c40b17ec990303"
lang: mi
translationOf: te-pati-maori-tax-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-532836760d80cbac
---

# Tō mātou māramatanga

> E whakaarotia ana kia utua e te pūtea tāke mai i ngā tino whai rawa te whare noho, te hauora, te mātauranga me te tautoko whānau—engari kāore anō tētahi e mōhio ko wai ka tākehia, ki te aha te reiti, nā te mea kāore anō te pūtake me te paepae kia hangaia. Ka kerēme ngā ūnga whakapau e whā i te puna kotahi kia wehea rā anō e tētahi.

System: Ngā mea ka waiho e te pūtake tāke kāore i whakaingoatia, kāore anō kia whakatauria

Scenario: Me whakatau te kāwanatanga ko wai ngā tino whai rawa
Given he whakaaro kia nui ake te wāhanga e utua ana e ngā tino whai rawa
And kāore he paepae, he pūtake, he reiti rānei
When ka tuhia te kaupapa here
Then me kōwhiri he pūtake me tētahi paepae i mua i te tāke i tētahi
Outcome kāore e mōhiotia te hunga ka utu kia oti rā anō tērā kōwhiringa
But kāore anō tētahi kaipōti e mōhio mēnā kei roto rātou i te rōpū ka tākehia

Scenario: Ka kerēmehia te pūtea e ngā wāhanga whakapau e whā i te wā kotahi
Given kua whakaingoatia te whare noho, te hauora, te mātauranga me te tautoko whānau katoa hei ūnga
And kāore he wehewehenga i waenganui i a rātou
When ka tae mai te pūtea tāke
Then me whakatau ngā kerēme e whā ki te puna kotahi
Outcome mārama te ahunga
But kāore e mōhio te hunga whare noho, hauora, mātauranga, tautoko whānau hoki, he aha te wāhanga ka riro i tēnā, i tēnā
