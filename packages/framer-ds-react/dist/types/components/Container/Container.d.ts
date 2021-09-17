import React from 'react';
export declare type ContainerProps = {
    children: React.ReactNode;
} & React.ComponentProps<typeof BaseContainer>;
declare const Container: ({ children, ...rest }: ContainerProps) => JSX.Element;
declare const BaseContainer: import("@stitches/react/types/styled-component").StyledComponent<"div", {
    size?: "w-md" | "w-sm" | "w-lg" | "w-xl" | undefined;
}, {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    motion: string;
    hover: string;
    dark: string;
    light: string;
}, import("@stitches/react/types/css-util").CSS<{
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    motion: string;
    hover: string;
    dark: string;
    light: string;
}, {
    colors: {
        transparent: string;
        current: string;
        white: string;
        black: string;
        hiContrast: string;
        loContrast: string;
        primary50: string;
        primary100: string;
        primary200: string;
        primary300: string;
        primary400: string;
        primary500: string;
        primary600: string;
        primary700: string;
        primary800: string;
        primary900: string;
        primary1000: string;
        primary1100: string;
        secondary50: string;
        secondary100: string;
        secondary200: string;
        secondary300: string;
        secondary400: string;
        secondary500: string;
        secondary600: string;
        secondary700: string;
        secondary800: string;
        secondary900: string;
        secondary1000: string;
        secondary1100: string;
        teritary50: string;
        teritary100: string;
        teritary200: string;
        teritary300: string;
        teritary400: string;
        teritary500: string;
        teritary600: string;
        teritary700: string;
        teritary800: string;
        teritary900: string;
        teritary1000: string;
        teritary1100: string;
        success50: string;
        success100: string;
        success200: string;
        success300: string;
        success400: string;
        success500: string;
        success600: string;
        success700: string;
        success800: string;
        success900: string;
        success1000: string;
        success1100: string;
        warning50: string;
        warning100: string;
        warning200: string;
        warning300: string;
        warning400: string;
        warning500: string;
        warning600: string;
        warning700: string;
        warning800: string;
        warning900: string;
        warning1000: string;
        warning1100: string;
        error50: string;
        error100: string;
        error200: string;
        error300: string;
        error400: string;
        error500: string;
        error600: string;
        error700: string;
        error800: string;
        error900: string;
        error1000: string;
        error1100: string;
        mono50: string;
        mono100: string;
        mono200: string;
        mono300: string;
        mono400: string;
        mono500: string;
        mono600: string;
        mono700: string;
        mono800: string;
        mono900: string;
        mono1000: string;
        mono1100: string;
        bgPrimary: string;
        bgSecondary: string;
        bgTeritary: string;
        bgInversePrimary: string;
        bgInverseSecondary: string;
        bgInverseTeritary: string;
        fgPrimary: string;
        fgSecondary: string;
        fgTeritary: string;
        fgInversePrimary: string;
        fgInverseSecondary: string;
        fgInverseTeritary: string;
    };
    fonts: {
        text: string;
        digit: string;
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
    fontSizes: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
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
    letterSpacings: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
        wider: string;
        widest: string;
    };
    radii: {
        radius4: string;
        radius6: string;
        radius8: string;
        radius12: string;
        radius16: string;
        round: string;
        pill: string;
    };
    zIndices: {
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
        6: number;
        7: number;
        8: number;
        9: number;
        select: number;
        modal: number;
        toast: number;
        alert: number;
        max: number;
    };
    sizes: {
        size5: string;
        size10: string;
        size15: string;
        size20: string;
        size25: string;
        size35: string;
        size45: string;
        size65: string;
        size80: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        space5: string;
        space10: string;
        space15: string;
        space20: string;
        space25: string;
        space35: string;
        space45: string;
        space65: string;
        space80: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    p: (value: import("@stitches/react").PropertyValue<"padding">) => {
        padding: import("@stitches/react").PropertyValue<"padding">;
    };
    pt: (value: import("@stitches/react").PropertyValue<"paddingTop">) => {
        paddingTop: import("@stitches/react").PropertyValue<"paddingTop">;
    };
    pr: (value: import("@stitches/react").PropertyValue<"paddingRight">) => {
        paddingRight: import("@stitches/react").PropertyValue<"paddingRight">;
    };
    pb: (value: import("@stitches/react").PropertyValue<"paddingBottom">) => {
        paddingBottom: import("@stitches/react").PropertyValue<"paddingBottom">;
    };
    pl: (value: import("@stitches/react").PropertyValue<"paddingLeft">) => {
        paddingLeft: import("@stitches/react").PropertyValue<"paddingLeft">;
    };
    px: (value: import("@stitches/react").PropertyValue<"paddingLeft">) => {
        paddingLeft: import("@stitches/react").PropertyValue<"paddingLeft">;
        paddingRight: import("@stitches/react").PropertyValue<"paddingLeft">;
    };
    py: (value: import("@stitches/react").PropertyValue<"paddingTop">) => {
        paddingTop: import("@stitches/react").PropertyValue<"paddingTop">;
        paddingBottom: import("@stitches/react").PropertyValue<"paddingTop">;
    };
    m: (value: import("@stitches/react").PropertyValue<"margin">) => {
        margin: import("@stitches/react").PropertyValue<"margin">;
    };
    mt: (value: import("@stitches/react").PropertyValue<"marginTop">) => {
        marginTop: import("@stitches/react").PropertyValue<"marginTop">;
    };
    mr: (value: import("@stitches/react").PropertyValue<"marginRight">) => {
        marginRight: import("@stitches/react").PropertyValue<"marginRight">;
    };
    mb: (value: import("@stitches/react").PropertyValue<"marginBottom">) => {
        marginBottom: import("@stitches/react").PropertyValue<"marginBottom">;
    };
    ml: (value: import("@stitches/react").PropertyValue<"marginLeft">) => {
        marginLeft: import("@stitches/react").PropertyValue<"marginLeft">;
    };
    mx: (value: import("@stitches/react").PropertyValue<"marginLeft">) => {
        marginLeft: import("@stitches/react").PropertyValue<"marginLeft">;
        marginRight: import("@stitches/react").PropertyValue<"marginLeft">;
    };
    my: (value: import("@stitches/react").PropertyValue<"marginTop">) => {
        marginTop: import("@stitches/react").PropertyValue<"marginTop">;
        marginBottom: import("@stitches/react").PropertyValue<"marginTop">;
    };
    ta: (value: import("@stitches/react").PropertyValue<"textAlign">) => {
        textAlign: import("@stitches/react").PropertyValue<"textAlign">;
    };
    fd: (value: import("@stitches/react").PropertyValue<"flexDirection">) => {
        flexDirection: import("@stitches/react").PropertyValue<"flexDirection">;
    };
    fw: (value: import("@stitches/react").PropertyValue<"flexWrap">) => {
        flexWrap: import("@stitches/react").PropertyValue<"flexWrap">;
    };
    ai: (value: import("@stitches/react").PropertyValue<"alignItems">) => {
        alignItems: import("@stitches/react").PropertyValue<"alignItems">;
    };
    ac: (value: import("@stitches/react").PropertyValue<"alignContent">) => {
        alignContent: import("@stitches/react").PropertyValue<"alignContent">;
    };
    jc: (value: import("@stitches/react").PropertyValue<"justifyContent">) => {
        justifyContent: import("@stitches/react").PropertyValue<"justifyContent">;
    };
    as: (value: import("@stitches/react").PropertyValue<"alignSelf">) => {
        alignSelf: import("@stitches/react").PropertyValue<"alignSelf">;
    };
    fg: (value: import("@stitches/react").PropertyValue<"flexGrow">) => {
        flexGrow: import("@stitches/react").PropertyValue<"flexGrow">;
    };
    fs: (value: import("@stitches/react").PropertyValue<"flexShrink">) => {
        flexShrink: import("@stitches/react").PropertyValue<"flexShrink">;
    };
    fb: (value: import("@stitches/react").PropertyValue<"flexBasis">) => {
        flexBasis: import("@stitches/react").PropertyValue<"flexBasis">;
    };
    bc: (value: import("@stitches/react").PropertyValue<"backgroundColor">) => {
        backgroundColor: import("@stitches/react").PropertyValue<"backgroundColor">;
    };
    br: (value: import("@stitches/react").PropertyValue<"borderRadius">) => {
        borderRadius: import("@stitches/react").PropertyValue<"borderRadius">;
    };
    btrr: (value: import("@stitches/react").PropertyValue<"borderTopRightRadius">) => {
        borderTopRightRadius: import("@stitches/react").PropertyValue<"borderTopRightRadius">;
    };
    bbrr: (value: import("@stitches/react").PropertyValue<"borderBottomRightRadius">) => {
        borderBottomRightRadius: import("@stitches/react").PropertyValue<"borderBottomRightRadius">;
    };
    bblr: (value: import("@stitches/react").PropertyValue<"borderBottomLeftRadius">) => {
        borderBottomLeftRadius: import("@stitches/react").PropertyValue<"borderBottomLeftRadius">;
    };
    btlr: (value: import("@stitches/react").PropertyValue<"borderTopLeftRadius">) => {
        borderTopLeftRadius: import("@stitches/react").PropertyValue<"borderTopLeftRadius">;
    };
    bs: (value: import("@stitches/react").PropertyValue<"boxShadow">) => {
        boxShadow: import("@stitches/react").PropertyValue<"boxShadow">;
    };
    lh: (value: import("@stitches/react").PropertyValue<"lineHeight">) => {
        lineHeight: import("@stitches/react").PropertyValue<"lineHeight">;
    };
    ox: (value: import("@stitches/react").PropertyValue<"overflowX">) => {
        overflowX: import("@stitches/react").PropertyValue<"overflowX">;
    };
    oy: (value: import("@stitches/react").PropertyValue<"overflowY">) => {
        overflowY: import("@stitches/react").PropertyValue<"overflowY">;
    };
    pe: (value: import("@stitches/react").PropertyValue<"pointerEvents">) => {
        pointerEvents: import("@stitches/react").PropertyValue<"pointerEvents">;
    };
    us: (value: import("@stitches/react").PropertyValue<"userSelect">) => {
        WebkitUserSelect: import("@stitches/react").PropertyValue<"userSelect">;
        userSelect: import("@stitches/react").PropertyValue<"userSelect">;
    };
    userSelect: (value: import("@stitches/react").PropertyValue<"userSelect">) => {
        WebkitUserSelect: import("@stitches/react").PropertyValue<"userSelect">;
        userSelect: import("@stitches/react").PropertyValue<"userSelect">;
    };
    size: (value: import("@stitches/react").PropertyValue<"width">) => {
        width: import("@stitches/react").PropertyValue<"width">;
        height: import("@stitches/react").PropertyValue<"width">;
    };
    appearance: (value: import("@stitches/react").PropertyValue<"appearance">) => {
        WebkitAppearance: import("@stitches/react").PropertyValue<"appearance">;
        appearance: import("@stitches/react").PropertyValue<"appearance">;
    };
    backgroundClip: (value: import("@stitches/react").PropertyValue<"backgroundClip">) => {
        WebkitBackgroundClip: import("@stitches/react").PropertyValue<"backgroundClip">;
        backgroundClip: import("@stitches/react").PropertyValue<"backgroundClip">;
    };
}>>;
export default Container;
