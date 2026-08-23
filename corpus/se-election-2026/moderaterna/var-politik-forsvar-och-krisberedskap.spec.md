---
type: spec
id: moderaterna-var-politik-forsvar-och-krisberedskap
title: Nato, Ukrainastöd och upprustning till 3.5 procent av BNP
status: draft
updated: 2026-08-22
summary: Försvarsanslaget har höjts kraftigt, Ukraina ska stöttas långsiktigt och det militära målet 3.5 procent av BNP ska nås redan 2030, med lån nu och permanent finansiering till 2035.
jurisdiction: SE
sources:
  - title: "Moderaternas försvarspolitik 2026: Nato, Ukraina, totalförsvar och ett starkare svenskt försvar"
    url: https://moderaterna.se/var-politik/forsvar-och-krisberedskap
tags:
  - defence
party: moderaterna
clusters:
  - defence-security
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-forsvar-och-krisberedskap.md
sourceDigest: "sha256-385b507ed9963261"
gaps:
  - hur stor del av anslaget 2026 som är lånefinansierat anges inte
  - vad donerade Gripen C/D kostar att ersätta med nya E/F anges inte
  - hur många fler värnpliktiga som ska tas ut de kommande åren anges inte
  - hur civilplikt och civilt försvar ska bemannas i takt med det militära anslaget anges inte
---

# What the page states

> Sverige ska kunna avskräcka ett väpnat angrepp och möta hybridhot tillsammans med Nato. Försvaret rustas upp snabbt. Ukraina ska få långsiktigt militärt stöd. Totalförsvaret ska stärkas parallellt, och finansieringen ska på sikt bäras i balanserade offentliga finanser.

System: Upprustning, Nato och stöd till Ukraina

Scenario: Försvarsanslaget ska nå Natos militära mål
Given anslaget har höjts från 75 miljarder kronor 2022 till 175 miljarder kronor 2026
And det är 100 miljarder kronor mer per år
And Sverige väntas nå 2.8 procent av BNP 2026
And regeringen kunde nå det målet år 2025
When upprustningen fortsätter mot Natos mål
Then direkta militära utgifter ska nå alliansens mål tidigare än övriga allierade
Output 3.5 procent av BNP till direkta militära utgifter redan 2030
And 1.5 procent av BNP till säkerhets- och försvarsrelaterade investeringar
And delar av utbyggnaden lånefinansieras nu och ska bäras permanent så att de offentliga finanserna är i balans senast 2035
Outcome Sverige ska avskräcka Ryssland tillsammans med allierade i norra Europa

Scenario: Ukraina behöver flyg och långsiktigt stöd
Given Sverige har stött Ukraina militärt med 128 miljarder kronor sedan 2022
When stödet fortsätter
Then donerade plan ersätts med nya Gripen E/F till det svenska flygvapnet
Output 20 Gripen E/F som Ukraina förbereder köp av
And 16 JAS 39 Gripen C/D ur den egna flottan
And 40 miljarder kronor i stöd 2026
And lika mycket planerat för 2027
Outcome Ukrainas försvar är också en investering i svensk säkerhet

Scenario: Värnpliktiga och officerare ska stanna i systemet
Given dagersättningen för värnpliktiga och civilpliktiga höjs från 146 kronor till 200 kronor
And officersaspiranter höjs från 175 till 240 kronor
When antalet värnpliktiga ökar de kommande åren
Then villkor och utbildning ska också duga på den civila arbetsmarknaden
Output 25 miljarder kronor extra på materiel utöver övriga anslag
Outcome personalförsörjningen ska bära en större krigsorganisation
