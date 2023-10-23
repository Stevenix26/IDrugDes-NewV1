import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from "@mui/material/styles";
import './index.css';
import App from './App';
import CssBaseline from "@mui/material/CssBaseline";
import 'bootstrap/dist/css/bootstrap.min.css';
import { theme } from "./theme";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./state";



const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App />
      </ThemeProvider>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function