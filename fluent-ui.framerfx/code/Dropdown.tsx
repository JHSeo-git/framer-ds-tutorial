import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerDropdown = props => {
    return <System.Dropdown {...props}></System.Dropdown>
}

export const Dropdown = withHOC(InnerDropdown)

Dropdown.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Dropdown, {
    placeHolder: {
        title: "Place holder",
        type: ControlType.String,
        defaultValue: "placeHolder",
    },
    dropdownWidth: {
        title: "Dropdown width",
        type: ControlType.Enum,
        options: ["auto"],
        optionTitles: ["auto"],
    },
    responsiveMode: {
        title: "Responsive mode",
        type: ControlType.Number,
    },
    multiSelectDelimiter: {
        title: "Multi select delimiter",
        type: ControlType.String,
    },
    notifyOnReselect: {
        title: "Notify on reselect",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isDisabled: {
        title: "Is disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "label",
    },
    defaultSelectedKey: {
        title: "Default selected key",
        type: ControlType.String,
    },
    selectedKey: {
        title: "Selected key",
        type: ControlType.String,
    },
    multiSelect: {
        title: "Multi select",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    required: {
        title: "Required",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    errorMessage: {
        title: "Error message",
        type: ControlType.String,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
    openOnKeyboardFocus: {
        title: "Open on keyboard focus",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
