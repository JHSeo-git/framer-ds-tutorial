import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerResizeGroupBase = props => {
    return <System.ResizeGroupBase {...props}></System.ResizeGroupBase>
}

export const ResizeGroupBase = withHOC(InnerResizeGroupBase)

ResizeGroupBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ResizeGroupBase, {
    direction: {
        title: "Direction",
        type: ControlType.Number,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
