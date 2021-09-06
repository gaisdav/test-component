import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${({theme}) => theme.custom.fontFamily.roboto};
    box-sizing: border-box;
  }
`;
