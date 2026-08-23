---
type: spec
id: act-deport
title: "Mahere manene e ono ngā wāhanga, mai i te peinga ki te whakamana i te hunga kua pau te visa"
status: draft
updated: 2026-08-21
summary: Peia ngā kaipupuri visa noho kua whakawhiua mō ngā hara e 10 tau te whiu, ahakoa te roa i konei, whakakaha i ngā visa pūkenga, whakatau i te tuwha tautoko pūtea e rima tau, utu i te $6 ia rā mō te hanganga, whakawhānui i ngā here reo Ingarihi, ā, whakamana i te hunga kua pau te visa.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/deport
tags:
  - immigration
  - crime-and-justice
party: act
clusters:
  - immigration
money: named-figure
sourcePath: corpus/nz-election-2026/act/deport.md
sourceDigest: "sha256-6335940b73a57131"
gaps:
  - kāore i whakapuakina te pānga o te peinga ki te kirirarau
  - kāore i whakapuakina ēhea tautoko pūtea ka kapi i te tuwha e rima tau i tua atu i ērā kua whakaingoatia
  - kāore i whakapuakina me pēhea ngā wāhanga pūkenga e whakaatu ai i te hiahia o nāianei
  - kāore i whakapuakina ngā rauemi o te wāhanga whakamana i te hunga kua pau te visa
  - kāore i whakapuakina me pēhea te whakamana i te whakamana kaituku mahi papaaho
  - kāore he wātaka mō ngā whakahou e ono i whakapuakina
lang: mi
translationOf: act-deport
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-bdd0c28ffa716241
---

# Ko tā te whārangi e kī ana

> E kīia ana kāore te pūnaha manene e whakamana i ngā ture, ā, ka tōmuri te hanganga i te heke. Ko te mahere e ono ngā wāhanga e kapi ana i te peinga o ngā kaitāhae nui, te pau o ngā wāhanga visa pūkenga, te tuwha tautoko pūtea e rima tau, te utu hanganga ia rā, ngā here reo Ingarihi kaha ake, me te whakamana i te hunga kua pau te visa. Kāore he rā tīmata, he taipitopito whakamana rānei i tua atu i ngā inenga matua i homai.

System: Mahere manene e ono ngā wāhanga

Scenario: Ka whakakaha tētahi kāwanatanga hou i ngā ture manene
Given 20,980 te hunga mōhiotia kua pau te visa i Aotearoa
And ka noho tuwhera ngā wāhanga Accredited Employer Work Visa i muri i te kati o ngā āputa pūkenga
When ka mana ngā whakahou manene e ono
Then ka taea te pei i ngā kaipupuri visa noho kua whakawhiua mō ngā hara e 10 tau, neke atu rānei, te whiu, ahakoa te roa kua noho rātou ki konei
Output te kawenga peinga mō ngā kaipupuri visa noho i runga i ngā whakawhiu 10-tau-neke-atu, i tua atu i te tūtohu 20 tau a te Kāwanatanga
And ka pau aunoa ia wāhanga visa pūkenga ia tau, ki te kore e pupuri te taunakitanga o nāianei o te hiahia kia tuwhera
And tētahi tuwha tautoko pūtea e rima tau e aukati ana i te tautoko rapu mahi, te tāpiri noho, me ngā tautoko pūtea i whakamātauria te moni whiwhi mō ngā kaipupuri visa noho hou
And tētahi utu hanganga $6 ia rā i ngā visa mahi taupua e tūmanakohia ana kia kohi tata ki te $80 million ia tau
And ka whakawhānuihia ngā here reo Ingarihi taketake ki ngā momo AEWV katoa, ā, ka wātea tonu ngā paerewa iti ake mō ngā kaimahi ā-kaupeka
And tētahi wāhanga whakamana motuhake mō te hunga kua pau te visa i roto i a Immigration New Zealand
Outcome ka whakamana, ka pūrongo hoki ngā kaituku mahi papaaho pērā i a Uber me DoorDash i ngā tika mahi
And ka ngaro te whakaaetanga o ngā kaituku mahi e āwhina ana i te noho kua pau te visa
