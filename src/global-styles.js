import { injectGlobal } from 'styled-components';

injectGlobal`
    @font-face {
        font-family: 'Roboto';
        url('fonts/roboto.ttf') format('truetype')
    }
    body {
        font-family: 'Roboto', sans-serif;
    }
`
