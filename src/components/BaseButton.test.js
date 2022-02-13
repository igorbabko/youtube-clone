import { render } from '@testing-library/vue'
import BaseButton from './BaseButton.vue'

test('renders base button', () => {
  const { debug } = render(BaseButton)

  debug()
})
