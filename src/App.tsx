import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import "./App.css";
import { routes } from "@configs";
import { IRoute } from "@types";
import { ComponentAppRoute } from "@components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <div className="App">
            <ToastContainer />
            <BrowserRouter>
                <Switch>
                    {routes.map((e: IRoute, key) => (
                        <ComponentAppRoute key={key} {...e} />
                    ))}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
