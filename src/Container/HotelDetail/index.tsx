import {
    ComponentTourDetailContent,
    StyledWrapContent,
    Header,
    ComponentBreadscrumb,
} from "@components";
import { datalistHotels } from "@demos";

export const HotelDetail = () => {
    return (
        <>
            <Header hasColor />
            <StyledWrapContent withOutBanner>
                <ComponentBreadscrumb />
                <ComponentTourDetailContent dataHotel={datalistHotels.hotels[0]} />
            </StyledWrapContent>
        </>
    );
};
