import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerShimmer = props => {
    return <System.Shimmer {...props}></System.Shimmer>
}

export const Shimmer = withHOC(InnerShimmer)

Shimmer.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Shimmer, {
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
