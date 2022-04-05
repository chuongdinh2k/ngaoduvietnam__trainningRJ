import { IIcon } from "@types";
import { StyledIcon } from ".";

export const IconDot = (props: IIcon) => {
    const { width = 8, height = 8, color = "#FF7B42", size } = props;
    return (
        <StyledIcon size={size}>
            <svg
                width={width}
                height={height}
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="4" cy="4" r="4" fill={color} />
            </svg>
        </StyledIcon>
    );
};
