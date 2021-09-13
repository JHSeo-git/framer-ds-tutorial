import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerScrollablePaneBase = props => {
    return <System.ScrollablePaneBase {...props}></System.ScrollablePaneBase>
}

export const ScrollablePaneBase = withHOC(InnerScrollablePaneBase)

ScrollablePaneBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ScrollablePaneBase, {
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
