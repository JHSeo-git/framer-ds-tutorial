import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerScrollablePane = props => {
    return <System.ScrollablePane {...props}></System.ScrollablePane>
}

export const ScrollablePane = withHOC(InnerScrollablePane)

ScrollablePane.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ScrollablePane, {
    initialScrollPosition: {
        title: "Initial scroll position",
        type: ControlType.Number,
    },
    scrollbarVisibility: {
        title: "Scrollbar visibility",
        type: ControlType.Enum,
        options: ["auto", "always"],
        optionTitles: ["auto", "always"],
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
