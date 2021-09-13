import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTooltipBase = props => {
    return <System.TooltipBase {...props}></System.TooltipBase>
}

export const TooltipBase = withHOC(InnerTooltipBase)

TooltipBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TooltipBase, {
    content: {
        title: "Content",
        type: ControlType.String,
    },
    delay: {
        title: "Delay",
        type: ControlType.Number,
    },
    maxWidth: {
        title: "Max width",
        type: ControlType.String,
    },
    directionalHint: {
        title: "Directional hint",
        type: ControlType.Number,
    },
    directionalHintForRTL: {
        title: "Directional hint for rtl",
        type: ControlType.Number,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
