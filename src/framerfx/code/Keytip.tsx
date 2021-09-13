import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerKeytip = props => {
    return <System.Keytip {...props}></System.Keytip>
}

export const Keytip = withHOC(InnerKeytip)

Keytip.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Keytip, {
    content: {
        title: "Content",
        type: ControlType.String,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    visible: {
        title: "Visible",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    keySequences: {
        title: "Key sequences",
        type: ControlType.Array,
    },
    overflowSetSequence: {
        title: "Overflow set sequence",
        type: ControlType.Array,
    },
    hasDynamicChildren: {
        title: "Has dynamic children",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    hasMenu: {
        title: "Has menu",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
