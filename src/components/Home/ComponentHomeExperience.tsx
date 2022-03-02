import { SliderCustom } from "@components";
import { StyledWrapperTitleComponent } from "..";
import { ICard } from "@types";

interface IProps {
    HomeExperienceListsData?: Array<ICard>;
}
export const ComponentHomeExperience = (props: IProps) => {
    const { HomeExperienceListsData } = props;
    return (
        <StyledWrapperTitleComponent>
            <div className="top">
                <h3>
                    Experience the traditional <br /> cultural beauties of Vietnam
                </h3>
                <div className="btn">View All</div>
            </div>
            <div className="slide">
                <SliderCustom data={HomeExperienceListsData} numberSlides={3} typeCardIcon={true} />
            </div>
        </StyledWrapperTitleComponent>
    );
};
