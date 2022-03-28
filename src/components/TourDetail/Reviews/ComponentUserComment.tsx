import { Avatar } from "@material-ui/core";
import styled from "styled-components";

import { ComponentsRenderStars } from ".";
import { IComment, IHotelComment } from "@types";
import { IconDot } from "@components";
import { fomatToShowDate, getFirstLetter } from "@utils";

interface IProps {
    commentTour?: IComment;
    commentHotel?: IHotelComment;
}

export const ComponentUserComment = (props: IProps) => {
    const { commentTour, commentHotel } = props;
    return (
        <StyledComponentUserComment>
            <div className="wrapperUserComment">
                <div className="user__info">
                    {commentTour && (
                        <Avatar src={commentTour?.user?.picture}>
                            {getFirstLetter(commentTour?.user?.lastName)}
                        </Avatar>
                    )}
                    {commentHotel && (
                        <Avatar src={commentHotel?.user?.picture}>
                            {getFirstLetter(commentHotel?.user?.lastName)}
                        </Avatar>
                    )}
                    <div className="user__info-content">
                        {commentTour && <ComponentsRenderStars small number={5} />}
                        {commentHotel && (
                            <p className="user__info-rating">
                                {`Rating `}
                                {commentHotel.rating}
                                <span className="user__info-dot">
                                    <IconDot color="#C4C4C4" />
                                </span>
                                {commentHotel.status}
                            </p>
                        )}
                        <p className="user__info-title">
                            {commentTour?.title} {commentHotel?.title}
                        </p>
                        <p className="user__info-time">
                            {commentTour?.user?.lastName && (
                                <span>{commentTour?.user?.lastName}</span>
                            )}
                            {commentHotel?.user?.lastName && (
                                <span>{commentHotel?.user?.lastName}</span>
                            )}

                            <span className="user__info-spacing">-</span>
                            <span className="user__info-date">
                                {commentTour && fomatToShowDate(commentTour?.updatedAt as string)}
                                {commentHotel && fomatToShowDate(commentHotel?.updatedAt as string)}
                            </span>
                        </p>
                    </div>
                </div>
                <p className="comment__content">
                    {commentTour?.comment}
                    {commentHotel?.comment}
                </p>
            </div>
        </StyledComponentUserComment>
    );
};
const StyledComponentUserComment = styled.div`
    .wrapperUserComment {
        border-bottom: 1px solid #d9dadc;
        padding: 3rem 0;
    }
    .user__info {
        .MuiAvatar-root {
            font-size: 3.5rem;
            width: 8.3rem;
            height: 8.3rem;
        }
        display: flex;
        &-content {
            padding-left: 2.5rem;
        }
        &-title {
            font-size: 1.6rem;
            font-weight: 600;
        }
        &-time {
            font-size: 1.6rem;
            color: #4f4f4f;
        }
        &-rating {
            font-size: 1.8rem;
            font-weight: ${(p) => p.theme.typography.fontWeightBold};
            color: ${(p) => p.theme.colors.orange};
        }
        &-dot {
            padding: 0 0.5rem;
        }
        &-spacing {
            padding: 0 1rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            &-title,
            &-time {
                font-size: 1.4rem;
            }
        }
    }
    .comment__content {
        padding-top: 1rem;
        width: 90%;
        line-height: 150%;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            font-size: 1.4rem;
        }
    }
`;
