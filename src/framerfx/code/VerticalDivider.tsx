import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerVerticalDivider = props => {
    return <System.VerticalDivider {...props}></System.VerticalDivider>
}

export const VerticalDivider = withHOC(InnerVerticalDivider)

VerticalDivider.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(VerticalDivider, {})
