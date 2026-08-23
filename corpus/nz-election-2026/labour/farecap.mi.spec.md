---
type: spec
id: labour-farecap
title: "Pae utu waka tūmatanui $20 ia wiki"
status: draft
updated: 2026-08-21
summary: Ka pae ngā utu waka tūmatanui ā-wiki ki te $20 i Auckland, Wellington me Christchurch, ā, ki te $10 i ētahi atu wāhi mai i te 1 July 2027.
jurisdiction: NZ
sources:
  - title: Labour's $20 Public Transport Fare Cap
    url: https://www.labour.org.nz/farecap
tags:
  - transport
  - cost-of-living
party: labour
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/labour/farecap.md
sourceDigest: "sha256-0d9068c38ff16373"
gaps:
  - kāore i whakapuakina te utu tahua katoa o te pae
  - kāore i āta rārangitia ēhea waka moana Auckland, Wellington me Christchurch e kapi ana
  - kāore i whakapuakina me pēhea e ōrite ai te matapihi whai e whitu ngā rā puta noa i ngā pūnaha utu ā-rohe
  - kāore i inehia te pūnga pūtea i tua atu i tētahi takoha iti mai i tētahi pūtea waka o nāianei
  - he toharite anake ngā nama penapena ā-rohe, ā, ka rerekē i ia ara
lang: mi
translationOf: labour-farecap
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-7a49a65efbde54fb
---

# Ko tā te whārangi e kī ana

> Mai i te 1 July 2027, ka pae ngā utu waka tūmatanui ā-wiki ki te $20 i Auckland, Wellington me Christchurch, ā, ki te $10 i ētahi atu wāhi. Kia tae ki te pae, ka kore utu ngā haere e toe ana o taua wiki. Ka whāia aunoatia te whakapaunga mō ngā rā e whitu, kāore he kāri hōu, he rēhita rānei.

System: Pae utu waka tūmatanui ā-wiki

Scenario: Ka tae tētahi kaihaere mahi ki te pae utu ā-wiki
Given ka rerekē ngā utu waka tūmatanui i ia rohe
When kei te tū te pae utu
Then kia tae ki te pae, ka kore utu ngā haere e toe ana o taua wiki
Output $20 te pae utu ā-wiki i Auckland, Wellington me Christchurch
And $10 te pae utu ā-wiki i ētahi atu wāhi katoa
And tata ki te $25 ia wiki te penapena toharite
And neke atu i te $1,200 ia tau te penapena toharite
Outcome kia tae ki te pae, ka kore utu ngā haere e toe ana o taua wiki
