import React, { useState, forwardRef } from 'react'
import { InputWrapper, CoreInput, PasswordToggle, ClearButton, LabelWrapper } from './styled'

const Input = (props, ref) => {
  const {
    onChange,
    value = '',
    label,
    placeholder,
    icon,
    type,
    showClear,
    error,
    uncontrolled,
    ...inputProps
  } = props
  const isPassword = type === 'password'
  const [showPassword, setShowPassword] = useState(false)

  return (
    <InputWrapper>
      <LabelWrapper>
        {label}
        {error && <span>*{error}</span>}
      </LabelWrapper>
      <CoreInput
        ref={ref}
        icon={icon}
        isPassword={isPassword}
        showClear={showClear}
        value={uncontrolled ? undefined : value}
        onChange={uncontrolled ? undefined : e => onChange(e)}
        placeholder={placeholder}
        type={!isPassword ? type : showPassword ? 'text' : 'password'}
        {...inputProps}
      />
      {
        isPassword && (
          <PasswordToggle onClick={() => setShowPassword(prev => !prev)}>
          </PasswordToggle>
        )
      }
      {showClear && value && (
        <ClearButton onClick={() => onChange({ target: { value: '' } })}>
        </ClearButton>
      )}
    </InputWrapper>
  )
}

export default forwardRef(Input)
