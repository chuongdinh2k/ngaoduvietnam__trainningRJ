import React from "react";
import { ErrorMessage, Formik } from "formik";
import { useHistory, useParams } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Divider, IconButton, Checkbox } from "@material-ui/core";

import { StyledBookingForm } from ".";
import { ICard, IDataTour, IHotel } from "@types";
import { GroupPeople, AppDatePicker, IconCalendar, AppSelect, Error } from "..";
import { convertCurrency, fomatObjDate, formSchemaBookingForm } from "@utils";
import { useDispatch } from "react-redux";
import { setBookingForm } from "@redux";
import { groupOfPeople } from "@demos";

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
    const dispatch = useDispatch();
    // component state
    const [standardRoom, setStandardRoom] = React.useState<number>(0);
    const [familySuite, setFamilySuite] = React.useState<number>(0);
    const [breakFast, setBreakFast] = React.useState<number>(0);
    const [extraBed, setExtraBed] = React.useState<number>(0);
    const [duration, setDuration] = React.useState<Date>();
    const [checkBreakFast, setCheckBreakFast] = React.useState<boolean>(false);
    const [checkExtraBed, setCheckExtraBed] = React.useState<boolean>(false);
    const handleChangeBreakFast = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckBreakFast(event.target.checked);
    };
    const handleChangeExtraBed = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckExtraBed(event.target.checked);
    };
    const handleOnChange = (e: Date) => {
        setDuration(e);
    };
    // variable component
    const totalTour = dataTour?.price;
    const totalHotel =
        Number(dataHotel?.price) +
        standardRoom * 25 +
        familySuite * 24 +
        breakFast * 20 +
        (checkBreakFast ? breakFast * 20 : 0) +
        (checkExtraBed ? extraBed * 20 : 0);
    return (
        <StyledBookingForm>
            <div className="wrapper">
                <p className="showMoney">
                    from{" "}
                    <span className="showMoney__title">
                        ${dataTour && convertCurrency(dataTour?.price)}
                        {dataHotel && convertCurrency(dataHotel?.price)}
                    </span>
                </p>
                <div className="content">
                    <div className="content__title">
                        {dataTour && (
                            <>
                                <div className="content__left">
                                    <p className="content__text">Duration: </p>
                                    <p className="content__sub">{dataTour?.duration}</p>
                                </div>
                                <div className="content__right">
                                    <p className="content__text">Tour type: </p>
                                    <p className="content__sub">{dataTour?.typeOfTour}</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <Formik
                    initialValues={{
                        group: "",
                    }}
                    validationSchema={formSchemaBookingForm}
                    onSubmit={(values) => {
                        dispatch(
                            setBookingForm({
                                ...values,
                                date: fomatObjDate(duration),
                                standardRoom: standardRoom,
                                familySuite: familySuite,
                                breakFast: breakFast,
                                title: dataTour?.title || dataHotel?.title,
                                location: dataTour?.location || dataHotel?.location,
                                duration: dataTour?.duration || "",
                                typeOfTour: dataTour?.typeOfTour || "",
                                total: totalHotel || totalTour,
                            })
                        );
                        history.push(`/tours/${id}/checkout`);
                    }}
                >
                    {({ handleSubmit, values, handleChange }) => {
                        return (
                            <>
                                <div className="form__group">
                                    <div className="form__group-input">
                                        <AppDatePicker
                                            name="date"
                                            value={duration}
                                            handleChange={(date: Date) => handleOnChange(date)}
                                            placeholder="Enter Departure"
                                            minDate={new Date()}
                                            icon={<IconCalendar />}
                                        />
                                    </div>
                                    <div className="form__group-input form__group-select">
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
                                    {dataHotel && (
                                        <>
                                            <div className="content__option">
                                                <p className="content__option-title">
                                                    Standard Room
                                                </p>
                                                <span>
                                                    <IconButton
                                                        disableRipple
                                                        color="primary"
                                                        component="span"
                                                        onClick={() => {
                                                            standardRoom > 0 &&
                                                                setStandardRoom(standardRoom - 1);
                                                        }}
                                                    >
                                                        <RemoveIcon />
                                                    </IconButton>
                                                    <span>{standardRoom}</span>
                                                    <IconButton
                                                        disableRipple
                                                        color="primary"
                                                        component="span"
                                                        onClick={() =>
                                                            setStandardRoom(standardRoom + 1)
                                                        }
                                                    >
                                                        <AddIcon />
                                                    </IconButton>
                                                </span>
                                                <span className="content__option-price">
                                                    ${convertCurrency(standardRoom * 25)}
                                                </span>
                                            </div>
                                            <div className="content__option">
                                                <span className="content__option-title">
                                                    Family Suite
                                                </span>
                                                <span>
                                                    <IconButton
                                                        disableRipple
                                                        color="primary"
                                                        component="span"
                                                        onClick={() => {
                                                            familySuite > 0 &&
                                                                setFamilySuite(familySuite - 1);
                                                        }}
                                                    >
                                                        <RemoveIcon />
                                                    </IconButton>

                                                    <span>{familySuite}</span>
                                                    <IconButton
                                                        disableRipple
                                                        color="primary"
                                                        component="span"
                                                        onClick={() =>
                                                            setFamilySuite(familySuite + 1)
                                                        }
                                                    >
                                                        <AddIcon />
                                                    </IconButton>
                                                </span>
                                                <span className="content__option-price">
                                                    ${convertCurrency(familySuite * 24)}
                                                </span>
                                            </div>
                                            <Divider />
                                            <p className="content__addOn">Add-on:</p>
                                            <div className="content__option">
                                                <Checkbox
                                                    checked={checkBreakFast}
                                                    disableRipple
                                                    color="secondary"
                                                    onChange={handleChangeBreakFast}
                                                />
                                                <span className="content__option-title">
                                                    Breakfast
                                                </span>
                                                <span>
                                                    <IconButton
                                                        disableRipple
                                                        color="primary"
                                                        component="span"
                                                        onClick={() => {
                                                            breakFast > 0 &&
                                                                setBreakFast(breakFast - 1);
                                                        }}
                                                    >
                                                        <RemoveIcon />
                                                    </IconButton>
                                                    <span>{breakFast}</span>
                                                    <IconButton
                                                        disableRipple
                                                        color="primary"
                                                        component="span"
                                                        onClick={() => setBreakFast(breakFast + 1)}
                                                    >
                                                        <AddIcon />
                                                    </IconButton>
                                                </span>
                                                <span className="content__option-price">
                                                    {" "}
                                                    ${convertCurrency(breakFast * 24)}
                                                </span>
                                            </div>
                                            <div className="content__option">
                                                <Checkbox
                                                    checked={checkExtraBed}
                                                    disableRipple
                                                    onChange={handleChangeExtraBed}
                                                />
                                                <span className="content__option-title">
                                                    Extra Bed
                                                </span>
                                                <span>
                                                    <IconButton
                                                        disableRipple
                                                        color="primary"
                                                        component="span"
                                                        onClick={() => {
                                                            extraBed > 0 &&
                                                                setExtraBed(extraBed - 1);
                                                        }}
                                                    >
                                                        <RemoveIcon />
                                                    </IconButton>
                                                    <span>{extraBed}</span>
                                                    <IconButton
                                                        disableRipple
                                                        color="primary"
                                                        component="span"
                                                        onClick={() => setExtraBed(extraBed + 1)}
                                                    >
                                                        <AddIcon />
                                                    </IconButton>
                                                </span>
                                                <span className="content__option-price">
                                                    {" "}
                                                    ${convertCurrency(extraBed * 24)}
                                                </span>
                                            </div>
                                            <Divider />
                                        </>
                                    )}
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
