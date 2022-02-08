import { render } from '@testing-library/vue'
import BaseButton from './BaseButton.vue'

test('renders button label', () => {
  const label = 'Test Label'
  const options = {
    slots: {
      default: label
    }
  }

  const { getByText } = render(BaseButton, options)

  getByText(label)
})
