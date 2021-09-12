import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTextField = props => {
    return <System.TextField {...props}></System.TextField>
}

export const TextField = withHOC(InnerTextField)

TextField.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TextField, {
    multiline: {
        title: "Multiline",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    resizable: {
        title: "Resizable",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    autoAdjustHeight: {
        title: "Auto adjust height",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    underlined: {
        title: "Underlined",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    borderless: {
        title: "Borderless",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "label",
    },
    description: {
        title: "Description",
        type: ControlType.String,
        defaultValue: "description",
    },
    prefix: {
        title: "Prefix",
        type: ControlType.String,
    },
    suffix: {
        title: "Suffix",
        type: ControlType.String,
    },
    defaultValue: {
        title: "Default value",
        type: ControlType.String,
    },
    value: {
        title: "Value",
        type: ControlType.String,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    readOnly: {
        title: "Read only",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    errorMessage: {
        title: "Error message",
        type: ControlType.String,
    },
    deferredValidationTime: {
        title: "Deferred validation time",
        type: ControlType.Number,
    },
    inputClassName: {
        title: "Input class name",
        type: ControlType.String,
    },
    validateOnFocusIn: {
        title: "Validate on focus in",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    validateOnFocusOut: {
        title: "Validate on focus out",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    validateOnLoad: {
        title: "Validate on load",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    autoComplete: {
        title: "Auto complete",
        type: ControlType.String,
    },
    canRevealPassword: {
        title: "Can reveal password",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    mask: {
        title: "Mask",
        type: ControlType.String,
    },
    maskChar: {
        title: "Mask char",
        type: ControlType.String,
    },
    checked: {
        title: "Checked",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
