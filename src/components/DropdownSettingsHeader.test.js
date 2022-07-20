import { render, screen } from '@testing-library/vue'
import DropdownSettingsHeader from './DropdownSettingsHeader.vue'

const title = 'Title'

function renderHeader() {
  const options = {
    props: {
      title
    }
  }

  return render(DropdownSettingsHeader, options)
}

it('renders with title', () => {
  renderHeader()

  screen.getByText(title)
  screen.getByRole('button')
})
