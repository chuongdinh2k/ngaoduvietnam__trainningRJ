import React from "react";
import { makeStyles, MenuItem, Popover, Select } from "@material-ui/core";

import { StyledWrapperTitleComponent } from "..";
import { stars, moneyRange, reviewScore } from "@demos";
import { ComponentHotelsFilter, ComponentListHotels } from ".";
import clsx from "clsx";
import { selectHotel, useAppSelector } from "@redux";
import { sortItem } from "@utils";

const useStyles = makeStyles((theme) => ({
    root: {},
    select: {
        marginLeft: "1rem",
        marginRight: "2rem",
        [theme.breakpoints.down("xs")]: {
            marginRight: "1rem",
        },
        "& .MuiSelect-select.MuiSelect-select": {
            fontSize: "2rem",
            [theme.breakpoints.down("xs")]: {
                fontSize: "1.4rem",
            },
        },
        "& .MuiSelect-icon": {
            top: "calc(-10%)",
            fontSize: "3rem",
            fontWeight: 700,
        },
        "& .MuiListItem-root": {
            fontSsize: "2rem",
        },
    },
    selected: {
        backgroundColor: "#ffffff",
    },
}));
export const ComponentHotelsContent = () => {
    const classes = useStyles();
    const hotels = useAppSelector(selectHotel);
    //component state
    const [selected, setSelected] = React.useState("price");
    const [listFilter, setListFilter] = React.useState(hotels.dataHotelsList);
    React.useEffect(() => {
        setListFilter(hotels.dataHotelsList);
    }, [hotels.dataHotelsList]);
    // component prop
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelected(event.target.value as string);
        setListFilter(sortItem(hotels.dataHotelsList, event.target.value));
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
                            <span className="top__filter-highlight">Sort By:</span>{" "}
                            <Select
                                className={classes.select}
                                disableUnderline
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selected}
                                onChange={handleChange}
                            >
                                <MenuItem classes={{ selected: classes.selected }} value="price">
                                    Price
                                </MenuItem>
                                <MenuItem classes={{ selected: classes.selected }} value="star">
                                    Star
                                </MenuItem>
                                <MenuItem
                                    classes={{ selected: classes.selected }}
                                    value="reviewScore"
                                >
                                    Review Score
                                </MenuItem>
                            </Select>
                        </div>
                        {/* <span className="top__filter-icon">
                            <IconDownArrow color="#4F4F4F" />
                        </span> */}
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
                                setListFilter={setListFilter}
                                handleClose={handleClose}
                            />
                        </Popover>
                    </div>
                </div>
                <ComponentListHotels data={listFilter} />
            </div>
        </StyledWrapperTitleComponent>
    );
};
