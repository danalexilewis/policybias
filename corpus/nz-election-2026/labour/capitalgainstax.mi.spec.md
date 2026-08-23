---
type: spec
id: labour-capitalgainstax
title: "Tāke hua rawa mō te whenua, kua tāwharau ki te hauora"
status: draft
updated: 2026-08-21
summary: He tāke 28% mō ngā hua i muri i te tīmatanga mō ngā rawa haumi arumoni me ngā whare noho, ā, ka tuku te katoa o ngā moni ki te hauora.
jurisdiction: NZ
sources:
  - title: Capital Gains Tax
    url: https://www.labour.org.nz/capitalgainstax
  - title: Labour CGT policy document
    url: https://www.labour.org.nz/media/pfvguai5/labour-cgt.pdf
tags:
  - taxation
  - healthcare
party: labour
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/labour/capitalgainstax.md
sourceDigest: "sha256-6bc4a73d82f33c05"
gaps:
  - kāore i whakapuakina te utu o te whakatau uara o ngā rawa e pā ana i te tīmatanga
  - kāore i whakapuakina ko wai ka mahi i ngā whakatau uara, ko wai rānei ka utu
  - kāore he whakatau tata mō te tokomaha kaipupuri e hoko wawe ana kia karo i te tāke
  - kāore i whakapuakina ka aha te kī taurangi hauora mēnā ka iti iho te moni i te matapae
  - kāore i whakapuakina te tukatuka o tētahi rawa e neke ana i waenga i te kāinga whānau me te rēti
lang: mi
translationOf: labour-capitalgainstax
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-ba0c075713ffefb8
---

# Ko tā te whārangi e kī ana

> Ka tākehia ngā hua o ngā rawa haumi arumoni me ngā whare noho i te hokonga i muri i te tīmatanga, ā, ka wātea te kāinga whānau. Ka tāwharautia te katoa o ngā moni ki te hauora. Ko te tīmatanga te 1 July 2027.

System: Tāke hua rawa mō te whenua, kua tāwharau ki te hauora

Scenario: Ka hoko tētahi kaipupuri haumi i tētahi rawa haumi whare noho i muri i te tīmatanga
Given he pūnaha tāke kāore he tāke whānui mō ngā hua rawa
And kotahi i roto i te tokono ngā tāngata o Aotearoa kāore e taea te utu kia kite i te tākuta
And tētahi rawa haumi whare noho kua whakatauhia te uara i te tīmatanga
When ka hoko te kaipupuri haumi i te rawa
Then ko te hua anake i muri i te tīmatanga ka tākehia
Output 28% o te hua i muri i te tīmatanga ka utua hei tāke
And 100% o ngā moni kua tāwharau ki te hauora
And $700 million te toharite ia tau e kohia ana puta noa i te wā matapae
And $100 million i te tau matapae tuatahi
And $385 million i te tuarua
And $965 million i te tuatoru
And $1,350 million i te 2030 me ngā tau kei tua
Outcome ka tākehia ngā hua whenua pērā i ētahi atu moni whiwhi pakihi
Activates labour-medicard

Scenario: Ka hoko tētahi kāinga nōna anake tōna kāinga whānau i taua kāinga
Given tētahi kāinga ko tōna kāinga whānau anake te rawa
When ka hoko te kāinga i te kāinga
Then kāore e pā te tāke hua rawa
Output kāore he tāke mō te hokonga
Outcome i roto i te tekau, e iwa ngā tāngata o Aotearoa kāore ō rātou rawa e tae ai te tāke
