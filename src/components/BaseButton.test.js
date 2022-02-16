import { render, screen } from '@testing-library/vue'
import BaseButton from './BaseButton.vue'

test('renders base button', () => {
  // given (arrange)
  const options = {
    slots: {
      default: 'Test Button'
    }
  }

  // when (act)
  render(BaseButton, options)

  // then (assert)
  screen.getByText(/Test Button/i)
})
