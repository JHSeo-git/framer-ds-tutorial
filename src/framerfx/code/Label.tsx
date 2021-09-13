import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerLabel = props => {
    return <System.Label {...props}></System.Label>
}

export const Label = withHOC(InnerLabel)

Label.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Label, {
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
