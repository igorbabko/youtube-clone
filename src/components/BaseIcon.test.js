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
