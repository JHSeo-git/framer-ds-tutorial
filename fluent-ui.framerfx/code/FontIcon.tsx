import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerFontIcon = props => {
    return <System.FontIcon {...props}></System.FontIcon>
}

export const FontIcon = withHOC(InnerFontIcon)

FontIcon.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(FontIcon, {
    iconName: {
        title: "Icon name",
        type: ControlType.String,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
