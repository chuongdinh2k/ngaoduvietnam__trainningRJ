import { IQuestion } from "@types";
import { StyledExpendComponent } from ".";

interface IProps {
    faq?: IQuestion;
}
export const ComponentExpendFaqs = (props: IProps) => {
    const { faq } = props;
    return (
        <StyledExpendComponent>
            <div className="collapse__content">
                <div className="content__text">
                    <p className="content__text-sub">{faq?.answer}</p>
                </div>
            </div>
        </StyledExpendComponent>
    );
};
