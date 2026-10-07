import { ArrowLeft, ChevronLeft } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Flower assets — placed by Ryah in the project root
import dandelion from '../../Dandelion.webp'
import dandelionBg from '../../Dandelion BG.webp'
import lavender from '../../Lavender.webp'
import lavenderBg from '../../Lavender BG.webp'
import morningGlory from '../../Blue_Morning_Glory.webp'
import morningGloryBg from '../../Morning Glory BG.webp'
import familyBouquet from '../../Family_Bouquet.webp'
import familyBouquetBg from '../../Family Bouquet BG.webp'
import petalDandelion from '../../Piece_of_Dandelion.webp'
import petalLavender from '../../Piece_of_Lavender.webp'
import petalMorningGlory from '../../Piece_of_Morning_Glory_Blossom.webp'

type Bouquet = {
  id: string
  owner: string
  flower: string
  image: string
  bg: string
  petals: string[]
  meaning: string
  resonates: string
}

const bouquets: Bouquet[] = [
  {
    id: 'dandelion',
    owner: 'John Eric',
    flower: 'The Dandelion',
    image: dandelion,
    bg: dandelionBg,
    petals: [petalDandelion],
    meaning:
      'Resilience through adversity, unbreakable vitality, and the courage to seek freedom.',
    resonates:
      'The dandelion does not need curated soil or ideal conditions to thrive; it has the grit to push straight through solid concrete without losing its golden center. Even when stepped on or pressured to conform, its deep taproot remains unbroken. Its final stage is not staying tied to where it took root, but letting its seeds take flight into the open wind to plant a life of genuine peace and independence.',
  },
  {
    id: 'lavender',
    owner: 'Ryah',
    flower: 'Wild Lavender',
    image: lavender,
    bg: lavenderBg,
    petals: [petalLavender],
    meaning:
      'Calm composure, emotional clarity, restorative peace, and independent grace.',
    resonates:
      'Lavender flourishes best when given open sunlight and clean room to breathe; it wilts when hovered over or smothered, reminding those around it of the beauty of healthy space and quiet trust. It naturally soothes an overstimulated space, bringing balance and grounding clarity without needing to raise its voice. It possesses an enduring, quiet strength that stays fragrant and true even in the heat.',
  },
  {
    id: 'morning-glory',
    owner: 'Caelum',
    flower: 'Heavenly Blue Morning Glory',
    image: morningGlory,
    bg: morningGloryBg,
    petals: [petalMorningGlory],
    meaning:
      'The untamed heavens (Caelum), fresh beginnings, pure dawns, and limitless curiosity.',
    resonates:
      'Opening wide with the morning light, the morning glory carries none of the shadows or burdens of yesterday. Its sky-blue color mirrors an open horizon without ceilings or conditions, symbolizing a life created to grow freely toward the light. It climbs naturally upward, sheltered and grounded by love, representing innocence, clean slates, and the promise of a peaceful tomorrow.',
  },
  {
    id: 'family',
    owner: 'Our Family',
    flower: 'The Wildflower Bouquet',
    image: familyBouquet,
    bg: familyBouquetBg,
    petals: [petalDandelion, petalLavender, petalMorningGlory],
    meaning:
      'Chosen harmony, generational healing, and an unshakeable sanctuary built on love rather than obligation.',
    resonates:
      'None of these are fragile flowers bred to stay trapped in a manicured greenhouse—they are hardy wildflowers that thrive under open skies. Caelum rests at the radiant center, protected and held by the flowers around him, standing as the living proof of a cycle broken and a sky left wide open. The gold of the dandelion meets the violet of the lavender, balancing fierce resilience with gentle composure. Where one brings warmth, grit, and devotion, the other brings cool clarity, calm, and grounded peace. The seeds drifting into the air mark the flight toward a fresh start, while the soft ribbon tying the stems together shows a family held together not by control or guilt, but by a gentle, chosen bond.',
  },
]

