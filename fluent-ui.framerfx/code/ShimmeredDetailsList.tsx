import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerShimmeredDetailsList = props => {
    return <System.ShimmeredDetailsList {...props}></System.ShimmeredDetailsList>
}

export const ShimmeredDetailsList = withHOC(InnerShimmeredDetailsList)

ShimmeredDetailsList.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ShimmeredDetailsList, {
    enableShimmer: {
        title: "Enable shimmer",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    removeFadingOverlay: {
        title: "Remove fading overlay",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    shimmerLines: {
        title: "Shimmer lines",
        type: ControlType.Number,
    },
    setKey: {
        title: "Set key",
        type: ControlType.String,
    },
    isPlaceholderData: {
        title: "Is placeholder data",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    initialFocusedIndex: {
        title: "Initial focused index",
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
    selectionPreservedOnEmptyClick: {
        title: "Selection preserved on empty click",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    layoutMode: {
        title: "Layout mode",
        type: ControlType.Number,
    },
    checkboxVisibility: {
        title: "Checkbox visibility",
        type: ControlType.Number,
    },
    isHeaderVisible: {
        title: "Is header visible",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    constrainMode: {
        title: "Constrain mode",
        type: ControlType.Number,
    },
    flexMargin: {
        title: "Flex margin",
        type: ControlType.Number,
    },
    shouldApplyApplicationRole: {
        title: "Should apply application role",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    minimumPixelsForDrag: {
        title: "Minimum pixels for drag",
        type: ControlType.Number,
    },
    compact: {
        title: "Compact",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    usePageCache: {
        title: "Use page cache",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    checkboxCellClassName: {
        title: "Checkbox cell class name",
        type: ControlType.String,
    },
    enterModalSelectionOnTouch: {
        title: "Enter modal selection on touch",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    useReducedRowRenderer: {
        title: "Use reduced row renderer",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    disableSelectionZone: {
        title: "Disable selection zone",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    enableUpdateAnimations: {
        title: "Enable update animations",
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
    skipViewportMeasures: {
        title: "Skip viewport measures",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    disableResizeObserver: {
        title: "Disable resize observer",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
