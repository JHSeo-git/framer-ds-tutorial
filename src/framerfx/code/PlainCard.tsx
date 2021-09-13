import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerPlainCard = props => {
    return <System.PlainCard {...props}></System.PlainCard>
}

export const PlainCard = withHOC(InnerPlainCard)

PlainCard.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(PlainCard, {
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
