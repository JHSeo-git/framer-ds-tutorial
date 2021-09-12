import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerText = props => {
    return <System.Text {...props}></System.Text>
}

export const Text = withHOC(InnerText)

Text.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Text, {
    as: {
        title: "As",
        type: ControlType.Enum,
        options: [
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
            "table",
            "time",
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
        ],
        optionTitles: [
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
            "table",
            "time",
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
        ],
    },
    variant: {
        title: "Variant",
        type: ControlType.Enum,
        options: [
            "small",
            "tiny",
            "xSmall",
            "smallPlus",
            "medium",
            "mediumPlus",
            "large",
            "xLarge",
            "xLargePlus",
            "xxLarge",
            "xxLargePlus",
            "superLarge",
            "mega",
        ],
        optionTitles: [
            "small",
            "tiny",
            "x Small",
            "small Plus",
            "medium",
            "medium Plus",
            "large",
            "x Large",
            "x Large Plus",
            "xx Large",
            "xx Large Plus",
            "super Large",
            "mega",
        ],
    },
    block: {
        title: "Block",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    nowrap: {
        title: "Nowrap",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
