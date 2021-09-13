import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerDocumentCardImage = props => {
    return <System.DocumentCardImage {...props}></System.DocumentCardImage>
}

export const DocumentCardImage = withHOC(InnerDocumentCardImage)

DocumentCardImage.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(DocumentCardImage, {
    imageSrc: {
        title: "Image src",
        type: ControlType.String,
    },
    width: {
        title: "Width",
        type: ControlType.Number,
    },
    height: {
        title: "Height",
        type: ControlType.Number,
    },
    imageFit: {
        title: "Image fit",
        type: ControlType.Number,
    },
})
