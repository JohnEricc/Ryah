import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { ManaMotes } from '../components/ManaMotes'
import {
  type LetterItem,
  type LetterTone,
  LETTER_TONES,
  letters,
} from '../content/lettersData'

function ToneFilters({
  active,
  onChange,
  counts,
}: {
  active: LetterTone
  onChange: (tone: LetterTone) => void
  counts: Record<LetterTone, number>
}) {
  return (
    <div
      role="tablist"
      aria-label="Letter tones"
      className="no-scrollbar flex items-center gap-2 overflow-x-auto px-1 py-2 sm:justify-center mt-6"
    >
      {LETTER_TONES.map((tone) => {
        const isActive = active === tone
        return (
          <button
            key={tone}
            role="tab"
            aria-selected={isActive}
            type="button"
            onClick={() => onChange(tone)}
            className={[
              'touch-manipulation rounded-full border px-4 py-1.5 text-xs whitespace-nowrap transition',
              isActive
                ? 'border-amber-300 bg-amber-200 font-bold text-[#22140c] shadow-[0_0_12px_rgba(250,215,160,0.35)]'
                : 'border-amber-900/60 bg-[#281810]/85 text-amber-200/60 hover:text-amber-100',
            ].join(' ')}
          >
            {tone}
            <span className="ml-1.5 opacity-70">{counts[tone] ?? 0}</span>
          </button>
        )
      })}
    </div>
  )
}

function LetterBook({
  letter,
  index,
  onOpen,
}: {
  letter: LetterItem
  index: number
  onOpen: (letter: LetterItem) => void
}) {
  const label = letter.subtitle || `Volume ${String(index + 1).padStart(2, '0')}`

  return (
    <article
      role="article"
      className="group relative aspect-[4/5] w-full transform-gpu cursor-pointer select-none transition-all duration-300 active:scale-[0.98] will-change-transform sm:hover:-translate-y-2.5 sm:hover:rotate-[1deg]"
    >
      {/* Book Cover Graphic */}
      <img
        src="/ghibli_book.webp"
        alt=""
        draggable={false}
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-contain drop-shadow-[0_16px_35px_rgba(0,0,0,0.65)]"
      />

      {/* Text & Content Layer: Snapped squarely over the cream parchment label */}
      <div className="absolute left-[18%] top-[12%] z-10 flex h-[76%] w-[64%] flex-col justify-between p-2 text-stone-800 sm:p-3">
        <div>
          <div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.2em] text-stone-500 sm:text-[10px]">
            <span>{label}</span>
            <span className="rounded-full bg-amber-900/10 px-1.5 py-0.5 text-amber-900">
              {letter.tone}
            </span>
          </div>

          <h3 className="mt-2 font-serif text-lg font-bold tracking-tight text-[#2a1a12] sm:text-xl">
            {letter.title}
          </h3>

          <p className="mt-1.5 line-clamp-3 font-serif text-xs italic leading-relaxed text-stone-700">
            {letter.teaser}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-stone-300/70 pt-2 text-[11px]">
          <span className="font-serif italic text-stone-500">Written by John</span>
          <span className="font-semibold text-amber-950 transition group-hover:text-amber-800">
            Open Volume →
          </span>
        </div>
      </div>

      {/* Full-card click target */}
      <button
        type="button"
        aria-label={`Open letter: ${letter.title}`}
        onClick={() => onOpen(letter)}
        className="absolute inset-0 z-20 cursor-pointer"
      />
    </article>
  )
}

