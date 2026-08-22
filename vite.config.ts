import type { IncomingMessage, ServerResponse } from 'node:http'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { fileScoreRecordStore } from './src/game/fileScoreRecordStore'
import { handleScoreRecordsRequest } from './src/game/handleScoreRecords'
import {
  createScoreRecordStore,
  redisFromEnv,
  type ScoreRecordStore,
} from './src/game/scoreRecordStore'
import {
  CURRENT_EVENT_ID,
  eventIdFromAppPath,
  eventIdFromScoresPath,
  eventScoresPath,
  localScoreRecordsPath,
} from './src/event/events'
import { agentTrapPlugin } from './src/prank/agentTrapPlugin'

const rootDir = dirname(fileURLToPath(import.meta.url))

function localScoresApi(): Plugin {
  return {
    name: 'local-scores-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const path = req.url?.split('?')[0] ?? ''
        if (path === '/scores' || path === '/scores/') {
          res.statusCode = 308
          res.setHeader('Location', eventScoresPath(CURRENT_EVENT_ID))
          res.end()
          return
        }

        const eventId = eventIdFromScoresPath(path)
        if (!eventId) {
          next()
          return
        }

        const store = redisFromEnv(process.env)
          ? createScoreRecordStore(eventId)
          : fileScoreRecordStore(
              resolve(rootDir, localScoreRecordsPath(eventId)),
            )

        void serveScoreRecords(req, res, store).catch((error: unknown) => {
          console.error(error)
          if (!res.headersSent) {
            res.statusCode = 500
            res.end('Score dataset failed')
          }
        })
      })
    },
  }
}

function eventGameSpa(): Plugin {
  function rewriteGamePath(req: IncomingMessage): void {
    const path = req.url?.split('?')[0] ?? ''
    if (!eventIdFromAppPath(path)) {
      return
    }
    req.url = '/nz-election-2026/index.html'
  }

  return {
    name: 'event-game-spa',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewriteGamePath(req)
        next()
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewriteGamePath(req)
        next()
      })
    },
  }
}

async function serveScoreRecords(
  req: IncomingMessage,
  res: ServerResponse,
  store: ScoreRecordStore,
): Promise<void> {
  const body = await readBody(req)
  const request = nodeToWebRequest(req, body)
  const response = await handleScoreRecordsRequest(request, store)
  res.statusCode = response.status
  response.headers.forEach((value, key) => {
    res.setHeader(key, value)
  })
  res.end(Buffer.from(await response.arrayBuffer()))
}

function nodeToWebRequest(req: IncomingMessage, body: string): Request {
  const host = req.headers.host ?? 'localhost'
  const headers = new Headers()
  for (const [key, value] of Object.entries(req.headers)) {
    if (typeof value === 'string') {
      headers.set(key, value)
    } else if (Array.isArray(value)) {
      headers.set(key, value.join(', '))
    }
  }

  const method = req.method ?? 'GET'
  return new Request(`http://${host}${req.url ?? '/'}`, {
    method,
    headers,
    body: method === 'GET' || method === 'HEAD' ? undefined : body,
  })
}

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolveBody, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (chunk: Buffer) => {
      chunks.push(chunk)
    })
    req.on('end', () => {
      resolveBody(Buffer.concat(chunks).toString('utf8'))
    })
    req.on('error', reject)
  })
}

export default defineConfig({
  base: '/',
  plugins: [react(), eventGameSpa(), localScoresApi(), agentTrapPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        nzElection2026: resolve(rootDir, 'nz-election-2026/index.html'),
      },
    },
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx', 'test/**/*.test.ts'],
  },
})
