import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerFacepile = props => {
    return <System.Facepile {...props}></System.Facepile>
}

export const Facepile = withHOC(InnerFacepile)

Facepile.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Facepile, {
    showTooltip: {
        title: "Show tooltip",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    maxDisplayablePersonas: {
        title: "Max displayable personas",
        type: ControlType.Number,
    },
    personaSize: {
        title: "Persona size",
        type: ControlType.Number,
    },
    showAddButton: {
        title: "Show add button",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    overflowButtonType: {
        title: "Overflow button type",
        type: ControlType.Number,
    },
})
