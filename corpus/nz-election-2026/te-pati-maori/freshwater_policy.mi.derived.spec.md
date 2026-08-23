---
type: spec
id: te-pati-maori-freshwater-policy-derived
title: "Te wai māori e pānuitia ana hei pūnaha: whakaaetanga Māori, kāore i whakaingoatia te tuari hua"
status: draft
updated: 2026-08-21
summary: Mā te whakapūmau i te mana Māori me te tono whakaaetanga e huri ai nā wai e whakaae ngā whakatau wai, engari kāore he tuari i whakaingoatia mō te tuari hua tika, nō reira kāore anō kia mōhiotia ko wai ngā kaiwini arumoni, hapori hoki.
jurisdiction: NZ
sources:
  - title: Freshwater Policy
    url: https://www.maoriparty.org.nz/freshwater_policy
tags:
  - environment
  - maori-affairs
party: te-pati-maori
clusters:
  - maori-affairs
money: no-figure
sourcePath: corpus/nz-election-2026/te-pati-maori/freshwater_policy.md
derivesFrom: te-pati-maori-freshwater-policy
assumptions:
  - Me whai āhua ture te mana Māori ki te wai māori, he mana pupuri, he mana whakahaere tahi, he mana aukati, tētahi atu rānei; ka whakapūmau te kaupapa here i te mana, kāore e kōwhiri i te āhua
  - Ko te whakaaetanga e taea ai te aukati i tētahi whakatau, me whai huinga whakatau kua tautuhia, me tētahi rōpū whakaae; ki te kore ērā, kāore i oti te kī me te kore whakaaetanga Māori
  - Ko te tuari hua tika, he utu rawa, he toha kore utu, he hea, he pūtea hapori rānei; he rerekē te pānga i te hoahoa, ā, kāore he tuari i whakapuakina
  - kāore mātou e kōkiri nama, nā te mea kāore he nama i te kaupapa here hei mahi
sourceDigest: "sha256-c613257c7b24fad0"
lang: mi
translationOf: te-pati-maori-freshwater-policy-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-36cb9470e900d4a7
---

# Tō mātou māramatanga

> Mā te mana Māori ki te wai māori e huri nā wai e whakaae ngā tango, ngā tuku, ngā toha—engari e wātea tonu ana te mana pupuri, te mana whakahaere tahi, me te mana aukati hei āhua ture. Me whai huinga whakatau kua tautuhia, me tētahi rōpū whakaae te whakaaetanga; me whai tuari, tātai, momo kaiwhiwhi rānei te tuari hua tika i mua i te mōhio o ngā pānga arumoni, hapori hoki nā wai e utu, nā wai e whiwhi.

System: Te mana whakaae, kāore i whakaingoatia te tuari o ngā hua

Scenario: Ka whakapūmautia ngā mōtika me te mana Māori ki te wai māori
Given te wai e kawe ana i te whakapapa, e whāngai ana i te whenua me ngā whakatupuranga
And kāore he tikanga ture i whakaingoatia
When ka whakapūmautia te mana Māori
Then me kōwhiri tonu te mana pupuri, te mana whakahaere tahi, te mana aukati, tētahi atu āhua rānei
Outcome ka taea ngā whakatau mō te wai te noho ki te hunga nāna te kawenga
But kia kōwhiria rā anō te āhua, he kī noa te mana, kāore he kōkiri

Scenario: Kāore e taea ngā whakatau te haere me te kore whakaaetanga Māori
Given te whakaaro kia kaua ngā whakatau e mahia me te kore whakaaetanga Māori
And kāore he rārangi o ēhea whakatau, ā, kāore he rōpū whakaae
When ka whakaarohia tētahi tango wai, tuku, toha rānei
Then me taea e tētahi te tuku, te pupuri rānei i te whakaaetanga
Outcome ka taea e te Māori te aukati, te tuku rānei i ngā whakamahi kua tohua mēnā kei te tū tērā mīhini
But ki te kore, he wawata noa te whakaaetanga

Scenario: Ka tuaritia ngā hua i runga i te tika
Given te whakaaro kia tiakina ngā rawa, kia tuaritia tika ngā hua
And kāore he tuari, he tātai, he momo kaiwhiwhi rānei
When ka hangaia e te wai tētahi uara arumoni, hapori rānei
Then me whakatau tonu e hia e haere ana ki ēhea pānga Māori, tauiwi hoki
Outcome ko te tuari tika te hua kua whakaingoatia
But kāore e mōhio ngā kaiwhakamahi arumoni me ngā hapori Māori nā wai e utu, nā wai e whiwhi
