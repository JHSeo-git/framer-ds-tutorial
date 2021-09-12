import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSpinButton = props => {
    return <System.SpinButton {...props}></System.SpinButton>
}

export const SpinButton = withHOC(InnerSpinButton)

SpinButton.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SpinButton, {
    defaultValue: {
        title: "Default value",
        type: ControlType.String,
    },
    value: {
        title: "Value",
        type: ControlType.String,
    },
    min: {
        title: "Min",
        type: ControlType.Number,
    },
    max: {
        title: "Max",
        type: ControlType.Number,
    },
    step: {
        title: "Step",
        type: ControlType.Number,
    },
    title: {
        title: "Title",
        type: ControlType.String,
        defaultValue: "title",
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "label",
    },
    labelPosition: {
        title: "Label position",
        type: ControlType.Number,
    },
    precision: {
        title: "Precision",
        type: ControlType.Number,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
