import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider as ThemeProviders } from "styled-components";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./styles/theme";
import "react-toastify/dist/ReactToastify.css";
import { store } from "@redux";

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <ThemeProviders theme={theme}>
                <CssBaseline />
                <App />
                <ToastContainer />
            </ThemeProviders>
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
