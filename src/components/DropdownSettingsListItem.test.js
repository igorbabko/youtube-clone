import { render, screen } from '@testing-library/vue'
import DropdownSettingsListItem from './DropdownSettingsListItem.vue'
import icons from '../icons'

function renderListItem(label = '', icon = null, withSubMenu = false) {
  const options = {
    props: {
      label,
      icon,
      withSubMenu
    }
  }

  return render(DropdownSettingsListItem, options)
}

it('renders with label', () => {
  const label = 'Label'

  renderListItem(label)

  screen.getByText(label)
})

it('renders with submenu icon', () => {
  const withSubMenu = true

  renderListItem('', null, withSubMenu)

  expect(screen.getByTestId('base-icon')).toContainHTML(icons['chevronRight'])
})

it('renders with specified icon', () => {
  const icon = 'sun'

  renderListItem('', icon)

  expect(screen.getByTestId('base-icon')).toContainHTML(icons[icon])
})
