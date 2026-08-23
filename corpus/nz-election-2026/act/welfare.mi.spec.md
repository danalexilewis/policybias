---
type: spec
id: act-welfare
title: "Me here ngā aromatawai tautoko pūtea a ngā tākuta kua tohua, me te whakahaere moni hiko"
status: draft
updated: 2026-08-21
summary: Me tohua e Te Manatū Whakahiato Ora ngā tākuta mō ngā tautoko pūtea hauora me te hauātanga, me te aromatawai anō ā-wāhanga, me ngā kāri utu hiko here mō ngā kaiwhiwhi Jobseeker i muri i ngā marama e whā, e aukati ana i te waipiro, te petipeti me te tupeka.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/welfare
tags:
  - social-welfare
party: act
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/act/welfare.md
sourceDigest: "sha256-f85cf88a49d77c09"
gaps:
  - kāore i whakapuakina ngā paearu whāinga mārama mō ngā aromatawai tautoko pūtea
  - kāore i whakapuakina te pūtea mō te rōpū tākuta kua tohua
  - kāore i āta tohua ngā wehenga kāri hiko me ngā whakaritenga kua whakarerekētia
  - kāore i whakapuakina te wātaka ā-wāhanga mō te aromatawai anō
  - kāore i whakapuakina te utu o te whakahaere moni here
lang: mi
translationOf: act-welfare
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-88cdd80fb254c7b7
---

# Ko tā te whārangi e kī ana

> Ka whakawhirinaki ngā tautoko pūtea hauora ki te tiwhikete hauora mā te whakaaro ake, ā, ka taea e ngā kaiwhiwhi Jobseeker wā roa te whakapau tautoko pūtea i runga i tā rātou e hiahia ana. Ka here te kaupapa here i ngā aromatawai a ngā tākuta kua tohua, me ngā paearu whāinga me te aromatawai anō ā-wāhanga, ā, ka tono i ngā kāri utu hiko i muri i ngā marama e whā i runga i te Jobseeker, e aukati ana i te waipiro, te petipeti, te tupeka me ngā tango moni. Kāore he nama tāra, he paearu taipitopito rānei e puta ana.

System: Te tiwhikete tautoko pūtea me te whakahaere moni hiko

Scenario: Ka whakakaha ngā tautoko pūtea hauora me te tautoko Jobseeker wā roa
Given kua tū kē tētahi kōwhiringa tākuta kua tohua, engari kāore i here
And kua tū kē i Aotearoa te whakahaere moni hei kōwhiringa i ētahi āhuatanga
When ka here ngā aromatawai a ngā tākuta kua tohua mō ngā tautoko pūtea hauora, ā, ka whakaurua te āwhina whakahaere mō ngā kaiwhiwhi Jobseeker wā roa
Then ka tukuna motuhake ngā tautoko pūtea hauora me te hauātanga katoa e tētahi rōpū tākuta kua whakaaetia e Te Manatū Whakahiato Ora, ā, ka taea tonu e te GP, e te mātanga rānei o te tangata te tuku hītori hauora me ngā taunakitanga
Output ka mahia ngā aromatawai ki ngā paearu whāinga mārama, kaua ki te whakaaro ake anake
And ka aromatawaitia anō ngā kaiwhiwhi Jobseeker Support Health Condition or Disability me te Supported Living Payment i runga i te tikanga ā-wāhanga, ka tīmata ki ngā tuku hauora hinengaro i muri i te mate urutā
And ka whakaaetia ngā whakaritenga wā roa mō te hunga he hauātanga, he mate hauora rānei e mau tonu ana
Outcome ka riro i ngā kaiwhiwhi Jobseeker Support Work Ready kua nuku atu i ngā marama e whā i runga i te tautoko pūtea tō rātou tautoko mā tētahi kāri utu hiko e ahu ana ki ngā mea taketake pērā i te kai, te rēti, te hiko, te waka, te hauora me te tiaki tamariki
And ka aukati te kāri i te whakapau ki te waipiro, te petipeti, te tupeka me ngā tango moni, me ngā wehenga ina mōrearea te haumaru, ina aukati rānei te whakahaere moni i te uru ki ngā mea taketake
