import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerContextualMenu = props => {
    return <System.ContextualMenu {...props}></System.ContextualMenu>
}

export const ContextualMenu = withHOC(InnerContextualMenu)

ContextualMenu.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ContextualMenu, {
    target: {
        title: "Target",
        type: ControlType.String,
    },
    directionalHint: {
        title: "Directional hint",
        type: ControlType.Number,
    },
    directionalHintForRTL: {
        title: "Directional hint for rtl",
        type: ControlType.Number,
    },
    gapSpace: {
        title: "Gap space",
        type: ControlType.Number,
    },
    beakWidth: {
        title: "Beak width",
        type: ControlType.Number,
    },
    useTargetWidth: {
        title: "Use target width",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    useTargetAsMinWidth: {
        title: "Use target as min width",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isBeakVisible: {
        title: "Is beak visible",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    coverTarget: {
        title: "Cover target",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    alignTargetEdge: {
        title: "Align target edge",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    labelElementId: {
        title: "Label element id",
        type: ControlType.String,
        defaultValue: "labelElementId",
    },
    shouldFocusOnMount: {
        title: "Should focus on mount",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    shouldFocusOnContainer: {
        title: "Should focus on container",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isSubMenu: {
        title: "Is sub menu",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    doNotLayer: {
        title: "Do not layer",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    directionalHintFixed: {
        title: "Directional hint fixed",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    title: {
        title: "Title",
        type: ControlType.String,
        defaultValue: "title",
    },
    subMenuHoverDelay: {
        title: "Sub menu hover delay",
        type: ControlType.Number,
    },
    hidden: {
        title: "Hidden",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    shouldUpdateWhenHidden: {
        title: "Should update when hidden",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    delayUpdateFocusOnHover: {
        title: "Delay update focus on hover",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    responsiveMode: {
        title: "Responsive mode",
        type: ControlType.Number,
    },
})
