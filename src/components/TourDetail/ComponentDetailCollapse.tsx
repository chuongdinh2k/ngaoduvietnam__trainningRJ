import React from "react";
import { Collapse } from "@material-ui/core";
import styled from "styled-components";

import { IconDownArrow, IconLocation, IconUpArrow } from "..";

interface ITourItinerary {
    stopTime?: number;
    title?: string;
    text?: string;
    duration?: string;
    admission?: string;
}
interface IProps {
    tourItinerary?: ITourItinerary;
}
export const ComponentDetailCollapse = (props: IProps) => {
    const { tourItinerary } = props;
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <StyledComponentCollapse>
            <div className="wrapperCollapse">
                <div className="collapse__header">
                    <p className="collapse__header-title">
                        {`${tourItinerary?.title}(${tourItinerary?.stopTime} stops)`}
                    </p>
                    {!checked ? (
                        <span onClick={handleChange} className="collapse__header-icon">
                            <IconDownArrow />
                        </span>
                    ) : (
                        <span onClick={handleChange} className="collapse__header-icon">
                            <IconUpArrow />
                        </span>
                    )}
                </div>
                <Collapse in={checked}>
                    <div className="collapse__content">
                        <div className="collapse__content-top">
                            <span className="content__icon">
                                <IconLocation color="#04316A" />
                            </span>
                            <div className="content__text">
                                <p className="content__text-sub">{tourItinerary?.text}</p>
                                <p className="content__text-duration">
                                    Duration: {tourItinerary?.duration}
                                </p>
                                <p className="content__text-admission">
                                    Admission {tourItinerary?.admission}
                                </p>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>
        </StyledComponentCollapse>
    );
};

const StyledComponentCollapse = styled.div`
    .wrapperCollapse {
        padding: 1.8rem;
        background-color: #f4f4f4;
    }
    .collapse__header {
        display: flex;
        justify-content: space-between;
        &-title {
            color: ${(p) => p.theme.colors.darkBlue2};
            font-size: 1.8rem;
            font-weight: ${(p) => p.theme.typography.fontWeightBold};
        }
        &-icon {
            padding-top: 0.5rem;
        }
    }
`;
