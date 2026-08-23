---
type: spec
id: te-pati-maori-education-training-derived
title: "Te mātauranga me te whakangungu e pānuitia ana hei pūnaha: mana aratakina e te Māori, kāore ngā aukati i whakaingoatia hei tāra"
status: draft
updated: 2026-08-21
summary: Mā te mana mātauranga aratakina e te Māori, me te tāmau i te mātauranga, e huri ai nā wai e urungi te ako, engari kāore ngā aukati mō ngā whānau i whakaingoatia hei utu, haerenga, tiaki tamariki, utu kē rānei, nō reira kāore e taea te utu i te wewete.
jurisdiction: NZ
sources:
  - title: Education & Training
    url: https://www.maoriparty.org.nz/education_training
tags:
  - education
party: te-pati-maori
clusters:
  - maori-affairs
money: no-figure
sourcePath: corpus/nz-election-2026/te-pati-maori/education_training.md
derivesFrom: te-pati-maori-education-training
assumptions:
  - Me whai ture, tahua, me tētahi rohe ki ngā rōpū kura me ngā rōpū mātauranga matua o nāianei tētahi mana mātauranga aratakina e te Māori; kāore tētahi o ērā i te kaupapa here
  - Ko te tāmau i te mātauranga Māori puta noa i te ako, me whai kōwhiringa marau, kaimahi, aromatawai hoki; kāore te kaupapa here e ine i ērā
  - Ko ngā aukati e arai ana i ngā whānau, he utu, he waka, he tiaki tamariki, he ture uru, he kaikiri rānei i roto i ngā tari; kia whakaingoatia rā anō, kāore e taea te tātai utu
  - kāore mātou e kōkiri nama, nā te mea kāore he nama i te kaupapa here hei mahi
sourceDigest: "sha256-1086630fd4733d5b"
lang: mi
translationOf: te-pati-maori-education-training-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-25e3149a2805029d
---

# Tō mātou māramatanga

> Mā tētahi mana mātauranga aratakina e te Māori e huri nā wai e urungi te ako, ā, ka rere te mātauranga Māori i te marau me te whakaako—engari kāore anō te mana kia whai ture, tahua, rohe rānei ki ngā rōpū o nāianei. Ko ngā aukati e arai ana i ngā whānau, he utu, he haerenga, he tiaki tamariki, he kaikiri tari rānei; kia whakaingoatia, kia tātaihia rā anō ia mea, kāore e taea te tātai ki te Tahua te wewete.

System: Te mana me te mātauranga, kāore ngā aukati i utua

Scenario: Ka hangaia tētahi mana mātauranga aratakina e te Māori
Given te mātauranga me whakakaha i te tuakiri, me whakarite i te Māori kia ārahi hei Māori
And kāore he hanganga, he pūtea rānei mō te mana
When ka hangaia te mana mātauranga aratakina e te Māori, me ngā otinga
Then me whakatau tonu te mana whakahaere ki ngā kura, te whakangungu, te mātauranga matua, me te kaiutu
Outcome ko te urungi aratakina e te Māori te hoahoa kua whakaingoatia
But ki te kore ērā kōwhiringa, kāore e taea e te mana te whakahaere

Scenario: Ka tāmua te mātauranga Māori puta noa i te ako
Given te whakaaro ki te tāmau tika i te mātauranga
When ka huri te marau me te whakaako
Then me hoahoa ki tētahi wāhi te ihirangi, te āhei o ngā kaiako, me te aromatawai
Outcome ka taea e te ako te pupuri i te tuakiri mēnā ka pūteatia, ka whakakaimahitia tērā mahi
But ki te kore he tahua kaimahi, kāore e taea e ngā kura te utu i ngā kaiako e hiahiatia ana e te mātauranga

Scenario: Ka wewetea ngā aukati e arai ana i ngā whānau
Given ngā aukati e arai ana i te mātauranga me te whakangungu
And kāore he rārangi o ēhea aukati, ā, kāore he nama tāra
When ka wewetea ngā aukati
Then me tautuhi tuatahi te utu me te kaipupuri o ia aukati
Outcome ka taea te whakawhānui i te uru ina whakaingoatia, ina tutuki ērā utu
But kia whai nama tāra, kaipupuri hoki ia aukati, kāore e taea e ngā āpiha te tātai ki te Tahua te wewete
