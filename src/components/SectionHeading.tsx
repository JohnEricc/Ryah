type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-4 text-center">
      <p className="text-xs uppercase tracking-[0.45em] text-rose-200/80">{eyebrow}</p>
      <h2 className="font-display text-4xl text-rose-50 md:text-5xl">{title}</h2>
      <p className="text-sm leading-7 text-stone-200/78 md:text-base">{description}</p>
    </div>
  )
}
