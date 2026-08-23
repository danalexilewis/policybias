---
type: spec
id: green-power-for-all-of-us-derived
title: "Ko te mahere hiko e pānuitia ana hei pūnaha: tētahi kaiwhakaputa tūmatanui ki ngā gentailer, me ngā pūtea tārewa e piki ana i te nama kāinga"
status: draft
updated: 2026-08-21
summary: Ka uru a Kiwipower ki te māketi hei kaiwhakaputa a te Karauna, hei kaihoko whakapūmau hoki; ka waiho tonu ngā pūtea tārewa huamoni-kore i te kāinga e nama ana i te tōpūtanga; ko ngā pūngao hou o te hapori me ngā whare noho Māori, he kōpaki $280 million ngātahi.
jurisdiction: NZ
sources:
  - title: For people and planet
    url: https://www.greens.org.nz/power_for_all_of_us
  - title: Green Party launches plan to cut power bills and take power back from the big energy companies
    url: https://www.greens.org.nz/green_party_launches_plan_to_cut_power_bills_and_take_power_back_from_the_big_energy_companies
  - title: Full Power Policy
    url: https://assets.nationbuilder.com/beachheroes/pages/74612/attachments/original/1784510079/The_Greens'_Full_Power_Policy.pdf
tags:
  - energy
  - cost-of-living
  - climate
party: green
clusters:
  - energy-power
money: named-figure
sourcePath: corpus/nz-election-2026/green/power_for_all_of_us.md
derivesFrom: green-power-for-all-of-us
assumptions:
  - ko tētahi kaiwhakaputa nā te iwi e haumi ana i te whakapūmau, e whakatuwhera ana i te kaha ki ngā hoa whakataetae, he hoa whakataetae ki ngā gentailer nui e whā, ehara i te huarahi tautoko anake; e whakaingoatia ana e te kaupapa here te rahunga māketi, engari ehara tērā anga
  - ka hanga tonu tētahi pūtea tārewa huamoni-kore i te nama kāinga ōrite ki te tōpūtanga kia utua, kia whakawāteatia rānei i te hoko; e whakanui ana te kaupapa here i te utu taea, ehara i te pānga ā-puka
  - ko te $280 million he tātainga mai i te kōpaki hapori $200 million me te pūtea whare noho Māori $80 million, ehara i tētahi rārangi kotahi i tāia e te kaupapa here
  - ka tapahi a Warmer Kiwi Homes me te hiko rā o ngā whare tūmatanui i ngā pire, kāore e whakatakoto i te nama pūtea tārewa ōrite ki te rēneti; he rerekē te pīkaunga mā te tikanga
sourceDigest: "sha256-753c929981bf1c73"
lang: mi
translationOf: green-power-for-all-of-us-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-5f9389492eab9b1c
---

# Tō mātou māramatanga

> Ka uru a Kiwipower ki te māketi hei kaiwhakaputa a te Karauna, hei kaihoko whakapūmau hoki. Ka waiho tonu ngā pūtea tārewa huamoni-kore i te kāinga e nama ana i te tōpūtanga. Ko ngā pūngao hou o te hapori me ngā whare noho Māori he whakapau tāpiri a te Karauna, ehara i te huarahi pūtea tārewa ōrite.

System: Te whakaputa tūmatanui, ngā pūtea tārewa kāinga, me ngā pūngao hou ā-hapori hei tāhuhu pūngao kotahi

Scenario: Ka haumi a Kiwipower, ka whakatuwhera i te whakapūmau ki ngā hoa whakataetae
Given e whakahaere ana ngā kamupene hiko nui e whā i tua atu i te 85 ōrau o ngā māketi hoko iti me te whakaputa
And he tohatoha $980 million mō Kiwipower i roto i ngā tau e whā
When ka haumi a Kiwipower i te whakaputa pūngao hou me te whakapūmau, ā, ka wātea te kaha ki ngā kaiwhakaputa me ngā kaihoko motuhake
Then ka noho tētahi kaitākaro nā te Karauna i ngā māketi ērā e rahi ana i ngā kamupene nui
Output $980 million appropriation for Kiwipower over four years
Outcome e whakaarohia ana ka puta te pēhanga whakaheke utu i te whakataetae nui ake me te whakapūmau, ehara i ngā takoha kāinga anake
But kei te pupuri tonu ngā kamupene nui i te nuinga o ngā rawa o nāianei i te wā e hanga ana te hinonga hōu

Scenario: Ka tango tētahi kaipupuri kāinga i tētahi pūtea tārewa pūngao mā te huamoni-kore
Given ngā pūtea tārewa e here ana ki te whenua, e utua ana i roto i te wā
And $421.2 million opex katoa hei tautoko i te huamoni-kore
When ka whakaū te kaipupuri kāinga i te hiko rā, i ngā pūhiko rānei mā te kaupapa
Then ka nama te kāinga i te tōpūtanga kia whakawāteatia e ngā utunga, e tētahi hoko rānei
Output $421.2 million total opex for zero-interest loans
Outcome ka taea te heke o te pire, i te wā e noho ana te nama ki te kāinga
But he nama kāinga te pūtea tārewa ahakoa he kore te reiti huamoni

Scenario: Ka utua ngātahi ngā pūngao hou o te hapori me ngā whare noho Māori
Given $200 million mō ngā kaupapa pūngao ā-hapori i roto i ngā tau e whā
And $80 million mō te pūngao hou mō ngā whare noho Māori i roto i ngā tau e whā
And $460 million capex katoa mō te hiko rā o ngā whare tūmatanui
And $969.8 million opex katoa mō Warmer Kiwi Homes
When ka rere aua kōpaki
Then ka tau te rangatiratanga me te āwhina pire ki ngā hapori, ki ngā whare noho Māori, ki ngā rēneti tūmatanui, ehara ki ngā puka pūtea tārewa tūmataiti
# extrapolated: ko te $280 million he $200 million ā-hapori me te $80 million whare noho Māori
Output $280 million combined community and Māori housing renewables over four years
And $460 million total capex for public housing solar
And $969.8 million total opex for Warmer Kiwi Homes
Outcome ka taea e ngā rēneti me ngā kaupapa marae te tapahi i ngā pire, kāore e tango i te huarahi pūtea tārewa a te kaipupuri kāinga
But ka utu tonu te Karauna i ngā kōpaki katoa kua tāia

Scenario: Ka whakakapi te whakapūmau tau maroke i tētahi tauranga LNG
When ka kirimana a Kiwipower i te whakapūmau, ehara i tētahi tauranga LNG
Then ka hanga te Karauna i te whakapūmau pūngao hou, ehara i te here i te hau kawemai
Outcome ka tutuki te mōrearea tau maroke, kāore he huarahi kawemai mōkohu hōu
But me kirimana, me utu tonu te Karauna i te ranunga whakapūmau e kōwhiria ana
