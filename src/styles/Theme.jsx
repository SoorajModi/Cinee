import React from "react";
import { configureFonts, DefaultTheme, DarkTheme } from "react-native-paper";
import fontConfig from "./Fonts";

// const Theme = {
//     ...DefaultTheme,
//     fonts: configureFonts(fontConfig),
//     dark: true,
//     roundness: 30,
// };
const Theme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: "#001B30",
        surface: "#001B30",
        accent: "#C2BC9C",
        background: "#39485A"
    },
    fonts: {
        ...DarkTheme.fonts,
        superLight: { ...DarkTheme.fonts['light'] },
    },
    userDefinedThemeProperty: '',
    animation: {
        ...DarkTheme.animation,
        customProperty: 1,
    },
};

export default Theme;