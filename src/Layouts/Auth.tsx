import styled from "styled-components";
// import { useLocation } from "react-router-dom";
import { Grid, Hidden } from "@material-ui/core";

import background from "@assets/auth__background.png";

interface IAppLayout {
    children?: string | JSX.Element | JSX.Element[];
}

export const LayoutAuth = (props: IAppLayout) => {
    return (
        <StyledAuth>
            <div className="wrapAuth">
                <Grid container>
                    <Grid item xs={12} md={8} lg={7} justifyContent="center">
                        {props.children}
                    </Grid>
                    <Grid item xs={12} md={8} lg={5}>
                        <Hidden mdDown>
                            <div className="background">
                                <img
                                    className="background__img"
                                    src={background}
                                    alt="background-login"
                                />
                            </div>
                        </Hidden>
                    </Grid>
                </Grid>
            </div>
        </StyledAuth>
    );
};
export const StyledAuth = styled.div`
    .wrapAuth {
        height: 100vh;
        width: 100%;
    }
    .background {
        height: 100vh;
        width: 100%;
        &__img {
            height: 100%;
            width: 100%;
        }
    }
`;
