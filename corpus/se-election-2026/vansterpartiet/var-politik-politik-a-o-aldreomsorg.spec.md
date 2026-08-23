---
type: spec
id: vansterpartiet-var-politik-politik-a-o-aldreomsorg
title: "Haverikommission mot minutstyrd äldreomsorg"
status: draft
updated: 2026-08-23
summary: En parlamentarisk haverikommission ska utreda missförhållanden; minutstyrning avskaffas, personaltätheten höjs via statsbidrag, och vinstjakt i omsorgen stoppas.
jurisdiction: SE
sources:
  - title: Äldreomsorg
    url: https://www.vansterpartiet.se/var-politik/politik-a-o/aldreomsorg
tags:
  - employment
  - elderly-care
  - social-welfare
party: vansterpartiet
clusters:
  - elderly-welfare
money: no-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik-politik-a-o-aldreomsorg.md
sourceDigest: "sha256-53a34fd2ce521559"
gaps:
  - hur stora de generella statsbidragen ska bli för fler undersköterskor anges inte
  - hur mycket arbetstiden i omsorgen ska kortas anges inte
  - om de fem ingångarna gäller även utan kommissionens betänkande sägs inte
  - hur särskilt boende ska byggas ut när platserna har minskat sedan 2000-talet anges inte
---

# What the page states

> Äldreomsorgen är underbemannad, underfinansierad och minutstyrd, med otrygga anställningar och låga löner. En parlamentarisk haverikommission ska utreda missförhållanden och lägga fram förändringsförslag. Ingångarna är avskaffad minutstyrning, arbetstidsförkortning, rätt till heltid och tillsvidare, mer resurser till kommunerna, och stopp för vinstjakten så att skattekronor går till personal och brukare. Kvarboende, särskilt boende eller annan form ska vara den äldres val, inte kommunens ekonomi.

System: Haverikommission och tillitsstyrd äldreomsorg

Scenario: En haverikommission tillsätts mot missförhållandena
Given hetsig minutjakt, dåliga arbetsvillkor och låga löner är de anställdas vardag
And en omfördelning från särskilda boenden till hemtjänst har skett sedan början av 2000-talet
And grova missförhållanden har uppmärksammats, bland annat äldre som dött ensamma efter missade larm
When en parlamentarisk haverikommission tillsätts
Then minutstyrningen avskaffas och omsorgen ska bygga på tillit i stället för tidtagarur
And arbetstidsförkortning inom omsorgen så att personalen orkar ett helt yrkesliv
And trygga villkor med rimliga scheman, inflytande och rätt till heltid och tillsvidareanställning
And generella statsbidrag förstärks för ökad personaltäthet bland undersköterskor och vårdbiträden
Outcome varenda skattekrona går till personal och brukare, inte till vd-löner och aktieägares utdelningar
And den äldre väljer kvarboende eller särskilt boende, inte kommunens ekonomiska prioriteringar
And kvinnor slipper bära anhörigomsorg som ersätter en trasig äldreomsorg
Activates vansterpartiet-var-politik-politik-a-o-sjukvard
