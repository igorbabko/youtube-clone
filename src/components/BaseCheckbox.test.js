import { render } from '@testing-library/vue'
import BaseCheckbox from './BaseCheckbox.vue'

test('renders checkbox label', () => {
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

  const { getByLabelText } = render(BaseCheckbox, options)

  const checkbox = getByLabelText(label)

  expect(checkbox.id).toBe(id)
  expect(checkbox.checked).toBe(true)
})
