import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import CancelIcon from "@material-ui/icons/Cancel";

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
                <span className="icon__cancel">
                    <CancelIcon
                        fontSize="large"
                        onClick={() => handleToggleDrawswer(anchor, false)}
                    />
                </span>
                <List className={classes.wrapList}>
                    <ListItem className="list__item">
                        <a className="logo">
                            <span className="hightLight">Ngao</span>duvietnam
                        </a>
                    </ListItem>
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
                                    <span> {PAGE_LOGIN}</span>
                                    <span></span>
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
    position: relative;
    .icon__cancel {
        position: absolute;
        left: 0;
        z-index: 99;
        .MuiSvgIcon-root {
            width: 2em;
            height: 1.5em;
        }
    }
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
                padding-left: 2rem;
                font-size: 2rem;
                text-align: left;
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
            .logo {
                text-align: center;
                font-style: italic;
                font-size: 2rem;
            }
            .hightLight {
                color: ${(p) => p.theme.colors.orange};
                font-weight: 700;
            }
        }
    }
`;
