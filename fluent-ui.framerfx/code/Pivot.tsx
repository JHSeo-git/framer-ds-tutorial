import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerPivot = props => {
    return <System.Pivot {...props}></System.Pivot>
}

export const Pivot = withHOC(InnerPivot)

Pivot.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Pivot, {
    defaultSelectedKey: {
        title: "Default selected key",
        type: ControlType.String,
    },
    defaultSelectedIndex: {
        title: "Default selected index",
        type: ControlType.Number,
    },
    initialSelectedIndex: {
        title: "Initial selected index",
        type: ControlType.Number,
    },
    initialSelectedKey: {
        title: "Initial selected key",
        type: ControlType.String,
    },
    selectedKey: {
        title: "Selected key",
        type: ControlType.String,
    },
    linkSize: {
        title: "Link size",
        type: ControlType.Number,
    },
    linkFormat: {
        title: "Link format",
        type: ControlType.Number,
    },
    headersOnly: {
        title: "Headers only",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
