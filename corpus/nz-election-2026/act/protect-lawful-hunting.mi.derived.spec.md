---
type: spec
id: act-protect-lawful-hunting-derived
title: "Te hopu kararehe tika e pānuitia ana hei pūnaha: ka noho te whakararuraru mōrearea-haumaru hei hara takahanga, kāore te mautohe"
status: draft
updated: 2026-08-21
summary: Ka hipoki ngā hara takahanga motuhake i te tū i te raina pū o te kaihopu tika me te whakararuraru waka rererangi i ngā pupuhi manu-hākinakina; ka tika tonu te whakahē kāore taua whakararuraru, ā, kāore ngā nui whaina i whakaputaina.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/protect-lawful-hunting
tags:
  - crime-and-justice
  - environment
party: act
clusters:
  - crime-justice
money: no-figure
sourcePath: corpus/nz-election-2026/act/protect-lawful-hunting.md
sourceDigest: "sha256-01def310ad58270a"
derivesFrom: act-protect-lawful-hunting
assumptions:
  - ka utu tētahi hara takahanga i te ārai ā-raina-pū i whakaarotia hei takahanga haumaru, ehara i te kōrero mautohe noa
  - ka kitea te whakararuraru waka rererangi nā te drone, nā te helicopter rānei hei whakakino i tētahi pupuhi tika, hei mōrearea hoki i te rangi me te whenua
  - ka wātea tonu ngā tāngata ki te whakahē i te hopu kararehe; ko te raina ko te whakararuraru e hanga mōrearea, ehara i te whakahē ki te hopu
  - ki te kore ngā nui whaina, ngā ture kite, tētahi paerewa taunakitanga rānei e whakaputaina, kāore e mōhiotia te taumaha ārai o ngā hara; kāore mātou e hanga i tētahi nama tāra
lang: mi
translationOf: act-protect-lawful-hunting-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-e287f60fd5bdf845
---

# Tō mātou māramatanga

> Ka hipoki ngā hara takahanga i te tū ā-whakaaro ki te raina pū o te kaihopu tika me te whakamahi i ngā drone, i ngā helicopter rānei ki te whakararuraru i ngā kaipupuhī manu-hākinakina. Kāore he taipitopito mō ngā nui whaina, ngā paerewa taunakitanga, me te āhua e kitea ai te whakararuraru waka rererangi.

System: He hara takahanga mō te whakararuraru mōrearea-haumaru, ehara mō te whakahē

Scenario: Ka tū ā-whakaaro tētahi ki te raina pū o te kaihopu tika
Given ka taea ngā kaihopu e mahi haumaru ana, i roto i te ture, te ārai ā-whakaaro e ngā tāngata ka takahi ki te raina pū kāore he hara takahanga motuhake
When ka noho te tū ā-whakaaro ki te raina pū o te kaihopu tika hei hara takahanga
Then ka mau tērā whanonga i tētahi hua ā-ture motuhake
Outcome kāore ngā kaihopu e tūmanakohia ana ki te whai i ngā ture haumaru kaha e whakangoikoretia e te ārai ā-whakaaro
But he iti te ārai ka riro i ngā kaihopu kia whakatauhia ngā whaina me ngā paerewa taunakitanga

Scenario: Ka whakamahia ngā drone, ngā helicopter rānei ki te whakararuraru i tētahi pupuhi manu-hākinakina
Given ka taea ngā drone, ngā helicopter rānei te whakamahi ki te whakararuraru i ngā kaipupuhī manu-hākinakina mā te whakamarara, te whakateretere rānei i ngā manu, he iti te rongoā ā-ture
When ka hangaia tētahi hara takahanga mō te whakamahi i ngā drone, i ngā helicopter rānei ki te whakararuraru i ngā kaipupuhī manu-hākinakina
Then ka utua te whakamarara, te whakateretere rānei i ngā manu hei whakakino i tētahi pupuhi tika hei hara
Outcome ka whiwhi te whakararu manu me te mōrearea rangi-whenua i tētahi whakautu ā-ture kua whakaingoatia
But me whai tonu te whakamana i tētahi huarahi ki te hono i te waka rererangi me te whakaū i te whakaaro ki te whakararuraru

Scenario: Ka kauwhau tētahi ki te hopu kararehe kāore e tomo ki te raina pū, kāore e rere i tētahi waka rererangi whakararuraru
When ka hangaia ngā hara takahanga motuhake mō te ārai raina-pū me te whakararuraru waka rererangi
Then ka wātea tonu te whakahē e noho ana i waho o aua whanonga
Outcome ka anga ngā hara ki te whakararuraru e whakatū mōrearea i ētahi atu, ehara ki te whakahē ki te hopu kararehe
But ka tautohetia te raina i waenga i te mautohe e tata ana ki tētahi pupuhi me te ārai, take mā take, kia tau ai te tikanga
