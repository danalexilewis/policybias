---
type: spec
id: nz-first-break-up-the-supermarket-duopoly-derived
title: "Ko te wehe toa hokomaha e pānuitia ana hei pūnaha: ka wehea a Foodstuffs, ka noho kotahi a Woolworths, ā, he kitenga te hua nui rawa, ehara i te penapena"
status: draft
updated: 2026-08-21
summary: Ko Foodstuffs anake ka wehea ki ngā rōpū mahi tahi e rua e whakataetae ana; ka noho a Woolworths hei kaiwhakataetae kotahi, ehara ngā taumata whiu i te moni whiwhi e tūmanakohia ana, ā, he kitenga a te Commerce Commission te $1 million ia rā nui rawa, ehara i te penapena hokomaha e oatihia ana.
jurisdiction: NZ
sources:
  - title: Break up the Supermarket Duopoly
    url: https://www.nzfirst.nz/break_up_the_supermarket_duopoly
tags:
  - cost-of-living
  - economy
party: nz-first
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/nz-first/break_up_the_supermarket_duopoly.md
derivesFrom: nz-first-break-up-the-supermarket-duopoly
assumptions:
  - ka hanga te wehe i a Foodstuffs ki ngā rōpū mahi tahi e rua, me te waiho i a Woolworths kia ora, i ngā rōpū hokomaha ā-motu e toru mai i te rua, engari ko tētahi taha anake o te duopoly ka whati ā-hanganga
  - ko ngā whaina tae atu ki te $10 million, kia toru te nui o te hua, te 10% rānei o te huringa, he whiu nui rawa mō ngā takahanga taumaha, ehara i te matapae moni ka hoki ki ngā kaihoko
  - ko te kitenga a te Commerce Commission e tata ana ki te $1 million ia rā i ngā hua nui rawa, he whakaahuatanga o te āhua o nāianei, ehara i te nama tāra ka oati tēnei ture ki te tuku hei penapena
  - ka taea e ngā ture uru pāmu-ki-te-whata te toha anō i te wāhi whata me te kore he ara utu kua tāia mō ngā hokomaha
sourceDigest: "sha256-ce79d1034ee679f4"
lang: mi
translationOf: nz-first-break-up-the-supermarket-duopoly-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-9908835729a7c63c
---

# Tō mātou māramatanga

> Ka wehea a Foodstuffs mā te waitohu ki ngā rōpū mahi tahi e rua, ka noho kotahi a Woolworths, nō reira ko tētahi taha anake o te duopoly ka whati. E ōrite ana ngā taumata whiu ki a Ahitereiria; ko te nama hua nui rawa $1 million ia rā he kitenga a te Commerce Commission mō tēnei rā, ehara i te penapena e oatihia ana i te tēnehe.

System: Ko te wehe hokomaha kōtaha me ngā taumata whakahaere

Scenario: Ka wehea a Foodstuffs, ka noho kotahi a Woolworths
Given e whakahaere ana a Woolworths me Foodstuffs i neke atu i te 80 percent o te mākete hokomaha
When ka wehe te ture i a Foodstuffs ki ngā rōpū mahi tahi ā-motu e rua mā te waitohu
Then ka whakataetae a New World me Four Square hei rōpū mahi tahi kotahi, a Pak'nSave hei tētahi anō, ngā mea e rua ki te taha o Woolworths New Zealand
Outcome ka whakakapi ngā kaiwhakataetae hokomaha ā-motu e toru i tētahi monopolī waitohu a te taha Foodstuffs i raro i tētahi rōpū mahi tahi
But kāore a Woolworths e wehea, nō reira ko tētahi taha anake o te duopoly ka whakahāngaitia anō

Scenario: Ka pānuitia te kitenga hua nui rawa hei kī mō te āhua o nāianei
Given kua kite te Commerce Commission e whiwhi ana ngā toa hokomaha nui i te tata ki te $1 million ia rā i ngā hua nui rawa
When ka mana te wehe me ngā mana whakahaere
Then ko te tikanga ka huri te whanonga nā te pēhanga whakataetae me ngā whiu nui ake
Outcome ko ngā utu, te wāriu me te whakahaere kaiwhakarato ngā wāhi pēhanga e whāia ana
But ka noho te nama $1 million ia rā hei kitenga mō te nui rawa o nāianei, ehara i te penapena e oatihia ana i te tēnehe

Scenario: Ka pōhēhētia ngā taumata whiu hei whakawhiti ki ngā kaihoko
Given ngā whaina tae atu ki te $10 million, kia toru te nui o te hua, te 10 percent rānei o te huringa mō ngā takahanga taumaha
When ka whakawākia tētahi takahanga taumaha
Then ka taea te whakauru i tētahi whaina tae atu ki aua taumata
Output ngā whaina tae atu ki te $10 million, kia toru te nui o te hua, te 10 percent rānei o te huringa mō ngā takahanga taumaha
Outcome he koi ake ngā niho o te whakahaere i ngā mana whakatūpato anake
But ehara tētahi taumata i te matapae moni ka hoki ki ngā kāinga i te tēnehe
