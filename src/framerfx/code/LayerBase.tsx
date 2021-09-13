import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerLayerBase = props => {
    return <System.LayerBase {...props}></System.LayerBase>
}

export const LayerBase = withHOC(InnerLayerBase)

LayerBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(LayerBase, {
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
