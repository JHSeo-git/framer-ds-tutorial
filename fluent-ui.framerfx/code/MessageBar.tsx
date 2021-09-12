import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerMessageBar = props => {
    return <System.MessageBar {...props}></System.MessageBar>
}

export const MessageBar = withHOC(InnerMessageBar)

MessageBar.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(MessageBar, {
    messageBarType: {
        title: "Message bar type",
        type: ControlType.Number,
    },
    isMultiline: {
        title: "Is multiline",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    truncated: {
        title: "Truncated",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
