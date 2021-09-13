import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerGroupedListSection = props => {
    return <System.GroupedListSection {...props}></System.GroupedListSection>
}

export const GroupedListSection = withHOC(InnerGroupedListSection)

GroupedListSection.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(GroupedListSection, {
    compact: {
        title: "Compact",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    groupIndex: {
        title: "Group index",
        type: ControlType.Number,
    },
    groupNestingDepth: {
        title: "Group nesting depth",
        type: ControlType.Number,
    },
    selectionMode: {
        title: "Selection mode",
        type: ControlType.Number,
    },
})
