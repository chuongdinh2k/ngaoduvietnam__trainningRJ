import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider as ThemeProviders } from "styled-components";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MyConFigTheme, theme } from "./styles/theme";
import "react-toastify/dist/ReactToastify.css";
import { store, persistor } from "@redux";

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <ThemeProviders theme={MyConFigTheme}>
                <PersistGate loading={null} persistor={persistor}>
                    <CssBaseline />
                    <App />
                    <ToastContainer />
                </PersistGate>
            </ThemeProviders>
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
