import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { routes } from "@configs";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
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
            <List>
                {routes.map((route, index) => (
                    <ListItem button key={index}>
                        <ListItemText>
                            <NavLink to={`${route.path}`}>{route.name}</NavLink>
                        </ListItemText>
                    </ListItem>
                ))}
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
