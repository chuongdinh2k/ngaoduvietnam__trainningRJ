import React from "react";

import { ComponentLoader, Footer, StyledContainer } from "@components";
import { ILayout } from "@types";
import { useAppSelector, selectApp } from "@redux";
import { ToastContainer } from "react-toastify";

export const LayoutApp = (props: ILayout) => {
    const app = useAppSelector(selectApp);
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            {app.loading ? (
                <ComponentLoader />
            ) : (
                <StyledContainer>
                    <div className="workspace">
                        <ToastContainer />
                        <div>{props.children}</div>
                    </div>
                    <Footer />
                </StyledContainer>
            )}
        </>
    );
};
