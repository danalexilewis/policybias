// @vitest-environment jsdom
import { act, cleanup, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { CURRENT_EVENT_ID, eventGamePath, eventPath } from './events'
import { useEventView } from './useEventView'

const BOARD = eventPath(CURRENT_EVENT_ID)
const GAME = eventGamePath(CURRENT_EVENT_ID)

afterEach(() => {
  cleanup()
  window.history.replaceState({}, '', '/')
})

beforeEach(() => {
  window.history.replaceState({}, '', BOARD)
})

describe('useEventView', () => {
  it('opens the game on its own url', () => {
    const { result } = renderHook(() => useEventView())

    act(() => {
      result.current.openGame()
    })

    expect(result.current.view).toBe('game')
    expect(window.location.pathname).toBe(GAME)
  })

  it('treats a direct load of the game url as the game', () => {
    window.history.replaceState({}, '', GAME)
    const { result } = renderHook(() => useEventView())
    expect(result.current.view).toBe('game')
  })

  it('leaves the game back to the board', () => {
    const { result } = renderHook(() => useEventView())

    act(() => {
      result.current.openGame()
    })
    act(() => {
      result.current.exitGame()
    })

    expect(result.current.view).toBe('board')
    expect(window.location.pathname).toBe(BOARD)
  })
})
