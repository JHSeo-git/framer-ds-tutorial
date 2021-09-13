import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerGroupSpacer = props => {
    return <System.GroupSpacer {...props}></System.GroupSpacer>
}

export const GroupSpacer = withHOC(InnerGroupSpacer)

GroupSpacer.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(GroupSpacer, {
    count: {
        title: "Count",
        type: ControlType.Number,
    },
    indentWidth: {
        title: "Indent width",
        type: ControlType.Number,
    },
    role: {
        title: "Role",
        type: ControlType.String,
    },
})
