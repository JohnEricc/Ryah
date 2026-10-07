import { useRef } from 'react'

import openingBg from '../../Opening BG.webp'

import { ManaMotes } from './ManaMotes'

type IntroScreenProps = {
  recipientName: string
  message: string
  onContinue: () => void
}

export function IntroScreen({ recipientName, message, onContinue }: IntroScreenProps) {
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
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
      onClick={onContinue}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Full-bleed Frieren background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(8, 14, 28, 0.4) 0%, rgba(8, 14, 28, 0.05) 50%, rgba(4, 7, 14, 0.55) 100%), url(${openingBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      />

      {/* Floating mana motes across the entire screen */}
      <ManaMotes count={24} />

      <div className="relative z-10 flex flex-col items-center px-6 pb-24 pt-20 text-center sm:pt-24">
        <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-sky-200/75">
          For {recipientName}
        </p>

        <h1
          aria-label={message}
          className="flex max-w-md flex-col items-center gap-4"
        >
          <span className="text-3xl font-serif font-normal leading-tight text-slate-50 sm:text-4xl">
            Hi baby, I made this for you.
          </span>
          <span className="font-hand text-xl text-blue-100/90 sm:text-2xl">
            sana magustuhan mo. I love you so much
          </span>
        </h1>

        <button
          type="button"
          onClick={onContinue}
          aria-label="Tap or swipe up"
          className="mt-8 rounded-full border border-white/20 bg-white/10 px-7 py-3 text-xs uppercase tracking-[0.3em] text-slate-100 shadow-lg backdrop-blur-md transition hover:bg-white/20 active:scale-95"
        >
          Tap to Enter ♡
        </button>
      </div>
    </section>
  )
}