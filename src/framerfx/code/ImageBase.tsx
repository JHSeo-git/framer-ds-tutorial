import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerImageBase = props => {
    return <System.ImageBase {...props}></System.ImageBase>
}

export const ImageBase = withHOC(InnerImageBase)

ImageBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ImageBase, {
    shouldFadeIn: {
        title: "Should fade in",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    shouldStartVisible: {
        title: "Should start visible",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    imageFit: {
        title: "Image fit",
        type: ControlType.Number,
    },
    errorSrc: {
        title: "Error src",
        type: ControlType.String,
    },
    maximizeFrame: {
        title: "Maximize frame",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    coverStyle: {
        title: "Cover style",
        type: ControlType.Number,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
