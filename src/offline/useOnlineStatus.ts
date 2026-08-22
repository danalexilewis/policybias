import { useEffect, useState } from 'react'

function navigatorOnline(): boolean {
  return typeof navigator === 'undefined' ? true : navigator.onLine
}

/** Live `navigator.onLine`, updated from the window online/offline events. */
export function useOnlineStatus(): boolean {
  const [online, setOnline] = useState(navigatorOnline)

  useEffect(() => {
    function goOnline(): void {
      setOnline(true)
    }

    function goOffline(): void {
      setOnline(false)
    }

    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)
    return () => {
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
  }, [])

  return online
}
