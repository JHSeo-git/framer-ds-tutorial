import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerProgressIndicatorBase = props => {
    return <System.ProgressIndicatorBase {...props}></System.ProgressIndicatorBase>
}

export const ProgressIndicatorBase = withHOC(InnerProgressIndicatorBase)

ProgressIndicatorBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ProgressIndicatorBase, {
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "label",
    },
    description: {
        title: "Description",
        type: ControlType.String,
        defaultValue: "description",
    },
    percentComplete: {
        title: "Percent complete",
        type: ControlType.Number,
    },
    progressHidden: {
        title: "Progress hidden",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    title: {
        title: "Title",
        type: ControlType.String,
        defaultValue: "title",
    },
    barHeight: {
        title: "Bar height",
        type: ControlType.Number,
    },
})
