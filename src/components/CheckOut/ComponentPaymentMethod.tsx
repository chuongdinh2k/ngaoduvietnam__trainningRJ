import { ChangeEvent } from "react";
import styled from "styled-components";

import { AppCheckBox } from "..";
import { paymentMethod } from "@demos";

interface IProps {
    handleChange: {
        (e: ChangeEvent<any>): void;
        <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
            ? void
            : (e: string | ChangeEvent<any>) => void;
    };
    payment?: Array<string>;
}

export const ComponentPaymentMethod = (props: IProps) => {
    const { handleChange, payment } = props;
    return (
        <StyledComponentPaymentMethod>
            <div className="wrapperPayment">
                <h4 className="title">Payment Method</h4>
                <p className="subTile">Pay securely—we use SSL encryption to keep your data safe</p>
                <AppCheckBox
                    handleChange={handleChange("payment")}
                    name="payment"
                    values={payment}
                    options={paymentMethod.options}
                />
                <ul className="list">
                    {paymentMethod.listPolicy.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </StyledComponentPaymentMethod>
    );
};
const StyledComponentPaymentMethod = styled.div`
    .wrapperPayment {
    }
    .title {
        font-size: 2.4rem;
        font-weight: ${(p) => p.theme.typography.fontWeightMedium};
    }
    .subTile {
        color: #4f4f4f;
        font-size: 1.6rem;
    }
    .list {
        padding-top: 3rem;
        list-style-position: inside;
        font-size: 1.4rem;
        line-height: 2.2rem;
    }
`;
