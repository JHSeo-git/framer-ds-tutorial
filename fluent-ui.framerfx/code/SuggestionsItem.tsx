import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSuggestionsItem = props => {
    return <System.SuggestionsItem {...props}></System.SuggestionsItem>
}

export const SuggestionsItem = withHOC(InnerSuggestionsItem)

SuggestionsItem.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SuggestionsItem, {
    showRemoveButton: {
        title: "Show remove button",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isSelectedOverride: {
        title: "Is selected override",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
