---
type: spec
id: te-pati-maori-economic-development-derived
title: "Te whakawhanaketanga ōhanga e pānuitia ana hei pūnaha: pūtea aratakina e te Māori, kāore i whakaingoatia te rahi me ngā ture raraunga"
status: draft
updated: 2026-08-21
summary: Ko ngā rōpū me ngā pūtea aratakina e te Māori, me te mana motuhake o ngā raraunga, te whakatau nā wai e urungi te hinonga me te mātauranga, engari kāore i whakaingoatia te rahi o ngā pūtea me ngā ture raraunga, nō reira e wātea tonu ana te toronga o te pūtea, me te pātai nā wai e pupuri ngā raraunga Māori.
jurisdiction: NZ
sources:
  - title: Economic development
    url: https://www.maoriparty.org.nz/economic_development
tags:
  - economy
party: te-pati-maori
clusters:
  - maori-affairs
money: no-figure
sourcePath: corpus/nz-election-2026/te-pati-maori/economic_development.md
derivesFrom: te-pati-maori-economic-development
assumptions:
  - Me whai ingoa, whakapūtea, whakahaere hoki ngā rōpū me ngā pūtea aratakina e te Māori; ka hangaia e te kaupapa here, kāore e ine i te rahi
  - Ko te tautoko tauhokohoko me te auaha, he takoha, he pūtea tārewa, he hea, he painga hoko rānei; he rerekē te pānga tahua o ia mea
  - Me whai ture uru, wāhi rokiroki, whakaaetanga hoki te mana motuhake o ngā raraunga; ki te kore ērā, he kī noa te tiaki
  - kāore mātou e kōkiri nama, nā te mea kāore he nama i te kaupapa here hei mahi
sourceDigest: "sha256-fbbbfd4a0f0c6987"
lang: mi
translationOf: te-pati-maori-economic-development-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-250902195932ed47
---

# Tō mātou māramatanga

> Mā ngā rōpū me ngā pūtea aratakina e te Māori e urungi te hinonga, ā, mā te mana motuhake o ngā raraunga e whakatau nā wai e pupuri te mātauranga Māori—engari e wātea tonu ana te whakapūtea, te mana, me te mematanga poari. He rerekē te tau o te takoha, te pūtea tārewa, te hea rānei ki te Tahua; me tū ngā ture uru, rokiroki, whakaaetanga hoki i mua i te here i ngā kaikohikohi.

System: Ngā pūtea me te mana motuhake o ngā raraunga, kāore i whakaingoatia te pūtea, ngā ture rānei

Scenario: Ka whakatipu ngā rōpū me ngā pūtea aratakina e te Māori i te hinonga Māori
Given te tōnui kāore e taea te whirinaki ki ngā pūnaha i hangaia hei aukati i te Māori
And kāore he rōpū, he rahi pūtea rānei i whakaingoatia
When ka hangaia ngā rōpū me ngā pūtea aratakina e te Māori
Then me kōwhiri tonu te whakapūtea, te mana, me te hunga e noho ana ki te poari
Outcome ka taea e te hinonga Māori te tipu mēnā ka tae mai te pūtea
But kia tohua rā anō te pūtea, kāore e mōhio te hinonga Māori ki te toronga o ngā pūtea

Scenario: Ka tautokona te tauhokohoko, te auaha, me te whakatipu rawa Māori mō te pae tawhiti
Given te tautoko mō te tauhokohoko me te auaha hei ara ki te rawa
And kāore he taputapu, he tahua rānei
When ka tukuna te tautoko
Then me kōwhiri ngā takoha, ngā pūtea tārewa, ngā hea, ngā painga rānei
Outcome ko te whakatipu rawa te ūnga kua whakaingoatia
But kia kōwhiria rā anō e tētahi ngā takoha, ngā pūtea tārewa, ngā hea rānei, kāore e taea e ngā āpiha te tātai i te tautoko

Scenario: Ka tiakina ngā raraunga me te mātauranga Māori mā te mana motuhake o ngā raraunga
Given te whakaaro ki te tiaki i ngā raraunga me te mātauranga Māori
And kāore he ture uru, rokiroki, whakaaetanga rānei
When ka kohia, ka whakamahia rānei ngā raraunga mō te Māori
Then me whakatau tonu nā wai e pupuri, kei hea, ā, i runga i ēhea tikanga
Outcome ko te mana motuhake o ngā raraunga te paerewa kua whakaingoatia
But ki te kore he ture, kāore e taea e te tiaki te here i ngā kaikohikohi
