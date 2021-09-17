/**
 * @see https://github.com/radix-ui/design-system/blob/master/stitches.config.ts
 */
/// <reference types="react" />
import { PropertyValue } from '@stitches/react';
declare const styled: <Type extends import("@stitches/react/types/util").Function | keyof JSX.IntrinsicElements | import("react").ComponentType<any>, Composers extends (string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{
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
    p: (value: PropertyValue<'padding'>) => {
        padding: PropertyValue<"padding">;
    };
    pt: (value: PropertyValue<'paddingTop'>) => {
        paddingTop: PropertyValue<"paddingTop">;
    };
    pr: (value: PropertyValue<'paddingRight'>) => {
        paddingRight: PropertyValue<"paddingRight">;
    };
    pb: (value: PropertyValue<'paddingBottom'>) => {
        paddingBottom: PropertyValue<"paddingBottom">;
    };
    pl: (value: PropertyValue<'paddingLeft'>) => {
        paddingLeft: PropertyValue<"paddingLeft">;
    };
    px: (value: PropertyValue<'paddingLeft'>) => {
        paddingLeft: PropertyValue<"paddingLeft">;
        paddingRight: PropertyValue<"paddingLeft">;
    };
    py: (value: PropertyValue<'paddingTop'>) => {
        paddingTop: PropertyValue<"paddingTop">;
        paddingBottom: PropertyValue<"paddingTop">;
    };
    m: (value: PropertyValue<'margin'>) => {
        margin: PropertyValue<"margin">;
    };
    mt: (value: PropertyValue<'marginTop'>) => {
        marginTop: PropertyValue<"marginTop">;
    };
    mr: (value: PropertyValue<'marginRight'>) => {
        marginRight: PropertyValue<"marginRight">;
    };
    mb: (value: PropertyValue<'marginBottom'>) => {
        marginBottom: PropertyValue<"marginBottom">;
    };
    ml: (value: PropertyValue<'marginLeft'>) => {
        marginLeft: PropertyValue<"marginLeft">;
    };
    mx: (value: PropertyValue<'marginLeft'>) => {
        marginLeft: PropertyValue<"marginLeft">;
        marginRight: PropertyValue<"marginLeft">;
    };
    my: (value: PropertyValue<'marginTop'>) => {
        marginTop: PropertyValue<"marginTop">;
        marginBottom: PropertyValue<"marginTop">;
    };
    ta: (value: PropertyValue<'textAlign'>) => {
        textAlign: PropertyValue<"textAlign">;
    };
    fd: (value: PropertyValue<'flexDirection'>) => {
        flexDirection: PropertyValue<"flexDirection">;
    };
    fw: (value: PropertyValue<'flexWrap'>) => {
        flexWrap: PropertyValue<"flexWrap">;
    };
    ai: (value: PropertyValue<'alignItems'>) => {
        alignItems: PropertyValue<"alignItems">;
    };
    ac: (value: PropertyValue<'alignContent'>) => {
        alignContent: PropertyValue<"alignContent">;
    };
    jc: (value: PropertyValue<'justifyContent'>) => {
        justifyContent: PropertyValue<"justifyContent">;
    };
    as: (value: PropertyValue<'alignSelf'>) => {
        alignSelf: PropertyValue<"alignSelf">;
    };
    fg: (value: PropertyValue<'flexGrow'>) => {
        flexGrow: PropertyValue<"flexGrow">;
    };
    fs: (value: PropertyValue<'flexShrink'>) => {
        flexShrink: PropertyValue<"flexShrink">;
    };
    fb: (value: PropertyValue<'flexBasis'>) => {
        flexBasis: PropertyValue<"flexBasis">;
    };
    bc: (value: PropertyValue<'backgroundColor'>) => {
        backgroundColor: PropertyValue<"backgroundColor">;
    };
    br: (value: PropertyValue<'borderRadius'>) => {
        borderRadius: PropertyValue<"borderRadius">;
    };
    btrr: (value: PropertyValue<'borderTopRightRadius'>) => {
        borderTopRightRadius: PropertyValue<"borderTopRightRadius">;
    };
    bbrr: (value: PropertyValue<'borderBottomRightRadius'>) => {
        borderBottomRightRadius: PropertyValue<"borderBottomRightRadius">;
    };
    bblr: (value: PropertyValue<'borderBottomLeftRadius'>) => {
        borderBottomLeftRadius: PropertyValue<"borderBottomLeftRadius">;
    };
    btlr: (value: PropertyValue<'borderTopLeftRadius'>) => {
        borderTopLeftRadius: PropertyValue<"borderTopLeftRadius">;
    };
    bs: (value: PropertyValue<'boxShadow'>) => {
        boxShadow: PropertyValue<"boxShadow">;
    };
    lh: (value: PropertyValue<'lineHeight'>) => {
        lineHeight: PropertyValue<"lineHeight">;
    };
    ox: (value: PropertyValue<'overflowX'>) => {
        overflowX: PropertyValue<"overflowX">;
    };
    oy: (value: PropertyValue<'overflowY'>) => {
        overflowY: PropertyValue<"overflowY">;
    };
    pe: (value: PropertyValue<'pointerEvents'>) => {
        pointerEvents: PropertyValue<"pointerEvents">;
    };
    us: (value: PropertyValue<'userSelect'>) => {
        WebkitUserSelect: PropertyValue<"userSelect">;
        userSelect: PropertyValue<"userSelect">;
    };
    userSelect: (value: PropertyValue<'userSelect'>) => {
        WebkitUserSelect: PropertyValue<"userSelect">;
        userSelect: PropertyValue<"userSelect">;
    };
    size: (value: PropertyValue<'width'>) => {
        width: PropertyValue<"width">;
        height: PropertyValue<"width">;
    };
    appearance: (value: PropertyValue<'appearance'>) => {
        WebkitAppearance: PropertyValue<"appearance">;
        appearance: PropertyValue<"appearance">;
    };
    backgroundClip: (value: PropertyValue<'backgroundClip'>) => {
        WebkitBackgroundClip: PropertyValue<"backgroundClip">;
        backgroundClip: PropertyValue<"backgroundClip">;
    };
}>>(type: Type, ...composers: { [K in keyof Composers]: Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } & import("@stitches/react/types/util").WideObject : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "variants" | "compoundVariants" | "defaultVariants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {
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
    p: (value: PropertyValue<'padding'>) => {
        padding: PropertyValue<"padding">;
    };
    pt: (value: PropertyValue<'paddingTop'>) => {
        paddingTop: PropertyValue<"paddingTop">;
    };
    pr: (value: PropertyValue<'paddingRight'>) => {
        paddingRight: PropertyValue<"paddingRight">;
    };
    pb: (value: PropertyValue<'paddingBottom'>) => {
        paddingBottom: PropertyValue<"paddingBottom">;
    };
    pl: (value: PropertyValue<'paddingLeft'>) => {
        paddingLeft: PropertyValue<"paddingLeft">;
    };
    px: (value: PropertyValue<'paddingLeft'>) => {
        paddingLeft: PropertyValue<"paddingLeft">;
        paddingRight: PropertyValue<"paddingLeft">;
    };
    py: (value: PropertyValue<'paddingTop'>) => {
        paddingTop: PropertyValue<"paddingTop">;
        paddingBottom: PropertyValue<"paddingTop">;
    };
    m: (value: PropertyValue<'margin'>) => {
        margin: PropertyValue<"margin">;
    };
    mt: (value: PropertyValue<'marginTop'>) => {
        marginTop: PropertyValue<"marginTop">;
    };
    mr: (value: PropertyValue<'marginRight'>) => {
        marginRight: PropertyValue<"marginRight">;
    };
    mb: (value: PropertyValue<'marginBottom'>) => {
        marginBottom: PropertyValue<"marginBottom">;
    };
    ml: (value: PropertyValue<'marginLeft'>) => {
        marginLeft: PropertyValue<"marginLeft">;
    };
    mx: (value: PropertyValue<'marginLeft'>) => {
        marginLeft: PropertyValue<"marginLeft">;
        marginRight: PropertyValue<"marginLeft">;
    };
    my: (value: PropertyValue<'marginTop'>) => {
        marginTop: PropertyValue<"marginTop">;
        marginBottom: PropertyValue<"marginTop">;
    };
    ta: (value: PropertyValue<'textAlign'>) => {
        textAlign: PropertyValue<"textAlign">;
    };
    fd: (value: PropertyValue<'flexDirection'>) => {
        flexDirection: PropertyValue<"flexDirection">;
    };
    fw: (value: PropertyValue<'flexWrap'>) => {
        flexWrap: PropertyValue<"flexWrap">;
    };
    ai: (value: PropertyValue<'alignItems'>) => {
        alignItems: PropertyValue<"alignItems">;
    };
    ac: (value: PropertyValue<'alignContent'>) => {
        alignContent: PropertyValue<"alignContent">;
    };
    jc: (value: PropertyValue<'justifyContent'>) => {
        justifyContent: PropertyValue<"justifyContent">;
    };
    as: (value: PropertyValue<'alignSelf'>) => {
        alignSelf: PropertyValue<"alignSelf">;
    };
    fg: (value: PropertyValue<'flexGrow'>) => {
        flexGrow: PropertyValue<"flexGrow">;
    };
    fs: (value: PropertyValue<'flexShrink'>) => {
        flexShrink: PropertyValue<"flexShrink">;
    };
    fb: (value: PropertyValue<'flexBasis'>) => {
        flexBasis: PropertyValue<"flexBasis">;
    };
    bc: (value: PropertyValue<'backgroundColor'>) => {
        backgroundColor: PropertyValue<"backgroundColor">;
    };
    br: (value: PropertyValue<'borderRadius'>) => {
        borderRadius: PropertyValue<"borderRadius">;
    };
    btrr: (value: PropertyValue<'borderTopRightRadius'>) => {
        borderTopRightRadius: PropertyValue<"borderTopRightRadius">;
    };
    bbrr: (value: PropertyValue<'borderBottomRightRadius'>) => {
        borderBottomRightRadius: PropertyValue<"borderBottomRightRadius">;
    };
    bblr: (value: PropertyValue<'borderBottomLeftRadius'>) => {
        borderBottomLeftRadius: PropertyValue<"borderBottomLeftRadius">;
    };
    btlr: (value: PropertyValue<'borderTopLeftRadius'>) => {
        borderTopLeftRadius: PropertyValue<"borderTopLeftRadius">;
    };
    bs: (value: PropertyValue<'boxShadow'>) => {
        boxShadow: PropertyValue<"boxShadow">;
    };
    lh: (value: PropertyValue<'lineHeight'>) => {
        lineHeight: PropertyValue<"lineHeight">;
    };
    ox: (value: PropertyValue<'overflowX'>) => {
        overflowX: PropertyValue<"overflowX">;
    };
    oy: (value: PropertyValue<'overflowY'>) => {
        overflowY: PropertyValue<"overflowY">;
    };
    pe: (value: PropertyValue<'pointerEvents'>) => {
        pointerEvents: PropertyValue<"pointerEvents">;
    };
    us: (value: PropertyValue<'userSelect'>) => {
        WebkitUserSelect: PropertyValue<"userSelect">;
        userSelect: PropertyValue<"userSelect">;
    };
    userSelect: (value: PropertyValue<'userSelect'>) => {
        WebkitUserSelect: PropertyValue<"userSelect">;
        userSelect: PropertyValue<"userSelect">;
    };
    size: (value: PropertyValue<'width'>) => {
        width: PropertyValue<"width">;
        height: PropertyValue<"width">;
    };
    appearance: (value: PropertyValue<'appearance'>) => {
        WebkitAppearance: PropertyValue<"appearance">;
        appearance: PropertyValue<"appearance">;
    };
    backgroundClip: (value: PropertyValue<'backgroundClip'>) => {
        WebkitBackgroundClip: PropertyValue<"backgroundClip">;
        backgroundClip: PropertyValue<"backgroundClip">;
    };
}>>, lightTheme: string & {
    colors: {
        transparent: import("@stitches/react/types/theme").Token<"transparent", string, "colors", "">;
        current: import("@stitches/react/types/theme").Token<"current", string, "colors", "">;
        white: import("@stitches/react/types/theme").Token<"white", string, "colors", "">;
        black: import("@stitches/react/types/theme").Token<"black", string, "colors", "">;
        primary50: import("@stitches/react/types/theme").Token<"primary50", string, "colors", "">;
        primary100: import("@stitches/react/types/theme").Token<"primary100", string, "colors", "">;
        primary200: import("@stitches/react/types/theme").Token<"primary200", string, "colors", "">;
        primary300: import("@stitches/react/types/theme").Token<"primary300", string, "colors", "">;
        primary400: import("@stitches/react/types/theme").Token<"primary400", string, "colors", "">;
        primary500: import("@stitches/react/types/theme").Token<"primary500", string, "colors", "">;
        primary600: import("@stitches/react/types/theme").Token<"primary600", string, "colors", "">;
        primary700: import("@stitches/react/types/theme").Token<"primary700", string, "colors", "">;
        primary800: import("@stitches/react/types/theme").Token<"primary800", string, "colors", "">;
        primary900: import("@stitches/react/types/theme").Token<"primary900", string, "colors", "">;
        primary1000: import("@stitches/react/types/theme").Token<"primary1000", string, "colors", "">;
        primary1100: import("@stitches/react/types/theme").Token<"primary1100", string, "colors", "">;
        secondary50: import("@stitches/react/types/theme").Token<"secondary50", string, "colors", "">;
        secondary100: import("@stitches/react/types/theme").Token<"secondary100", string, "colors", "">;
        secondary200: import("@stitches/react/types/theme").Token<"secondary200", string, "colors", "">;
        secondary300: import("@stitches/react/types/theme").Token<"secondary300", string, "colors", "">;
        secondary400: import("@stitches/react/types/theme").Token<"secondary400", string, "colors", "">;
        secondary500: import("@stitches/react/types/theme").Token<"secondary500", string, "colors", "">;
        secondary600: import("@stitches/react/types/theme").Token<"secondary600", string, "colors", "">;
        secondary700: import("@stitches/react/types/theme").Token<"secondary700", string, "colors", "">;
        secondary800: import("@stitches/react/types/theme").Token<"secondary800", string, "colors", "">;
        secondary900: import("@stitches/react/types/theme").Token<"secondary900", string, "colors", "">;
        secondary1000: import("@stitches/react/types/theme").Token<"secondary1000", string, "colors", "">;
        secondary1100: import("@stitches/react/types/theme").Token<"secondary1100", string, "colors", "">;
        teritary50: import("@stitches/react/types/theme").Token<"teritary50", string, "colors", "">;
        teritary100: import("@stitches/react/types/theme").Token<"teritary100", string, "colors", "">;
        teritary200: import("@stitches/react/types/theme").Token<"teritary200", string, "colors", "">;
        teritary300: import("@stitches/react/types/theme").Token<"teritary300", string, "colors", "">;
        teritary400: import("@stitches/react/types/theme").Token<"teritary400", string, "colors", "">;
        teritary500: import("@stitches/react/types/theme").Token<"teritary500", string, "colors", "">;
        teritary600: import("@stitches/react/types/theme").Token<"teritary600", string, "colors", "">;
        teritary700: import("@stitches/react/types/theme").Token<"teritary700", string, "colors", "">;
        teritary800: import("@stitches/react/types/theme").Token<"teritary800", string, "colors", "">;
        teritary900: import("@stitches/react/types/theme").Token<"teritary900", string, "colors", "">;
        teritary1000: import("@stitches/react/types/theme").Token<"teritary1000", string, "colors", "">;
        teritary1100: import("@stitches/react/types/theme").Token<"teritary1100", string, "colors", "">;
        success50: import("@stitches/react/types/theme").Token<"success50", string, "colors", "">;
        success100: import("@stitches/react/types/theme").Token<"success100", string, "colors", "">;
        success200: import("@stitches/react/types/theme").Token<"success200", string, "colors", "">;
        success300: import("@stitches/react/types/theme").Token<"success300", string, "colors", "">;
        success400: import("@stitches/react/types/theme").Token<"success400", string, "colors", "">;
        success500: import("@stitches/react/types/theme").Token<"success500", string, "colors", "">;
        success600: import("@stitches/react/types/theme").Token<"success600", string, "colors", "">;
        success700: import("@stitches/react/types/theme").Token<"success700", string, "colors", "">;
        success800: import("@stitches/react/types/theme").Token<"success800", string, "colors", "">;
        success900: import("@stitches/react/types/theme").Token<"success900", string, "colors", "">;
        success1000: import("@stitches/react/types/theme").Token<"success1000", string, "colors", "">;
        success1100: import("@stitches/react/types/theme").Token<"success1100", string, "colors", "">;
        warning50: import("@stitches/react/types/theme").Token<"warning50", string, "colors", "">;
        warning100: import("@stitches/react/types/theme").Token<"warning100", string, "colors", "">;
        warning200: import("@stitches/react/types/theme").Token<"warning200", string, "colors", "">;
        warning300: import("@stitches/react/types/theme").Token<"warning300", string, "colors", "">;
        warning400: import("@stitches/react/types/theme").Token<"warning400", string, "colors", "">;
        warning500: import("@stitches/react/types/theme").Token<"warning500", string, "colors", "">;
        warning600: import("@stitches/react/types/theme").Token<"warning600", string, "colors", "">;
        warning700: import("@stitches/react/types/theme").Token<"warning700", string, "colors", "">;
        warning800: import("@stitches/react/types/theme").Token<"warning800", string, "colors", "">;
        warning900: import("@stitches/react/types/theme").Token<"warning900", string, "colors", "">;
        warning1000: import("@stitches/react/types/theme").Token<"warning1000", string, "colors", "">;
        warning1100: import("@stitches/react/types/theme").Token<"warning1100", string, "colors", "">;
        error50: import("@stitches/react/types/theme").Token<"error50", string, "colors", "">;
        error100: import("@stitches/react/types/theme").Token<"error100", string, "colors", "">;
        error200: import("@stitches/react/types/theme").Token<"error200", string, "colors", "">;
        error300: import("@stitches/react/types/theme").Token<"error300", string, "colors", "">;
        error400: import("@stitches/react/types/theme").Token<"error400", string, "colors", "">;
        error500: import("@stitches/react/types/theme").Token<"error500", string, "colors", "">;
        error600: import("@stitches/react/types/theme").Token<"error600", string, "colors", "">;
        error700: import("@stitches/react/types/theme").Token<"error700", string, "colors", "">;
        error800: import("@stitches/react/types/theme").Token<"error800", string, "colors", "">;
        error900: import("@stitches/react/types/theme").Token<"error900", string, "colors", "">;
        error1000: import("@stitches/react/types/theme").Token<"error1000", string, "colors", "">;
        error1100: import("@stitches/react/types/theme").Token<"error1100", string, "colors", "">;
        mono50: import("@stitches/react/types/theme").Token<"mono50", string, "colors", "">;
        mono100: import("@stitches/react/types/theme").Token<"mono100", string, "colors", "">;
        mono200: import("@stitches/react/types/theme").Token<"mono200", string, "colors", "">;
        mono300: import("@stitches/react/types/theme").Token<"mono300", string, "colors", "">;
        mono400: import("@stitches/react/types/theme").Token<"mono400", string, "colors", "">;
        mono500: import("@stitches/react/types/theme").Token<"mono500", string, "colors", "">;
        mono600: import("@stitches/react/types/theme").Token<"mono600", string, "colors", "">;
        mono700: import("@stitches/react/types/theme").Token<"mono700", string, "colors", "">;
        mono800: import("@stitches/react/types/theme").Token<"mono800", string, "colors", "">;
        mono900: import("@stitches/react/types/theme").Token<"mono900", string, "colors", "">;
        mono1000: import("@stitches/react/types/theme").Token<"mono1000", string, "colors", "">;
        mono1100: import("@stitches/react/types/theme").Token<"mono1100", string, "colors", "">;
        bgPrimary: import("@stitches/react/types/theme").Token<"bgPrimary", string, "colors", "">;
        bgSecondary: import("@stitches/react/types/theme").Token<"bgSecondary", string, "colors", "">;
        bgTeritary: import("@stitches/react/types/theme").Token<"bgTeritary", string, "colors", "">;
        bgInversePrimary: import("@stitches/react/types/theme").Token<"bgInversePrimary", string, "colors", "">;
        bgInverseSecondary: import("@stitches/react/types/theme").Token<"bgInverseSecondary", string, "colors", "">;
        bgInverseTeritary: import("@stitches/react/types/theme").Token<"bgInverseTeritary", string, "colors", "">;
        fgPrimary: import("@stitches/react/types/theme").Token<"fgPrimary", string, "colors", "">;
        fgSecondary: import("@stitches/react/types/theme").Token<"fgSecondary", string, "colors", "">;
        fgTeritary: import("@stitches/react/types/theme").Token<"fgTeritary", string, "colors", "">;
        fgInversePrimary: import("@stitches/react/types/theme").Token<"fgInversePrimary", string, "colors", "">;
        fgInverseSecondary: import("@stitches/react/types/theme").Token<"fgInverseSecondary", string, "colors", "">;
        fgInverseTeritary: import("@stitches/react/types/theme").Token<"fgInverseTeritary", string, "colors", "">;
    };
    fonts: {
        text: import("@stitches/react/types/theme").Token<"text", string, "fonts", "">;
        digit: import("@stitches/react/types/theme").Token<"digit", string, "fonts", "">;
    };
    fontWeights: {
        thin: import("@stitches/react/types/theme").Token<"thin", string, "fontWeights", "">;
        extralight: import("@stitches/react/types/theme").Token<"extralight", string, "fontWeights", "">;
        light: import("@stitches/react/types/theme").Token<"light", string, "fontWeights", "">;
        normal: import("@stitches/react/types/theme").Token<"normal", string, "fontWeights", "">;
        regular: import("@stitches/react/types/theme").Token<"regular", string, "fontWeights", "">;
        medium: import("@stitches/react/types/theme").Token<"medium", string, "fontWeights", "">;
        semibold: import("@stitches/react/types/theme").Token<"semibold", string, "fontWeights", "">;
        bold: import("@stitches/react/types/theme").Token<"bold", string, "fontWeights", "">;
        extrabold: import("@stitches/react/types/theme").Token<"extrabold", string, "fontWeights", "">;
        heavy: import("@stitches/react/types/theme").Token<"heavy", string, "fontWeights", "">;
        black: import("@stitches/react/types/theme").Token<"black", string, "fontWeights", "">;
    };
    fontSizes: {
        h1: import("@stitches/react/types/theme").Token<"h1", string, "fontSizes", "">;
        h2: import("@stitches/react/types/theme").Token<"h2", string, "fontSizes", "">;
        h3: import("@stitches/react/types/theme").Token<"h3", string, "fontSizes", "">;
        h4: import("@stitches/react/types/theme").Token<"h4", string, "fontSizes", "">;
        h5: import("@stitches/react/types/theme").Token<"h5", string, "fontSizes", "">;
        h6: import("@stitches/react/types/theme").Token<"h6", string, "fontSizes", "">;
        xs: import("@stitches/react/types/theme").Token<"xs", string, "fontSizes", "">;
        sm: import("@stitches/react/types/theme").Token<"sm", string, "fontSizes", "">;
        base: import("@stitches/react/types/theme").Token<"base", string, "fontSizes", "">;
        lg: import("@stitches/react/types/theme").Token<"lg", string, "fontSizes", "">;
        xl: import("@stitches/react/types/theme").Token<"xl", string, "fontSizes", "">;
        '2xl': import("@stitches/react/types/theme").Token<"2xl", string, "fontSizes", "">;
        '3xl': import("@stitches/react/types/theme").Token<"3xl", string, "fontSizes", "">;
        '4xl': import("@stitches/react/types/theme").Token<"4xl", string, "fontSizes", "">;
        '5xl': import("@stitches/react/types/theme").Token<"5xl", string, "fontSizes", "">;
        '6xl': import("@stitches/react/types/theme").Token<"6xl", string, "fontSizes", "">;
        '7xl': import("@stitches/react/types/theme").Token<"7xl", string, "fontSizes", "">;
        '8xl': import("@stitches/react/types/theme").Token<"8xl", string, "fontSizes", "">;
        '9xl': import("@stitches/react/types/theme").Token<"9xl", string, "fontSizes", "">;
    };
    lineHeights: {
        base: import("@stitches/react/types/theme").Token<"base", string, "lineHeights", "">;
        tight: import("@stitches/react/types/theme").Token<"tight", string, "lineHeights", "">;
        normal: import("@stitches/react/types/theme").Token<"normal", string, "lineHeights", "">;
        loose: import("@stitches/react/types/theme").Token<"loose", string, "lineHeights", "">;
        3: import("@stitches/react/types/theme").Token<"3", string, "lineHeights", "">;
        4: import("@stitches/react/types/theme").Token<"4", string, "lineHeights", "">;
        5: import("@stitches/react/types/theme").Token<"5", string, "lineHeights", "">;
        6: import("@stitches/react/types/theme").Token<"6", string, "lineHeights", "">;
        7: import("@stitches/react/types/theme").Token<"7", string, "lineHeights", "">;
        8: import("@stitches/react/types/theme").Token<"8", string, "lineHeights", "">;
        9: import("@stitches/react/types/theme").Token<"9", string, "lineHeights", "">;
        10: import("@stitches/react/types/theme").Token<"10", string, "lineHeights", "">;
    };
    letterSpacings: {
        tighter: import("@stitches/react/types/theme").Token<"tighter", string, "letterSpacings", "">;
        tight: import("@stitches/react/types/theme").Token<"tight", string, "letterSpacings", "">;
        normal: import("@stitches/react/types/theme").Token<"normal", string, "letterSpacings", "">;
        wide: import("@stitches/react/types/theme").Token<"wide", string, "letterSpacings", "">;
        wider: import("@stitches/react/types/theme").Token<"wider", string, "letterSpacings", "">;
        widest: import("@stitches/react/types/theme").Token<"widest", string, "letterSpacings", "">;
    };
    radii: {
        radius4: import("@stitches/react/types/theme").Token<"radius4", string, "radii", "">;
        radius6: import("@stitches/react/types/theme").Token<"radius6", string, "radii", "">;
        radius8: import("@stitches/react/types/theme").Token<"radius8", string, "radii", "">;
        radius12: import("@stitches/react/types/theme").Token<"radius12", string, "radii", "">;
        radius16: import("@stitches/react/types/theme").Token<"radius16", string, "radii", "">;
        round: import("@stitches/react/types/theme").Token<"round", string, "radii", "">;
        pill: import("@stitches/react/types/theme").Token<"pill", string, "radii", "">;
    };
    zIndices: {
        1: import("@stitches/react/types/theme").Token<"1", string, "zIndices", "">;
        2: import("@stitches/react/types/theme").Token<"2", string, "zIndices", "">;
        3: import("@stitches/react/types/theme").Token<"3", string, "zIndices", "">;
        4: import("@stitches/react/types/theme").Token<"4", string, "zIndices", "">;
        5: import("@stitches/react/types/theme").Token<"5", string, "zIndices", "">;
        6: import("@stitches/react/types/theme").Token<"6", string, "zIndices", "">;
        7: import("@stitches/react/types/theme").Token<"7", string, "zIndices", "">;
        8: import("@stitches/react/types/theme").Token<"8", string, "zIndices", "">;
        9: import("@stitches/react/types/theme").Token<"9", string, "zIndices", "">;
        select: import("@stitches/react/types/theme").Token<"select", string, "zIndices", "">;
        modal: import("@stitches/react/types/theme").Token<"modal", string, "zIndices", "">;
        toast: import("@stitches/react/types/theme").Token<"toast", string, "zIndices", "">;
        alert: import("@stitches/react/types/theme").Token<"alert", string, "zIndices", "">;
        max: import("@stitches/react/types/theme").Token<"max", string, "zIndices", "">;
    };
    sizes: {
        size5: import("@stitches/react/types/theme").Token<"size5", string, "sizes", "">;
        size10: import("@stitches/react/types/theme").Token<"size10", string, "sizes", "">;
        size15: import("@stitches/react/types/theme").Token<"size15", string, "sizes", "">;
        size20: import("@stitches/react/types/theme").Token<"size20", string, "sizes", "">;
        size25: import("@stitches/react/types/theme").Token<"size25", string, "sizes", "">;
        size35: import("@stitches/react/types/theme").Token<"size35", string, "sizes", "">;
        size45: import("@stitches/react/types/theme").Token<"size45", string, "sizes", "">;
        size65: import("@stitches/react/types/theme").Token<"size65", string, "sizes", "">;
        size80: import("@stitches/react/types/theme").Token<"size80", string, "sizes", "">;
        sm: import("@stitches/react/types/theme").Token<"sm", string, "sizes", "">;
        md: import("@stitches/react/types/theme").Token<"md", string, "sizes", "">;
        lg: import("@stitches/react/types/theme").Token<"lg", string, "sizes", "">;
        xl: import("@stitches/react/types/theme").Token<"xl", string, "sizes", "">;
        '2xl': import("@stitches/react/types/theme").Token<"2xl", string, "sizes", "">;
    };
    space: {
        space5: import("@stitches/react/types/theme").Token<"space5", string, "space", "">;
        space10: import("@stitches/react/types/theme").Token<"space10", string, "space", "">;
        space15: import("@stitches/react/types/theme").Token<"space15", string, "space", "">;
        space20: import("@stitches/react/types/theme").Token<"space20", string, "space", "">;
        space25: import("@stitches/react/types/theme").Token<"space25", string, "space", "">;
        space35: import("@stitches/react/types/theme").Token<"space35", string, "space", "">;
        space45: import("@stitches/react/types/theme").Token<"space45", string, "space", "">;
        space65: import("@stitches/react/types/theme").Token<"space65", string, "space", "">;
        space80: import("@stitches/react/types/theme").Token<"space80", string, "space", "">;
        sm: import("@stitches/react/types/theme").Token<"sm", string, "space", "">;
        md: import("@stitches/react/types/theme").Token<"md", string, "space", "">;
        lg: import("@stitches/react/types/theme").Token<"lg", string, "space", "">;
        xl: import("@stitches/react/types/theme").Token<"xl", string, "space", "">;
        '2xl': import("@stitches/react/types/theme").Token<"2xl", string, "space", "">;
    };
};
declare const darkTheme: string & {
    className: string;
    selector: string;
} & import("@stitches/react/types/stitches").ThemeTokens<{
    colors: {
        transparent: string;
        current: string;
        white: string;
        black: string;
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
}, "">;
export declare const darkThemeClassName: string;
export { styled, lightTheme, darkTheme };
