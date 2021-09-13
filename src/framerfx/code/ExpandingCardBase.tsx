import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerExpandingCardBase = props => {
    return <System.ExpandingCardBase {...props}></System.ExpandingCardBase>
}

export const ExpandingCardBase = withHOC(InnerExpandingCardBase)

ExpandingCardBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ExpandingCardBase, {
    compactCardHeight: {
        title: "Compact card height",
        type: ControlType.Number,
    },
    expandedCardHeight: {
        title: "Expanded card height",
        type: ControlType.Number,
    },
    mode: {
        title: "Mode",
        type: ControlType.Number,
    },
    directionalHint: {
        title: "Directional hint",
        type: ControlType.Number,
    },
    directionalHintFixed: {
        title: "Directional hint fixed",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    firstFocus: {
        title: "First focus",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    gapSpace: {
        title: "Gap space",
        type: ControlType.Number,
    },
    trapFocus: {
        title: "Trap focus",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
