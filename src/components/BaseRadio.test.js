import { render, screen } from '@testing-library/vue'
import BaseRadio from './BaseRadio.vue'

it('renders checked with label', () => {
  const id = 'id'
  const value = 'value'
  const label = 'Label'
  const isChecked = true
  const options = {
    props: {
      modelValue: isChecked ? value : null,
      value,
      id
    },
    slots: {
      default: label
    }
  }

  render(BaseRadio, options)

  expect(screen.getByLabelText(label).checked).toBe(isChecked)
})

it.todo('renders unchecked with label')
it.todo('renders with value')
