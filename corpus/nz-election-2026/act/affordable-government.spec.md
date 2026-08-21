---
type: spec
id: act-affordable-government
title: "Consolidate 43 departments into 19 and cut the ministry to 18"
status: draft
updated: 2026-08-21
summary: Merge departments, collapse portfolios, and move chief executive appointment from the Public Service Commission to ministers.
jurisdiction: NZ
sources:
  - title: A Smaller, More Affordable Government
    url: https://www.act.org.nz/affordable-government
  - title: ACT's plan for a consolidated bureaucracy
    url: https://assets.nationbuilder.com/actnz/mailings/54974/attachments/original/SmallerGovt.pdf?1782454542
tags:
  - budget
  - economy
party: act
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/act/affordable-government.md
sourceDigest: "sha256-cf145c74128adc18"
gaps:
  - no dollar saving from the consolidation is stated
  - no transition, redundancy or systems cost is stated
  - no timetable beyond starting immediately in the next term
  - which of the 43 departments merge into which 19 is not stated
  - the number of public service roles affected is not stated
  - the overseas research linking more ministers to bigger deficits is not named
  - how a chief executive removed for policy misalignment is replaced mid-term is not stated
---

# What the page states

> New Zealand runs a sprawling public service with dozens of departments and ministers overseeing overlapping portfolios. The policy merges departments into fewer units, assigns each to a single minister, and lets ministers appoint and remove chief executives while protecting operational independence for Police, NZSIS and NZDF. No dollar amounts or dates are given.

System: A consolidated public service under fewer ministers

Scenario: An incoming government consolidates departments and portfolios
Given 43 departments, 78 ministerial portfolios and 28 ministers
And a Public Service Commission that appoints departmental chief executives
And a population comparable to Norway, which runs 20 ministers across 17 ministries
When an incoming government consolidates the public service
Then each department reports to one minister for its budget and outcomes
Output 19 departments consolidated from 43
And 18 ministers in place of 28
And statutory operational independence for Police, NZSIS and NZDF
Outcome a minister can appoint a chief executive for a fixed term, renewable once
And a minister can remove a chief executive for non-performance or policy misalignment
And a problem spread across seven departments has one accountable minister
