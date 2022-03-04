import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

import room1 from "@assets/room1.png";
import { GroupPeople, IconBed, IconPicture, IconSquare, PopupHotelSelectRoom } from "..";
import { ISelectRoom } from "@types";
import clsx from "clsx";
import { convertCurrency } from "@utils";

interface IProps {
    selectRoom?: ISelectRoom;
}
export const ComponentHotelRoom = (props: IProps) => {
    const { selectRoom } = props;

    // state component
    const [selected, setSelected] = React.useState<boolean>(false);
    // component states
    const [isOpen, setIsOpen] = React.useState(false);
    const handleSelectRoom = () => {
        setSelected(!selected);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    const handleOpen = () => {
        setIsOpen(true);
    };
    return (
        <StyledComponentHotelRoom>
            <PopupHotelSelectRoom
                isOpen={isOpen}
                handleClose={handleClose}
                selectRoom={selectRoom}
                handleSelectRoom={handleSelectRoom}
                isSelected={selected}
            />
            <div className="wrapperRoom">
                <div className="wrapper__image" onClick={handleOpen}>
                    <span className="wrapper__image-icon">
                        <IconPicture />
                    </span>
                    <img className="wrapper__image-img" src={room1} alt="hotel room" />
                </div>
                <div className="content">
                    <h4 className="content__title">{selectRoom?.title}</h4>
                    <div className="content__type">
                        <div className="content__dimension">
                            <span className="content__icon">
                                <IconSquare />
                            </span>
                            <span className="content__text">{selectRoom?.type?.dimension}</span>
                        </div>
                        <div className="content__equipment">
                            <span className="content__icon">
                                <IconBed />
                            </span>
                            <span className="content__text">{selectRoom?.type?.equipment}</span>
                        </div>
                        <div className="content__group">
                            <span className="content__icon">
                                <GroupPeople color="#4F4F4F" />
                            </span>
                            <span className="content__text">{selectRoom?.type?.group}</span>
                        </div>
                    </div>
                    <ul className="content__list">
                        {selectRoom?.advanced?.map((item) => (
                            <li key={item}>
                                <a>{item}</a>
                            </li>
                        ))}
                        <li className="content__list-more">
                            <a>15 more</a>
                        </li>
                    </ul>
                    <div className="wrapperBottom">
                        <Button
                            onClick={handleSelectRoom}
                            disabled={selectRoom?.roomAvailable === 0 ? true : false}
                            className={clsx(
                                "content__btn",
                                selectRoom?.roomAvailable === 0
                                    ? "outDated"
                                    : selected
                                    ? "active"
                                    : ""
                            )}
                        >
                            {selectRoom?.roomAvailable === 0
                                ? "Out of Room"
                                : selected
                                ? "Selected Room"
                                : "Select Room"}
                        </Button>
                        <div className="content__price">
                            <span className="content__price-highlight">
                                ${convertCurrency(selectRoom?.price)}
                            </span>
                            /night
                        </div>
                    </div>
                </div>
            </div>
        </StyledComponentHotelRoom>
    );
};
const StyledComponentHotelRoom = styled.div`
    .wrapperRoom {
        display: flex;
        margin-top: 1.8rem;
        background-color: #f8f8f8;
    }
    .wrapper__image {
        position: relative;
        cursor: pointer;
        &-icon {
            top: 0.6rem;
            left: 0.6rem;
            position: absolute;
            padding: 0.5rem 0.5rem 0.2rem 0.5rem;
            border-radius: 80%;
            background-color: ${(p) => p.theme.colors.darkBlack};
            opacity: 0.7;
        }
        &-img {
            width: 100%;
            height: 100%;
        }
    }
    .content {
        width: 70%;
        padding-top: 1rem;
        padding-left: 3rem;
        &__title {
            font-size: 1.8rem;
            color: ${(p) => p.theme.colors.darkBlack};
            font-weight: ${(p) => p.theme.typography.fontWeightBold};
        }
        &__type {
            display: flex;
            justify-content: space-between;
            font-size: 1.6rem;
            font-weight: 500;
            color: #4f4f4f;
            padding: 1rem 0;
        }
        &__dimension,
        &__equipment,
        &__group {
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                display: flex;
                flex-direction: column;
            }
        }
        &__list {
            display: flex;
            flex-direction: row;
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                display: none;
            }
            li {
                list-style-position: inside;
                color: ${(p) => p.theme.colors.gray2};
                padding-right: 0.5rem;
                font-size: 1.2rem;
            }
            &-more {
                color: ${(p) => p.theme.colors.darkBlue} !important;
            }
        }
        &__icon {
            padding-top: 0.5rem;
            padding-right: 0.5rem;
        }
        &__text {
            padding-bottom: 0.5rem;
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                font-size: 1.2rem;
            }
        }
        .active {
            background-color: ${(p) => p.theme.colors.orange};
            color: ${(p) => p.theme.colors.pureWhite};
        }
        .outDated {
            background-color: #223143;
            color: ${(p) => p.theme.colors.pureWhite};
            border-color: #223143;
        }
        &__price {
            padding-top: 4rem;
            color: #888888;
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
            }
            &-highlight {
                font-size: 1.8rem;
                font-weight: 700;
                color: ${(p) => p.theme.colors.red};
                font-family: "Poppins";
            }
        }
        &__btn {
            font-size: 1.4rem;
            margin-top: 1.4rem;
            text-align: center;
            width: 17rem;
            font-weight: ${(p) => p.theme.typography.fontWeightBold};
            padding: 1.5rem 0 1rem 0;
            cursor: pointer;
            color: ${(p) => p.theme.colors.orange};
            border: 1px solid ${(p) => p.theme.colors.orange};
            transition: transform 250ms;
            &:hover {
                transform: translateY(-10px);
            }
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                margin-top: 0;
                width: 100%;
            }
        }
        .wrapperBottom {
            display: flex;
            justify-content: space-between;
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                flex-direction: column-reverse;
            }
        }
    }
`;
