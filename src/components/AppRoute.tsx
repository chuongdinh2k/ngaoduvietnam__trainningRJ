import { Route, useHistory } from "react-router-dom";
import React from "react";

import { LayoutApp } from "@layouts";
import { IRoute } from "@types";
import { selectAuth, useAppSelector } from "@redux";
import { appRoutesEnum } from "@enums";

export const ComponentAppRoute = (props: IRoute) => {
    const auth = useAppSelector(selectAuth);
    const history = useHistory();
    // props
    const { path, exact } = props;
    // page variable
    const Component = props.component;
    const Layout = props.layout || LayoutApp;

    React.useEffect(() => {
        // WHAT: get token from store
        const accessToken = auth.tokenInfoAuth;
        // if (accessToken) {
        //     history.push(appRoutesEnum.HOME);
        // }
    }, [auth]);

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
