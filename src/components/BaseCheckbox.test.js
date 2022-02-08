import { render, screen } from '@testing-library/vue'
import BaseCheckbox from './BaseCheckbox.vue'

test('renders checked base checkbox with label', () => {
  const value = 1
  const id = 'checkbox'
  const label = 'Test Label'
  const options = {
    props: {
      id,
      value,
      modelValue: [value, 2, 3]
    },
    slots: {
      default: label
    }
  }

  render(BaseCheckbox, options)

  // const checkbox = screen.getByLabelText(label)

  // expect(checkbox.id).toBe(id)
  expect(screen.getByLabelText(label).checked).toBe(true)
})

test('renders unchecked base checkbox without label', () => {
  // const value = 1
  const options = {
    props: {
      // value,
      modelValue: [2, 3]
    }
  }

  render(BaseCheckbox, options)

  // expect(screen.getByDisplayValue(value).checked).toBe(false)
  expect(screen.getByRole('checkbox').checked).toBe(false)
})
