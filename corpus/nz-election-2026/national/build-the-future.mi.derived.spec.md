---
type: spec
id: national-build-the-future-derived
title: "Ngā whakaaetanga arumoni e pānuitia ana hei pūnaha: ka neke te waitohu a te mīhini i te haepapa, ā, tērā pea ka hiakai ngā kaunihera i te pūtea utu mēnā he Building Consent Authority mātanga"
status: draft
updated: 2026-08-21
summary: Mā te whakamana i ngā tauākī kaihanga e neke te mōrearea tirotiro ki te mīhini, ā, ka taea e tētahi huarahi mātanga mō ngā mahi arumoni nui te kume i te pūtea utu i ngā kaunihera e arotahi ana ki te whare noho; kāore anō ēhea mahi e whai wāhi kia whakaingoatia.
jurisdiction: NZ
sources:
  - title: National to make it easier to build the future
    url: https://www.national.org.nz/build-the-future
tags:
  - infrastructure
  - economy
party: national
clusters:
  - tax-fiscal
money: no-figure
sourcePath: corpus/nz-election-2026/national/build-the-future.md
derivesFrom: national-build-the-future
assumptions:
  - ina mutu te tirotiro a te kaunihera i te mahi e waitohua ana e te mīhini, ka noho te haepapa mō ngā hapa ki te mīhini me tana kaipupuri inihua, kaua ki te kaunihera
  - ka whai te pūtea utu a te Building Consent Authority i te mahi; mā te neke i ngā whakaaetanga arumoni nui ki tētahi huarahi mātanga e heke tērā pūtea ki ngā kaunihera ā-rohe, ahakoa ka noho tonu ngā mahi whare noho
  - "he tapanga noa ngā kupu \"ētahi mahi hanga\" me ngā \"whare arumoni nui\" kia tāia te rārangi kawenga, nā reira kāore e taea e ngā kaiwhakawhanake me ngā kaunihera te utu i te panoni i tēnei wā"
  - kāore mātou e tāpiri nama tāra, nā te mea he hanganga te whakaputa i tētahi penapena, i tētahi ngaronga utu rānei
sourceDigest: "sha256-8a3d14bc14478ded"
lang: mi
translationOf: national-build-the-future-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-c86a34a68f2dd829
---

# Tō mātou māramatanga

> Mā te whakamana i ngā tauākī kaihanga e neke te haepapa hapa ki te mīhini me tana kaipupuri inihua ina wehe te tirotiro a te kaunihera. Ka taea e tētahi Building Consent Authority mātanga mō ngā mahi arumoni nui te kume i te pūtea utu i ngā kaunihera e arotahi ana ki te whare noho, ā, ka tuwhera tonu ēhea kaupapa e whai wāhi kia tāia tētahi rārangi kawenga.

System: Ngā panoni whakaaetanga arumoni hei neke haepapa me te utu

Scenario: Ka waitohu tētahi mīhini i te mahi kāore he tirotiro a te kaunihera
Given kua whakamahia kē ngā tauākī kaihanga hei whakatūturu i te hanganga ki te Building Code
When ka whakamanahia ngā tauākī kaihanga kia taea e ngā mīhini tohu te waitohu i ētahi mahi hanga, kāore he tirotiro a te kaunihera
Then kāore te kaunihera e tirotiro anō i tērā mahi i te wāhi
Outcome ka tau tuatahi ngā hapa o te mahi kua waitohua ki te mīhini me tana kapi
But ka pā tonu te whare ki ngā kaipupuri kāinga me ngā kairēti mēnā ka hē tētahi mea

Scenario: Ka neke ngā whakaaetanga arumoni nui ki tētahi huarahi mātanga
Given e whakaae ana ngā kaunihera ā-rohe i ngā mahi arumoni me ngā mahi whare noho i tēnei wā
When ka whakaae tētahi Building Consent Authority mātanga i ngā whare arumoni nui mā tētahi tukanga ā-motu kotahi
Then ka wehe te pūtea utu mō tērā mahi i te kaunihera ā-rohe
Outcome he wātea ake ngā kaunihera ki te arotahi ki ngā whakaaetanga whare noho me ngā whakaaetanga noa
But ka ngaro i ngā kaunihera e arotahi ana ki te whare noho te awa utu arumoni i āwhina ki te utu i te toa whakaae

Scenario: Ka pātai tētahi kaiwhakawhanake ēhea kaupapa e whai wāhi
When ka pānuitia te panoni Building Act me te huarahi mātanga, kāore he rārangi kawenga
Then ka noho tautuhi-kore ngā kupu "ētahi mahi hanga" me ngā "whare arumoni nui" i te kaupapa here
Outcome ka tatari ngā kaupapa nui ki tētahi hōtaka i mua i te taea o te whakamahere
But ka kawe ngā kaunihera me ngā kaiwhakawhanake i te kūaretanga mahere kia tau te rārangi kawenga
