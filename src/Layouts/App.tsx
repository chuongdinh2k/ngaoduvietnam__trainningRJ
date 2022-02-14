import { Header, Footer, StyledContainer } from "@components";
import { ILayout } from "@types";

export const LayoutApp = (props: ILayout) => {
    return (
        <StyledContainer>
            <Header />
            <div className="workspace">
                <div>{props.children}</div>
            </div>
            <Footer />
        </StyledContainer>
    );
};
