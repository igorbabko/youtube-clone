import { render, screen } from '@testing-library/vue'
import BaseIcon from './BaseIcon.vue'
import icons from '../icons'

const existingIconName = Object.keys(icons)[0]
const nonExistentIconName = 'nonExistentIcon'

function renderIcon(name, classes = null) {
  const options = {
    props: {
      name,
      class: classes
    }
  }

  return render(BaseIcon, options)
}

it('renders when it exists', () => {
  renderIcon(existingIconName)

  expect(screen.getByTestId('base-icon').innerHTML).toBeTruthy()
})

it('does not render if it does not exist', () => {
  renderIcon(nonExistentIconName)

  expect(screen.getByTestId('base-icon').innerHTML).toBeFalsy()
})

it('renders with default classes', () => {
  renderIcon(existingIconName)

  const classes = screen.getByTestId('base-icon').getAttribute('class')

  expect(classes).toBe('w-6 h-6')
})

it('renders with custom classes', () => {
  const expectedClasses = 'w-10 h-10'

  renderIcon(existingIconName, expectedClasses)

  const classes = screen.getByTestId('base-icon').getAttribute('class')

  expect(classes).toBe(expectedClasses)
})
