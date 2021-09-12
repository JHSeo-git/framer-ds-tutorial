import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerGroupedList = props => {
    return <System.GroupedList {...props}></System.GroupedList>
}

export const GroupedList = withHOC(InnerGroupedList)

GroupedList.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(GroupedList, {
    compact: {
        title: "Compact",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    role: {
        title: "Role",
        type: ControlType.String,
    },
    selectionMode: {
        title: "Selection mode",
        type: ControlType.Number,
    },
    usePageCache: {
        title: "Use page cache",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})