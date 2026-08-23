---
type: spec
id: te-pati-maori-takat-pui-derived
title: "Ka pānuitia a Takatāpui hei pūnaha: te oranga me ngā ratonga kauawhi, kāore ngā taputapu i whakaingoatia"
status: draft
updated: 2026-08-21
summary: Ko te tiaki i te oranga o te takatāpui, me te here i ngā ratonga tūmatanui kia kauawhi, e whakaingoa ana i te whāinga; ki te kore he ture, he paerewa, he taputapu kawenga rānei, kāore e taea te whakamana i te tiaki, i te kauawhi rānei.
jurisdiction: NZ
sources:
  - title: Takatāpui
    url: https://www.maoriparty.org.nz/takat_pui
tags:
  - social-welfare
party: te-pati-maori
clusters:
  - health-access
money: no-figure
sourcePath: corpus/nz-election-2026/te-pati-maori/takat_pui.md
derivesFrom: te-pati-maori-takat-pui
assumptions:
  - ko te tiaki i te oranga, te haumaru me te mana, me mātua whai taputapu ture, hōtaka rānei kua whakaingoatia i mua i te here i ngā tari
  - ko ngā ratonga tūmatanui kauawhi, wātea, kawenga hoki, me whai paerewa me tētahi ara whakamana
  - ko te kawenga ki te kore he ture amuamu, arotake, whiu rānei, he tapanga anake ki ngā ratonga o nāianei
  - kāore mātou e tāpiri nama, nā te mea kāore he nama i te kaupapa here hei tīmatanga
sourceDigest: "sha256-2d791458b297b5f6"
lang: mi
translationOf: te-pati-maori-takat-pui-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-68605380b52ffff8
---

# Tō mātou māramatanga

> Ko te oranga, te haumaru me te mana o te takatāpui ngā whāinga kua whakaingoatia, ā, me kauawhi, me wātea, me kawenga ngā ratonga tūmatanui—engari kāore anō he ture, he paerewa, he ara amuamu, he whiu rānei e here ana i ngā tari. Ki te kore aua taputapu, ka noho te kauawhi hei pai noa, ehara i te here ka taea e tētahi te whakamana.

System: Te oranga, kāore te taputapu whakamana

Scenario: Me tiaki te oranga, te haumaru me te mana
Given e tika ana kia whai haumaru, mana, koa me te noho katoa mai ngā takatāpui Māori
When ka tiakina te oranga, te haumaru me te mana o ngā takatāpui Māori
Then me kōwhiri tonu he taputapu ture, hōtaka rānei
Outcome ko te noho ora, kāore he whakatoihara, te whāinga
But ki te kore tērā taputapu, kāore ngā tari e herea ki tētahi kawenga hou

Scenario: Me kauawhi, me kawenga ngā ratonga tūmatanui
When ka meatia ngā ratonga tūmatanui kia kauawhi, kia wātea, kia kawenga
Then me whakaingoa tonu ngā paerewa me tētahi ara kawenga
Outcome e whakaarotia ana kia mutu te pana a ngā ratonga i te tangata ki ngā taha
But kia tū rā anō aua ture, ka noho te kauawhi hei pai noa, ehara i te here
