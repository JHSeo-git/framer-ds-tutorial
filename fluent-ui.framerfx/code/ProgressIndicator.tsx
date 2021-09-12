import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerProgressIndicator = props => {
    return <System.ProgressIndicator {...props}></System.ProgressIndicator>
}

export const ProgressIndicator = withHOC(InnerProgressIndicator)

ProgressIndicator.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ProgressIndicator, {
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
