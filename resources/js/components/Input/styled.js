import styled from 'styled-components'
import { colors } from 'constants'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  color: ${colors.mainText};
  position: relative;

  > svg {
    height: 16px;
    width: 16px;
    position: absolute;
    bottom: 12px;
    left: 10px;
    opacity: 0.8;
    color: ${colors.secondaryText};
  }
`

export const LabelWrapper = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
  color: ${colors.secondaryText};

  > span {
    margin-left: 8px;
    font-size: 12px;
    color: ${colors.c20}
  }
`

export const CoreInput = styled.input`
  background: none;
  border: none;
  padding: 10px 12px 10px 12px;
  color: ${colors.secondaryText};
  border: 1px solid ${colors.c18};
  font-size: 14px;
  border-radius: 4px;
  background: ${colors.c6};

  &::placeholder {
    color: ${colors.secondaryText};
  }

  &:disabled {
    color: ${colors.c5};
    background: ${colors.c3};
  }

  ${({ showClear, isPassword }) => (showClear || isPassword) && 'padding-right: 32px;'}
  ${({ icon }) => icon && 'padding-left: 32px;'}
`

export const PasswordToggle = styled.div`
  cursor: pointer;

  > svg {
    height: 16px;
    width: 16px;
    position: absolute;
    bottom: 10px;
    right: 12px;
    opacity: 0.8;
    color: ${colors.secondaryText};
  }
`

export const ClearButton = styled.button`
  height: 16px;
  width: 16px;
  position: absolute;
  bottom: 10px;
  right: 12px;
  opacity: 0.8;
  background: none;
  border: none;
  cursor: pointer;

  > svg {
    height: 12px;
    width: 12px;
    color: ${colors.secondaryText};
  }
`
