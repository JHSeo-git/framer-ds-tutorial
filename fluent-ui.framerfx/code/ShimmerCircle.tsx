import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerShimmerCircle = props => {
    return <System.ShimmerCircle {...props}></System.ShimmerCircle>
}

export const ShimmerCircle = withHOC(InnerShimmerCircle)

ShimmerCircle.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ShimmerCircle, {
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
