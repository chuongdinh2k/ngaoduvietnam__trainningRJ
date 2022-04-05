import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import "./App.css";
import { routes } from "@configs";
import { IRoute } from "@types";
import { ComponentAppRoute } from "@components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";
function App() {
    return (
        <div className="App">
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
