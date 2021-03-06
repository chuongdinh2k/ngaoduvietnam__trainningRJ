import { theme } from "@styles";
import { IIcon } from "@types";
import { StyledIcon } from ".";

export const IconLocation = (props: IIcon) => {
    return (
        <StyledIcon size={props.size}>
            <svg
                width={props.width ? props.width : "18"}
                height={props.height ? props.height : "20"}
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M17 9C17 13.4183 13.4183 17 9 19C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                    stroke={props.color ? props.color : theme.colors.orange}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M12 9C12 10.6569 10.6569 12 9 12C7.34315 12 6 10.6569 6 9C6 7.34315 7.34315 6 9 6C10.6569 6 12 7.34315 12 9Z"
                    stroke={props.color ? props.color : theme.colors.orange}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </StyledIcon>
    );
};
