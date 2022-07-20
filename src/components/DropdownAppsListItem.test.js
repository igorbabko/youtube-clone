import { render, screen } from '@testing-library/vue'
import DropdownAppsListItem from './DropdownAppsListItem.vue'

const label = 'Label'

function renderListItem() {
  const options = {
    props: {
      label
    }
  }

  return render(DropdownAppsListItem, options)
}

it('renders with label', () => {
  renderListItem()

  screen.getByText(label)
})
