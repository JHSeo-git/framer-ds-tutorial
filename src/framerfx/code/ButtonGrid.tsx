import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerButtonGrid = props => {
    return <System.ButtonGrid {...props}></System.ButtonGrid>
}

export const ButtonGrid = withHOC(InnerButtonGrid)

ButtonGrid.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ButtonGrid, {
    columnCount: {
        title: "Column count",
        type: ControlType.Number,
    },
    shouldFocusCircularNavigate: {
        title: "Should focus circular navigate",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    doNotContainWithinFocusZone: {
        title: "Do not contain within focus zone",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    containerClassName: {
        title: "Container class name",
        type: ControlType.String,
    },
    positionInSet: {
        title: "Position in set",
        type: ControlType.Number,
    },
    setSize: {
        title: "Set size",
        type: ControlType.Number,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
