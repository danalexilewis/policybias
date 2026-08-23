---
type: spec
id: green-drink-swim-fish-derived
title: "Ko te inu, te kaukau me te hī ika e pānuitia ana hei pūnaha: te pānga o te pāhūpāhū, te para wai me te tārawa takere kāore he here nama"
status: draft
updated: 2026-08-22
summary: Ko ngā wawaotanga e toru kua whakaingoatia e here ana i ngā pāmu mō te pāhūpāhū, i ngā kaunihera mō te para wai, i ngā kaihī ika mō te tārawa takere; kāore tētahi o ngā here i tāia.
jurisdiction: NZ
sources:
  - title: For people and planet
    url: https://www.greens.org.nz/drink_swim_fish
  - title: People and nature first in Greens' rivers and oceans policy
    url: https://www.greens.org.nz/people_and_nature_first_in_greens_rivers_and_oceans_policy
tags:
  - environment
party: green
clusters:
  - environment-rural
money: no-figure
sourcePath: corpus/nz-election-2026/green/drink_swim_fish.md
sourceDigest: "sha256-4af5cf7f6d220476"
derivesFrom: green-drink-swim-fish
assumptions:
  - ko te whakaheke i ngā here pāhūpāhū mō te wai inu e here ana i ngā whakamahi whenua e whakaputa pāhūpāhū ana, ko ngā pāmu te nuinga
  - ko ngā ture tuku para wai kaha ake e here ana i ngā kaunihera me ngā pūtahi e tuku ana
  - ko te whakakore āta i te tārawa takere kino e here ana i ngā kaihī ika e whakamahi ana
  - kāore mātou e tāpiri nama wawaotanga, nā te mea ka tāia e te kaupapa here te 100,000 anake hei māuiui o te āhuatanga o nāianei
lang: mi
translationOf: green-drink-swim-fish-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-44bda60739c20d0f
---

# Tō mātou māramatanga

> Ko ngā here wai inu, ngā ture para wai, me te whakakore āta i te tārawa takere te huarahi e inumia ai, e kaukaungia ai, e hīia ai ngā awa me ngā takutai. Kei ngā pāmu, ngā kaunihera me ngā kaihī ika te utu. Kāore anō ngā nama e here ana i a rātou kia tuhia.

System: Ngā ture inu-kaukau-hī ika hei pānga pāhūpāhū, para wai me te tārawa

Scenario: Ka herea ngā pāmu e ngā here pāhūpāhū
When ka whakahekea ngā here pāhūpāhū o te wai inu
Then ka pā te ture kaha ake ki ngā pāmu e whakaputa pāhūpāhū ana
Outcome ka taea e te wai inu te paahi i te whakamātautau mēnā ka here te here
But kei ngā pāmu te utu o te tutuki i tētahi here kāore anō rātou kia pānui
Activates Synthetic nitrogen fertiliser is phased out

Scenario: Ka herea ngā kaunihera e ngā ture para wai
When ka whakakaha ngā ture mō ngā tuku para wai
Then ka pā te ture kaha ake ki ngā kaunihera me ngā pūtahi e tuku ki ngā awa me ngā takutai
Outcome ka taea e ngā awa me ngā takutai te noho hei wāhi kaukau mēnā ka here te ture
But kei ngā kaunihera te utu whakahou i te wā e tuhituhi kore ana te paerewa e here ana i a rātou

Scenario: Ka herea ngā kaihī ika e te whakakore āta i te tārawa takere
When ka whakakorea āta te tārawa takere kino
Then ka ngaro tērā tikanga i ngā kaihī ika e whakamahi ana
Outcome ka taea e te moana te ora anō mēnā ka kapi i te whakakore āta ngā papa e tika ana
But ka ngaro te tikanga o ngā kaihī ika i mua i tō rātou mōhio ko ēhea papa, ā, āhea
Activates green-manifesto-2026-oceans-and-fisheries
