import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerLayer = props => {
    return <System.Layer {...props}></System.Layer>
}

export const Layer = withHOC(InnerLayer)

Layer.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Layer, {
    hostId: {
        title: "Host id",
        type: ControlType.String,
    },
    eventBubblingEnabled: {
        title: "Event bubbling enabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    insertFirst: {
        title: "Insert first",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
