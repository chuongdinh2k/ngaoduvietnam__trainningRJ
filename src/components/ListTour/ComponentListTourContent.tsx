import React from "react";
import { makeStyles, createStyles, Theme, Popover } from "@material-ui/core";

import { StyledWrapperTitleComponent, AppPagination } from "..";
import { ComponentListTourLists, ComponentListTourFilter } from ".";
import { ICard } from "@types";
import { Duration, TypeOfTour, moneyRange } from "@demos";

interface IProps {
    dataListsTour?: Array<ICard>;
}
export const ComponentListTourContent = (props: IProps) => {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            typography: {
                padding: theme.spacing(2),
            },
        })
    );
    // props state
    const { dataListsTour } = props;

    // component prop
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const classes = useStyles();

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
                    <h3>
                        Attractive tour and
                        <br /> interesting experiences
                    </h3>
                    <button className="btn" aria-describedby={id} onClick={handleClick}>
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
                        <ComponentListTourFilter
                            duration={Duration}
                            typeOfTour={TypeOfTour}
                            moneyRange={moneyRange}
                        />
                    </Popover>
                </div>
                <ComponentListTourLists data={dataListsTour} />
            </div>
            <AppPagination totalPage={5} />
        </StyledWrapperTitleComponent>
    );
};