function LetterReader({
  letter,
  onClose,
}: {
  letter: LetterItem
  onClose: () => void
}) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div
      aria-label="Letter reader"
      role="dialog"
      aria-modal="true"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:bg-black/85 sm:backdrop-blur-md sm:p-6"
    >
      <div className="relative max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-stone-300 bg-[#f7f2e7] p-6 text-stone-900 shadow-2xl sm:p-10">
        {/* Sticky top-right close button */}
        <button
          type="button"
          aria-label="Close letter"
          onClick={onClose}
          className="sticky top-4 right-4 ml-auto z-20 flex h-9 w-9 items-center justify-center rounded-full bg-stone-200/80 text-stone-700 shadow-sm transition hover:bg-stone-300 touch-manipulation"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Wax Seal Header Accent */}
        <div className="-mt-2 mb-4 flex justify-center">
          <img
            src="/ghibli_wax_seal.webp"
            alt=""
            className="h-12 w-12 drop-shadow-md"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-900/80">
            {letter.subtitle} · {letter.tone}
          </p>
          <p className="mt-1 text-center font-serif text-2xl font-bold text-[#2a1a12] underline underline-offset-8 sm:text-3xl">
            {letter.title}
          </p>
        </div>

        <div className="my-6 border-b border-stone-300/80" />

        <div className="space-y-4 text-justify font-serif text-sm leading-relaxed text-stone-800 sm:text-base">
          {letter.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {letter.footer ? (
          <p className="pt-5 text-center font-serif text-lg font-bold text-[#2a1a12] underline underline-offset-8">
            {letter.footer}
          </p>
        ) : null}

        {/* Centered return-to-bookshelf call-to-action */}
        <div className="mt-8 mb-4 flex justify-center">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[#3d261d]/20 bg-[#3d261d]/10 px-6 py-2.5 font-serif text-sm tracking-wide text-[#3d261d] transition hover:bg-[#3d261d]/20 touch-manipulation"
          >
            ← Return to Bookshelf
          </button>
        </div>

        <div className="flex items-center justify-between border-t border-stone-300/80 pt-4">
          <span className="font-serif text-sm italic text-stone-600">Forever yours, John</span>
          <button
            type="button"
            onClick={onClose}
            className="touch-manipulation rounded-full bg-[#2a1a12] px-5 py-2 text-xs font-semibold text-amber-50 transition hover:bg-[#3d271c] active:scale-95"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Letters() {
  const navigate = useNavigate()
  const [activeTone, setActiveTone] = useState<LetterTone>('All')
  const [selectedLetter, setSelectedLetter] = useState<LetterItem | null>(null)

  const toneCounts = useMemo(() => {
    const baseCounts = letters.reduce<Partial<Record<LetterTone, number>>>((acc, item) => {
      acc[item.tone] = (acc[item.tone] ?? 0) + 1
      return acc
    }, {})

    return {
      All: letters.length,
      Soft: baseCounts.Soft ?? 0,
      Grateful: baseCounts.Grateful ?? 0,
      Playful: baseCounts.Playful ?? 0,
      Serious: baseCounts.Serious ?? 0,
      Milestone: baseCounts.Milestone ?? 0,
    } as Record<LetterTone, number>
  }, [])

  const visibleLetters = useMemo(() => {
    if (activeTone === 'All') return letters
    return letters.filter((letter) => letter.tone === activeTone)
  }, [activeTone])

  return (
    <div className="relative min-h-screen text-[#fcedd8]">
      {/* Full-bleed dark archive backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(20,12,8,0.75) 0%, rgba(30,18,12,0.45) 40%, rgba(16,9,6,0.85) 100%), url('/ghibli_library_bg.webp')`,
        }}
      />

      {/* Floating dust motes */}
      <ManaMotes count={14} />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-16 pt-6 sm:px-6">
        <div className="mb-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate('/home')}
            className="inline-flex touch-manipulation items-center gap-2 rounded-full border border-amber-900/60 bg-[#281810]/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/70 sm:backdrop-blur-md transition hover:text-amber-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        </div>

        {selectedLetter ? (
          <LetterReader letter={selectedLetter} onClose={() => setSelectedLetter(null)} />
        ) : (
          <>
            <header className="text-center">
              <h1 className="text-center font-serif text-3xl italic text-[#fcedd8] drop-shadow-md sm:text-4xl">
                Letters I Made For You
              </h1>
              <p className="mt-1 text-center font-mono text-[10px] uppercase tracking-[0.35em] text-amber-200/70">
                The Reading Room · Private Archives
              </p>
              <p className="mx-auto mt-2 max-w-lg text-center text-xs italic text-amber-100/75 sm:text-sm">
                Every quiet thought, heavy day, and prayer I ever put into ink for you —
                preserved volume by volume.
              </p>
            </header>

            <ToneFilters active={activeTone} onChange={setActiveTone} counts={toneCounts} />

            <div className="mx-auto mt-8 grid max-w-xs grid-cols-1 gap-8 pb-16 sm:max-w-2xl sm:grid-cols-2 sm:gap-8 lg:max-w-5xl lg:grid-cols-3 lg:gap-10">
              {visibleLetters.map((letter, index) => (
                <LetterBook
                  key={letter.id}
                  letter={letter}
                  index={index}
                  onOpen={(selected) => setSelectedLetter(selected)}
                />
              ))}
            </div>

            {visibleLetters.length === 0 ? (
              <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-dashed border-amber-900/40 bg-[#281810]/70 px-6 py-10 text-center text-sm text-amber-100/70">
                No letters match this filter yet. Pick another tone to continue reading.
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  )
}