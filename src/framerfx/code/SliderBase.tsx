import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSliderBase = props => {
    return <System.SliderBase {...props}></System.SliderBase>
}

export const SliderBase = withHOC(InnerSliderBase)

SliderBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SliderBase, {
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "label",
    },
    defaultValue: {
        title: "Default value",
        type: ControlType.Number,
    },
    value: {
        title: "Value",
        type: ControlType.Number,
    },
    defaultLowerValue: {
        title: "Default lower value",
        type: ControlType.Number,
    },
    lowerValue: {
        title: "Lower value",
        type: ControlType.Number,
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
    showValue: {
        title: "Show value",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    ranged: {
        title: "Ranged",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    vertical: {
        title: "Vertical",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    snapToStep: {
        title: "Snap to step",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    originFromZero: {
        title: "Origin from zero",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
