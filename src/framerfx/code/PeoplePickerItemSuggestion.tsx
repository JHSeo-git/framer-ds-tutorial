import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerPeoplePickerItemSuggestion = props => {
    return <System.PeoplePickerItemSuggestion {...props}></System.PeoplePickerItemSuggestion>
}

export const PeoplePickerItemSuggestion = withHOC(InnerPeoplePickerItemSuggestion)

PeoplePickerItemSuggestion.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(PeoplePickerItemSuggestion, {
    compact: {
        title: "Compact",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
