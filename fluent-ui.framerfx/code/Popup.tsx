import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerPopup = props => {
    return <System.Popup {...props}></System.Popup>
}

export const Popup = withHOC(InnerPopup)

Popup.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Popup, {
    role: {
        title: "Role",
        type: ControlType.String,
    },
    shouldRestoreFocus: {
        title: "Should restore focus",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
