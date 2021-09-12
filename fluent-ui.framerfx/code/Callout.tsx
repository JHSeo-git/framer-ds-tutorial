import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerCallout = props => {
    return <System.Callout {...props}></System.Callout>
}

export const Callout = withHOC(InnerCallout)

Callout.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Callout, {
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
    calloutWidth: {
        title: "Callout width",
        type: ControlType.Number,
    },
    calloutMaxWidth: {
        title: "Callout max width",
        type: ControlType.Number,
    },
    calloutMinWidth: {
        title: "Callout min width",
        type: ControlType.Number,
    },
    backgroundColor: {
        title: "Background color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    minPagePadding: {
        title: "Min page padding",
        type: ControlType.Number,
    },
    isBeakVisible: {
        title: "Is beak visible",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    preventDismissOnScroll: {
        title: "Prevent dismiss on scroll",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    preventDismissOnResize: {
        title: "Prevent dismiss on resize",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    preventDismissOnLostFocus: {
        title: "Prevent dismiss on lost focus",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    dismissOnTargetClick: {
        title: "Dismiss on target click",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    shouldDismissOnWindowFocus: {
        title: "Should dismiss on window focus",
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
    role: {
        title: "Role",
        type: ControlType.String,
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
    finalHeight: {
        title: "Final height",
        type: ControlType.Number,
    },
    hideOverflow: {
        title: "Hide overflow",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    setInitialFocus: {
        title: "Set initial focus",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    calloutMaxHeight: {
        title: "Callout max height",
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
    shouldRestoreFocus: {
        title: "Should restore focus",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
