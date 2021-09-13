import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSelectionZone = props => {
    return <System.SelectionZone {...props}></System.SelectionZone>
}

export const SelectionZone = withHOC(InnerSelectionZone)

SelectionZone.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SelectionZone, {
    selectionMode: {
        title: "Selection mode",
        type: ControlType.Number,
    },
    selectionPreservedOnEmptyClick: {
        title: "Selection preserved on empty click",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    disableAutoSelectOnInputElements: {
        title: "Disable auto select on input elements",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    enterModalOnTouch: {
        title: "Enter modal on touch",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    enableTouchInvocationTarget: {
        title: "Enable touch invocation target",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isSelectedOnFocus: {
        title: "Is selected on focus",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
