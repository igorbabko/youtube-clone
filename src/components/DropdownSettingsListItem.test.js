import { render, screen } from '@testing-library/vue'
import DropdownSettingsListItem from './DropdownSettingsListItem.vue'
import icons from '../icons'

function renderListItem(label = '', icon = null, withSubMenu = false, active = false) {
  const options = {
    props: {
      label,
      icon,
      withSubMenu,
      active
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

it('renders with specified icon and submenu icon', () => {
  const icon = 'sun'
  const withSubMenu = true

  renderListItem('', icon, withSubMenu)

  expect(screen.getAllByTestId('base-icon')).toHaveLength(2)
  expect(screen.getAllByTestId('base-icon')[0]).toContainHTML(icons[icon])
  expect(screen.getAllByTestId('base-icon')[1]).toContainHTML(icons['chevronRight'])
})

it('renders active with check icon', () => {
  const active = true

  renderListItem('', null, false, active)

  expect(screen.getByTestId('base-icon')).toContainHTML(icons['check'])
})

it('renders active with check icon even if another icon was specified', () => {
  const icon = 'sun'
  const active = true

  renderListItem('', icon, false, active)

  expect(screen.getByTestId('base-icon')).toContainHTML(icons['check'])
  expect(screen.getByTestId('base-icon')).not.toContainHTML(icons[icon])
})
