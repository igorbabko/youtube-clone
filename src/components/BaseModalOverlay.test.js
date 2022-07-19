import { render } from '@testing-library/vue'
import BaseModalOverlay from './BaseModalOverlay.vue'

it('renders correctly', () => {
  const { html } = render(BaseModalOverlay)
  const comment = 'A very very long comment.'
  const video = {
    id: Math.ceil(Math.random() * 100),
    title: 'Video Title',
    publishedAt: new Date()
  }

  expect(html()).toMatchSnapshot()
  expect(comment).toMatchSnapshot()
  expect(video).toMatchSnapshot({
    id: expect.any(Number),
    publishedAt: expect.any(Date)
  })
})
