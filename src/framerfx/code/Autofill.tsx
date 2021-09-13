import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerAutofill = props => {
    return <System.Autofill {...props}></System.Autofill>
}

export const Autofill = withHOC(InnerAutofill)

Autofill.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Autofill, {
    suggestedDisplayValue: {
        title: "Suggested display value",
        type: ControlType.String,
    },
    enableAutofillOnKeyPress: {
        title: "Enable autofill on key press",
        type: ControlType.Array,
    },
    defaultVisibleValue: {
        title: "Default visible value",
        type: ControlType.String,
    },
    preventValueSelection: {
        title: "Prevent value selection",
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
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
