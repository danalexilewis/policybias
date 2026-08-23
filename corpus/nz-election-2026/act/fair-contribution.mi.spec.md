---
type: spec
id: act-fair-contribution
title: "Utu tāpiri tūāhanga $6 ia rā ki ngā visa mahi rangitahi"
status: draft
updated: 2026-08-21
summary: Tāpiri i tētahi utu tāpiri $6 ia rā ki ngā visa mahi rangitahi i runga ake i ngā utu o nāianei, e tūmanakohia ana kia kohia tata ki te $80 million ia tau, me te noho māmā ake i ngā visa rite o Ahitereiria me te United Kingdom.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/fair-contribution
tags:
  - immigration
  - infrastructure
party: act
clusters:
  - immigration
money: named-figure
sourcePath: corpus/nz-election-2026/act/fair-contribution.md
sourceDigest: "sha256-0f6efd430410ae38"
gaps:
  - kāore i whakapuakina te whakapau o te moni utu tāpiri ki te tūāhanga
  - kāore i rārangitia ēhea momo visa mahi rangitahi ka kapi
  - kāore he rā tīmata i whakapuakina
  - kāore i whakaaturia i te whārangi te tātai o te $80 million ia tau mai i te $6 ia rā
  - kāore i whakapuakina mehemea ka utu ngā tamariki, hoa rānei i te utu tāpiri
lang: mi
translationOf: act-fair-contribution
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-6d08ca8f7fccd14d
---

# Ko tā te whārangi e kī ana

> Ka whakamahi ngā kaimahi rangitahi i ngā rori me ngā ratonga tūmatanui mai i te taenga mai, i mua i te utu nui o te tāke, i te wā e pēhia ana te tūāhanga e te tupu taupori. Ka tāpiri te kaupapa here i tētahi utu tāpiri tūāhanga ia rā ki ngā visa mahi rangitahi i runga ake i ngā utu o nāianei. Kāore he tohatoha whakapau, he rārangi momo visa rānei i homai.

System: Takoha tūāhanga nā te hunga visa mahi rangitahi

Scenario: Ka uru tētahi kaimahi rangitahi ki Aotearoa i runga i te visa mahi
Given tata ki te toru miriona te taupori pakeke-mahi o Aotearoa
And kāore e kitea e ngā kaituku mahi ia nēhi, mīhini rorohiko, kaimahi pāmu rānei e hiahiatia ana i te kāinga
And ka taea e ngā kaimahi rangitahi te whakamahi i ngā rori me ngā ratonga tūmatanui mai i te taenga mai, i mua i te utu nui o te tāke o Aotearoa
When ka tāpirihia tētahi utu tāpiri tūāhanga ki ngā visa mahi rangitahi i runga ake i ngā utu o nāianei
Then ka takoha ngā kaimahi rangitahi ki te tūāhanga mai i tō rātou rā tuatahi ki te whenua
Output utu tāpiri tūāhanga $6 ia rā ki ngā visa mahi rangitahi
And tata ki te $80 million ia tau te moni e tūmanakohia ana i tērā reiti
Outcome ka noho māmā ake ngā visa rite i ērā o Ahitereiria me te United Kingdom
