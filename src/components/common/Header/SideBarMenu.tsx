import { appRoutesEnum, authRoutesEnum } from "@enums";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
    color?: string;
}

interface IProps {
    sidebarIcons?: boolean;
    collapsed?: boolean;
}

export const ComponentSidebar = ({ sidebarIcons, collapsed }: IProps) => {
    const menu = (
        <>
            <StyledMenu>
                {routes.map((route, index) => (
                    <li key={index}>
                        <NavLink to={`${route.path}`}>{route.name}</NavLink>
                    </li>
                ))}
            </StyledMenu>
        </>
    );
    return <>{menu}</>;
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
            color: ${(p) => (p.color ? p.color : p.theme.colors.pureWhite)};
        }
        a:hover {
            color: ${(p) => p.theme.colors.orange};
        }
    }
    @media (max-width: 768px) {
        display: none;
    }
`;
