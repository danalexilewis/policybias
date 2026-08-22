/**
 * Short history facts shown after a wrong guess, keyed by the round's cluster.
 * One surprising concrete, then the settlement it left behind — Stuff-quiz length.
 */

export type ClusterTrivia = {
  id: string
  cluster: string
  category: string
  headline: string
  body: string
}

export const CLUSTER_TRIVIA: ClusterTrivia[] = [
  {
    id: 'health-access-1938',
    cluster: 'health-access',
    category: 'Health access and medicines',
    headline: 'Public hospitals have been free since 1938',
    body: 'The Social Security Act, under Michael Joseph Savage, made public hospital care a right rather than a bill. General practice was supposed to follow. Co-payments at the surgery door are the part of that settlement that never quite landed.',
  },
  {
    id: 'health-access-pharmac',
    cluster: 'health-access',
    category: 'Health access and medicines',
    headline: 'Pharmac was invented to be one national buyer',
    body: 'In 1993 the four Regional Health Authorities formed one agency to run the pharmaceutical schedule. A single buyer is why medicines often cost less here than in Australia — and why some of them take longer to list.',
  },
  {
    id: 'health-access-acc',
    cluster: 'health-access',
    category: 'Health access and medicines',
    headline: 'ACC bought out the right to sue',
    body: 'From 1974, a no-fault scheme paid treatment and lost wages without proving blame. In exchange, New Zealanders largely cannot sue for personal injury. The Woodhouse report of 1967 designed it; Parliament took seven years to agree.',
  },
  {
    id: 'health-access-dhb',
    cluster: 'health-access',
    category: 'Health access and medicines',
    headline: 'District health boards lasted twenty-one years',
    body: 'From 1 January 2001, 21 partly elected boards ran public hospitals by district. Pae Ora abolished them on 1 July 2022 and stood up Te Whatu Ora. Who holds the hospital keys has been redrawn more than once in a working lifetime.',
  },
  {
    id: 'health-access-eolc',
    cluster: 'health-access',
    category: 'Health access and medicines',
    headline: 'Assisted dying arrived by referendum',
    body: 'The End of Life Choice Act 2019 sat on the 2020 election ballot. It passed, and came into force on 7 November 2021. The six-month prognosis rule in that Act is still the live argument about who may use it.',
  },
  {
    id: 'health-access-cartwright',
    cluster: 'health-access',
    category: 'Health access and medicines',
    headline: 'A 1988 inquiry built the cervical screening programme',
    body: 'Judge Silvia Cartwright found women at National Women’s Hospital had been left untreated in a research programme they had not consented to. The report created a national screening programme and a health and disability commissioner. Consent rules in clinics still sit on that finding.',
  },
  {
    id: 'health-access-he-ara-oranga',
    cluster: 'health-access',
    category: 'Health access and medicines',
    headline: 'A 2018 inquiry said mental health needed a new centre of gravity',
    body: 'He Ara Oranga told the government to spend more on community care and to put a Mental Health and Wellbeing Commission in statute. The Commission was established. The spend shift is still the argument the inquiry named.',
  },
  {
    id: 'health-access-pho',
    cluster: 'health-access',
    category: 'Health access and medicines',
    headline: 'Capitation was meant to cheapen the GP visit',
    body: 'The 2001 Primary Health Care Strategy paid practices for enrolled people, not only for appointments. Primary Health Organisations were the vehicle. The co-payment never vanished; it just stopped being the whole business model.',
  },
  {
    id: 'energy-power-manapouri',
    cluster: 'energy-power',
    category: 'Energy and household power',
    headline: 'Lake Manapouri was nearly raised for a smelter',
    body: 'In the late 1960s the plan was to lift the lake to feed an aluminium smelter. Save Manapouri became the country’s first mass environmental campaign. The lake stayed where it was; a statutory guardian was appointed instead.',
  },
  {
    id: 'energy-power-think-big',
    cluster: 'energy-power',
    category: 'Energy and household power',
    headline: 'Think Big tried to make New Zealand energy-proof',
    body: 'Muldoon’s late-1970s programme built the Clyde Dam, expanded Marsden Point, and turned Maui gas into petrol at Motunui. The oil-shock logic faded. The concrete remained.',
  },
  {
    id: 'energy-power-ecnz',
    cluster: 'energy-power',
    category: 'Energy and household power',
    headline: 'Today’s gentailers were one state company',
    body: 'The Electricity Corporation was split in the 1990s into the generator-retailers that still dominate the market. Contact was sold; minority stakes in the others were floated later. The “big four” are a restructuring, not a fact of geology.',
  },
  {
    id: 'energy-power-auckland-1998',
    cluster: 'energy-power',
    category: 'Energy and household power',
    headline: 'Auckland’s CBD went dark for five weeks',
    body: 'On 20 February 1998, Mercury Energy’s cables into the central city failed, one after another. Some blocks were without power for up to five weeks. The inquiry blamed asset management and governance, not a storm.',
  },
  {
    id: 'energy-power-mixed-ownership',
    cluster: 'energy-power',
    category: 'Energy and household power',
    headline: 'The Crown sold up to 49 percent of the generators',
    body: 'From 2012 the mixed-ownership model floated minority stakes in Mighty River Power, Meridian and Genesis, and kept 51 percent. Solid Energy was on the list and never made it. The dividend stream is now shared with the NZX.',
  },
  {
    id: 'energy-power-lines-split',
    cluster: 'energy-power',
    category: 'Energy and household power',
    headline: 'The wires were legally split from the retailer',
    body: 'The Electricity Industry Reform Act 1998 forced local power companies to sell either their lines or their retail and generation. The frenzy of sales created today’s gentailers-versus-lines split. Cross-subsidy from the poles to the bill was the thing the Act was trying to stop.',
  },
  {
    id: 'energy-power-tiwai',
    cluster: 'energy-power',
    category: 'Energy and household power',
    headline: 'One smelter still shapes the whole grid argument',
    body: 'Tiwai Point has long been the country’s largest electricity user, on a contract tied back to Manapouri. Every threat to close it becomes a wholesale-price event. Household bills and a Southland factory have been in the same sentence for fifty years.',
  },
  {
    id: 'energy-power-onslow',
    cluster: 'energy-power',
    category: 'Energy and household power',
    headline: 'A giant pumped lake was meant to cover dry years',
    body: 'The NZ Battery project studied pumping water uphill at Lake Onslow so hydro could run when the lakes were low. The coalition cancelled it. Dry-year risk did not cancel with it.',
  },
  {
    id: 'tax-fiscal-gst',
    cluster: 'tax-fiscal',
    category: 'Tax and fiscal instruments',
    headline: 'GST arrived at ten percent',
    body: 'On 1 October 1986 most goods and services became ten percent dearer. The rate rose to 12.5 percent in 1989, then to 15 percent on 1 October 2010. Fresh food has stayed in the base through every argument to take it out.',
  },
  {
    id: 'tax-fiscal-cgt',
    cluster: 'tax-fiscal',
    category: 'Tax and fiscal instruments',
    headline: 'A comprehensive capital gains tax has never stuck',
    body: 'Australia has had one since 1985. Wellington has studied the idea for decades, including the 2018–19 Tax Working Group, and stepped back each time. The bright-line test on property, from 2015, has been the workaround.',
  },
  {
    id: 'tax-fiscal-fra',
    cluster: 'tax-fiscal',
    category: 'Tax and fiscal instruments',
    headline: 'A 1994 Act tried to bind the next Budget',
    body: 'The Fiscal Responsibility Act made governments publish long-term objectives and explain themselves when they missed them. Those rules now live in the Public Finance Act. They constrain the story a Finance Minister has to tell, not the number they can pick.',
  },
  {
    id: 'tax-fiscal-estate-duty',
    cluster: 'tax-fiscal',
    category: 'Tax and fiscal instruments',
    headline: 'Death stopped being a tax event in 1992',
    body: 'Estate duty was abolished that year. Gift duty followed in 2011. Inheritance is now largely a family matter, not a Revenue one — which is why wealth-tax arguments keep filling the gap.',
  },
  {
    id: 'tax-fiscal-surcharge',
    cluster: 'tax-fiscal',
    category: 'Tax and fiscal instruments',
    headline: 'Super once had a clawback for people who still earned',
    body: 'From 1985 a surcharge taxed other income of superannuitants and clawed the pension back. NZ First made abolishing it a condition of coalition. It died in 1998. Universal NZ Super dates from that repeal, not from 1938.',
  },
  {
    id: 'tax-fiscal-company-28',
    cluster: 'tax-fiscal',
    category: 'Tax and fiscal instruments',
    headline: 'Company tax has been 28 percent since 2011',
    body: 'Budget 2010 cut it from 30 percent, from the 2011–12 income year. The same package lifted GST to 15 percent. The company rate has sat still while the personal top rate has not.',
  },
  {
    id: 'tax-fiscal-top-rate',
    cluster: 'tax-fiscal',
    category: 'Tax and fiscal instruments',
    headline: 'The top personal rate has been 39, then 33, then 39',
    body: 'Michael Cullen restored 39 percent in 2000. Bill English took it back to 33 percent in 2010, aligned with company tax for a while. It returned at 39 percent in 2021, this time above $180,000.',
  },
  {
    id: 'tax-fiscal-bright-line',
    cluster: 'tax-fiscal',
    category: 'Tax and fiscal instruments',
    headline: 'The bright-line test has been two years, then five, then ten, then two',
    body: 'From 2015, selling a residential property inside a window counted as income. The window grew to ten years, then shrank again. It has been the capital-gains instrument that could pass, because it only named property, and only for a while.',
  },
  {
    id: 'crime-justice-death-penalty',
    cluster: 'crime-justice',
    category: 'Crime, justice and public safety',
    headline: 'The last execution was in 1957',
    body: 'Walter Bolton was hanged at Mount Eden. Parliament abolished the death penalty for murder in 1961. Treason kept it until 1989. Life imprisonment has been the ceiling since.',
  },
  {
    id: 'crime-justice-three-strikes',
    cluster: 'crime-justice',
    category: 'Crime, justice and public safety',
    headline: 'Three-strikes has been passed, repealed, and passed again',
    body: 'The 2010 law sent a third-strike offender to prison for the maximum term with no parole. Labour repealed it in 2022. The coalition legislated a replacement in 2024. The statute is younger than the argument.',
  },
  {
    id: 'crime-justice-aos',
    cluster: 'crime-justice',
    category: 'Crime, justice and public safety',
    headline: 'Everyday police still do not carry guns',
    body: 'After four officers were shot in 1963, the Armed Offenders Squad was formed in 1964. Patrols remain unarmed as a matter of policy. Firearms come when the squad does.',
  },
  {
    id: 'crime-justice-homosexual-reform',
    cluster: 'crime-justice',
    category: 'Crime, justice and public safety',
    headline: 'Homosexual law reform passed by five votes',
    body: 'The 1986 Act decriminalised sex between men aged 16 and over. Sex between women had never been a crime. Convictions stayed on the record until an expungement law in 2018.',
  },
  {
    id: 'crime-justice-fgc',
    cluster: 'crime-justice',
    category: 'Crime, justice and public safety',
    headline: 'Youth justice invented the family group conference',
    body: 'The 1989 children and young persons Act put the family in the room before the court. Other countries copied the conference. The statute is now called the Oranga Tamariki Act; the conference is still the engine.',
  },
  {
    id: 'crime-justice-arms-2019',
    cluster: 'crime-justice',
    category: 'Crime, justice and public safety',
    headline: 'Semi-automatics were banned in four weeks',
    body: 'After 15 March 2019, Parliament passed the Arms Amendment Act on 11 April. Most military-style semi-automatics became prohibited. A buy-back followed. Firearms law here can move that fast.',
  },
  {
    id: 'crime-justice-serco',
    cluster: 'crime-justice',
    category: 'Crime, justice and public safety',
    headline: 'A private prison contract was pulled after “fight clubs”',
    body: 'Serco ran Mount Eden from 2011. In 2015 the government cancelled the contract after organised fights and other failures were exposed. The prison went back to the public service. Contracting out the cells did not last the decade.',
  },
  {
    id: 'crime-justice-youth-17',
    cluster: 'crime-justice',
    category: 'Crime, justice and public safety',
    headline: 'Seventeen-year-olds were moved into youth justice in 2019',
    body: 'Until then, 17 was adult court. The Oranga Tamariki Act change put most 17-year-olds into the youth jurisdiction, with family group conferences still the engine. Where childhood ends in the criminal law is a line Parliament has redrawn.',
  },
  {
    id: 'immigration-dawn-raids',
    cluster: 'immigration',
    category: 'Immigration and contribution',
    headline: 'Most overstayers in the 1970s were not Pacific',
    body: 'During the Dawn Raids, Pacific people were about a third of overstayers and the large majority of those arrested. British, American and South African overstayers were largely left alone. The Crown apologised in 2021.',
  },
  {
    id: 'immigration-poll-tax',
    cluster: 'immigration',
    category: 'Immigration and contribution',
    headline: 'Chinese migrants once paid a poll tax to land',
    body: 'The Chinese Immigrants Act 1881 charged £10 a head, later £100. It lasted until 1944. Helen Clark apologised in 2002. Later “colour-blind” rules were written over that history, not instead of it.',
  },
  {
    id: 'immigration-1987',
    cluster: 'immigration',
    category: 'Immigration and contribution',
    headline: 'Origin stopped being the official test in 1987',
    body: 'Until the Immigration Act that year, policy favoured Britain and a handful of “traditional” source countries. A points system in 1991 ranked skills, age and money instead. That skeleton is still visible in today’s settings.',
  },
  {
    id: 'immigration-refugee-quota',
    cluster: 'immigration',
    category: 'Immigration and contribution',
    headline: 'The refugee quota was a number for decades',
    body: 'A formal annual quota began in 1987. It sat near 750 places for a generation, then rose to 1,000 and, from July 2020, to 1,500. Quota refugees are referred by the UN; an asylum claim at the border is a separate door.',
  },
  {
    id: 'immigration-rse',
    cluster: 'immigration',
    category: 'Immigration and contribution',
    headline: 'Horticulture got a seasonal Pacific workforce in 2007',
    body: 'The Recognised Seasonal Employer scheme lets growers bring workers from specified Pacific countries for the harvest, then send them home. It was designed as a development policy as well as a labour one. The visa is temporary by design.',
  },
  {
    id: 'immigration-pacific-ballot',
    cluster: 'immigration',
    category: 'Immigration and contribution',
    headline: 'Some Pacific residence places are still a ballot',
    body: 'The Samoan Quota dates from 1970. The Pacific Access Category, from 2002, added Tonga, Tuvalu, Kiribati and later Fiji. Registrations are drawn. Demand always exceeds the places.',
  },
  {
    id: 'immigration-miq',
    cluster: 'immigration',
    category: 'Immigration and contribution',
    headline: 'The border became a hotel system for two years',
    body: 'Managed isolation and quarantine, from 2020, put arrivals in designated hotels under health rules. It was how the country ran a closed border. The last MIQ facilities wound down in 2022 as the border reopened.',
  },
  {
    id: 'immigration-parent-category',
    cluster: 'immigration',
    category: 'Immigration and contribution',
    headline: 'Bringing parents has been a queue more than a right',
    body: 'The Parent Category has been closed, redesigned, capped and paused more than once. When it runs, places are limited and the wait is long. Family reunion sits behind skills and numbers in the residence settings.',
  },
  {
    id: 'family-income-muldoon-super',
    cluster: 'family-income',
    category: 'Family income, welfare and savings',
    headline: 'A compulsory super scheme lasted one election',
    body: 'Labour’s 1974 Act would have built funded, individual nest eggs. Muldoon campaigned in 1975 on scrapping it for a pay-as-you-go pension. NZ Super is still paid from tax. The Super Fund of 2001 is a later buffer, not those missing accounts.',
  },
  {
    id: 'family-income-kiwisaver',
    cluster: 'family-income',
    category: 'Family income, welfare and savings',
    headline: 'KiwiSaver began on 1 July 2007',
    body: 'New employees were enrolled automatically and could opt out. A $1,000 kick-start and a matching tax credit did the persuading. The kick-start was later dropped. Unlike 1974, joining is still a choice.',
  },
  {
    id: 'family-income-family-benefit',
    cluster: 'family-income',
    category: 'Family income, welfare and savings',
    headline: 'Every child once carried a universal benefit',
    body: 'Family Benefit was paid to the mother, for each child, without a means test. People could capitalise it as a house deposit. Ruth Richardson’s 1991 Budget abolished it. Working for Families, in 2004, put child support back through the tax system — targeted, not universal.',
  },
  {
    id: 'family-income-dpb',
    cluster: 'family-income',
    category: 'Family income, welfare and savings',
    headline: 'A benefit for raising children alone arrived in 1973',
    body: 'The Domestic Purposes Benefit paid a parent whose partner was gone, at a time when that household barely existed in the statute book. Work-testing and names have changed. Sole-parent cash is still the argument.',
  },
  {
    id: 'family-income-ppl',
    cluster: 'family-income',
    category: 'Family income, welfare and savings',
    headline: 'Paid parental leave started at twelve weeks',
    body: 'From 1 July 2002 the payment was $325 a week, from tax, not from the employer. Unpaid leave had existed since 1987. The paid period is now 26 weeks. The original Act was about keeping the job; the 2002 amendment was about the cash.',
  },
  {
    id: 'family-income-super-age',
    cluster: 'family-income',
    category: 'Family income, welfare and savings',
    headline: 'Super age went from 60 back to 65',
    body: 'Muldoon’s National Super was paid from 60. A 1992 law lifted the age in steps, finishing in 2001. Every later government has been asked to lift it again. None has.',
  },
  {
    id: 'family-income-winter-energy',
    cluster: 'family-income',
    category: 'Family income, welfare and savings',
    headline: 'Winter energy money was added to the pension and benefits',
    body: 'From 1 July 2018, NZ Super and main benefits got a seasonal top-up for the colder months. It is paid whether or not the power bill is high. The payment is a line item, not a subsidy to the gentailer.',
  },
  {
    id: 'family-income-child-poverty-act',
    cluster: 'family-income',
    category: 'Family income, welfare and savings',
    headline: 'Child poverty targets were written into an Act',
    body: 'The Child Poverty Reduction Act 2018 makes governments set targets and publish the numbers. It does not pick the tools. Budgets still have to do the reducing; the Act makes missing it visible.',
  },
  {
    id: 'environment-rural-nuclear',
    cluster: 'environment-rural',
    category: 'Environment, water and rural land',
    headline: 'Nuclear-free is a statute, not a slogan',
    body: 'The 1987 Act banned nuclear weapons and nuclear-powered ships from New Zealand territory. ANZUS military cooperation with the United States froze for decades. The Rainbow Warrior had been bombed in Auckland two years earlier.',
  },
  {
    id: 'environment-rural-rma',
    cluster: 'environment-rural',
    category: 'Environment, water and rural land',
    headline: 'One 1991 Act tried to put the environment in every consent',
    body: 'The Resource Management Act replaced a tangle of planning and water statutes with a single “sustainable management” test. Farmers, iwi, councils and developers have argued over that test ever since. Replacing it is itself a recurring election promise.',
  },
  {
    id: 'environment-rural-ets',
    cluster: 'environment-rural',
    category: 'Environment, water and rural land',
    headline: 'An emissions market has been running since 2008',
    body: 'New Zealand’s ETS was among the first outside Europe. Agriculture was scheduled to join, then kept out. The price of a unit has been a political setting as much as a market one.',
  },
  {
    id: 'environment-rural-qms',
    cluster: 'environment-rural',
    category: 'Environment, water and rural land',
    headline: 'Fish became property in 1986',
    body: 'The Quota Management System gave fishers a tradeable right to a share of the catch. New Zealand went further with individual transferable quota than almost anyone. Overfishing was the problem it was built to solve; allocation was the fight that followed.',
  },
  {
    id: 'environment-rural-doc',
    cluster: 'environment-rural',
    category: 'Environment, water and rural land',
    headline: 'Conservation got its own department in 1987',
    body: 'The Conservation Act carved DOC out of lands, forests and wildlife agencies. National parks, native species and the conservation estate sat in one place. Mining and grazing on that estate have been the recurring argument.',
  },
  {
    id: 'environment-rural-fonterra',
    cluster: 'environment-rural',
    category: 'Environment, water and rural land',
    headline: 'The dairy industry was allowed to become one co-op',
    body: 'Fonterra formed in 2001 from the two big dairy companies, under the Dairy Industry Restructuring Act. Farmers voted it through. A single seller of most of the milk is a statutory exception, not a market accident.',
  },
  {
    id: 'environment-rural-zero-carbon',
    cluster: 'environment-rural',
    category: 'Environment, water and rural land',
    headline: 'The 2050 climate target is in an Act, with a commission attached',
    body: 'The Zero Carbon amendment of 2019 wrote net-zero (except methane, which has its own band) into the Climate Change Response Act and created the Climate Change Commission. Governments still set the budgets. The statute makes them explain themselves.',
  },
  {
    id: 'environment-rural-three-waters',
    cluster: 'environment-rural',
    category: 'Environment, water and rural land',
    headline: 'Three Waters tried to take pipes off the councils',
    body: 'The reform would have moved drinking water, wastewater and stormwater into new regional entities. Councils, iwi seats and debt were the fight. The next government repealed it in 2024. The pipes did not get younger.',
  },
  {
    id: 'maori-affairs-seats',
    cluster: 'maori-affairs',
    category: 'Māori affairs and Te Tiriti',
    headline: 'The Māori seats began as a five-year experiment',
    body: 'An 1867 Act created four seats, meant to expire. They were renewed, then made permanent. Every generation since has argued whether to keep, entrench, or abolish them.',
  },
  {
    id: 'maori-affairs-tribunal',
    cluster: 'maori-affairs',
    category: 'Māori affairs and Te Tiriti',
    headline: 'The Waitangi Tribunal could not look back at first',
    body: 'The 1975 Act only covered Crown actions after that year. In 1985 the Lange government opened claims to 1840. Historical settlements became possible from that amendment, not from the original statute.',
  },
  {
    id: 'maori-affairs-te-reo',
    cluster: 'maori-affairs',
    category: 'Māori affairs and Te Tiriti',
    headline: 'Te reo became an official language in 1987',
    body: 'The Waitangi Tribunal’s Te Reo Māori report found the Crown had failed to protect the language. The Māori Language Act followed. Kōhanga reo had already started in 1982 — from communities, not from a Bill.',
  },
  {
    id: 'maori-affairs-foreshore',
    cluster: 'maori-affairs',
    category: 'Māori affairs and Te Tiriti',
    headline: 'The foreshore was legislated into Crown ownership in 2004',
    body: 'After the Court of Appeal said Māori customary claims could go to the Māori Land Court, Parliament passed the Foreshore and Seabed Act. The Māori Party formed out of that fight. The 2011 replacement restored a pathway to customary title, with tests.',
  },
  {
    id: 'maori-affairs-sealord',
    cluster: 'maori-affairs',
    category: 'Māori affairs and Te Tiriti',
    headline: 'The Sealord deal bought half a fishing company',
    body: 'In 1992 the Crown’s Treaty fisheries settlement helped Māori buy 50 percent of Sealord. It was meant to settle commercial fishing claims. Who got which share of the quota took another decade to argue.',
  },
  {
    id: 'maori-affairs-land-march',
    cluster: 'maori-affairs',
    category: 'Māori affairs and Te Tiriti',
    headline: 'The 1975 land march walked the length of the North Island',
    body: 'Dame Whina Cooper led Te Rōpū o te Matakite from Te Hāpua to Parliament. The same year, the Waitangi Tribunal was established. The march made land a national argument again.',
  },
  {
    id: 'maori-affairs-lands-case',
    cluster: 'maori-affairs',
    category: 'Māori affairs and Te Tiriti',
    headline: 'A 1987 court case stopped the Crown giving land away blindly',
    body: 'When state-owned enterprises were created, the Court of Appeal said the Treaty clause in that Act had teeth. The Lands case meant the Crown could not transfer land without a way to protect Māori claims. Settlement machinery was built in the shadow of that judgment.',
  },
  {
    id: 'maori-affairs-te-urewera',
    cluster: 'maori-affairs',
    category: 'Māori affairs and Te Tiriti',
    headline: 'Te Urewera stopped being a national park in 2014',
    body: 'The Te Urewera Act took the land out of the national-parks statute and gave it legal personality, with a board that includes Tūhoe. People still walk the tracks. The owner on the paper is no longer the Crown in the old sense.',
  },
]

