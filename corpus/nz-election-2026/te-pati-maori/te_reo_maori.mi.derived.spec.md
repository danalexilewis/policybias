---
type: spec
id: te-pati-maori-te-reo-maori-derived
title: "Ka pānuitia te reo Māori hei pūnaha: ngā ara me te kawenga a te kāwanatanga, kāore te pūtea i whakaingoatia"
status: draft
updated: 2026-08-21
summary: Ko te whakakaha i te reo mā ngā ara ako me te kawenga tiaki a te kāwanatanga e tohu ana i te ahunga, engari kāore i whakaingoatia te pūtea mō ngā ara me te whakarauora, nā reira kāore e taea te ine i te rahi o te whakaritenga, i te utu kawenga rānei.
jurisdiction: NZ
sources:
  - title: Te Reo Māori
    url: https://www.maoriparty.org.nz/te_reo_maori
tags:
  - maori-affairs
  - education
party: te-pati-maori
clusters:
  - maori-affairs
money: no-figure
sourcePath: corpus/nz-election-2026/te-pati-maori/te_reo_maori.md
derivesFrom: te-pati-maori-te-reo-maori
assumptions:
  - ko ngā ara ako me te whakarauora nā te hapori e ārahi ana, me whai kaiako, wāhi, hōtaka hoki; he utu ō ēnei, kāore i whakapuakina e te kaupapa here
  - ko te whakanoho noa i te reo ki ngā wāhi katoa, ka taea te tikanga ko te whakamahi i te ratonga tūmatanui, te kura, te pāpāho, ngā tohu rānei; he rerekē te āhua pūtea o tēnā, o tēnā
  - "ko te pīkau i te kāwanatanga mō te tiaki i te reo, me whai tikanga: he ture, he kawenga pūrongo, he paepae pūtea rānei; kāore tētahi i whakaingoatia e te kaupapa here"
  - kāore mātou e tāpiri nama, nā te mea kāore he nama i te kaupapa here hei tīmatanga
sourceDigest: "sha256-9b7c31b133a39d75"
lang: mi
translationOf: te-pati-maori-te-reo-maori-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-ca7fb3625ec96747
---

# Tō mātou māramatanga

> Me whai kaiako, wāhi, hōtaka hoki ngā ara ako me te whakarauora ā-hapori; ka pā pea te whakanoho noa i te reo ki te ratonga tūmatanui, te kura, te pāpāho, ngā tohu rānei—he rerekē te āhua utu o tēnā, o tēnā. Ko te pīkau i te kāwanatanga me whai ture, kawenga pūrongo, paepae pūtea rānei, ā, kāore anō tētahi o ēnei kia kōwhiria.

System: Ngā ara me te kawenga, kāore he tahua kua whakaingoatia

Scenario: Ka haumitia ngā ara ako i te reo
Given ko te reo te tuakiri, te mahara, te mana me te oranga
And kāore he nama pūtea mō ngā ara
When ka haumitia ngā ara ako me te whakarauora nā te hapori e ārahi ana
Then me utua ngā kaiako, ngā wāhi me ngā hōtaka i tētahi wāhi
Outcome ka taea ngā ara te tupu mēnā ka tae mai te pūtea
But kia pūteatia rā anō ngā ara, kāore e mōhio ngā kaumātua me ngā rangatahi e hia ngā karaehe, ngā wāhi rānei e tū ana

Scenario: Ka whakakahangia, ka whakanoho noatia te reo ki ngā wāhi katoa
Given he whakaaro kia noho noa te reo ki ngā wāhi katoa
And kāore he rārangi wāhanga, inenga rānei
When ka whāia te noho noa
Then me kōwhiri te ratonga tūmatanui, te kura, te pāpāho, ētahi atu wāhanga rānei
Outcome ko te whakamahi whānui ake te whāinga kua whakaingoatia
But ki te kore he wāhanga, he pūtea hoki, ka noho te noho noa hei wawata

Scenario: Ka pīkauhia te kāwanatanga mō te tiaki i te reo
Given he whakaaro kia kawenga te kāwanatanga mō te tiaki i te reo Māori
And kāore he ture, he kawenga pūrongo, he paepae pūtea rānei
When ka rahua te tiaki
Then me kōwhiri tonu te āhua o te kawenga
Outcome ko te kawenga a te kāwanatanga te paerewa kua whakaingoatia
But ki te kore he tikanga, kāore e taea e ngā whānau te whakamana i te kawenga, te ine rānei i te utu o te tiaki
