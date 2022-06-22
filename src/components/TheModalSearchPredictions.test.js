import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved
} from '@testing-library/vue'
import TheModalSearchPredictions from './TheModalSearchPredictions.vue'

function renderModal(searchPredictions, searchPredictionCategories) {
  const options = {
    props: {
      searchPredictions
    },
    data: () => ({
      searchPredictionCategories
    })
  }

  return render(TheModalSearchPredictions, options)
}

it('shows search predictions', () => {
  const predictions = ['Prediction 1', 'Prediction 2', 'Prediction 3']

  renderModal(predictions)

  predictions.forEach(screen.getByText)
})

it('shows search prediction categories', () => {
  const categories = ['Category 1', 'Category 2', 'Category 3']

  renderModal(categories)

  categories.forEach(screen.getByText)
})

it('does not show search predictions if closed', () => {
  const predictions = ['Prediction 1', 'Prediction 2', 'Prediction 3']
  renderModal(predictions)

  fireEvent.click(screen.getByRole('button', { name: 'Cancel' }))

  return waitForElementToBeRemoved(predictions.map(screen.queryByText))
})

it('does not show search prediction categories if closed', () => {
  const categories = ['Category 1', 'Category 2', 'Category 3']
  renderModal(categories)

  fireEvent.click(screen.getByRole('button', { name: 'Cancel' }))

  return waitForElementToBeRemoved(categories.map(screen.queryByText))
})
