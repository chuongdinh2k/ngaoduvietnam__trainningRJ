import { IIcon } from "@types";

export const GroupPeople = (props: IIcon) => {
    const { width = 18, height = 20, color = "#FF7B4" } = props;
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M23 19V17C23 14.7909 21.2091 13 19 13H18.5M15 9.00003C17.2091 9.00003 19 7.20917 19 5.00003C19 2.79089 17.2091 1.00003 15 1.00003M17 19V17C17 14.7909 15.2091 13 13 13H5C2.79086 13 1 14.7909 1 17V19M13 5.00003C13 7.20917 11.2091 9.00003 9 9.00003C6.79086 9.00003 5 7.20917 5 5.00003C5 2.79089 6.79086 1.00003 9 1.00003C11.2091 1.00003 13 2.79089 13 5.00003Z"
                    stroke={color}
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </>
    );
};
