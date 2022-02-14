import React from "react";
export interface ILayout {
    children?: string | JSX.Element | JSX.Element[];
}
export interface IRoute {
    name?: string;
    path?: string;
    component: React.ComponentType<any>;
    layout?: React.ComponentType<ILayout>;
    exact: boolean;
    permission?: string;
}
