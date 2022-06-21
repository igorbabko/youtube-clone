import { render, screen } from '@testing-library/vue'
import TheModalSearchPredictions from './TheModalSearchPredictions.vue'

it('shows search predictions', () => {
  const searchPredictions = [
    'Search Prediction 1',
    'Search Prediction 2',
    'Search Prediction 3'
  ]
  const options = {
    props: {
      searchPredictions
    }
  }

  render(TheModalSearchPredictions, options)

  screen.getByText(searchPredictions[0])
  screen.getByText(searchPredictions[1])
  screen.getByText(searchPredictions[2])
})

it('shows search prediction categories', () => {
  const searchPredictionCategories = [
    'Search Prediction Category 1',
    'Search Prediction Category 2',
    'Search Prediction Category 3'
  ]
  const options = {
    data: () => ({
      searchPredictionCategories
    })
  }

  render(TheModalSearchPredictions, options)

  screen.getByText(searchPredictionCategories[0])
  screen.getByText(searchPredictionCategories[1])
  screen.getByText(searchPredictionCategories[2])
})
