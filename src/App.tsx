import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import "./App.css";
import { routes } from "@configs";
import { IRoute } from "@types";
import { ComponentAppRoute } from "@components";

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
