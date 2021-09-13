import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerDetailsHeaderBase = props => {
    return <System.DetailsHeaderBase {...props}></System.DetailsHeaderBase>
}

export const DetailsHeaderBase = withHOC(InnerDetailsHeaderBase)

DetailsHeaderBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(DetailsHeaderBase, {
    layoutMode: {
        title: "Layout mode",
        type: ControlType.Number,
    },
    collapseAllVisibility: {
        title: "Collapse all visibility",
        type: ControlType.Number,
    },
    isAllCollapsed: {
        title: "Is all collapsed",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    selectAllVisibility: {
        title: "Select all visibility",
        type: ControlType.Number,
    },
    minimumPixelsForDrag: {
        title: "Minimum pixels for drag",
        type: ControlType.Number,
    },
    useFastIcons: {
        title: "Use fast icons",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    groupNestingDepth: {
        title: "Group nesting depth",
        type: ControlType.Number,
    },
    indentWidth: {
        title: "Indent width",
        type: ControlType.Number,
    },
    selectionMode: {
        title: "Selection mode",
        type: ControlType.Number,
    },
    checkboxVisibility: {
        title: "Checkbox visibility",
        type: ControlType.Number,
    },
    rowWidth: {
        title: "Row width",
        type: ControlType.Number,
    },
})
