import React from 'react';
export declare type CardProps = {
    children: React.ReactNode;
} & React.ComponentProps<typeof BaseCard>;
declare const Card: ({ children, ...rest }: CardProps) => JSX.Element;
declare const BaseCard: import("@stitches/react/types/styled-component").StyledComponent<import("framer-motion").ForwardRefComponent<HTMLDivElement, import("framer-motion").HTMLMotionProps<"div">>, {
    variant?: "active" | "ghost" | "interactive" | undefined;
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
        primaryA1: string;
        primaryA2: string;
        primaryA3: string;
        primaryA4: string;
        primaryA5: string;
        primaryA6: string;
        primaryA7: string;
        primaryA8: string;
        primaryA9: string;
        primaryA10: string;
        primaryA11: string;
        primaryA12: string;
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
        secondaryA1: string;
        secondaryA2: string;
        secondaryA3: string;
        secondaryA4: string;
        secondaryA5: string;
        secondaryA6: string;
        secondaryA7: string;
        secondaryA8: string;
        secondaryA9: string;
        secondaryA10: string;
        secondaryA11: string;
        secondaryA12: string;
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
        teritaryA1: string;
        teritaryA2: string;
        teritaryA3: string;
        teritaryA4: string;
        teritaryA5: string;
        teritaryA6: string;
        teritaryA7: string;
        teritaryA8: string;
        teritaryA9: string;
        teritaryA10: string;
        teritaryA11: string;
        teritaryA12: string;
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
        monoA1: string;
        monoA2: string;
        monoA3: string;
        monoA4: string;
        monoA5: string;
        monoA6: string;
        monoA7: string;
        monoA8: string;
        monoA9: string;
        monoA10: string;
        monoA11: string;
        monoA12: string;
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
        successA1: string;
        successA2: string;
        successA3: string;
        successA4: string;
        successA5: string;
        successA6: string;
        successA7: string;
        successA8: string;
        successA9: string;
        successA10: string;
        successA11: string;
        successA12: string;
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
        warningA1: string;
        warningA2: string;
        warningA3: string;
        warningA4: string;
        warningA5: string;
        warningA6: string;
        warningA7: string;
        warningA8: string;
        warningA9: string;
        warningA10: string;
        warningA11: string;
        warningA12: string;
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
        errorA1: string;
        errorA2: string;
        errorA3: string;
        errorA4: string;
        errorA5: string;
        errorA6: string;
        errorA7: string;
        errorA8: string;
        errorA9: string;
        errorA10: string;
        errorA11: string;
        errorA12: string;
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
    shadows: {
        shadow4: string;
        shadow5: string;
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
    brd: (value: import("@stitches/react").PropertyValue<"backgroundColor">) => {
        boxShadow: string;
    };
    brdFocus: (value: import("@stitches/react").PropertyValue<"backgroundColor">) => {
        boxShadow: string;
    };
    trz: ({ property }: {
        property: import("@stitches/react").PropertyValue<"transitionProperty">;
    }) => {
        transitionProperty: import("@stitches/react").PropertyValue<"transitionProperty">;
    };
}>>;
export default Card;
