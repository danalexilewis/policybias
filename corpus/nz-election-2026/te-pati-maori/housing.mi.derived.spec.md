---
type: spec
id: te-pati-maori-housing-derived
title: "Te whare noho e pānuitia ana hei pūnaha: hanga tūmatanui me te whenua Māori, kāore he taputapu hokohoko tārahu"
status: draft
updated: 2026-08-21
summary: Mā te nui ake o ngā whare tūmatanui, me te māmā ake o te hanga i runga i te whenua Māori, e tū ai tētahi ara tuku, engari kāore he taputapu i whakaingoatia mō te mahi ki te hokohoko tārahu me ngā rawa wātea, nō reira kāore e mōhio ngā kaipupuri he aha ka huri mō rātou.
jurisdiction: NZ
sources:
  - title: Housing
    url: https://www.maoriparty.org.nz/housing
tags:
  - housing
party: te-pati-maori
clusters:
  - family-income
money: no-figure
sourcePath: corpus/nz-election-2026/te-pati-maori/housing.md
derivesFrom: te-pati-maori-housing
assumptions:
  - Ko te hanga i ētahi anō whare tūmatanui, whare utu taea hoki, me whai rahi hōtaka, kaipūtea, rōpū tuku hoki; kāore tētahi i te kaupapa here
  - Ko te whakangāwari i te hanga i runga i te whenua Māori, whenua tīpuna hoki, ko te huri i ngā ture whakamahere, mana noho, pūtea rānei; kāore te kaupapa here e kī ko tēhea
  - Ko te aukati i te hokohoko tārahu me ngā pupuri wātea, he tāke, he rīhi here, he ture whakamahia-ngaro-rānei, tētahi atu rānei; he rerekē te pānga i te taputapu
  - kāore mātou e kōkiri nama, nā te mea kāore he nama i te kaupapa here hei mahi
sourceDigest: "sha256-cd97193f14d894d8"
lang: mi
translationOf: te-pati-maori-housing-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-83d89b0d956def14
---

# Tō mātou māramatanga

> Mā te nui ake o ngā whare tūmatanui, whare utu taea hoki, me te māmā ake o te hanga i runga i te whenua Māori, whenua tīpuna hoki, e whakangāwari te pēhanga ki ngā whānau—engari e wātea ana te rahi hanga, te ranunga momo noho, me te kaiutu. Me whai tāke, rīhi here, ture whakamahia-ngaro-rānei rānei te mahi ki te hokohoko tārahu me ngā rawa wātea i mua i te mōhio o ngā kaipupuri he aha te utu o te pupuri whenua kau.

System: Te tuku me te whenua Māori, kāore i whakaingoatia te taputapu aukati hokohoko tārahu

Scenario: Ka oati ētahi anō whare tūmatanui, whare utu taea hoki
Given ngā rārangi tatari, te kōpī, me te hokohoko tārahu hei tūnga o nāianei o te kaupapa here
And kāore he whāinga hanga, he tahua rānei
When ka hangaia, ka tautokona ētahi anō whare tūmatanui, whare utu taea hoki
Then me kōwhiri tonu te rahi, te ranunga momo noho, me te kaiutu
Outcome ka taea e ētahi anō whare te whakangāwari i te pēhanga ki ngā whānau
But kāore e mōhio ngā whānau i ngā rārangi tatari e hia ngā whare ka tae mai, he aha rānei te utu hanga

Scenario: Ka whakangāwarihia te hanga i runga i te whenua Māori, whenua tīpuna hoki
Given te whakaaro ki te whakangāwari i te hanga i runga i te whenua Māori, whenua tīpuna hoki
And kāore he huringa ture i whakaingoatia
When ka rapu tētahi whānau ki te hanga
Then me tautuhi, me hiki ngā ārai whakamahere, pūtea, mana noho rānei
Outcome ka taea e te whenua te manaaki i ētahi anō whare mō tōna iwi
But kia whakaingoatia rā anō ngā ārai, he wawata noa te māmā o te hanga

Scenario: Ka mahia te hokohoko tārahu me ngā rawa wātea
Given te whakaaro ki te aukati i te hokohoko tārahu me te penapena whenua, tae atu ki ngā rawa wātea
And kāore he tāke, he utu, he ota here, he taputapu kē rānei
When ka pupuri tētahi kaipupuri i te whenua kau, ka penapena rānei
Then kāore e mōhiotia te hua mō tērā kaipupuri kia kōwhiria rā anō tētahi taputapu
Outcome ko te hokohoko tārahu te whāinga kua whakaingoatia
But kāore e mōhio ngā kaihaumi, ngā tarahiti, me ngā kaipupuri whenua whānau he aha te utu o te pupuri whenua kau
