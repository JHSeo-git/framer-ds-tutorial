import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerDocumentCardStatus = props => {
    return <System.DocumentCardStatus {...props}></System.DocumentCardStatus>
}

export const DocumentCardStatus = withHOC(InnerDocumentCardStatus)

DocumentCardStatus.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(DocumentCardStatus, {
    statusIcon: {
        title: "Status icon",
        type: ControlType.String,
    },
    status: {
        title: "Status",
        type: ControlType.String,
    },
})
