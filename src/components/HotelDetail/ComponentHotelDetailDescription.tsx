import styled from "styled-components";

import { IDescription } from "@types";
import { Grid } from "@material-ui/core";
import { IconChecked } from "../common";

interface IProps {
    description?: IDescription;
}
export const ComponentHotelDetailDescription = (props: IProps) => {
    const { description } = props;
    return (
        <StyledComponenetDes>
            <div className="wrapperDes">
                <div className="overview">
                    <h4 className="title">{description?.overview?.name}</h4>
                    {description?.overview?.content?.map((paragraph, index) => (
                        <p key={index} className="overview__text">
                            {paragraph}
                        </p>
                    ))}
                </div>
                <div className="listChecked">
                    <h4 className="title">Hotel Amenities</h4>
                    <Grid container spacing={2}>
                        {description?.hotelAmenities?.list?.map((item, index) => (
                            <Grid item xs={6} key={index}>
                                <p>
                                    <span className="listChecked__icon">
                                        <IconChecked />
                                    </span>
                                    <span className="listChecked__text">{item}</span>
                                </p>
                            </Grid>
                        ))}
                    </Grid>
                </div>
                <div className="rules">
                    <h4 className="title">Rules</h4>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <p className="rules__name">Checkin</p>
                            <div className="rules__time">02:00 pm</div>
                        </Grid>
                        <Grid item xs={6}>
                            <p className="rules__name">Checkout</p>
                            <div className="rules__time">12:00 am</div>
                        </Grid>
                    </Grid>
                    <ul className="rules__list">
                        {description?.rules?.list?.map((item, index) => (
                            <li key={index}>
                                <a>{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </StyledComponenetDes>
    );
};
const StyledComponenetDes = styled.div`
    .wrapperDes {
        padding-bottom: 4.2rem;
        padding-top: 2.4rem;
    }
    .title {
        font-size: 2rem;
        font-weight: ${(p) => p.theme.typography.fontWeightBold};
        padding-bottom: 1.5rem;
    }
    .overview {
        padding-bottom: 3.7rem;
        border-bottom: 1px solid #e5e5e5;
        &__text {
            font-size: 1.6rem;
            line-height: 2.5rem;
            padding-bottom: 1rem;
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                font-size: 1.4rem;
            }
        }
    }
    .listChecked {
        padding-top: 3.7rem;
        padding-bottom: 3rem;
        border-bottom: 1px solid #e5e5e5;
        &__text {
            font-size: 1.6rem;
            @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
                font-size: 1.4rem;
            }
            padding-left: 2rem;
            color: #4f4f4f;
        }
    }
    .rules {
        &__name {
            color: ${(p) => p.theme.colors.red};
            font-size: 1.6rem;
            @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
                font-size: 1.4rem;
            }
            font-weight: ${(p) => p.theme.typography.fontWeightBold};
        }
        &__time {
            width: 100%;
            padding: 0.7rem 0;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: ${(p) => p.theme.typography.fontWeightBold};
            color: ${(p) => p.theme.colors.darkBlack};
            text-align: center;
            background-color: #f5f5f5;
        }
        &__list {
            padding-top: 2.5rem;
            padding-bottom: 3rem;
            border-bottom: 1px solid #e5e5e5;
            li {
                list-style-position: inside;
                font-size: 1.6rem;
                line-height: 3rem;
            }
        }
    }
`;
