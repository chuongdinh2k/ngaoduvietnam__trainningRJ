import { ComponentBreadscrumb, ComponentHotelBanner, Header, StyledWrapContent } from "@components";

export const Contact = () => {
    return (
        <>
            <Header hasColor={false} />
            <ComponentHotelBanner />
            <StyledWrapContent>
                <div className="wrapperContent">
                    <ComponentBreadscrumb />
                </div>
            </StyledWrapContent>
        </>
    );
};
