import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerCommandBarBase = props => {
    return <System.CommandBarBase {...props}></System.CommandBarBase>
}

export const CommandBarBase = withHOC(InnerCommandBarBase)

CommandBarBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(CommandBarBase, {
    shiftOnReduce: {
        title: "Shift on reduce",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
