import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerPeoplePickerItemBase = props => {
    return <System.PeoplePickerItemBase {...props}></System.PeoplePickerItemBase>
}

export const PeoplePickerItemBase = withHOC(InnerPeoplePickerItemBase)

PeoplePickerItemBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(PeoplePickerItemBase, {
    index: {
        title: "Index",
        type: ControlType.Number,
    },
    selected: {
        title: "Selected",
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
