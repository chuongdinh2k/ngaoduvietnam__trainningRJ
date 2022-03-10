import { Formik } from "formik";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import React from "react";

import { ICard, IDataTour, IHotel } from "@types";
import { IconLocation, GroupPeople, IconCalendar, AppInput } from "..";
import { convertCurrency } from "@utils";

interface IProps {
    data?: ICard;
    dataTour?: IDataTour;
    dataHotel?: IHotel;
}

export const BookingForm = (props: IProps) => {
    const { dataTour, dataHotel } = props;
    // hook
    const { id } = useParams<{ id: string }>();
    const history = useHistory();

    // variable component
    const totalTour = dataTour?.price;
    const totalHotel = dataHotel?.price;
    return (
        <StyledBookingForm>
            <div className="wrapper">
                {dataTour && (
                    <p className="showMoney">
                        from{" "}
                        <span className="showMoney__title">
                            ${convertCurrency(dataTour?.price)}
                        </span>
                    </p>
                )}
                <div className="content">
                    <div className="content__title">
                        {dataTour && (
                            <>
                                <div className="content__left">
                                    <p className="content__text">Duration</p>
                                    <p className="content__sub">{dataTour?.duration}</p>
                                </div>
                                <div className="content__right">
                                    <p className="content__text">Tour type:</p>
                                    <p className="content__sub">{dataTour?.typeOfTour}</p>
                                </div>
                            </>
                        )}
                    </div>
                    {dataHotel && (
                        <>
                            <p className="content__name">{dataHotel?.title}</p>
                            <p className="content__location">
                                <span>
                                    <IconLocation />
                                </span>
                                <span className="content__location-text">
                                    {dataHotel?.location}
                                </span>
                            </p>
                        </>
                    )}
                </div>
                <Formik
                    initialValues={{
                        date: "",
                        group: "",
                    }}
                    onSubmit={(values) => {
                        history.push(`/tours/${id}/checkout`);
                    }}
                >
                    {({ handleSubmit, values, errors, handleChange, handleBlur }) => {
                        return (
                            <>
                                <div className="form__group">
                                    <div className="form__group-input">
                                        <AppInput
                                            name="date"
                                            handleChange={handleChange("date")}
                                            handleBlur={handleBlur("date")}
                                            placeholder="Enter duration"
                                            icon={<IconCalendar />}
                                            error={errors.date}
                                            value={values.date}
                                        />
                                    </div>
                                    <div className="form__group-input">
                                        <AppInput
                                            name="group"
                                            handleChange={handleChange("group")}
                                            handleBlur={handleBlur("group")}
                                            placeholder="Enter group of people"
                                            icon={<GroupPeople color="#FF7B42" />}
                                            error={errors.group}
                                            value={values.group}
                                        />
                                    </div>
                                </div>
                                <div className="total">
                                    <span>Total</span>
                                    {dataHotel && <span>${convertCurrency(totalHotel)}</span>}
                                    {dataTour && <span>${convertCurrency(totalTour)}</span>}
                                </div>
                                <div className="wrapperBtn">
                                    <button className="btn" onClick={() => handleSubmit()}>
                                        Book Now
                                    </button>
                                </div>
                            </>
                        );
                    }}
                </Formik>
            </div>
        </StyledBookingForm>
    );
};
const StyledBookingForm = styled.div`
    .wrapper {
        background-color: ${(p) => p.theme.colors.backgroundGray};
    }
    .showMoney {
        padding: 3rem;
        border-bottom: 1px solid ${(p) => p.theme.colors.gray2};
        font-size: ${(p) => p.theme.typography.fontSize}px;
        &__title {
            font-size: 2rem;
            color: ${(p) => p.theme.colors.gray};
            font-weight: ${(p) => p.theme.typography.fontWeightMedium};
            padding-left: 0.8rem;
        }
    }
    .content {
        padding: 2.3rem 3rem 0 3rem;
        &__title {
            display: flex;
            flex-direction: row;
        }
        &__left {
            padding-right: 6.4rem;
        }
        &__text {
            color: ${(p) => p.theme.colors.gray1};
            font-weight: 400;
            font-size: ${(p) => p.theme.typography.fontSize}px;
        }
        &__sub {
            font-size: ${(p) => p.theme.typography.fontSize}px;
            font-weight: ${(p) => p.theme.typography.fontWeightMedium};
        }
        &__name {
            font-size: 1.8rem;
            font-weight: 500;
            line-height: 2.7rem;
        }
        &__location {
            &-text {
                font-size: ${(p) => p.theme.typography.fontSize}px;
                color: ${(p) => p.theme.colors.gray1};
                padding-left: 1rem;
            }
        }
    }
    .total {
        padding: 0 3rem;
        display: flex;
        justify-content: space-between;
        font-size: 2rem;
        font-weight: 400;
    }
    .wrapperBtn {
        padding: 2rem 3rem 3rem 3rem;
        .btn {
            width: 100%;
            padding: 2.1rem;
            background-color: ${(p) => p.theme.colors.orange};
            color: ${(p) => p.theme.colors.pureWhite};
            border-color: transparent;
            cursor: pointer;
            &:hover {
                background-color: ${(p) => p.theme.colors.darkOrange};
            }
        }
    }
    .form__group {
        padding: 1.7rem 3rem 0 3rem;
        &-input {
            margin-bottom: 2rem;
        }
    }
`;
