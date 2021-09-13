import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerIcon = props => {
    return <System.Icon {...props}></System.Icon>
}

export const Icon = withHOC(InnerIcon)

Icon.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Icon, {
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
