import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerDialogBase = props => {
    return <System.DialogBase {...props}></System.DialogBase>
}

export const DialogBase = withHOC(InnerDialogBase)

DialogBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(DialogBase, {
    hidden: {
        title: "Hidden",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isOpen: {
        title: "Is open",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isDarkOverlay: {
        title: "Is dark overlay",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isBlocking: {
        title: "Is blocking",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    containerClassName: {
        title: "Container class name",
        type: ControlType.String,
    },
    type: {
        title: "Type",
        type: ControlType.Number,
    },
    title: {
        title: "Title",
        type: ControlType.String,
        defaultValue: "title",
    },
    subText: {
        title: "Sub text",
        type: ControlType.String,
        defaultValue: "subText",
    },
    contentClassName: {
        title: "Content class name",
        type: ControlType.String,
    },
    minWidth: {
        title: "Min width",
        type: ControlType.String,
    },
    maxWidth: {
        title: "Max width",
        type: ControlType.String,
    },
    responsiveMode: {
        title: "Responsive mode",
        type: ControlType.Number,
    },
    ignoreExternalFocusing: {
        title: "Ignore external focusing",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    forceFocusInsideTrap: {
        title: "Force focus inside trap",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    firstFocusableSelector: {
        title: "First focusable selector",
        type: ControlType.String,
    },
    isClickableOutsideFocusTrap: {
        title: "Is clickable outside focus trap",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
