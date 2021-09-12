import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerColorPickerGridCell = props => {
    return <System.ColorPickerGridCell {...props}></System.ColorPickerGridCell>
}

export const ColorPickerGridCell = withHOC(InnerColorPickerGridCell)

ColorPickerGridCell.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ColorPickerGridCell, {
    idPrefix: {
        title: "Id prefix",
        type: ControlType.String,
    },
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "label",
    },
    color: {
        title: "Color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    index: {
        title: "Index",
        type: ControlType.Number,
    },
    circle: {
        title: "Circle",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    selected: {
        title: "Selected",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    height: {
        title: "Height",
        type: ControlType.Number,
    },
    width: {
        title: "Width",
        type: ControlType.Number,
    },
    borderWidth: {
        title: "Border width",
        type: ControlType.Number,
    },
})
