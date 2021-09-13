import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerModal = props => {
    return <System.Modal {...props}></System.Modal>
}

export const Modal = withHOC(InnerModal)

Modal.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Modal, {
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
    isModeless: {
        title: "Is modeless",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    containerClassName: {
        title: "Container class name",
        type: ControlType.String,
    },
    scrollableContentClassName: {
        title: "Scrollable content class name",
        type: ControlType.String,
    },
    topOffsetFixed: {
        title: "Top offset fixed",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    allowTouchBodyScroll: {
        title: "Allow touch body scroll",
        type: ControlType.Boolean,
        defaultValue: false,
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
