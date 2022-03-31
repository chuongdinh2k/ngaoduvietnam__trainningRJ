import React, { ChangeEvent, FocusEvent } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { DateRange } from "@mui/lab/DateRangePicker/RangeTypes";

import { resetForm, selectHotel, useAppSelector } from "@redux";
import {
    AppInput,
    AppSelect,
    AppDatePicker,
    AppRangeDatePicker,
    GroupPeople,
    IconCalendar,
    IconLocation,
    Error,
} from "..";
import { convertCurrency } from "@utils";
import { StyledComponentCheckOutTotal } from ".";
import { ErrorMessage } from "formik";
import { groupOfPeople } from "@demos";

interface IValues {
    startDate?: Date;
    endDate?: string;
    group?: string;
    promoCode?: string;
    dateRange?: DateRange<unknown>;
}
interface IProps {
    handleChange: {
        (date: ChangeEvent<any>): void;
        <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
            ? void
            : (e: string | ChangeEvent<any>) => void;
    };
    handleBlur: {
        (e: FocusEvent<any, Element>): void;
        <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
    };
    handleOnChangeDate: (date: DateRange<unknown>) => void;
    handleChangeStartDate: (date: Date) => void;
    values: IValues;
    inputDateRange?: DateRange<unknown> | undefined;
    inputStartDate?: Date | undefined;
}
export const ComponentCheckOutTotal = (props: IProps) => {
    const {
        handleChange,
        handleBlur,
        values,
        inputDateRange,
        handleChangeStartDate,
        handleOnChangeDate,
        inputStartDate,
    } = props;
    React.useEffect(() => {
        return () => {
            dispatch(resetForm());
        };
    }, []);
    // hooks
    const dispatch = useDispatch();
    const history = useHistory();
    // redux store
    const hotel = useAppSelector(selectHotel);
    // WHAT: go back if hotel is empty
    if (Object.keys(hotel.bookingHotel).length === 0) {
        history.goBack();
    }
    return (
        <StyledComponentCheckOutTotal>
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
                        <div className="form__group-input dateInput">
                            {values.startDate && (
                                <AppDatePicker
                                    name="date"
                                    value={inputStartDate}
                                    handleChange={(date: Date) => handleChangeStartDate(date)}
                                    placeholder="Enter Departure"
                                    minDate={new Date()}
                                    icon={<IconCalendar />}
                                />
                            )}
                            {values.endDate && (
                                <p className="dateInput__showDate">- {values.endDate}</p>
                            )}
                            {/* WHAT: if startDate is undefined then show date range */}
                            {!values.startDate && inputDateRange && (
                                <div className="form__group-input dateRange">
                                    <AppRangeDatePicker
                                        icon={<IconCalendar />}
                                        handleChange={handleOnChangeDate}
                                        value={inputDateRange}
                                        name="dateRange"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="form__group-input">
                            <AppSelect
                                name="group"
                                icon={<GroupPeople color="#FF7B42" />}
                                value={values.group}
                                placeholder="Enter group of people"
                                options={groupOfPeople.data}
                                handleChange={handleChange("group")}
                            />
                            <ErrorMessage name="group" component={Error} />
                        </div>
                        {hotel.bookingHotel?.standardRoom ? (
                            <div className="form__group-option">
                                <p>
                                    <span className="highlight">
                                        {hotel.bookingHotel?.standardRoom}x
                                    </span>
                                    Standard room
                                </p>
                                <span>{hotel.bookingHotel?.standardRoom * 25}</span>
                            </div>
                        ) : (
                            ""
                        )}
                        {hotel.bookingHotel?.familySuite ? (
                            <div className="form__group-option">
                                <p>
                                    <span className="highlight">
                                        {hotel.bookingHotel?.familySuite}x
                                    </span>
                                    Family suite
                                </p>
                                <span>{hotel.bookingHotel?.familySuite * 24}</span>
                            </div>
                        ) : (
                            ""
                        )}
                        {hotel.bookingHotel?.breakFast ? (
                            <div className="form__group-option">
                                <p>
                                    <span className="highlight">
                                        {hotel.bookingHotel?.breakFast}x
                                    </span>
                                    Break Fast
                                </p>
                                <span>{hotel.bookingHotel?.breakFast * 24}</span>
                            </div>
                        ) : (
                            ""
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
        </StyledComponentCheckOutTotal>
    );
};
