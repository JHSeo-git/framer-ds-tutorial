import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTeachingBubbleBase = props => {
    return <System.TeachingBubbleBase {...props}></System.TeachingBubbleBase>
}

export const TeachingBubbleBase = withHOC(InnerTeachingBubbleBase)

TeachingBubbleBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TeachingBubbleBase, {
    headline: {
        title: "Headline",
        type: ControlType.String,
    },
    hasCondensedHeadline: {
        title: "Has condensed headline",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    hasCloseIcon: {
        title: "Has close icon",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    hasCloseButton: {
        title: "Has close button",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    footerContent: {
        title: "Footer content",
        type: ControlType.String,
    },
    target: {
        title: "Target",
        type: ControlType.String,
    },
    isWide: {
        title: "Is wide",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    hasSmallHeadline: {
        title: "Has small headline",
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
    isClickableOutsideFocusTrap: {
        title: "Is clickable outside focus trap",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
