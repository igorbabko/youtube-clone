import { render } from '@testing-library/vue'
import ButtonLogin from './ButtonLogin.vue'

it('renders correctly', () => {
  const { html } = render(ButtonLogin)

  expect(html()).toMatchSnapshot()
})
