---
type: spec
id: opportunity-citizens-voice
title: "Citizens' assemblies with a Parliamentary Commissioner"
status: draft
updated: 2026-08-18
summary: Randomly selected citizens' assemblies on long-term issues, paid a stipend, backed by a Parliamentary Commissioner so recommendations are not ignored.
jurisdiction: NZ
sources:
  - title: Citizens' Voice
    url: https://www.opportunity.org.nz/citizens-voice
  - title: Citizens' Voice policy
    url: https://cdn.opportunity.org.nz/documents/policy/citizens-voice-policy.pdf
tags:
  - democracy
party: opportunity
clusters:
  - maori-affairs
money: no-figure
sourcePath: corpus/nz-election-2026/opportunity/citizens-voice.md
sourceDigest: "sha256-27241b37ad215189"
gaps:
  - how many assemblies run each year is not fixed
  - the Commissioner's powers to force a parliamentary response are not specified
  - which issues are in scope in the first term is not listed as a programme
  - stipend rate is not stated beyond a part-time salary equivalent
  - how assembly recommendations interact with MMP coalition agreements is not stated
---

# What the page states

> Sortition, a population-reflecting mix, a stipend like jury duty, 6 to 12 months for a complex issue, several full-scale assemblies at around $10 to $15 million a year, and a Parliamentary Commissioner to advocate for the recommendations are on the source page. The Watercare Auckland assembly is named as a local precedent. No first-term issue list is locked.

System: Citizens' Voice

Scenario: A long-term issue goes to an assembly
Given select-committee consultation that favours people with time and confidence to submit
When a citizens' assembly is convened on a gridlocked issue such as climate adaptation, housing, superannuation, constitutional change, or AI in the workforce
Then members are selected at random in a mix that reflects the population
And they are paid a stipend equivalent to a part-time salary, designed around work and family
And a complex issue can take 6 to 12 months part-time
And a Parliamentary Commissioner advocates for the recommendations once deliberation is done
Output around $10 to $15 million a year for several full-scale assemblies
Outcome everyday people, not only lobbyists and party bases, shape the long-term choice
Activates opportunity-intergenerational-infrastructure
