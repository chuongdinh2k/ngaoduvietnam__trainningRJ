import { Route } from "react-router-dom";

import { LayoutApp } from "@layouts";
import { IRoute } from "@types";

export const ComponentAppRoute = (props: IRoute) => {
    // props
    const { path, exact } = props;
    // page variable
    const Component = props.component;
    const Layout = props.layout || LayoutApp;
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
