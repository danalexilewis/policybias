import { useEffect, useState } from 'react'
import {
  CURRENT_EVENT_ID,
  eventGamePath,
  eventIdFromPathname,
  eventPath,
  eventViewFromPath,
  type EventId,
  type EventView,
} from './events'

const GAME_HISTORY_STATE = { policybias: 'game' } as const

function readView(): EventView {
  return eventViewFromPath(window.location.pathname)
}

function readEventId(): EventId {
  return eventIdFromPathname(window.location.pathname) ?? CURRENT_EVENT_ID
}

function withCurrentSearch(path: string): string {
  return `${path}${window.location.search}`
}

/**
 * Board vs game for this event, driven by the URL.
 * Play pushes `/<event>/game`; exit returns to the board.
 * Filter query params stay on the URL so a shared board survives the game round-trip.
 */
export function useEventView(): {
  view: EventView
  eventId: EventId
  openGame: () => void
  exitGame: () => void
} {
  const [view, setView] = useState(readView)
  const [eventId, setEventId] = useState(readEventId)

  useEffect(() => {
    function onPopState(): void {
      setView(readView())
      setEventId(readEventId())
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  function openGame(): void {
    window.history.pushState(
      GAME_HISTORY_STATE,
      '',
      withCurrentSearch(eventGamePath(eventId)),
    )
    setView('game')
  }

  function exitGame(): void {
    window.history.pushState(
      {},
      '',
      withCurrentSearch(eventPath(eventId)),
    )
    setView('board')
  }

  return { view, eventId, openGame, exitGame }
}
