import styled from "styled-components";

import { ISelectRoom } from "@types";
import { ComponentHotelRoom } from ".";

interface IProps {
    selectRooms?: Array<ISelectRoom>;
}
export const ComponentListRooms = (props: IProps) => {
    const { selectRooms } = props;
    return (
        <StyledComponentSelectedRoom>
            <div className="wrapperSelectedRoom">
                <h3 className="title">Rooms</h3>
                {selectRooms?.map((room) => (
                    <div key={room.id}>
                        {" "}
                        <ComponentHotelRoom selectRoom={room} />
                    </div>
                ))}
            </div>
        </StyledComponentSelectedRoom>
    );
};
const StyledComponentSelectedRoom = styled.div`
    .wrapperSelectedRoom {
        padding-top: 2.3rem;
        padding-bottom: 7rem;
    }
    .title {
        font-size: 2rem;
        font-weight: 600;
        color: ${(p) => p.theme.colors.darkBlack};
    }
`;
