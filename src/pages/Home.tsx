import { useNavigate } from 'react-router-dom'

import openingBg from '../../Opening BG.webp'
import { ManaMotes } from '../components/ManaMotes'

const flowersBg = '/Flowers%20BG.webp'
const lettersBg = '/ghibli_library_bg.webp'
const myWhysBg = '/My%20Whys%20BG.webp'
const ourPicturesBg = '/Our%20Pictures%20BG.webp'
const yourPicturesBg = '/Your%20Pictures%20BG.webp'

type HomeTileProps = {
  label: string
  image: string
  to: string
  className: string
  aspectClassName: string
  priority?: boolean
}

function HomeTile({ label, image, to, className, aspectClassName, priority }: HomeTileProps) {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      onClick={() => navigate(to)}
      className={[
        'group relative touch-manipulation overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/25 transition-all duration-300 hover:scale-[1.03] hover:ring-white/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]',
        className,
      ].join(' ')}
    >
      <div className={['relative w-full', aspectClassName].join(' ')}>
        <img
          src={image}
          alt={label}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          ref={(node) => {
            if (node) {
              node.setAttribute('fetchpriority', priority ? 'high' : 'auto')
            }
          }}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-x-0 bottom-6 flex justify-center px-4">
          <span className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-2 text-xs uppercase tracking-[0.35em] text-slate-50 shadow-lg sm:backdrop-blur-md">
            {label}
          </span>
        </div>
      </div>
    </button>
  )
}

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden px-4 py-12">
      {/* Full-bleed Frieren twilight background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(8, 14, 28, 0.55) 0%, rgba(8, 14, 28, 0.25) 50%, rgba(4, 7, 14, 0.7) 100%), url(${openingBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      />

      {/* Floating mana motes drifting across the whole screen */}
      <ManaMotes count={24} />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <header className="text-center">
          <h1 className="text-center font-serif text-3xl text-slate-50 drop-shadow-md sm:text-4xl md:text-5xl">
            What do you want to see first?
          </h1>
          <p className="mt-3 text-center text-xs uppercase tracking-[0.35em] text-sky-200/75 sm:text-sm">
            TAKE YOUR TIME BABY
          </p>
        </header>

        <section className="mt-10 grid gap-5 md:mt-14 md:grid-cols-6 md:gap-6">
          <HomeTile
            label="OUR PICTURES"
            image={ourPicturesBg}
            to="/our-pictures"
            className="md:col-span-3"
            aspectClassName="aspect-[16/9]"
            priority
          />
          <HomeTile
            label="LETTERS I MADE FOR YOU"
            image={lettersBg}
            to="/letters"
            className="md:col-span-3"
            aspectClassName="aspect-[16/9]"
            priority
          />
          <HomeTile
            label="YOUR PICTURES"
            image={yourPicturesBg}
            to="/your-pictures"
            className="md:col-span-2"
            aspectClassName="aspect-[4/3]"
          />
          <HomeTile
            label="MY WHYS"
            image={myWhysBg}
            to="/my-whys"
            className="md:col-span-2"
            aspectClassName="aspect-[4/3]"
          />
          <HomeTile
            label="FLOWERS"
            image={flowersBg}
            to="/flowers"
            className="md:col-span-2"
            aspectClassName="aspect-[4/3]"
          />
        </section>
      </div>
    </main>
  )
}
