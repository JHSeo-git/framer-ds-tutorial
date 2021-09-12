import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerCommandBar = props => {
    return <System.CommandBar {...props}></System.CommandBar>
}

export const CommandBar = withHOC(InnerCommandBar)

CommandBar.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(CommandBar, {
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
