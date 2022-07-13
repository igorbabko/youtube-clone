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

function assertTooltipHidden() {
  expect(screen.getByText(text)).not.toBeVisible()
}

function assertTooltipShown() {
  expect(screen.getByText(text)).toBeVisible()
}

describe('rendering', () => {
  it('renders hidden with specified text', () => {
    renderTooltip(text)

    assertTooltipHidden()
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

    assertTooltipShown()
  })
})

beforeEach(() => console.log('beforeEach'))
afterEach(() => console.log('afterEach'))

describe('hiding', () => {
  beforeEach(async () => {
    console.log('hiding - beforeEach')

    renderTooltip(text, button)

    await hoverOverOwningElement()

    assertTooltipShown()
  })

  afterEach(() => {
    console.log('hiding - afterEach')
  })

  it('hides after moving cursor away from owning element', async () => {
    console.log('hiding - test 1')

    await moveCursorAwayFromOwningElement()

    assertTooltipHidden()
  })

  it('hides after clicking owning element', async () => {
    console.log('hiding - test 2')

    await clickOwningElement()

    assertTooltipHidden()
  })
})
