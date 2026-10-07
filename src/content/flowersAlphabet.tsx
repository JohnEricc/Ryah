import type { CSSProperties, ReactNode } from 'react'

export type FlowerSvgShape =
  | 'rose'
  | 'daisy'
  | 'tulip'
  | 'sunflower'
  | 'lavender'
  | 'lily'
  | 'hyacinth'
  | 'peony'
  | 'violet'
  | 'wisteria'
  | 'star'
  | 'bell'
  | 'pom'
  | 'orchid'
  | 'irregular'

export type FlowerPalette = {
  petals: string
  petalEdge: string
  center: string
  centerRing: string
  accent: string
}

export type FlowerLetter = {
  letter: string
  flower: string
  meaning: string
  petalColor: string
  shape: FlowerSvgShape
  palette: FlowerPalette
}

export type FlowerSvgProps = {
  letter: FlowerLetter
  size?: number
  style?: CSSProperties
  bloomProgress?: number
  ariaLabel?: string
}

export type StemmedFlower = FlowerLetter & { stemAngleDeg: number; stemHeight: number; depth: number }

const PAL: Record<string, FlowerPalette> = {
  rose: {
    petals: '#f5b3ba',
    petalEdge: '#c95a65',
    center: '#b84957',
    centerRing: '#a23a47',
    accent: '#ffe4e7',
  },
  sky: {
    petals: '#c6e3fb',
    petalEdge: '#7fb4e6',
    center: '#4c7fb5',
    centerRing: '#3a6794',
    accent: '#eaf4fd',
  },
  pink: {
    petals: '#f8c6d6',
    petalEdge: '#d87798',
    center: '#a24466',
    centerRing: '#7a2f4a',
    accent: '#ffe3ec',
  },
  amber: {
    petals: '#fde9b9',
    petalEdge: '#e6b45c',
    center: '#8f5a1b',
    centerRing: '#6b3f0e',
    accent: '#fff4d6',
  },
  stone: {
    petals: '#f3f1ee',
    petalEdge: '#cfc7bd',
    center: '#7c6a54',
    centerRing: '#5a4a38',
    accent: '#ffffff',
  },
  butter: {
    petals: '#fff1a8',
    petalEdge: '#eac750',
    center: '#945c0b',
    centerRing: '#6f4200',
    accent: '#fffbd3',
  },
  violet: {
    petals: '#e2d3fb',
    petalEdge: '#a485d6',
    center: '#604397',
    centerRing: '#462f77',
    accent: '#f3eaff',
  },
  indigo: {
    petals: '#d9dcfb',
    petalEdge: '#8b8fde',
    center: '#4247a0',
    centerRing: '#2c3179',
    accent: '#eeeffd',
  },
  mint: {
    petals: '#d6f2d9',
    petalEdge: '#7ec686',
    center: '#2a6b36',
    centerRing: '#174c21',
    accent: '#edf9ef',
  },
  deepRose: {
    petals: '#f4b8b4',
    petalEdge: '#c06660',
    center: '#7f2e28',
    centerRing: '#5d1a16',
    accent: '#ffe1df',
  },
  purple: {
    petals: '#ead7f7',
    petalEdge: '#b692d9',
    center: '#6f4598',
    centerRing: '#4e2b72',
    accent: '#f6ebff',
  },
  fuchsia: {
    petals: '#f6d9eb',
    petalEdge: '#ce89b4',
    center: '#8b3c6c',
    centerRing: '#64234c',
    accent: '#ffe9f3',
  },
  lemon: {
    petals: '#fff4bd',
    petalEdge: '#ecc852',
    center: '#8b5b12',
    centerRing: '#663f00',
    accent: '#fff8d6',
  },
  blush: {
    petals: '#ffd9d9',
    petalEdge: '#e79c9c',
    center: '#9c4848',
    centerRing: '#762929',
    accent: '#ffecec',
  },
  coral: {
    petals: '#ffcdbc',
    petalEdge: '#e88870',
    center: '#984228',
    centerRing: '#6e2b16',
    accent: '#ffe7dd',
  },
  slate: {
    petals: '#eef0f3',
    petalEdge: '#c3c7cf',
    center: '#5d6778',
    centerRing: '#424a58',
    accent: '#ffffff',
  },
  orange: {
    petals: '#ffdcb3',
    petalEdge: '#e8a155',
    center: '#8c5112',
    centerRing: '#653700',
    accent: '#fff0d6',
  },
  lime: {
    petals: '#e4f5c6',
    petalEdge: '#a9c973',
    center: '#506a1e',
    centerRing: '#35470e',
    accent: '#f2fae0',
  },
}

