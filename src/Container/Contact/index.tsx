import {
    ComponentBreadscrumb,
    ComponentContactBanner,
    ComponentContactForm,
    ComponentMapEmbed,
    Footer,
    Header,
    StyledWrapContent,
} from "@components";

export const Contact = () => {
    return (
        <>
            <Header hasColor={false} />
            <ComponentContactBanner />
            <StyledWrapContent>
                <div className="wrapperContent">
                    <ComponentBreadscrumb />
                    <ComponentContactForm />
                </div>
            </StyledWrapContent>
            <ComponentMapEmbed />
            <Footer />
        </>
    );
};
