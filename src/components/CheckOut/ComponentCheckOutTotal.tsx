import React, { ChangeEvent, FocusEvent } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { resetForm, selectHotel, useAppSelector } from "@redux";
import { AppInput, GroupPeople, IconCalendar, IconLocation } from "..";
import { convertCurrency } from "@utils";

interface IValues {
    date?: string;
    group?: string;
    promoCode?: string;
}
interface IProps {
    handleChange: {
        (e: ChangeEvent<any>): void;
        <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
            ? void
            : (e: string | ChangeEvent<any>) => void;
    };
    handleBlur: {
        (e: FocusEvent<any, Element>): void;
        <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
    };
    values: IValues;
}
export const ComponentCheckOutTotal = (props: IProps) => {
    const { handleChange, handleBlur } = props;
    // hooks
    const dispatch = useDispatch();
    const history = useHistory();
    // redux store
    const hotel = useAppSelector(selectHotel);
    // WHAT: go back if hotel is empty
    if (Object.keys(hotel.bookingHotel).length === 0) {
        history.goBack();
    }
    React.useEffect(() => {
        return () => {
            dispatch(resetForm());
        };
    }, []);

    return (
        <StyledComponentCheckOutContent>
            <div className="wrapperTotal">
                <div className="content">
                    <h3 className="content__title">{hotel.bookingHotel?.title}</h3>
                    <div className="content__location">
                        <span className="content__location-icon">
                            <IconLocation />
                        </span>
                        <p className="content__location-title">{hotel.bookingHotel?.location}</p>
                    </div>
                    <div className="content__type">
                        {hotel.bookingHotel?.duration && (
                            <div className="content__type-left">
                                <p className="content__type-subText">Duration:</p>
                                <p className="content__type-text">{hotel.bookingHotel?.duration}</p>
                            </div>
                        )}
                        {hotel?.bookingHotel?.typeOfTour && (
                            <div className="content__type-left">
                                <p className="content__type-subText">Tour Type:</p>
                                <p className="content__type-text">
                                    {hotel?.bookingHotel?.typeOfTour}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="form__group">
                        <div className="form__group-input">
                            <AppInput
                                name="date"
                                handleChange={handleChange("date")}
                                handleBlur={handleBlur("date")}
                                placeholder="Enter duration"
                                icon={<IconCalendar />}
                                value={props.values.date}
                            />
                        </div>
                        <div className="form__group-input">
                            <AppInput
                                name="group"
                                handleChange={handleChange("group")}
                                handleBlur={handleBlur("group")}
                                placeholder="Enter group of people"
                                icon={<GroupPeople color="#FF7B42" />}
                                // error={errors.group}
                                value={props.values.group}
                            />
                        </div>
                        {/* <div className="form__group-option">
                            <p>
                                <span className="highlight">1x</span>Standard room
                            </p>
                            <span>$120.00</span>
                        </div> */}
                        {hotel?.bookingHotel?.standardRoom &&
                            hotel?.bookingHotel?.standardRoom > 0 && (
                                <div className="form__group-option">
                                    <p>
                                        <span className="highlight">
                                            {hotel?.bookingHotel?.standardRoom}x
                                        </span>
                                        Standard room
                                    </p>
                                    <span>$120.00</span>
                                </div>
                            )}
                        <div className="form__group-promo">
                            <div className="form__group-inputPromo ">
                                <AppInput
                                    name="promoCode"
                                    handleChange={handleChange("promoCode")}
                                    handleBlur={handleBlur("promoCode")}
                                    placeholder="Promo Code"
                                    value={props.values.promoCode}
                                />
                            </div>
                            <div className="form__group-btn">Apply</div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <span>Total</span>
                    <span className="bottom__money">
                        ${convertCurrency(hotel.bookingHotel?.total)}
                    </span>
                </div>
            </div>
        </StyledComponentCheckOutContent>
    );
};

const StyledComponentCheckOutContent = styled.div`
    .highlight {
        color: ${(p) => p.theme.colors.orange};
    }
    .wrapperTotal {
        width: 100%;
        background-color: ${(p) => p.theme.colors.backgroundGray};
    }
    .content,
    .bottom {
        padding-left: 3rem;
        padding-right: 3.7rem;
    }
    .content {
        padding-top: 4rem;
        padding-bottom: 1rem;
        &__title {
            font-size: 1.8rem;
            color: ${(p) => p.theme.colors.darkBlack};
        }
        &__location {
            display: flex;
            font-size: 1.4rem;
            &-title {
                padding-left: 1.4rem;
                color: ${(p) => p.theme.colors.gray1};
            }
        }
        &__type {
            display: flex;
            &-left {
                margin-right: 3rem;
            }
            &-left,
            &-right {
                flex: 50%;
            }
            &-text {
                font-size: 1.4rem;
                font-weight: ${(p) => p.theme.typography.fontWeightMedium};
            }
            &-subText {
                font-size: 1.4rem;
                color: ${(p) => p.theme.colors.gray1};
            }
        }
    }
    .form__group {
        &-input {
            margin-top: 2rem;
        }
        &-option {
            display: flex;
            justify-content: space-between;
            padding-top: 2rem;
            font-size: 1.6rem;
            font-weight: ${(p) => p.theme.typography.fontWeightBold};
        }
        .MuiInputBase-root {
            padding-left: 1.8rem;
        }
        &-promo {
            margin-top: 2rem;
            width: 100%;
            display: flex;
            justify-content: space-between;
            .muiInputbase-root {
                padding-left: 0;
            }
        }
        &-inputPromo {
            width: 80%;
        }
        &-btn {
            font-size: 1.4rem;
            margin-left: 1rem;
            padding: 1.2rem 3.2rem 1.6rem 3.2rem;
            color: ${(p) => p.theme.colors.orange};
            font-weight: ${(p) => p.theme.typography.fontWeightMedium};
            border: 1px solid ${(p) => p.theme.colors.orange};
            cursor: pointer;
            &:hover {
                background-color: ${(p) => p.theme.colors.orange};
                color: ${(p) => p.theme.colors.pureWhite};
                transition: all 0.5s ease-in-out;
            }
        }
    }
    .bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        color: ${(p) => p.theme.colors.pureWhite};
        background-color: ${(p) => p.theme.colors.darkBlack};
        padding-top: 3.4rem;
        padding-bottom: 3.4rem;
        font-size: 2rem;
        &__money {
            font-weight: ${(p) => p.theme.typography.fontWeightBold};
        }
    }
`;
