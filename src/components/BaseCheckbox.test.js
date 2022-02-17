import { render, screen } from '@testing-library/vue'
import BaseCheckbox from './BaseCheckbox.vue'

test('renders checked base checkbox with label', () => {
  const label = 'Test Label'
  render(BaseCheckbox, {
    props: {
      id: 'checkbox',
      value: 1,
      modelValue: [1, 2, 3]
    },
    slots: {
      default: label
    }
  })

  const checkbox = screen.getByLabelText(label)

  expect(checkbox.checked).toBe(true)
})
