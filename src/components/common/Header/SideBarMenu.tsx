import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { appRoutesEnum, authRoutesEnum } from "@enums";
import { LOGOUT, PAGE_LOGIN } from "@configs";
import { logout, selectAuth, useAppSelector } from "@redux";

export interface ISideBarRoute {
    path?: string;
    name: string;
}
export const navRoutes: ISideBarRoute[] = [
    {
        path: appRoutesEnum.HOME,
        name: "Home",
    },
    {
        path: appRoutesEnum.ABOUT,
        name: "About",
    },
    {
        path: appRoutesEnum.TOURS,
        name: "Tours",
    },
    {
        path: appRoutesEnum.HOTELS,
        name: "Hotels",
    },
    {
        path: appRoutesEnum.CONTACT,
        name: "Contact",
    },
];

interface IMenu {
    hasColor?: boolean;
}

export const ComponentSidebar = (props: IMenu) => {
    const auth = useAppSelector(selectAuth);
    const dispatch = useDispatch();
    return (
        <StyledMenu hasColor={props.hasColor}>
            <ul className="menu">
                {navRoutes.map((route, index) => (
                    <li key={index}>
                        <NavLink to={`${route.path}`} exact>
                            {route.name}
                        </NavLink>
                    </li>
                ))}
                <li>
                    {!auth?.tokenInfoAuth ? (
                        <NavLink to={`${authRoutesEnum.LOGIN}`} exact>
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
                </li>
            </ul>
        </StyledMenu>
    );
};
const StyledMenu = styled.div<IMenu>`
    /* display: flex;
    flex-direction: row; */
    display: flex;
    justify-content: flex-end;
    margin-top: 3rem;
    padding: 0;
    .active {
        color: ${(p) => p.theme.colors.orange} !important;
        font-weight: bold;
    }
    .menu {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        li {
            list-style: none;
            a {
                text-decoration: none;
                margin-left: 6.1rem;
                font-size: ${(p) => p.theme.typography.fontSize}px;
                line-height: 200%;
                font-weight: normal;
                cursor: pointer;
                font-family: ${(p) => p.theme.typography.fontFamily};
                color: ${(p) => (p.hasColor ? `#1C1C1E` : p.theme.colors.pureWhite)};
                @media (min-width: 2000px) {
                    font-size: 4rem;
                }
                @media (max-width: 992px) {
                    margin-right: 1.7rem;
                }
            }
            a:hover {
                color: ${(p) => p.theme.colors.orange};
            }
        }
    }
    @media (min-width: 2000px) {
        justify-content: flex-end;
    }
    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
        display: none;
    }
`;
