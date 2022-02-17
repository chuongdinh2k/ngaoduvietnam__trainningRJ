import { theme } from "@styles";
import { IIcon } from "@types";

export const IconStar = (props: IIcon) => {
    return (
        <>
            <svg
                width={props.width ? props.width : "16"}
                height={props.height ? props.height : "15"}
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8 0L10.3982 4.69921L15.6085 5.52786L11.8803 9.26079L12.7023 14.4721L8 12.08L3.29772 14.4721L4.11969 9.26079L0.391548 5.52786L5.60184 4.69921L8 0Z"
                    fill={props.color ? props.color : theme.colors.pureWhite}
                />
            </svg>
        </>
    );
};
