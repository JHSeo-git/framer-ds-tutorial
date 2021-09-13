import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerToggle = props => {
    return <System.Toggle {...props}></System.Toggle>
}

export const Toggle = withHOC(InnerToggle)

Toggle.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Toggle, {
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "label",
    },
    onText: {
        title: "On text",
        type: ControlType.String,
        defaultValue: "onText",
    },
    offText: {
        title: "Off text",
        type: ControlType.String,
        defaultValue: "offText",
    },
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
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    inlineLabel: {
        title: "Inline label",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    role: {
        title: "Role",
        type: ControlType.Enum,
        options: ["checkbox", "menuitemcheckbox", "switch"],
        optionTitles: ["checkbox", "menuitemcheckbox", "switch"],
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
