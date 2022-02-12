import { render, fireEvent } from '@testing-library/vue'
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

  const { getByText } = render(BaseModal, options)
  
  getByText(body);
  getByText(footer);
})

test('renders modal with close button', () => {
  const options = {
    props: {
      withCloseButton: true
    }
  }

  const { container } = render(BaseModal, options)
  
  expect(container.querySelector('svg').innerHTML).toBe(icons['x']);
})

test('closes modal after clicking close button', async () => {
  const body = 'This is modal body'
  const options = {
    props: {
      withCloseButton: true
    },
    slots: {
      default: body
    }
  }

  const { container, getByText, queryByText } = render(BaseModal, options)
 
  getByText(body);
  await fireEvent.click(container.querySelector('button'));

  expect(queryByText(body)).toBeNull()
  expect(container.querySelector('svg')).toBeNull();
})
