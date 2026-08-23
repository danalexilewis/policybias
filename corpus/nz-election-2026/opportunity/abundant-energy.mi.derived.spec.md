---
type: spec
id: opportunity-abundant-energy-derived
title: "Ko te Pūngao Nui hei pūnaha: he toha kua whakawhāitihia mai i te Karauna, me tētahi hanga 2050 e roa ake i tēnei wā"
status: draft
updated: 2026-08-18
summary: Mā te whakapaenga ā-taiepa i ngā toha o ngā kamupene hanga-hoko hiko (gentailer) e neke pea te $500 miriona ia tau i waho o te moni whiwhi whānui; kei te 24 tau te pae 30 GW, nā reira ko te mahi o tēnei wā ko te kaupapa me ngā hanumi, ehara i ngā gigawatt.
jurisdiction: NZ
sources:
  - title: Abundant Energy
    url: https://www.opportunity.org.nz/abundant-energy
  - title: Abundant Energy policy
    url: https://cdn.opportunity.org.nz/documents/policy/Opportunity Policy - Abundant Energy.pdf
tags:
  - energy
  - climate
party: opportunity
clusters:
  - energy-power
money: named-figure
sourcePath: corpus/nz-election-2026/opportunity/abundant-energy.md
derivesFrom: opportunity-abundant-energy
assumptions:
  - ko te whakawhāiti i te $500 miriona pea ia tau o ngā toha he tapahi ki te moni whiwhi whānui a te Karauna ki te kore tētahi tāke kē e whakakī; e kī ana te kaupapa here, ā, ka mau mātou i te tāke whenua hei whakakī kua tapaina, ehara i te kai kore utu
  - he rawa te pae kaha 2050 e piki haere ana i roto i ngā tekau tau; ka taea e tēnei wā te tū i tētahi kaupapa, ehara i te tuku i te 30 GW
  - ko te whakakotahi i ngā kaiwhakarato 29 ki te 8 he ohorere mō te mana ā-rohe me te mahi kāore te kaupapa here e utu
sourceDigest: "sha256-77c0e4e9da0936d8"
lang: mi
translationOf: opportunity-abundant-energy-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-5657b17b753fc750
---

# Tō mātou māramatanga

> Ka whakapaenga ā-taiepa te $500 miriona pea ia tau o ngā toha gentailer ki te mahere pūngao ki te pae 30 GW i te 2050, e whakawhāiti ana i te moni e utu nei i te moni whiwhi matua a te Karauna — engari kāore i utuhia ngā hanumi kaiwhakarato, ā, kei tua o tēnei wā te nuinga o ngā gigawatt.

System: Ngā toha gentailer kua whakawhāitihia, me tētahi hanga 2050

Scenario: Ka tangohia te toha i te moni whiwhi whānui
Given e $500 miriona pea ia tau ngā toha gentailer a te kāwanatanga e rere nei ki te moni whiwhi matua a te Karauna
When ka whakapaenga ā-taiepa tērā rere mō te mahere pūngao
Then ka heke te moni whiwhi whānui mā te $500 miriona pea ia tau ki te kore tētahi tāke kē e whakakapi
Outcome he pūtea whakahaere kua tapaina tā te mahere pūngao
But ka ngaro tērā toha i te hauora, te mātauranga me ētahi atu whakapaunga matua ki te kore e tino tae mai te tāke whenua
Activates opportunity-tax-reset

Scenario: Tēnei wā ki te 2050
Given he pae 30 GW kua rā 2050
When ka tū te kāwanatanga o tēnei wā i te kaupapa kaha me ngā hanumi
Then kei te anamata tonu te nuinga o ngā gigawatt
Outcome tērā pea ka kite ngā kāinga i ngā pūtea tārewa, te whakamahanatanga, me ētahi tipu hōu
But he tatau pūnaha kua oti te $500 ki te $2,700 tiaki ā-kāinga, ehara i te pire tau tuatahi
