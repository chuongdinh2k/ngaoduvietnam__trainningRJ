import { createTheme, ThemeOptions } from "@material-ui/core/styles";
import { ThemeColors } from "@types";
// Module augmentation for Typescript to support the following custom properties
declare module "@material-ui/core/styles/createTheme" {
    interface Theme {
        colors: ThemeColors;
    }
    interface ThemeOptions {
        colors: ThemeColors;
    }
}
// For new colors, add object key to 'IColors' interface
const colors = {
    orange: "#FF7B42",
    pureWhite: "#ffffff",
    darkBlack: "#1C1C1E",
    yellow: "#FFB612",
    lightPink: "#FFF2CF",
    darkBlue: "#03387D",
    gray: "#3D3E3F",
    gray1: "#636567",
    gray2: "#C5C7C9",
    gray3: "#C4C4C4",
    gray4: "#E8E9EA",
    backgroundGray: "#F4F4F4",
    backgroundGray2: "#F5F5F5",
    textGray: "#8E8E93",
    darkOrange: "#F76E11",
    red: "#FF1700",
    darkBlue2: "#04316A",
    blue: "#4E86DB",
};

const defaultFontFamily = "DM Sans, Roboto, Arial, sans-serif";

/**
 * DEFAULT_THEME_CONFIG
 * Set global and re-usable style for project
 * Set default style for all MUI components
 * Allow overriding MUI default styles and props
 */
export const MyConFigTheme: ThemeOptions = {
    colors,
    breakpoints: {
        values: {
            xs: 600,
            sm: 992,
            md: 1200,
            lg: 1440,
            xl: 1600,
        },
    },
    palette: {
        primary: {
            main: colors.orange,
        },
        secondary: {
            main: colors.darkBlue2,
        },
        text: {
            disabled: colors.gray2,
            primary: colors.darkBlack,
            secondary: colors.gray2,
        },
    },
    spacing: 8,
    typography: {
        fontFamily: defaultFontFamily,
        fontSize: 14,
        fontWeightBold: 700,
        fontWeightMedium: 500,
        fontWeightLight: 300,
    },
};
const DEFAULT_THEME_CONFIG: ThemeOptions = {
    colors,
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    palette: {
        primary: {
            main: colors.orange,
        },
        text: {
            disabled: colors.gray2,
            primary: colors.darkBlack,
            secondary: colors.gray2,
        },
    },
    spacing: 8,
};
export const theme = createTheme(DEFAULT_THEME_CONFIG);
