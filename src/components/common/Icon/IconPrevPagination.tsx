import { IIcon } from "@types";

export const IconPrevPagination = (props: IIcon) => {
    const { width = 17, height = 17, color = "black" } = props;
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
                    d="M6.08099 11.8984L3.21343 9.0308L15.6771 9.0308L15.6771 8.07492L3.21349 8.07492L6.08099 5.20739L5.40509 4.53149L1.38373 8.55289L5.40509 12.5743L6.08099 11.8984Z"
                    fill={color}
                />
            </svg>
        </>
    );
};
