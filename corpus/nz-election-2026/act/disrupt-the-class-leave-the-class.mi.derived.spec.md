---
type: spec
id: act-disrupt-the-class-leave-the-class-derived
title: "Ngā mana tango e pānuitia ana hei pūnaha: ngā wāhi tirotiro, kāore te pire kaimahi i whakaingoatia"
status: draft
updated: 2026-08-21
summary: Ka mahi te tuku i ngā ākonga whakararuraru ki ngā wāhi kaimahi anake mēnā he kaimahi i aua wāhi, ā, ka neke ngā whaina mātua me te nama kino ki ngā whānau, i te wā kāore te utu tirotiro i te utu i te kaupapa here.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/disrupt-the-class-leave-the-class
tags:
  - education
  - crime-and-justice
party: act
clusters:
  - crime-justice
money: named-figure
sourcePath: corpus/nz-election-2026/act/disrupt-the-class-leave-the-class.md
derivesFrom: act-disrupt-the-class-leave-the-class
assumptions:
  - me noho ngā pakeke i te wāhi tirotiro kaimahi i ngā wā katoa o ngā tango; he utu tūturu tērā rārangi utu ahakoa kāore te kaupapa here e kī
  - ka neke ngā whaina mātua me ngā nama kino i ētahi o te utu whakararuraru i te kura ki ngā whānau
  - kua rāhuitia ngā rūma kōhatu, ka taea te raka rānei, nā reira kāore ngā kura e tutuki i te kawenga mā te wehe i ngā ākonga kāore he tirotiro
  - kāore he whakatau tata o te rahi tango, nā reira kāore e mōhiotia te rahi o te hiahia kaimahi
sourceDigest: "sha256-0de4f3c8a8f3ab84"
lang: mi
translationOf: act-disrupt-the-class-leave-the-class-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-94e6b2a9f71e1ff6
---

# Tō mātou māramatanga

> Ka whai ngā kaiako i tētahi mana tango mārama, ā, ka noho ngā ākonga kua tangohia ki te tirotiro. Ka mahi tērā tirotiro anake mēnā he kaimahi i te tari atawhai, te rūma tīni, te rūma tautoko ako rānei. Ka neke ngā whaina mātua me te whakahoki kino i te moni ki ngā whānau.

System: Te tango i te akomanga i raro i te tū-iho, me te pupuri kua tirohia

Scenario: Ka tango tētahi kaiako i tētahi ākonga whakararuraru ki tētahi wāhi kua tirohia
Given tata ki te haurua o ngā kaiako ka pā ki te whakararuraru i ia akoranga
And e whā tekau mā whitu ōrau o ngā kaiako ka ngaro 40 ki te 50 meneti, nui ake rānei, ia rā ki te urupare ki te whanonga uaua
When ka tuku tētahi kaiako i tētahi ākonga tino whakararuraru, tūmau rānei, kia wehe, kia pūrongo ki tētahi wāhi kaimahi, kua tirohia
Then ka pupuria te ākonga i te tari atawhai, te rūma tīni, te rūma tautoko ako rānei, ehara i te rūma kōhatu, ka taea te raka rānei
Outcome ka haere tonu te akomanga kāore tērā ākonga i reira
But me noho tētahi ki te wāhi kua tirohia i ngā wā katoa o ngā tango

Scenario: Ka ngaro tētahi mātua i tētahi hui here, ka whakakino tētahi ākonga i te rawa mā te whakaaro
Given me hui tētahi mātua, kaitiaki rānei ina tino, tukurua rānei te whanonga, ina whakakāhore rānei te ākonga i tētahi tohutohu ture kia wehe
When ka ngaro tētahi mātua i tētahi hui here kāore he take tika, kāore rānei i utua te kino rawa mā te whakaaro
Then tērā pea ka pā te whaina, ā, ka taea e ngā kura te whakahoki i ngā utu kino hei nama
Output tērā pea ka whainatia te mātua ka ngaro i tētahi hui here kāore he take tika ki te $300 mō te hara tuatahi, ki te $3,000 rānei mō tētahi hara i muri
Outcome ka neke ētahi o te utu o te whakararuraru me te kino ki ngā mātua
But me utu ngā kura i ngā kaimahi tirotiro kāore he rārangi utu kua whakaingoatia

Scenario: Ka whai te kaha tika i te whakakāhore tuarua i muri i te whakapiki
Given ka whakapikia te whakakāhore ki tētahi tīni, kaiārahi matua rānei
When ka whakakāhore te ākonga i tētahi tohutohu ture tuarua i muri i tērā whakapiki
Then ka taea e ngā kaimahi te whakamahi kaha tika ki te tango i te ākonga
Outcome he ture kore tonu te whiu tinana, ā, ka rāhuitia tonu ngā rūma kōhatu
But kei ngā kura te tūpono whakangungu me te kawenga ture i ngā wā katoa ka whakamahi ngā kaimahi i te kaha i te whakakāhore tuarua
