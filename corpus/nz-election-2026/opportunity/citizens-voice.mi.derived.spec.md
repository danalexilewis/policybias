---
type: spec
id: opportunity-citizens-voice-derived
title: "Ko te Reo Tangata hei pūnaha: he tohutohu e hiahia tonu ana i ngā pōti"
status: draft
updated: 2026-08-18
summary: Ka taea e tētahi hui te whiriwhiri; kāore e taea te whakamana i te ture. Ki te kore he hononga Pāremata here, he kaitautoko te Commissioner, ā, ka taea e tētahi kāwanatanga o muri te whakamoe i te hua.
jurisdiction: NZ
sources:
  - title: Citizens' Voice
    url: https://www.opportunity.org.nz/citizens-voice
  - title: Citizens' Voice policy
    url: https://cdn.opportunity.org.nz/documents/policy/citizens-voice-policy.pdf
tags:
  - democracy
party: opportunity
clusters:
  - maori-affairs
money: no-figure
sourcePath: corpus/nz-election-2026/opportunity/citizens-voice.md
derivesFrom: opportunity-citizens-voice
assumptions:
  - ehara tētahi Parliamentary Commissioner e "tautoko" ana i te aukati, i te pōti here rānei; ka mau mātou i te putanga hei tohutohu ki te kore tētahi ture o muri e kī kē
  - ka noho te 6 ki te 12 marama o te whiriwhiri i runga i te tahua kotahi, iti rawa, nā reira ka taea te hipa i tētahi hui mō te tāke, te whare noho rānei e tētahi kirimana kōtuinga
  - he iti te $10 ki te $15 miriona ia tau ki tētahi kaupapa hanganga i hē, ko te whakataurite a te kaupapa here tērā, ehara i te tohu ka tango ngā tūtohutanga
sourceDigest: "sha256-27241b37ad215189"
lang: mi
translationOf: opportunity-citizens-voice-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-539abbeb48e27cb3
---

# Tō mātou māramatanga

> Te kōwhiri mā te rota, he utu, e ono ki te tekau mā rua marama o te whiriwhiri, $10 ki te $15 miriona, me tētahi Commissioner hei tautoko — engari kāore he pōti, he aukati, he kawenga ā-ture rānei ki ngā minita ki te whakatinana.

System: He tohutohu e hiahia tonu ana i ngā pōti

Scenario: Ka pūrongo tētahi hui, ā, kei wāhi kē te Pāremata
Given ngā tūtohutanga e hiahia ana i te kaha tōrangapū kia kaua e warewarehia
When ka whakatakoto te Commissioner i te pūrongo
Then tērā pea ka pai ake ki ngā mema Pāremata tō rātou tūranga, ā rātou kaitautoko, tētahi kirimana kōtuinga rānei
Outcome kua oti i te hui te mahi pōturi
But ka taea e ngā mema Pāremata te wareware i te hui ki te kore rātou e kōwhiri ki te pōti atu
Activates opportunity-clean-up-politics
