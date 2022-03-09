import { Button } from "@material-ui/core";
import styled from "styled-components";

import { IPrivacy } from "@types";
import { IconDownload } from "..";

interface IProps {
    privacyData: IPrivacy;
}
export const ComponentPrivacyContent = (props: IProps) => {
    const { privacyData } = props;
    console.log(privacyData);
    return (
        <StyledComponentPrivacyContent>
            <div className="wrapperPolicy">
                <div className="top">
                    <h3 className="top__title">{privacyData?.title}</h3>
                    <p className="top__updatedTime">Last Updated: {privacyData?.lastUpdated}</p>
                    <Button
                        variant="contained"
                        color="primary"
                        className="top__btn"
                        startIcon={<IconDownload />}
                    >
                        Delete
                    </Button>
                    {privacyData?.subText?.map((paragraph, index) => (
                        <p className="top__text" key={index}>
                            {" "}
                            {paragraph}
                        </p>
                    ))}
                    <ol className="top__list">
                        {privacyData?.listQuestions?.map((question, index) => (
                            <li key={index}>
                                <span className="top__list-number">{index + 1}.</span>
                                <a className="top__list-text">
                                    {index + 1}. {question}
                                </a>
                            </li>
                        ))}
                    </ol>
                </div>
                <div className="content">
                    {privacyData?.listPolicies?.map((policy, index) => (
                        <div className="content__first">
                            <h5 className="content__title">
                                {index + 1}. {policy.name}
                            </h5>
                            <p className="content__subTitle">{policy.subText}</p>
                            <div className="content__list">
                                {policy?.answers?.map((p, index) => (
                                    <div key={index}>
                                        <p className="title">{p.title}</p>
                                        {p?.list?.map((i, index) => (
                                            <p className="text" key={index}>
                                                {i}
                                            </p>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </StyledComponentPrivacyContent>
    );
};
const StyledComponentPrivacyContent = styled.div`
    .top {
        &__title {
            font-size: 3.6rem;
            font-weight: ${(p) => p.theme.typography.fontWeightBold};
        }
        &__updatedTime {
            font-family: DM Sans;
            font-style: Medium;
            font-size: 16px;
            line-height: 230%;
            vertical-align: top;
        }
        &__btn {
            padding: 1.3rem 0;
            width: 26rem;
            text-transform: capitalize;
            color: ${(p) => p.theme.colors.pureWhite};
            box-shadow: none;
            border: none;
        }
        &__text {
            font-family: "DM Sans";
            font-style: Italic;
            font-size: 16px;
            line-height: 134%;
            vertical-align: top;
            padding-top: 2.6rem;
        }
        &__list {
            font-size: 1.6rem;
            padding-top: 2.4rem;
            li {
                list-style-position: inside;
                list-style: none;
                display: flex;
            }
            &-text {
                font-family: "DM Sans";
                font-style: "Regular";
                font-size: 16px;
                line-height: 134%;
                vertical-align: top;
                padding-left: 2rem;
            }
            &-number {
                color: #000000;
                width: 1rem;
                font-weight: ${(p) => p.theme.typography.fontWeightMedium};
            }
        }
    }
    .content {
        &__title {
            padding: 2rem 0;
            font-weight: ${(p) => p.theme.typography.fontWeightBold};
            font-size: 2.8rem;
        }
        &__subTitle {
            font-family: DM Sans;
            font-style: Regular;
            font-size: 16px;
            line-height: 134%;
            vertical-align: top;
        }
        &__list {
            .title {
                padding-top: 2rem;
                font-size: 2rem;
                font-weight: ${(p) => p.theme.typography.fontWeightBold};
                line-height: 184%;
                color: ${(p) => p.theme.colors.darkBlack};
            }
            .text {
                font-size: 1.6rem;
                line-height: 134%;
                padding-top: 2rem;
            }
        }
    }
`;
