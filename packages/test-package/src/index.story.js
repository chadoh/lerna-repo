import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled, { ThemeProvider } from 'styled-components'

import Button from '.'

const StyledContainer = styled.div`
  width: 200px;
`

storiesOf('Button', module)

  .add('with text', () => (
    <StyledContainer>
      <Button onClick={action('clicked')}>Button</Button>
    </StyledContainer>
  ))

  .add('with some emoji', () => (
    <StyledContainer>
      <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
    </StyledContainer>
  ))

  .add('disabled', () => (
    <StyledContainer>
      <Button disabled>loading</Button>
    </StyledContainer>
  ))
