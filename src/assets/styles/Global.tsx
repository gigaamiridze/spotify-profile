import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  // Reset styles
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym,
  address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var,
  b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead,
  tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav,
  output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  * {
    box-sizing: border-box;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after {
    content: "";
    content: none;
  }
  q:before, q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    display: inline-block;
    text-decoration: none;
  }

  // Element styles
  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.black};
      font-family: ${theme.fonts.primary};
    `}
  }

  // Fonts
  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Book'), local('CircularStd-Book'),
    url('/fonts/circular-std/CircularStd-Book.woff2') format('woff2'),
    url('/fonts/circular-std/CircularStd-Book.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Book Italic'), local('CircularStd-BookItalic'),
    url('/fonts/circular-std/CircularStd-BookItalic.woff2') format('woff2'),
    url('/fonts/circular-std/CircularStd-BookItalic.woff') format('woff');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Medium'), local('CircularStd-Medium'),
    url('/fonts/circular-std/CircularStd-Medium.woff2') format('woff2'),
    url('/fonts/circular-std/CircularStd-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Medium Italic'), local('CircularStd-MediumItalic'),
    url('/fonts/circular-std/CircularStd-MediumItalic.woff2') format('woff2'),
    url('/fonts/circular-std/CircularStd-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Bold'), local('CircularStd-Bold'),
    url('/fonts/circular-std/CircularStd-Bold.woff2') format('woff2'),
    url('/fonts/circular-std/CircularStd-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Bold Italic'), local('CircularStd-BoldItalic'),
    url('/fonts/circular-std/CircularStd-BoldItalic.woff2') format('woff2'),
    url('/fonts/circular-std/CircularStd-BoldItalic.woff') format('woff');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Black'), local('CircularStd-Black'),
    url('/fonts/circular-std/CircularStd-Black.woff2') format('woff2'),
    url('/fonts/circular-std/CircularStd-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Black Italic'), local('CircularStd-BlackItalic'),
    url('/fonts/circular-std/CircularStd-BlackItalic.woff2') format('woff2'),
    url('/fonts/circular-std/CircularStd-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
  }
`;

export default GlobalStyles;