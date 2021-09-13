import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSuggestionsCore = props => {
    return <System.SuggestionsCore {...props}></System.SuggestionsCore>
}

export const SuggestionsCore = withHOC(InnerSuggestionsCore)

SuggestionsCore.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SuggestionsCore, {
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
