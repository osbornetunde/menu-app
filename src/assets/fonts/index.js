import { createGlobalStyle } from 'styled-components';
import Pangrams from './Pangram-Light.woff2';

export default createGlobalStyle`
  @font-face{
          font-family: Pangram;
          src: url(${Pangrams});
          font-style: normal;
  }
`;
