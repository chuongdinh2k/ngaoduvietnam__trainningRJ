import styled from "styled-components";

import { SliderCustom } from "@components";
import { ICard } from "@types";
import { StyledWrapperTitleComponent } from "..";

interface IProps {
    AttractiveTourLists?: Array<ICard>;
}
export const HomeAttractiveTourComponent = (props: IProps) => {
    const { AttractiveTourLists } = props;
    return (
        <StyledWrapperTitleComponent>
            <div className="wrapper">
                <div className="top">
                    <h3>
                        Attractive tour and
                        <br /> interesting experiences
                    </h3>
                    <div className="btn">View All</div>
                </div>
                <div className="slide">
                    <SliderCustom data={AttractiveTourLists} numberSlides={3} typeCardIcon={true} />
                </div>
            </div>
        </StyledWrapperTitleComponent>
    );
};
