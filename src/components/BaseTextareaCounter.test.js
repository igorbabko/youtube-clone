import { render } from '@testing-library/vue'
import BaseTextareaCounter from './BaseTextareaCounter.vue'

it('renders correctly', () => {
  const options = {
    slots: {
      default: '0 / 100'
    }
  }

  const { html } = render(BaseTextareaCounter, options)

  expect(html()).toMatchInlineSnapshot(`"<div class=\\"absolute bottom-2 right-2 text-xs text-gray-600 peer-focus:text-black\\">0 / 100</div>"`)
})
