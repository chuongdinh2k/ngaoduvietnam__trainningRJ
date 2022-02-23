import styled from "styled-components";

import { IReviews } from "@types";
import { ComponentShowRating, ComponentCommentBox, ComponentUserComment } from ".";

interface IProps {
    reviews?: IReviews;
}
export const ComponentTabReview = (props: IProps) => {
    const { reviews } = props;
    return (
        <StyledComponentTabReview>
            <ComponentShowRating
                number={reviews?.number}
                average={reviews?.average}
                listStars={reviews?.listStars}
            />
            <ComponentCommentBox />
            {reviews?.listComments?.map((item, index) => (
                <div key={index}>
                    <ComponentUserComment comment={item} />
                </div>
            ))}
        </StyledComponentTabReview>
    );
};
const StyledComponentTabReview = styled.div`
    padding-top: 3rem;
`;
