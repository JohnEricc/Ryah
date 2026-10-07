import { ArrowLeft } from 'lucide-react'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

import { DandelionFluff } from './DandelionFluff'

type SiteShellProps = {
  title: string
  children: ReactNode
}

export function SiteShell({ title, children }: SiteShellProps) {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen text-[#2d2420]">
      {/* Full-bleed warm keepsake backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#fdf6ee]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255,250,245,0.75) 0%, rgba(255,245,235,0.45) 50%, rgba(255,250,245,0.85) 100%), url("/Letters I Made For You BG.webp")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Floating ambient dandelion fluff behind the content */}
      <DandelionFluff count={16} />

      <header className="sticky top-0 z-10 border-b border-black/5 bg-white/60 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-4 py-4 sm:px-6">
          <button
            type="button"
            onClick={() => navigate('/home')}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.25em] backdrop-blur-md transition hover:bg-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
          <h1 className="font-display text-2xl tracking-tight text-[#2d2420] sm:text-3xl">
            {title}
          </h1>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">{children}</main>
    </div>
  )
}