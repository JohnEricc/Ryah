import { useMemo } from 'react'

type PetalSnowfallProps = {
  assets: string[]
  petals?: number
}

/**
 * Gentle, slow drifting flower petals falling across the full viewport.
 * Petals are drawn only from the provided `assets` array and spread evenly
 * across the full width (0vw to 100vw) with light natural jitter.
 */
export function PetalSnowfall({ assets, petals = 32 }: PetalSnowfallProps) {
  const drops = useMemo(
    () =>
      Array.from({ length: petals }).map((_, i) => {
        // Even spread across the full width (0vw to 100vw), with light natural jitter
        const jitter = (Math.random() - 0.5) * (100 / petals)
        return {
          id: i,
          src: assets[i % assets.length],
          size: 12 + Math.random() * 14,
          left: (i / petals) * 100 + jitter,
          duration: 11 + Math.random() * 9,
          delay: -Math.random() * 16,
          sway: (Math.random() - 0.5) * 26,
          spin: 220 + Math.random() * 320,
          opacity: 0.35 + Math.random() * 0.45,
        }
      }),
    [petals, assets],
  )

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-screen w-screen overflow-hidden"
    >
      {drops.map((p) => (
        <img
          key={p.id}
          src={p.src}
          alt=""
          className="petal absolute top-0"
          style={
            {
              left: `${p.left}vw`,
              width: p.size,
              height: p.size,
              ['--sway' as string]: `${p.sway}vw`,
              ['--spin' as string]: `${p.spin}deg`,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}