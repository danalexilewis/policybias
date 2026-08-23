---
type: spec
id: act-let-pharmacies-do-more-derived
title: "Ko te whānui o te whare rongoā e pānuitia ana hei pūnaha: te whakakapi GP me te whakawhānui mekameka"
status: draft
updated: 2026-08-21
summary: Ka neke ngā rārangi maimoa kaimātai rongoā whānui ake i ngā māuiui noa i ngā rārangi tatari GP, ā, ko te tango i te taupane rima-whare-rongoā o te mana pupuri ka tuku i ngā mekameka ki te whakawhānui ki ngā wāhi i āraitia e ngā ture tata.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/let-pharmacies-do-more
tags:
  - healthcare
party: act
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/act/let-pharmacies-do-more.md
derivesFrom: act-let-pharmacies-do-more
assumptions:
  - ko te maimoa i ngā pokenga uma, ngā pokenga taringa me te toenga o te rārangi whānui ake i te whare rongoā he whakakapi i te toro GP ina taea e te kaimātai rongoā te whakaoti haumaru i te kēhi
  - ka tuku te tango i te taupane rima-whare-rongoā o te mana pupuri me ngā here tata i ngā kaipupuri kua mau kē ētahi whare rongoā ki te whakatuwhera anō
  - kāore te noho o ngā GP ki te kawenga haumanu whānui mō te aroturuki pūmau e aukati i te neke o te tūtaki tuatahi ki te whare rongoā mō ngā māuiui noa kua rārangitia
  - kāore te kaupapa here e tuku tatau o ngā wā kua nekehia i te GP, nā reira kāore mātou e tāpiri
sourceDigest: "sha256-148e14dadbe5c5d9"
lang: mi
translationOf: act-let-pharmacies-do-more-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-62350225ee9e2228
---

# Tō mātou māramatanga

> Ka neke ngā rārangi maimoa kaimātai rongoā whānui ake i ngā māuiui noa i ngā rārangi tatari GP, ā, ko te tango i te taupane rima-whare-rongoā o te mana pupuri ka tuku i ngā mekameka ki te whakawhānui ki ngā wāhi i āraitia e ngā ture tata. Ka noho te aroturuki pūmau i raro i ngā tepe kua whakaritea e te GP; kāore he tatau mō te nui o ngā wā ka neke.

System: Ko te whare rongoā hapori hei tūtaki tuatahi me te mana pupuri kāore he taupane rima-whare-rongoā

Scenario: Ka haere tuatahi te tūroro e māuiui ana i tētahi māuiui noa kua rārangitia ki te whare rongoā
Given e kī ana tētahi o ia tokowhā pakeke ko te wā ki te whiwhi wā GP he ārai ki te kite i te GP
And neke atu i te 120,000 tāngata i whakamahi i te Minor Health Conditions Service pilot i te tau 2023, ā, 88 ōrau i tutuki ō rātou hiahia i te whare rongoā
When ka whakawhānuitia te whānui maimoa kaimātai rongoā mō ngā pokenga uma, ngā pokenga taringa, ngā pokenga kiri, te mamae kaha, ngā korokoro mamae, te tonsillitis, ngā kiri pokenga kura, ngā titi, te gout, te osteoarthritis, te thrush wahine me te mamae paheke, me te whakamātautau STI self-swab
Then ka taea te maimoa i aua tūroro i te whare rongoā i raro i ngā ture mō te wā e hiahiatia ai anō te tākuta
Outcome kāore rātou e uru ki te rārangi tatari GP mō ngā māuiui ka taea e ngā kaimātai rongoā te maimoa haumaru
But ka hoki anō ngā kēhi e hiahia ana i te tākuta

Scenario: Ka tangohia te taupane rima-whare-rongoā o te mana pupuri me ngā here tata
Given ko ngā ārai e aukati ana i te whakatuwhera o ngā whare rongoā hou ko te taupane rima-whare-rongoā o te mana pupuri me ngā here tata
When ka tangohia aua ārai i te wā e tapahia ana te rīpene whero raihana
Then ka taea e te kaipupuri kua mau kē ētahi whare rongoā te whakatuwhera anō, kāore he tepe rima-whare-rongoā
Outcome ka taea e ngā mekameka te whakawhānui ki ngā wāhi i āraitia e ngā ture tata
But ka iti ake pea ngā whare rongoā motuhake i ngā mākete kuiti i te whakawhānui o ngā mekameka

Scenario: Ka aroturukitia te māuiui pūmau i te whare rongoā
Given neke atu i te kotahi mano ngā whare rongoā hapori o Aotearoa e mahi ana ngā mātanga hauora tohu, kāore ō rātou pūkenga i te whakamahi katoa
When ka aroturuki ngā kaimātai rongoā whakamanatia i te hypertension pūmau, te mate huka momo 2 me te kōleterōra teitei, ā, ka whakatikatika rongoā i roto i ngā tepe kua whakaritea e te GP
Then ka noho ngā whakamātautau toto me ngā hua ki te puka hauora tiritiri, ā, ka mau te GP i te kawenga haumanu whānui
Outcome ka neke te tūtaki aroturuki noa ki te whare rongoā i waenga i ngā arotake GP
But ko te kawenga haumanu whānui e noho ana ki te GP te tikanga kāore te kawenga e neke katoa
