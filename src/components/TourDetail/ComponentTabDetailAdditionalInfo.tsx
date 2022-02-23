import { IAdditionalInfo } from "@types";
import { ComponentExpendFaqs, StyledComponentTab } from ".";
import { ComponentCollapse, IconDot } from "..";

interface IProps {
    additionalInfo?: IAdditionalInfo;
}
export const ComponentTabDetailAdditionalInfo = (props: IProps) => {
    const { additionalInfo } = props;
    return (
        <StyledComponentTab>
            <div className="wrapper">
                <div className="content additionalInfo">
                    <ul className="content__wrapperlist">
                        {additionalInfo &&
                            additionalInfo.list?.map((item, index) => (
                                <li key={index}>
                                    <a>
                                        <span className="content__icon">
                                            <IconDot color="#4F4F4F" />
                                        </span>
                                        <span className="content__text">{item}</span>
                                    </a>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="collapse">
                    <h3 className="content__title">{additionalInfo?.faqs?.name}</h3>
                    {additionalInfo?.faqs?.list?.map((item) => (
                        <ComponentCollapse title={item?.question}>
                            <ComponentExpendFaqs faq={item} />
                        </ComponentCollapse>
                    ))}
                </div>
            </div>
        </StyledComponentTab>
    );
};
