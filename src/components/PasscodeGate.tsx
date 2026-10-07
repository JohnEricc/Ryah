import { Delete, Heart, LockKeyhole } from 'lucide-react'
import { useCallback, useEffect, useMemo, useState } from 'react'

import openingBg from '../../Opening BG.webp'

import { ManaMotes } from './ManaMotes'

const PASSCODE = '0209'
const PASSCODE_LENGTH = PASSCODE.length

type PasscodeGateProps = {
  recipientName: string
  onUnlock: () => void
}

const keypad = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

export function PasscodeGate({ recipientName, onUnlock }: PasscodeGateProps) {
  const [digits, setDigits] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const pushDigit = useCallback(
    (value: string) => {
      setDigits((current) => {
        if (current.length >= PASSCODE_LENGTH) {
          return current
        }

        return `${current}${value}`
      })

      if (errorMessage) {
        setErrorMessage('')
      }
    },
    [errorMessage],
  )

  const removeDigit = useCallback(() => {
    setDigits((current) => current.slice(0, -1))
  }, [])

  const resetDigits = useCallback(() => {
    setDigits('')
    setErrorMessage('')
  }, [])

  const dots = useMemo(
    () =>
      Array.from({ length: PASSCODE_LENGTH }, (_, index) => ({
        filled: index < digits.length,
        key: `dot-${index}`,
      })),
    [digits.length],
  )

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (/^\d$/.test(event.key)) {
        pushDigit(event.key)
      }

      if (event.key === 'Backspace') {
        removeDigit()
      }

      if (event.key === 'Escape') {
        resetDigits()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [pushDigit, removeDigit, resetDigits])

  useEffect(() => {
    if (digits.length !== PASSCODE_LENGTH) {
      return
    }

    if (digits === PASSCODE) {
      setErrorMessage('')
      onUnlock()
      return
    }

    setErrorMessage('That code is not our date. Try 02/09.')
    const timeoutId = window.setTimeout(() => {
      setDigits('')
    }, 350)

    return () => window.clearTimeout(timeoutId)
  }, [digits, onUnlock])

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-6 sm:py-10">
      {/* Full-bleed Frieren background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(8, 14, 28, 0.4) 0%, rgba(8, 14, 28, 0.05) 50%, rgba(4, 7, 14, 0.55) 100%), url(${openingBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      />

      {/* Floating mana motes across the entire screen */}
      <ManaMotes count={22} />

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center pb-28 pt-10 text-center sm:pb-32 sm:pt-14">
        <div className="flex w-full items-center justify-between px-4 text-sm text-white/75">
          <span className="text-sky-100/75">1:32</span>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <LockKeyhole className="h-4 w-4 text-sky-200/80" />
            <span className="text-xs uppercase tracking-[0.35em] text-sky-100/85">
              Private
            </span>
            <Heart className="h-4 w-4 text-sky-200/80" />
          </div>
          <span className="rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-sky-100/70 backdrop-blur-md">
            1
          </span>
        </div>

        <div className="mt-10 flex flex-col items-center sm:mt-14">
          <p className="text-[11px] uppercase tracking-[0.4em] text-sky-200/75 sm:text-sm">
            For {recipientName}
          </p>
          <h1 className="mt-4 max-w-[14rem] text-3xl font-serif font-normal leading-[1.02] text-slate-50 sm:mt-6 sm:max-w-xs sm:text-5xl">
            Enter Passcode
          </h1>
          <p className="mt-3 max-w-[13rem] text-xs leading-6 text-blue-100/85 sm:max-w-xs sm:text-sm">
            One last step, baby.
          </p>

          <div className="mt-7 flex gap-3 sm:mt-10 sm:gap-4" aria-label="Passcode dots">
            {dots.map((dot) => (
              <span
                key={dot.key}
                className={[
                  'h-3.5 w-3.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition duration-300 sm:h-4 sm:w-4',
                  dot.filled
                    ? 'bg-sky-200/90 shadow-[0_0_20px_rgba(180,220,255,0.55)]'
                    : '',
                ].join(' ')}
              />
            ))}
          </div>
          <p className="mt-3 text-xs text-sky-200/80 sm:mt-4 sm:text-sm">
            Hint: The date of our anniversary
          </p>

          <p
            aria-live="polite"
            className={`mt-4 min-h-5 text-xs sm:mt-5 sm:min-h-6 sm:text-sm ${errorMessage ? 'text-sky-200' : 'text-white/0'}`}
          >
            {errorMessage || ' '}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4 sm:mt-12 sm:gap-6">
          {keypad.slice(0, 9).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => pushDigit(value)}
              aria-label={`Enter ${value}`}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg text-slate-100 backdrop-blur-md transition hover:bg-white/20 active:scale-95 sm:h-16 sm:w-16 sm:text-xl"
            >
              {value}
            </button>
          ))}

          <button
            type="button"
            onClick={resetDigits}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-transparent bg-transparent text-xs text-blue-100/85 transition duration-300 hover:text-slate-50 sm:h-16 sm:w-16 sm:text-sm"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => pushDigit('0')}
            aria-label="Enter 0"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg text-slate-100 backdrop-blur-md transition hover:bg-white/20 active:scale-95 sm:h-16 sm:w-16 sm:text-xl"
          >
            0
          </button>
          <button
            type="button"
            onClick={removeDigit}
            aria-label="Delete digit"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-slate-100 backdrop-blur-md transition hover:bg-white/20 active:scale-95 sm:h-16 sm:w-16"
          >
            <Delete className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}