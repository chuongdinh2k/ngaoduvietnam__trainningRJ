import { IIcon } from "@types";

export const IconDownArrow = (props: IIcon) => {
    const { width = 19, height = 10, color = "black" } = props;
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.33936 1L9.26793 9L17.1965 1"
                    stroke={color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </>
    );
};
