import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerDetailsColumnBase = props => {
    return <System.DetailsColumnBase {...props}></System.DetailsColumnBase>
}

export const DetailsColumnBase = withHOC(InnerDetailsColumnBase)

DetailsColumnBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(DetailsColumnBase, {
    columnIndex: {
        title: "Column index",
        type: ControlType.Number,
    },
    parentId: {
        title: "Parent id",
        type: ControlType.String,
    },
    isDraggable: {
        title: "Is draggable",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isDropped: {
        title: "Is dropped",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    useFastIcons: {
        title: "Use fast icons",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
