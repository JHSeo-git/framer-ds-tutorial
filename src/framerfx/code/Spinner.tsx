import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSpinner = props => {
    return <System.Spinner {...props}></System.Spinner>
}

export const Spinner = withHOC(InnerSpinner)

Spinner.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Spinner, {
    type: {
        title: "Type",
        type: ControlType.Number,
    },
    size: {
        title: "Size",
        type: ControlType.Number,
    },
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "label",
    },
    labelPosition: {
        title: "Label position",
        type: ControlType.Enum,
        options: ["top", "right", "bottom", "left"],
        optionTitles: ["top", "right", "bottom", "left"],
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
