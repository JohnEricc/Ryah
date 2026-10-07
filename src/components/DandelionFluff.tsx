import { useMemo } from 'react'

type DandelionFluffProps = {
  count?: number
}

/**
 * Soft white dandelion fluff drifting diagonally upward, bottom-left to
 * top-right, across a gallery page. Particles are small (6–14px) with gentle
 * horizontal sway and staggered 8–15s durations.
 */
export function DandelionFluff({ count = 18 }: DandelionFluffProps) {
  const puffs = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const jitter = (Math.random() - 0.5) * 30
        return {
          id: i,
          size: 6 + Math.random() * 8,
          left: ((i / count) * 100 + jitter + 100) % 100,
          sway: 1.5 + Math.random() * 5,
          spin: 160 + Math.random() * 240,
          duration: 8 + Math.random() * 7,
          delay: -Math.random() * 15,
          opacity: 0.45 + Math.random() * 0.5,
        }
      }),
    [count],
  )

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-screen w-screen overflow-hidden"
    >
      {puffs.map((p) => (
        <span
          key={p.id}
          className="fluff"
          style={
            {
              left: `${p.left}vw`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              ['--fluff-sway' as string]: `${p.sway}vw`,
              ['--fluff-spin' as string]: `${p.spin}deg`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}