import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerBasePickerListBelow = props => {
    return <System.BasePickerListBelow {...props}></System.BasePickerListBelow>
}

export const BasePickerListBelow = withHOC(InnerBasePickerListBelow)

BasePickerListBelow.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(BasePickerListBelow, {})
