import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-primary: '#0d6efd';
    --color-secundary: '#6c757d';
    --color-success: '#198754';
    --color-danger: '#dc3545';
    --color-alert: '#ffc107';
    --color-info: '#0dcaf0';
    --color-dark: '#161b22';
    --color-white: '#fff';
    --color-black: '#000';
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  input, button {
    outline: none;
    border: none;
    font-family: 'Roboto', sans-serif
  }

  button {
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto', sans-serif
  }
`;
