---
type: spec
id: national-solar
title: "Home Energy Fund me ngā pūngao whakahou iti e whakaaetia ana"
status: draft
updated: 2026-08-21
summary: Ka tuku te Home Energy Fund i ngā pūtea tārewa e tekau tau te here whenua, me te $7 million hea Karauna, me ngā ture mahi e whakaaetia ana ā-motu mō te hiko rā tuanui me ngā pūhiko.
jurisdiction: NZ
sources:
  - title: Home Energy Fund
    url: https://www.national.org.nz/solar
tags:
  - energy
  - cost-of-living
party: national
clusters:
  - energy-power
money: named-figure
sourcePath: corpus/nz-election-2026/national/solar.md
sourceDigest: "sha256-e8603daa6d161a87"
gaps:
  - kāore i whakapuakina ngā reiti huamoni me te rahi nui rawa o te pūtea tārewa
  - kāore i āta tohua ngā tikanga o te here hea 20%
  - kāore i whakapuakina ēhea kaunihera me uru, i tua atu i te kuhu ā-hiahia
  - kua tohua te tepenga rahi o te micro-hydro, engari kāore he nama i tēnei whārangi
  - kāore he wātaka mō ngā panoni ture mahi e whakaaetia ana o te RMA
lang: mi
translationOf: national-solar
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-5cb920107627698f
---

# Ko tā te whārangi e kī ana

> Ka tuku te Home Energy Fund i ngā pūtea tārewa huamoni iti e herea ana ki te kāinga, ka utua hoki i roto i ngā tau tekau mā ngā reiti, i te hokonga rānei. Mā tētahi haumi hea Karauna kotahi e tū te tahua i te taha o ngā kaunihera e uru ana. Mā ngā ture mahi e whakaaetia ana ā-motu e taea e ngā kaipupuri whenua te tākai hiko rā tuanui, pūhiko, me ngā pūngao whakahou iti, kāore he whakaaetanga rawa.

System: Home Energy Fund

Scenario: Ka pūtea tārewa tētahi kaipupuri reiti mō te manawaroa pūngao kāinga
Given nā te utu nui o te tīmatanga ka tawhiti te hiko rā tuanui me ngā pūhiko ki te tokomaha
When ka whakatinanahia te Home Energy Fund
Then ngā pūtea tārewa huamoni iti, roa te wā, e herea ana ki te kāinga
Output $7 million hea Karauna kotahi mō te hea 20%
And ka utua ngā pūtea tārewa i roto i ngā tau tekau mā ngā reiti, i te hokonga o te whenua rānei
And e whai wāhi ana ngā kaipupuri reiti he 20% neke atu rānei te hea i tō rātou whenua
Outcome e whai wāhi ana te hiko rā kāinga, te penapena pūhiko, te whakamau, me ngā papu wera
