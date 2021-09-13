import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerKeytipData = props => {
    return <System.KeytipData {...props}></System.KeytipData>
}

export const KeytipData = withHOC(InnerKeytipData)

KeytipData.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(KeytipData, {
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
