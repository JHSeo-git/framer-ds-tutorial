import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerPeoplePickerItem = props => {
    return <System.PeoplePickerItem {...props}></System.PeoplePickerItem>
}

export const PeoplePickerItem = withHOC(InnerPeoplePickerItem)

PeoplePickerItem.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(PeoplePickerItem, {
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
