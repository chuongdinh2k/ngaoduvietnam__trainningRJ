import { IIcon } from "@types";

export const IconCamera = (props: IIcon) => {
    const { width = 17, height = 15, color = "#3D3E3F" } = props;
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
                    d="M16 12.797C16 13.1705 15.8555 13.5286 15.5983 13.7927C15.3411 14.0568 14.9922 14.2051 14.6284 14.2051H2.28418C1.92041 14.2051 1.57155 14.0568 1.31432 13.7927C1.0571 13.5286 0.912598 13.1705 0.912598 12.797V5.0523C0.912598 4.67884 1.0571 4.32068 1.31432 4.05661C1.57155 3.79253 1.92041 3.64417 2.28418 3.64417H5.02734L6.39893 1.53198H10.5137L11.8853 3.64417H14.6284C14.9922 3.64417 15.3411 3.79253 15.5983 4.05661C15.8555 4.32068 16 4.67884 16 5.0523V12.797Z"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8.45691 11.389C9.97192 11.389 11.2001 10.1281 11.2001 8.57273C11.2001 7.01735 9.97192 5.75647 8.45691 5.75647C6.9419 5.75647 5.71375 7.01735 5.71375 8.57273C5.71375 10.1281 6.9419 11.389 8.45691 11.389Z"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </>
    );
};
