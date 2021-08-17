import styled from 'styled-components'

export const FormWrapper = styled.form`
  > * {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
