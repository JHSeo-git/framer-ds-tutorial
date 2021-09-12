import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerHoverCardBase = props => {
    return <System.HoverCardBase {...props}></System.HoverCardBase>
}

export const HoverCardBase = withHOC(InnerHoverCardBase)

HoverCardBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(HoverCardBase, {
    cardDismissDelay: {
        title: "Card dismiss delay",
        type: ControlType.Number,
    },
    cardOpenDelay: {
        title: "Card open delay",
        type: ControlType.Number,
    },
    expandedCardOpenDelay: {
        title: "Expanded card open delay",
        type: ControlType.Number,
    },
    instantOpenOnClick: {
        title: "Instant open on click",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    openHotKey: {
        title: "Open hot key",
        type: ControlType.Number,
    },
    setInitialFocus: {
        title: "Set initial focus",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    sticky: {
        title: "Sticky",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    target: {
        title: "Target",
        type: ControlType.String,
    },
    eventListenerTarget: {
        title: "Event listener target",
        type: ControlType.String,
    },
    trapFocus: {
        title: "Trap focus",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    type: {
        title: "Type",
        type: ControlType.Enum,
        options: ["PlainCard", "ExpandingCard"],
        optionTitles: ["Plain Card", "Expanding Card"],
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
