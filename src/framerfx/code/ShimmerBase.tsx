import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerShimmerBase = props => {
    return <System.ShimmerBase {...props}></System.ShimmerBase>
}

export const ShimmerBase = withHOC(InnerShimmerBase)

ShimmerBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ShimmerBase, {
    width: {
        title: "Width",
        type: ControlType.String,
    },
    isDataLoaded: {
        title: "Is data loaded",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    customElementsGroup: {
        title: "Custom elements group",
        type: ControlType.String,
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
