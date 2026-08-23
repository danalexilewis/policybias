---
type: spec
id: socialdemokraterna-var-politik-a-till-o-karnkraft
title: "Förlängd drift, ny kärnkraft på befintliga orter och teknikneutralt stöd"
status: draft
updated: 2026-08-23
summary: Befintliga reaktorer ska kunna köras längre, ny kärnkraft tillåts där den redan finns, och statligt stöd ska vara teknikneutralt för fossilfri kraft.
jurisdiction: SE
sources:
  - title: Kärnkraft
    url: https://www.socialdemokraterna.se/var-politik/a-till-o/karnkraft
tags:
  - energy
party: socialdemokraterna
clusters:
  - energy-power
money: no-figure
sourcePath: corpus/se-election-2026/socialdemokraterna/var-politik-a-till-o-karnkraft.md
sourceDigest: sha256-2908cb23c25da6c2
gaps:
  - hur mycket el effekthöjningarna tillför är inte angivet
  - hur stort det teknikneutrala stödet till fossilfri kraft är är inte angivet
  - hur den tyska ägarandelen i Oskarshamn ska lösas in, och till vilket pris, är inte angivet
  - hur tillkommande kärnavfall ska tas om hand utöver att staten säkrar hanteringen är inte angivet
---

# What the page states

> Kärnkraften är, tillsammans med vattenkraften, viktig för en leveranssäker elförsörjning.
> Drifttiden ska förlängas och effekthöjningar genomföras där ekonomi- och säkerhetskrav kan uppfyllas.
> Ny kärnkraft tillåts där produktion redan finns — Ringhals, Oskarshamn och Forsmark — och staten ska ha demokratisk kontroll över placering, säkerhet och avfall.

System: Förlängd drift och ny kärnkraft på befintliga orter

Scenario: Ny reaktor prövas bara där kärnkraft redan finns
Given kärnkraft som utgör en betydande del av elsystemet och skapar balans tillsammans med vattenkraft
When drifttiden förlängs och ny kärnkraft tillåts på platser med befintlig produktion
Then Ringhals, Oskarshamn och Forsmark kan få ny produktion, och staten behåller kontroll över placering och säkerhet
Outcome statligt stöd kan utgå till all storskalig fossilfri kraftproduktion, och kraftverket i Oskarshamn ska få en svensk ägare
