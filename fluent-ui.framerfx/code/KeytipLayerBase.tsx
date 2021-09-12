import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerKeytipLayerBase = props => {
    return <System.KeytipLayerBase {...props}></System.KeytipLayerBase>
}

export const KeytipLayerBase = withHOC(InnerKeytipLayerBase)

KeytipLayerBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(KeytipLayerBase, {
    content: {
        title: "Content",
        type: ControlType.String,
    },
})
