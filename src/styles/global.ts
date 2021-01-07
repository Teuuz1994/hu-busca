import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    //COLORS
    --primary-color: #0d6efd;
    --secundary-color: #6c757d;
    --success-color: #198754;
    --danger-color: #dc3545;
    --alert-color: #ffc107;
    --info-color: #0dcaf0;
    --dark-color: #161b22;
    --white-color: #fff;
    --black-color: #000;
    --shadow-color: rgba(0, 0, 0, 0.2);
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

  #root {
    width: 100%;
    height: 100%;
  }

  input, button {
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
