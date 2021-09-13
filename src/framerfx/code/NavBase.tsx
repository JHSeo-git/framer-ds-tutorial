import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerNavBase = props => {
    return <System.NavBase {...props}></System.NavBase>
}

export const NavBase = withHOC(InnerNavBase)

NavBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(NavBase, {
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
