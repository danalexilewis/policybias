---
type: spec
id: opportunity-healthy-oceans-derived
title: "Ko te Healthy Oceans e pānuitia ana hei pūnaha: he tapahi hopu 14% e pā tonu ana ki te whakataunga"
status: draft
updated: 2026-08-18
summary: Ko te tiaki i te 86% o ngā momo e mōrearea ana mā te tapahi hopu 14% ka whakaiti tonu i te uara kuota, tae atu ki te kuota whakataunga Māori; ko te 30% rāhui i te 2035 he kati ā-wāhi, ā, kāore i rārangitia ngā wāhi tuatahi.
jurisdiction: NZ
sources:
  - title: Oceans
    url: https://www.opportunity.org.nz/healthy-oceans
  - title: Oceans policy
    url: https://cdn.opportunity.org.nz/documents/policy/oceans-policy.pdf
tags:
  - environment
party: opportunity
clusters:
  - environment-rural
money: named-figure
sourcePath: corpus/nz-election-2026/opportunity/healthy-oceans.md
derivesFrom: opportunity-healthy-oceans
assumptions:
  - ka whakaiti te tapahi hopu 14% i te uara kuota, tae atu ki te kuota whakataunga; ehara te "tautoko i te whakawhitinga" i te pupuri i te uara kuota kia rite
  - me kōwhiri wāhi te 30% rāhui moana i te 2035; ka ngaro te uru o ngā kaihao hākinakina me ngā kaihao tikanga e tata ana ki aua wāhi ahakoa ka piki te hopu i wāhi kē
  - ko te $100 miriona ā-tau o te utu a te Karauna me te kohi utu a te ahumahi kāore anō kia tohua ko wai te kaiutu mō ngā kāmera me ngā huringa waka
sourceDigest: "sha256-aeee33902a089ae3"
lang: mi
translationOf: opportunity-healthy-oceans-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-0e681fbb4104f95e
---

# Tō mātou māramatanga

> E toru tekau ōrau ngā rāhui moana i te 2035, he tapahi hopu 14% hei tiaki i te 86% o ngā momo e mōrearea ana, kei ngā kamupene e toru te 60% o te kuota, ā, ka pā ki te hī ika arumoni Māori — engari kāore te kuota whakataunga e pupuritia katoatia, ā, kāore i rārangitia ngā kati tuatahi.

System: He tapahi hopu e pā tonu ana ki te whakataunga

Scenario: Ka tapahia te kuota kia piki te papatipu
Given e pupuri ana ngā kamupene e toru i te 60% o te kuota, me tētahi pānga arumoni Māori nui
When ka whakaitia te hopu mā te 14%, ā, ka piki te pae taketake mai i te 40% ki te 50% o te papatipu taketake
Then ka iti ake te hopu kua whakamanatia mā ngā kaipupuri kuota, tae atu ki ngā kaipupuri whakataunga
Outcome e kī ana te kaupapa here ka kawea te nuinga o te whakatikatika e ngā kamupene nui
But ka taea e tētahi kaiwhakahaere iti, tētahi iwi rānei ko tōna whakataunga he kuota, te ngaro i te moni whiwhi kāore te pūtea whakawhitinga e whakakapi aunoa
Activates opportunity-honouring-te-tiriti

Scenario: Ka rāhuitia te toru tekau ōrau o te moana
Given e 0.5% kei te rāhui i tēnei rā, me te whāinga 30% i te 2035
When ka pānuitia ngā kati nui tuatahi
Then ka mutu te hī ika i aua wai
Outcome tērā pea ka pai ake te hopu i te taha, koinā te kerēme hākinakina o te kaupapa here
But ka ngaro te uru o ngā hapori tuatahi e pātata ana ki tētahi rāhui hou i mua i te whakamana o tērā pānga taha
