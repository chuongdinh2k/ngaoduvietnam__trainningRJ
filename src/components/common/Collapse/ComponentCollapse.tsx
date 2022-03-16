import React from "react";
import { Collapse } from "@material-ui/core";
import styled from "styled-components";
import clsx from "clsx";

import { IconDownArrow, IconUpArrow } from "..";

interface IProps {
    title?: string;
    children?: JSX.Element;
}
export const ComponentCollapse = (props: IProps) => {
    const { children, title } = props;
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <StyledComponentCollapse>
            <div className={`wrapperCollapse ${clsx(checked ? "active" : "")}`}>
                <div className="collapse__header " onClick={handleChange}>
                    <p className="collapse__header-title">{title}</p>
                    {!checked ? (
                        <span onClick={handleChange} className="collapse__header-icon">
                            <IconDownArrow />
                        </span>
                    ) : (
                        <span onClick={handleChange} className="collapse__header-icon">
                            <IconUpArrow />
                        </span>
                    )}
                </div>
                <Collapse in={checked}>{children}</Collapse>
            </div>
        </StyledComponentCollapse>
    );
};

const StyledComponentCollapse = styled.div`
    .wrapperCollapse {
        padding: 1.8rem;
        margin-bottom: 2rem;
        border: 1px solid ${(p) => p.theme.colors.gray3};
        border-radius: 1rem;
    }
    .active {
        background-color: #f4f4f4;
        border: none;
    }
    .collapse__header {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        &-title {
            color: ${(p) => p.theme.colors.darkBlue2};
            font-size: 1.8rem;
            font-weight: ${(p) => p.theme.typography.fontWeightBold};
        }
        &-icon {
            padding-top: 0.5rem;
        }
    }
`;
