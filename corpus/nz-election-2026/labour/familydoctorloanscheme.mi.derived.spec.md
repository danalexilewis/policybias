---
type: spec
id: labour-familydoctorloanscheme-derived
title: "Ko te Family Doctor Loan Scheme e pānuitia ana hei pūnaha: he hongere hoko-mai iti e neke ana i te whakakotahitanga kaipupuri"
status: draft
updated: 2026-08-21
summary: E rima tekau ngā pūtea tārewa ia tau, tae atu ki te $500,000, he hongere whāiti; ko te aukati kamupene ka neke i te hunga ka taea te hoko-mai, ā, nō tētahi mahere kōpaki te kī 4.5 million tono GP, kāore i whakaingoatia ngā ture takahanga.
jurisdiction: NZ
sources:
  - title: Backing Your Family Doctor
    url: https://www.labour.org.nz/familydoctorloanscheme
  - title: Backing local doctors
    url: https://www.labour.org.nz/media/dbskvb1y/backinglocaldoctors.pdf
tags:
  - healthcare
  - small-business
party: labour
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/labour/familydoctorloanscheme.md
derivesFrom: labour-familydoctorloanscheme
assumptions:
  - e 50 ngā pūtea tārewa ia tau, tae atu ki te $500,000, he hongere hoko-mai ā-tau iti ki te taha o te pūkei mahi tākuta ā-motu; kāore te kaupapa here e kī ka whakakapi i te kaipupuri kamupene i te rahi
  - ko te aukati i ngā mahi tākuta nā te kamupene te tikanga ka pūteatia e te kaupapa ngā hoko-mai a te kaipupuri-whakahaere anake, nō reira ka neke te whakakotahitanga kaipupuri ki aua kaitono ka riro i a rātou te pūtea tārewa
  - ko te nama nuku atu i te 4.5 million tono GP, he mahere ā-motu o te aromatawai, te hangarau, te tiaki-whaiaro me ngā whare, ehara i te putanga motuhake o ngā pūtea tārewa anake
  - kāore i whakapuakina ngā ture takahanga me te whakahoki, nō reira kei waho o ngā tikanga kua tāia te mōrearea nama
sourceDigest: "sha256-4f398e987bdfbba8"
lang: mi
translationOf: labour-familydoctorloanscheme-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-560860e286f3f0fe
---

# Tō mātou māramatanga

> E rima tekau ngā pūtea tārewa ia tau, tae atu ki te $500,000, he hongere hoko-mai whāiti ki te taha o te pūkei mahi tākuta ā-motu, ā, ka neke te aukati kamupene i te hunga ka taea te whakamahi. Nō tētahi mahere kōpaki o te aromatawai, te hangarau me ngā whare te nama nuku atu i te 4.5 million tono GP, ehara i ngā pūtea tārewa anake, ā, kei waho o ngā tikanga kua tāia ngā ture takahanga.

System: Ko te Family Doctor Loan Scheme hei hongere kaipupuri iti

Scenario: Ka rere te kaupapa i te tango katoa
Given tae atu ki te 50 pūtea tārewa ia tau
And ia pūtea tārewa e taupane ana ki te $500,000
When kua tango katoatia te kaupapa
Then e rima tekau tākuta i te nui rawa ia tau ka hoko-mai i runga i ēnei tikanga
Output $25 million ia tau e tuku tārewa ana mēnā kua tango katoatia
And iti iho i te $8 million ia tau te hua moni kua ngaro mēnā kua tango katoatia
Outcome ka iti tonu te hongere hoko-mai ā-tau a te Karauna ahakoa ka riro ia pūtea tārewa
But kei waho tonu te nuinga o ngā mahi tākuta ā-motu i tēnei hongere ā-tau iti

Scenario: Ka kati te kaihoko kamupene i te hoko kotahi anō
Given ka aukatihia ngā mahi tākuta nā te kamupene
And ka taea e ngā mahi tākuta a te kaipupuri-whakahaere te tono
When ka hoko tētahi tākuta e reti ana, ā, ka tono te kamupene me te kaipupuri-whakahaere
Then ko te huarahi kaipupuri-whakahaere anake ka taea te whakamahi i te kaupapa
Outcome ka neke te whakakotahitanga kaipupuri ki ngā mahi tākuta ka taea te tutuki i ngā ture pūtea tārewa
But kei te utu pēke tonu ngā tākuta kei waho o aua ture, e whakatauritea ana e te kaupapa here

Scenario: Ka pānuitia te kī tono ki te taha o te pūnaha pūtea tārewa
Given tētahi mahere kia wātea ake i te 4.5 million tono GP ia tau
And e rārangi ana tērā mahere i te aromatawai, te hangarau, te tohutohu mate wā roa me te wāhi whare haumanu
When ka tukuna te kaupapa pūtea tārewa
Then ehara te nama tono i te mea motuhake ki ngā pūtea tārewa
Outcome he hongere hoko-mai ngā pūtea tārewa, ehara i te pūtake o ngā tono kua wātea
But kei te Karauna, kei te kaituku tārewa rānei te ngaronga mēnā kāore e taea e te kaiwhai-nama te utu anō
