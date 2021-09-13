import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerColorPickerBase = props => {
    return <System.ColorPickerBase {...props}></System.ColorPickerBase>
}

export const ColorPickerBase = withHOC(InnerColorPickerBase)

ColorPickerBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ColorPickerBase, {
    color: {
        title: "Color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    alphaType: {
        title: "Alpha type",
        type: ControlType.Enum,
        options: ["none", "alpha", "transparency"],
        optionTitles: ["none", "alpha", "transparency"],
    },
    alphaSliderHidden: {
        title: "Alpha slider hidden",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    hexLabel: {
        title: "Hex label",
        type: ControlType.String,
        defaultValue: "hexLabel",
    },
    redLabel: {
        title: "Red label",
        type: ControlType.String,
        defaultValue: "redLabel",
    },
    greenLabel: {
        title: "Green label",
        type: ControlType.String,
        defaultValue: "greenLabel",
    },
    blueLabel: {
        title: "Blue label",
        type: ControlType.String,
        defaultValue: "blueLabel",
    },
    alphaLabel: {
        title: "Alpha label",
        type: ControlType.String,
        defaultValue: "alphaLabel",
    },
    showPreview: {
        title: "Show preview",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
