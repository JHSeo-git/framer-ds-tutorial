import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSuggestionsControl = props => {
    return <System.SuggestionsControl {...props}></System.SuggestionsControl>
}

export const SuggestionsControl = withHOC(InnerSuggestionsControl)

SuggestionsControl.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SuggestionsControl, {
    suggestionsAvailableAlertText: {
        title: "Suggestions available alert text",
        type: ControlType.String,
        defaultValue: "suggestionsAvailableAlertText",
    },
    suggestionsItemClassName: {
        title: "Suggestions item class name",
        type: ControlType.String,
    },
    resultsMaximumNumber: {
        title: "Results maximum number",
        type: ControlType.Number,
    },
    showRemoveButtons: {
        title: "Show remove buttons",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    shouldLoopSelection: {
        title: "Should loop selection",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
