import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerCoachmarkBase = props => {
    return <System.CoachmarkBase {...props}></System.CoachmarkBase>
}

export const CoachmarkBase = withHOC(InnerCoachmarkBase)

CoachmarkBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(CoachmarkBase, {
    target: {
        title: "Target",
        type: ControlType.String,
    },
    isPositionForced: {
        title: "Is position forced",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    collapsed: {
        title: "Collapsed",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isCollapsed: {
        title: "Is collapsed",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    mouseProximityOffset: {
        title: "Mouse proximity offset",
        type: ControlType.Number,
    },
    beakWidth: {
        title: "Beak width",
        type: ControlType.Number,
    },
    beakHeight: {
        title: "Beak height",
        type: ControlType.Number,
    },
    delayBeforeMouseOpen: {
        title: "Delay before mouse open",
        type: ControlType.Number,
    },
    delayBeforeCoachmarkAnimation: {
        title: "Delay before coachmark animation",
        type: ControlType.Number,
    },
    width: {
        title: "Width",
        type: ControlType.Number,
    },
    height: {
        title: "Height",
        type: ControlType.Number,
    },
    color: {
        title: "Color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    beaconColorOne: {
        title: "Beacon color one",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    beaconColorTwo: {
        title: "Beacon color two",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    preventDismissOnLostFocus: {
        title: "Prevent dismiss on lost focus",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    persistentBeak: {
        title: "Persistent beak",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    preventFocusOnMount: {
        title: "Prevent focus on mount",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
