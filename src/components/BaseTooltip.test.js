import { render, screen, fireEvent } from '@testing-library/vue'
import BaseTooltip from './BaseTooltip.vue'

const text = 'Tooltip text'
const buttonLabel = 'Click Me'
const button = `<button>${buttonLabel}</button>`

function renderTooltip(text, element = '') {
  const options = {
    props: {
      text
    },
    slots: {
      default: element
    }
  }

  return render(BaseTooltip, options)
}

function hoverOverOwningElement() {
  return fireEvent.mouseEnter(getOwningElement())
}

function moveCursorAwayFromOwningElement() {
  return fireEvent.mouseLeave(getOwningElement())
}

function clickOwningElement() {
  return fireEvent.click(getOwningElement())
}

function getOwningElement() {
  return screen.getByText(buttonLabel).parentElement
}

describe('rendering', () => {
  it('renders hidden with specified text', () => {
    renderTooltip(text)

    expect(screen.getByText(text)).not.toBeVisible()
  })

  it('renders with owning element', () => {
    renderTooltip('', button)

    expect(screen.getByText(buttonLabel)).toBeVisible()
  })
})

describe('showing', () => {
  it('shows after hovering over owning element', async () => {
    renderTooltip(text, button)

    await hoverOverOwningElement()

    expect(screen.getByText(text)).toBeVisible()
  })
})

describe('hiding', () => {
  it('hides after moving cursor away from owning element', async () => {
    renderTooltip(text, button)

    await hoverOverOwningElement()

    expect(screen.getByText(text)).toBeVisible()

    await moveCursorAwayFromOwningElement()

    expect(screen.getByText(text)).not.toBeVisible()
  })

  it('hides after clicking owning element', async () => {
    renderTooltip(text, button)

    await hoverOverOwningElement()

    expect(screen.getByText(text)).toBeVisible()

    await clickOwningElement()

    expect(screen.getByText(text)).not.toBeVisible()
  })
})
