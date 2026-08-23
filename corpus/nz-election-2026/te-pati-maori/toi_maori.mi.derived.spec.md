---
type: spec
id: te-pati-maori-toi-maori-derived
title: "Ka pānuitia te toi Māori hei pūnaha: te haumi auaha me ngā mōtika ahurea, kāore ngā nama i whakaingoatia"
status: draft
updated: 2026-08-21
summary: Ko te haumi ki te toi Māori me te tiaki i ngā mōtika ahurea e whakaingoa ana i tētahi ūnga; ki te kore he nama, he taputapu mōtika, he tūāhanga kua whakaingoatia rānei, kāore e taea te arowhai i te pūtea, i te tiaki rānei.
jurisdiction: NZ
sources:
  - title: Toi Māori
    url: https://www.maoriparty.org.nz/toi_maori
tags:
  - maori-affairs
party: te-pati-maori
clusters:
  - maori-affairs
money: no-figure
sourcePath: corpus/nz-election-2026/te-pati-maori/toi_maori.md
derivesFrom: te-pati-maori-toi-maori
assumptions:
  - ko te haumi ki te toi Māori me ngā ahumahi auaha Māori, me whai nama me tētahi ara mā ngā kaipūtea toi o nāianei, hou rānei
  - ko te tiaki i ngā mōtika ahurea me ngā whakapuakitanga Māori, me whai taputapu ture, kaupapa here rānei, ehara i te wawata anake
  - ko te tūāhanga toi, te pūtea me ngā ara nā te Māori e ārahi ana, me whai kaupapa kua whakaingoatia me tētahi mana whakatau
  - kāore mātou e tāpiri nama, nā te mea kāore he nama i te kaupapa here hei tīmatanga
sourceDigest: "sha256-ff1a676e69f762fa"
lang: mi
translationOf: te-pati-maori-toi-maori-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-b15ad75fbddeb194
---

# Tō mātou māramatanga

> Kua whakaingoatia te toi Māori me ngā ahumahi auaha Māori hei kaupapa matua, ā, e whakaarotia ana kia tiakina ngā mōtika ahurea mā te tūāhanga me ngā ara nā te Māori e ārahi ana—engari kāore anō he nama, he ara pūtea, he taputapu mōtika rānei kia kōwhiria. Ki te kore ēnei, kāore e mōhio ngā ringatoi he aha ka hangaia, ā, kāore he ture here e pā ana ki ngā kaikohi.

System: Te haumi auaha, kāore he pūtea, he ture mōtika rānei

Scenario: Ka haumitia te toi Māori me ngā ahumahi auaha
Given ko te toi Māori te kōrero pono, te ātete, te whakaora, te tuakiri me te taonga tuku iho
When ka haumitia te toi Māori me ngā ahumahi auaha Māori
Then me kōwhiri tonu he nama me tētahi ara pūtea
Outcome kua whakaingoatia te rāngai auaha hei kaupapa matua
But kia tau rā anō tētahi rārangi tahua, kāore e mōhio ngā ringatoi he aha ka pūteatia

Scenario: Ka tautokona ngā mōtika ahurea me te tūāhanga nā te Māori e ārahi ana
When ka tiakina ngā mōtika ahurea me ngā whakapuakitanga Māori
And ka tautokona te tūāhanga toi, te pūtea me ngā ara nā te Māori e ārahi ana
Then me kōwhiri tonu he taputapu mōtika me ngā kaupapa tūāhanga kua whakaingoatia
Outcome e whakaarotia ana kia kawea whakamua ngā kōrero i whakamūmia
But kia tū rā anō aua taputapu, ka noho te tiaki me ngā ara hei wawata
