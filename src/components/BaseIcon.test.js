import { render } from '@testing-library/vue'
import BaseIcon from './BaseIcon.vue'
import icons from '../icons'

test('renders icon', () => {
  Object.keys(icons).forEach(name => {
    const options = {
      props: {
        name
      }
    }

    const { container } = render(BaseIcon, options)
    
    expect(container.querySelector('path')).toBeTruthy()
  })
})

test('renders default icon classes', () => {
  const defaultClasses = 'w-6 h-6'
  const options = {
    props: {
      name: 'menu'
    }
  }

  const { container } = render(BaseIcon, options)
  
  expect(container.querySelector('svg').getAttribute('class')).toBe(defaultClasses)
})

test('renders icon classes', () => {
  const classes = 'w-10 h-10'
  const options = {
    props: {
      name: 'menu',
      class: classes
    }
  }

  const { container } = render(BaseIcon, options)
  
  expect(container.querySelector('svg').getAttribute('class')).toBe(classes)
})
