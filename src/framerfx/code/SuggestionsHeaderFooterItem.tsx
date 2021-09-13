import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSuggestionsHeaderFooterItem = props => {
    return <System.SuggestionsHeaderFooterItem {...props}></System.SuggestionsHeaderFooterItem>
}

export const SuggestionsHeaderFooterItem = withHOC(InnerSuggestionsHeaderFooterItem)

SuggestionsHeaderFooterItem.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SuggestionsHeaderFooterItem, {
    isSelected: {
        title: "Is selected",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
