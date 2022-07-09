import { render, screen } from '@testing-library/vue'
import BaseTooltip from './BaseTooltip.vue'

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

it('renders hidden with specified text', () => {
  const text = 'Tooltip text'

  renderTooltip(text)

  expect(screen.getByText(text)).not.toBeVisible()
})

it('renders with target element', () => {
  const buttonLabel = 'Click Me'
  const button = `<button>${buttonLabel}</button>`

  renderTooltip('', button)

  expect(screen.getByText(buttonLabel)).toBeVisible()
})
