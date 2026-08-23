---
type: spec
id: act-affordable-government
title: "Whakakotahitia ngā tari 43 kia 19, ā, whakahekea ngā minita kia 18"
status: draft
updated: 2026-08-21
summary: Whakakotahitia ngā tari, whakaitihia ngā kōpaki minita, ā, nukuia te whakatū tumuaki mai i a Te Kawa Mataaho ki ngā minita.
jurisdiction: NZ
sources:
  - title: A Smaller, More Affordable Government
    url: https://www.act.org.nz/affordable-government
  - title: ACT's plan for a consolidated bureaucracy
    url: https://assets.nationbuilder.com/actnz/mailings/54974/attachments/original/SmallerGovt.pdf?1782454542
tags:
  - budget
  - economy
party: act
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/act/affordable-government.md
sourceDigest: "sha256-cf145c74128adc18"
gaps:
  - kāore i whakapuakina he penapena tāra nā te whakakotahitanga
  - kāore i whakapuakina te utu whakawhiti, te whakamutu mahi, te pūnaha rānei
  - kāore he wātaka i tua atu i te tīmata wawe i te wā kāwanatanga e tū mai ana
  - kāore i whakapuakina ēhea o ngā tari 43 ka uru ki ēhea o ngā 19
  - kāore i whakapuakina te tokomaha tūranga ratonga tūmatanui e pā ana
  - kāore i whakaingoatia te rangahau o tāwāhi e hono ana i te nui ake o ngā minita ki ngā tāmi nui ake
  - kāore i whakapuakina me pēhea te whakakapi i tētahi tumuaki i tangohia mō te kore ōrite ki te kaupapa here i waenga o te wā
lang: mi
translationOf: act-affordable-government
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-a8ac33e55e7a7d62
---

# Ko tā te whārangi e kī ana

> He ratonga tūmatanui whānui tā Aotearoa, me ngā tari maha me ngā minita e tirotiro ana i ngā kōpaki inaki. Ka whakakotahi te kaupapa here i ngā tari kia iti ake ngā wāhanga, ka hoatu ia tari ki tētahi minita kotahi, ā, ka taea e ngā minita te whakatū me te tango tumuaki, me te tiaki i te motuhaketanga mahi mō Ngā Pirihimana o Aotearoa, Te Pā Whakamarumaru me Te Ope Kātua o Aotearoa. Kāore he nama tāra, he rā rānei i homai.

System: He ratonga tūmatanui kua whakakotahi i raro i ētahi minita iti ake

Scenario: Ka whakakotahi tētahi kāwanatanga hou i ngā tari me ngā kōpaki
Given 43 ngā tari, 78 ngā kōpaki minita, 28 ngā minita
And ko Te Kawa Mataaho te kaiwhakatū i ngā tumuaki tari
And he taupori rite ki a Nōwei, e whakahaere ana i ngā minita 20 puta noa i ngā manatū 17
When ka whakakotahi tētahi kāwanatanga hou i te ratonga tūmatanui
Then ka pūrongo ia tari ki tētahi minita kotahi mō tōna tahua me ōna huanga
Output 19 ngā tari kua whakakotahi mai i te 43
And 18 ngā minita hei whakakapi i te 28
And te motuhaketanga mahi ā-ture mō Ngā Pirihimana o Aotearoa, Te Pā Whakamarumaru me Te Ope Kātua o Aotearoa
Outcome ka taea e te minita te whakatū tumuaki mō tētahi wā kua tohua, ka taea te whakahou kotahi
And ka taea e te minita te tango tumuaki mō te kore mahi, te kore ōrite rānei ki te kaupapa here
And ko tētahi raru e horapa ana i ngā tari e whitu, he minita kotahi te kawenga
