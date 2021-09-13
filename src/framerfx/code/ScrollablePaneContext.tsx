import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerScrollablePaneContext = props => {
    return <System.ScrollablePaneContext {...props}></System.ScrollablePaneContext>
}

export const ScrollablePaneContext = withHOC(InnerScrollablePaneContext)

ScrollablePaneContext.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ScrollablePaneContext, {})
