import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerLabelBase = props => {
    return <System.LabelBase {...props}></System.LabelBase>
}

export const LabelBase = withHOC(InnerLabelBase)

LabelBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(LabelBase, {
    required: {
        title: "Required",
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
