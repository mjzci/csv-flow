import styled, { css } from 'styled-components'
import { colors } from 'constants'

const textCss = css`
  font-size: 14px;
  padding: 0px 16px;
  height: 40px;
  background: none;
  color: ${colors.secondaryText};
  font-weight: 600;
`

const disabledCss = css`
  opacity: 0.7;
  pointer: default;
`

const dangerCss = css`
  background: ${colors.c20};
`

const outlinedCss = css`
  border: 1px solid ${colors.c22};
  background: ${colors.c6};
  color: ${colors.c2};
`

export const ButtonWrapper = styled.button`
  border: none;
  color: ${colors.c6};
  border-radius: 6px;
  cursor: pointer;
  transition: all 300ms ease;
  font-size: 14px;
  padding: 0px 16px;
  height: 40px;
  background: ${colors.c10};


  &:active {
    opacity: 0.6;
    transform: scale(0.9);
  }

  ${({ text }) => text && textCss}
  ${({ outlined }) => outlined && outlinedCss}
  ${({ danger }) => danger && dangerCss}
  ${({ disabled }) => disabled && disabledCss}
`
