import { create } from 'zustand'

export type EntryStep = 'intro' | 'passcode' | 'splash' | 'site'

type EntryFlowStore = {
  entryStep: EntryStep
  isUnlocked: boolean
  goTo: (step: EntryStep) => void
  unlock: () => void
  reset: () => void
}

export const useEntryFlowStore = create<EntryFlowStore>((set) => ({
  entryStep: 'intro',
  isUnlocked: false,
  goTo: (step) => set({ entryStep: step }),
  unlock: () => set({ isUnlocked: true, entryStep: 'site' }),
  reset: () => set({ isUnlocked: false, entryStep: 'intro' }),
}))
