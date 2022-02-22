import { StyledComponentTab } from ".";
import { IconDot } from "..";

interface additionalInfo {
    name?: string;
    list?: Array<string>;
}
interface IProps {
    additionalInfo?: additionalInfo;
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
                <div className="collapse"></div>
            </div>
        </StyledComponentTab>
    );
};
