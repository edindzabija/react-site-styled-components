import React from 'react'
import styled from 'styled-components'

const StyledP = styled.p`
  color: #bf1650;

  &:before {
    display: inline;
    content: '⚠ ';
  }
`

const ErrorMessage = ({ error }) => {
  if (error) {
    switch (error.type) {
      case 'required':
        return <StyledP>This field is required</StyledP>
      case 'minLength':
        return <StyledP>Minmium 2 characters</StyledP>
      case 'maxLength':
        return <StyledP>Maximum 80 characters allowed</StyledP>
      case 'pattern':
        return <StyledP>Enter a valid email address</StyledP>
      default:
        return null
    }
  }

  return null
}

export default ErrorMessage
