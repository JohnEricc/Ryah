import { romanticContent } from '../content/romanticContent'

import { SectionHeading } from './SectionHeading'

export function LetterSection() {
  return (
    <section id="letter" className="px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl space-y-12">
        <SectionHeading
          eyebrow="Love Letter"
          title="The part I would still write by hand"
          description="Some feelings deserve more than a headline. They deserve room, breath, and a quiet place to land."
        />

        <div className="romantic-panel mx-auto max-w-4xl p-8 sm:p-10 md:p-12">
          <div className="space-y-8">
            {romanticContent.loveLetter.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-stone-200/84 md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-sm uppercase tracking-[0.35em] text-rose-200/68">
              A reminder worth keeping close
            </p>
            <p className="font-display text-3xl italic text-rose-100/90">
              {romanticContent.signature}, with all my heart
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
