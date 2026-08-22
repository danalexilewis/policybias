// @vitest-environment jsdom
import { act, cleanup, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useOnlineStatus } from './useOnlineStatus'

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

function stubOnline(online: boolean): void {
  vi.stubGlobal('navigator', { ...navigator, onLine: online })
}

describe('useOnlineStatus', () => {
  it('follows navigator.onLine and the window events', () => {
    stubOnline(true)
    const { result } = renderHook(() => useOnlineStatus())
    expect(result.current).toBe(true)

    act(() => {
      stubOnline(false)
      window.dispatchEvent(new Event('offline'))
    })
    expect(result.current).toBe(false)

    act(() => {
      stubOnline(true)
      window.dispatchEvent(new Event('online'))
    })
    expect(result.current).toBe(true)
  })
})
