import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle<Props>`
body{
  background-color: ${props => props.theme.body};
}
`
