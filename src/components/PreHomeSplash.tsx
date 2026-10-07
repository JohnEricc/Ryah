import { useRef } from 'react'

import petalDandelion from '../../Piece_of_Dandelion.webp'
import petalLavender from '../../Piece_of_Lavender.webp'
import petalMorningGlory from '../../Piece_of_Morning_Glory_Blossom.webp'

import { PetalSnowfall } from './PetalSnowfall'

type PreHomeSplashProps = {
  onContinue: () => void
}

export function PreHomeSplash({ onContinue }: PreHomeSplashProps) {
  const touchStartY = useRef<number | null>(null)

  function handleTouchStart(event: React.TouchEvent<HTMLElement>) {
    touchStartY.current = event.changedTouches[0]?.clientY ?? null
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLElement>) {
    const startY = touchStartY.current
    const endY = event.changedTouches[0]?.clientY ?? null

    if (startY === null || endY === null) {
      return
    }

    if (startY - endY > 50) {
      onContinue()
    }
  }

  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#2a1a14] via-[#1a0f0d] to-[#120a09]"
      onClick={onContinue}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Warm centered radial glow behind the text */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(255, 180, 120, 0.18), transparent 60%)',
        }}
      />

      {/* Floating petal snowfall across the full screen */}
      <PetalSnowfall
        assets={[petalDandelion, petalLavender, petalMorningGlory]}
        petals={36}
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-amber-200/70">
          For Ryah
        </p>

        <h1 className="max-w-md text-3xl font-normal leading-tight text-amber-50 sm:text-4xl md:text-5xl">
          Hi baby, I made this for you.
        </h1>

        <p className="font-hand mt-4 max-w-sm text-xl text-amber-100/80 sm:text-2xl">
          sana magustuhan mo. I love you so much
        </p>

        <button
          type="button"
          onClick={onContinue}
          className="animate-breathe mt-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-7 py-3 text-xs uppercase tracking-[0.3em] text-amber-100/90 shadow-lg backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-black/50 active:scale-95"
        >
          Tap to Enter ♡
        </button>
      </div>
    </section>
  )
}