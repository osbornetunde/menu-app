import React from 'react'
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components'
import { ChakraProvider } from "@chakra-ui/react"
import './index.css'
import App from './App'
import theme from "./constant/theme";
import GlobalStyle from "./GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <ChakraProvider>
              <GlobalStyle/>
              <App />
          </ChakraProvider>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
