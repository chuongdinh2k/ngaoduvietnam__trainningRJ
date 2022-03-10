import React from "react";
import { Popover } from "@material-ui/core";

import { StyledWrapperTitleComponent, AppPagination, IconDownArrow } from "..";
import { stars, moneyRange, reviewScore } from "@demos";
import { ComponentHotelsFilter, ComponentListHotels } from ".";
import clsx from "clsx";
import { selectHotel, useAppSelector } from "@redux";

export const ComponentHotelsContent = () => {
    // props state
    const hotels = useAppSelector(selectHotel);
    // component prop
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    return (
        <StyledWrapperTitleComponent>
            <div className="wrapper">
                <div className="top">
                    <h3 className="top__title hotel">Hotels</h3>
                    <div className="top__filter">
                        <div className="top__filter-text">
                            <span className="top__filter-highlight">Sort By:</span> Price
                        </div>
                        <span className="top__filter-icon">
                            <IconDownArrow color="#4F4F4F" />
                        </span>
                        <button
                            className={clsx("btn", anchorEl ? "activeBtn" : "")}
                            aria-describedby={id}
                            onClick={handleClick}
                        >
                            Filter
                        </button>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                        >
                            <ComponentHotelsFilter
                                reviewScore={reviewScore}
                                stars={stars}
                                moneyRange={moneyRange}
                            />
                        </Popover>
                    </div>
                </div>
                <ComponentListHotels data={hotels.dataHotelsList} />
            </div>
            <AppPagination totalPage={hotels.dataHotelsList?.length} />
        </StyledWrapperTitleComponent>
    );
};
