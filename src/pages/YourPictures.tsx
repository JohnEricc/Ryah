import { ArrowLeft, Grid3X3, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DandelionFluff } from '../components/DandelionFluff'
import InfiniteCarousel from '../components/InfiniteCarousel'
import type { CarouselPhoto } from '../components/InfiniteCarousel'

const yourPictures: CarouselPhoto[] = [
  { id: 'your-a', src: '/images/Your%20Pictures/a.webp', alt: 'You — Look 01' },
  { id: 'your-b', src: '/images/Your%20Pictures/b.webp', alt: 'You — Look 02' },
  { id: 'your-c', src: '/images/Your%20Pictures/c.webp', alt: 'You — Look 03' },
  { id: 'your-d', src: '/images/Your%20Pictures/d.webp', alt: 'You — Look 04' },
  { id: 'your-e', src: '/images/Your%20Pictures/e.webp', alt: 'You — Look 05' },
  { id: 'your-f', src: '/images/Your%20Pictures/f.webp', alt: 'You — Look 06' },
  { id: 'your-g', src: '/images/Your%20Pictures/g.webp', alt: 'You — Look 07' },
  { id: 'your-h', src: '/images/Your%20Pictures/h.webp', alt: 'You — Look 08' },
  { id: 'your-i', src: '/images/Your%20Pictures/i.webp', alt: 'You — Look 09' },
  { id: 'your-j', src: '/images/Your%20Pictures/j.webp', alt: 'You — Look 10' },
  { id: 'your-k', src: '/images/Your%20Pictures/k.webp', alt: 'You — Look 11' },
  { id: 'your-l', src: '/images/Your%20Pictures/l.webp', alt: 'You — Look 12' },
  { id: 'your-m', src: '/images/Your%20Pictures/m.webp', alt: 'You — Look 13' },
  { id: 'your-n', src: '/images/Your%20Pictures/n.webp', alt: 'You — Look 14' },
  { id: 'your-o', src: '/images/Your%20Pictures/o.webp', alt: 'You — Look 15' },
  { id: 'your-p', src: '/images/Your%20Pictures/p.webp', alt: 'You — Look 16' },
  { id: 'your-q', src: '/images/Your%20Pictures/q.webp', alt: 'You — Look 17' },
  { id: 'your-r', src: '/images/Your%20Pictures/r.webp', alt: 'You — Look 18' },
  { id: 'your-1', src: '/images/Your%20Pictures/61c96cace00e7562686008cf266148da.webp', alt: 'You — Look 19' },
  { id: 'your-2', src: '/images/Your%20Pictures/att.GhN8HI3xJp1hKuXH1VyufJm8_3uPKwDidG9UGTTsKkw.webp', alt: 'You — Look 20' },
  { id: 'your-3', src: '/images/Your%20Pictures/att.IhqbsNRGLkTKk4xDjCXvJvyBRxk9jh7EmU34W7J0mF0.webp', alt: 'You — Look 21' },
  { id: 'your-4', src: '/images/Your%20Pictures/att.LHI4UTmVcUCtOfdMJ4frxR6CxLm_H_rq1uE8Giw4VhQ.webp', alt: 'You — Look 22' },
  { id: 'your-5', src: '/images/Your%20Pictures/att.bYFaANAs81m7UrwVH-Z2WLFNm-BN8kDUuDum8C0U0Hw.webp', alt: 'You — Look 23' },
  { id: 'your-6', src: '/images/Your%20Pictures/c7714bc6-9462-4177-92e7-06b0c442bb92.webp', alt: 'You — Look 24' },
]

type LightboxState =
  | { open: true; index: number; mode: 'grid' | 'carousel' }
  | { open: false; index?: undefined; mode?: undefined }

const ACCENT = 325

