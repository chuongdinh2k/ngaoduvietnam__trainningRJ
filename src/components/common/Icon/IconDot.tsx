import { IIcon } from "@types";

export const IconDot = (props: IIcon) => {
    return (
        <>
            <svg
                width={props.width ? props.width : "8"}
                height={props.height ? props.height : "8"}
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="4" cy="4" r="4" fill={props.color ? props.color : "#FF7B42"} />
            </svg>
        </>
    );
};