function palette(bg: string): FlowerPalette {
  switch (bg) {
    case 'bg-rose-200':
      return PAL.rose
    case 'bg-sky-200':
      return PAL.sky
    case 'bg-pink-200':
      return PAL.pink
    case 'bg-amber-100':
      return PAL.amber
    case 'bg-stone-100':
      return PAL.stone
    case 'bg-yellow-200':
      return PAL.butter
    case 'bg-neutral-100':
      return PAL.stone
    case 'bg-violet-200':
      return PAL.violet
    case 'bg-indigo-200':
      return PAL.indigo
    case 'bg-emerald-100':
      return PAL.mint
    case 'bg-rose-300':
      return PAL.deepRose
    case 'bg-purple-200':
      return PAL.purple
    case 'bg-fuchsia-100':
      return PAL.fuchsia
    case 'bg-yellow-100':
      return PAL.lemon
    case 'bg-pink-100':
      return PAL.blush
    case 'bg-rose-100':
      return PAL.rose
    case 'bg-slate-100':
      return PAL.slate
    case 'bg-red-200':
      return PAL.deepRose
    case 'bg-amber-200':
      return PAL.amber
    case 'bg-orange-200':
      return PAL.coral
    case 'bg-orange-100':
      return PAL.orange
    case 'bg-violet-300':
      return PAL.violet
    case 'bg-indigo-100':
      return PAL.indigo
    case 'bg-stone-200':
      return PAL.slate
    case 'bg-lime-100':
      return PAL.lime
    case 'bg-pink-300':
      return PAL.pink
    default:
      return PAL.rose
  }
}

function shapeFor(flowerName: string): FlowerSvgShape {
  const f = flowerName.toLowerCase()
  if (f.includes('rose')) return 'rose'
  if (f.includes('bluebell') || f.includes('bell')) return 'bell'
  if (f.includes('camellia') || f.includes('peony')) return 'peony'
  if (f.includes('daisy')) return 'daisy'
  if (f.includes('edelweiss') || f.includes('lace') || f.includes('yarrow')) return 'star'
  if (f.includes('freesia') || f.includes('hyacinth') || f.includes('wisteria')) return 'hyacinth'
  if (f.includes('gardenia') || f.includes('jasmine') || f.includes('narcissus')) return 'lily'
  if (f.includes('iris') || f.includes('orchid')) return 'orchid'
  if (f.includes('king protea')) return 'irregular'
  if (f.includes('lavender')) return 'lavender'
  if (f.includes('magnolia') || f.includes('violet')) return 'violet'
  if (f.includes('sunflower')) return 'sunflower'
  if (f.includes('tulip')) return 'tulip'
  if (f.includes('xeranthemum') || f.includes('zinnia') || f.includes('ursi')) return 'pom'
  return 'rose'
}

