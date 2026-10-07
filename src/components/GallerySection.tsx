import { romanticContent } from '../content/romanticContent'

import { SectionHeading } from './SectionHeading'

export function GallerySection() {
  return (
    <section id="gallery" className="px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl space-y-12">
        <SectionHeading
          eyebrow="Memory Gallery"
          title="A moodboard of how loving you feels"
          description="These frames are not replacements for real memories. They are atmosphere pieces: soft, romantic snapshots that carry the same warmth your name leaves behind."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {romanticContent.gallery.map((memory, index) => (
            <article
              key={memory.title}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.18)] transition duration-500 hover:-translate-y-1 hover:border-rose-200/25"
              style={{ animationDelay: `${index * 140}ms` }}
            >
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="h-[19rem] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3 px-2 pb-2 pt-5">
                <p className="text-xs uppercase tracking-[0.35em] text-rose-200/65">Memory {index + 1}</p>
                <h3 className="font-display text-3xl text-stone-50">{memory.title}</h3>
                <p className="text-sm leading-7 text-stone-200/74">{memory.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
