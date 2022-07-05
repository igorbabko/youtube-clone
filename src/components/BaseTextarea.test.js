import { render, screen } from '@testing-library/vue'
import BaseTextarea from './BaseTextarea.vue'

function renderTextarea(text, limit) {
  const options = {
    props: {
      modelValue: text,
      limit
    }
  }

  return render(BaseTextarea, options)
}

it('renders prefilled', () => {
  const text = 'Dummy text'

  renderTextarea(text)

  screen.getByDisplayValue(text)
})

it('shows counter', () => {
  const text = 'Dummy text'
  const limit = 100

  renderTextarea(text, limit)

  screen.getByText(`${text.length} / ${limit}`)
})
