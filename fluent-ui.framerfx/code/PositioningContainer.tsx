import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerPositioningContainer = props => {
    return <System.PositioningContainer {...props}></System.PositioningContainer>
}

export const PositioningContainer = withHOC(InnerPositioningContainer)

PositioningContainer.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(PositioningContainer, {
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
    offsetFromTarget: {
        title: "Offset from target",
        type: ControlType.Number,
    },
    positioningContainerWidth: {
        title: "Positioning container width",
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
    useTargetPoint: {
        title: "Use target point",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    preventDismissOnScroll: {
        title: "Prevent dismiss on scroll",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    coverTarget: {
        title: "Cover target",
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
    setInitialFocus: {
        title: "Set initial focus",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    positioningContainerMaxHeight: {
        title: "Positioning container max height",
        type: ControlType.Number,
    },
})
