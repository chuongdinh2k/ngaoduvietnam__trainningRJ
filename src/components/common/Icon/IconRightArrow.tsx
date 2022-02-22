import { theme } from "@styles";
import { IIcon } from "@types";

export const IRightArrow = (props: IIcon) => {
    const { width = 8, height = 14, color = `${theme.colors.darkBlack}` } = props;
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="4" cy="4" r="4" fill={color} />
            </svg>
        </>
    );
};
