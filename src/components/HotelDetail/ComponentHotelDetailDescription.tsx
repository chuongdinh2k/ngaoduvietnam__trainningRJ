import styled from "styled-components";

import { IDescription } from "@types";

interface IProps {
    description?: IDescription;
}
export const ComponentHotelDetailDescription = (props: IProps) => {
    const { description } = props;
    return (
        <StyledComponenetDes>
            <p>Over view</p>
        </StyledComponenetDes>
    );
};
const StyledComponenetDes = styled.div``;
