import React from 'react'
import { ButtonWrapper } from './styled'
import { Link } from 'react-router-dom'

const Button = (props) => {
  const {
    onClick,
    style = {},
    children,
    disabled,
    text,
    to,
    outlined
  } = props

  const buttonContent = (
    <ButtonWrapper
      style={style}
      onClick={onClick}
      disabled={disabled}
      text={text}
      outlined={outlined}
    >
      {children}
    </ButtonWrapper>
  )

  if (to) {
    return (
      <Link to={to}>
        {buttonContent}
      </Link>
    )
  }

  return buttonContent
}

export default Button
