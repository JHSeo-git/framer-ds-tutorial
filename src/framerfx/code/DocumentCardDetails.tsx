import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerDocumentCardDetails = props => {
    return <System.DocumentCardDetails {...props}></System.DocumentCardDetails>
}

export const DocumentCardDetails = withHOC(InnerDocumentCardDetails)

DocumentCardDetails.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(DocumentCardDetails, {})
