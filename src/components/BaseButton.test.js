import { render } from '@testing-library/vue'
import BaseButton from './BaseButton.vue'

test('renders button label', () => {
  const { getByText } = render(BaseButton, {
    slots: {
      default: 'niko'
    }
  })

  getByText('niko')
})
