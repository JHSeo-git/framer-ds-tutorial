declare const typoPalette: {
    fontFamily: {
        Roboto: string;
        RobotoMono: string;
        OpenSans: string;
        SpocaHanSansNeo: string;
        withSpocaHanSansNeo: (fontFamily: string) => string;
    };
    fontSize: {
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
};
export declare type TypoPalette = typeof typoPalette;
export default typoPalette;
