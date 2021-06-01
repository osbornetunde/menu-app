import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import PangramLight from './assets/fonts/Pangram-Light.woff2';
import PangramRegular from './assets/fonts/Pangram-Regular.woff2';
import SnellRound from './assets/fonts/SnellBT-Regular.otf';

const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family: Pangram;
    src: url(${PangramLight});
    font-style: normal;
    font-display: swap;
  }
  @font-face{
    font-family: Pangram-Regular;
    src: url(${PangramRegular});
    font-style: normal;
    font-display: swap;
  }
  @font-face{
    font-family: Snell;
    src:url(${SnellRound});
    font-style:normal;
    font-display: swap;
  }
    ${normalize}
    *::before,
    *::after,
    * {
      box-sizing: border-box;
    }
    html {
      width: 100vw;
    }

    :root{
      --primary-white: #ffffff;
      --bg-primary: #0765FF;
      --bg-secondary: #F5F9FF;
      --primary-black: #000000;
      --primary-font: Pangram, sans-serif;
      --regular-font: Pangram-Regular, sans-serif;
      --snell-font: Snell, sans-serif;
    }

    html, body {
        padding: 0;
        margin: 0;
        font-size: 62.5%;
        min-height: 100%
    }
    body {
        font-family: Pangram, sans-serif;
        font-size: 1.2rem;
        width: 100%;
        height: 100vh;
        overflow-x: hidden;
    }
    #root {
        min-height: 100vh;
    }
    h1,h2,h3,h4,h5,h6,p{
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyle;
