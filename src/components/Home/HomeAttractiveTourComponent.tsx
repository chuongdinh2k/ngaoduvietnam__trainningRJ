import { useHistory } from "react-router-dom";

import { SliderCustom } from "@components";
import { ICard } from "@types";
import { StyledWrapperTitleComponent } from "..";
import { appRoutesEnum } from "@enums";

interface IProps {
    AttractiveTourLists?: Array<ICard>;
}
export const HomeAttractiveTourComponent = (props: IProps) => {
    const history = useHistory();
    const { AttractiveTourLists } = props;
    return (
        <StyledWrapperTitleComponent>
            <div className="wrapper">
                <div className="top">
                    <h3>
                        Attractive tour and
                        <br className="xl-hidden" /> interesting experiences
                    </h3>
                    <div className="btn" onClick={() => history.push(appRoutesEnum.TOURS)}>
                        View All
                    </div>
                </div>
                <div className="slide">
                    <SliderCustom data={AttractiveTourLists} numberSlides={3} typeCardIcon={true} />
                </div>
            </div>
        </StyledWrapperTitleComponent>
    );
};
