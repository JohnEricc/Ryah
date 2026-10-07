import { useEffect, useMemo, useState } from 'react'

import manaMoteImg from '../../Mana Mote.webp'

type ManaMotesProps = {
  count?: number
}

type Mote = {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  sway: number
  opacity: number
  blur: number
}

/**
 * Slow, weightless floating mana motes drifting upward from the bottom
 * with gentle horizontal sway. Split into 3 depth layers so they feel 3D:
 *   - Background: smaller, dimmer
 *   - Midground: standard, crisp, breathing opacity
 *   - Foreground: a couple of large soft-blurred bokeh motes
 */
export function ManaMotes({ count = 24 }: ManaMotesProps) {
  // Detect mobile viewports (<640px) to throttle particle count and avoid scroll stutter.
  // Defaults to non-mobile when matchMedia isn't available (e.g. SSR / jsdom test env).
  const [isMobile, setIsMobile] = useState(
    () =>
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.innerWidth < 640,
  )

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return
    }
    const media = window.matchMedia('(max-width: 639px)')
    const update = () => setIsMobile(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  // Halve (and cap at 6) motes on mobile to keep the memory footprint low.
  const effCount = isMobile ? Math.max(1, Math.min(6, Math.ceil(count / 2))) : count

  const motes = useMemo<Mote[]>(() => {
    return Array.from({ length: effCount }).map((_, i) => {
      const t = i / Math.max(1, effCount - 1)

      // Layer selection: ~35% background, ~55% midground, ~10% foreground
      const roll = Math.random()
      let size: number
      let opacity: number
      let blur: number

      if (roll < 0.35) {
        size = 10 + Math.random() * 4
        opacity = 0.35 + Math.random() * 0.15
        blur = 0
      } else if (roll < 0.9) {
        size = 16 + Math.random() * 6
        opacity = 0.5 + Math.random() * 0.4
        blur = 0
      } else {
        size = 26 + Math.random() * 4
        opacity = 0.28 + Math.random() * 0.22
        blur = 2
      }

      const jitter = (Math.random() - 0.5) * (100 / count)

      return {
        id: i,
        left: t * 100 + jitter,
        size,
        duration: 9 + Math.random() * 7,
        delay: -(Math.random() * 18),
        sway: (Math.random() - 0.5) * 14,
        opacity,
        blur,
      }
    })
  }, [effCount])

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {motes.map((m) => (
        <img
          key={m.id}
          src={manaMoteImg}
          alt=""
          loading="lazy"
          decoding="async"
          className="mote absolute bottom-0 will-change-transform"
          style={
            {
              left: `${m.left}vw`,
              width: m.size,
              height: m.size,
              filter: m.blur ? `blur(${m.blur}px)` : undefined,
              opacity: m.opacity,
              willChange: 'transform, opacity',
              ['--sway' as string]: `${m.sway}vw`,
              animationDuration: `${m.duration}s`,
              animationDelay: `${m.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}