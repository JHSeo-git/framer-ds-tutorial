import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerPeoplePickerItemSuggestionBase = props => {
    return <System.PeoplePickerItemSuggestionBase {...props}></System.PeoplePickerItemSuggestionBase>
}

export const PeoplePickerItemSuggestionBase = withHOC(InnerPeoplePickerItemSuggestionBase)

PeoplePickerItemSuggestionBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(PeoplePickerItemSuggestionBase, {
    compact: {
        title: "Compact",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
