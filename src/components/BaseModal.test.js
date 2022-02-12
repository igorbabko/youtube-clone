import { render } from '@testing-library/vue'
import BaseModal from './BaseModal.vue'
import icons from '../icons'

test('renders modal body and footer', () => {
  const body = 'This is modal body'
  const footer = 'This is modal footer'
  const options = {
    slots: {
      default: body,
      footer
    }
  }

  const { getByText, debug } = render(BaseModal, options)
  
  debug();
  
  getByText(body);
  getByText(footer);
})

test.only('renders modal with close button', () => {
  const options = {
    props: {
      withCloseButton: true
    }
  }

  const { container } = render(BaseModal, options)
  
  expect(container.querySelector('svg').innerHTML).toBe(icons['x']);
})
