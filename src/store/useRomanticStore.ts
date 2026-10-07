import { create } from 'zustand'

type RomanticStore = {
  activeSection: string
  setActiveSection: (section: string) => void
}

export const useRomanticStore = create<RomanticStore>((set) => ({
  activeSection: 'home',
  setActiveSection: (section) => set({ activeSection: section }),
}))
