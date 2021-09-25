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
        primary1: string;
        primary2: string;
        primary3: string;
        primary4: string;
        primary5: string;
        primary6: string;
        primary7: string;
        primary8: string;
        primary9: string;
        primary10: string;
        primary11: string;
        primary12: string;
        secondary1: string;
        secondary2: string;
        secondary3: string;
        secondary4: string;
        secondary5: string;
        secondary6: string;
        secondary7: string;
        secondary8: string;
        secondary9: string;
        secondary10: string;
        secondary11: string;
        secondary12: string;
        teritary1: string;
        teritary2: string;
        teritary3: string;
        teritary4: string;
        teritary5: string;
        teritary6: string;
        teritary7: string;
        teritary8: string;
        teritary9: string;
        teritary10: string;
        teritary11: string;
        teritary12: string;
        mono1: string;
        mono2: string;
        mono3: string;
        mono4: string;
        mono5: string;
        mono6: string;
        mono7: string;
        mono8: string;
        mono9: string;
        mono10: string;
        mono11: string;
        mono12: string;
        success1: string;
        success2: string;
        success3: string;
        success4: string;
        success5: string;
        success6: string;
        success7: string;
        success8: string;
        success9: string;
        success10: string;
        success11: string;
        success12: string;
        warning1: string;
        warning2: string;
        warning3: string;
        warning4: string;
        warning5: string;
        warning6: string;
        warning7: string;
        warning8: string;
        warning9: string;
        warning10: string;
        warning11: string;
        warning12: string;
        error1: string;
        error2: string;
        error3: string;
        error4: string;
        error5: string;
        error6: string;
        error7: string;
        error8: string;
        error9: string;
        error10: string;
        error11: string;
        error12: string;
        backgroundPrimary: string;
        backgroundSecondary: string;
        backgroundTeritary: string;
        backgroundInversePrimary: string;
        backgroundInverseSecondary: string;
        backgroundInverseTeritary: string;
        foregroundPrimary: string;
        foregroundSecondary: string;
        foregroundTeritary: string;
        foregroundInversePrimary: string;
        foregroundInverseSecondary: string;
        foregroundInverseTeritary: string;
        hiContrast: string;
        loContrast: string;
        canvas: string;
        panel: string;
        transparentPanel: string;
        shadowLight: string;
        shadowDark: string;
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
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {
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
        primary1: string;
        primary2: string;
        primary3: string;
        primary4: string;
        primary5: string;
        primary6: string;
        primary7: string;
        primary8: string;
        primary9: string;
        primary10: string;
        primary11: string;
        primary12: string;
        secondary1: string;
        secondary2: string;
        secondary3: string;
        secondary4: string;
        secondary5: string;
        secondary6: string;
        secondary7: string;
        secondary8: string;
        secondary9: string;
        secondary10: string;
        secondary11: string;
        secondary12: string;
        teritary1: string;
        teritary2: string;
        teritary3: string;
        teritary4: string;
        teritary5: string;
        teritary6: string;
        teritary7: string;
        teritary8: string;
        teritary9: string;
        teritary10: string;
        teritary11: string;
        teritary12: string;
        mono1: string;
        mono2: string;
        mono3: string;
        mono4: string;
        mono5: string;
        mono6: string;
        mono7: string;
        mono8: string;
        mono9: string;
        mono10: string;
        mono11: string;
        mono12: string;
        success1: string;
        success2: string;
        success3: string;
        success4: string;
        success5: string;
        success6: string;
        success7: string;
        success8: string;
        success9: string;
        success10: string;
        success11: string;
        success12: string;
        warning1: string;
        warning2: string;
        warning3: string;
        warning4: string;
        warning5: string;
        warning6: string;
        warning7: string;
        warning8: string;
        warning9: string;
        warning10: string;
        warning11: string;
        warning12: string;
        error1: string;
        error2: string;
        error3: string;
        error4: string;
        error5: string;
        error6: string;
        error7: string;
        error8: string;
        error9: string;
        error10: string;
        error11: string;
        error12: string;
        backgroundPrimary: string;
        backgroundSecondary: string;
        backgroundTeritary: string;
        backgroundInversePrimary: string;
        backgroundInverseSecondary: string;
        backgroundInverseTeritary: string;
        foregroundPrimary: string;
        foregroundSecondary: string;
        foregroundTeritary: string;
        foregroundInversePrimary: string;
        foregroundInverseSecondary: string;
        foregroundInverseTeritary: string;
        hiContrast: string;
        loContrast: string;
        canvas: string;
        panel: string;
        transparentPanel: string;
        shadowLight: string;
        shadowDark: string;
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
        primary1: import("@stitches/react/types/theme").Token<"primary1", string, "colors", "">;
        primary2: import("@stitches/react/types/theme").Token<"primary2", string, "colors", "">;
        primary3: import("@stitches/react/types/theme").Token<"primary3", string, "colors", "">;
        primary4: import("@stitches/react/types/theme").Token<"primary4", string, "colors", "">;
        primary5: import("@stitches/react/types/theme").Token<"primary5", string, "colors", "">;
        primary6: import("@stitches/react/types/theme").Token<"primary6", string, "colors", "">;
        primary7: import("@stitches/react/types/theme").Token<"primary7", string, "colors", "">;
        primary8: import("@stitches/react/types/theme").Token<"primary8", string, "colors", "">;
        primary9: import("@stitches/react/types/theme").Token<"primary9", string, "colors", "">;
        primary10: import("@stitches/react/types/theme").Token<"primary10", string, "colors", "">;
        primary11: import("@stitches/react/types/theme").Token<"primary11", string, "colors", "">;
        primary12: import("@stitches/react/types/theme").Token<"primary12", string, "colors", "">;
        secondary1: import("@stitches/react/types/theme").Token<"secondary1", string, "colors", "">;
        secondary2: import("@stitches/react/types/theme").Token<"secondary2", string, "colors", "">;
        secondary3: import("@stitches/react/types/theme").Token<"secondary3", string, "colors", "">;
        secondary4: import("@stitches/react/types/theme").Token<"secondary4", string, "colors", "">;
        secondary5: import("@stitches/react/types/theme").Token<"secondary5", string, "colors", "">;
        secondary6: import("@stitches/react/types/theme").Token<"secondary6", string, "colors", "">;
        secondary7: import("@stitches/react/types/theme").Token<"secondary7", string, "colors", "">;
        secondary8: import("@stitches/react/types/theme").Token<"secondary8", string, "colors", "">;
        secondary9: import("@stitches/react/types/theme").Token<"secondary9", string, "colors", "">;
        secondary10: import("@stitches/react/types/theme").Token<"secondary10", string, "colors", "">;
        secondary11: import("@stitches/react/types/theme").Token<"secondary11", string, "colors", "">;
        secondary12: import("@stitches/react/types/theme").Token<"secondary12", string, "colors", "">;
        teritary1: import("@stitches/react/types/theme").Token<"teritary1", string, "colors", "">;
        teritary2: import("@stitches/react/types/theme").Token<"teritary2", string, "colors", "">;
        teritary3: import("@stitches/react/types/theme").Token<"teritary3", string, "colors", "">;
        teritary4: import("@stitches/react/types/theme").Token<"teritary4", string, "colors", "">;
        teritary5: import("@stitches/react/types/theme").Token<"teritary5", string, "colors", "">;
        teritary6: import("@stitches/react/types/theme").Token<"teritary6", string, "colors", "">;
        teritary7: import("@stitches/react/types/theme").Token<"teritary7", string, "colors", "">;
        teritary8: import("@stitches/react/types/theme").Token<"teritary8", string, "colors", "">;
        teritary9: import("@stitches/react/types/theme").Token<"teritary9", string, "colors", "">;
        teritary10: import("@stitches/react/types/theme").Token<"teritary10", string, "colors", "">;
        teritary11: import("@stitches/react/types/theme").Token<"teritary11", string, "colors", "">;
        teritary12: import("@stitches/react/types/theme").Token<"teritary12", string, "colors", "">;
        mono1: import("@stitches/react/types/theme").Token<"mono1", string, "colors", "">;
        mono2: import("@stitches/react/types/theme").Token<"mono2", string, "colors", "">;
        mono3: import("@stitches/react/types/theme").Token<"mono3", string, "colors", "">;
        mono4: import("@stitches/react/types/theme").Token<"mono4", string, "colors", "">;
        mono5: import("@stitches/react/types/theme").Token<"mono5", string, "colors", "">;
        mono6: import("@stitches/react/types/theme").Token<"mono6", string, "colors", "">;
        mono7: import("@stitches/react/types/theme").Token<"mono7", string, "colors", "">;
        mono8: import("@stitches/react/types/theme").Token<"mono8", string, "colors", "">;
        mono9: import("@stitches/react/types/theme").Token<"mono9", string, "colors", "">;
        mono10: import("@stitches/react/types/theme").Token<"mono10", string, "colors", "">;
        mono11: import("@stitches/react/types/theme").Token<"mono11", string, "colors", "">;
        mono12: import("@stitches/react/types/theme").Token<"mono12", string, "colors", "">;
        success1: import("@stitches/react/types/theme").Token<"success1", string, "colors", "">;
        success2: import("@stitches/react/types/theme").Token<"success2", string, "colors", "">;
        success3: import("@stitches/react/types/theme").Token<"success3", string, "colors", "">;
        success4: import("@stitches/react/types/theme").Token<"success4", string, "colors", "">;
        success5: import("@stitches/react/types/theme").Token<"success5", string, "colors", "">;
        success6: import("@stitches/react/types/theme").Token<"success6", string, "colors", "">;
        success7: import("@stitches/react/types/theme").Token<"success7", string, "colors", "">;
        success8: import("@stitches/react/types/theme").Token<"success8", string, "colors", "">;
        success9: import("@stitches/react/types/theme").Token<"success9", string, "colors", "">;
        success10: import("@stitches/react/types/theme").Token<"success10", string, "colors", "">;
        success11: import("@stitches/react/types/theme").Token<"success11", string, "colors", "">;
        success12: import("@stitches/react/types/theme").Token<"success12", string, "colors", "">;
        warning1: import("@stitches/react/types/theme").Token<"warning1", string, "colors", "">;
        warning2: import("@stitches/react/types/theme").Token<"warning2", string, "colors", "">;
        warning3: import("@stitches/react/types/theme").Token<"warning3", string, "colors", "">;
        warning4: import("@stitches/react/types/theme").Token<"warning4", string, "colors", "">;
        warning5: import("@stitches/react/types/theme").Token<"warning5", string, "colors", "">;
        warning6: import("@stitches/react/types/theme").Token<"warning6", string, "colors", "">;
        warning7: import("@stitches/react/types/theme").Token<"warning7", string, "colors", "">;
        warning8: import("@stitches/react/types/theme").Token<"warning8", string, "colors", "">;
        warning9: import("@stitches/react/types/theme").Token<"warning9", string, "colors", "">;
        warning10: import("@stitches/react/types/theme").Token<"warning10", string, "colors", "">;
        warning11: import("@stitches/react/types/theme").Token<"warning11", string, "colors", "">;
        warning12: import("@stitches/react/types/theme").Token<"warning12", string, "colors", "">;
        error1: import("@stitches/react/types/theme").Token<"error1", string, "colors", "">;
        error2: import("@stitches/react/types/theme").Token<"error2", string, "colors", "">;
        error3: import("@stitches/react/types/theme").Token<"error3", string, "colors", "">;
        error4: import("@stitches/react/types/theme").Token<"error4", string, "colors", "">;
        error5: import("@stitches/react/types/theme").Token<"error5", string, "colors", "">;
        error6: import("@stitches/react/types/theme").Token<"error6", string, "colors", "">;
        error7: import("@stitches/react/types/theme").Token<"error7", string, "colors", "">;
        error8: import("@stitches/react/types/theme").Token<"error8", string, "colors", "">;
        error9: import("@stitches/react/types/theme").Token<"error9", string, "colors", "">;
        error10: import("@stitches/react/types/theme").Token<"error10", string, "colors", "">;
        error11: import("@stitches/react/types/theme").Token<"error11", string, "colors", "">;
        error12: import("@stitches/react/types/theme").Token<"error12", string, "colors", "">;
        backgroundPrimary: import("@stitches/react/types/theme").Token<"backgroundPrimary", string, "colors", "">;
        backgroundSecondary: import("@stitches/react/types/theme").Token<"backgroundSecondary", string, "colors", "">;
        backgroundTeritary: import("@stitches/react/types/theme").Token<"backgroundTeritary", string, "colors", "">;
        backgroundInversePrimary: import("@stitches/react/types/theme").Token<"backgroundInversePrimary", string, "colors", "">;
        backgroundInverseSecondary: import("@stitches/react/types/theme").Token<"backgroundInverseSecondary", string, "colors", "">;
        backgroundInverseTeritary: import("@stitches/react/types/theme").Token<"backgroundInverseTeritary", string, "colors", "">;
        foregroundPrimary: import("@stitches/react/types/theme").Token<"foregroundPrimary", string, "colors", "">;
        foregroundSecondary: import("@stitches/react/types/theme").Token<"foregroundSecondary", string, "colors", "">;
        foregroundTeritary: import("@stitches/react/types/theme").Token<"foregroundTeritary", string, "colors", "">;
        foregroundInversePrimary: import("@stitches/react/types/theme").Token<"foregroundInversePrimary", string, "colors", "">;
        foregroundInverseSecondary: import("@stitches/react/types/theme").Token<"foregroundInverseSecondary", string, "colors", "">;
        foregroundInverseTeritary: import("@stitches/react/types/theme").Token<"foregroundInverseTeritary", string, "colors", "">;
        hiContrast: import("@stitches/react/types/theme").Token<"hiContrast", string, "colors", "">;
        loContrast: import("@stitches/react/types/theme").Token<"loContrast", string, "colors", "">;
        canvas: import("@stitches/react/types/theme").Token<"canvas", string, "colors", "">;
        panel: import("@stitches/react/types/theme").Token<"panel", string, "colors", "">;
        transparentPanel: import("@stitches/react/types/theme").Token<"transparentPanel", string, "colors", "">;
        shadowLight: import("@stitches/react/types/theme").Token<"shadowLight", string, "colors", "">;
        shadowDark: import("@stitches/react/types/theme").Token<"shadowDark", string, "colors", "">;
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
}, getCssText: () => string;
declare const darkTheme: string & {
    className: string;
    selector: string;
} & import("@stitches/react/types/stitches").ThemeTokens<{
    colors: {
        transparent: string;
        current: string;
        white: string;
        black: string;
        primary1: string;
        primary2: string;
        primary3: string;
        primary4: string;
        primary5: string;
        primary6: string;
        primary7: string;
        primary8: string;
        primary9: string;
        primary10: string;
        primary11: string;
        primary12: string;
        secondary1: string;
        secondary2: string;
        secondary3: string;
        secondary4: string;
        secondary5: string;
        secondary6: string;
        secondary7: string;
        secondary8: string;
        secondary9: string;
        secondary10: string;
        secondary11: string;
        secondary12: string;
        teritary1: string;
        teritary2: string;
        teritary3: string;
        teritary4: string;
        teritary5: string;
        teritary6: string;
        teritary7: string;
        teritary8: string;
        teritary9: string;
        teritary10: string;
        teritary11: string;
        teritary12: string;
        mono1: string;
        mono2: string;
        mono3: string;
        mono4: string;
        mono5: string;
        mono6: string;
        mono7: string;
        mono8: string;
        mono9: string;
        mono10: string;
        mono11: string;
        mono12: string;
        success1: string;
        success2: string;
        success3: string;
        success4: string;
        success5: string;
        success6: string;
        success7: string;
        success8: string;
        success9: string;
        success10: string;
        success11: string;
        success12: string;
        warning1: string;
        warning2: string;
        warning3: string;
        warning4: string;
        warning5: string;
        warning6: string;
        warning7: string;
        warning8: string;
        warning9: string;
        warning10: string;
        warning11: string;
        warning12: string;
        error1: string;
        error2: string;
        error3: string;
        error4: string;
        error5: string;
        error6: string;
        error7: string;
        error8: string;
        error9: string;
        error10: string;
        error11: string;
        error12: string;
        backgroundPrimary: string;
        backgroundSecondary: string;
        backgroundTeritary: string;
        backgroundInversePrimary: string;
        backgroundInverseSecondary: string;
        backgroundInverseTeritary: string;
        foregroundPrimary: string;
        foregroundSecondary: string;
        foregroundTeritary: string;
        foregroundInversePrimary: string;
        foregroundInverseSecondary: string;
        foregroundInverseTeritary: string;
        hiContrast: string;
        loContrast: string;
        canvas: string;
        panel: string;
        transparentPanel: string;
        shadowLight: string;
        shadowDark: string;
    };
}, "">;
export declare const darkThemeClassName: string;
export { styled, getCssText, lightTheme, darkTheme };
