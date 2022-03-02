import React from "react";

import { Footer, StyledContainer } from "@components";
import { ILayout } from "@types";

export const LayoutApp = (props: ILayout) => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <StyledContainer>
            <div className="workspace">
                <div>{props.children}</div>
            </div>
            <Footer />
        </StyledContainer>
    );
};
