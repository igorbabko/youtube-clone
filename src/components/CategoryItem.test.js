import { render, screen } from '@testing-library/vue'
import CategoryItem from './CategoryItem.vue'

const category = 'Category'

function renderCategoryItem() {
  const options = {
    props: {
      category
    }
  }

  return render(CategoryItem, options)
}

it('renders with label', () => {
  renderCategoryItem()

  screen.getByText(category)
})
