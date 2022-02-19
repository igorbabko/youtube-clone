import { render, screen, fireEvent, waitFor, waitForElementToBeRemoved } from '@testing-library/vue'
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

  // screen.getByText(body)

  fireEvent.click(screen.getByTestId('base-modal-button-close'))
  
  await waitForElementToBeRemoved(() => screen.queryByText(body))
  // await waitForElementToBeRemoved(() => screen.queryByTestId('base-modal-overlay'))

  // await waitFor(() => {
  //   console.log('checking');
  //   expect(screen.queryByText(body)).toBeNull()
  //   expect(screen.queryByTestId('base-modal-overlay')).toBeNull()
  // })

  // expect(screen.queryByText(body)).toBeNull()
  // expect(screen.queryByTestId('base-modal-overlay')).toBeNull()
})

test('closes modal when clicking on overlay', async () => {
  const body = 'This is modal body'
  const options = {
    slots: {
      default: body
    }
  }

  render(BaseModal, options)

  screen.getByText(body)

  const overlay = screen.getByTestId('base-modal-overlay')

  await fireEvent.click(overlay)

  expect(screen.queryByText(body)).toBeNull()
  expect(screen.queryByTestId('base-modal-overlay')).toBeNull()
})

test('closes modal when clicking close button in the footer', async () => {
  const body = 'This is modal body'
  const options = {
    slots: {
      default: body,
      footer: `
        <template #footer="{ close }">
          <button @click="close">Close</button>
        </template>
      `
    }
  }

  render(BaseModal, options)
  
  screen.getByText(body)
  
  const closeButton = screen.getByRole('button', { name: 'Close' })

  await fireEvent.click(closeButton)

  expect(screen.queryByText(body)).toBeNull()
  expect(screen.queryByText('Close')).toBeNull()
})

test('closes modal when pressing esc key', async () => {
  const body = 'This is modal body'
  const options = {
    slots: {
      default: body
    }
  }

  render(BaseModal, options)
  
  screen.getByText(body)

  const modal = screen.getByRole('dialog')
  
  await fireEvent.keyDown(modal, { key: 'Esc' })
  // await fireEvent.keyDown(modal, {key: 'Esc', code: 'Esc', charCode: 27})
  
  expect(screen.queryByText(body)).toBeNull()
})
