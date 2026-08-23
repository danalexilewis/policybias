---
type: spec
id: kristdemokraterna-var-politik-politik-a-till-o-migration
title: Asyl via kvot, nordisk mottagningsnivå och skärpt arbetskraftsinvandring
status: draft
updated: 2026-08-23
summary: Asyl ska i huvudsak sökas via kvotflyktingssystemet, mottagandet ska ligga på nordisk genomsnittsnivå, och arbetskraftsinvandring skärps i låglöneyrken med undantag för vissa bristyrken.
jurisdiction: SE
sources:
  - title: Migration
    url: https://kristdemokraterna.se/var-politik/politik-a-till-o/migration
tags:
  - immigration
party: kristdemokraterna
clusters:
  - migration-integration
money: no-figure
sourcePath: corpus/se-election-2026/kristdemokraterna/var-politik-politik-a-till-o-migration.md
sourceDigest: sha256-38428a6462201fa6
gaps:
  - vad nordisk genomsnittsnivå innebär i antal personer anges inte
  - storleken på det höjda lönekravet anges inte
  - hur återvändandet ska verkställas när asylansökan avslås anges inte
---

# What the page states

> Öppenheten och den fria rörligheten inom EU ska värnas genom stärkt kontroll av EU:s yttre gräns. Säkra och lagliga vägar, som kvotflyktingssystemet, ska vara den huvudsakliga metoden att söka asyl. Asylprövningen ska vara rättssäker och den som saknar skyddsskäl ska lämna landet. Asylmottagandet ska hamna på nordisk genomsnittsnivå. Regler ska främja kvalificerad arbetskraftsinvandring och skärpas i låglöneyrken, med undantag för vissa bristyrken bland annat i vården.

System: Migration via kvot och skärpt arbetskraftsinvandring

Scenario: Den som får nej ska lämna landet
When kvotflyktingssystemet görs till huvudsaklig väg att söka asyl
Then asylprövningen ska vara rättssäker
And den som saknar skyddsskäl och får nej lämnar landet
Outcome asylmottagandet ska hamna på nordisk genomsnittsnivå

Scenario: Låglöneyrken möter ett höjt lönekrav
When reglerna för arbetskraftsinvandring i låglöneyrken skärps
Then fusk, utnyttjande och undanträngning av personer i utanförskap ska motverkas
Outcome vissa bristyrken, bland annat vårdyrken, undantas från det förhöjda lönekravet
