import React from 'react';
export declare type GridProps = {
    children: React.ReactNode;
} & React.ComponentProps<typeof BaseGrid>;
declare const Grid: ({ children, ...rest }: GridProps) => JSX.Element;
declare const BaseGrid: import("@stitches/react/types/styled-component").StyledComponent<React.ForwardRefExoticComponent<{
    children?: React.ReactNode;
} & Pick<Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof React.HTMLAttributes<HTMLDivElement> | "key"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
}, "css"> & import("@stitches/react/types/styled-component").TransformProps<{}, {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    motion: string;
    hover: string;
    dark: string;
    light: string;
}> & {
    css?: import("@stitches/react/types/css-util").CSS<{
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
            muiShadow1: string;
            muiShadow2: string;
            muiShadow3: string;
            muiShadow4: string;
            muiShadow5: string;
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
    }> | undefined;
}, keyof React.HTMLAttributes<HTMLDivElement> | "key" | "css"> & Pick<{
    color?: string | undefined;
    translate?: "yes" | "no" | undefined;
    hidden?: boolean | undefined;
    property?: string | undefined;
    slot?: string | undefined;
    title?: string | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    className?: string | undefined;
    contentEditable?: "inherit" | (boolean | "true" | "false") | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | "true" | "false") | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    placeholder?: string | undefined;
    spellCheck?: (boolean | "true" | "false") | undefined;
    tabIndex?: number | undefined;
    radioGroup?: string | undefined;
    role?: React.AriaRole | undefined;
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    resource?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "text" | "none" | "search" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
    is?: string | undefined;
    "aria-activedescendant"?: string | undefined;
    "aria-atomic"?: (boolean | "true" | "false") | undefined;
    "aria-autocomplete"?: "both" | "none" | "inline" | "list" | undefined;
    "aria-busy"?: (boolean | "true" | "false") | undefined;
    "aria-checked"?: boolean | "mixed" | "true" | "false" | undefined;
    "aria-colcount"?: number | undefined;
    "aria-colindex"?: number | undefined;
    "aria-colspan"?: number | undefined;
    "aria-controls"?: string | undefined;
    "aria-current"?: boolean | "page" | "time" | "true" | "false" | "step" | "location" | "date" | undefined;
    "aria-describedby"?: string | undefined;
    "aria-details"?: string | undefined;
    "aria-disabled"?: (boolean | "true" | "false") | undefined;
    "aria-dropeffect"?: "none" | "copy" | "move" | "link" | "execute" | "popup" | undefined;
    "aria-errormessage"?: string | undefined;
    "aria-expanded"?: (boolean | "true" | "false") | undefined;
    "aria-flowto"?: string | undefined;
    "aria-grabbed"?: (boolean | "true" | "false") | undefined;
    "aria-haspopup"?: boolean | "grid" | "listbox" | "menu" | "dialog" | "true" | "false" | "tree" | undefined;
    "aria-hidden"?: (boolean | "true" | "false") | undefined;
    "aria-invalid"?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
    "aria-keyshortcuts"?: string | undefined;
    "aria-label"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    "aria-level"?: number | undefined;
    "aria-live"?: "off" | "assertive" | "polite" | undefined;
    "aria-modal"?: (boolean | "true" | "false") | undefined;
    "aria-multiline"?: (boolean | "true" | "false") | undefined;
    "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
    "aria-orientation"?: "horizontal" | "vertical" | undefined;
    "aria-owns"?: string | undefined;
    "aria-placeholder"?: string | undefined;
    "aria-posinset"?: number | undefined;
    "aria-pressed"?: boolean | "mixed" | "true" | "false" | undefined;
    "aria-readonly"?: (boolean | "true" | "false") | undefined;
    "aria-relevant"?: "text" | "all" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    "aria-required"?: (boolean | "true" | "false") | undefined;
    "aria-roledescription"?: string | undefined;
    "aria-rowcount"?: number | undefined;
    "aria-rowindex"?: number | undefined;
    "aria-rowspan"?: number | undefined;
    "aria-selected"?: (boolean | "true" | "false") | undefined;
    "aria-setsize"?: number | undefined;
    "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
    "aria-valuemax"?: number | undefined;
    "aria-valuemin"?: number | undefined;
    "aria-valuenow"?: number | undefined;
    "aria-valuetext"?: string | undefined;
    children?: React.ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string;
    } | undefined;
    onCopy?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onCopyCapture?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onCut?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onCutCapture?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onPaste?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onPasteCapture?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onCompositionEnd?: React.CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionEndCapture?: React.CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionStart?: React.CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionStartCapture?: React.CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionUpdate?: React.CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionUpdateCapture?: React.CompositionEventHandler<HTMLDivElement> | undefined;
    onFocus?: React.FocusEventHandler<HTMLDivElement> | undefined;
    onFocusCapture?: React.FocusEventHandler<HTMLDivElement> | undefined;
    onBlur?: React.FocusEventHandler<HTMLDivElement> | undefined;
    onBlurCapture?: React.FocusEventHandler<HTMLDivElement> | undefined;
    onChange?: React.FormEventHandler<HTMLDivElement> | undefined;
    onChangeCapture?: React.FormEventHandler<HTMLDivElement> | undefined;
    onBeforeInput?: React.FormEventHandler<HTMLDivElement> | undefined;
    onBeforeInputCapture?: React.FormEventHandler<HTMLDivElement> | undefined;
    onInput?: React.FormEventHandler<HTMLDivElement> | undefined;
    onInputCapture?: React.FormEventHandler<HTMLDivElement> | undefined;
    onReset?: React.FormEventHandler<HTMLDivElement> | undefined;
    onResetCapture?: React.FormEventHandler<HTMLDivElement> | undefined;
    onSubmit?: React.FormEventHandler<HTMLDivElement> | undefined;
    onSubmitCapture?: React.FormEventHandler<HTMLDivElement> | undefined;
    onInvalid?: React.FormEventHandler<HTMLDivElement> | undefined;
    onInvalidCapture?: React.FormEventHandler<HTMLDivElement> | undefined;
    onLoad?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onError?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onErrorCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyDownCapture?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyPress?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyPressCapture?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyUp?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyUpCapture?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onAbort?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onAbortCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlay?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlayCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlayThrough?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlayThroughCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onDurationChange?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onDurationChangeCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEmptied?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEmptiedCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEncrypted?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEncryptedCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEnded?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEndedCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedData?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedDataCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedMetadata?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedMetadataCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadStart?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadStartCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onPause?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onPauseCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onPlay?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onPlayCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onPlaying?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onPlayingCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onProgress?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onProgressCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onRateChange?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onRateChangeCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSeeked?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSeekedCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSeeking?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSeekingCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onStalled?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onStalledCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSuspend?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSuspendCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onTimeUpdate?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onTimeUpdateCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onVolumeChange?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onVolumeChangeCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onWaiting?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onWaitingCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onAuxClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onAuxClickCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onClickCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onContextMenu?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onContextMenuCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onDoubleClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onDoubleClickCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onDragCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragEndCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragEnter?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragEnterCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragExit?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragExitCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragLeave?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragLeaveCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragOver?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragOverCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragStartCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDrop?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDropCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onMouseDown?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseDownCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseMove?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseMoveCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOut?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOutCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOver?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOverCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseUp?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseUpCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onSelect?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSelectCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onTouchCancel?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchCancelCapture?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchEnd?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchEndCapture?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchMove?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchMoveCapture?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchStart?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchStartCapture?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onPointerDown?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerDownCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerMove?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerMoveCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerUp?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerUpCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerCancel?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerCancelCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerEnter?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerLeave?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOver?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOverCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOut?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOutCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onGotPointerCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onGotPointerCaptureCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onLostPointerCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onLostPointerCaptureCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onScroll?: React.UIEventHandler<HTMLDivElement> | undefined;
    onScrollCapture?: React.UIEventHandler<HTMLDivElement> | undefined;
    onWheel?: React.WheelEventHandler<HTMLDivElement> | undefined;
    onWheelCapture?: React.WheelEventHandler<HTMLDivElement> | undefined;
    onAnimationStartCapture?: React.AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationEnd?: React.AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationEndCapture?: React.AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationIteration?: React.AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationIterationCapture?: React.AnimationEventHandler<HTMLDivElement> | undefined;
    onTransitionEnd?: React.TransitionEventHandler<HTMLDivElement> | undefined;
    onTransitionEndCapture?: React.TransitionEventHandler<HTMLDivElement> | undefined;
} & import("framer-motion").MotionProps & React.RefAttributes<HTMLDivElement>, "color" | "translate" | "hidden" | "property" | "slot" | "title" | keyof import("framer-motion").MotionProps | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDragCapture" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key"> & {
    as?: React.ElementType<any> | undefined;
} & React.RefAttributes<HTMLDivElement>>, {
    align?: "stretch" | "center" | "end" | "start" | "baseline" | undefined;
    justify?: "center" | "end" | "start" | "between" | undefined;
    flow?: "column" | "row" | "dense" | "rowDense" | "columnDense" | undefined;
    columns?: "1" | "2" | 3 | 4 | 1 | 2 | "3" | "4" | undefined;
    gap?: "gap5" | "gap10" | "gap15" | "gap20" | "gap25" | "gap35" | "gap45" | "gap65" | "gap80" | undefined;
    gapX?: "gap5" | "gap10" | "gap15" | "gap20" | "gap25" | "gap35" | "gap45" | "gap65" | "gap80" | undefined;
    gapY?: "gap5" | "gap10" | "gap15" | "gap20" | "gap25" | "gap35" | "gap45" | "gap65" | "gap80" | undefined;
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
        muiShadow1: string;
        muiShadow2: string;
        muiShadow3: string;
        muiShadow4: string;
        muiShadow5: string;
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
export default Grid;