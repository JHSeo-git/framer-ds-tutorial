import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerFabricBase = props => {
    return <System.FabricBase {...props}></System.FabricBase>
}

export const FabricBase = withHOC(InnerFabricBase)

FabricBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(FabricBase, {
    as: {
        title: "As",
        type: ControlType.Enum,
        options: [
            "symbol",
            "object",
            "main",
            "article",
            "button",
            "dialog",
            "figure",
            "form",
            "img",
            "link",
            "menu",
            "menuitem",
            "option",
            "switch",
            "table",
            "text",
            "time",
            "image",
            "a",
            "abbr",
            "address",
            "area",
            "aside",
            "audio",
            "b",
            "base",
            "bdi",
            "bdo",
            "big",
            "blockquote",
            "body",
            "br",
            "canvas",
            "caption",
            "cite",
            "code",
            "col",
            "colgroup",
            "data",
            "datalist",
            "dd",
            "del",
            "details",
            "dfn",
            "div",
            "dl",
            "dt",
            "em",
            "embed",
            "fieldset",
            "figcaption",
            "footer",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "head",
            "header",
            "hgroup",
            "hr",
            "html",
            "i",
            "iframe",
            "input",
            "ins",
            "kbd",
            "keygen",
            "label",
            "legend",
            "li",
            "map",
            "mark",
            "meta",
            "meter",
            "nav",
            "noindex",
            "noscript",
            "ol",
            "optgroup",
            "output",
            "p",
            "param",
            "picture",
            "pre",
            "progress",
            "q",
            "rp",
            "rt",
            "ruby",
            "s",
            "samp",
            "slot",
            "script",
            "section",
            "select",
            "small",
            "source",
            "span",
            "strong",
            "style",
            "sub",
            "summary",
            "sup",
            "template",
            "tbody",
            "td",
            "textarea",
            "tfoot",
            "th",
            "thead",
            "title",
            "tr",
            "track",
            "u",
            "ul",
            "var",
            "video",
            "wbr",
            "webview",
            "svg",
            "animate",
            "animateMotion",
            "animateTransform",
            "circle",
            "clipPath",
            "defs",
            "desc",
            "ellipse",
            "feBlend",
            "feColorMatrix",
            "feComponentTransfer",
            "feComposite",
            "feConvolveMatrix",
            "feDiffuseLighting",
            "feDisplacementMap",
            "feDistantLight",
            "feDropShadow",
            "feFlood",
            "feFuncA",
            "feFuncB",
            "feFuncG",
            "feFuncR",
            "feGaussianBlur",
            "feImage",
            "feMerge",
            "feMergeNode",
            "feMorphology",
            "feOffset",
            "fePointLight",
            "feSpecularLighting",
            "feSpotLight",
            "feTile",
            "feTurbulence",
            "filter",
            "foreignObject",
            "g",
            "line",
            "linearGradient",
            "marker",
            "mask",
            "metadata",
            "mpath",
            "path",
            "pattern",
            "polygon",
            "polyline",
            "radialGradient",
            "rect",
            "stop",
            "textPath",
            "tspan",
            "use",
            "view",
        ],
        optionTitles: [
            "symbol",
            "object",
            "main",
            "article",
            "button",
            "dialog",
            "figure",
            "form",
            "img",
            "link",
            "menu",
            "menuitem",
            "option",
            "switch",
            "table",
            "text",
            "time",
            "image",
            "a",
            "abbr",
            "address",
            "area",
            "aside",
            "audio",
            "b",
            "base",
            "bdi",
            "bdo",
            "big",
            "blockquote",
            "body",
            "br",
            "canvas",
            "caption",
            "cite",
            "code",
            "col",
            "colgroup",
            "data",
            "datalist",
            "dd",
            "del",
            "details",
            "dfn",
            "div",
            "dl",
            "dt",
            "em",
            "embed",
            "fieldset",
            "figcaption",
            "footer",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "head",
            "header",
            "hgroup",
            "hr",
            "html",
            "i",
            "iframe",
            "input",
            "ins",
            "kbd",
            "keygen",
            "label",
            "legend",
            "li",
            "map",
            "mark",
            "meta",
            "meter",
            "nav",
            "noindex",
            "noscript",
            "ol",
            "optgroup",
            "output",
            "p",
            "param",
            "picture",
            "pre",
            "progress",
            "q",
            "rp",
            "rt",
            "ruby",
            "s",
            "samp",
            "slot",
            "script",
            "section",
            "select",
            "small",
            "source",
            "span",
            "strong",
            "style",
            "sub",
            "summary",
            "sup",
            "template",
            "tbody",
            "td",
            "textarea",
            "tfoot",
            "th",
            "thead",
            "title",
            "tr",
            "track",
            "u",
            "ul",
            "var",
            "video",
            "wbr",
            "webview",
            "svg",
            "animate",
            "animate Motion",
            "animate Transform",
            "circle",
            "clip Path",
            "defs",
            "desc",
            "ellipse",
            "fe Blend",
            "fe Color Matrix",
            "fe Component Transfer",
            "fe Composite",
            "fe Convolve Matrix",
            "fe Diffuse Lighting",
            "fe Displacement Map",
            "fe Distant Light",
            "fe Drop Shadow",
            "fe Flood",
            "fe Func A",
            "fe Func B",
            "fe Func G",
            "fe Func R",
            "fe Gaussian Blur",
            "fe Image",
            "fe Merge",
            "fe Merge Node",
            "fe Morphology",
            "fe Offset",
            "fe Point Light",
            "fe Specular Lighting",
            "fe Spot Light",
            "fe Tile",
            "fe Turbulence",
            "filter",
            "foreign Object",
            "g",
            "line",
            "linear Gradient",
            "marker",
            "mask",
            "metadata",
            "mpath",
            "path",
            "pattern",
            "polygon",
            "polyline",
            "radial Gradient",
            "rect",
            "stop",
            "text Path",
            "tspan",
            "use",
            "view",
        ],
    },
    applyTheme: {
        title: "Apply theme",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    applyThemeToBody: {
        title: "Apply theme to body",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    dir: {
        title: "Dir",
        type: ControlType.Enum,
        options: ["auto", "rtl", "ltr"],
        optionTitles: ["auto", "rtl", "ltr"],
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
