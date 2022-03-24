import { IIcon } from "@types";

export const IconNextPagination = (props: IIcon) => {
    const { width = 16, height = 17, color = "black" } = props;
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_1349_2474)">
                    <path
                        d="M10.3428 5.20732L13.2104 8.07491L0.746766 8.07491L0.746766 9.03079L13.2103 9.03079L10.3428 11.8983L11.0187 12.5742L15.0401 8.55282L11.0187 4.53143L10.3428 5.20732Z"
                        fill={color}
                    />
                </g>
                <defs>
                    <clipPath id="clip0_1349_2474">
                        <rect
                            width="15.2941"
                            height="15.2941"
                            fill="white"
                            transform="translate(0.223816 16.2) rotate(-90)"
                        />
                    </clipPath>
                </defs>
            </svg>
        </>
    );
};
