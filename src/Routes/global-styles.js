import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: fallback;
        src: url('fonts/roboto.ttf') format('truetype');
    }
    body {
        font-family: 'Roboto', sans-serif
    }
`
