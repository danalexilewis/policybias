---
type: spec
id: sverigedemokraterna-a-till-o-asylinvandring-derived
title: "Asylum immigration read as a system: Sweden is to stop being the destination"
status: draft
updated: 2026-08-23
summary: First safe country, abolished EBO and the EU floor are to make it less worthwhile to come here; the policy does not say where cases then go or what the floor costs.
jurisdiction: SE
sources:
  - title: Asylinvandring
    url: https://www.sd.se/a-till-o/asylinvandring/
tags:
  - immigration
derivesFrom: sverigedemokraterna-a-till-o-asylinvandring
party: sverigedemokraterna
clusters:
  - migration-integration
money: no-figure
sourcePath: corpus/se-election-2026/sverigedemokraterna/a-till-o-asylinvandring.md
sourceDigest: sha256-94a00538c916c687
assumptions:
  - first safe country moves the assessment to the country the applicant has already travelled through, if that country accepts them
  - the EU minimum level is a floor other member states can sit above; a lower Swedish level changes relative attraction, not the right to asylum in the Union
  - when EBO ends the state or municipality must house the same people; institutional places cost more per day than own accommodation, but the amount is not given
  - return when safe requires agreements with the home country and compulsion if the person refuses; the policy only mentions that people should leave
lang: en
translationOf: sverigedemokraterna-a-till-o-asylinvandring-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-7ca5a26fbf1a8a64
---

# Our understanding

> Asylum is to be sought elsewhere, and conditions here are not to draw in those who can choose. EBO and reception above the minimum level are what is to be removed. The policy does not say which country then takes the case, what the minimum level is worth, or how someone who does not want to return is forced away. The destination is to stop being Sweden. The pressure does not disappear.

System: Attraction down, assessment elsewhere

Scenario: First safe country refuses to take the person back
Given the principle of asylum in the first safe country
And normally that is not Sweden
When the other country refuses to accept them
Then the case may still remain here
Outcome low asylum immigration depends on other states' willingness, not only on the domestic rule

Scenario: EBO closes while the same asylum seekers are still here
Given asylum seekers can today arrange their own accommodation
When that option ends
Then reception is to fall to the EU minimum level
But someone must then provide the bed spaces that EBO no longer carries
Outcome the cost moves from the applicant's rent to institutional housing, without amounts on the policy
