import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerDetailsRowCheck = props => {
    return <System.DetailsRowCheck {...props}></System.DetailsRowCheck>
}

export const DetailsRowCheck = withHOC(InnerDetailsRowCheck)

DetailsRowCheck.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(DetailsRowCheck, {
    isHeader: {
        title: "Is header",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    selected: {
        title: "Selected",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    anySelected: {
        title: "Any selected",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    canSelect: {
        title: "Can select",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    compact: {
        title: "Compact",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    checkClassName: {
        title: "Check class name",
        type: ControlType.String,
    },
    isVisible: {
        title: "Is visible",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    useFastIcons: {
        title: "Use fast icons",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
