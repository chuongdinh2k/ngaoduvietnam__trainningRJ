import styled from "styled-components";
import React, { useState } from "react";

import { IComment, IHotelComment, IHotel, IDataTour } from "@types";
import { ComponentShowRating, ComponentCommentBox, ComponentUserComment } from ".";
import { selectAuth, useAppSelector } from "@redux";
import { useHistory } from "react-router-dom";
import { authRoutesEnum } from "@enums";
import { convertRating } from "@utils";
import { ICommentValue } from "@api";

interface IProps {
    dataTour?: IDataTour;
    tourComment?: IComment[];
    hotelComment?: IHotelComment[];
    dataHotel?: IHotel;
    handleSubmitReviewTour?: (values: ICommentValue) => void;
    handleSubmitReviewHotel?: (values: ICommentValue) => void;
}
export const ComponentTabReview = (props: IProps) => {
    const {
        dataTour,
        handleSubmitReviewHotel,
        tourComment,
        dataHotel,
        hotelComment,
        handleSubmitReviewTour,
    } = props;

    // redux
    const auth = useAppSelector(selectAuth);
    // hook
    const history = useHistory();
    // component state
    const [showComment, setShowComment] = useState<boolean>(false);
    return (
        <StyledComponentTabReview>
            {/* tour review element */}
            {dataTour && (
                <ComponentShowRating
                    number={dataTour?.numberReviews}
                    average={dataTour?.average}
                    listStars={dataTour?.listStars}
                />
            )}
            {dataTour && (
                <>
                    {auth?.tokenInfoAuth ? (
                        <ComponentCommentBox handleSubmit={handleSubmitReviewTour} />
                    ) : (
                        <span
                            className="btnLogin"
                            onClick={() => history.push(authRoutesEnum.LOGIN)}
                        >
                            Login to comment
                        </span>
                    )}
                    {tourComment?.map((comment, index) => (
                        <div key={index}>
                            <ComponentUserComment commentTour={comment} />
                        </div>
                    ))}
                </>
            )}

            {/* hotel review element */}
            {hotelComment && (
                <>
                    <div className="rating">
                        <div className="rating__point">
                            <span className="rating__point-text">
                                {convertRating(dataHotel?.rating)}
                            </span>
                        </div>
                        <div className="rating__info">
                            <h5 className="rating__info-title">Wonderful</h5>
                            <p className="rating__info-text">
                                Based on{" "}
                                <span className="highlight-black">
                                    {dataHotel?.numberReviews} reviews
                                </span>
                            </p>
                            <div
                                className="rating__info-btn"
                                onClick={() => setShowComment(!showComment)}
                            >
                                Write a review
                            </div>
                        </div>
                    </div>
                    {showComment && <ComponentCommentBox handleSubmit={handleSubmitReviewHotel} />}
                </>
            )}
            {hotelComment &&
                hotelComment?.map((comment, index) => (
                    <div key={index}>
                        <ComponentUserComment commentHotel={comment} />
                    </div>
                ))}
        </StyledComponentTabReview>
    );
};
const StyledComponentTabReview = styled.div`
    padding-top: 3rem;
    .btnLogin {
        padding: 1rem 2rem;
        color: ${(p) => p.theme.colors.orange};
        border: 1px solid ${(p) => p.theme.colors.orange};
        font-size: 1.6rem;
        text-transform: capitalize;
        transition: 250ms;
        cursor: pointer;
        &:hover {
            color: ${(p) => p.theme.colors.pureWhite};
            background-color: ${(p) => p.theme.colors.orange};
        }
    }
    .rating {
        padding-bottom: 4rem;
        display: flex;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding-bottom: 2rem;
        }
        &__point {
            padding: 3.3rem;
            background-color: ${(p) => p.theme.colors.orange};
            &-text {
                font-size: 5.6rem;
                color: ${(p) => p.theme.colors.pureWhite};
                font-weight: 600;
                @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                    font-size: 2.6rem;
                }
            }
        }
        &__info {
            padding-left: 2.8rem;
            &-title {
                font-size: 5.6rem;
                font-weight: ${(p) => p.theme.colors.darkBlack};
                @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                    font-size: 2.6rem;
                }
            }
            &-text {
                font-size: 1.6rem;
                color: #4f4f4f;
                padding-bottom: 2rem;
                @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                    font-size: 1.2rem;
                }
            }
            &-btn {
                text-align: center;
                padding: 1.1rem 3.5rem;
                font-size: 1.6rem;
                color: ${(p) => p.theme.colors.orange};
                font-weight: ${(p) => p.theme.typography.fontWeightBold};
                border: 1px solid ${(p) => p.theme.colors.orange};
                cursor: pointer;
                transition: all 0.2s ease-in-out;
                &:hover {
                    background-color: ${(p) => p.theme.colors.orange};
                    color: ${(p) => p.theme.colors.pureWhite};
                }
                @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                    padding: 0.6rem 2rem;
                    font-size: 12px;
                }
            }
        }
    }
    .highlight-black {
        color: ${(p) => p.theme.colors.darkBlack};
        font-weight: 500;
    }
`;
