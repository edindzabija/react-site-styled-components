import React from 'react'
import styled from 'styled-components'

const StyledP = styled.p`
  color: #bf1650;

  &:before {
    display: inline;
    content: '⚠ ';
  }

  animation: tracking-in-contract 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) both;

  @keyframes tracking-in-contract {
    0% {
      letter-spacing: 1em;
      opacity: 0;
    }
    40% {
      opacity: 0.8;
    }
    100% {
      letter-spacing: normal;
      opacity: 1;
    }
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
