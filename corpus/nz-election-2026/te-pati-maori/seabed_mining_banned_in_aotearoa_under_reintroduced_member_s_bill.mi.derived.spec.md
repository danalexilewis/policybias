---
type: spec
id: te-pati-maori-seabed-mining-banned-in-aotearoa-under-reintroduced-member-s-bill-derived
title: "Ka pānuitia te aukati keri takere moana hei pūnaha: kua katia ngā huarahi, kāore i whakaingoatia ngā whakaaetanga, ā, ka wehewehe te paanga ki te hī ika"
status: draft
updated: 2026-08-22
summary: Ahakoa te kati i ia huarahi puta noa i te wāhi moana takutai, te rohe ōhanga motuhake me te papa whenua, kāore anō ngā whakaaetanga o nāianei e whakatauhia, ā, kāore te kaupapa here e whakaingoa i ngā toa me ngā toa-kore o te aukati i waenga i ngā kaipupuri kuota me ngā kaihī ika arumoni a ngā iwi.
jurisdiction: NZ
sources:
  - title: Seabed mining banned in Aotearoa under reintroduced Member’s Bill
    url: https://www.maoriparty.org.nz/seabed_mining_banned_in_aotearoa_under_reintroduced_member_s_bill
  - title: Support Whaea Debs Members Bill to permanently Ban Seabed Mining in New Zealand Waters!
    url: https://www.maoriparty.org.nz/permanently_ban_seabed_mining
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
  - kāore tētahi aukati e kati ana i ngā huarahi e whakakore, e waiho rānei i ngā whakaaetanga o nāianei kia tū i a ia anake; me tuhi tērā kōwhiringa
  - kei runga i te wai kotahi ngā kuota hī ika arumoni me ngā pānga hī ika a ngā iwi ki ngā kerēme keri, nō reira ehara i te rite te paanga o te aukati ki ia hapori takutai
  - he rerekē ngā puka tahua o ngā iwi takutai e ātete ana i te keri, me ngā iwi, kaipupuri kuota rānei tērā pea i rapu rēti keri, i raro i te aukati kotahi
  - he tohu tautoko te petihana; kāore ia e tāuta i te Pire, e kati rānei i ngā huarahi ā-ture
  - kāore mātou e kōkiri nama, nā te mea kāore he nama i te kaupapa here hei mahi
sourceDigest: "sha256-b3ade64cbdea7220"
lang: mi
translationOf: te-pati-maori-seabed-mining-banned-in-aotearoa-under-reintroduced-member-s-bill-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-c8968b3008b17c0b
---

# Tō mātou māramatanga

> Ka katia te keri takere moana puta noa i te wāhi moana takutai, te rohe ōhanga motuhake me te papa whenua—engari kāore anō ngā kaipupuri whakaaetanga o nāianei e mōhio mehemea ka whakakorea, ka waiho kia pau, ka waiho rānei kia tū ā rātou raihana. Kei runga i aua wai ngā kaipupuri kuota me ngā kaihī ika arumoni a ngā iwi ki ngā kerēme keri; kei te taha o ngā taonga hī ika te rēti keri e ngaro, kāore anō he taumaha.

System: He aukati e kati ana i ngā huarahi, kāore e whakatau i ngā whakaaetanga, i te paanga hī ika rānei

Scenario: Kei te tū tētahi whakaaetanga keri takere moana o nāianei i te wā e whakamanatia ai te aukati
Given he Seabed Mining Prohibition Act e kati ana i ngā huarahi ā-ture katoa, tae atu ki te fast-track
And kāore he ture mō ngā whakaaetanga kua tukuna kētia
When ka whakamanatia te aukati
Then me kōwhiri anō te mutunga o ngā whakaaetanga o nāianei: ka whakakorea, ka waiho kia pau, ka waiho kia tū rānei
Outcome ka katia ngā tono hou
But kāore ngā kaipupuri whakaaetanga e mōhio mehemea ka ora ā rātou raihana i te aukati

Scenario: Ka tūtaki ngā kuota me te hī ika arumoni a ngā iwi ki te aukati kotahi
Given ka tiritiria e ngā iwi takutai, hapū, kaihī ika arumoni hoki ngā wai i whakaarohia ai te keri
When ka aukatihia te keri takere moana puta noa i te wāhi moana takutai, te rohe ōhanga motuhake me te papa whenua
Then ka pupuri ngā kaihī ika i mataku i te kino o te keri i te nohoanga i whakararuraru ai te keri
And ka ngaro tērā huarahi i tētahi iwi, kaipupuri pūtea rānei i tūmanako ki te rēti keri
Outcome ka tiakina e te aukati te moana mō ngā mahi hī ika e kīia ana he taonga
But kāore ngā kaipupuri kuota, ngā kaihī ika arumoni a ngā iwi, ngā kaipupuri pūtea keri e tūmanako ana rānei e mōhio ko wai ka riro, ko wai ka ngaro

Scenario: He karanga ki te mahi te petihana
When ka kohia te tautoko mā te petihana
Then me whai pōtitanga me ngā pōti anō te aukati
Outcome ka kitea te tautoko a te iwi
But kāore te petihana e kati i ngā huarahi ā-ture
