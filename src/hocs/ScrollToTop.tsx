import React, { ComponentType, useEffect } from "react";

export function ScrollToTop<T>(Component: ComponentType<T>, props: string) {
    return (hocProps: T) => {
        useEffect(() => {
            if (props === "detail") {
                window.scrollTo(0, 130);
            } else if (props === "app") {
                window.scrollTo(0, 0);
            }
        });
        return <Component {...hocProps} />;
    };
}
