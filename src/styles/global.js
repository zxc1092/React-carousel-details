import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Verdana, sans-serif;
    background: #3a444a;
    color: white;
    padding-bottom: 100px;
  }

  * {
    box-sizing: border-box;
  }
`;

export const devices = {
  sm: `@media (min-width: 500px)`,
  md: `@media (min-width: 768px)`,
  lg: `@media (min-width: 1024px)`,
  xl: `@media (min-width: 1250px)`
};
