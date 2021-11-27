import React from 'react';
import Home from './src/pages/home';

import { ThemeProvider } from "styled-components";

import { useFonts } from 'expo-font';
import theme from "./theme";

export default function App() {
  const [loaded] = useFonts({
    Archivo: require('./assets/fonts/Archivo.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}
