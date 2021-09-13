import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerDetailsRowFields = props => {
    return <System.DetailsRowFields {...props}></System.DetailsRowFields>
}

export const DetailsRowFields = withHOC(InnerDetailsRowFields)

DetailsRowFields.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(DetailsRowFields, {
    itemIndex: {
        title: "Item index",
        type: ControlType.Number,
    },
    columnStartIndex: {
        title: "Column start index",
        type: ControlType.Number,
    },
    compact: {
        title: "Compact",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    rowHeaderId: {
        title: "Row header id",
        type: ControlType.String,
    },
    enableUpdateAnimations: {
        title: "Enable update animations",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
