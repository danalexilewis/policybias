---
type: spec
id: sverigedemokraterna-a-till-o-nato
title: Natomedlemskap utan restriktioner, med robotförsvar och kärnuppgifter
status: draft
updated: 2026-08-23
summary: Natomedlemskapet stöds utan restriktioner i samverkan; alliansen ska stärka robotförsvaret, möta det kinesiska hotet och hålla sig till kärnuppgifter, inte miljöfrågor.
jurisdiction: SE
sources:
  - title: Nato
    url: https://www.sd.se/a-till-o/nato/
tags:
  - defence
party: sverigedemokraterna
clusters:
  - defence-security
money: no-figure
sourcePath: corpus/se-election-2026/sverigedemokraterna/a-till-o-nato.md
sourceDigest: "sha256-b75dba64f54fd198"
gaps:
  - vilka restriktioner i samverkan som ska tas bort, om några fortfarande finns, anges inte
  - hur mycket robotförsvaret ska stärkas, och vad det kostar Sverige, anges inte
  - vad "möta det kinesiska hotet" betyder i svensk övning, bas eller exportkontroll anges inte
  - hur Sverige ska få Nato att sluta arbeta med miljöfrågor anges inte
  - tidplan för de nämnda alliansförskjutningarna anges inte
---

# What the page states

> Det svenska Natomedlemskapet stöds, utan restriktioner i samverkan med alliansens medlemmar. En Natooption röstades igenom innan invasionen av Ukraina, och medlemskapet backades när det blev aktuellt. Natos robotförsvar ska stärkas, förmågan att möta det kinesiska hotet ska stärkas, och Nato ska hålla sig till kärnuppgifter — inte miljöfrågor, som andra organisationer sköter bättre.

System: Natomedlemskap utan restriktioner

Scenario: Sverige samverkar i Nato utan egna spärrar
Given Sverige är medlem i Nato
When samverkan med alliansens medlemmar sker utan restriktioner
Then Natomedlemskapet stöds
And Natos robotförsvar ska stärkas
And Nato ska stärka sin förmåga att möta det kinesiska hotet
And Nato ska fokusera på sina kärnuppgifter och inte på miljöfrågor
Outcome samverkan begränsas inte av svenska restriktioner
And alliansen styrs mot försvarsuppgifter snarare än miljö
