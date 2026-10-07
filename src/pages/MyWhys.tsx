import { useEffect, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import parchment from '../../Parchment.webp'
import { ManaMotes } from '../components/ManaMotes'
import { romanticContent } from '../content/romanticContent'

const whys = [
  {
    numeral: 'I',
    title: 'On the Choice That Never Falters',
    body: '"Because loving you is the one decision that never falters. Even on days when the weight of life drains our energy and we barely have anything left to give, my heart never hesitates. Out of every single choice I make in a day, leaning into you is the only one that feels as natural and necessary as breathing."',
  },
  {
    numeral: 'II',
    title: 'On the Armor You Can Lay Down',
    body: '"Because beneath all your fierce independence, you carry the tenderest heart I’ve ever known. You push yourself relentlessly to handle everything on your own, rarely giving yourself credit just for making it through. Being in love with you means wanting to build a place soft enough for you to finally take off your armor and simply rest."',
  },
  {
    numeral: 'III',
    title: 'On the Peace Found in Silence',
    body: '"Because with you, silence is never empty. In a season where both of our minds are constantly racing with responsibilities, next steps, and quiet anxieties, your presence silences the static. Just existing in the same room with you, completely still and saying nothing at all, brings more peace to my soul than anything else in this world."',
  },
  {
    numeral: 'IV',
    title: 'On the Faith That Cut Through the Noise',
    body: '"Because you saw someone worth believing in before I could even see it myself. On the days when self-doubt tells me I’m falling behind or coming up short, the quiet faith you hold for me cuts straight through the noise. You’ve given me a grounding confidence that makes me want to rise higher—not out of pressure, but out of pure gratitude."',
  },
  {
    numeral: 'V',
    title: 'On Growing Up Together',
    body: '"Because we didn’t just fall into romance; we grew up together. We have known each other through our most awkward, uncertain, and fragile stages. We’ve stumbled through clumsy mistakes, fought through misunderstandings, and weathered life’s growing pains, but we never let the hard times turn us into strangers. We learned how to fight for each other, not against each other."',
  },
  {
    numeral: 'VI',
    title: 'On the Light of Your Unguarded Joy',
    body: '"Because your unguarded joy shifts my entire mood. The way your face softens when something genuinely makes you smile, and that unscripted laugh you let slip when you forget to second-guess yourself—those fleeting, honest moments are what make getting through all the exhausting weeks worth it."',
  },
  {
    numeral: 'VII',
    title: 'On Weathering the Grind Side by Side',
    body: '"Because you understand the grind without requiring an explanation. Even while we are both buried in our own uphill climbs right now—caught between exams, hours of training, job hunting, and endless uncertainty—you never let the busyness turn into cold distance. A simple, quiet check-in from you carries me through hours of an overwhelming day."',
  },
  {
    numeral: 'VIII',
    title: 'On the Only Home I Want to Return To',
    body: '"Because when the dust settles, you are the only home I want to return to. No matter where our careers lead, what trials test us down the road, or how much the scenery changes around us, you are the person I want beside me to celebrate the wins and soften the losses. A future simply wouldn’t make sense without you in it."',
  },
]

export default function MyWhys() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = whys.length

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowRight' && currentPage < totalPages) {
        setCurrentPage((p) => p + 1)
      } else if (event.key === 'ArrowLeft' && currentPage > 1) {
        setCurrentPage((p) => p - 1)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentPage, totalPages])

  const active = whys[currentPage - 1]
  const isLast = currentPage === totalPages

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3a2014] via-[#1a0e08] to-[#0a0503] text-[#2b1d14]">
      {/* Floating firefly motes */}
      <ManaMotes count={16} />

      {/* Warm radial candlelight glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(255,170,90,0.16), transparent 42%), radial-gradient(ellipse at 50% 120%, rgba(200,130,60,0.16), transparent 55%)',
        }}
      />
      {/* Grain texture */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.6'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-44 pt-8 sm:px-6 sm:pb-36 sm:pt-12">
        {/* Antique backlink */}
        <button
          type="button"
          onClick={() => navigate('/')}
          className="group inline-flex touch-manipulation items-center gap-2 rounded-full border border-[#b89358]/50 bg-[#18110b]/70 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-[#dcc391] backdrop-blur transition duration-300 hover:border-[#b89358] hover:bg-[#241a12]/80 hover:text-[#f0dcb8]"
        >
          <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
          Back
        </button>

        <div className="mx-auto mt-10 w-full max-w-2xl">
          {/* Warm lantern glow behind the parchment — cheap radial gradient (no blur on mobile) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[radial-gradient(circle,_rgba(245,158,11,0.18)_0%,_transparent_70%)] sm:h-[620px] sm:w-[620px] sm:bg-amber-500/15 sm:blur-[100px]"
            style={{ animationDuration: '7s' }}
          />

          {/* Parchment letter — gentle float + candlelit drop shadow */}
          <div className="relative z-10 transform-gpu will-change-transform transition-transform duration-1000 ease-in-out animate-[float_6s_ease-in-out_infinite] drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]">
            <div
              className="relative mx-auto aspect-[420/594] w-full max-w-2xl bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${parchment})` }}
            >
            {/* Signature overlay on the final page, tucked above the bottom edge */}
            {isLast ? (
              <div className="pointer-events-none absolute bottom-[9%] left-0 right-0 flex flex-col items-center px-10 text-center sm:px-14">
                <div key="sig" className="page-fade">
                  <p className="font-display text-2xl italic leading-relaxed text-[#2b1d14] sm:text-[1.6rem]">
                    {romanticContent.signature}
                  </p>
                  <p className="mt-1 font-display text-sm italic text-[#6b4a2a] sm:text-base">
                    — For {romanticContent.recipientName}, always.
                  </p>
                </div>
              </div>
            ) : null}

            {/* Readable text region — safe area clear of burnt edges & curled corner */}
            <div className="pointer-events-none absolute inset-x-[11%] top-[16%] bottom-[13%] flex flex-col items-center justify-center text-center">
              <div key={currentPage} className="page-fade w-full">
                {/* Illuminated roman numeral */}
                <span className="font-display text-3xl font-bold leading-none text-[#9b2c2c] sm:text-4xl">
                  {active.numeral}
                </span>

                {/* Divider */}
                <div aria-hidden className="mx-auto mt-3 flex items-center justify-center gap-2 text-[#b89358]">
                  <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#b89358]/70 sm:w-14" />
                  <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="currentColor">
                    <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z" />
                  </svg>
                  <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#b89358]/70 sm:w-14" />
                </div>

                <h2 className="mt-4 font-display text-2xl italic leading-snug text-[#21160e] sm:text-[1.9rem]">
                  {active.title}
                </h2>

                <p className="mx-auto mt-4 max-w-md font-serif text-sm leading-relaxed text-stone-800 sm:text-base">
                  {active.body}
                </p>
              </div>
            </div>
          </div>
          </div>

          {/* Bottom Navigation Bar */}
          <nav
            aria-label="Parchment Pagination"
            className="fixed inset-x-0 bottom-0 z-30 bg-gradient-to-t from-[#0e0704] via-[#0e0704]/90 to-transparent px-4 pb-6 pt-4 backdrop-blur-[2px]"
          >
            <div className="mx-auto flex max-w-xl flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-4">
              {/* Roman Numeral Step Indicators */}
              <div className="no-scrollbar order-1 flex items-center justify-center gap-1.5 overflow-x-auto py-1 sm:order-2 sm:gap-2">
                {whys.map((item, idx) => {
                  const isActive = currentPage === idx + 1
                  return (
                    <button
                      key={item.numeral}
                      type="button"
                      aria-label={`Go to Why ${item.numeral}`}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={() => setCurrentPage(idx + 1)}
                      className={`flex h-7 w-7 touch-manipulation items-center justify-center rounded-full font-serif text-[11px] transition-all duration-300 sm:h-8 sm:w-8 sm:text-xs ${
                        isActive
                          ? 'scale-110 border border-amber-300 bg-amber-200/90 font-bold text-[#22130c] shadow-[0_0_12px_rgba(251,211,141,0.5)]'
                          : 'border border-amber-900/40 bg-[#1c100a]/60 text-amber-200/50 hover:border-amber-700/60 hover:text-amber-100 active:scale-95'
                      }`}
                    >
                      {item.numeral}
                    </button>
                  )
                })}
              </div>

              {/* Previous & Next Buttons */}
              <div className="order-2 flex w-full items-center justify-between gap-3 sm:order-1 sm:w-auto sm:contents">
                {/* Previous Button */}
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  className="min-h-[42px] touch-manipulation flex-1 rounded-full border border-amber-900/60 bg-[#1e110a]/80 px-5 font-serif text-[11px] uppercase tracking-[0.22em] text-amber-200/80 transition-all hover:bg-[#2e1a10] hover:text-amber-100 active:scale-95 disabled:pointer-events-none disabled:opacity-30 sm:flex-initial sm:text-xs"
                >
                  ← PREVIOUS
                </button>

                {/* Next Button */}
                <button
                  type="button"
                  disabled={isLast}
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  className="order-3 min-h-[42px] flex-1 rounded-full border border-amber-900/60 bg-[#1e110a]/80 px-5 font-serif text-[11px] uppercase tracking-[0.22em] text-amber-200/80 transition-all hover:bg-[#2e1a10] hover:text-amber-100 active:scale-95 disabled:pointer-events-none disabled:opacity-30 sm:flex-initial sm:text-xs"
                >
                  NEXT PAGE →
                </button>
              </div>
            </div>
          </nav>

          <style>{`
            @keyframes pageFadeIn {
              0% { opacity: 0; transform: translateY(6px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .page-fade { animation: pageFadeIn 0.4s ease-out both; }
          `}</style>
        </div>
      </div>
    </div>
  )
}