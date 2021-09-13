import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTagItemSuggestionBase = props => {
    return <System.TagItemSuggestionBase {...props}></System.TagItemSuggestionBase>
}

export const TagItemSuggestionBase = withHOC(InnerTagItemSuggestionBase)

TagItemSuggestionBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TagItemSuggestionBase, {
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
