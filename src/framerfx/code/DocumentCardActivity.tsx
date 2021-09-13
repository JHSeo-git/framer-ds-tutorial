import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerDocumentCardActivity = props => {
    return <System.DocumentCardActivity {...props}></System.DocumentCardActivity>
}

export const DocumentCardActivity = withHOC(InnerDocumentCardActivity)

DocumentCardActivity.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(DocumentCardActivity, {
    activity: {
        title: "Activity",
        type: ControlType.String,
    },
})
