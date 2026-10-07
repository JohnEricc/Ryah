import { ReactNode } from 'react'

import { romanticContent } from '../content/romanticContent'
import { useEntryFlowStore } from '../store/useEntryFlowStore'

import { IntroScreen } from './IntroScreen'
import { PasscodeGate } from './PasscodeGate'
import { PreHomeSplash } from './PreHomeSplash'

type EntryGateProps = {
  children: ReactNode
}

export function EntryFlow({ children }: EntryGateProps) {
  const entryStep = useEntryFlowStore((state) => state.entryStep)
  const isUnlocked = useEntryFlowStore((state) => state.isUnlocked)
  const goTo = useEntryFlowStore((state) => state.goTo)
  const unlock = useEntryFlowStore((state) => state.unlock)

  if (!isUnlocked && entryStep === 'intro') {
    return (
      <div className="relative min-h-screen overflow-hidden bg-[#120914] text-stone-50">
        <IntroScreen
          recipientName={romanticContent.recipientName}
          message="Hi Baby I made this for you sana magustuhan mo I love you so much"
          onContinue={() => goTo('passcode')}
        />
      </div>
    )
  }

  if (!isUnlocked) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-[#120914] text-stone-50">
        <PasscodeGate recipientName={romanticContent.recipientName} onUnlock={unlock} />
      </div>
    )
  }

  if (entryStep === 'splash') {
    return (
      <div className="relative min-h-screen overflow-hidden bg-[#120914] text-stone-50">
        <PreHomeSplash onContinue={() => goTo('site')} />
      </div>
    )
  }

  return <>{children}</>
}

export const EntryGate = EntryFlow
