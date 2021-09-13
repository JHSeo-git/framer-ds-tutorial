import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTagItemSuggestion = props => {
    return <System.TagItemSuggestion {...props}></System.TagItemSuggestion>
}

export const TagItemSuggestion = withHOC(InnerTagItemSuggestion)

TagItemSuggestion.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TagItemSuggestion, {
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
