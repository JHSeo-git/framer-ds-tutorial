import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerMessageBarBase = props => {
    return <System.MessageBarBase {...props}></System.MessageBarBase>
}

export const MessageBarBase = withHOC(InnerMessageBarBase)

MessageBarBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(MessageBarBase, {
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
