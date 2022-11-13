import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`    

    ${normalize}

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    address {
        font-style: normal;
    }

    img {
        width: 100%;
        display: block;
        height: auto;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
      color: #212121;
      background-color: #fff;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    html {
      box-sizing: border-box;
      width: 100vw;
      overflow-x: hidden;
    }

`;

export default GlobalStyle;
