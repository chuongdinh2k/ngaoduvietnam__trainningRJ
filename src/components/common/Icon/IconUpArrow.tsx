import { IIcon } from "@types";

export const IconUpArrow = (props: IIcon) => {
    const { width = 18, height = 10, color = "black" } = props;
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
                    d="M17 9L9 1L1 9"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </>
    );
};
