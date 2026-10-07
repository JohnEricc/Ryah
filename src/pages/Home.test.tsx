import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import App from '@/App'
import { useEntryFlowStore } from '@/store/useEntryFlowStore'

describe('Entry flow', () => {
  beforeEach(() => {
    window.localStorage.clear()
    useEntryFlowStore.getState().reset()
  })

  it('shows the intro screen first', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /hi baby i made this for you sana magustuhan mo i love you so much/i,
      }),
    ).toBeInTheDocument()
    expect(screen.queryByRole('heading', { level: 1, name: /enter passcode/i })).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { level: 1, name: /what do you want to see first/i })).not.toBeInTheDocument()
  })

  it('moves from the intro screen to the passcode screen', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /tap or swipe up/i }))

    expect(screen.getByRole('heading', { level: 1, name: /enter passcode/i })).toBeInTheDocument()
  })

  it('unlocks the site when the anniversary passcode is entered', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /tap or swipe up/i }))
    fireEvent.click(screen.getByRole('button', { name: /enter 0/i }))
    fireEvent.click(screen.getByRole('button', { name: /enter 2/i }))
    fireEvent.click(screen.getByRole('button', { name: /enter 0/i }))
    fireEvent.click(screen.getByRole('button', { name: /enter 9/i }))

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /what do you want to see first/i,
      }),
    ).toBeInTheDocument()
  })

  it('shows an error for the wrong passcode', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /tap or swipe up/i }))
    fireEvent.click(screen.getByRole('button', { name: /enter 1/i }))
    fireEvent.click(screen.getByRole('button', { name: /enter 2/i }))
    fireEvent.click(screen.getByRole('button', { name: /enter 3/i }))
    fireEvent.click(screen.getByRole('button', { name: /enter 4/i }))

    expect(screen.getByText(/that code is not our date/i)).toBeInTheDocument()
  })
})
