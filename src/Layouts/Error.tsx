import { ILayout } from "@types";

export const LayoutError = (props: ILayout) => {
    return <>{props.children}</>;
};
