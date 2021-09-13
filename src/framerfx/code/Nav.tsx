import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerNav = props => {
    return <System.Nav {...props}></System.Nav>
}

export const Nav = withHOC(InnerNav)

Nav.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Nav, {
    isOnTop: {
        title: "Is on top",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    initialSelectedKey: {
        title: "Initial selected key",
        type: ControlType.String,
    },
    selectedKey: {
        title: "Selected key",
        type: ControlType.String,
    },
})
