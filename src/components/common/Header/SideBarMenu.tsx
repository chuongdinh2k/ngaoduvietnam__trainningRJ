import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { appRoutesEnum, authRoutesEnum } from "@enums";

interface ISideBarRoute {
    path?: string;
    name: string;
    icon?: JSX.Element;
    children?: Array<{
        path: string;
        name: string;
        badge?: {
            value: string;
        };
    }>;
    badge?: {
        value: string;
    };
    permission?: string;
}

const routes: ISideBarRoute[] = [
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
    {
        path: authRoutesEnum.LOGIN,
        name: "Login",
    },
];

interface IMenu {
    hasColor?: boolean;
}

export const ComponentSidebar = (props: IMenu) => {
    // const { color } = props;

    return (
        <StyledMenu hasColor={props.hasColor}>
            {routes.map((route, index) => (
                <li key={index}>
                    <NavLink to={`${route.path}`}>{route.name}</NavLink>
                </li>
            ))}
        </StyledMenu>
    );
};
const StyledMenu = styled.ul<IMenu>`
    display: flex;
    flex-direction: row;
    margin-top: 3rem;
    padding: 0;
    .active {
        color: ${(p) => p.theme.colors.orange};
        font-weight: bold;
    }
    li {
        list-style: none;
        a {
            text-decoration: none;
            margin-right: 6.1rem;
            font-size: ${(p) => p.theme.typography.fontSize}px;
            line-height: 200%;
            font-weight: normal;
            cursor: pointer;
            font-family: ${(p) => p.theme.typography.fontFamily};
            color: ${(p) => (p.hasColor ? `#1C1C1E` : p.theme.colors.pureWhite)};
            @media (max-width: 992px) {
                margin-right: 1.5rem;
            }
        }
        a:hover {
            color: ${(p) => p.theme.colors.orange};
        }
    }
    @media (max-width: 768px) {
        display: none;
    }
`;
