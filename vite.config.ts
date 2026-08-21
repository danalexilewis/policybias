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

const rootDir = dirname(fileURLToPath(import.meta.url))

function localScoresApi(): Plugin {
  const store = redisFromEnv(process.env)
    ? createScoreRecordStore()
    : fileScoreRecordStore(resolve(rootDir, 'data/score-records.jsonl'))

  return {
    name: 'local-scores-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith('/api/scores')) {
          next()
          return
        }

        void serveScoreRecords(req, res, store)
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
  plugins: [react(), localScoresApi()],
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
