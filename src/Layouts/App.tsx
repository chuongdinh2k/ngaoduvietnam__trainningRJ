import React from "react";

import { StyledContainer } from "@components";
import { ILayout } from "@types";
import { ToastContainer } from "react-toastify";

export const LayoutApp = (props: ILayout) => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <>
            <StyledContainer>
                <div className="workspace">
                    <ToastContainer />
                    <div>{props.children}</div>
                </div>
            </StyledContainer>
        </>
    );
};
