import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerCheck = props => {
    return <System.Check {...props}></System.Check>
}

export const Check = withHOC(InnerCheck)

Check.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Check, {
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
