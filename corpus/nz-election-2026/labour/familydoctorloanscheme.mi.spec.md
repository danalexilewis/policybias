---
type: spec
id: labour-familydoctorloanscheme
title: "Family Doctor Loan Scheme mō ngā mahi tākuta nā te kaipupuri"
status: draft
updated: 2026-08-21
summary: Pūtea tārewa kāore he huamoni, tae atu ki te 90% o te hokonga mahi, te pae $500,000, ā, tae atu ki ngā pūtea tārewa 50 ia tau mai i te 1 July 2027.
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
sourceDigest: "sha256-4f398e987bdfbba8"
gaps:
  - kāore i whakapuakina ngā paearu whakaae i tua atu i te tūranga nā te kaipupuri me ngā wāhi matua
  - kāore i whakapuakina me pēhea e whakamanahia ai te wehenga 4.5 million ngā wā kua tohua
  - kāore i whakapuakina ngā reiti Independent Pricing Authority i tēnei whārangi
  - kāore i whakapuakina ngā ture tārewa kore me te whakahoki
  - he tauira whakaatu anake ngā nama o Katherine, ehara i te tauparamita kaupapa here
lang: mi
translationOf: labour-familydoctorloanscheme
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-298decfb4aecfb5d
---

# Ko tā te whārangi e kī ana

> Mai i te 1 July 2027, ka taea e ngā mahi tākuta whānui nā te kaipupuri te tārewa hei hoko ki roto i tētahi mahi mā tētahi hōtaka pūtea tārewa huamoni iti. Kāore e uru ngā mahi nā te kamupene. Ko te whāinga o te hōtaka kia wātea ake ngā wā kua tohua ki te tākuta whānui, i te taha o ngā panonitanga taurima tuatahi whānui ake.

System: Family Doctor Loan Scheme

Scenario: Ka hoko tētahi tākuta ki roto i tētahi mahi tākuta whānui nā te kaipupuri
Given e pēhia ana ngā mahi tākuta whānui nā te kaipupuri e te pēhanga pūtea
When ka tukuna te Family Doctor Loan Scheme
Then ka taea e ngā mahi nā te kaipupuri te tārewa hei hoko ki roto
Output tae atu ki te 90% o te utu hoko mahi ka tārewahia
And te pae pūtea tārewa $500,000
And kāore he huamoni mō ngā tau tuatahi e rua
And 3% huamoni ā-tau mō te toenga e toe ana i muri i tērā
And 10 tau te wā katoa hei utu
And tae atu ki ngā pūtea tārewa 50 ia tau
And $25 million ia tau ka tārewahia mēnā ka kī katoa
And iti iho i te $8 million ia tau te huamoni kua ngaro mēnā ka kī katoa
Outcome neke atu i te 4.5 million ngā wā kua tohua ki te tākuta whānui ka wātea ia tau puta noa i te motu
Activates labour-medicard
