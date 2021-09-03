import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${(props) => props.theme.custom.fontFamily.roboto};
    box-sizing: border-box;
  }
`;
