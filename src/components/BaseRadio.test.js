import { render, screen } from '@testing-library/vue'
import BaseRadio from './BaseRadio.vue'

const label = 'Label'
const value = 'value'

function renderRadio(isChecked) {
  const options = {
    props: {
      modelValue: isChecked ? value : null,
      value,
      id: 'id'
    },
    slots: {
      default: label
    }
  }

  return render(BaseRadio, options)
}

it('renders checked with label', () => {
  const isChecked = true

  renderRadio(isChecked)

  expect(screen.getByLabelText(label)).toBeChecked()
})

it('renders unchecked with label', () => {
  const isChecked = false

  renderRadio(isChecked)

  expect(screen.getByLabelText(label)).not.toBeChecked()
})

it('renders with value', () => {
  renderRadio()

  expect(screen.getByLabelText(label).value).toBe(value)
})
