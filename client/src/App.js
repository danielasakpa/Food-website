import React from "react";
import "./App.css";
import MainRouter from "./MainRouter";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import CartProvider from "./CartContext";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainRouter />
        </ThemeProvider>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
