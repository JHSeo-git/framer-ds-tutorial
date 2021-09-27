import { Theme } from "../../themes/types";
import React from 'react';
export declare type ThemeProviderProps = {
    theme: Theme;
    children: React.ReactNode;
};
declare const ThemeProvider: ({ theme, children }: ThemeProviderProps) => JSX.Element;
export declare const useTheme: () => Theme;
export default ThemeProvider;
