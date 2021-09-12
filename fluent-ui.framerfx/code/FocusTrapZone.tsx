import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerFocusTrapZone = props => {
    return <System.FocusTrapZone {...props}></System.FocusTrapZone>
}

export const FocusTrapZone = withHOC(InnerFocusTrapZone)

FocusTrapZone.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(FocusTrapZone, {
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isClickableOutsideFocusTrap: {
        title: "Is clickable outside focus trap",
        type: ControlType.Boolean,
        defaultValue: false,
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
    firstFocusableTarget: {
        title: "First focusable target",
        type: ControlType.String,
    },
    disableFirstFocus: {
        title: "Disable first focus",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    focusPreviouslyFocusedInnerElement: {
        title: "Focus previously focused inner element",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
