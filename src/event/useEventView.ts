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

function withCurrentSearch(path: string): string {
  return `${path}${window.location.search}`
}

/**
 * Board vs game screens for this event, driven by the URL.
 * Play pushes `/<event>/game`; `/questions` and `/results` skip to those screens.
 * Exit returns to the board. Filter query params stay on the URL.
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
    window.history.pushState(
      GAME_HISTORY_STATE,
      '',
      withCurrentSearch(eventGamePath(CURRENT_EVENT_ID)),
    )
    setView('game')
  }

  function exitGame(): void {
    window.history.pushState(
      {},
      '',
      withCurrentSearch(eventPath(CURRENT_EVENT_ID)),
    )
    setView('board')
  }

  return { view, openGame, exitGame }
}
