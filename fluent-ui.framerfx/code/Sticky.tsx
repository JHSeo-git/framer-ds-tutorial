import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSticky = props => {
    return <System.Sticky {...props}></System.Sticky>
}

export const Sticky = withHOC(InnerSticky)

Sticky.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Sticky, {
    stickyClassName: {
        title: "Sticky class name",
        type: ControlType.String,
    },
    stickyBackgroundColor: {
        title: "Sticky background color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    stickyPosition: {
        title: "Sticky position",
        type: ControlType.Number,
    },
    isScrollSynced: {
        title: "Is scroll synced",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
