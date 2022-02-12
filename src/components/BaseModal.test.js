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

  getByText(body)
  getByText(footer)
})

test('renders modal with close button', () => {
  const options = {
    props: {
      withCloseButton: true
    }
  }

  const { getByTestId } = render(BaseModal, options)

  expect(getByTestId('base-icon').innerHTML).toBe(icons['x'])
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

  const { getByTestId, getByText, queryByTestId, queryByText } = render(
    BaseModal,
    options
  )

  getByText(body)
  getByTestId('base-modal-button-close')

  await fireEvent.click(getByTestId('base-modal-button-close'))

  expect(queryByText(body)).toBeNull()
  expect(queryByTestId('base-modal-button-close')).toBeNull()
})
