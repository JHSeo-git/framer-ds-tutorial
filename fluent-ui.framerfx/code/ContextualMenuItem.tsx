import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerContextualMenuItem = props => {
    return <System.ContextualMenuItem {...props}></System.ContextualMenuItem>
}

export const ContextualMenuItem = withHOC(InnerContextualMenuItem)

ContextualMenuItem.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ContextualMenuItem, {
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
