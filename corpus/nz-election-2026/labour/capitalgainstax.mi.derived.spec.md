---
type: spec
id: labour-capitalgainstax-derived
title: "Ko te tāke hua rawa e pānuitia ana hei pūnaha: he here hauora tū tonu e pūteatia ana e te huri rawa"
status: draft
updated: 2026-08-18
summary: Ko te tāke i runga i te hokonga ka tārewa i te wā e pupuri ana te rawa, nō reira ka pūteatia tētahi here whakapau pūmau e tētahi rere ā-hurihanga.
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
derivesFrom: labour-capitalgainstax
assumptions:
  - ko te tāke e utua ana i te hokonga anake ka tārewa i te wā e pupuri ana te rawa; ko tēnei te hua lock-in noa, ehara i te kī kua tāia
  - he hurihanga te huri rawa, nō reira he hurihanga hoki te moni whiwhi i ngā hokonga
  - ko te $700 million ia tau kua tāia, he toharite matapae i roto i ngā tau kua tā kē $100 million, kātahi $1,350 million, nō reira kei ngā tau o muri te taumaha o te ara
  - he tū tonu, he ā-tangata te here hauora, nō reira me utu tētahi tau i raro i te toharite i wāhi kē, me whakaheke rānei te ratonga
  - ko te pīkaunga e whakaarohia nei kei te kaipupuri i te hokonga; e tohe ana te kaupapa here ka tautuhia ngā rēti e te tuku me te hiahia
sourceDigest: "sha256-6bc4a73d82f33c05"
lang: mi
translationOf: labour-capitalgainstax-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-3e230f69db54c4eb
---

# Tō mātou māramatanga

> Ko te tāke e utua ana i te hokonga anake ka tārewa i te wā e pupuri ana te rawa, nō reira ko ngā kaipupuri te kōwhiri i te wā ka riro i te Karauna te moni whiwhi. He hurihanga te huri rawa, engari he tū tonu, he ā-tangata te here hauora — me utu tētahi tau i raro i te toharite matapae i wāhi kē, me whakaheke rānei te ratonga.

System: Ko te tāke hua rawa i runga i ngā rawa hei pūtake moni whiwhi mō tētahi here hauora tū tonu

Scenario: Ka whakataurite te kaipupuri i te hoko me te pupuri i muri i te tīmatanga
Given tētahi tāke e utua ana ina hokona anake te rawa
And tētahi kaipupuri e pupuri ana i tētahi rawa me tētahi hua i muri i te tīmatanga kāore anō kia tutuki
When ka whakataurite te kaipupuri i te hoko ināianei me te pupuri
Then ka tārewa te nama i te wā e pupuri ana te rawa
# extrapolated: 0 is arithmetic from the sale-only trigger, not a published figure
Output 0 tāke e kohia ana i te wā e pupuri ana te rawa
Outcome ka taea e te kaipupuri te kōwhiri i te wā ka riro i te Karauna te moni whiwhi
But ka whakawhirinaki ngā kohinga a te Karauna ki ngā whakatau kāore i a ia te whakahaere

Scenario: Ka heke te huri rawa i te wā e tū ana te here hauora
Given e toru ngā toro tākuta kore utu ia tau e oatihia ana ki ia tangata o Aotearoa
And tētahi matapae kua tāia e toharite $700 million ia tau, me te $100 million i te tau tuatahi me te $1,350 million i muri
When ka heke te huri rawa i roto i tētahi paheketanga
Then ka noho te moni whiwhi o tērā tau i raro rawa i te toharite $700 million
Outcome me utu te whakapau hauora i tētahi pūtake kē, me whakaheke rānei
But kei ngā tūroro te mōrearea o te āputa pūtea kāore rātou i whai wāhi ki te hanga
Activates labour-medicard

Scenario: Ka kōkiri ngā kaipupuri i ngā hoko i mua i te tīmatanga
Given kāore he tāke i runga i tētahi hua i mua i te tīmatanga
And tētahi rā tīmatanga e mōhiotia ana
When ka hoko ngā kaipupuri me ngā hua nui kua pūmau i mua i tērā
Then ka wehe aua hua i te tūāpapa, kāore e tākea āke
Outcome he iti ake ngā tau tuatahi o te moni whiwhi i tā te pūkei hua e tohu ana
But ka tīmata te here hauora i mua i te pakeke o te moni whiwhi
