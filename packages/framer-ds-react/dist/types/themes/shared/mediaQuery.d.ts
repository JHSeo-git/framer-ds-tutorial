declare const mediaQuery: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    custom: (size: number) => string;
    motion: string;
    hover: string;
    dark: string;
    light: string;
};
export declare type MediaQuery = typeof mediaQuery;
export default mediaQuery;
