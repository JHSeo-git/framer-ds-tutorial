import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerDocumentCardTitle = props => {
    return <System.DocumentCardTitle {...props}></System.DocumentCardTitle>
}

export const DocumentCardTitle = withHOC(InnerDocumentCardTitle)

DocumentCardTitle.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(DocumentCardTitle, {
    title: {
        title: "Title",
        type: ControlType.String,
        defaultValue: "title",
    },
    shouldTruncate: {
        title: "Should truncate",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    showAsSecondaryTitle: {
        title: "Show as secondary title",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
