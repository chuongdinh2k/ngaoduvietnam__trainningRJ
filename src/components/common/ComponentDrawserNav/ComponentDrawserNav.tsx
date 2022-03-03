import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { ISideBarRoute, navRoutes } from "..";
import { authRoutesEnum } from "@enums";
import { PAGE_LOGIN } from "@configs";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
    },
    wrapList: {},
    list__item: {},
    list__text: {
        "& .MuiTypography-body1": {
            fontSize: "1.4rem",
            textDecoration: "none",
        },
    },
});

type Anchor = "top" | "left" | "bottom" | "right";
interface IProps {
    isOpen?: boolean;
    anchor?: Anchor;
    handleToggleDrawswer(anchor?: Anchor | null, isOpen?: boolean | undefined): void;
}
export const ComponentDrawserNav = (props: IProps) => {
    // props states
    const { isOpen, anchor = "left", handleToggleDrawswer } = props;
    const classes = useStyles();
    const list = (anchor: Anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom",
            })}
            role="presentation"
        >
            <List className={classes.wrapList}>
                {navRoutes.map((route: ISideBarRoute, index: number) => (
                    <ListItem button key={index} className={classes.list__item}>
                        <ListItemText className={classes.list__text}>
                            <NavLink to={`${route.path}`}>{route.name}</NavLink>
                        </ListItemText>
                    </ListItem>
                ))}
                <ListItem button className={classes.list__item}>
                    <ListItemText className={classes.list__text}>
                        <NavLink className="text" to={`${authRoutesEnum.LOGIN}`}>
                            {PAGE_LOGIN}
                        </NavLink>
                    </ListItemText>
                </ListItem>
            </List>
        </div>
    );

    return (
        <StyledComponentDrawserNav>
            <div className="drawser">
                <Drawer
                    anchor={anchor}
                    open={isOpen}
                    onClose={() => handleToggleDrawswer(anchor, false)}
                >
                    {list(anchor)}
                </Drawer>
            </div>
        </StyledComponentDrawserNav>
    );
};
const StyledComponentDrawserNav = styled.div`
    .active {
        color: ${(p) => p.theme.colors.orange}!important;
    }
`;
