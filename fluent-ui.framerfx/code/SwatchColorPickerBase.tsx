import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSwatchColorPickerBase = props => {
    return <System.SwatchColorPickerBase {...props}></System.SwatchColorPickerBase>
}

export const SwatchColorPickerBase = withHOC(InnerSwatchColorPickerBase)

SwatchColorPickerBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SwatchColorPickerBase, {
    columnCount: {
        title: "Column count",
        type: ControlType.Number,
    },
    cellShape: {
        title: "Cell shape",
        type: ControlType.Enum,
        options: ["circle", "square"],
        optionTitles: ["circle", "square"],
    },
    selectedId: {
        title: "Selected id",
        type: ControlType.String,
    },
    isControlled: {
        title: "Is controlled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    positionInSet: {
        title: "Position in set",
        type: ControlType.Number,
    },
    setSize: {
        title: "Set size",
        type: ControlType.Number,
    },
    shouldFocusCircularNavigate: {
        title: "Should focus circular navigate",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    doNotContainWithinFocusZone: {
        title: "Do not contain within focus zone",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    cellMargin: {
        title: "Cell margin",
        type: ControlType.Number,
    },
    cellHeight: {
        title: "Cell height",
        type: ControlType.Number,
    },
    cellWidth: {
        title: "Cell width",
        type: ControlType.Number,
    },
    cellBorderWidth: {
        title: "Cell border width",
        type: ControlType.Number,
    },
    focusOnHover: {
        title: "Focus on hover",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    mouseLeaveParentSelector: {
        title: "Mouse leave parent selector",
        type: ControlType.String,
    },
})
