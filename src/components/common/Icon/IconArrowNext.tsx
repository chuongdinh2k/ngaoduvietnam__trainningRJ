import { theme } from "@styles";
import { IIcon } from "@types";

export const IconArrowNext = (props: IIcon) => {
    return (
        <>
            <svg
                width={props.width ? props.width : "16"}
                height={props.height ? props.height : "12"}
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M17 7L1 7M17 7L11 13M17 7L11 0.999999"
                    stroke={props.color ? props.color : theme.colors.gray1}
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </>
    );
};
