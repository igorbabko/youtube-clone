import { render, screen } from '@testing-library/vue'
import BaseCheckbox from './BaseCheckbox.vue'

it('renders with label and checked', () => {
  const value = 1
  const label = 'Test Checkbox'
  const options = {
    props: {
      id: 'checkbox',
      value,
      modelValue: [value, 2, 3]
    },
    slots: {
      default: label
    }
  }

  render(BaseCheckbox, options)

  expect(screen.getByLabelText(label)).toBeChecked()
})

it('renders unchecked', () => {
  render(BaseCheckbox)

  expect(screen.getByRole('checkbox')).not.toBeChecked()
})
