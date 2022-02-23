import { IconLocation } from "@components";
import { ITourItinerary } from "@types";
import { StyledExpendComponent } from ".";

interface IProps {
    tourItinerary?: ITourItinerary;
}
export const ComponentExpendTourItinerary = (props: IProps) => {
    const { tourItinerary } = props;

    return (
        <StyledExpendComponent>
            {tourItinerary?.locations?.map((item) => (
                <div className="collapse__content">
                    <div className="collapse__content-top">
                        <span className="content__icon">
                            <IconLocation color="#04316A" />
                        </span>
                        <div className="content__text">
                            <p className="content__text-title">{item?.title}</p>
                            <p className="content__text-sub">{item?.text}</p>
                            <p className="content__text-duration">Duration: {item?.duration}</p>
                            <p className="content__text-admission">Admission {item?.admission}</p>
                        </div>
                    </div>
                </div>
            ))}
        </StyledExpendComponent>
    );
};
