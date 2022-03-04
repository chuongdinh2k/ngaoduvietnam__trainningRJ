import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

import logo from "@assets/logo.png";
import logoBlack from "@assets/black-logo.png";
import styled from "styled-components";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";

import { ComponentSidebar } from "./SideBarMenu";
import { DEFAULT_SCREEN } from "@configs";
import { theme } from "@styles";
import { ComponentDrawserNav } from "..";

interface IStyledHeader {
    backgroundColor?: string;
    hasColor: boolean;
}
interface IProps {
    hasColor: boolean;
}
type Anchor = "top" | "left" | "bottom" | "right";
export const Header = (props: IProps) => {
    // props
    // component state
    const [backgroundColor, setBackgroundColor] = useState<string>("transparent");
    const [hasColor, setColor] = useState<boolean>(props.hasColor);
    // component state
    const [location, setLocation] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        // remove event listener when component will unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // WHAT: change backgroundColor Header when scroll
    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setBackgroundColor(`${theme.colors.gray1}`);
            setColor(false);
        } else {
            setBackgroundColor("transparent");
            props.hasColor ? setColor(true) : setColor(false);
        }
    };

    const handleToggleDrawswer = (anchor: Anchor, open: boolean): void => {
        setLocation({ ...location, [anchor]: open });
    };
    return (
        <StyledHeader backgroundColor={backgroundColor} hasColor={hasColor}>
            <div className="wrapHeader">
                <Grid container>
                    <Grid item xs={6} md={6}>
                        {hasColor ? <img src={logoBlack} /> : <img src={logo} />}
                    </Grid>
                    <Grid xs={6} md={6}>
                        <ComponentSidebar hasColor={hasColor} />
                        <div className="mobile__NavLogo">
                            <span onClick={() => handleToggleDrawswer("right", true)}>
                                <ViewHeadlineIcon className="logo" />
                            </span>
                            <ComponentDrawserNav
                                handleToggleDrawswer={handleToggleDrawswer}
                                anchor={"right"}
                                isOpen={location["right"]}
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </StyledHeader>
    );
};
const StyledHeader = styled.div<IStyledHeader>`
    position: relative;
    padding: 2rem 16.5rem;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 999;
    width: 100%;
    border-bottom: ${(p) => (p?.hasColor ? `1px solid #C5C7C9` : "transparent")};
    background-color: ${(p) => p?.backgroundColor};
    opacity: 0.8;
    color: ${(p) => (p?.hasColor ? `#1C1C1E` : `#ffffff`)};
    .wrapHeader {
        width: 100%;
        /* max-width: ${DEFAULT_SCREEN}; */
    }
    .mobile__NavLogo {
        display: none;
        position: absolute;
        right: 2rem;
        top: 4rem;
    }
    .logo {
        color: ${(p) => (p?.hasColor ? "#1C1C1E" : "#ffffff")};
        height: 4rem;
        width: 4rem;
    }
    @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
        padding: 0 8rem;
    }
    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
        padding: 0 2rem;
        .mobile__NavLogo {
            display: block;
        }
    }
`;
