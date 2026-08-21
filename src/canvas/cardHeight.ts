import { createContext, useContext } from 'react'

/** Reports a canvas card's unscaled layout height after it renders. */
export const CardHeightContext = createContext<
  (id: string, height: number) => void
>(function ignoreHeight(_id: string, _height: number) {})

export function useReportCardHeight(): (id: string, height: number) => void {
  return useContext(CardHeightContext)
}
