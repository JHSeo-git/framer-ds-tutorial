import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerKeytipLayer = props => {
    return <System.KeytipLayer {...props}></System.KeytipLayer>
}

export const KeytipLayer = withHOC(InnerKeytipLayer)

KeytipLayer.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(KeytipLayer, {
    content: {
        title: "Content",
        type: ControlType.String,
    },
})
