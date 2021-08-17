import { createGlobalStyle } from 'styled-components'
import { colors } from './constants'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Nunito';
    background: ${colors.background};
    color: ${colors.mainText};
    font-size: 16px;
    line-height: 20px;
  }

  * {
    box-sizing: border-box;
    margin: 0px;
    -webkit-tap-highlight-color: transparent;

    &:focus {
      outline: none;
    }
  }
`
