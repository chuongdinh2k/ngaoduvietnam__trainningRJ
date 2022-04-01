import { Route } from "react-router-dom";

import { LayoutApp } from "@layouts";
import { IRoute } from "@types";

export const ComponentAppRoute = (props: IRoute) => {
    // props
    const { path, exact, component, layout } = props;
    // page variable
    const Component = component;
    const Layout = layout || LayoutApp;
    return (
        <Route
            path={path}
            exact={exact}
            render={() => (
                <Layout>
                    <Component />
                </Layout>
            )}
        />
    );
};
