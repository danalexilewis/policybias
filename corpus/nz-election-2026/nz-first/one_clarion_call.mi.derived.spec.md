---
type: spec
id: nz-first-one-clarion-call-derived
title: "Ko te KiwiSaver here e pānuitia ana hei pūnaha: ngā reiti e piki ana me ngā tapahi tāke kāore i whakaingoatia me tētahi hinonga pupuri rawa kāore i whakaingoatia"
status: draft
updated: 2026-08-21
summary: Ka piki ngā koha ki te waru, kātahi ki te tekau ōrau, engari kāore ngā tapahi tāke i rahi, nā reira kāore e mōhiotia te pānga utu, ā, ko te huri i a KiwiSaver hei hinonga pupuri rawa ka waiho te rangatiratanga me te whakahaere kāore i āta tohua.
jurisdiction: NZ
sources:
  - title: "Speech: One Clarion Call"
    url: https://www.nzfirst.nz/one_clarion_call
tags:
  - superannuation
  - employment
party: nz-first
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/nz-first/one_clarion_call.md
derivesFrom: nz-first-one-clarion-call
assumptions:
  - ka whakaiti tētahi koha here teitei ake i te utu kawe-ki-te-kāinga ki te kore tētahi tapahi tāke ōrite e whakakore katoa; e oati ana te kaupapa here i ngā tapahi hei kapi i ngā pikinga engari kāore e rahi, nā reira ka noho te pānga utu kāore i mōhiotia
  - me tētahi mana whakahaere me tētahi mana haumi tētahi "hinonga pupuri rawa" i mua i te hoko rawa o Aotearoa; ka whakaingoa te kaupapa here i te whakaaro, kāore i te waka
  - ko te here kāore te reiti huihui o nāianei i te kaupapa here te tikanga kāore e taea te ine i te rahi o te hipanga tuatahi ki te 8% i tēnei kōrero anake
  - he rārangi motuhake te rēhita whānau i te whārangi whakatipuranga hono; ko ngā reiti pakeke i konei te rere e hanga ana i runga
sourceDigest: "sha256-ccd35b96560e549d"
lang: mi
translationOf: nz-first-one-clarion-call-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-a4d6dd85152af343
---

# Tō mātou māramatanga

> Ka here a KiwiSaver me ngā koha huihui ki te 8% kātahi ki te 10%, ngā tapahi tāke e whakaarohia ana hei kapi i te pikinga, me tētahi mahere ki te huri i te kaupapa hei hinonga pupuri rawa o Aotearoa. Kāore ngā tapahi tāke i rahi, kāore te hinonga i tautuhia, ā, kei te ngaro te reiti tīmata o nāianei — nā reira kāore e taea e tētahi te ine i te pānga utu, i te hipanga tuatahi rānei.

System: Te pikinga koha here me tētahi whakakapi kāore i utua

Scenario: Ka piki ngā koha i te wā kāore te whakakapi tapahi tāke i whakaingoatia
Given ngā tapahi tāke mō ngā mema KiwiSaver me ngā kaituku mahi e whakaarohia ana hei kapi i ngā pikinga
And kāore he rahi, he āhua rānei o aua tapahi i whakapuakina
When ka piki ngā koha kaimahi me te kaituku mahi huihui i ngā hipanga e rua
Then ka tuku ētahi atu o ia utu ki a KiwiSaver
Output combined employee and employer contributions first at 8%, then later at 10%
Outcome ka tipu ngā toenga penihana i raro i te here
But ka mau ngā kaimahi i te āputa ka waiho e ngā tapahi tāke kāore i rahi
Activates nz-first-establishing-a-kiwisaver-generation

Scenario: Ka hurihia a KiwiSaver hei hinonga pupuri rawa
Given tētahi whakaaro ki te huri i a KiwiSaver hei hinonga pupuri rawa o Aotearoa
And kāore he whakaahuatanga o te rangatiratanga, te poari, te mana haumi rānei
When ka tuhia te whakahou
Then me kōwhiria tētahi waka i mua i te pupuri rawa ā-whenua i tērā ingoa
Outcome ko te ahunga haere ki te rangatiratanga ā-whenua o te pūtea
But kāore anō ngā kaipupuri moni kia mōhio ko wai ka pupuri, ka whakahaere rānei i aua rawa

Scenario: Ka pā te here ki tētahi mema kāore he reiti tīmata i tāia
Given kāore te kōrero e whakapuaki i te reiti koha huihui o nāianei
When ka mana te here me te hipanga koha tuatahi
Then ka whirinaki te rahi o te pikinga tuatahi ki tētahi pae tīmata kāore tēnei kaupapa here e tā
Outcome ka here te penapena ki ngā reiti huihui hou
But ka mau ngā mema i te pikinga tuatahi mai i tētahi reiti tīmata kāore i mōhiotia
