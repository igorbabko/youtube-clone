import { render, screen } from '@testing-library/vue'
import BaseButton from './BaseButton.vue'

it('renders with label', () => {
  const options = {
    slots: {
      default: 'Test Button'
    }
  }

  render(BaseButton, options)

  screen.getByText(/Test Button/i)
})
