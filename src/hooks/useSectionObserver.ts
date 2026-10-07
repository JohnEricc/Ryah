import { useEffect } from 'react'

import { useRomanticStore } from '../store/useRomanticStore'

export function useSectionObserver(sectionIds: string[]) {
  const setActiveSection = useRomanticStore((state) => state.setActiveSection)

  useEffect(() => {
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sections.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0]

        if (visibleEntry?.target instanceof HTMLElement) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-35% 0px -35% 0px',
        threshold: [0.2, 0.45, 0.65],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      observer.disconnect()
    }
  }, [sectionIds, setActiveSection])
}
