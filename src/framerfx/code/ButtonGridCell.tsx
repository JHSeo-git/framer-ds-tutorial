import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerButtonGridCell = props => {
    return <System.ButtonGridCell {...props}></System.ButtonGridCell>
}

export const ButtonGridCell = withHOC(InnerButtonGridCell)

ButtonGridCell.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ButtonGridCell, {
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
    role: {
        title: "Role",
        type: ControlType.String,
    },
    cellDisabledStyle: {
        title: "Cell disabled style",
        type: ControlType.Array,
    },
    cellIsSelectedStyle: {
        title: "Cell is selected style",
        type: ControlType.Array,
    },
    index: {
        title: "Index",
        type: ControlType.Number,
    },
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "label",
    },
})
