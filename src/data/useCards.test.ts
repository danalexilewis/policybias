// @vitest-environment jsdom
import { renderHook, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { eventCardsPath } from '../event/events'
import { useCards } from './useCards'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('useCards', () => {
  it('treats an HTML shell as a failed cards fetch, not as JSON', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response('<!doctype html><html><body>ok</body></html>', {
        status: 200,
        headers: { 'content-type': 'text/html; charset=utf-8' },
      }),
    )
    vi.stubGlobal('fetch', fetchMock)

    const { result } = renderHook(() => useCards('nz-election-2026', 'en'))

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(fetchMock).toHaveBeenCalledWith(
      eventCardsPath('nz-election-2026', 'en'),
    )
    expect(result.current.data).toBeNull()
    expect(result.current.error?.message).toMatch(/HTML instead of JSON/)
  })
})
