import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerChoiceGroupBase = props => {
    return <System.ChoiceGroupBase {...props}></System.ChoiceGroupBase>
}

export const ChoiceGroupBase = withHOC(InnerChoiceGroupBase)

ChoiceGroupBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ChoiceGroupBase, {
    defaultSelectedKey: {
        title: "Default selected key",
        type: ControlType.String,
    },
    selectedKey: {
        title: "Selected key",
        type: ControlType.String,
    },
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "label",
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
