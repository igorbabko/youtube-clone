import { render, screen } from '@testing-library/vue'
import BaseIcon from './BaseIcon.vue'
import icons from '../icons'

test('renders icon', () => {
  const options = {
    props: {
      name: Object.keys(icons)[0]
    }
  }

  render(BaseIcon, options)

  expect(screen.getByTestId('base-icon').innerHTML).toBeTruthy()
})

test('renders non-existent icon', () => {
  const options = {
    props: {
      name: 'nonExistentIcon'
    }
  }

  render(BaseIcon, options)
 
  expect(screen.getByTestId('base-icon').innerHTML).toBeFalsy()
})

test('renders icon with default classes', () => {
  const defaultClasses = 'w-6 h-6'
  const options = {
    props: {
      name: Object.keys(icons)[0]
    }
  }

  render(BaseIcon, options)
  
  expect(screen.getByTestId('base-icon').getAttribute('class')).toBe(defaultClasses)
})

test('renders icon with custom classes', () => {
  const classes = 'w-10 h-10'
  const options = {
    props: {
      name: Object.keys(icons)[0],
      class: classes
    }
  }

  render(BaseIcon, options)
 
  expect(screen.getByTestId('base-icon').getAttribute('class')).toBe(classes)
})
