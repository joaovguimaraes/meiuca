import React from 'react';
import Home from './src/pages/home';

import { ThemeProvider } from "styled-components";

import theme from "./theme";

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}
