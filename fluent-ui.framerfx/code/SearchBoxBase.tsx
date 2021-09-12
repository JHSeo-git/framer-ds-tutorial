import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSearchBoxBase = props => {
    return <System.SearchBoxBase {...props}></System.SearchBoxBase>
}

export const SearchBoxBase = withHOC(InnerSearchBoxBase)

SearchBoxBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SearchBoxBase, {
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
    labelText: {
        title: "Label text",
        type: ControlType.String,
        defaultValue: "labelText",
    },
    value: {
        title: "Value",
        type: ControlType.String,
    },
    defaultValue: {
        title: "Default value",
        type: ControlType.String,
    },
    role: {
        title: "Role",
        type: ControlType.String,
    },
    underlined: {
        title: "Underlined",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    disableAnimation: {
        title: "Disable animation",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    checked: {
        title: "Checked",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
