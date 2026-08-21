---
type: spec
id: te-pati-maori-seabed-mining-banned-in-aotearoa-under-reintroduced-member-s-bill-derived
title: "Seabed mining ban read as a system: closed pathways with unnamed consents and split fishing incidence"
status: draft
updated: 2026-08-21
summary: Closing every pathway across the coastal marine area, exclusive economic zone and shelf still leaves existing consents undecided, and the ban's winners and losers among quota and iwi commercial fishers are not named in the policy.
jurisdiction: NZ
sources:
  - title: Seabed mining banned in Aotearoa under reintroduced Member’s Bill
    url: https://www.maoriparty.org.nz/seabed_mining_banned_in_aotearoa_under_reintroduced_member_s_bill
tags:
  - environment
  - maori-affairs
party: te-pati-maori
clusters:
  - environment-rural
money: no-figure
sourcePath: corpus/nz-election-2026/te-pati-maori/seabed_mining_banned_in_aotearoa_under_reintroduced_member_s_bill.md
derivesFrom: te-pati-maori-seabed-mining-banned-in-aotearoa-under-reintroduced-member-s-bill
assumptions:
  - a ban that closes pathways does not by itself cancel or grandfather existing consents; that choice has to be written
  - commercial fishing quota and iwi fishing interests sit on the same water as mining claims, so incidence of the ban is not identical for every coastal community
  - coastal iwi who oppose mining and iwi or quota holders who might have sought mining rent face different balance sheets under the same ban
  - we introduce no figure, because the policy contains none to work from
sourceDigest: "sha256-b3ade64cbdea7220"
---

# Our understanding

> The policy closes every legal pathway, including fast-track, across three marine zones. That closure still leaves undecided: existing consents, and who among quota and iwi commercial fishers gains or loses.

System: A ban that closes pathways without settling consents or fishing incidence

Scenario: An existing seabed mining consent sits when the ban is passed
Given a Seabed Mining Prohibition Act that closes all legal pathways including fast-track
And no rule for consents already granted
When the ban is passed
Then the fate of existing consents must still be chosen: cancelled, run down, or left standing
Outcome new applications are shut
But holders of unnamed existing consents cannot tell from this policy what they keep

Scenario: Quota and iwi commercial fishing meet the same ban
Given coastal iwi, hapū and commercial fishers share waters where mining was proposed
When seabed mining is banned across the coastal marine area, exclusive economic zone and continental shelf
Then fishers who feared mining damage keep habitat that mining would have disturbed
And any iwi or investor who expected mining rent loses that pathway
Outcome the ban protects moana for fishing uses named as taonga
But the policy does not say how quota, iwi commercial fishing, and foregone mining rent are weighted against each other
