import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerContextualMenuItemBase = props => {
    return <System.ContextualMenuItemBase {...props}></System.ContextualMenuItemBase>
}

export const ContextualMenuItemBase = withHOC(InnerContextualMenuItemBase)

ContextualMenuItemBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ContextualMenuItemBase, {
    index: {
        title: "Index",
        type: ControlType.Number,
    },
    hasIcons: {
        title: "Has icons",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
