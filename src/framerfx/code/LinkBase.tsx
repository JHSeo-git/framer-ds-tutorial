import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerLinkBase = props => {
    return <System.LinkBase {...props}></System.LinkBase>
}

export const LinkBase = withHOC(InnerLinkBase)

LinkBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(LinkBase, {
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    as: {
        title: "As",
        type: ControlType.String,
    },
    underline: {
        title: "Underline",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    type: {
        title: "Type",
        type: ControlType.String,
    },
    href: {
        title: "Href",
        type: ControlType.String,
        defaultValue: "https://framer.com",
    },
    hrefLang: {
        title: "Href lang",
        type: ControlType.String,
    },
    media: {
        title: "Media",
        type: ControlType.String,
    },
    rel: {
        title: "Rel",
        type: ControlType.String,
    },
    target: {
        title: "Target",
        type: ControlType.String,
    },
    autoFocus: {
        title: "Auto focus",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    form: {
        title: "Form",
        type: ControlType.String,
    },
    formAction: {
        title: "Form action",
        type: ControlType.String,
    },
    formEncType: {
        title: "Form enc type",
        type: ControlType.String,
    },
    formMethod: {
        title: "Form method",
        type: ControlType.String,
    },
    formNoValidate: {
        title: "Form no validate",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    formTarget: {
        title: "Form target",
        type: ControlType.String,
    },
    name: {
        title: "Name",
        type: ControlType.String,
    },
    value: {
        title: "Value",
        type: ControlType.String,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
