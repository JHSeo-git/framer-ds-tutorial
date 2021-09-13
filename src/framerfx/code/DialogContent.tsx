import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerDialogContent = props => {
    return <System.DialogContent {...props}></System.DialogContent>
}

export const DialogContent = withHOC(InnerDialogContent)

DialogContent.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(DialogContent, {
    isMultiline: {
        title: "Is multiline",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    showCloseButton: {
        title: "Show close button",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    subTextId: {
        title: "Sub text id",
        type: ControlType.String,
        defaultValue: "subTextId",
    },
    subText: {
        title: "Sub text",
        type: ControlType.String,
        defaultValue: "subText",
    },
    titleId: {
        title: "Title id",
        type: ControlType.String,
        defaultValue: "titleId",
    },
    title: {
        title: "Title",
        type: ControlType.String,
        defaultValue: "title",
    },
    responsiveMode: {
        title: "Responsive mode",
        type: ControlType.Number,
    },
    type: {
        title: "Type",
        type: ControlType.Number,
    },
    draggableHeaderClassName: {
        title: "Draggable header class name",
        type: ControlType.String,
    },
})
