import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export type CarouselPhoto = { id: string; src: string; alt: string }

export type InfiniteCarouselProps = {
  photos: CarouselPhoto[]
  onOpenPhoto?: (normalizedIndex: number) => void
  accentHue?: number
  autoplayMs?: number | null
  rounded?: boolean
  aspectRatio?: string
  innerClassName?: string
}

export default function InfiniteCarousel({
  photos,
  onOpenPhoto,
  accentHue = 225,
  autoplayMs = null,
  rounded = true,
  aspectRatio = '4 / 5',
  innerClassName = '',
}: InfiniteCarouselProps) {
  const totalPhotos = photos.length
  const startOffset = totalPhotos
  const [offset, setOffset] = useState(totalPhotos)
  const [isDragging, setIsDragging] = useState(false)
  const [dragX, setDragX] = useState(0)
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false)
  const [skipTransition, setSkipTransition] = useState(false)
  const dragStartXRef = useRef<number | null>(null)
  const stageWidthRef = useRef<number>(1)
  const stageRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const accentDot = `hsl(${accentHue} 65% 48%)`
  const accentRing = `hsl(${accentHue} 65% 58%)`

  const realIndex = ((offset % totalPhotos) + totalPhotos) % totalPhotos

  const displayPhotos = useMemo(
    () => (totalPhotos <= 1 ? photos : [...photos, ...photos, ...photos]),
    [photos, totalPhotos],
  )

  const goPrev = useCallback(() => {
    setOffset((o) => o - 1)
  }, [])
  const goNext = useCallback(() => {
    setOffset((o) => o + 1)
  }, [])

  useEffect(() => {
    if (!stageRef.current) return
    stageWidthRef.current = stageRef.current.getBoundingClientRect().width || 1
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        stageWidthRef.current = entry.contentRect.width || 1
      }
    })
    ro.observe(stageRef.current)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    if (!autoplayMs || isAutoplayPaused || isDragging || totalPhotos <= 1) return
    const id = window.setInterval(() => {
      goNext()
    }, autoplayMs)
    return () => window.clearInterval(id)
  }, [autoplayMs, isAutoplayPaused, isDragging, totalPhotos, goNext])

  useEffect(() => {
    if (skipTransition || totalPhotos <= 1) return
    if (offset < startOffset) {
      setSkipTransition(true)
      window.requestAnimationFrame(() => {
        setOffset((o) => o + totalPhotos)
        window.requestAnimationFrame(() => setSkipTransition(false))
      })
    } else if (offset >= startOffset + totalPhotos) {
      setSkipTransition(true)
      window.requestAnimationFrame(() => {
        setOffset((o) => o - totalPhotos)
        window.requestAnimationFrame(() => setSkipTransition(false))
      })
    }
  }, [offset, skipTransition, startOffset, totalPhotos])

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (totalPhotos <= 1) return
    ;(e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId)
    dragStartXRef.current = e.clientX
    setIsDragging(true)
    setDragX(0)
  }
  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (dragStartXRef.current === null) return
    setDragX(e.clientX - dragStartXRef.current)
  }
  function handlePointerUp(e: React.PointerEvent<HTMLDivElement>) {
    ;(e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId)
    const width = stageWidthRef.current
    const step = dragX / width
    dragStartXRef.current = null
    setIsDragging(false)
    if (step > 0.18) {
      setDragX(0)
      goPrev()
      return
    }
    if (step < -0.18) {
      setDragX(0)
      goNext()
      return
    }
    if (Math.abs(step) < 0.02 && onOpenPhoto) {
      onOpenPhoto(realIndex)
    }
    setDragX(0)
  }

  return (
    <div className={`relative w-full ${innerClassName}`}>
      <div
        ref={stageRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onMouseEnter={() => setIsAutoplayPaused(true)}
        onMouseLeave={() => setIsAutoplayPaused(false)}
        onTouchStart={() => setIsAutoplayPaused(true)}
        onTouchEnd={() => setIsAutoplayPaused(false)}
        role="group"
        aria-roledescription="carousel"
        aria-label="Swipe left or right to browse photos. Tap a photo to open it close-up."
        className={`relative w-full overflow-hidden touch-pan-y select-none ${
          rounded ? 'rounded-[1.75rem] sm:rounded-[2.25rem]' : ''
        } bg-transparent shadow-none h-[500px] sm:h-[560px] md:h-[620px]`}
      >
        <div
          ref={trackRef}
          className="absolute inset-0 flex h-full w-full"
          style={{
            width: `${displayPhotos.length * 100}%`,
            transform: `translateX(calc(${-100 * (offset / displayPhotos.length)}% + ${dragX}px))`,
            transition:
              skipTransition || isDragging
                ? 'none'
                : 'transform 550ms cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        >
          {displayPhotos.map((p, i) => {
            const normalizedIndex = i % Math.max(totalPhotos, 1)
            return (
              <div
                key={`${p.id}-${i}`}
                className="h-full shrink-0"
                style={{ width: `${100 / displayPhotos.length}%` }}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    if (Math.abs(dragX) > 6) {
                      e.preventDefault()
                      return
                    }
                    if (onOpenPhoto) onOpenPhoto(normalizedIndex)
                  }}
                  aria-label={onOpenPhoto ? `Open ${p.alt} close up` : p.alt}
                  className="h-full w-full cursor-zoom-in focus:outline-none focus-visible:ring-4"
                  style={{
                    ['--tw-ring-color' as string]: accentRing,
                  }}
                >
                  <div className="relative mx-auto flex h-full w-full items-center justify-center p-2 select-none">
                    {/* Card container: prominent scale on both mobile and desktop */}
                    <div className="relative aspect-[4/5] w-[88%] max-w-[380px] transition-all sm:max-w-[440px] md:max-w-[480px]">
                      {/* Photo Cutout: expanded to fill the newly opened window with a 0.8% bleed behind the floral frame */}
                      <div className="absolute left-[25.2%] top-[25.5%] z-0 h-[41.8%] w-[49.6%] overflow-hidden rounded-xs bg-neutral-200">
                        <img
                          src={p.src}
                          alt={p.alt}
                          draggable={false}
                          loading={Math.abs(i - offset) <= 1 ? 'eager' : 'lazy'}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      {/* Polaroid Frame Overlay */}
                      <img
                        src="/ghibli_polaroid.webp"
                        alt=""
                        draggable={false}
                        className="pointer-events-none absolute inset-0 z-10 h-full w-full object-fill drop-shadow-[0_20px_45px_rgba(0,0,0,0.22)]"
                      />
                    </div>
                  </div>
                </button>
              </div>
            )
          })}
        </div>

        {totalPhotos > 1 ? (
          <>
            <div className="pointer-events-none absolute inset-x-0 bottom-3 z-20 flex items-center justify-center gap-1.5">
              {photos.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  aria-label={`Go to photo ${i + 1}: ${p.alt}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    const currentReal = realIndex
                    const diff = (i - currentReal + totalPhotos) % totalPhotos
                    const shortest = diff > totalPhotos / 2 ? diff - totalPhotos : diff
                    setOffset((o) => o + shortest)
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === realIndex ? 'w-[22px] bg-neutral-800' : 'w-2 bg-neutral-500/40'
                  }`}
                />
              ))}
            </div>

            <div className="pointer-events-none absolute top-3 right-3 z-20 inline-flex items-center rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
              {String(realIndex + 1).padStart(2, '0')} /{' '}
              {String(totalPhotos).padStart(2, '0')}
            </div>
          </>
        ) : null}
      </div>
      <p className="mt-4 text-center font-mono text-xs font-semibold uppercase tracking-[0.24em] text-neutral-800 sm:text-sm">
        {String(realIndex + 1).padStart(2, '0')} / {String(totalPhotos).padStart(2, '0')} ·{' '}
        {photos[realIndex]?.alt}
      </p>
    </div>
  )
}
