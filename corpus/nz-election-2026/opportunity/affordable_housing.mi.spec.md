---
type: spec
id: opportunity-affordable-housing
title: "He tāke uara whenua me tētahi pūanga hanga hei kati i te hapa 80,000 whare"
status: draft
updated: 2026-08-21
summary: Whakamahia he tāke uara whenua kia heke ngā utu, me tētahi pūanga hanga — te whakarite whenua, ngā whare iti, te tautoko utu, ngā whakahoki tāke hokohoko (GST) — hei whakaheke i te hapa 80,000 whare.
jurisdiction: NZ
sources:
  - title: Affordable Housing
    url: https://www.opportunity.org.nz/affordable_housing
tags:
  - housing
  - taxation
party: opportunity
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/opportunity/affordable_housing.md
sourceDigest: "sha256-1f518a892b703df3"
gaps:
  - kāore i whakapuakina kia pēhea te heke o ngā utu ki te 3 ngā utu toharite
  - kāore i tākina anō te reiti tāke uara whenua ki tēnei whārangi
  - kāore i whakapuakina ngā tikanga tautoko utu, te rahi me te utu
  - kāore i whakapuakina ngā rahi tāke hokohoko (GST) ka whakahokia ki ngā kaunihera
  - kāore he wātaka mō te pūanga hanga
  - kāore i whakapuakina te āhua e kōwhiria ai ngā whanaketanga "whai mana"
lang: mi
translationOf: opportunity-affordable-housing
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-dad9cd5b32393c0d
---

# Ko tā te whārangi e kī ana

> Kua tino uaua te utu whare, nā te kōrenga o ngā utu i ngā utu mahi. Ko te tāke uara whenua i raro i te Tax Reset hei aukati i te pupuri whenua, hei akiaki i te whanaketanga mātotoru ake. Mā tētahi pūanga hanga e tāpiri tuku mā te whakarite whenua māmā ake, ngā whare iti, te tautoko utu, me ngā whakahoki tāke hokohoko (GST) mō ngā hanga taumata teitei.

System: Heke ngā utu whare, hangaia ētahi kāinga anō

Scenario: Ka kūtia ngā utu, ka tāpirihia te tuku
Given he whare e utua ana ki te 7.3 ngā utu toharite, inā toharite
And he whare e kīia ana he utu taea i te 3 ngā utu toharite
And he hapa 80,000 whare
When ka whakaurua he tāke uara whenua, ka whakarewaina he pūanga hanga
Then ka iti ake te hua o te pupuri whenua, ā, ka akiakihia te whanaketanga mātotoru
And ka whiwhi ngā whare iti, ngā whare moe me ngā tāpiritanga i tētahi hātepe māmā
And mā tētahi huinga rohe iti ake, ōrite puta noa i te motu, e tiaki ngā pāmu, ngā wāhi hapori me te taonga tuku iho, me te tuku whare noho i te mātotoru tika
And mā te whakarite whenua mahi-whakauru e āhei ngā tāpiritanga mō te mahi, te wāhi hapori me ngā toa
And ka tautokona ngā kaihanga waho-papa e tango ana i ngā tauira
And ka tautokona ngā whanaketanga utu taea whai mana kia tango i te pakaru i te hurihanga pūanga-pakaru
And ka whakahokia ki ngā kaunihera te tāke hokohoko (GST) i kohia i te wā hanga o ngā hanga taumata taiao teitei
And ka utua ngā pūtea tārewa utu iti mō te kounga
Outcome ka kitea ngā whare hei kāinga, ehara hei taputapu haumi
Activates opportunity-tax-reset
