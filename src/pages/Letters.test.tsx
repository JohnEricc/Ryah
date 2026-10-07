import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

import Letters from '@/pages/Letters'
import { useEntryFlowStore } from '@/store/useEntryFlowStore'

function renderLetters() {
  return render(
    <MemoryRouter>
      <Letters />
    </MemoryRouter>,
  )
}

describe('Letters', () => {
  beforeEach(() => {
    window.localStorage.clear()
    useEntryFlowStore.getState().reset()
  })

  it('shows 7 monthsary letters and renders the November letter with centered title/footer and justified body', () => {
    renderLetters()

    expect(screen.getAllByRole('article').length).toBe(7)
    expect(screen.getByText(/november 9, 2025/i)).toBeInTheDocument()
    expect(screen.getByText(/august 9, 2026/i)).toBeInTheDocument()

    fireEvent.click(
      screen.getByRole('button', { name: /open letter: november 9, 2025/i }),
    )

    const reader = screen.getByLabelText(/letter reader/i)
    const title = Array.from(reader.querySelectorAll('p')).find(
      (element) => element.textContent === 'November 9, 2025',
    )
    const footer = screen.getByText(
      /happy monthsary babe and as always i love you so much!/i,
    )

    expect(title).toBeInTheDocument()
    expect(title).toHaveClass('text-center')
    expect(title).toHaveClass('underline')
    expect(footer).toHaveClass('text-center')
    expect(footer).toHaveClass('underline')

    const bodyParagraph = screen.getByText(
      /here i am again, lost in thought, asking myself/i,
    )
    expect(bodyParagraph.parentElement).toHaveClass('text-justify')

    expect(
      screen.getByText(/i love you endlessly, babe\. you are my only one, my forever\./i),
    ).toBeInTheDocument()
  })

  it('filters letters by tone and returns 7 when switching back to All', () => {
    renderLetters()

    fireEvent.click(screen.getByRole('tab', { name: /soft/i }))
    const softTitles = screen
      .getAllByRole('article')
      .map((item) => item.querySelector('h3')?.textContent ?? '')

    expect(softTitles).toContain('June 9, 2026')
    expect(softTitles).not.toContain('July 9, 2026')

    fireEvent.click(screen.getByRole('tab', { name: /all/i }))
    expect(screen.getAllByRole('article').length).toBe(7)
  })

  it('opens the July letter and keeps the happy monthsary footer centered/underlined', () => {
    renderLetters()

    fireEvent.click(screen.getByRole('button', { name: /open letter: july 9, 2026/i }))

    const footer = screen.getByText(/happy monthsary baby!/i)
    expect(footer).toHaveClass('text-center')
    expect(footer).toHaveClass('underline')

    expect(
      screen.getByText(/i will never stop praying for your heart to find peace/i),
    ).toBeInTheDocument()
  })
})
