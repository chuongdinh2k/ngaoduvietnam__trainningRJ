import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { ISideBarRoute, navRoutes } from "..";
import { authRoutesEnum } from "@enums";
import { PAGE_LOGIN, LOGOUT } from "@configs";
import { logout, selectAuth, useAppSelector } from "@redux";

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
    // redux state
    const auth = useAppSelector(selectAuth);
    // props states
    const { isOpen, anchor = "left", handleToggleDrawswer } = props;
    const classes = useStyles();

    const dispatch = useDispatch();
    const list = (anchor: Anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom",
            })}
            role="presentation"
        >
            <StyledListMenu>
                <List className={classes.wrapList}>
                    {navRoutes.map((route: ISideBarRoute, index: number) => (
                        <ListItem button key={index} className="list">
                            <ListItemText className="list__item">
                                <NavLink className="list__item-text" to={`${route.path}`} exact>
                                    {route.name}
                                </NavLink>
                            </ListItemText>
                        </ListItem>
                    ))}
                    <ListItem button className="list">
                        <ListItemText className="list__item">
                            {!auth?.tokenInfoAuth ? (
                                <NavLink className="list__item-text" to={`${authRoutesEnum.LOGIN}`}>
                                    {PAGE_LOGIN}
                                </NavLink>
                            ) : (
                                <a
                                    onClick={() => {
                                        dispatch(logout());
                                    }}
                                >
                                    {LOGOUT}
                                </a>
                            )}
                        </ListItemText>
                    </ListItem>
                </List>
            </StyledListMenu>
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
const StyledListMenu = styled.div`
    .list {
        padding: 0;
        &__item {
            width: 100%;
            &__text {
                width: 100%;
            }
            a {
                display: block;
                width: 25rem;
                padding: 0.5rem 0;
                padding-left: 1rem;
                font-size: 2.6rem;
                text-decoration: none;
                color: ${(p) => p.theme.colors.darkBlack};
            }
            a:hover {
                color: ${(p) => p.theme.colors.orange};
            }
            .active {
                color: ${(p) => p.theme.colors.pureWhite}!important;
                background-color: ${(p) => p.theme.colors.orange};
            }
        }
    }
`;
