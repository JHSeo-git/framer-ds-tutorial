import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerVirtualizedComboBox = props => {
    return <System.VirtualizedComboBox {...props}></System.VirtualizedComboBox>
}

export const VirtualizedComboBox = withHOC(InnerVirtualizedComboBox)

VirtualizedComboBox.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(VirtualizedComboBox, {
    allowFreeform: {
        title: "Allow freeform",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    autoComplete: {
        title: "Auto complete",
        type: ControlType.Enum,
        options: ["on", "off"],
        optionTitles: ["on", "off"],
    },
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "text",
    },
    multiSelectDelimiter: {
        title: "Multi select delimiter",
        type: ControlType.String,
    },
    scrollSelectedToTop: {
        title: "Scroll selected to top",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    dropdownWidth: {
        title: "Dropdown width",
        type: ControlType.Number,
    },
    useComboBoxAsMenuWidth: {
        title: "Use combo box as menu width",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    dropdownMaxWidth: {
        title: "Dropdown max width",
        type: ControlType.Number,
    },
    persistMenu: {
        title: "Persist menu",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    shouldRestoreFocus: {
        title: "Should restore focus",
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
