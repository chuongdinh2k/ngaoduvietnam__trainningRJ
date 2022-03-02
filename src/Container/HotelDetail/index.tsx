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
                <div className="wrapperContent">
                    <ComponentBreadscrumb />
                    <ComponentTourDetailContent dataHotel={datalistHotels.hotels[0]} />
                </div>
            </StyledWrapContent>
        </>
    );
};
