declare const typography: {
    textFontFamily: string;
    digitFontFamily: string;
    fontWeights: {
        thin: number;
        extralight: number;
        light: number;
        normal: number;
        regular: number;
        medium: number;
        semibold: number;
        bold: number;
        extrabold: number;
        heavy: number;
        black: number;
    };
    lineHeights: {
        base: string;
        tight: string;
        normal: string;
        loose: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
    };
    letterSpacing: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
        wider: string;
        widest: string;
    };
    fontSizes: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        '8xl': string;
        '9xl': string;
    };
    heading: {
        h1: {
            fontSize: string;
            lineHeight: string;
        };
        h2: {
            fontSize: string;
            lineHeight: string;
        };
        h3: {
            fontSize: string;
            lineHeight: string;
        };
        h4: {
            fontSize: string;
            lineHeight: string;
        };
        h5: {
            fontSize: string;
            lineHeight: string;
        };
        h6: {
            fontSize: string;
            lineHeight: string;
        };
    };
};
export declare const generateTypography: ({ fontFamily, }: {
    fontFamily?: string | undefined;
}) => Typography;
export declare type Typography = typeof typography;
export default typography;
