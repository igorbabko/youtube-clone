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

const predictions = ['Prediction 1', 'Prediction 2', 'Prediction 3']
const categories = ['Category 1', 'Category 2', 'Category 3']

describe('when open', () => {
  it('shows search predictions', () => {
    renderModal(predictions)

    predictions.forEach(screen.getByText)
  })

  it('shows search prediction categories', () => {
    renderModal(categories)

    categories.forEach(screen.getByText)
  })
})

describe('when closed', () => {
  it('does not show search predictions', () => {
    renderModal(predictions)

    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }))

    return waitForElementToBeRemoved(predictions.map(screen.queryByText))
  })

  it('does not show search prediction categories', () => {
    renderModal(categories)

    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }))

    return waitForElementToBeRemoved(categories.map(screen.queryByText))
  })
})
