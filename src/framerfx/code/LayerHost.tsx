import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerLayerHost = props => {
    return <System.LayerHost {...props}></System.LayerHost>
}

export const LayerHost = withHOC(InnerLayerHost)

LayerHost.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(LayerHost, {
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
