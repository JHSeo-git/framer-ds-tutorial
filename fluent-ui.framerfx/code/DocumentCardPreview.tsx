import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerDocumentCardPreview = props => {
    return <System.DocumentCardPreview {...props}></System.DocumentCardPreview>
}

export const DocumentCardPreview = withHOC(InnerDocumentCardPreview)

DocumentCardPreview.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(DocumentCardPreview, {})
