/**
 * WCAG relative-luminance contrast. Used to pick ink or white text on
 * party and category colours so body text stays at least 4.5:1.
 */

/** Matches `--ink` in global.css. */
export const INK = '#171717'

/** White text on dark fills. Stronger than cream `--paper` on mid tones. */
export const WHITE = '#ffffff'

/** Matches `--paper`. Cream type on strong category fills. */
export const PAPER = '#fffbe6'

const AA_BODY = 4.5

function channel(value: number): number {
  const srgb = value / 255
  return srgb <= 0.04045 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4
}

function parseHex(colour: string): [number, number, number] | null {
  const match = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(colour.trim())
  const body = match?.[1]
  if (!body) {
    return null
  }
  if (body.length === 3) {
    const red = body.slice(0, 1)
    const green = body.slice(1, 2)
    const blue = body.slice(2, 3)
    return [
      Number.parseInt(red + red, 16),
      Number.parseInt(green + green, 16),
      Number.parseInt(blue + blue, 16)
    ]
  }
  return [
    Number.parseInt(body.slice(0, 2), 16),
    Number.parseInt(body.slice(2, 4), 16),
    Number.parseInt(body.slice(4, 6), 16)
  ]
}

function luminance(colour: string): number {
  const rgb = parseHex(colour)
  if (!rgb) {
    return 0
  }
  const [red, green, blue] = rgb
  return 0.2126 * channel(red) + 0.7152 * channel(green) + 0.0722 * channel(blue)
}

/** Contrast ratio of two hex colours, 1–21. Invalid hex is treated as black. */
export function contrastRatio(foreground: string, background: string): number {
  const lighter = Math.max(luminance(foreground), luminance(background))
  const darker = Math.min(luminance(foreground), luminance(background))
  return (lighter + 0.05) / (darker + 0.05)
}

/**
 * Ink or white, whichever contrasts more with the fill.
 * Prefer this over a luminance cutoff — mid teals fail with white.
 */
export function contrastingText(background: string): string {
  const ink = contrastRatio(INK, background)
  const white = contrastRatio(WHITE, background)
  return ink >= white ? INK : WHITE
}

/**
 * Cream paper on a strong fill when it still meets AA.
 * Falls back to ink or white when cream would wash out.
 */
export function chipText(background: string): string {
  if (meetsAaBody(PAPER, background)) {
    return PAPER
  }
  return contrastingText(background)
}

/** True when the pair meets WCAG AA for body text. */
export function meetsAaBody(foreground: string, background: string): boolean {
  return contrastRatio(foreground, background) >= AA_BODY
}
