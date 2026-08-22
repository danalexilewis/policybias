import type { Plugin } from 'vite'
import {
  CURRENT_EVENT_ID,
  eventLlmsPath,
  eventLlmsPolicyPath,
  llmsHrefForHtmlPath,
} from '../event/events'
import { injectAgentTrap } from './agentTrapMarkup'
import {
  buildEventLlmsTxt,
  buildPolicyLlmsTxt,
  buildSiteLlmsTxt,
  llmsTxtForPath,
} from './llmsTxt'
import { listStatedPolicies } from './statedCorpus'

/** Serves event llms.txt files and plants the scraper glossary in HTML. */
export function agentTrapPlugin(): Plugin {
  return {
    name: 'agent-trap',
    transformIndexHtml(html, ctx) {
      return injectAgentTrap(html, llmsHrefForHtmlPath(ctx.path))
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const path = req.url?.split('?')[0] ?? ''
        const body = llmsTxtForPath(path)
        if (body === null) {
          next()
          return
        }

        res.statusCode = 200
        res.setHeader('content-type', 'text/plain; charset=utf-8')
        res.end(body)
      })
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'llms.txt',
        source: buildSiteLlmsTxt(),
      })
      const eventId = CURRENT_EVENT_ID
      this.emitFile({
        type: 'asset',
        fileName: eventLlmsPath(eventId).replace(/^\//, ''),
        source: buildEventLlmsTxt(eventId),
      })
      for (const policy of listStatedPolicies(eventId)) {
        this.emitFile({
          type: 'asset',
          fileName: eventLlmsPolicyPath(eventId, policy.id).replace(/^\//, ''),
          source: buildPolicyLlmsTxt(eventId, policy.id) ?? '',
        })
      }
    },
  }
}
