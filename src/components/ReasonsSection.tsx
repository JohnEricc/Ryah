import { HeartHandshake } from 'lucide-react'

import { romanticContent } from '../content/romanticContent'

import { SectionHeading } from './SectionHeading'

export function ReasonsSection() {
  return (
    <section id="promises" className="px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl space-y-12">
        <SectionHeading
          eyebrow="Reasons I Love You"
          title="A few of the many truths I keep returning to"
          description="Not because love needs proof, but because you deserve to hear the beautiful things that are true about you."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {romanticContent.reasons.map((reason, index) => (
            <article
              key={reason}
              className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-rose-200/20 hover:bg-white/[0.065]"
            >
              <div className="flex items-center gap-3 text-rose-100">
                <HeartHandshake className="h-5 w-5" />
                <span className="text-xs uppercase tracking-[0.35em] text-rose-200/68">
                  Reason {index + 1}
                </span>
              </div>
              <p className="mt-6 text-sm leading-7 text-stone-200/80">{reason}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
