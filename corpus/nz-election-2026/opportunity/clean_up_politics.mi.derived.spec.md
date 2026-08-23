---
type: spec
id: opportunity-clean-up-politics-derived
title: "Ko te Whakatikatika Tōrangapū hei pūnaha: ngā taupane ka taea tonu e ngā kaituku mōhio te huri atu"
status: draft
updated: 2026-08-18
summary: He taupane $30,000 me te aukati kamupene ka waiho tonu ngā ara taha-hononga me te mahi tūao ki te kore ērā e katihia; kāore tētahi rōpū $40 miriona e hanga i ngā whakataunga hara i a ia anake.
jurisdiction: NZ
sources:
  - title: Clean-up Politics
    url: https://www.opportunity.org.nz/clean_up_politics
  - title: Clean Up Politics policy
    url: https://cdn.opportunity.org.nz/documents/policy/Opportunity Policy - Clean Up Politics.pdf
tags:
  - democracy
party: opportunity
clusters:
  - crime-justice
money: named-figure
sourcePath: corpus/nz-election-2026/opportunity/clean_up_politics.md
derivesFrom: opportunity-clean-up-politics
assumptions:
  - ka taea te huri i tētahi taupane me te aukati kamupene ki te kore he ture taha-hononga mā ngā mema whānau, ngā rōpū hāngai, te mahi kampeni kore utu rānei
  - kāore tētahi tau-kotahi whakamātao e kapi i ngā kaimahi, ngā hoa rangatira, ngā tāngata kāore i pupuri warati
  - ehara te tū i tētahi rōpū $40 miriona i te wikitoria keehi; kei reira kē Te Tari Hara Tāware i te $17 miriona pea
sourceDigest: "sha256-6ae8a35ec67fe9cf"
lang: mi
translationOf: opportunity-clean-up-politics-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-c5cc6fcdc1039907
---

# Tō mātou māramatanga

> He taupane $30,000 ia kaituku, he aukati kamupene me te tarahiti, $1,000 whakapuaki, me tētahi kete $52 miriona — engari kei te tuwhera tonu ngā ara taha-hononga, ā, kāore anō kia tau te wehenga mahi a te rōpū hōu me Te Tari Hara Tāware.

System: Ngā taupane ka taea tonu te huri atu

Scenario: Ka eke tētahi kaituku ki te taupane $30,000
Given he taupane $30,000 ia rōpū ia kaituku ia pōtitanga me te aukati i ngā koha kamupene me te tarahiti
When e hiahia ana tētahi kaitautoko taonga ki te tuku nui ake
Then ka taea e te tangata tuarua, te wā ngaio kore utu rānei, te neke uara ki te kore ērā ara e katihia
Outcome he tino te taupane moni kua tapaina mō te haki kotahi
But ka taea tonu e ngā kaituku taonga te huri uara mā ngā mema whānau, te mahi kore utu rānei

Scenario: Ka huaki te rōpū ātete-pirau
Given e $40 miriona pea ia tau mō tētahi rōpū hōu, ki te $17 miriona pea mō Te Tari Hara Tāware
When ka tū te rōpū hōu
Then e rua ngā tari pono o Aotearoa ki te kore ngā mahi e wehea
Outcome he kaitūhura pūmau i mua i te akiaki a tētahi raru
But ka taea e te inaki, te whakataetae, te mana koretake rānei te whakapau i te $40 miriona me te kore e huri i ngā reiti whakapae
