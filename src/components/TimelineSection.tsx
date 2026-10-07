import { Clock3 } from 'lucide-react'

import { romanticContent } from '../content/romanticContent'

import { SectionHeading } from './SectionHeading'

export function TimelineSection() {
  return (
    <section id="story" className="px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl space-y-12">
        <SectionHeading
          eyebrow="Our Story"
          title="The little moments that became everything"
          description={romanticContent.storyIntro}
        />

        <div className="relative mx-auto grid max-w-5xl gap-6">
          <div className="absolute left-5 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-transparent via-rose-200/35 to-transparent md:block" />

          {romanticContent.timeline.map((item, index) => (
            <article
              key={item.title}
              className="timeline-card grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur md:grid-cols-[72px_1fr] md:p-8"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-rose-200/25 bg-rose-200/10 text-rose-100 md:h-14 md:w-14">
                <Clock3 className="h-5 w-5" />
              </div>

              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.35em] text-rose-200/65">{item.date}</p>
                <h3 className="font-display text-3xl text-stone-50">{item.title}</h3>
                <p className="max-w-3xl text-sm leading-7 text-stone-200/76 md:text-base">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
