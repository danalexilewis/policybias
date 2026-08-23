---
type: spec
id: liberalerna-politik-klimatet-derived
title: "Capture targets read as a system: volume without a builder"
status: draft
updated: 2026-08-23
summary: Ten million tonnes then twenty million tonnes of captured carbon is a plant programme resting on nuclear, wind and solar that the policy only names as a mix, not as a build rate.
jurisdiction: SE
sources:
  - title: Klimatet behöver en effektiv politik. Liberalerna är alliansens grönaste röst!
    url: https://www.liberalerna.se/politik/klimatet
tags:
  - climate
derivesFrom: liberalerna-politik-klimatet
party: liberalerna
clusters:
  - climate-environment
money: no-figure
sourcePath: corpus/se-election-2026/liberalerna/politik-klimatet.md
sourceDigest: sha256-00a66d4078fc1985
assumptions:
  - capturing 10 million tonnes needs plants, pipes and storage that do not exist at that scale in Sweden today
  - biomass-based capture that yields negative emissions competes with the same biomass used for heat and fuel
  - growth-first climate policy postpones cuts that would shrink a fossil activity this year
  - nuclear, wind and solar as a trio still need siting and grid; the policy treats the mix as the answer
lang: en
translationOf: liberalerna-politik-klimatet-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-8df85fc8c56be8d0
---

# Our understanding

> The capture targets are a build programme. Ten million tonnes is not a wish, it is tanks, pipes and a buyer of storage. Growth as a method means fossil activity can rise in the meantime if capture comes late. The power mix is named; the build rate is not.

System: Tonnes of capture on an unbuilt stack

Scenario: The first capture target arrives before the plants
Given the target is to capture 10 million tonnes of CO2
And large volumes of CO2 are to be captured and stored
When the calendar year for the first target arrives
Then captured carbon is to leave the atmosphere
# extrapolated: 0 is a count from plants not yet standing on the policy
Output 0 tonnes captured if no plant is running
Outcome negative emissions need biomass plus storage, not a press release
But the policy does not name who builds or pays for the plants

Scenario: Fossil fuels are replaced while energy use rises
Given coal oil and gas must be replaced by fossil-free energy
And many people around the world need to use much more energy
When solar wind and nuclear are expanded together
Then reliable fossil-free power is the hinge of the Swedish plan
Outcome industry can grow without new fossil combustion only if that power actually arrives
Activates liberalerna-politik-karnkraft
