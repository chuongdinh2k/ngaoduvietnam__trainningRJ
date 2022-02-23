import { Avatar } from "@material-ui/core";
import styled from "styled-components";

import { ComponentsRenderStars } from ".";
import { IComment } from "@types";

interface IProps {
    comment?: IComment;
}
export const ComponentUserComment = (props: IProps) => {
    const { comment } = props;
    return (
        <StyledComponentUserComment>
            <div className="wrapperUserComment">
                <div className="user__info">
                    <Avatar src={comment?.avatar} />
                    <div className="user__info-content">
                        <ComponentsRenderStars small number={5} />
                        <p className="user__info-title">{comment?.title}</p>
                        <p className="user__info-time">
                            <span>{comment?.username}</span>-<span>{comment?.time}</span>
                        </p>
                    </div>
                </div>
                <p className="comment__content">{comment?.comment}</p>
            </div>
        </StyledComponentUserComment>
    );
};
const StyledComponentUserComment = styled.div`
    .wrapperUserComment {
        border-top: 1px solid #d9dadc;
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
    }
    .comment__content {
        padding-top: 1rem;
        width: 90%;
        font-size: 1.6rem;
        line-height: 150%;
    }
`;
