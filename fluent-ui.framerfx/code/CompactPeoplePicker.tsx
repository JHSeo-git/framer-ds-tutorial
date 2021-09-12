import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerCompactPeoplePicker = props => {
    return <System.CompactPeoplePicker {...props}></System.CompactPeoplePicker>
}

export const CompactPeoplePicker = withHOC(InnerCompactPeoplePicker)

CompactPeoplePicker.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(CompactPeoplePicker, {
    resolveDelay: {
        title: "Resolve delay",
        type: ControlType.Number,
    },
    searchingText: {
        title: "Searching text",
        type: ControlType.String,
        defaultValue: "searchingText",
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    itemLimit: {
        title: "Item limit",
        type: ControlType.Number,
    },
    enableSelectedSuggestionAlert: {
        title: "Enable selected suggestion alert",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
