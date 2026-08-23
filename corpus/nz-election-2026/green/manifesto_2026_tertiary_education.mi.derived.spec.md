---
type: spec
id: green-manifesto-2026-tertiary-education-derived
title: "Ko te mahere mātauranga matua e pānuitia ana hei pūnaha: he motika moni whiwhi me tētahi huarahi utu-kore, kāore he utu, he rā rānei"
status: draft
updated: 2026-08-21
summary: Ka whakaingoatia te moni whiwhi ākonga ā-whānui me te utu-kore hei ahunga, ehara i te reiti, i te rā tīmata rānei; ka tuwhera tonu te mukunga nama me te tiaki kura hangarau kia puta rā anō ngā nama me ngā paearu.
jurisdiction: NZ
sources:
  - title: Tertiary Education
    url: https://www.greens.org.nz/manifesto_2026_tertiary_education
tags:
  - education
party: green
clusters:
  - family-income
money: no-figure
sourcePath: corpus/nz-election-2026/green/manifesto_2026_tertiary_education.md
sourceDigest: "sha256-da990961e19873ed"
derivesFrom: green-manifesto-2026-tertiary-education
assumptions:
  - ko te moni whiwhi ākonga ā-whānui kāore he reiti kua kīia he motika kāore e taea te arotake i te rahi tahua i te whārangi
  - ko te mahi ki te utu-kore me te mukunga nama he huarahi, ehara i te rā tīmata, i te ture tika rānei
  - me whai papa pūtea te tiaki i ngā papa kura hangarau me ngā kaimahi i ngā tapahanga; ka kī te whārangi he ranea, kāore e whakamārama
  - kāore he utu tahua i te whārangi, nā reira kāore tētahi i hangaia i konei
lang: mi
translationOf: green-manifesto-2026-tertiary-education-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-933c06bc33b99c90
---

# Tō mātou māramatanga

> Ka oatihia ki ngā ākonga tētahi utu noho, tētahi huarahi utu-kore, me te mukunga nama. Kia ū rā anō tētahi reiti me tētahi rā tīmata, ka mau tonu rātou i te rēti me ngā pūtea tārewa kua tīmata.

System: Te moni whiwhi ākonga me te utu-kore hei huarahi, ehara i te utu

Scenario: Ka riro i tētahi ākonga tētahi moni whiwhi ākonga ā-whānui
Given e uaua ana ngā ākonga ki te utu rēti me te kai pai i raro i te pōharatanga ākonga kua noho noa
When ka tukuna tētahi moni whiwhi ākonga ā-whānui, tae atu ki te ako paerua
Then ka tutuki ngā utu noho i te wā ako mā tētahi utu tū tonu, ehara i te tango pūtea tārewa anake
Outcome he iti ake te here taumaha o te ako mēnā ka hipoki te utu i te rēti me te kai
But kāore e taea e ngā ākonga te mahere tahua ki tētahi utu kāore anō kia tohua te reiti ia wiki

Scenario: Ka kōkiritia te utu-kore me te mukunga nama
When ka mahi te kāwanatanga ki te mātauranga matua utu-kore me tētahi mukunga nama ākonga, i te wā e whakaheke ana i ngā utu pūtea tārewa
Then ka taea e ngā rōpū hou te utu iti ake i roto i te wā, ā, ka taea te iti haere o ngā nama kua tīmata
Outcome ka iti ake te pīkaunga nama o te ako matua i runga i te huarahi
But ka mau tonu ngā ākonga i te nama kia ū rā anō ngā ture tika me tētahi rā tīmata

Scenario: Ka tiakina ngā kura hangarau i ētahi tapahanga anō
Given kua peia ngā whare wānanga me ngā kura hangarau ki ngā tapahanga hōhonu ki ngā akoranga me ngā ratonga
When ka riro i ngā kura hangarau te pūtea ranea me te mana ā-rohe, ā, ka tiakina ngā papa, ngā akoranga me ngā kaimahi
Then ka pupuritia te āheinga whakangungu ā-rohe, ehara i te whakaheke
Outcome ka taea tonu te tutuki i ngā hiahia kaimahi me te hapori ki te rohe
But ka tūtaki tonu ngā kura hangarau ki ngā tapahanga i ia wā ka hapa te Tahua e whai ake
