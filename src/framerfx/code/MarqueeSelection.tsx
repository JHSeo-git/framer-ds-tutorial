import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerMarqueeSelection = props => {
    return <System.MarqueeSelection {...props}></System.MarqueeSelection>
}

export const MarqueeSelection = withHOC(InnerMarqueeSelection)

MarqueeSelection.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(MarqueeSelection, {
    isEnabled: {
        title: "Is enabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isDraggingConstrainedToRoot: {
        title: "Is dragging constrained to root",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
