import { ComponentLoader } from "@components";
import { useAppSelector, selectApp } from "@redux";
import { ComponentType } from "react";

export function WithLoading<T>(Component: ComponentType<T>) {
    return (hocProps: T) => {
        const app = useAppSelector(selectApp);
        return app.loading ? <ComponentLoader /> : <Component {...hocProps} />;
    };
}