export const flowersAlphabet: Record<string, FlowerLetter> = {
  A: { letter: 'A', flower: 'Azalea', meaning: 'gentle love', petalColor: 'bg-rose-200', shape: 'peony', palette: PAL.rose },
  B: { letter: 'B', flower: 'Bluebell', meaning: 'loyal heart', petalColor: 'bg-sky-200', shape: 'bell', palette: PAL.sky },
  C: { letter: 'C', flower: 'Camellia', meaning: 'adoration', petalColor: 'bg-pink-200', shape: 'peony', palette: PAL.pink },
  D: { letter: 'D', flower: 'Daisy', meaning: 'pure joy', petalColor: 'bg-amber-100', shape: 'daisy', palette: PAL.amber },
  E: { letter: 'E', flower: 'Edelweiss', meaning: 'devotion', petalColor: 'bg-stone-100', shape: 'star', palette: PAL.stone },
  F: { letter: 'F', flower: 'Freesia', meaning: 'thoughtfulness', petalColor: 'bg-yellow-200', shape: 'hyacinth', palette: PAL.butter },
  G: { letter: 'G', flower: 'Gardenia', meaning: 'sweet grace', petalColor: 'bg-neutral-100', shape: 'lily', palette: PAL.stone },
  H: { letter: 'H', flower: 'Hyacinth', meaning: 'sincere affection', petalColor: 'bg-violet-200', shape: 'hyacinth', palette: PAL.violet },
  I: { letter: 'I', flower: 'Iris', meaning: 'hope', petalColor: 'bg-indigo-200', shape: 'orchid', palette: PAL.indigo },
  J: { letter: 'J', flower: 'Jasmine', meaning: 'warm tenderness', petalColor: 'bg-emerald-100', shape: 'lily', palette: PAL.mint },
  K: { letter: 'K', flower: 'King Protea', meaning: 'brave beauty', petalColor: 'bg-rose-300', shape: 'irregular', palette: PAL.deepRose },
  L: { letter: 'L', flower: 'Lavender', meaning: 'calm comfort', petalColor: 'bg-purple-200', shape: 'lavender', palette: PAL.purple },
  M: { letter: 'M', flower: 'Magnolia', meaning: 'noble love', petalColor: 'bg-fuchsia-100', shape: 'violet', palette: PAL.fuchsia },
  N: { letter: 'N', flower: 'Narcissus', meaning: 'new beginnings', petalColor: 'bg-yellow-100', shape: 'lily', palette: PAL.lemon },
  O: { letter: 'O', flower: 'Orchid', meaning: 'rare beauty', petalColor: 'bg-pink-100', shape: 'orchid', palette: PAL.blush },
  P: { letter: 'P', flower: 'Peony', meaning: 'romance', petalColor: 'bg-rose-100', shape: 'peony', palette: PAL.rose },
  Q: { letter: 'Q', flower: 'Queen Anne’s Lace', meaning: 'delicate wonder', petalColor: 'bg-slate-100', shape: 'star', palette: PAL.slate },
  R: { letter: 'R', flower: 'Rose', meaning: 'deep love', petalColor: 'bg-red-200', shape: 'rose', palette: PAL.deepRose },
  S: { letter: 'S', flower: 'Sunflower', meaning: 'bright loyalty', petalColor: 'bg-amber-200', shape: 'sunflower', palette: PAL.amber },
  T: { letter: 'T', flower: 'Tulip', meaning: 'perfect love', petalColor: 'bg-orange-200', shape: 'tulip', palette: PAL.coral },
  U: { letter: 'U', flower: 'Uva Ursi Bloom', meaning: 'quiet strength', petalColor: 'bg-orange-100', shape: 'pom', palette: PAL.orange },
  V: { letter: 'V', flower: 'Violet', meaning: 'faithfulness', petalColor: 'bg-violet-300', shape: 'violet', palette: PAL.violet },
  W: { letter: 'W', flower: 'Wisteria', meaning: 'lasting bond', petalColor: 'bg-indigo-100', shape: 'wisteria', palette: PAL.indigo },
  X: { letter: 'X', flower: 'Xeranthemum', meaning: 'forever remembered', petalColor: 'bg-stone-200', shape: 'pom', palette: PAL.slate },
  Y: { letter: 'Y', flower: 'Yarrow', meaning: 'healing care', petalColor: 'bg-lime-100', shape: 'star', palette: PAL.lime },
  Z: { letter: 'Z', flower: 'Zinnia', meaning: 'enduring affection', petalColor: 'bg-pink-300', shape: 'pom', palette: PAL.pink },
}

for (const key of Object.keys(flowersAlphabet)) {
  const item = flowersAlphabet[key]
  if (!item.palette) item.palette = palette(item.petalColor)
  if (!item.shape) item.shape = shapeFor(item.flower)
}

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace('#', '')
  const bigint = parseInt(
    h.length === 3
      ? h.split('').map((c) => c + c).join('')
      : h,
    16,
  )
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

