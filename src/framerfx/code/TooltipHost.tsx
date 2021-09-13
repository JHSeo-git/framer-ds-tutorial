import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTooltipHost = props => {
    return <System.TooltipHost {...props}></System.TooltipHost>
}

export const TooltipHost = withHOC(InnerTooltipHost)

TooltipHost.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TooltipHost, {
    closeDelay: {
        title: "Close delay",
        type: ControlType.Number,
    },
    content: {
        title: "Content",
        type: ControlType.String,
    },
    delay: {
        title: "Delay",
        type: ControlType.Number,
    },
    directionalHint: {
        title: "Directional hint",
        type: ControlType.Number,
    },
    directionalHintForRTL: {
        title: "Directional hint for rtl",
        type: ControlType.Number,
    },
    hostClassName: {
        title: "Host class name",
        type: ControlType.String,
    },
    overflowMode: {
        title: "Overflow mode",
        type: ControlType.Number,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
