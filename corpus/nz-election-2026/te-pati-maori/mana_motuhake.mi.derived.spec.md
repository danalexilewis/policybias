---
type: spec
id: te-pati-maori-mana-motuhake-derived
title: "Ka pānuitia te mana motuhake hei pūnaha: te huringa tūāpapa ture me te whakahoki whenua, kāore he hinonga tango, he ture utu rānei"
status: draft
updated: 2026-08-21
summary: He aronga te huringa i runga i te Tiriti me te whakahoki whenua; kia kōwhiria rā anō he hinonga tango me tētahi ture utu, kāore e neke te taitara me te moni.
jurisdiction: NZ
sources:
  - title: Mana Motuhake
    url: https://www.maoriparty.org.nz/mana_motuhake
tags:
  - maori-affairs
  - democracy
party: te-pati-maori
clusters:
  - maori-affairs
money: no-figure
sourcePath: corpus/nz-election-2026/te-pati-maori/mana_motuhake.md
derivesFrom: te-pati-maori-mana-motuhake
assumptions:
  - me whai tauira, tukanga, paepae pōti hoki te huringa tūāpapa ture i mua i te raka i ngā hua ki tētahi kāwanatanga o muri
  - me whai tangata ture ka tango te whakahoki whenua — hapū, iwi, whānau, tarahiti kua whakaingoatia rānei — i mua i te neke o te taitara
  - ka whakaara te whakahoki whenua i tētahi pātai utu mō ngā kaipupuri taitara o nāianei, kāore te kaupapa here e whakatau
  - ka noho tuwhera ngā kī taurangi rangatiratanga i raro i te Tiriti kia rārangitia rā anō ki te taha o te ture whakataunga o nāianei
  - kāore mātou e kōkiri nama, nā te mea kāore he nama i te kaupapa here hei mahi
sourceDigest: "sha256-4cec8e3e18d9a30f"
lang: mi
translationOf: te-pati-maori-mana-motuhake-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-7e3514d111a3ec75
---

# Tō mātou māramatanga

> Ko te huringa tūāpapa ture i runga i te Tiriti me te whakahoki whenua e tohu ana kei hea te mana me te whenua e noho ai—engari kei te tuwhera te tauira, te tukanga me te paepae pōti, nō reira ka taea e tētahi kāwanatanga o muri te wetewete i ngā hua. Kāore e neke te taitara kia kōwhiria rā anō he hapū, iwi, whānau, tarahiti rānei ka tango, ā, kia whakatakotoria he ture utu mō ngā kaipupuri o nāianei.

System: Te huringa tūāpapa ture me te whakahoki whenua, kāore te pito ka tango

Scenario: Ka ū ki te huringa tūāpapa ture, kāore he tauira
Given ka taea te whakakore i ia hua mō te Māori ki te kore he hurihanga tūāpapa ture
When ka ū ki te huringa tūāpapa ture i runga i te Tiriti
Then me kōwhiri tonu he tauira, he tukanga, he paepae pōti
Outcome ko te aronga kia rakaina te mana ki te tangata whenua, hapū, iwi, whānau hoki
But ki te kore tērā tauira, ka taea e tētahi kāwanatanga o muri te wetewete i te hua

Scenario: Ka hoki te whenua, kāore he kaipupuri kua whakaingoatia
When ka kawea whakamua te whakahoki whenua me ngā kī taurangi rangatiratanga i raro i Te Tiriti o Waitangi
Then me kōwhiri he hinonga tango me tētahi ture utu mō te taitara o nāianei i mua i te neke o te taitara
Outcome ko te whakahoki whenua te whāinga
But kia oti rā anō ērā kōwhiringa, ka noho te taitara me te moni ki reira tonu
Activates te-pati-maori-maori-divorce-the-crown