function PetalSvg({ letter, size, bloomProgress = 1 }: { letter: FlowerLetter; size: number; bloomProgress?: number }) {
  const { palette: pal, shape } = letter
  const progress = Math.max(0.15, Math.min(1, bloomProgress))
  const scale = 0.25 + progress * 0.75
  const petalOpacity = 0.55 + progress * 0.45

  const sharedStopInner = (
    <>
      <stop offset="0%" stopColor={pal.accent} />
      <stop offset="55%" stopColor={pal.petals} />
      <stop offset="100%" stopColor={pal.petalEdge} />
    </>
  )

  function radialPetal({ r = 1, count = 8, angleOffset = 0, inner = 14, outer = 44, width = 22 }: { r?: number; count?: number; angleOffset?: number; inner?: number; outer?: number; width?: number }) {
    return Array.from({ length: count }).map((_, i) => {
      const angle = (360 / count) * i + angleOffset
      return (
        <ellipse
          key={i}
          cx={50}
          cy={50 - inner}
          rx={width / 2}
          ry={outer - inner}
          fill={`url(#petalGrad-${letter.letter}-${r})`}
          opacity={petalOpacity}
          transform={`rotate(${angle} 50 50) scale(${scale})`}
          style={{ transformOrigin: '50% 50%', transformBox: 'fill-box' as const }}
        />
      )
    })
  }

  switch (shape) {
    case 'rose':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden>
          <defs>
            <radialGradient id={`petalGrad-${letter.letter}-1`} cx="40%" cy="30%" r="70%">
              {sharedStopInner}
            </radialGradient>
          </defs>
          <g opacity={0.95}>
            {radialPetal({ r: 1, count: 10, outer: 48, inner: 16, width: 24 })}
          </g>
          <g transform={`scale(${0.8}) translate(12.5 12.5)`}>
            {radialPetal({ r: 1, count: 8, angleOffset: 22, outer: 42, inner: 20, width: 22 })}
          </g>
          <g transform={`scale(${0.6}) translate(33 33)`}>
            {radialPetal({ r: 1, count: 6, angleOffset: 55, outer: 36, inner: 24, width: 20 })}
          </g>
          <circle cx="50" cy="50" r="13" fill={pal.center} />
          <circle cx="50" cy="50" r="7" fill={pal.centerRing} opacity="0.55" />
        </svg>
      )
    case 'peony':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden>
          <defs>
            <radialGradient id={`petalGrad-${letter.letter}-1`} cx="40%" cy="30%" r="75%">
              {sharedStopInner}
            </radialGradient>
          </defs>
          <g>{radialPetal({ r: 1, count: 12, outer: 50, inner: 12, width: 26 })}</g>
          <g transform={`scale(${0.78}) translate(14 14)`}>
            {radialPetal({ r: 1, count: 10, angleOffset: 18, outer: 44, inner: 18, width: 24 })}
          </g>
          <circle cx="50" cy="50" r="9" fill={pal.accent} />
          <circle cx="50" cy="50" r="5" fill={pal.center} />
        </svg>
      )
    case 'daisy':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden>
          <defs>
            <radialGradient id={`petalGrad-${letter.letter}-1`} cx="50%" cy="45%" r="65%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="65%" stopColor={pal.petals} />
              <stop offset="100%" stopColor={pal.petalEdge} />
            </radialGradient>
          </defs>
          <g>{radialPetal({ r: 1, count: 14, outer: 52, inner: 10, width: 16 })}</g>
          <circle cx="50" cy="50" r="20" fill={pal.center} />
          <circle cx="50" cy="50" r="13" fill={pal.centerRing} />
        </svg>
      )
    case 'sunflower':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden>
          <defs>
            <radialGradient id={`petalGrad-${letter.letter}-1`} cx="45%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#fff1b6" />
              <stop offset="55%" stopColor="#f8c448" />
              <stop offset="100%" stopColor={pal.petalEdge} />
            </radialGradient>
          </defs>
          <g>{radialPetal({ r: 1, count: 18, outer: 52, inner: 8, width: 16 })}</g>
          <g transform={`scale(${0.88}) translate(6.8 6.8)`}>
            {radialPetal({ r: 1, count: 14, angleOffset: 12, outer: 46, inner: 14, width: 14 })}
          </g>
          <circle cx="50" cy="50" r="22" fill={pal.center} />
          <circle cx="50" cy="50" r="15" fill={pal.centerRing} />
          <g fill={pal.accent} opacity="0.85">
            {Array.from({ length: 12 }).map((_, i) => (
              <circle
                key={i}
                cx={50 + Math.cos((Math.PI * 2 * i) / 12) * 11}
                cy={50 + Math.sin((Math.PI * 2 * i) / 12) * 11}
                r="1.6"
              />
            ))}
          </g>
        </svg>
      )
    case 'tulip':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden>
          <defs>
            <radialGradient id={`petalGrad-${letter.letter}-1`} cx="50%" cy="40%" r="65%">
              {sharedStopInner}
            </radialGradient>
          </defs>
          <g transform={`scale(${scale})`} style={{ transformOrigin: '50% 55%', transformBox: 'fill-box' as const }}>
            <path
              d="M50 12 C32 26, 22 42, 28 64 C34 76, 50 82, 50 82 C50 82, 66 76, 72 64 C78 42, 68 26, 50 12 Z"
              fill={`url(#petalGrad-${letter.letter}-1)`}
              opacity={petalOpacity}
            />
            <path
              d="M50 18 C40 32, 32 46, 36 66"
              fill="none"
              stroke={pal.petalEdge}
              strokeWidth="1.4"
              opacity="0.65"
            />
            <path
              d="M50 18 C60 32, 68 46, 64 66"
              fill="none"
              stroke={pal.petalEdge}
              strokeWidth="1.4"
              opacity="0.65"
            />
          </g>
          <ellipse cx="50" cy="40" rx="7" ry="10" fill={pal.center} opacity="0.7" />
        </svg>
      )
    case 'bell':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden>
          <defs>
            <linearGradient id={`petalGrad-${letter.letter}-1`} x1="0%" y1="0%" x2="0%" y2="100%">
              {sharedStopInner}
            </linearGradient>
          </defs>
          <g transform={`scale(${scale})`} style={{ transformOrigin: '50% 50%', transformBox: 'fill-box' as const }}>
            <path
              d="M30 18 C30 10, 70 10, 70 18 L66 62 C66 74, 58 82, 50 82 C42 82, 34 74, 34 62 Z"
              fill={`url(#petalGrad-${letter.letter}-1)`}
              opacity={petalOpacity}
              stroke={pal.petalEdge}
              strokeWidth="1.2"
            />
            <path d="M34 64 Q50 74, 66 64" fill="none" stroke={pal.petalEdge} strokeWidth="1.6" opacity="0.7" />
          </g>
          <circle cx="50" cy="50" r="4" fill={pal.center} />
        </svg>
      )
    case 'star':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden>
          <defs>
            <radialGradient id={`petalGrad-${letter.letter}-1`} cx="50%" cy="50%" r="65%">
              {sharedStopInner}
            </radialGradient>
          </defs>
          <g transform={`scale(${scale})`} style={{ transformOrigin: '50% 50%', transformBox: 'fill-box' as const }}>
            <polygon
              points="50,14 59,38 84,38 64,54 71,78 50,64 29,78 36,54 16,38 41,38"
              fill={`url(#petalGrad-${letter.letter}-1)`}
              stroke={pal.petalEdge}
              strokeWidth="1.4"
              opacity={petalOpacity}
            />
          </g>
          <circle cx="50" cy="50" r="9" fill={pal.center} />
        </svg>
      )
    case 'lavender':
    case 'hyacinth':
    case 'wisteria': {
      const budColor = pal.petals
      const budEdge = pal.petalEdge
      const rows = shape === 'wisteria' ? 8 : shape === 'hyacinth' ? 7 : 6
      const budsPerRow = shape === 'wisteria' ? 5 : 4
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden>
          <g transform={`scale(${scale})`} style={{ transformOrigin: '50% 55%', transformBox: 'fill-box' as const }}>
            <path d="M50 82 C50 82, 50 34, 50 18" stroke={pal.centerRing} strokeWidth="2" fill="none" opacity="0.55" />
            {Array.from({ length: rows }).flatMap((_, row) =>
              Array.from({ length: budsPerRow }).map((__, col) => {
                const cy = 18 + row * 9
                const cx = 50 + (col - (budsPerRow - 1) / 2) * (12 - row * 0.6)
                const r = 6.5 - row * 0.35
                return (
                  <g key={`${row}-${col}`} opacity={petalOpacity}>
                    <ellipse cx={cx} cy={cy} rx={r * 0.8} ry={r} fill={budColor} stroke={budEdge} strokeWidth="0.8" />
                    <ellipse cx={cx - r * 0.4} cy={cy - r * 0.4} rx={r * 0.35} ry={r * 0.5} fill={pal.accent} opacity="0.65" />
                  </g>
                )
              }),
            )}
          </g>
        </svg>
      )
    }
    case 'lily':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden>
          <defs>
            <radialGradient id={`petalGrad-${letter.letter}-1`} cx="50%" cy="45%" r="70%">
              {sharedStopInner}
            </radialGradient>
          </defs>
          <g transform={`scale(${scale})`} style={{ transformOrigin: '50% 50%', transformBox: 'fill-box' as const }}>
            {Array.from({ length: 6 }).map((_, i) => {
              const angle = (360 / 6) * i
              return (
                <path
                  key={i}
                  d="M50 50 C50 40, 52 24, 50 14 C48 24, 50 40, 50 50 Z"
                  fill={`url(#petalGrad-${letter.letter}-1)`}
                  stroke={pal.petalEdge}
                  strokeWidth="1.2"
                  opacity={petalOpacity}
                  transform={`rotate(${angle} 50 50)`}
                />
              )
            })}
          </g>
          <circle cx="50" cy="50" r="6" fill={pal.center} />
          <g stroke={pal.centerRing} strokeWidth="1.4" strokeLinecap="round">
            {Array.from({ length: 6 }).map((_, i) => {
              const a = (Math.PI * 2 * i) / 6
              return (
                <line
                  key={i}
                  x1={50 + Math.cos(a) * 6}
                  y1={50 + Math.sin(a) * 6}
                  x2={50 + Math.cos(a) * 16}
                  y2={50 + Math.sin(a) * 16}
                />
              )
            })}
          </g>
        </svg>
      )
    case 'orchid':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden>
          <defs>
            <radialGradient id={`petalGrad-${letter.letter}-1`} cx="50%" cy="45%" r="70%">
              {sharedStopInner}
            </radialGradient>
          </defs>
          <g transform={`scale(${scale})`} style={{ transformOrigin: '50% 55%', transformBox: 'fill-box' as const }}>
            <ellipse cx="28" cy="40" rx="14" ry="22" fill={`url(#petalGrad-${letter.letter}-1)`} stroke={pal.petalEdge} strokeWidth="1.2" opacity={petalOpacity} transform="rotate(-18 28 40)" />
            <ellipse cx="72" cy="40" rx="14" ry="22" fill={`url(#petalGrad-${letter.letter}-1)`} stroke={pal.petalEdge} strokeWidth="1.2" opacity={petalOpacity} transform="rotate(18 72 40)" />
            <ellipse cx="50" cy="30" rx="14" ry="18" fill={`url(#petalGrad-${letter.letter}-1)`} stroke={pal.petalEdge} strokeWidth="1.2" opacity={petalOpacity} />
            <path
              d="M50 52 C36 54, 30 76, 50 84 C70 76, 64 54, 50 52 Z"
              fill={pal.petalEdge}
              opacity={0.9 * petalOpacity}
            />
            <ellipse cx="50" cy="48" rx="7" ry="9" fill={pal.center} />
            <path d="M50 52 L48 62 M50 52 L52 62" stroke={pal.centerRing} strokeWidth="1.4" strokeLinecap="round" />
          </g>
        </svg>
      )
    case 'violet':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden>
          <defs>
            <radialGradient id={`petalGrad-${letter.letter}-1`} cx="50%" cy="50%" r="70%">
              {sharedStopInner}
            </radialGradient>
          </defs>
          <g transform={`scale(${scale})`} style={{ transformOrigin: '50% 50%', transformBox: 'fill-box' as const }}>
            <circle cx="50" cy="32" r="16" fill={`url(#petalGrad-${letter.letter}-1)`} stroke={pal.petalEdge} strokeWidth="1.2" opacity={petalOpacity} />
            <circle cx="30" cy="50" r="16" fill={`url(#petalGrad-${letter.letter}-1)`} stroke={pal.petalEdge} strokeWidth="1.2" opacity={petalOpacity} />
            <circle cx="70" cy="50" r="16" fill={`url(#petalGrad-${letter.letter}-1)`} stroke={pal.petalEdge} strokeWidth="1.2" opacity={petalOpacity} />
            <circle cx="38" cy="72" r="16" fill={`url(#petalGrad-${letter.letter}-1)`} stroke={pal.petalEdge} strokeWidth="1.2" opacity={petalOpacity} />
            <circle cx="62" cy="72" r="16" fill={`url(#petalGrad-${letter.letter}-1)`} stroke={pal.petalEdge} strokeWidth="1.2" opacity={petalOpacity} />
          </g>
          <circle cx="50" cy="52" r="7" fill={pal.center} />
          <circle cx="50" cy="52" r="4" fill={pal.centerRing} />
        </svg>
      )
    case 'pom':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden>
          <defs>
            <radialGradient id={`petalGrad-${letter.letter}-1`} cx="40%" cy="35%" r="70%">
              {sharedStopInner}
            </radialGradient>
          </defs>
          <g opacity={petalOpacity}>
            {Array.from({ length: 24 }).map((_, i) => {
              const a = (Math.PI * 2 * i) / 24
              const r1 = 14
              const r2 = 22 + (i % 3) * 4
              const cx1 = 50 + Math.cos(a) * r1
              const cy1 = 50 + Math.sin(a) * r1
              const cx2 = 50 + Math.cos(a) * r2
              const cy2 = 50 + Math.sin(a) * r2
              return (
                <circle key={i} cx={(cx1 + cx2) / 2} cy={(cy1 + cy2) / 2} r="9" fill={`url(#petalGrad-${letter.letter}-1)`} stroke={pal.petalEdge} strokeWidth="0.8" opacity={0.7 * petalOpacity} />
              )
            })}
            {Array.from({ length: 14 }).map((_, i) => {
              const a = (Math.PI * 2 * i) / 14
              return <circle key={i} cx={50 + Math.cos(a) * 14} cy={50 + Math.sin(a) * 14} r="8" fill={pal.petals} stroke={pal.petalEdge} strokeWidth="0.8" />
            })}
          </g>
          <circle cx="50" cy="50" r="11" fill={pal.center} />
          <circle cx="50" cy="50" r="6" fill={pal.centerRing} />
        </svg>
      )
    case 'irregular':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden>
          <defs>
            <radialGradient id={`petalGrad-${letter.letter}-1`} cx="50%" cy="40%" r="75%">
              {sharedStopInner}
            </radialGradient>
          </defs>
          <g transform={`scale(${scale})`} style={{ transformOrigin: '50% 55%', transformBox: 'fill-box' as const }}>
            {Array.from({ length: 14 }).map((_, i) => {
              const a = (Math.PI * 2 * i) / 14
              const len = 36 + ((i * 7) % 18)
              const wide = 10 + ((i * 3) % 6)
              return (
                <ellipse
                  key={i}
                  cx={50 + Math.cos(a) * (len * 0.55)}
                  cy={50 + Math.sin(a) * (len * 0.55)}
                  rx={wide}
                  ry={len * 0.45}
                  fill={`url(#petalGrad-${letter.letter}-1)`}
                  stroke={pal.petalEdge}
                  strokeWidth="1.1"
                  opacity={petalOpacity}
                  transform={`rotate(${(a * 180) / Math.PI + 90} ${50 + Math.cos(a) * (len * 0.55)} ${50 + Math.sin(a) * (len * 0.55)})`}
                />
              )
            })}
            <g stroke={pal.centerRing} strokeWidth="0.8" fill={pal.accent} opacity="0.9">
              {Array.from({ length: 18 }).map((_, i) => (
                <circle
                  key={i}
                  cx={50 + Math.cos((Math.PI * 2 * i) / 18) * 15}
                  cy={50 + Math.sin((Math.PI * 2 * i) / 18) * 15}
                  r="1.4"
                />
              ))}
            </g>
          </g>
          <circle cx="50" cy="50" r="15" fill={pal.center} />
        </svg>
      )
  }
}

