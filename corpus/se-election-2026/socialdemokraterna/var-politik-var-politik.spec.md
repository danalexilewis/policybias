---
type: spec
id: socialdemokraterna-var-politik-var-politik
title: "Vår politik"
status: draft
updated: 2026-08-22
summary: "Vi vill hålla ihop Sverige, här hittar du Socialdemokraternas förslag för ett starkare Sverige."
jurisdiction: SE
sources:
  - title: "Vår politik"
    url: https://www.socialdemokraterna.se/var-politik/var-politik
tags: [health-care]
party: socialdemokraterna
clusters:
  - health-care
money: no-figure
sourcePath: corpus/se-election-2026/socialdemokraterna/var-politik-var-politik.md
sourceDigest: "sha256-b2f896b3614792b5"
gaps:
  - cost is not stated on the page
  - timetable is not stated on the page
---

# What the page states

> <html lang="sv" class="sv-no-js sv-template-landningssida-med-meny-2024">

System: Vår politik

Scenario: Party states this policy
Given the 2026 Swedish general election is contested
When the party publishes this policy
Then <script nonce="1177cb60-9e28-11f1-af97-3ba5e015ec42">(function(c){c.add('sv-js');c.remove('sv-no-js');})(document.documentElement.classList)</script>
Output Vi vill hålla ihop Sverige, här hittar du Socialdemokraternas förslag för ett starkare Sverige.
Outcome the claim is the party's stated position
