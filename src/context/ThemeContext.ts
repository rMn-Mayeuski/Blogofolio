import { createContext } from "react";

interface ThemeProps {
    theme: Theme;
    changeTheme: (theme: Theme) => void;
}

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

export const ThemeContext = createContext<ThemeProps>({
    theme: Theme.DARK,
    changeTheme: () => {},
});