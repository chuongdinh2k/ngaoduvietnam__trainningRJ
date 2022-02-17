import { Breadcrumbs, Link } from "@material-ui/core";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { IconDot } from "..";
import { theme } from "@styles";
import { concatUrl } from "@utils";

export const ComponentBreadscrumb = () => {
    const history = useHistory();
    //WHAT: get url then put params to array;
    const array = concatUrl(window.location.pathname);
    function handleClick(value: string) {
        history.push(`/${value}`);
    }

    return (
        <StyledCustomBreadscrumb>
            <Breadcrumbs
                separator={<IconDot width="4px" height="4px" color={theme.colors.gray3} />}
                aria-label="breadcrumb"
            >
                {array.map((item, index: number) => {
                    return (
                        <Link key={index} onClick={() => handleClick(item)}>
                            {item === "" ? "Home" : item}
                        </Link>
                    );
                })}
            </Breadcrumbs>
        </StyledCustomBreadscrumb>
    );
};
const StyledCustomBreadscrumb = styled.div`
    padding-top: 2.2rem;
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
