import { render } from '@testing-library/vue'
import BaseModalOverlay from './BaseModalOverlay.vue'

it('renders correctly', () => {
  const { html } = render(BaseModalOverlay)

  expect(html()).toMatchSnapshot()
})
