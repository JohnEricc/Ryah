import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

import Flowers from './Flowers'

const renderFlowers = () =>
  render(
    <MemoryRouter>
      <Flowers />
    </MemoryRouter>,
  )

describe('Flowers', () => {
  it('shows all four bouquet cards in the selection grid', () => {
    renderFlowers()

    expect(
      screen.getByRole('button', { name: /John Eric — The Dandelion/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Ryah — Wild Lavender/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Caelum — Heavenly Blue Morning Glory/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Our Family — The Wildflower Bouquet/i }),
    ).toBeInTheDocument()
  })

  it('opens a full-screen detail view with meaning and resonates when a card is clicked', () => {
    renderFlowers()

    fireEvent.click(
      screen.getByRole('button', { name: /Heavenly Blue Morning Glory/i }),
    )

    expect(
      screen.getByRole('heading', { name: /Heavenly Blue Morning Glory/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Meaning/i)).toBeInTheDocument()
    expect(screen.getByText(/Why It Resonates/i)).toBeInTheDocument()
    expect(
      screen.getByText(
        /opening wide with the morning light, the morning glory carries none of the shadows or burdens of yesterday/i,
      ),
    ).toBeInTheDocument()
  })

  it('returns to the grid when the Bouquets back button is clicked', () => {
    renderFlowers()

    fireEvent.click(screen.getByRole('button', { name: /Wild Lavender/i }))
    expect(
      screen.getByRole('heading', { name: /Wild Lavender/i }),
    ).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /Bouquets/i }))

    expect(screen.queryByRole('heading', { name: /Wild Lavender/i })).not.toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Ryah — Wild Lavender/i }),
    ).toBeInTheDocument()
  })

  it('closes the detail view when Escape is pressed', () => {
    renderFlowers()

    fireEvent.click(screen.getByRole('button', { name: /The Dandelion/i }))
    expect(screen.getByRole('heading', { name: /The Dandelion/i })).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Escape' })

    expect(screen.queryByRole('heading', { name: /The Dandelion/i })).not.toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /John Eric — The Dandelion/i }),
    ).toBeInTheDocument()
  })
})