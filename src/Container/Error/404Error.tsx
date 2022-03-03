import { useHistory } from "react-router-dom";
import styled from "styled-components";

import pageNotFound from "@assets/pageNotFound.jpg";
import { appRoutesEnum } from "@enums";

export const Page404Error = () => {
    const history = useHistory();
    const handleGoBack = () => {
        history.goBack();
    };
    const handleGoHomePage = () => {
        history.push(appRoutesEnum.HOME);
    };
    return (
        <StyledPage404Error>
            <div className="wrapper">
                <div className="wrapper__content">
                    <h4 className="title">PAGE NOT FOUND!!!</h4>
                    <div className="wrapper__img">
                        <img className="image" src={pageNotFound} alt="page not found" />
                    </div>
                    <div className="wrapper__btnGroup">
                        <div className="btn back" onClick={handleGoBack}>
                            Go To Back
                        </div>
                        <div className="btn next" onClick={handleGoHomePage}>
                            Go To Home
                        </div>
                    </div>
                </div>
            </div>
        </StyledPage404Error>
    );
};
const StyledPage404Error = styled.div`
    background-color: ${(p) => p.theme.colors.pureWhite};
    display: flex;
    justify-content: center;
    .wrapper {
        max-width: 1440px;
        .title {
            font-size: 4.5rem;
            color: #ef6d6d;
            text-align: center;
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                font-size: 2.5rem;
            }
        }
        background-color: ${(p) => p.theme.colors.pureWhite};
        width: 100%;
        height: 100vh;
        position: relative;
        &__content {
            position: absolute;
            width: 50%;
            height: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                top: 40%;
                width: 85%;
            }
        }
        &__btnGroup {
            display: flex;
            justify-content: space-between;
            .btn {
                padding: 1.5rem 3rem;
                box-shadow: none;
                font-size: 1.6rem;
                color: ${(p) => p.theme.colors.gray4};
                text-transform: capitalize;
                font-weight: ${(p) => p.theme.typography.fontWeightMedium};
                border-radius: 16px;
                transition: transform 250ms;
                cursor: pointer;
                @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                    padding: 0.8rem 1rem;
                    font-size: 1.2rem;
                }
                &:hover {
                    color: ${(p) => p.theme.colors.pureWhite};
                    transform: translateY(-10px);
                }
            }
            .back {
                background-color: #495371;
            }
            .next {
                background-color: #007dfe;
            }
        }
        &__img {
            width: 100%;
            height: 100%;
            .image {
                width: 100%;
                height: 100%;
            }
        }
    }
`;
