import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerIconBase = props => {
    return <System.IconBase {...props}></System.IconBase>
}

export const IconBase = withHOC(InnerIconBase)

IconBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(IconBase, {
    iconName: {
        title: "Icon name",
        type: ControlType.String,
    },
    iconType: {
        title: "Icon type",
        type: ControlType.Number,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