function PetalSnowfall({
  assets,
  petals = 32,
}: {
  assets: string[]
  petals?: number
}) {
  const drops = useMemo(
    () =>
      Array.from({ length: petals }).map((_, i) => {
        const jitter = (Math.random() - 0.5) * (100 / petals)
        return {
          id: i,
          src: assets[i % assets.length],
          size: 12 + Math.random() * 14,
          left: (i / petals) * 100 + jitter,
          duration: 11 + Math.random() * 9,
          delay: -Math.random() * 16,
          sway: (Math.random() - 0.5) * 26,
          spin: 220 + Math.random() * 320,
          opacity: 0.35 + Math.random() * 0.45,
        }
      }),
    [petals, assets],
  )

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-screen w-screen overflow-hidden"
    >
      {drops.map((p) => (
        <img
          key={p.id}
          src={p.src}
          alt=""
          className="petal absolute top-0"
          style={
            {
              left: `${p.left}vw`,
              width: p.size,
              height: p.size,
              ['--sway' as string]: `${p.sway}vw`,
              ['--spin' as string]: `${p.spin}deg`,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}

export default function Flowers() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<Bouquet | null>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [selected])

  if (selected) {
    return (
      <section
        className="relative min-h-screen overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(18,9,22,0.25) 0%, rgba(10,7,16,0.55) 70%, rgba(8,5,13,0.8) 100%), url(${selected.bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Petals from this bouquet's own piece file(s) */}
        <PetalSnowfall assets={selected.petals} />

        <button
          type="button"
          onClick={() => setSelected(null)}
          className="absolute left-4 top-4 z-30 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-4 py-2.5 text-[11px] uppercase tracking-[0.3em] text-white/90 backdrop-blur transition hover:bg-black/60"
        >
          <ChevronLeft className="h-4 w-4" />
          Bouquets
        </button>

        <div className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center gap-8 px-5 py-16 lg:flex-row lg:gap-14">
          {/* Centered flower */}
          <div className="relative w-full max-w-xs shrink-0 sm:max-w-sm lg:max-w-md">
            <div className="absolute inset-0 -z-10 rounded-full bg-white/10 blur-3xl" />
            <img
              src={selected.image}
              alt={selected.flower}
              className="w-full rounded-3xl object-contain shadow-[0_40px_120px_rgba(0,0,0,0.55)] ring-1 ring-white/15"
            />
          </div>

          {/* Meaning / resonates overlay */}
          <div className="w-full max-w-xl">
            <p className="font-hand text-2xl text-amber-100/90">{selected.owner}</p>
            <h1 className="mt-1 font-display text-3xl text-white sm:text-4xl">
              {selected.flower}
            </h1>

            <div className="mt-6 rounded-[2rem] border border-white/15 bg-black/35 p-6 backdrop-blur-md sm:p-7">
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-amber-200/80">
                Meaning
              </h2>
              <p className="mt-3 text-base leading-8 text-white/90 sm:text-lg">
                {selected.meaning}
              </p>

              <div className="my-6 h-px bg-white/10" />

              <h2 className="text-[10px] uppercase tracking-[0.4em] text-amber-200/80">
                Why It Resonates
              </h2>
              <p className="mt-3 text-base leading-8 text-white/80 sm:text-lg">
                {selected.resonates}
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#2a1a14] via-[#1a0f0d] to-[#120a09]">
      {/* Soft warm background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(255,180,120,0.22), transparent 46%), radial-gradient(ellipse at 50% 110%, rgba(255,150,110,0.14), transparent 55%)',
        }}
      />

      {/* Drifting petals across the grid */}
      <PetalSnowfall
        assets={[petalDandelion, petalLavender, petalMorningGlory]}
        petals={36}
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-4 py-12 sm:px-6">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/35 px-4 py-2.5 text-[11px] uppercase tracking-[0.3em] text-white/80 backdrop-blur transition hover:bg-black/55"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <header className="text-center">
          <h1 className="font-hand text-3xl leading-snug text-amber-50 drop-shadow sm:text-4xl">
            which bouquet of flowers do you want to see first my love?
          </h1>
          <p className="mt-4 text-xs uppercase tracking-[0.35em] text-amber-200/60 sm:text-sm">
            tap a bouquet to unfold its meaning
          </p>
        </header>

        <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {bouquets.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setSelected(b)}
              className="group relative overflow-hidden rounded-[1.6rem] bg-white text-left shadow-[0_16px_40px_rgba(0,0,0,0.35)] ring-1 ring-white/30 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-amber-100">
                <img
                  src={b.image}
                  alt={`${b.owner} — ${b.flower}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between gap-2 px-4 py-3.5 sm:px-5 sm:py-4">
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                    {b.owner}
                  </p>
                  <p className="truncate font-display text-base text-neutral-900 sm:text-lg">
                    {b.flower}
                  </p>
                </div>
                <ChevronLeft className="h-5 w-5 shrink-0 rotate-180 text-neutral-400 transition group-hover:text-neutral-700" />
              </div>
            </button>
          ))}
        </div>

        <footer className="mt-10 text-center">
          <p className="font-hand text-xl text-amber-100/70">
            every bloom holds a piece of us
          </p>
        </footer>
      </div>
    </section>
  )
}