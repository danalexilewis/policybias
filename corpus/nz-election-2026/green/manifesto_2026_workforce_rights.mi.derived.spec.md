---
type: spec
id: green-manifesto-2026-workforce-rights-derived
title: "Ko ngā tika kaimahi e pānuitia ana hei pūnaha: ko te mema uniana taunoa he here opt-out, ā, 15 marama wehenga kāore he reiti i whakapuakina"
status: draft
updated: 2026-08-21
summary: Ka uru ngā kaimahi hōu ki tētahi uniana ki te kore rātou e kōwhiri ki te wehe, nā reira ko te mematanga te huarahi taunoa, i te wā e whakaroa ana te wehenga mātua 15 marama i te wā, kāore e tāia he reiti utu ā-wiki.
jurisdiction: NZ
sources:
  - title: Workforce Rights
    url: https://www.greens.org.nz/manifesto_2026_workforce_rights
tags:
  - employment
party: green
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/green/manifesto_2026_workforce_rights.md
derivesFrom: green-manifesto-2026-workforce-rights
assumptions:
  - ko te mematanga uniana aunoa i te tīmatanga mahi, me te opt-out o muri, he here mā te taunoa; e kī ana te kaupapa here he whakakaha i te mana whiriwhiri
  - me mahi tonu te kaimahi ki te opt-out, nā reira ka pupuri te ngoikore i te mematanga ki te kore tētahi e wehe
  - ko ngā 15 marama mō te kaitiaki tuatahi e roa ake ana i te wehenga, kāore he reiti utu ā-wiki i tāia, nā reira kāore e taea te pānui i te moni ka riro i te wā wehenga i te kaupapa here
  - he wā tāpiri te wehenga hoa kua āta wehea mō ngā hoa, engari kāore i whakapuakina tōna roa me tōna reiti
sourceDigest: "sha256-0f97e5f56064f1bc"
lang: mi
translationOf: green-manifesto-2026-workforce-rights-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-12dadb028884f4c2
---

# Tō mātou māramatanga

> Ka whakauru taunoa te kaupapa here i ngā kaimahi hōu ki tētahi uniana me te opt-out, ka whakawhānui i ngā tika patu mahi, ā, ka hiki i te wehenga mātua utua ki te 15 marama me ngā utu nui ake. Kāore e kī ana me pēhea te opt-out i te mahi, he aha rānei te reiti wehenga ā-wiki. Ka kite mātou i te mematanga taunoa hei here opt-out, ā, i te roanga wehenga hei wā kāore he moni whiwhi i whakapuakina.

System: Te mematanga uniana taunoa me te wehenga roa ake, kāore he reiti i whakapuakina

Scenario: Ka tīmata tētahi kaimahi hōu i tētahi mahi i raro i te mematanga uniana taunoa
Given he ture mahi e hono ana i ngā tāngata ki tētahi uniana ina tīmata rātou i tētahi mahi hōu
And he opt-out e wātea ana i muri
When ka tīmata te tangata i te mahi, ā, kāore e opt-out
Then he mema uniana rātou mā te taunoa
Outcome ka piki te kapi whiriwhiri mā te ngoikore, ehara mā te hono kaha
But kei te mōhio tonu te kaimahi me pēhea te wehe, me te kōwhiri ki te wehe, te mematanga

Scenario: Ka whakamahere tētahi kaitiaki tuatahi i te 15 marama wehenga mātua utua
Given e piki ana te wehenga mātua utua ki te 15 marama mō te kaitiaki tuatahi
And he wehenga tāpiri kua āta wehea mō ngā hoa
And ngā utu kua piki, kāore he reiti ā-wiki i te kaupapa here
When ka whakatahua te kāinga i te wā wehenga
Then e mōhio ana rātou e hia te roa e noho ai te kaitiaki tuatahi ki te kāinga
Output 15 months paid parental leave for the primary caregiver
Outcome he nui ake te wā maramataka i te kāinga e homai ana
But me whakatahua tonu te kāinga, kāore e mōhio ana ki te reiti utu ā-wiki
Activates green-manifesto-2026-gender-equity

Scenario: Ka whakawhānuitia ngā tika patu mahi, i te wā e tūhura noa ana ngā tūru poari
When ka whakawhānui te tika ki te patu mahi ki ngā takahanga kirimana ā-rōpū me ngā take tōrangapū me te kotahitanga
And ka tūhuratia anake ngā māngai kaimahi i ngā poari o ngā kamupene kua rārangitia
Then ka whakawhānui ngā kōwhiringa mahi ahumahi i mua i te whakatau o te māngai poari
Outcome ka neke te mana ā-rōpū ki te patu mahi me te mematanga taunoa i te tuatahi
But kāore anō ngā kaimahi kia whai tūru poari mātātoa kia noho te tūhuratanga hei ture
