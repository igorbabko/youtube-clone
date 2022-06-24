import { render, screen } from '@testing-library/vue'
import TheSearchPredictionCategories from './TheSearchPredictionCategories.vue'

const categories = ['Category 1', 'Category 2', 'Category 3']
const checkedCategory = categories[0]

function renderCategories(checkedCategory) {
  const options = {
    props: {
      categories,
      modelValue: checkedCategory
    }
  }

  return render(TheSearchPredictionCategories, options)
}

it('shows search prediction categories unchecked', () => {
  renderCategories()

  categories.forEach(category =>
    expect(screen.getByLabelText(category).checked).toBe(false)
  )
})

it('shows specified search prediction category checked', () => {
  renderCategories(checkedCategory)

  expect(screen.getByLabelText(checkedCategory).checked).toBe(true)
  expect(screen.getByLabelText(categories[1]).checked).toBe(false)
  expect(screen.getByLabelText(categories[2]).checked).toBe(false)
})
