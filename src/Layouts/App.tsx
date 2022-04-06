import React from "react";

import { StyledContainer } from "@components";
import { ILayout } from "@types";

export const LayoutApp = (props: ILayout) => {
    return (
        <>
            <StyledContainer>
                <div className="workspace">
                    <div>{props.children}</div>
                </div>
            </StyledContainer>
        </>
    );
};
