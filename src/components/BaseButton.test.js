import { render, screen, prettyDOM } from '@testing-library/vue'
import BaseButton from './BaseButton.vue'

test('renders base button', () => {
  // ---------------------------------------------
  // pretty dom ----------------------------------
  // ---------------------------------------------

  // render(BaseButton)
  // console.log(prettyDOM());

  // ---------------------------------------------
  // screen debug --------------------------------
  // ---------------------------------------------
  
  // render(BaseButton)
  // render(BaseButton)

  // screen.debug()

  // ---------------------------------------------
  // render slot ---------------------------------
  // ---------------------------------------------

  // render(BaseButton, {
  //   slots: {
  //     default: 'Test Button'
  //   }
  // })

  // screen.debug()

  // ---------------------------------------------
  // getByText -----------------------------------
  // ---------------------------------------------

  // render(BaseButton, {
  //   slots: {
  //     default: 'Test Button'
  //   }
  // })

  // screen.getByText('Test Button')

  // ---------------------------------------------
  // getByText regexp ----------------------------
  // ---------------------------------------------

  // render(BaseButton, {
  //   slots: {
  //     default: 'Test Button'
  //   }
  // })

  // screen.getByText(/Test Button/i)

  // ---------------------------------------------
  // getByText regexp ----------------------------
  // ---------------------------------------------
  
  // given
  // arrange
  const options = {
    slots: {
      default: 'Test Button'
    }
  }

  // when
  // act
  render(BaseButton, options)

  // then
  // assert
  screen.getByText(/Test Button/i)
  // screen.queryByText(/Test Button/i)
  // console.log(screen)
});
