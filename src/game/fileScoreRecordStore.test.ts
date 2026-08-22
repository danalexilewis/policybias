import { mkdtemp, readFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { fileScoreRecordStore } from './fileScoreRecordStore'

describe('fileScoreRecordStore', () => {
  it('appends jsonl and lists what it wrote', async () => {
    const directory = await mkdtemp(join(tmpdir(), 'policybias-scores-'))
    const filePath = join(directory, 'score-records.jsonl')
    const store = fileScoreRecordStore(filePath)

    await store.append({
      correct: 4,
      attempted: 10,
      guesses: null,
      ageRange: null,
      ethnicities: null,
      intendedVote: null,
      feltWealth: null,
      recordedOn: '2026-08-21',
    })

    expect(await readFile(filePath, 'utf8')).toContain('"correct":4')
    expect(await store.list()).toHaveLength(1)
  })
})
