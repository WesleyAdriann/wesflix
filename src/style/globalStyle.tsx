import { createGlobalStyle } from 'styled-components';

import Roboto from '../assets/fonts/Roboto-Regular.ttf';
import RobotoBold from '../assets/fonts/Roboto-Bold.ttf';
import RobotoLight from '../assets/fonts/Roboto-Light.ttf';
import RobotoMedium from '../assets/fonts/Roboto-Medium.ttf';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoLight});
    font-weight: 300;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto});
    font-weight: 400;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMedium});
    font-weight: 500;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBold});
    font-weight: 700;
  }

  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    padding-top: 94px;
  }

  @media (max-width: 800px) {
    body {
      padding-top: 40px;
    }
  }

  a {
    color: inherit;
  }
`;
