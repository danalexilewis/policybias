---
type: spec
id: moderaterna-var-politik-bostadspolitik
title: "Bostadspolitik"
status: draft
updated: 2026-08-22
summary: "Sverige ska vara ett land där unga kan flytta hemifrån och där fler familjer kan köpa ett eget hus – när man anstränger sig ska det gå att ta nästa steg i livet. Den moderatledda regeringen gör det enklare att bygga, billigare att låna och tryggare att bo."
jurisdiction: SE
sources:
  - title: "Bostadspolitik"
    url: https://moderaterna.se/var-politik/bostadspolitik/
tags: [schools-education]
party: moderaterna
clusters:
  - schools-education
money: no-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-bostadspolitik.md
sourceDigest: "sha256-c1c5e6f1d4bbf0f0"
gaps:
  - cost is not stated on the page
  - timetable is not stated on the page
---

# What the page states

> <head><meta charset="UTF-8"><script>if(navigator.userAgent.match(/MSIE|Internet Explorer/i)||navigator.userAgent.match(/Trident\/7\..*?rv:11/i)){var href=document.location.href;if(!href.match(/[?&]nowprocket/)){if(href.indexOf("?")==-1){if(href.indexOf("#")==-1){document.location.href=href+"?nowprocket=1"}else{document.location.href=href.replace("#","?nowprocket=1#")}}else{if(href.indexOf("#")==-1

System: Bostadspolitik

Scenario: Party states this policy
Given the 2026 Swedish general election is contested
When the party publishes this policy
Then <meta name="viewport" content="width=device-width, initial-scale=1">
Output Sverige ska vara ett land där unga kan flytta hemifrån och där fler familjer kan köpa ett eget hus – när man anstränger sig ska det gå att ta nästa steg i livet. Den moderatledda regeringen gör det en
Outcome the claim is the party's stated position
