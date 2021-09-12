import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerImageIcon = props => {
    return <System.ImageIcon {...props}></System.ImageIcon>
}

export const ImageIcon = withHOC(InnerImageIcon)

ImageIcon.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ImageIcon, {
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
