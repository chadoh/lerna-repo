import React from 'react'
import styled from 'styled-components'
import Spinner from 'react-spinkit'
import StyledButton from './styles/styledButton'

const StyledSpinner = styled(Spinner)`
  color: #26A65B;
`
const Button = ({ type = 'button', children, onClick, disabled }) => (
  <StyledButton type={type} className="button" onClick={onClick} disabled={disabled}>
    {children}
    {disabled &&
        <StyledSpinner name="ball-pulse-sync" fadeIn="none" style={{margin: '1em 0'}} />
    }
  </StyledButton>
)

export default Button
