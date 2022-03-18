import { IIcon } from "@types";
import { StyledIcon } from ".";

export const IconCalendar = (props: IIcon) => {
    const { width = "18", height = "20", color = "#FF7B42", size } = props;
    return (
        <StyledIcon size={size}>
            <svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M17 8V5C17 3.89543 16.1046 3 15 3H3C1.89543 3 1 3.89543 1 5V17C1 18.1046 1.89543 19 3 19H6M12 1V5M6 1V5M1 9H6M13 13.2V14.8875L13.9 15.9M17.5 15C17.5 17.4853 15.4853 19.5 13 19.5C10.5147 19.5 8.5 17.4853 8.5 15C8.5 12.5147 10.5147 10.5 13 10.5C15.4853 10.5 17.5 12.5147 17.5 15Z"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </StyledIcon>
    );
};
