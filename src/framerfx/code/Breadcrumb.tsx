import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerBreadcrumb = props => {
    return <System.Breadcrumb {...props}></System.Breadcrumb>
}

export const Breadcrumb = withHOC(InnerBreadcrumb)

Breadcrumb.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Breadcrumb, {
    maxDisplayedItems: {
        title: "Max displayed items",
        type: ControlType.Number,
    },
    overflowIndex: {
        title: "Overflow index",
        type: ControlType.Number,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
