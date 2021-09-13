import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerCheckBase = props => {
    return <System.CheckBase {...props}></System.CheckBase>
}

export const CheckBase = withHOC(InnerCheckBase)

CheckBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(CheckBase, {
    checked: {
        title: "Checked",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    alwaysShowCheck: {
        title: "Always show check",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    useFastIcons: {
        title: "Use fast icons",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
