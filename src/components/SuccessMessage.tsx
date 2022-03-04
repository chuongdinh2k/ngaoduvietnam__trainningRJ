import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { appRoutesEnum } from "@enums";

export const SuccessMessage = () => {
    const history = useHistory();
    return (
        <StyledSuccessMessage>
            <div className="wrapper">
                <h3 className="title">Thank You</h3>
                <p className="subTitle">
                    Your order has been successfully ordered. Order information has been emailed to
                    you. Thank you!
                </p>
                <Button
                    onClick={() => history.push(appRoutesEnum.HOME)}
                    variant="contained"
                    color="primary"
                    className="btn"
                >
                    Back to our Home
                </Button>
            </div>
        </StyledSuccessMessage>
    );
};
const StyledSuccessMessage = styled.div`
    .wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 11rem 14rem;
        background-color: ${(p) => p.theme.colors.pureWhite};
        text-align: center;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            width: 100%;
        }
    }
    .title {
        font-size: 6.4rem;
        font-weight: ${(p) => p.theme.typography.fontWeightBold};
        color: ${(p) => p.theme.colors.orange};
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            font-size: 3rem;
        }
    }
    .subTitle {
        font-size: 1.8rem;
    }
    .btn {
        margin-top: 6rem;
        font-size: 1.6rem;
        padding: 1.5rem 7rem;
        color: ${(p) => p.theme.colors.pureWhite};
        border: none;
        border-radius: 0;
        box-shadow: none;
        font-weight: bold;
        text-transform: capitalize;
    }
`;
