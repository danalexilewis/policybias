---
type: spec
id: opportunity-citizens-voice-derived
title: "Citizens' Voice read as a system: advice that still needs votes"
status: draft
updated: 2026-08-18
summary: An assembly can deliberate; it cannot pass a law. Without a binding parliamentary hook, the Commissioner is an advocate, and a later government can still shelve the result.
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
derivesFrom: opportunity-citizens-voice
assumptions:
  - a Parliamentary Commissioner who "advocates" is not a veto or a binding vote; we treat the output as advice unless a later statute says otherwise
  - 6 to 12 months of deliberation sits across at least one Budget, so an assembly on tax or housing can be overtaken by a coalition deal
  - $10 to $15 million a year is small next to a botched infrastructure project, which is the policy's comparison, not a proof that recommendations will be adopted
sourceDigest: "sha256-27241b37ad215189"
---

# Our understanding

> Sortition, a stipend, six to twelve months of deliberation, $10 to $15 million and a Commissioner to advocate — but no vote, veto or statutory duty on ministers to implement.

System: Advice that still needs votes

Scenario: An assembly reports and Parliament is otherwise occupied
Given recommendations that need political heft so they are not ignored
When the Commissioner tables the report
Then MPs may still prefer their base, their lobbyists, or a coalition deal
Outcome the assembly has done the slow work
But MPs can still ignore the assembly unless they choose to vote it through
Activates opportunity-clean-up-politics
