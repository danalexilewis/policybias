---
type: spec
id: labour-small-business-action-plan-derived
title: "Ko te Small Business Action Plan e pānuitia ana hei pūnaha: te neke pūtea mahi me te pākei e ārahi ana e te tuhi-atu"
status: draft
updated: 2026-08-21
summary: Ka neke te utu tere i te pūtea mahi mai i ngā kamupene nui ki ngā kaiwhakarato iti; ko te tuhi-atu te nuinga o te utu pākei; ka tango te pikinga paepae tāke hokohoko (GST) i ngā kamupene i te kupenga here, ā, ka whakaiti i taua tūāpapa.
jurisdiction: NZ
sources:
  - title: Small Business Action Plan
    url: https://www.labour.org.nz/small-business-action-plan
tags:
  - small-business
  - taxation
party: labour
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/labour/small-business-action-plan.md
derivesFrom: labour-small-business-action-plan
assumptions:
  - ka neke te ture kia utu wawe ake ngā kamupene nui i ngā kaiwhakarato iti i te wātaka pūtea mahi mai i te kaiutu ki te kaiwhiwhi, kāore e hanga moni hou
  - ina ko te utu tuhi-atu te nuinga o te tapeke pākei kua whakaputaina, e ārahi ana te pākei e te tuhi-atu
  - ka whakaiti ngā kamupene ka wehe i te rēhitatanga tāke hokohoko (GST) here i te tūāpapa tāke hokohoko (GST) here, ahakoa tuwhera tonu te rēhitatanga i runga i te hiahia
sourceDigest: "sha256-32a2741f0e85e3e1"
lang: mi
translationOf: labour-small-business-action-plan-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-fea6c73b01d23e5a
---

# Tō mātou māramatanga

> Ka neke te utu tere mō ngā nama iti ake i te pūtea mahi mai i ngā kamupene nui ki ngā kaiwhakarato iti, kāore e hanga moni hou. Ko te tuhi-atu rawa te nuinga o te utu pākei e whā tau hei painga wātaka i te tāke, ā, ka tango te pikinga paepae tāke hokohoko (GST) i ngā kamupene i te kupenga here, ahakoa tuwhera tonu te rēhitatanga i runga i te hiahia.

System: Ko te Small Business Action Plan hei wātaka moni, whakapau tuhi-atu, me te kupenga tāke hokohoko (GST)

Scenario: Me utu wawe ake tētahi kamupene nui i tētahi kaiwhakarato iti
Given he utu i roto i ngā rā 15 mō ngā nama $25,000, iti iho rānei
When ka here ngā ture utu-i-te-wā i tētahi kamupene nui
Then ka neke wawe ake te pūtea mahi mai i te kamupene nui ki te kaiwhakarato iti
Outcome ka tae wawe ake te moni a te kaiwhakarato iti
But ka pupuri te kamupene nui i taua moni mō ētahi rā iti ake

Scenario: Ko te tuhi-atu rawa te mea nui o te utu pākei
Given he pākei kua utua ki te $1.56 billion i roto i ngā tau e whā
And $1.355 billion mō te tuhi-atu rawa i roto i ngā tau e whā
When ka tono ngā pakihi i te tuhi-atu nui ake
Then kei te tuhi-atu te nuinga o te utu pākei
Output write-off of up to $10,000 in new equipment
And $1.355 billion for the asset write-off over four years
And $1.56 billion cost over four years
Outcome tata ki te 500,000 pakihi kei te whānuitanga mō te tuhi-atu
But he painga wātaka i te tāke te tuhi-atu, e kī ana hoki te kaupapa here

Scenario: Ka piki te paepae rēhitatanga tāke hokohoko (GST)
Given kāore he rēhitatanga tāke hokohoko (GST) here kia $80,000
When ka piki te paepae
Then ka wehe ngā kamupene o taua pae i te kupenga tāke hokohoko (GST) here
Output around 35,000 businesses no longer required to register for GST
Outcome ka whakaiti te tūāpapa tāke hokohoko (GST) here e taua rōpū
But tuwhera tonu te rēhitatanga i runga i te hiahia
