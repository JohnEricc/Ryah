import { ArrowDown, Heart, Sparkles } from 'lucide-react'

import { romanticContent } from '../content/romanticContent'

type HeroSectionProps = {
  onReadLetter: () => void
  onSeeStory: () => void
}

export function HeroSection({ onReadLetter, onSeeStory }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-rose-100/82 backdrop-blur">
            <Heart className="h-4 w-4 text-rose-300" />
            A love note, designed in full
          </div>

          <div className="space-y-6">
            <p className="max-w-xl text-sm leading-7 text-stone-200/74">
              For <span className="text-rose-100">{romanticContent.recipientName}</span>
            </p>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.94] text-stone-50 sm:text-6xl lg:text-8xl">
              {romanticContent.heroHeadline}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-stone-200/82 md:text-lg">
              {romanticContent.heroSubheading}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={onReadLetter}
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(247,175,195,0.95),rgba(240,205,130,0.95))] px-7 py-3 text-sm font-semibold text-[#341625] shadow-[0_20px_60px_rgba(232,174,156,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_70px_rgba(232,174,156,0.34)]"
            >
              Read My Letter
            </button>
            <button
              type="button"
              onClick={onSeeStory}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/6 px-7 py-3 text-sm font-semibold text-rose-50/92 backdrop-blur transition duration-300 hover:bg-white/10"
            >
              See Our Story
            </button>
          </div>

          <button
            type="button"
            onClick={onSeeStory}
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-stone-200/72 transition hover:text-rose-100"
          >
            Scroll for the memories
            <ArrowDown className="h-4 w-4 transition group-hover:translate-y-1" />
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-10 rounded-full bg-rose-200/20 blur-3xl" />
          <div className="romantic-panel relative overflow-hidden p-7 sm:p-8">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-rose-100/70">
              <span>Private archive</span>
              <Sparkles className="h-4 w-4 text-amber-200" />
            </div>

            <div className="mt-10 space-y-6">
              <p className="text-sm leading-7 text-stone-200/84">
                {romanticContent.dedication}
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.75rem] border border-white/10 bg-black/10 p-4">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-stone-300/60">
                    Vibe
                  </p>
                  <p className="mt-3 font-display text-2xl text-stone-50">Tender</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-black/10 p-4">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-stone-300/60">
                    Feeling
                  </p>
                  <p className="mt-3 font-display text-2xl text-stone-50">Chosen</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-black/10 p-4">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-stone-300/60">
                    Promise
                  </p>
                  <p className="mt-3 font-display text-2xl text-stone-50">Always</p>
                </div>
              </div>
            </div>

            <div className="mt-10 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <p className="mt-6 text-right font-display text-2xl italic text-rose-100/90">
              {romanticContent.signature}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