export const TRIVIA_BANK_SIZE = 64

const EXPECTED_CLUSTERS = [
  'health-access',
  'energy-power',
  'tax-fiscal',
  'crime-justice',
  'immigration',
  'family-income',
  'environment-rural',
  'maori-affairs',
] as const

function createSeededRandom(seed: number): () => number {
  let state = seed >>> 0
  return function nextRandom(): number {
    state = (state + 0x6d2b79f5) >>> 0
    let t = Math.imul(state ^ (state >>> 15), 1 | state)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function fisherYatesShuffle<T>(items: T[], random: () => number): T[] {
  const copy = [...items]
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1))
    const current = copy[index]
    const swap = copy[swapIndex]
    if (current === undefined || swap === undefined) {
      continue
    }
    copy[index] = swap
    copy[swapIndex] = current
  }
  return copy
}

/** Next unused fact for the cluster, in a seed-shuffled order. Never repeats in-session. */
export function pickClusterTrivia(args: {
  cluster: string
  usedIds: readonly string[]
  seed: number
  bank?: ClusterTrivia[]
}): ClusterTrivia | null {
  const pool = (args.bank ?? CLUSTER_TRIVIA).filter((item) => item.cluster === args.cluster)
  if (pool.length === 0) {
    return null
  }

  const shuffled = fisherYatesShuffle(pool, createSeededRandom(args.seed))
  return shuffled.find((item) => !args.usedIds.includes(item.id)) ?? null
}

export { EXPECTED_CLUSTERS }
