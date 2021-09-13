import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerCheckboxBase = props => {
    return <System.CheckboxBase {...props}></System.CheckboxBase>
}

export const CheckboxBase = withHOC(InnerCheckboxBase)

CheckboxBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(CheckboxBase, {
    checked: {
        title: "Checked",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    defaultChecked: {
        title: "Default checked",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "label",
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    boxSide: {
        title: "Box side",
        type: ControlType.Enum,
        options: ["start", "end"],
        optionTitles: ["start", "end"],
    },
    indeterminate: {
        title: "Indeterminate",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    defaultIndeterminate: {
        title: "Default indeterminate",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
