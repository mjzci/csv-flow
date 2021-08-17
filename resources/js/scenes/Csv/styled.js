import styled from 'styled-components'
import { colors } from 'constants'

export const ImportCsvWrapper = styled.div`
  > div {
    &:first-child {
      margin-bottom: 40px;
    }
  }
`

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    font-weight: 600;
    margin-bottom: 8px;
  }

  > p {
    font-size: 16px;
    line-height: 24px;
    color: ${colors.secondaryText};
  }
`

export const ImportWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`

export const ImportContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 360px;
  max-width: 100%;

  > form {
    width: 100%;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;

  > svg {
    height: 60px;
    width: 60px;
    margin-right: 12px;
  }

  > h1 {
    font-size: 34px;
  }
`
