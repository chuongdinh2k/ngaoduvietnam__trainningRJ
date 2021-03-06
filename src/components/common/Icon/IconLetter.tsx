import { theme } from "@styles";
import { IIcon } from "@types";

export const IconLetter = (props: IIcon) => {
    return (
        <>
            <svg
                width={props.width ? props.width : "18"}
                height={props.height ? props.height : "20"}
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.5 1.5L8.58579 8.58579C9.36683 9.36683 10.6332 9.36684 11.4142 8.58579L18.5 1.5M2 15H18C18.5523 15 19 14.5523 19 14V2C19 1.44772 18.5523 1 18 1H2C1.44772 1 1 1.44772 1 2V14C1 14.5523 1.44772 15 2 15Z"
                    stroke={props.color ? props.color : theme.colors.pureWhite}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </>
    );
};
