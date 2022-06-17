import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved
} from '@testing-library/vue'
import BaseModal from './BaseModal.vue'
import icons from '../icons'

test('renders modal with body and footer', () => {
  const body = 'This is modal body'
  const footer = 'This is modal footer'
  const options = {
    slots: {
      default: body,
      footer
    }
  }

  render(BaseModal, options)

  screen.getByText(body)
  screen.getByText(footer)
})

test('renders modal with close button', () => {
  const options = {
    props: {
      withCloseButton: true
    }
  }

  render(BaseModal, options)

  expect(screen.getByTestId('base-icon').innerHTML).toBe(icons['x'])
})

test('renders modal without close button', () => {
  render(BaseModal)

  expect(screen.queryByTestId('base-icon')).toBeNull()
})

test('closes modal when clicking close button', async () => {
  const body = 'This is modal body'
  const options = {
    props: {
      withCloseButton: true
    },
    slots: {
      default: body
    }
  }

  render(BaseModal, options)

  screen.getByText(body)

  fireEvent.click(screen.getByTestId('base-modal-button-close'))

  await waitForElementToBeRemoved([
    screen.queryByText(body),
    screen.queryByTestId('base-modal-overlay')
  ])
})
