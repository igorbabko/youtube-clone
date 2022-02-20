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

test('renders icon', () => {
  renderIcon(existingIconName)

  expect(screen.getByTestId('base-icon').innerHTML).toBeTruthy()
})

test('renders non-existent icon', () => {
  renderIcon(nonExistentIconName)

  expect(screen.getByTestId('base-icon').innerHTML).toBeFalsy()
})

test('renders icon with default classes', () => {
  renderIcon(existingIconName)

  const classes = screen.getByTestId('base-icon').getAttribute('class')

  expect(classes).toBe('w-6 h-6')
})

test('renders icon with custom classes', () => {
  const expectedClasses = 'w-10 h-10'

  renderIcon(existingIconName, expectedClasses)

  const classes = screen.getByTestId('base-icon').getAttribute('class')

  expect(classes).toBe(expectedClasses)
})
