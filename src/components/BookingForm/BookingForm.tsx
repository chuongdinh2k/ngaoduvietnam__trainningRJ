import React from "react";
import { Formik } from "formik";
import { useHistory, useParams } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Divider, IconButton } from "@material-ui/core";

import { StyledBookingForm } from ".";
import { ICard, IDataTour, IHotel } from "@types";
import { GroupPeople, AppDatePicker, AppSelect } from "..";
import { convertCurrency } from "@utils";
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
    const [duration, setDuration] = React.useState<string>("");
    const handleOnChange = (e: any) => {
        setDuration(e);
    };
    // variable component
    const totalTour = dataTour?.price;
    const totalHotel =
        Number(dataHotel?.price) + standardRoom * 25 + familySuite * 24 + breakFast * 20;

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
                </div>
                <Formik
                    initialValues={{
                        group: "",
                    }}
                    onSubmit={(values) => {
                        dispatch(
                            setBookingForm({
                                ...values,
                                date: duration,
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
                                            handleChange={(date: any) => handleOnChange(date)}
                                            placeholder="Enter Departure"
                                        />
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
                                                        onClick={() =>
                                                            setStandardRoom(standardRoom + 1)
                                                        }
                                                    >
                                                        <AddIcon />
                                                    </IconButton>
                                                    <span>{standardRoom}</span>
                                                    <IconButton
                                                        disableRipple
                                                        color="primary"
                                                        component="span"
                                                        onClick={() => {
                                                            standardRoom > 0
                                                                ? setStandardRoom(standardRoom - 1)
                                                                : standardRoom;
                                                        }}
                                                    >
                                                        <RemoveIcon />
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
                                                        onClick={() =>
                                                            setFamilySuite(familySuite + 1)
                                                        }
                                                    >
                                                        <AddIcon />
                                                    </IconButton>
                                                    <span>{familySuite}</span>
                                                    <IconButton
                                                        disableRipple
                                                        color="primary"
                                                        component="span"
                                                        onClick={() => {
                                                            familySuite > 0
                                                                ? setFamilySuite(familySuite - 1)
                                                                : familySuite;
                                                        }}
                                                    >
                                                        <RemoveIcon />
                                                    </IconButton>
                                                </span>
                                                <span className="content__option-price">
                                                    {" "}
                                                    ${convertCurrency(familySuite * 24)}
                                                </span>
                                            </div>
                                            <Divider />
                                            <p className="content__addOn">Add-on:</p>
                                            <div className="content__option">
                                                <span className="content__option-title">
                                                    Breakfast
                                                </span>
                                                <span>
                                                    <IconButton
                                                        disableRipple
                                                        color="primary"
                                                        component="span"
                                                        onClick={() => setBreakFast(breakFast + 1)}
                                                    >
                                                        <AddIcon />
                                                    </IconButton>
                                                    <span>{breakFast}</span>
                                                    <IconButton
                                                        disableRipple
                                                        color="primary"
                                                        component="span"
                                                        onClick={() => {
                                                            breakFast > 0
                                                                ? setBreakFast(breakFast - 1)
                                                                : breakFast;
                                                        }}
                                                    >
                                                        <RemoveIcon />
                                                    </IconButton>
                                                </span>
                                                <span className="content__option-price">
                                                    {" "}
                                                    ${convertCurrency(breakFast * 24)}
                                                </span>
                                            </div>
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
