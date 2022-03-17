import { IIcon } from "@types";

export const IconPicture = (props: IIcon) => {
    const { width = 19, height = 18 } = props;
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
                    d="M15.8013 0.971558H3.58247C2.61843 0.971558 1.83691 1.75307 1.83691 2.71711V14.936C1.83691 15.9 2.61843 16.6815 3.58247 16.6815H15.8013C16.7654 16.6815 17.5469 15.9 17.5469 14.936V2.71711C17.5469 1.75307 16.7654 0.971558 15.8013 0.971558Z"
                    stroke="white"
                    strokeWidth="1.74555"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M6.63729 7.08098C7.36032 7.08098 7.94646 6.49484 7.94646 5.77181C7.94646 5.04878 7.36032 4.46265 6.63729 4.46265C5.91426 4.46265 5.32812 5.04878 5.32812 5.77181C5.32812 6.49484 5.91426 7.08098 6.63729 7.08098Z"
                    stroke="white"
                    strokeWidth="1.74555"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M17.5474 11.4449L13.1836 7.08105L3.58301 16.6816"
                    stroke="white"
                    strokeWidth="1.74555"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </>
    );
};
