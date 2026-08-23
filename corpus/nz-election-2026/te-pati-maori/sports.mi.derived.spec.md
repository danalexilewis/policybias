---
type: spec
id: te-pati-maori-sports-derived
title: "Ka pānuitia ngā hākinakina hei pūnaha: te haumi hapori me ngā ara rangatahi, kāore ngā nama i whakaingoatia"
status: draft
updated: 2026-08-21
summary: Ko te haumi ki ngā karapu, ngā hōtaka me ngā whakaurunga e whakaingoa ana i te wāhi kawe; ki te kore he nama, he whakaarotau, he tari rānei, kāore e taea te ine te rahi, te raupapa rānei i te haumi.
jurisdiction: NZ
sources:
  - title: Sports
    url: https://www.maoriparty.org.nz/sports
tags:
  - other
party: te-pati-maori
clusters:
  - family-income
money: no-figure
sourcePath: corpus/nz-election-2026/te-pati-maori/sports.md
derivesFrom: te-pati-maori-sports
assumptions:
  - ko te haumi ki ngā kaupapa hākinakina me ngā kaupapa hapori he rārangi tahua kia whakaingoatia rā anō he nama me tētahi kaipūtea
  - ko ngā ara rangatahi mā ngā karapu, ngā hōtaka me ngā whakaurunga, me mātua whai rārangi whakaarotau me tētahi tari kawe
  - he hua te noho mai me te oranga; ehara i te whakakapi mō ngā whāinga uru, whakaurunga rānei
  - kāore mātou e tāpiri nama, nā te mea kāore he nama i te kaupapa here hei tīmatanga
sourceDigest: "sha256-9240d954a4e7780a"
lang: mi
translationOf: te-pati-maori-sports-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-cd90aaa84a1f976c
---

# Tō mātou māramatanga

> E oatihia ana ki ngā rangatahi he ara mā ngā karapu, ngā hōtaka me ngā whakaurunga, engari kāore anō kia kōwhiria ko ēhea karapu ka haere tuatahi, ko wai ka kawe, he aha rānei te utu. Kāore e taea e Te Tai Ōhanga te ine i te whakapau; kāore e taea e ngā whānau te tono i tētahi hōtaka kāore anō kia tū.

System: Ngā hākinakina hapori, kāore he rārangi tahua

Scenario: Ka haumitia ngā kaupapa hākinakina me ngā kaupapa hapori
Given ka hangaia e ngā hākinakina te noho mai, te ngākau titikaha, te hautūtanga me te hononga mō ngā rangatahi
When ka haumitia ngā kaupapa hākinakina me ngā kaupapa hapori e hanga ana i te noho mai, te oranga me te āheinga
Then me kōwhiri tonu he nama me tētahi kaipūtea
Outcome ka taea pea e ngā rangatahi te whiwhi hākinakina hapori nui ake
But kia tohua rā anō e Te Tai Ōhanga tētahi rārangi, kāore e taea e tētahi te ine i te whakapau

Scenario: Ka rere ngā ara rangatahi mā ngā karapu ā-rohe
When ka tautokona ngā ara mō ngā rangatahi mā ngā karapu ā-rohe, ngā hōtaka me ngā whakaurunga
Then ka noho kāore i whakaingoatia ko ēhea karapu, wāhi hoki ka whakaarotauhia, ko wai hoki ka kawe
Outcome e whakaarotia ana kia whai tūrangawaewae ngā rangatahi
But kia tū rā anō ngā whakaarotau me tētahi tari, he tūmanako te ara, ehara i te hōtaka
