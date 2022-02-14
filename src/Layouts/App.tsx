import { StyledContainer } from "@components";
import { ILayout } from "@types";
import { Header } from "@components";

export const LayoutApp = (props: ILayout) => {
    return (
        <StyledContainer>
            <Header />
            <div className="workspace">
                <div>{props.children}</div>
            </div>
        </StyledContainer>
    );
};
