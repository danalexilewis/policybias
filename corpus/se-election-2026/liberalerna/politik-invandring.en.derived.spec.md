---
type: spec
id: liberalerna-politik-invandring-derived
title: "Asylum processing read as a system: speed without queue length"
status: draft
updated: 2026-08-23
summary: Protection grounds decide who may stay, but shorter processing, quota places and return all need staff the policy does not dimension, while labour immigration sits on a separate gate.
jurisdiction: SE
sources:
  - title: Invandring – Liberalerna
    url: https://www.liberalerna.se/politik/invandring
tags:
  - immigration
derivesFrom: liberalerna-politik-invandring
party: liberalerna
clusters:
  - migration-integration
money: no-figure
sourcePath: corpus/se-election-2026/liberalerna/politik-invandring.md
sourceDigest: sha256-0a4834e8fc4f9e1b
assumptions:
  - shorter asylum waits need caseworkers and accommodation while waiting; the policy calls the wait long, not the number of posts
  - humanitarian exceptions without assessment open the same queue the cull is meant to close
  - return with the EU and UN fails when the receiving state will not take the person; the policy assumes cooperation
  - labour immigration of key skills does not share a cap with asylum, so both gates can grow at once
lang: en
translationOf: liberalerna-politik-invandring-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-430125b214235185
---

# Our understanding

> Culling by protection grounds is a filter, not a number. Faster decisions need people to write them. Return needs a state that receives the person. Labour immigration is a second door that does not wait on the asylum queue.

System: Two gates, one unpriced agency

Scenario: A case sits in a long queue
Given processing times for asylum decisions are too long and must be shortened
When the case is decided solely on protection grounds
Then those fleeing war or persecution may stay
And those without grounds must leave
Outcome the queue shortens only if more decisions are written each week
But the policy does not say how many caseworkers that requires

Scenario: A firm sponsors a specialist while return stalls
Given labour immigration is good for Sweden and should be simple for firms
When the specialist is hired from outside the EU
Then lawful work sits beside asylum, not inside it
Outcome firms get the skills they asked for
But a refused asylum seeker still needs a return the EU and UN may not deliver
