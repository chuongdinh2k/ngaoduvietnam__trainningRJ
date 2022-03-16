import { theme } from "@styles";
import { IIcon } from "@types";

export const IconDoubleQuotationMarks = (props: IIcon) => {
    return (
        <>
            <svg
                width={props.width ? props.width : "31"}
                height={props.height ? props.height : "20"}
                viewBox="0 0 31 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M29.125 12.9375C29.125 9.79638 26.5786 7.25 23.4375 7.25L17.75 1.5625V12.9375C17.75 16.0786 20.2964 18.625 23.4375 18.625C26.5786 18.625 29.125 16.0786 29.125 12.9375Z"
                    stroke={props.color ? props.color : theme.colors.orange}
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path
                    d="M12.875 12.9375C12.875 9.79638 10.3286 7.25 7.1875 7.25L1.5 1.5625V12.9375C1.5 16.0786 4.04638 18.625 7.1875 18.625C10.3286 18.625 12.875 16.0786 12.875 12.9375Z"
                    stroke={props.color ? props.color : theme.colors.orange}
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
            </svg>
        </>
    );
};
