import { SliderCustom } from "@components";
import { StyledWrapperTitleComponent } from "..";
import { ICard } from "@types";
import { useHistory } from "react-router-dom";
import { appRoutesEnum } from "@enums";

interface IProps {
    HomeExperienceListsData?: Array<ICard>;
}
export const ComponentHomeExperience = (props: IProps) => {
    // props
    const { HomeExperienceListsData } = props;
    const history = useHistory();
    return (
        <StyledWrapperTitleComponent>
            <div className="top">
                <h3>
                    Experience the traditional <br /> cultural beauties of Vietnam
                </h3>
                <div className="btn btn-exper" onClick={() => history.push(appRoutesEnum.TOURS)}>
                    View All
                </div>
            </div>
            <div className="slide">
                <SliderCustom data={HomeExperienceListsData} numberSlides={3} typeCardIcon={true} />
            </div>
        </StyledWrapperTitleComponent>
    );
};