export default function YourPictures() {
  const navigate = useNavigate()
  const [lightbox, setLightbox] = useState<LightboxState>({ open: false })
  const accentDot = `hsl(${ACCENT} 70% 55%)`
  const totalPhotos = yourPictures.length

  const openCloseUp = useCallback((normalizedIndex: number) => {
    setLightbox({ open: true, index: normalizedIndex, mode: 'carousel' })
  }, [])

  useEffect(() => {
    if (!lightbox.open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setLightbox({ open: false })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox.open])

  return (
    <section className="relative min-h-screen">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#c5e4f7]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0.15) 100%), url("/ghibli_meadow.webp")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      />
      <DandelionFluff count={22} />
      <div className="relative mx-auto w-full max-w-3xl px-4 pb-14 pt-6 sm:px-6 sm:pt-8">
        <div className="flex items-start justify-between gap-4">
          <button
            type="button"
            onClick={() => navigate('/home')}
            aria-label="Back to home"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/85 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-800 shadow-sm backdrop-blur-md transition hover:bg-white"
            style={{ ['--tw-ring-color' as string]: accentDot }}
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2.4} />
            Back
          </button>
          <button
            type="button"
            onClick={() => setLightbox({ open: true, index: 0, mode: 'grid' })}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/85 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-800 shadow-sm backdrop-blur-md transition hover:bg-white"
            style={{ ['--tw-ring-color' as string]: accentDot }}
          >
            <Grid3X3 className="h-4 w-4" />
            See All
          </button>
        </div>

        <div className="mt-6 text-center sm:mt-10">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.42em]"
            style={{ color: accentDot }}
          >
            Gallery · You
          </p>
          <h1 className="mt-3 font-display text-3xl tracking-tight text-neutral-900 drop-shadow-xs sm:text-4xl md:text-5xl">
            Your Pictures
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-neutral-700/85 sm:text-base">
            All the shots of you I keep coming back to — the smile, the stare, every little version of you that I fell in love with. Swipe, drag, or tap any photo to look closer.
          </p>
        </div>

        <div className="mt-2 sm:mt-6">
          <InfiniteCarousel
            photos={yourPictures}
            accentHue={ACCENT}
            onOpenPhoto={openCloseUp}
          />
        </div>
      </div>

      {lightbox.open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={
            lightbox.mode === 'grid'
              ? 'Your Pictures — all photos'
              : `${yourPictures[lightbox.index]?.alt ?? 'Photo'} — close-up view`
          }
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
          onClick={() => {
            if (lightbox.mode !== 'grid') setLightbox({ open: false })
          }}
        >
          <div
            className="absolute right-4 top-4 z-10 flex items-center gap-2 sm:right-6 sm:top-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => {
                if (lightbox.mode === 'grid') {
                  setLightbox({ open: true, index: lightbox.index, mode: 'carousel' })
                } else {
                  setLightbox({ open: true, index: lightbox.index, mode: 'grid' })
                }
              }}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-white/10 px-4 text-xs font-semibold uppercase tracking-[0.26em] text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
            >
              <Grid3X3 className="h-4 w-4" />
              {lightbox.mode === 'grid' ? 'Close-up' : 'See All'}
            </button>
            <button
              type="button"
              onClick={() => setLightbox({ open: false })}
              aria-label="Close"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
            >
              <X className="h-5 w-5" strokeWidth={2.3} />
            </button>
          </div>

          {lightbox.mode === 'grid' ? (
            <div
              onClick={(e) => e.stopPropagation()}
              className="grid h-full max-h-full w-full max-w-6xl auto-rows-[10rem] grid-cols-2 gap-3 overflow-y-auto pb-20 pt-20 sm:auto-rows-[14rem] sm:grid-cols-3 sm:gap-4 md:grid-cols-4"
            >
              {yourPictures.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setLightbox({ open: true, index: i, mode: 'carousel' })}
                  aria-label={`Open ${p.alt}`}
                  className={`group relative overflow-hidden rounded-2xl bg-black/40 shadow-[0_12px_30px_rgba(0,0,0,0.25)] ring-2 transition ${
                    i === lightbox.index ? 'ring-white' : 'ring-white/10'
                  }`}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="pointer-events-none absolute bottom-2 left-2 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur">
                    {String(i + 1).padStart(2, '0')} · {totalPhotos}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div
              className="relative flex h-full w-full max-w-5xl items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <figure className="relative max-h-[86vh] w-full">
                <img
                  src={yourPictures[lightbox.index]?.src ?? yourPictures[0].src}
                  alt={yourPictures[lightbox.index]?.alt ?? ''}
                  className="mx-auto max-h-[86vh] w-auto max-w-full rounded-3xl object-contain shadow-[0_40px_120px_rgba(0,0,0,0.55)] ring-1 ring-white/15"
                />
                <figcaption className="mt-4 text-center text-[11px] uppercase tracking-[0.32em] text-white/60 sm:text-xs">
                  {String(lightbox.index + 1).padStart(2, '0')} /{' '}
                  {String(totalPhotos).padStart(2, '0')} ·{' '}
                  {yourPictures[lightbox.index]?.alt}
                </figcaption>
              </figure>
            </div>
          )}
        </div>
      ) : null}
    </section>
  )
}
