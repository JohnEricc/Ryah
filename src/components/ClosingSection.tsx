import { ArrowUpRight, Sparkles } from 'lucide-react'

import { romanticContent } from '../content/romanticContent'

type ClosingSectionProps = {
  onReplay: () => void
}

export function ClosingSection({ onReplay }: ClosingSectionProps) {
  return (
    <section id="closing" className="px-6 pb-24 pt-20 md:px-10 md:pb-28 md:pt-24">
      <div className="mx-auto max-w-5xl">
        <div className="romantic-panel overflow-hidden p-8 text-center sm:p-10 md:p-14">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-rose-200/25 bg-rose-200/10 text-rose-50">
            <Sparkles className="h-6 w-6" />
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.45em] text-rose-200/70">
            Final words
          </p>
          <h2 className="mt-5 font-display text-4xl text-stone-50 md:text-6xl">
            {romanticContent.closingMessage}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-8 text-stone-200/80 md:text-base">
            {romanticContent.closingPromise}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={onReplay}
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(247,175,195,0.95),rgba(240,205,130,0.95))] px-7 py-3 text-sm font-semibold text-[#341625] shadow-[0_20px_60px_rgba(232,174,156,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_70px_rgba(232,174,156,0.34)]"
            >
              Replay From The Top
            </button>
            <a
              href="#home"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-7 py-3 text-sm font-semibold text-rose-50/92 transition duration-300 hover:bg-white/10"
            >
              Back to the beginning
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-10 font-display text-3xl italic text-rose-100/90">
            {romanticContent.signature}
          </p>
        </div>
      </div>
    </section>
  )
}
