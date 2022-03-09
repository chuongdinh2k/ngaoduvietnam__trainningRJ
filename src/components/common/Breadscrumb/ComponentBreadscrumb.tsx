import { Breadcrumbs, Link } from "@material-ui/core";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";

import { IconDot } from "..";
import { theme } from "@styles";
import { concatUrl, splitUrl } from "@utils";

interface IProps {
    id?: string;
    title?: string;
}
export const ComponentBreadscrumb = (props: IProps) => {
    const history = useHistory();
    //WHAT: get url then put params to array;
    const url = window.location.pathname;
    const { id } = useParams<{ id: string }>();
    const array = concatUrl(url);
    // WHAT: display title of detail instead of id
    if (id && props.id === id) {
        array[array.length - 1].name = props.title;
    }
    function handleClick(value: string) {
        history.push(`${splitUrl(url, value)?.join("/")}`);
    }
    return (
        <StyledCustomBreadscrumb>
            <Breadcrumbs
                separator={<IconDot width="4px" height="4px" color={theme.colors.gray3} />}
                aria-label="breadcrumb"
            >
                {array.map((item, index: number) => {
                    return (
                        <Link key={index} onClick={() => handleClick(item?.value)}>
                            {item?.name === "" ? "Home" : item?.name}
                        </Link>
                    );
                })}
            </Breadcrumbs>
        </StyledCustomBreadscrumb>
    );
};
const StyledCustomBreadscrumb = styled.div`
    padding-top: 4rem;
    margin-bottom: 4rem;
    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
        margin-bottom: 2rem;
    }
    .MuiBreadcrumbs-separator {
        margin: 0 2.4rem;
    }
    .MuiTypography-root {
        color: ${(p) => p.theme.colors.gray};
        text-transform: capitalize;
    }
    .MuiTypography-body1 {
        color: ${(p) => p.theme.colors.gray};
        font-size: ${(p) => p.theme.typography.fontSize}px;
    }
`;
