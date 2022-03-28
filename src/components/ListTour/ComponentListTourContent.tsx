import React, { ChangeEvent } from "react";
import { Popover } from "@material-ui/core";
import { useAppSelector, selectTour } from "@redux";

import { StyledWrapperTitleComponent, ComponentLoader, AppPagination } from "..";
import { ComponentListTourLists, ComponentListTourFilter } from ".";
import { Duration, TypeOfTour, moneyRange } from "@demos";

interface IProps {
    currentPage?: number;
    handlePaginationChange?: (event: ChangeEvent<any>, value: number) => void;
}
export const ComponentListTourContent = (props: IProps) => {
    const { currentPage, handlePaginationChange } = props;
    // redux state
    const tours = useAppSelector(selectTour);
    // component prop
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [listFilter, setListFilter] = React.useState(tours.dataToursList);
    React.useEffect(() => {
        setListFilter(tours.dataToursList);
    }, [tours.dataToursList]);
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
                            setListFilter={setListFilter}
                            handleClose={handleClose}
                        />
                    </Popover>
                </div>
                {tours.loading ? <ComponentLoader /> : <ComponentListTourLists data={listFilter} />}
                {listFilter?.length > 0 && (
                    <AppPagination
                        totalPage={tours?.totalPage}
                        showPerpage
                        currentPage={currentPage}
                        handleChange={handlePaginationChange}
                    />
                )}
            </div>
        </StyledWrapperTitleComponent>
    );
};
