import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerDocumentCardActions = props => {
    return <System.DocumentCardActions {...props}></System.DocumentCardActions>
}

export const DocumentCardActions = withHOC(InnerDocumentCardActions)

DocumentCardActions.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(DocumentCardActions, {})
