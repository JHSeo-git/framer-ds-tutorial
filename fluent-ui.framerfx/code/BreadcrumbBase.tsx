import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerBreadcrumbBase = props => {
    return <System.BreadcrumbBase {...props}></System.BreadcrumbBase>
}

export const BreadcrumbBase = withHOC(InnerBreadcrumbBase)

BreadcrumbBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(BreadcrumbBase, {
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