export function FlowerSvg({ letter, size = 80, style, bloomProgress = 1, ariaLabel }: FlowerSvgProps): ReactNode {
  const shadow = `drop-shadow(0 4px 10px ${hexToRgba(letter.palette.centerRing, 0.22)})`
  return (
    <div
      role="img"
      aria-label={ariaLabel ?? `${letter.letter} — ${letter.flower} (${letter.meaning})`}
      className="select-none"
      style={{ filter: shadow, ...style }}
    >
      <PetalSvg letter={letter} size={size} bloomProgress={bloomProgress} />
    </div>
  )
}

export function getFlowerLetters(name: string) {
  return name
    .toUpperCase()
    .replace(/[^A-Z]/g, '')
    .split('')
    .map((letter) => flowersAlphabet[letter])
    .filter((flower): flower is FlowerLetter => Boolean(flower))
}

export function buildFlowerMeaning(name: string) {
  const flowerLetters = getFlowerLetters(name)

  if (!flowerLetters.length) {
    return null
  }

  const flowersList = flowerLetters.map((item) => item.flower).join(', ')
  const qualities = Array.from(new Set(flowerLetters.map((item) => item.meaning)))
  const qualityText =
    qualities.length === 1
      ? qualities[0]
      : `${qualities.slice(0, -1).join(', ')}, and ${qualities[qualities.length - 1]}`

  return `${name.trim()} blooms like ${flowersList} — a name full of ${qualityText}.`
}

