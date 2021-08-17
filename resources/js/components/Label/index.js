import React from 'react'
import { LabelWrapper } from './styled'

const Label = (props) => {
  const {
    onClick,
    htmlFor,
    style = {},
    children,
    disabled,
    text,
    outlined
  } = props

  const labelContent = (
    <LabelWrapper
      htmlFor={htmlFor}
      style={style}
      onClick={onClick}
      disabled={disabled}
      text={text}
      outlined={outlined}
    >
      {children}
    </LabelWrapper>
  )

  return labelContent
}

export default Label
