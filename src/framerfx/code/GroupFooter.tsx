import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerGroupFooter = props => {
    return <System.GroupFooter {...props}></System.GroupFooter>
}

export const GroupFooter = withHOC(InnerGroupFooter)

GroupFooter.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(GroupFooter, {
    compact: {
        title: "Compact",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    loadingText: {
        title: "Loading text",
        type: ControlType.String,
        defaultValue: "loadingText",
    },
    groupIndex: {
        title: "Group index",
        type: ControlType.Number,
    },
    groupLevel: {
        title: "Group level",
        type: ControlType.Number,
    },
    indentWidth: {
        title: "Indent width",
        type: ControlType.Number,
    },
    selected: {
        title: "Selected",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isSelected: {
        title: "Is selected",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    selectionMode: {
        title: "Selection mode",
        type: ControlType.Number,
    },
    footerText: {
        title: "Footer text",
        type: ControlType.String,
        defaultValue: "footerText",
    },
    showAllLinkText: {
        title: "Show all link text",
        type: ControlType.String,
        defaultValue: "showAllLinkText",
    },
    isCollapsedGroupSelectVisible: {
        title: "Is collapsed group select visible",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
