import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerPanel = props => {
    return <System.Panel {...props}></System.Panel>
}

export const Panel = withHOC(InnerPanel)

Panel.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Panel, {
    isOpen: {
        title: "Is open",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    hasCloseButton: {
        title: "Has close button",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isLightDismiss: {
        title: "Is light dismiss",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isHiddenOnDismiss: {
        title: "Is hidden on dismiss",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isBlocking: {
        title: "Is blocking",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isFooterAtBottom: {
        title: "Is footer at bottom",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    headerText: {
        title: "Header text",
        type: ControlType.String,
        defaultValue: "headerText",
    },
    type: {
        title: "Type",
        type: ControlType.Number,
    },
    customWidth: {
        title: "Custom width",
        type: ControlType.String,
    },
    headerClassName: {
        title: "Header class name",
        type: ControlType.String,
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
    componentId: {
        title: "Component id",
        type: ControlType.String,
    },
    allowTouchBodyScroll: {
        title: "Allow touch body scroll",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
