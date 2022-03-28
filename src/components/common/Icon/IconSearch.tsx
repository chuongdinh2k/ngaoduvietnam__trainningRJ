import { theme } from "@styles";
import { IIcon } from "@types";
import { StyledIcon } from ".";

export const IconSearch = (props: IIcon) => {
    const { width = "17", height = "17", color = theme.colors.pureWhite } = props;
    return (
        <StyledIcon size={props.size}>
            <>
                <svg
                    width={width}
                    height={height}
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M17.4697 18.5304C17.7626 18.8233 18.2374 18.8233 18.5303 18.5304C18.8232 18.2375 18.8232 17.7626 18.5303 17.4697L17.4697 18.5304ZM15.25 8.50003C15.25 12.228 12.2279 15.25 8.5 15.25V16.75C13.0563 16.75 16.75 13.0564 16.75 8.50003H15.25ZM8.5 15.25C4.77208 15.25 1.75 12.228 1.75 8.50003H0.25C0.25 13.0564 3.94365 16.75 8.5 16.75V15.25ZM1.75 8.50003C1.75 4.77211 4.77208 1.75003 8.5 1.75003V0.250031C3.94365 0.250031 0.25 3.94368 0.25 8.50003H1.75ZM8.5 1.75003C12.2279 1.75003 15.25 4.77211 15.25 8.50003H16.75C16.75 3.94368 13.0563 0.250031 8.5 0.250031V1.75003ZM18.5303 17.4697L14.3428 13.2821L13.2821 14.3428L17.4697 18.5304L18.5303 17.4697Z"
                        fill={color}
                    />
                </svg>
            </>
        </StyledIcon>
    );
};
