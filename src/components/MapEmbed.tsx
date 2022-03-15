import styled from "styled-components";

export const ComponentMapEmbed = () => {
    return (
        <StyledMapEmbed>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19003.889812742185!2d-2.2952338242968917!3d53.4597698701742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bade198f6a2ab%3A0xa06b7a1e162e18f9!2zT2xkIFRyYWZmb3JkLCBTdHJldGZvcmQsIE1hbmNoZXN0ZXIsIFbGsMahbmcgUXXhu5FjIEFuaA!5e0!3m2!1svi!2s!4v1647313053370!5m2!1svi!2s"
                // width="600"
                // height="450"
                // allowFullScreen=""
                loading="lazy"
            ></iframe>
        </StyledMapEmbed>
    );
};
const StyledMapEmbed = styled.div`
    iframe {
        width: 100%;
        height: 50rem;
        max-height: 50rem;
        border: none;
    }
`;
