---
type: spec
id: opportunity-healthy-land-derived
title: "Ko te Healthy Land e pānuitia ana hei pūnaha: he mākete taiao kāore he waeine"
status: draft
updated: 2026-08-18
summary: Ko te utu mō te kanorau koiora me whai waeine, kaihoko, me tētahi ture kia kaua e tatau rua; kāore ērā i te kaupapa here, nō reira he ingoa noa te mākete kia tae rā anō ērā.
jurisdiction: NZ
sources:
  - title: Healthy Land
    url: https://www.opportunity.org.nz/healthy_land
tags:
  - environment
  - agriculture
party: opportunity
clusters:
  - environment-rural
money: no-figure
sourcePath: corpus/nz-election-2026/opportunity/healthy_land.md
derivesFrom: opportunity-healthy-land
assumptions:
  - ehara te mākete taiao kāore he waeine, he rēhita, he kaihoko i te utu i tēnei wā; ka noho hei whakaaro noa
  - ka taea te tirotiro wai motuhake kāore he tari kua whakaingoatia te noho i roto i te kaiwhakahaere o nāianei, te hanga rānei i tētahi hou; he rerekē te pānga ki ngā kaipāmu
  - he tōmuri ake te utu o te ngahere taketake e mau tonu te uhi i te pine; me whai moni ngā kaipupuri whenua e huri ana i te wāhanga takarepa
sourceDigest: "sha256-e9b2ccac80561019"
lang: mi
translationOf: opportunity-healthy-land-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-b25d8f8166f2c8e8
---

# Tō mātou māramatanga

> He mākete taiao, he tirotiro wai motuhake, me te nui ake o te whakapau tiaki taiao — engari kāore i tautuhia te waeine kanorau koiora, te kaiarotake, me te pikinga tāra.

System: He mākete taiao kāore he waeine

Scenario: Ka utua tētahi kaipupuri whenua mō te kanorau koiora
When ka whakatuwheratia tētahi mākete taiao
Then me whai te utu i tētahi waeine ka taea te ine, tētahi kaihoko, me tētahi ture kia kaua e hokona rua te heketea kotahi
Outcome ko ngā repo me te ngahere taketake ngā toa kua whakaingoatia
But ka tatari utu-kore ngā kaipupuri whenua kia noho rā anō tētahi waeine, kaihoko, me tētahi ture aukati tatau-rua
Activates opportunity-climate-action

Scenario: Ka kaha ake ngā ture wai
Given e kore e taea te kaukau i te haurua o ngā awa
When ka tāpirihia te tirotiro motuhake
Then ka pā ki ngā pāmu me ngā tāone tētahi pae o raro wai kaha ake
Outcome ka taea te whakaora i ngā awa mēnā ka taea e te kaiarotake te aukati i tētahi tukunga
But ka pā tonu te tukunga ki ngā pāmu me ngā tāone kia whakatauria rā anō tētahi tari, tahua, me te whiu