export type BouquetFlowerLayout = {
  item: FlowerLetter
  headX: number
  headY: number
  stemAngleDeg: number
  stemLength: number
  flowerSize: number
  rotateHeadDeg: number
  depth: number
  stemColor: string
}

const STEM_GREEN = '#2f7d42'
const STEM_GREEN_DARK = '#1f5a2e'

export function buildBouquetLayout(letters: FlowerLetter[]): BouquetFlowerLayout[] {
  const count = letters.length
  if (count === 0) return []

  const basePoint = { x: 50, y: 82 }
  const maxAngleLeft = -58
  const maxAngleRight = 58
  const minStem = 22
  const maxStem = count <= 3 ? 38 : count <= 6 ? 36 : count <= 10 ? 34 : 32
  const baseFlowerSize = count <= 3 ? 86 : count <= 6 ? 72 : count <= 10 ? 60 : 52

  return letters.map((item, i) => {
    const t = count === 1 ? 0.5 : i / (count - 1)
    const arcT = t
    const stemAngleDeg = maxAngleLeft + (maxAngleRight - maxAngleLeft) * arcT
    const bulge = Math.sin(Math.PI * arcT)
    const stemLength = minStem + (maxStem - minStem) * (0.2 + 0.8 * bulge)
    const headRadians = ((90 - stemAngleDeg) * Math.PI) / 180
    const headX = basePoint.x + Math.cos(headRadians) * stemLength
    const headY = basePoint.y - Math.sin(headRadians) * stemLength - 10 - bulge * 12
    const rotateHeadDeg = stemAngleDeg * 0.55
    const flowerSize = Math.round(baseFlowerSize * (0.75 + 0.45 * bulge))
    const depth = Math.round(bulge * 100) + (i % 2 === 0 ? 2 : 0)
    const stemColor = (i % 3 === 0 ? STEM_GREEN_DARK : STEM_GREEN)

    return {
      item,
      headX,
      headY,
      stemAngleDeg,
      stemLength,
      flowerSize,
      rotateHeadDeg,
      depth,
      stemColor,
    }
  })
}

export const BOUQUET_BASE_POINT = { x: 50, y: 82 }
export { STEM_GREEN, STEM_GREEN_DARK }
