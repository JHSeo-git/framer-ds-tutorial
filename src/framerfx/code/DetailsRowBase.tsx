import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerDetailsRowBase = props => {
    return <System.DetailsRowBase {...props}></System.DetailsRowBase>
}

export const DetailsRowBase = withHOC(InnerDetailsRowBase)

DetailsRowBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(DetailsRowBase, {
    itemIndex: {
        title: "Item index",
        type: ControlType.Number,
    },
    compact: {
        title: "Compact",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    collapseAllVisibility: {
        title: "Collapse all visibility",
        type: ControlType.Number,
    },
    checkboxCellClassName: {
        title: "Checkbox cell class name",
        type: ControlType.String,
    },
    enableUpdateAnimations: {
        title: "Enable update animations",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    useReducedRowRenderer: {
        title: "Use reduced row renderer",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    useFastIcons: {
        title: "Use fast icons",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    role: {
        title: "Role",
        type: ControlType.String,
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
