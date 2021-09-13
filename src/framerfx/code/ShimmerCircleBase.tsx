import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerShimmerCircleBase = props => {
    return <System.ShimmerCircleBase {...props}></System.ShimmerCircleBase>
}

export const ShimmerCircleBase = withHOC(InnerShimmerCircleBase)

ShimmerCircleBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ShimmerCircleBase, {
    height: {
        title: "Height",
        type: ControlType.Number,
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
