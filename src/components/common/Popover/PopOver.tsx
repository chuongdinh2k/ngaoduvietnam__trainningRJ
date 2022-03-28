import React from "react";
import { List, ListItem, Divider } from "@material-ui/core";
import styled from "styled-components";
import { ComponentLoader } from "..";
import { ERROR_404_DATA } from "@configs";
import { IDataTour } from "@types";

interface IStyled {
    open: boolean;
}
interface IProps {
    open: boolean;
    dataInputBounce?: Array<IDataTour>;
    loadingDebounce?: boolean;
    onChangeDebounce?: (e: string | undefined) => void;
}

export const ComponentPopOver = (props: IProps) => {
    const { open, dataInputBounce, loadingDebounce, onChangeDebounce } = props;

    return (
        <StyledComponentPopover open={open}>
            {loadingDebounce ? (
                <ComponentLoader />
            ) : (
                <List component="nav">
                    {dataInputBounce && dataInputBounce?.length > 0 ? (
                        dataInputBounce?.map((item: IDataTour, index: number) => (
                            <div key={index}>
                                {/* <Divider /> */}
                                <ListItem
                                    button
                                    onClick={() => {
                                        onChangeDebounce?.(item?.location);
                                    }}
                                >
                                    {item.location}
                                </ListItem>
                                <Divider />
                            </div>
                        ))
                    ) : (
                        <p className="popup__error">{ERROR_404_DATA}</p>
                    )}
                </List>
            )}
        </StyledComponentPopover>
    );
};
const StyledComponentPopover = styled.div<IStyled>`
    position: absolute;
    width: 100%;
    height: 20rem;
    max-height: 20rem;
    background-color: white;
    z-index: 5;
    display: ${(p) => (p.open === true ? "block" : "none")};
    background-color: ${(p) => p.theme.colors.backgroundGray};
    color: ${(p) => p.theme.colors.darlBlack};
    overflow-y: auto;
    .popup {
        &__error {
            text-align: center;
            color: ${(p) => p.theme.colors.red};
            font-size: 1.4rem;
        }
    }
`;
