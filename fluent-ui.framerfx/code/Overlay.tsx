import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerOverlay = props => {
    return <System.Overlay {...props}></System.Overlay>
}

export const Overlay = withHOC(InnerOverlay)

Overlay.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Overlay, {
    isDarkThemed: {
        title: "Is dark themed",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    allowTouchBodyScroll: {
        title: "Allow touch body scroll",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
