import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerShimmerElementsGroupBase = props => {
    return <System.ShimmerElementsGroupBase {...props}></System.ShimmerElementsGroupBase>
}

export const ShimmerElementsGroupBase = withHOC(InnerShimmerElementsGroupBase)

ShimmerElementsGroupBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ShimmerElementsGroupBase, {
    rowHeight: {
        title: "Row height",
        type: ControlType.Number,
    },
    flexWrap: {
        title: "Flex wrap",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    width: {
        title: "Width",
        type: ControlType.String,
    },
    backgroundColor: {
        title: "Background color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    checked: {
        title: "Checked",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
