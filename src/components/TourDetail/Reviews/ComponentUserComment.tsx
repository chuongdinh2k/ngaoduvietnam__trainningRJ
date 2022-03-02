import { Avatar } from "@material-ui/core";
import styled from "styled-components";

import { ComponentsRenderStars } from ".";
import { IComment, IHotelComment } from "@types";
import { IconDot } from "@components";

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
                    {commentTour && <Avatar src={commentTour?.avatar} />}
                    {commentHotel && <Avatar src={commentHotel?.avatar} />}
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
                            <span>
                                {commentTour?.username}
                                {commentHotel?.username}
                            </span>
                            -
                            <span>
                                {commentTour?.time}
                                {commentHotel?.time}
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
    }
    .comment__content {
        padding-top: 1rem;
        width: 90%;
        font-size: 1.6rem;
        line-height: 150%;
    }
`;
