import { useEffect, useState } from 'react'
import {
  CURRENT_EVENT_ID,
  eventGamePath,
  eventPath,
  eventViewFromPath,
  type EventView,
} from './events'

const GAME_HISTORY_STATE = { policybias: 'game' } as const

function readView(): EventView {
  return eventViewFromPath(window.location.pathname)
}

/**
 * Board vs game for this event, driven by the URL.
 * Play pushes `/<event>/game`; exit returns to the board.
 */
export function useEventView(): {
  view: EventView
  openGame: () => void
  exitGame: () => void
} {
  const [view, setView] = useState(readView)

  useEffect(() => {
    function onPopState(): void {
      setView(readView())
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  function openGame(): void {
    const path = eventGamePath(CURRENT_EVENT_ID)
    window.history.pushState(GAME_HISTORY_STATE, '', path)
    setView('game')
  }

  function exitGame(): void {
    window.history.pushState({}, '', eventPath(CURRENT_EVENT_ID))
    setView('board')
  }

  return { view, openGame, exitGame }
}
