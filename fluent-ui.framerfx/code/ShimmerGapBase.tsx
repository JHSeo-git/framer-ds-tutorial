import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerShimmerGapBase = props => {
    return <System.ShimmerGapBase {...props}></System.ShimmerGapBase>
}

export const ShimmerGapBase = withHOC(InnerShimmerGapBase)

ShimmerGapBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ShimmerGapBase, {
    height: {
        title: "Height",
        type: ControlType.Number,
    },
    width: {
        title: "Width",
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
