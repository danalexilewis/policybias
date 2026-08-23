---
type: spec
id: national-south-island-growth-derived
title: "Ko te tupu o Te Waipounamu e pānuitia ana hei pūnaha: he iti ngā tāra kua whakaingoatia ki te taha o te ōhanga, kāore te toenga i utua"
status: draft
updated: 2026-08-21
summary: He iti ngā take rori me te hōhipera kua whakaingoatia ki te taha o tētahi ōhanga tata $100 billion; kāore te toenga o te mahere kāore i whakaingoatia i utua; kāore he utu tāra o te utu uru manuhiri.
jurisdiction: NZ
sources:
  - title: National backs South Island growth
    url: https://www.national.org.nz/south-island-growth
tags:
  - infrastructure
  - transport
  - economy
party: national
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/national/south-island-growth.md
derivesFrom: national-south-island-growth
assumptions:
  - he iti te $50 million me te $25 million o te whakapau rori kua whakaingoatia ki te taha o tētahi ōhanga motu tata $100 billion ia tau; nā mātou tērā whakatairite, ehara i te kerēme kua whakaputaina i te kaupapa here
  - kāore e taea te tāpiri ngā kī taurangi me te kore nama tāra i te kaupapa here ki tētahi kete katoa i tēnei rauemi anake
  - kāore e taea e te manuhiri, e te kaiwhakahaere rānei te utu i tētahi utu uru me te kore utu kua kīia i te kaupapa here
sourceDigest: "sha256-c9efcdca9cc2bfcb"
lang: mi
translationOf: national-south-island-growth-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-8b74bad9ebaffe08
---

# Tō mātou māramatanga

> He poro angiangi ngā tāra rori me te hōhipera kua whakaingoatia ki te taha o tētahi ōhanga motu tata $100 billion, i te wā kāore he nama i ngā kī taurangi ahuwhenua, maina, pūngao me ētahi atu o mua. Kāore he utu o te utu uru manuhiri ki Aoraki me Milford Sounds, nā reira ka oati te haumi anō i mua i te mōhio o tētahi he aha tā ngā manuhiri e utu.

System: Ko te tupu o Te Waipounamu hei tāra kua whakaingoatia ki te taha o tētahi toenga kāore i utua

Scenario: Ngā whakapau rori kua whakaingoatia ki te taha o te ōhanga motu
Given te ōhanga o Te Waipounamu e tata ana ki te $100 billion ia tau
And $50 million mō ngā hononga pūhara uta motuhake a Rolleston
And $25 million ki te whā-ara o Queenstown i tua atu i Hansen Road ki te porowhita Five Mile
When ka haere aua kaupapa rori
Then he iti ngā tāra waka kua whakaingoatia ki te taha o te putanga ā-tau a te motu
Output $50 million mō ngā hononga pūhara uta motuhake a Rolleston
And $25 million ki te whā-ara o Queenstown i tua atu i Hansen Road ki te porowhita Five Mile
Outcome ka taea tonu te whakangāwari i ngā kōkiri ā-rohe
But he poro angiangi te kete rori kua whakaingoatia o tērā ōhanga

Scenario: Kāore he katoa o te toenga o te mahere i te kaupapa here
Given 96 ngā moenga anō i te Pou Tuatoru o te Hōhipera o Ōtautahi
And tata ki te 100 ngā rūma akoranga anō puta noa i Te Waipounamu
When ka haere ngā kī taurangi ahuwhenua, maina, pūngao me ētahi atu o mua
Then kāore he nama tāra i te nuinga o aua take i te kaupapa here
Output 96 ngā moenga anō i te Pou Tuatoru o te Hōhipera o Ōtautahi
And tata ki te 100 ngā rūma akoranga anō puta noa i Te Waipounamu
Outcome ka whakaingoa te mahere i te ahunga me te kore utu kete kua tāpirihia
But ka kawea e ngā kaipākeha tāke te toenga o te mahere kāore i utua

Scenario: Te utu uru manuhiri nō tāwāhi
When ka whakaurua te utu uru ki Aoraki / Mt Cook me Milford Sounds
Then kāore i whakapuakina te utu
Outcome ko te haumi anō i te tiaki ā-rohe me ngā hanganga tāpoi te whakamahi kua whakaingoatia
But ka whakarite tahua ngā manuhiri me ngā kaiwhakahaere i te matapōrehu kia tautuhia rā anō he utu
