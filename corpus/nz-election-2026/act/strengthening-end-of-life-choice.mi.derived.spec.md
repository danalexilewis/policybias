---
type: spec
id: act-strengthening-end-of-life-choice-derived
title: "Ngā whakatikatika End of Life Choice e pānuitia ana hei pūnaha: he āheinga whānui ake me te whakawātea whakaae-whakamutunga iti"
status: draft
updated: 2026-08-21
summary: Ko te tango i ngā tūtohutanga arotake katoa e 25, me te whakakapi i te matapae e ono marama ki te mate whakamua kua pakeke e mate, e whakawhānui ana i ēhea ka tika, i te wā e tuku ana tētahi whakawātea iti i te whakahaere kia haere i muri i te ngaro o te āheinga.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/strengthening-end-of-life-choice
  - title: End of Life Choice Amendment Bill
    url: https://assets.nationbuilder.com/actnz/pages/28682/attachments/original/1756344552/End_of_Life_Choice_Amendment_Bill-v3.1.pdf
tags:
  - healthcare
party: act
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/act/strengthening-end-of-life-choice.md
derivesFrom: act-strengthening-end-of-life-choice
assumptions:
  - ko te whakakapi i tētahi matapae e ono marama ki tētahi āhuatanga whakamua kua pakeke e tūmanakohia ana kia mate, e tuku ana i ngā tāngata kāore e taea e te tākuta te whakatakoto ki roto i ngā marama e ono
  - ka whakawhānui tērā panoni i te puna tika ahakoa ka noho ētahi atu whakamātautau
  - ko te whakawātea iti o te whakaae whakamutunga e kī ana ka taea te rongoā te hoatu i muri i te ngaro o te āheinga mēnā i tīpakohia te rā i te wā e mōhio ana
  - ko te whakatinana i ngā tūtohutanga arotake katoa e 25 e huri ana i te tukanga me te tirotiro i tua atu i te ture matapae anake
sourceDigest: "sha256-a89e3dab3adee6da"
lang: mi
translationOf: act-strengthening-end-of-life-choice-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-3862acec39fc9467
---

# Tō mātou māramatanga

> Ka noho ngā ārai, ā, ko te ture e ono marama te ārai nui rawa. Ko te whakakapi matapae e whakawhānui ana i te āheinga ki ngā tāngata kei te heke kāore e taea te huri, kāore e taea te wātaka o tō rātou mate ki ngā marama e ono, ā, ka tuku te whakawātea iti i te whakahaere i muri i te ngaro o te āheinga. Ka tangohia ngā tūtohutanga arotake katoa e rua tekau mā rima hei pōkai; kāore i rārangitia i konei.

System: Te āheinga End of Life Choice me te whakaae i muri i te whakatikatika

Scenario: Ka whakatinanahia ngā tūtohutanga arotake katoa e 25
Given i tūtohu te arotake ā-ture tuatahi a Manatū Hauora i ngā panoni e 25 ki te ture
And tata ki te 1,700 ngā tāngata o Aotearoa kua tīpako i tētahi mate āwhina
And nui ake i te 300 ngā kaitono i kitea kāore i tika i tērā tau, ā, 42 ngā tāngata i unu
When ka whakatinanahia ngā tūtohutanga katoa e 25
Then ka huri te tukanga, te whakangungu me te tirotiro a te Registrar ki te pōkai arotake
Outcome ka pā ngā kaiwhakahaere ki te whakangungu kua tohua me te tirotiro kaha ake o te whakaae kāore he pēhanga
But ka riro i ngā kaiwhakahaere ngā panoni tukanga e rua tekau mā rima kāore he rārangi tirotiro kua whakaputaina i tēnei rauemi

Scenario: Ka whakakapia te matapae e ono marama
Given kua aukati te here matapae e ono marama i ngā tāngata e mate ana, kei te heke kāore e taea te huri, e mamae nui ana ina kāore e taea e te tākuta te kī ka puta te mate i roto i ngā marama e ono
When ka whakakapia tērā here ki tētahi āhuatanga whakamua kua pakeke e tūmanakohia ana kia mate
Then ka taea e ngā tāngata i waho o te matapihi e ono marama te tutuki i te whakamātautau āhua-matapae
Output the other eligibility tests kept, including age at least 18, advanced irreversible decline, unbearable suffering that cannot be tolerably relieved, and competence to make an informed decision
Outcome ka whānui ake te puna tika ki te ture e ono marama
But ka taea tonu te mate o te tūroro te tae mai i waho o tētahi wātaka e taea e te tohunga te whakatau i mua

Scenario: Ka whakamahia tētahi whakawātea iti o te whakaae whakamutunga
Given i tīpako tētahi tangata kua aromatawaihia he tika i te rā me te wā i te wā e mōhio ana
When ka ngaro te āheinga o tērā tangata i mua i te rā kua tīpakohia
Then ka taea te whakahaere te haere i raro i te whakawātea iti
Outcome kāore e hiahiatia i ngā wā katoa te whakaae whakamutunga i te wā o te whakahaere
But ka ngoikore te hipanga whakaae whakamutunga ahakoa e kīia ana ka noho pūmau ētahi atu ārai o te Ture
