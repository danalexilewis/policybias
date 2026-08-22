import { z } from 'zod'

const partyIdSchema = z.string().min(1)

const stepKindSchema = z.enum([
  'given',
  'when',
  'then',
  'output',
  'outcome',
  'activates',
])

const connectorSchema = z.enum(['and', 'but']).nullable()

const cardStepSchema = z.object({
  kind: stepKindSchema,
  connector: connectorSchema,
  surface: z.string(),
  text: z.string(),
  extrapolated: z.boolean(),
  reason: z.string().optional(),
})

const cardScenarioSchema = z.object({
  title: z.string(),
  steps: z.array(cardStepSchema),
})

const reportItemSchema = z.object({
  text: z.string(),
  connector: connectorSchema,
})

const cardFaceSchema = z.object({
  kind: z.enum(['stated', 'derived']),
  specId: z.string(),
  title: z.string(),
  summary: z.string().optional(),
  system: z.string().optional(),
  note: z.string().optional(),
  scenarios: z.array(cardScenarioSchema),
  report: z.object({
    outputs: z.array(reportItemSchema),
    outcomes: z.array(reportItemSchema),
  }),
  activates: z.array(z.string()),
  counts: z.object({
    scenarios: z.number(),
    steps: z.number(),
    outputs: z.number(),
    outcomes: z.number(),
    extrapolated: z.number(),
  }),
})

const policyCardSchema = z.object({
  id: z.string(),
  party: partyIdSchema,
  title: z.string(),
  summary: z.string().optional(),
  clusters: z.array(z.string()).length(1),
  tags: z.array(z.string()),
  money: z.enum(['named-figure', 'no-figure']),
  source: z.object({
    title: z.string(),
    url: z.string(),
    path: z.string(),
  }),
  gaps: z.array(z.string()),
  assumptions: z.array(z.string()),
  stated: cardFaceSchema,
  derived: cardFaceSchema.optional(),
  counts: z.object({
    gaps: z.number(),
    assumptions: z.number(),
  }),
  translated: z.boolean().optional(),
})

const clusterMetaSchema = z.object({
  id: z.string(),
  label: z.string(),
  description: z.string(),
})

const anonymiseNamesSchema = z.object({
  caseInsensitive: z.array(z.string()),
  caseSensitive: z.array(z.string()),
  uniqueTitle: z.array(z.string()),
  shortTitle: z.array(z.string()),
})

const partyMetaSchema = z.object({
  id: partyIdSchema,
  label: z.string(),
  name: z.string(),
  colour: z.string(),
  logo: z.string().optional(),
  cardCount: z.number(),
  anonymise: anonymiseNamesSchema.optional(),
})

const coverageCellSchema = z.object({
  cluster: z.string(),
  party: partyIdSchema,
  cards: z.number(),
})

const clusterTriviaSchema = z.object({
  id: z.string(),
  cluster: z.string(),
  category: z.string(),
  headline: z.string(),
  body: z.string(),
})

/** Zod schema for `public/<event>/cards.<lang>.json`. */
export const cardsDatasetSchema = z.object({
  schemaVersion: z.literal('3'),
  eventId: z.string(),
  lang: z.string(),
  langs: z.array(z.string()),
  generatedAt: z.string(),
  clusters: z.array(clusterMetaSchema),
  parties: z.array(partyMetaSchema),
  coverage: z.array(coverageCellSchema),
  cards: z.array(policyCardSchema),
  trivia: z.array(clusterTriviaSchema),
})
